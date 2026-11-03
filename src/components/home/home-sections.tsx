import Link from 'next/link'
import {
  Monitor,
  Sparkles,
  Lightbulb,
  Download,
  ArrowRight,
  ChevronDown,
  Layers,
  Edit3,
  HelpCircle,
  AlertTriangle,
} from 'lucide-react'

export const HOMEPAGE_FAQS = [
  {
    question: 'What is a white screen used for?',
    answer:
      'A white screen can help reveal dust and visible display defects, provide temporary fill lighting, support drawing and tracing, and create a plain background for creative projects.',
  },
  {
    question: 'How do I make my screen completely white?',
    answer:
      'Open WhiteScreen.vip, select white, and activate fullscreen mode where supported by your browser.',
  },
  {
    question: 'Can I download a white screen image?',
    answer:
      'Yes, if the download feature is available. Select a supported resolution or custom dimensions and save the generated PNG image.',
  },
  {
    question: 'Can I use a white screen on my phone?',
    answer:
      'Yes. You can open the tool in a compatible mobile browser. Available fullscreen behavior depends on your device and browser.',
  },
  {
    question: 'Can a white screen detect dead pixels?',
    answer:
      'A white background can reveal dark pixels, while black and primary-color backgrounds can help expose other visible pixel defects. This is a visual check, not a complete hardware diagnosis.',
  },
  {
    question: 'Why does my white screen look yellow?',
    answer:
      'Night Light, Night Shift, True Tone, color profiles, and monitor settings can affect the appearance of white. Check these settings if you need a neutral white background.',
  },
  {
    question: 'Why does my screen keep turning off?',
    answer:
      "Your device's sleep timer, battery-saving settings, or browser restrictions may turn off the display. Check your power settings and use a Keep Awake feature if the website and browser support it.",
  },
  {
    question: 'Is a white screen safe for OLED displays?',
    answer:
      "Avoid leaving a bright static image on an OLED display for extended periods. Follow the manufacturer's recommendations for brightness and screen use. No browser feature can guarantee that burn-in will be prevented.",
  },
  {
    question: "Does a white screen change my monitor's physical brightness?",
    answer:
      "A webpage can change the appearance of displayed content, but it generally cannot directly adjust the monitor's hardware brightness. Use your device's brightness controls for that.",
  },
  {
    question: 'Is WhiteScreen.vip free to use?',
    answer:
      'WhiteScreen.vip is completely free to use online in your web browser. All screen colors, tests, and image download features are accessible without requiring registration, account creation, or software installation.',
  },
] as const

export const COLOR_CARDS = [
  { id: 'white', name: 'White Screen', hex: '#FFFFFF', path: '/' },
  { id: 'black', name: 'Black Screen', hex: '#000000', path: '/black-screen' },
  { id: 'red', name: 'Red Screen', hex: '#FF0000', path: '/red-screen' },
  { id: 'green', name: 'Green Screen', hex: '#00FF00', path: '/green-screen' },
  { id: 'blue', name: 'Blue Screen', hex: '#0000FF', path: '/blue-screen' },
  { id: 'yellow', name: 'Yellow Screen', hex: '#FFFF00', path: '/yellow-screen' },
  { id: 'orange', name: 'Orange Screen', hex: '#FF8000', path: '/orange-screen' },
  { id: 'pink', name: 'Pink Screen', hex: '#FF69B4', path: '/pink-screen' },
  { id: 'purple', name: 'Purple Screen', hex: '#8000FF', path: '/purple-screen' },
  { id: 'cyan', name: 'Cyan Screen', hex: '#00FFFF', path: '/cyan-screen' },
  { id: 'magenta', name: 'Magenta Screen', hex: '#FF00FF', path: '/magenta-screen' },
  { id: 'gray', name: 'Gray Screen', hex: '#808080', path: '/gray-screen' },
] as const

