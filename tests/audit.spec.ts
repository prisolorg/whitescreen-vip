/**
 * Cross-device bug audit: every tool, colour screen and the homepage on desktop, phone and tablet projects
 * (playwright.config.ts). Each test records what it finds in tests/out/issues/<project>__<page>.json and fails if
 * anything was found, so `npx playwright test --last-failed` re-runs only the broken ones.
 */
import { test, expect, type Page } from '@playwright/test'
import fs from 'node:fs'

type Route = { name: string; path: string; type: string }
type Issue = { check: string; detail: string; sev: 'high' | 'medium' | 'low' }

const routes: Route[] = JSON.parse(fs.readFileSync(new URL('./routes.json', import.meta.url), 'utf8'))
const OUT = new URL('./out/issues/', import.meta.url)
fs.mkdirSync(OUT, { recursive: true })

const THIRD_PARTY = /googlesyndication|doubleclick|adtrafficquality|google-analytics|googletagmanager|adservice|gstatic|fundingchoices|vercel-insights|va\.vercel|adsbygoogle|no_div|accessing a frame with origin|clarity\.ms|bing\.com|recaptcha|csp\.withgoogle/
/** Serverless functions (/api/…) only exist on Vercel, not in `astro preview`. */
const LOCAL_ONLY = /localhost:\d+\/api\//
const TIMERS = new Set(['/countdown-timer/', '/pomodoro-timer/', '/stopwatch/'])
const BARS = ['[data-tight]', 'section[aria-label="Screen controls"]']

/** Counts wake-lock requests and sums layout shifts (Chromium only) from the very first paint. */
const INIT = () => {
  const w = window as unknown as { __wake: number; __cls: number; __shifts: string[] }
  w.__wake = 0
  w.__cls = 0
  w.__shifts = []
  try {
    Object.defineProperty(navigator, 'wakeLock', {
      configurable: true,
      value: {
        request: async () => {
          w.__wake++
          return { released: false, type: 'screen', release: async () => {}, addEventListener() {}, removeEventListener() {}, onrelease: null }
        },
      },
    })
  } catch {}
  try {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as unknown as { value: number; hadRecentInput: boolean; sources?: { node?: Element }[] }[]) {
        if (entry.hadRecentInput) continue
        w.__cls += entry.value
        for (const source of entry.sources ?? []) {
          const node = source.node
          if (node && 'tagName' in node) w.__shifts.push(`${node.tagName.toLowerCase()}.${String(node.className).split(' ').slice(0, 3).join('.')}`.slice(0, 90))
        }
      }
    }).observe({ type: 'layout-shift', buffered: true })
  } catch {}
}

const isFullscreen = (page: Page) =>
  page.evaluate(() => {
    const doc = document as Document & { webkitFullscreenElement?: Element }
    if (doc.fullscreenElement || doc.webkitFullscreenElement) return true
    for (const el of document.querySelectorAll<HTMLElement>('body *')) {
      const style = getComputedStyle(el)
      if (style.position !== 'fixed' || style.display === 'none' || style.visibility === 'hidden' || !el.offsetHeight) continue
      const box = el.getBoundingClientRect()
      if (box.width >= innerWidth - 2 && box.height >= innerHeight - 2) return true
    }
    return false
  })

const overflow = (page: Page) =>
  page.evaluate(() => {
    const extra = document.documentElement.scrollWidth - innerWidth
    if (extra <= 1) return null
    const culprit = [...document.querySelectorAll<HTMLElement>('body *')].find((el) => {
      const box = el.getBoundingClientRect()
      return box.right > innerWidth + 1 && box.width > 0 && getComputedStyle(el).position !== 'fixed'
    })
    return `${extra}px wider than the screen; first culprit: ${culprit ? `${culprit.tagName.toLowerCase()}.${String(culprit.className).split(' ').slice(0, 4).join('.')}` : '?'}`
  })

/** Control bar: still one row, and where it sits (for sampling the stage just above it). */
const barInfo = (page: Page, bar: string) =>
  page.evaluate((selector) => {
    const el = document.querySelector<HTMLElement>(selector)
    if (!el || !el.offsetHeight) return null
    const items: Element[] = []
    const walk = (node: Element) => {
      for (const child of node.children) {
        if (getComputedStyle(child).display === 'contents') walk(child)
        else if ((child as HTMLElement).offsetWidth) items.push(child)
      }
    }
    walk(el)
    const middles = items.map((item) => {
      const box = item.getBoundingClientRect()
      return box.top + box.height / 2
    })
    const box = el.getBoundingClientRect()
    return { oneRow: middles.length === 0 || Math.max(...middles) - Math.min(...middles) < 12, x: box.left + box.width / 2, top: box.top + scrollY, width: box.width }
  }, bar)

