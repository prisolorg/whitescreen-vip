# Templated pages: send keyword CSVs for these

There are 124 English pages, taken from `dist/sitemap.xml`. The other languages follow the English pages.

- **Templated:** the body is filled in from a shared data file, so the page has no keyword-led guide yet.
- **Custom:** the page already has its own keyword guide. A CSV for one of these reworks that guide in place.

**CSV format:** one CSV per page, named by its slug (for example `gray-screen.csv`), with columns `keyword,volume`.

## 1. Tool pages, templated (10), highest priority
Content comes from `src/lib/tool-content/{screen-tests,fake-screens,effects,utilities}.ts`.

**Next up (send CSVs in this order):**
1. color-cycle, gradient-screen, visual-noise
2. orange-screen
3. Fake screens: fake-google-meet, fake-slack-huddle, fake-windows-xp-boot, fake-ubuntu-update, fake-radar-screen

**Done or set aside on 18 Nov:**
- hacker-typer now has a keyword guide (H1 "Hacker Typer" kept).
- fake-teams-meeting, fake-android-update (H1 "Fake Android Update Screen"), fake-windows-xp-update (H1 "Fake Windows XP Update Screen") and fake-chrome-os-update (H1 "Fake Chromebook Update Screen") now have keyword guides.
- white, brown and pink noise generators, matrix-screensaver (H1 "Matrix Screen"), motivational-quote-screensaver (H1 "Motivational Quotes Screensaver") and purple-screen now have keyword guides.
- oled-burn-in-test and gray-screen ("Grey Screen") now have keyword guides.
- screen-uniformity-test was merged into gray-screen (301 redirect).
- magenta-screen copy was rewritten for its own intent, without a CSV.
- cyan-screen was left as it is on purpose.

## 2. Background pages, templated (12)
These are under `/backgrounds/`. Data comes from `src/lib/backgrounds-data.ts`. Each guide is registered in `src/components/home/background-guides.ts`.

gradient-background, neon-background, green-screen-background, virtual-office, light-pink-background, green-background, purple-background, dark-background, gold-background, aesthetic-background, beige-background, pastel-background

## 3. Articles, one template per type (29)
Each page has its own text, but every page of a type uses the same layout. A CSV rewrites that page's text and keeps the layout.

| Type | Data file | Pages |
|---|---|---|
| Guides `/guides/*` | `src/lib/guides-content.ts` | 13 |
| Screen problems `/screen-problems/*` | `src/lib/screen-problems-data.ts` | 11 |
| Glossary `/glossary/*` | `src/lib/glossary-data.ts` | 5 |

## 4. Hub and index pages (12)
- **Category hubs** (`src/lib/hubs.ts`): color-screens, screen-tests, screensavers, prank-screens, visual-effects, light-and-sound, online-timers
- **Index pages:** tools, backgrounds, guides, screen-problems, glossary

## 5. Already custom (send a CSV only to rework one)
- **Home:** `/` (White Screen)
- **Tools (34):**
  - Color screens: black-screen, red-screen, green-screen, blue-screen, yellow-screen, pink-screen, gray-screen
  - Screen tests: dead-pixel-test, monitor-test, oled-gray-test, screen-burn-in-test, touch-screen-test, screen-refresh-rate-test, monitor-ghosting-test, frame-rate-test, screen-color-test, screen-resolution-test, contrast-checker, oled-burn-in-test
  - Pranks: no-signal-screen, broken-screen, hacked-screen, fake-windows-10-update, fake-windows-11-update, fake-blue-screen-of-death, fake-mac-update, fake-zoom-meeting
  - Light: zoom-lighting, ring-light
  - Screensavers: flip-clock-screensaver, dvd-screensaver
  - Timers: countdown-timer, pomodoro-timer, stopwatch
- **Backgrounds (8):** white, black, orange, red, yellow, blue and pink backgrounds, plus graph-paper

## Not content pages
About, contact, privacy, terms, disclaimer and author have no keyword target. The roughly 30 old URLs, such as alice-blue and snow-screen, are noindex redirects, so leave them alone.