export function HomeSections() {
  const whyUseItems = [
    {
      title: 'Check for Dead Pixels',
      description:
        'Use a white background to look for dark dots or visible pixel defects. Switch between black, red, green, and blue backgrounds to inspect the display further.',
      icon: Monitor,
    },
    {
      title: 'Clean Your Screen',
      description:
        "A white background can make dust, fingerprints, and smudges easier to see. Turn off your device and follow the manufacturer's cleaning instructions before cleaning the display.",
      icon: Sparkles,
    },
    {
      title: 'Use Your Screen as a Light',
      description:
        'Use your phone, tablet, or monitor as a temporary light source for video calls, selfies, product photography, or reading.',
      icon: Lightbulb,
    },
    {
      title: 'Download White Screen Images',
      description:
        'Create a white PNG background for wallpapers, presentations, video editing, and graphic design. Choose a supported resolution or custom dimensions if the existing download feature supports them.',
      icon: Download,
    },
    {
      title: 'Trace Drawings',
      description:
        'Use a bright display as a simple light table for tracing sketches and illustrations. Avoid pressing hard on the screen or placing objects on it if the manufacturer advises against doing so.',
      icon: Edit3,
    },
    {
      title: 'Create a Plain Background',
      description:
        'Display a solid color for presentations, demonstrations, or a distraction-free workspace.',
      icon: Layers,
    },
  ]

  const howToUseSteps = [
    {
      step: 1,
      title: 'Choose a Color',
      description: 'Select white or another color from the available color controls.',
    },
    {
      step: 2,
      title: 'Open Fullscreen',
      description: 'Use the fullscreen button to expand the display where supported by your browser.',
    },
    {
      step: 3,
      title: 'Adjust Brightness',
      description: "Set your device brightness to a comfortable level. Use the website's brightness control if available.",
    },
    {
      step: 4,
      title: 'Download an Image',
      description: 'Select a supported resolution or custom dimensions in the existing download controls and save the PNG.',
    },
    {
      step: 5,
      title: 'Exit Fullscreen',
      description: 'Press Escape where supported or use the available fullscreen control.',
    },
  ]

  const troubleshootingItems = [
    {
      title: 'White Screen Not Working',
      description:
        'Refresh the page, check your internet connection, and make sure JavaScript is enabled. Try another supported browser if the screen remains blank.',
    },
    {
      title: 'Fullscreen Mode Not Working',
      description:
        'Click or tap the fullscreen button again. Some browsers require direct user interaction and may restrict fullscreen behavior on mobile devices.',
    },
    {
      title: 'White Screen Looks Yellow or Gray',
      description:
        "Check Night Light, Night Shift, True Tone, color filters, HDR, and your monitor's color settings. These settings can change how white appears.",
      linkHref: '/screen-color-test',
      linkLabel: 'Test screen colors →',
    },
    {
      title: 'Cannot Download a White Screen Image',
      description:
        'Check whether your browser blocked the download. Verify the selected dimensions and ensure your device has enough available memory.',
      linkHref: '/',
      linkLabel: 'Open image tool →',
    },
    {
      title: 'Screen Does Not Fill the Display',
      description:
        'Browser controls, device orientation, and fullscreen restrictions can affect the visible area. Try the fullscreen control or rotate your phone to landscape.',
    },
    {
      title: 'How to Check for Dead Pixels',
      description:
        'Display white, black, red, green, and blue backgrounds. Look for dots that remain dark or show an unexpected color. Visual testing does not replace professional hardware diagnostics.',
      linkHref: '/dead-pixel-test',
      linkLabel: 'Open dead pixel test →',
    },
    {
      title: 'Screen Keeps Turning Off',
      description:
        "Check your device's sleep settings and power-saving options. If the website offers a Keep Awake feature, enable it where supported.",
    },
  ]

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* 1. What Is a White Screen? */}
      <section aria-labelledby="what-is-heading" className="mx-auto max-w-5xl px-3 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-xs">
          <h2
            id="what-is-heading"
            className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
          >
            What Is a White Screen?
          </h2>
          <div className="mt-3 space-y-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <p>
              A white screen is a plain, bright white display that you can open on your phone,
              tablet, laptop, or monitor using a web browser. It can help you spot dust and visible
              display defects, provide temporary lighting, and create a clean background for creative
              projects.
            </p>
            <p>
              WhiteScreen.vip lets you switch between solid colors, use the available fullscreen
              controls, and download screen images without installing a separate application.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Why Use a White Screen? */}
      <section aria-labelledby="why-heading" className="mx-auto max-w-5xl px-3 sm:px-6">
        <div className="mb-6">
          <h2
            id="why-heading"
            className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
          >
            Why Use a White Screen?
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUseItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-2xs hover:border-border/80 transition-colors flex flex-col"
              >
                <div className="mb-3 inline-flex size-9 items-center justify-center rounded-lg border border-border bg-muted/60 text-foreground">
                  <Icon className="size-4" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

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

      {/* 4. Screen Problems and How to Fix Them */}
      <section aria-labelledby="problems-heading" className="mx-auto max-w-5xl px-3 sm:px-6">
        <div className="mb-6">
          <h2
            id="problems-heading"
            className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
          >
            Screen Problems and How to Fix Them
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

      {/* 5. Explore Other Color Screens */}
      <section aria-labelledby="colors-heading" className="mx-auto max-w-5xl px-3 sm:px-6">
        <div className="mb-6">
          <h2
            id="colors-heading"
            className="text-xl sm:text-2xl font-bold tracking-tight text-foreground"
          >
            Explore Other Color Screens
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Choose a solid color to inspect your display, create a background, or explore a different
            screen color. Each color has its own page, so you can open or bookmark the screen you need.
          </p>
        </div>

        {/* Existing Compact Color-Card Design from ColorScreenLinks */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COLOR_CARDS.map((color) => (
            <Link
              key={color.id}
              href={color.path}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-3 transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <span
                className="size-12 shrink-0 rounded-lg ring-1 ring-black/10"
                style={{ backgroundColor: color.hex }}
                aria-hidden="true"
              />
              <span className="flex flex-1 flex-col">
                <span className="font-medium text-foreground text-sm">{color.name}</span>
                <span className="font-mono text-xs text-muted-foreground">{color.hex}</span>
              </span>
              <ArrowRight
                className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
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
            Frequently Asked Questions
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