/** Background colour of the stage just above the control bar. */
const stageColour = (page: Page, x: number, y: number) =>
  page.evaluate(
    ([px, py]) => {
      let el = document.elementFromPoint(px, py - scrollY) as HTMLElement | null
      while (el) {
        const bg = getComputedStyle(el).backgroundColor
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg + '|' + getComputedStyle(el).filter
        el = el.parentElement
      }
      return null
    },
    [x, y],
  )

for (const route of routes) {
  test(`${route.name} ${route.path}`, async ({ page }, info) => {
    const project = info.project.name
    const desktop = project.startsWith('desktop')
    const touch = Boolean(info.project.use.hasTouch)
    const chromium = info.project.use.defaultBrowserType === 'chromium'
    const issues: Issue[] = []
    const add = (check: string, detail: string, sev: Issue['sev']) => issues.push({ check, detail: detail.slice(0, 220), sev })

    const consoleErrors: string[] = []
    const failed: string[] = []
    // "Failed to load resource" repeats a failed request, which the network check reports with its URL.
    page.on('console', (msg) => msg.type() === 'error' && !msg.text().startsWith('Failed to load resource') && consoleErrors.push(msg.text()))
    // The first stack frame tells our code from ad scripts (AdSense throws bare `undefined` from its own handlers).
    page.on('pageerror', (error) => consoleErrors.push(`Uncaught: ${error.message} @ ${(error.stack ?? '').split('\n').find((line) => line.includes('http')) ?? ''}`.slice(0, 300)))
    page.on('requestfailed', (request) => {
      const reason = request.failure()?.errorText ?? ''
      if (!/ABORTED|cancelled|NS_BINDING_ABORTED/i.test(reason) && !LOCAL_ONLY.test(request.url())) failed.push(`${request.url()} (${reason})`)
    })
    page.on('response', (response) => response.status() >= 400 && !LOCAL_ONLY.test(response.url()) && failed.push(`${response.url()} (HTTP ${response.status()})`))
    await page.addInitScript(INIT)
    // AUDIT_BLOCK_ADS=1: run without AdSense, to tell ad-script errors from the site's own.
    if (process.env.AUDIT_BLOCK_ADS) await page.route(/googlesyndication|doubleclick|adtrafficquality/, (route) => route.abort())

    // 1. Load
    const response = await page.goto(route.path, { waitUntil: 'load' })
    if (!response || response.status() >= 400) add('load', `HTTP ${response?.status()}`, 'high')
    await page.waitForTimeout(2500)

    let bar: string | null = null
    for (const selector of BARS) if (!bar && (await page.locator(selector).count())) bar = selector
    const barData = bar ? await barInfo(page, bar) : null
    if (!['tools', 'backgrounds', 'background'].includes(route.type)) {
      if (!barData) add('controls', 'no control bar found', 'medium')
      else if (!barData.oneRow) add('controls', 'control bar wraps onto 2+ rows', 'medium')
    }

    // 2. Layout: horizontal overflow, CLS
    const over = await overflow(page)
    if (over) add('overflow', over, parseInt(over) > 20 ? 'high' : 'medium')
    if (chromium) {
      const { cls, shifts } = await page.evaluate(() => {
        const w = window as unknown as { __cls: number; __shifts: string[] }
        return { cls: w.__cls, shifts: [...new Set(w.__shifts)].slice(0, 3) }
      })
      if (cls > 0.1) add('CLS', `layout shift ${cls.toFixed(3)} after load; moved: ${shifts.join(', ') || '?'}`, cls > 0.25 ? 'high' : 'medium')
    }

    // 3. Tap targets (phones and tablets): controls in the bar under 44px
    if (touch && bar) {
      const small = await page.evaluate((selector) => {
        const found: string[] = []
        for (const el of document.querySelectorAll<HTMLElement>(`${selector} :is(button, select, a, input:not([type=range]))`)) {
          // A checkbox wrapped in its label is tapped through the whole label.
          const box = (el.matches('input[type=checkbox]') && el.closest('label') ? el.closest('label')! : el).getBoundingClientRect()
          if (!box.width || !box.height || getComputedStyle(el).visibility === 'hidden') continue
          if (box.height < 44 || box.width < 44) found.push(`${(el.getAttribute('aria-label') || el.textContent || el.tagName).trim().slice(0, 18)} ${Math.round(box.width)}×${Math.round(box.height)}`)
        }
        return found
      }, bar)
      if (small.length) add('tap-target', `${small.length} controls under 44px, e.g. ${small.slice(0, 3).join('; ')}`, 'low')
    }

    // 4. Controls change: an option toggle in the bar turns on when clicked
    if (bar) {
      const toggle = page.locator(`${bar} [aria-pressed="false"]:visible, ${bar} [role="radio"][aria-checked="false"]:visible`).first()
      if (await toggle.count()) {
        const attr = (await toggle.getAttribute('aria-pressed')) !== null ? 'aria-pressed' : 'aria-checked'
        const handle = await toggle.elementHandle()
        await toggle.click({ timeout: 4000 }).catch((e) => add('controls', `option click failed: ${String(e).split('\n')[0]}`, 'high'))
        await page.waitForTimeout(400)
        if (handle && (await handle.getAttribute(attr).catch(() => 'true')) !== 'true') add('controls', `clicking an option did not select it (${attr})`, 'high')
      } else {
        const select = page.locator(`${bar} select:visible`).first()
        if (await select.count()) {
          const values = await select.locator('option').evaluateAll((options) => options.map((o) => (o as HTMLOptionElement).value))
          const before = await select.inputValue()
          const next = values.find((v) => v !== before)
          if (next !== undefined) {
            await select.selectOption(next).catch(() => {})
            if ((await select.inputValue()) !== next) add('controls', 'menu in the control bar did not change', 'high')
          }
        }
      }
    }

    // 5. Colour change by keyboard (desktop colour screens): ArrowRight moves to the next colour
    if (desktop && barData && (route.type === 'color' || route.type === 'home')) {
      await page.locator('h1').first().click()
      const before = await stageColour(page, barData.x, barData.top - 60)
      await page.keyboard.press('ArrowRight')
      await page.waitForTimeout(500)
      const after = await stageColour(page, barData.x, barData.top - 60)
      if (before === after) add('keyboard', `ArrowRight did not change the screen colour (${before})`, 'medium')
    }

    // 6. Fullscreen: the button (native API, or the in-page fallback on iPhone), wake lock, then exit
    const fsButton = page.getByRole('button', { name: /^(fullscreen|start test)$/i }).locator('visible=true').first()
    if (route.type !== 'tools' && route.type !== 'backgrounds') {
      if (await isFullscreen(page)) add('fullscreen', 'a fixed full-screen layer covers the page before Fullscreen was pressed', 'high')
      else if (!(await fsButton.count())) add('fullscreen', 'no visible Fullscreen / Start test button', 'medium')
      else {
        await fsButton.click({ timeout: 4000 }).catch((e) => add('fullscreen', `button click failed: ${String(e).split('\n')[0]}`, 'high'))
        await page.waitForTimeout(800)
        if (!(await isFullscreen(page))) add('fullscreen', 'Fullscreen button did not enter fullscreen or the in-page fallback', 'high')
        else {
          const wake = await page.evaluate(() => (window as unknown as { __wake: number }).__wake)
          if (!wake) add('wake-lock', 'no screen wake lock requested while fullscreen', 'low')
          await page.keyboard.press('Escape')
          await page.evaluate(() => document.fullscreenElement && document.exitFullscreen().catch(() => {}))
          await page.waitForTimeout(600)
          if (await isFullscreen(page)) add('fullscreen', 'Escape did not leave fullscreen', 'medium')
        }
      }

      // Keyboard shortcut F (desktop)
      // Hacker Typer: every key types code, so the F shortcut is switched off there on purpose.
      if (desktop && route.path !== '/hacker-typer/' && (await isFullscreen(page)) === false) {
        await page.locator('h1').first().click()
        await page.keyboard.press('f')
        await page.waitForTimeout(800)
        if (!(await isFullscreen(page))) add('keyboard', 'F key did not enter fullscreen', 'medium')
        await page.keyboard.press('Escape')
        await page.evaluate(() => document.fullscreenElement && document.exitFullscreen().catch(() => {}))
        await page.waitForTimeout(400)
      }
    }

    // 7. Touch: a tap on the stage doesn't throw
    if (touch && barData) {
      const errorsBefore = consoleErrors.length
      await page.touchscreen.tap(barData.x, Math.max(10, barData.top - 80 - (await page.evaluate(() => scrollY))))
      await page.waitForTimeout(500)
      if (consoleErrors.length > errorsBefore) add('touch', `tap on the stage logged: ${consoleErrors.slice(errorsBefore).join(' | ')}`, 'high')
      if (await isFullscreen(page)) {
        await page.keyboard.press('Escape')
        await page.waitForTimeout(300)
      }
    }

    // 8. Timers run
    if (TIMERS.has(route.path)) {
      const clock = () => page.evaluate(() => (document.querySelector('main')?.innerText.match(/\d{1,2}:\d{2}(?::\d{2})?(?:\.\d+)?/g) ?? []).join(' '))
      const start = page.getByRole('button', { name: /^start$/i }).locator('visible=true').first()
      if (!(await start.count())) add('timer', 'no visible Start button', 'high')
      else {
        await start.click()
        const before = await clock()
        await page.waitForTimeout(2200)
        if ((await clock()) === before) add('timer', `time on screen did not change 2s after Start (${before.slice(0, 40)})`, 'high')
      }
    }

    // 9. Orientation change (phones and tablets)
    if (touch) {
      const size = page.viewportSize()!
      await page.setViewportSize({ width: size.height, height: size.width })
      await page.waitForTimeout(900)
      const o = await overflow(page)
      if (o) add('orientation', `after rotating: ${o}`, 'medium')
      const b = bar ? await barInfo(page, bar) : null
      if (bar && b && !b.oneRow) add('orientation', 'after rotating: control bar wraps onto 2+ rows', 'medium')
      await page.setViewportSize(size)
      await page.waitForTimeout(500)
    }

    // 10. Dark mode + reduced motion
    const errorsBeforeDark = consoleErrors.length
    await page.emulateMedia({ colorScheme: 'dark', reducedMotion: 'reduce' })
    await page.reload({ waitUntil: 'load' })
    await page.waitForTimeout(2000)
    if (consoleErrors.length > errorsBeforeDark) add('dark/reduced-motion', `errors with dark mode + reduced motion: ${consoleErrors.slice(errorsBeforeDark).join(' | ')}`, 'medium')
    const darkOver = await overflow(page)
    if (darkOver && !over) add('dark/reduced-motion', `overflow only in dark/reduced motion: ${darkOver}`, 'medium')
    if (!(await page.locator('h1').first().isVisible())) add('dark/reduced-motion', 'page title not visible', 'medium')

    // Console errors and failed requests from the whole run
    const ownErrors = consoleErrors.slice(0, errorsBeforeDark).filter((e) => !THIRD_PARTY.test(e))
    const third = consoleErrors.filter((e) => THIRD_PARTY.test(e))
    if (ownErrors.length) add('console', `${ownErrors.length} error(s): ${[...new Set(ownErrors)].slice(0, 2).join(' | ')}`, 'high')
    if (third.length) add('console-3p', `${third.length} third-party error(s): ${third[0]}`, 'low')
    const ownFailed = [...new Set(failed)].filter((u) => !THIRD_PARTY.test(u))
    const thirdFailed = [...new Set(failed)].filter((u) => THIRD_PARTY.test(u))
    if (ownFailed.length) add('network', `${ownFailed.length} failed request(s): ${ownFailed.slice(0, 2).join(' | ')}`, 'high')
    if (thirdFailed.length) add('network-3p', `${thirdFailed.length} third-party request(s) failed: ${thirdFailed[0]}`, 'low')

    fs.writeFileSync(new URL(`${project}__${route.path.replace(/\//g, '_') || 'home'}.json`, OUT), JSON.stringify({ route, project, issues }))
    // Third-party findings (ads, analytics) are logged above but don't fail the run: they aren't site bugs.
    const own = issues.filter((i) => !i.check.endsWith('-3p') && !THIRD_PARTY.test(i.detail) && !/clarity\.ms|bing\.com/.test(i.detail))
    expect(own, own.map((i) => `${i.sev} ${i.check}: ${i.detail}`).join('\n')).toHaveLength(0)
  })
}
