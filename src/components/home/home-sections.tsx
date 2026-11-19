import { ColorImage } from '@/components/color-image'
import { InlineAd } from '@/components/tool-ads'
import { usesStudioLayout } from '@/lib/studio-layout'
import { ToolGlanceBlock } from '@/components/tool-glance'
import { ratingFor } from '@/lib/rating-snapshot'
import { TOOL_GLANCE } from '@/lib/tool-content/glance'
import { SCREEN_COLORS } from '@/lib/screen-colors'
import { WhiteScreenGuide, WHITE_SCREEN_EXTRA_FAQS } from '@/components/home/white-screen-guide'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export const HOMEPAGE_FAQS = [
  {
    question: 'How do I make my screen completely white?',
    answer:
      'Open WhiteScreen.vip, select white, and activate fullscreen mode where supported by your browser.',
  },
  {
    question: 'Does the white screen work on my phone?',
    answer:
      'Yes. You can open the tool in a compatible mobile browser. Available fullscreen behavior depends on your device and browser.',
  },
  {
    question: 'Can a white screen detect dead pixels?',
    answer:
      'A white background can reveal dark pixels, while black and primary-color backgrounds can help expose other visible pixel defects. This is a visual check, not a complete hardware diagnosis.',
  },
  {
    question: 'Why does my screen keep turning off?',
    answer:
      "Your device's sleep timer, battery-saving settings, or browser restrictions may turn off the display. Check your power settings and use a Keep Awake feature if the website and browser support it.",
  },
  {
    question: 'Is a bright white screen safe for OLED displays?',
    answer:
      "Avoid leaving a bright static image on an OLED display for extended periods. Follow the manufacturer's recommendations for brightness and screen use. No browser feature can guarantee that burn-in will be prevented.",
  },
  {
    question: 'Is WhiteScreen.vip free to use?',
    answer:
      'WhiteScreen.vip is completely free to use online in your web browser. All screen colors, tests, and image download features are accessible without requiring registration, account creation, or software installation.',
  },
  // Added from keyword research (brightness, blank vs pure, flashlight, tracing, cleaning, 4K).
  ...WHITE_SCREEN_EXTRA_FAQS,
] as const

export function HomeSections() {
  const howToUseSteps = [
    { step: 1, title: 'Go Full Screen', description: 'Double-tap the screen or press F to open the white screen in full screen. On a phone, tap the fullscreen icon.' },
    { step: 2, title: 'Set Brightness and Warmth', description: 'Use the Brightness slider and pick Cool, Neutral or Warm.' },
    { step: 3, title: 'Keep It On', description: 'Turn on Keep screen awake so the display does not sleep.' },
    { step: 4, title: 'Exit', description: 'Press Esc or double-tap again.' },
  ]

  const troubleshootingItems = [
    {
      title: 'Screen Not Loading or Staying Blank',
      description:
        'Refresh the page, check your internet connection, and make sure JavaScript is enabled. Try another supported browser if the screen remains blank.',
    },
    {
      title: 'Fullscreen Mode Not Working',
      description:
        'Click or tap the fullscreen button again. Some browsers require direct user interaction and may restrict fullscreen behavior on mobile devices.',
    },
    {
      title: 'White Looks Yellow or Gray',
      description:
        "Check Night Light, Night Shift, True Tone, color filters, HDR, and your monitor's color settings. These settings can change how white appears.",
      linkHref: '/screen-color-test',
      linkLabel: 'Test screen colors →',
    },
    {
      title: 'Screen Does Not Fill the Display',
      description:
        'Browser controls, device orientation, and fullscreen restrictions can affect the visible area. Try the fullscreen control or rotate your phone to landscape.',
    },
  ]

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* 1. What Is a White Screen? Answer first, then the image and the first ad. */}
      <div>
        <ToolGlanceBlock name="White Screen" heading="What Is a White Screen?" glance={TOOL_GLANCE['white-screen']} rating={ratingFor('/')} />
        {/* Studio layout test: the phone's first ad comes after this first content section. */}
        {usesStudioLayout('white') && <InlineAd className="mx-auto my-6 px-3 md:hidden" />}
        <ColorImage color={SCREEN_COLORS[0]} name="White Screen" />
      </div>

      {/* 3. How to Use the White Screen */}
      <section aria-labelledby="how-heading" className="mx-auto max-w-5xl px-3 sm:px-6">
        <div className="rounded-2xl border border-border bg-muted/20 p-5 sm:p-7">
          <div className="mb-6">
            <h2
              id="how-heading"
              className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
            >
              How to Use the White Screen
            </h2>
          </div>

          <ol className="space-y-3 sm:space-y-4">
            {howToUseSteps.map((step) => (
              <li
                key={step.step}
                className="flex items-start gap-3.5 rounded-xl border border-border/80 bg-card p-3.5 sm:p-4 text-xs sm:text-sm"
              >
                <span className="flex size-6 sm:size-7 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground shrink-0 mt-0.5">
                  {step.step}
                </span>
                <div className="leading-relaxed">
                  <strong className="font-semibold text-foreground">{step.title}: </strong>
                  <span className="text-muted-foreground">{step.description}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Keyword-led sections: bright, blank / pure, light, background images, white screen test. */}
      <WhiteScreenGuide />

      {/* 4. White Screen Not Working? Quick Fixes */}
      <section aria-labelledby="problems-heading" className="mx-auto max-w-5xl px-3 sm:px-6">
        <div className="mb-6">
          <h2
            id="problems-heading"
            className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
          >
            White Screen Not Working? Quick Fixes
          </h2>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2">
          {troubleshootingItems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-2xs hover:border-border/80 transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
              {item.linkHref && (
                <div className="mt-3 pt-2 border-t border-border/40">
                  <Link
                    href={item.linkHref}
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>{item.linkLabel}</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}

      <section aria-labelledby="faq-heading" className="mx-auto max-w-5xl px-3 sm:px-6">
        <div className="mb-6">
          <h2
            id="faq-heading"
            className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
          >
            FAQ
          </h2>
        </div>

        <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {HOMEPAGE_FAQS.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 sm:px-5 py-3.5 sm:py-4 font-medium transition-colors hover:bg-muted/40 [&::-webkit-details-marker]:hidden">
                <h3 className="text-xs sm:text-sm font-semibold text-foreground">
                  {faq.question}
                </h3>
                <ChevronDown
                  className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-4 sm:px-5 pb-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}
