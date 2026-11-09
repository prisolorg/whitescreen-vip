import type { LanguageCode } from './locale-routing'
import { GUIDE_TRANSLATIONS } from './guide-i18n'

export type GuideSection = {
  id: string
  title: string
  subtitle?: string
  content: string[]
  steps?: string[]
  tips?: string[]
  checklist?: string[]
}

export type GuideFAQ = {
  question: string
  answer: string
}

export type GuideArticle = {
  slug: string
  path: string
  navLabel: string
  title: string
  metaTitle: string
  metaDescription: string
  readingTime: string
  updatedAt: string
  category: string
  intro: string
  warning?: string
  primaryTool: {
    label: string
    path: string
    description: string
  }
  sections: GuideSection[]
  faqs: GuideFAQ[]
  relatedSlugs: string[]
}

export { HEADER_GUIDES } from './nav-links'

export const GUIDES: readonly GuideArticle[] = [
  // 1. Dead Pixel Test
  {
    slug: 'dead-pixel-test',
    path: '/guides/dead-pixel-test/',
    navLabel: 'Dead Pixel Test',
    title: 'Dead Pixel Test: How to Spot Dead, Stuck, and Hot Pixels on Any Screen',
    metaTitle: 'Dead Pixel Test – Spot Dead & Stuck Pixels on Any Screen | WhiteScreen.vip',
    metaDescription:
      'Learn how to run a dead pixel test on Windows, Mac, iPhone, and Android. Spot dead, stuck, and hot pixels using full-screen primary colors with step-by-step instructions.',
    readingTime: '6 min read',
    updatedAt: '2026-03-15',
    category: 'Display Diagnostics',
    intro:
      'Every modern display panel—whether LCD, IPS, VA, or OLED—is made of millions of tiny red, green, and blue subpixels controlled by micro-transistors. When a transistor fails or gets stuck, it creates an irritating defect that can disrupt reading, photo editing, and gaming. Testing your display using full-screen primary colors is the fastest, most reliable method to detect pixel anomalies during your device return window or before warranty expiration.',
    primaryTool: {
      label: 'Open Dead Pixel Test Tool',
      path: '/dead-pixel-test',
      description: 'Cycle solid red, green, blue, black, and white screens in fullscreen to spot anomalies.',
    },
    sections: [
      {
        id: 'pixel-types',
        title: 'Dead vs Stuck vs Hot Pixels: How to Tell Them Apart',
        content: [
          'Not all pixel defects look or behave the same. Identifying the exact nature of the defect helps you determine whether a software cycle might dislodge it or if it requires a warranty panel replacement.',
          'A dead pixel occurs when the controlling transistor remains completely off. On standard backlit LCD screens, dead pixels appear as permanent black dots regardless of what color the surrounding screen displays.',
          'A stuck pixel occurs when one or two subpixels (red, green, or blue) remain permanently energized while the others function normally. A stuck pixel appears as a bright, static colored dot against dark or contrasting backgrounds.',
          'A hot pixel happens when all three subpixels remain stuck at full illumination simultaneously, producing a permanent bright white speck that stands out starkly against black and dark content.',
        ],
        tips: [
          'Dead pixels are black dots visible on bright white, red, green, or blue screens.',
          'Stuck pixels are colored dots (red, green, or blue) visible on contrasting dark backgrounds.',
          'Hot pixels appear as permanent white pinpoints against dark backgrounds.',
        ],
      },
      {
        id: 'cleaning-before-testing',
        title: 'Crucial First Step: Clean Before You Diagnose',
        content: [
          'A surprising number of suspected "dead pixels" turn out to be microscopic dust specks, dried liquid droplets from sneezing, or tiny grease splatters trapped on the glass surface.',
          'Before concluding that your panel has a hardware defect, gently wipe the screen with a clean, dry optical microfiber cloth with the monitor turned off. Never scrape with fingernails, as doing so can permanently scratch anti-glare polarizing filters.',
        ],
      },
      {
        id: 'step-by-step-testing',
        title: 'Step-by-Step Testing Guide Across All Devices',
        content: [
          'Follow these step-by-step instructions to test desktop monitors, laptop screens, tablets, and smartphones thoroughly.',
        ],
        steps: [
          'Open the WhiteScreen.vip Dead Pixel Test tool and click "Open Fullscreen" to remove all browser address bars, taskbars, and UI clutter.',
          'Inspect the solid White screen first: slowly scan the panel from top-left to bottom-right, looking for stationary black dots (dead pixels).',
          'Switch to Black: inspect for bright white dots (hot pixels) or colored pinpricks (stuck pixels).',
          'Cycle through Pure Red, Pure Green, and Pure Blue: each pure primary color tests one specific subpixel channel. A missing subpixel will reveal a darkened or off-color dot.',
          'Test on Windows / macOS: set monitor brightness to 80–100% and view the screen directly perpendicular (perpendicular line of sight) to prevent optical diffraction.',
          'Test on iPhone / Android: pinch to ensure browser margins are eliminated, or save the test swatches to photos to view in full-screen native gallery mode.',
        ],
      },
      {
        id: 'limitations-and-realities',
        title: 'Browser Testing Limitations and Warranty Truths',
        content: [
          'Browser-based testing tools provide immediate, accurate visual diagnosis because they drive each display pixel at 100% saturation without video compression artifacts.',
          'However, be wary of websites claiming that rapid color flashing or video loops can magically repair permanent dead pixels. While a rapid subpixel exerciser can occasionally unstick a sluggish liquid crystal transistor, a physically severed circuit or burned-out transistor cannot be fixed by software.',
          'Check your manufacturer’s ISO 9241-307 / ISO 13406-2 pixel defect classification. Most consumer monitor warranties require 3 to 5 dead subpixels or at least 1 dead pixel directly in the central viewing zone before qualifying for a free RMA replacement.',
        ],
        checklist: [
          'Verify defect count against your manufacturer’s warranty policy within the 14–30 day return window.',
          'Take a macro photograph of the defect using your smartphone camera as documentation for customer support.',
          'Check whether your retailer offers a "zero dead pixel" replacement guarantee during the initial purchase period.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can a browser test fix a dead pixel?',
        answer:
          'No. If a transistor is physically broken or burned out, software cannot repair it. Rapid flashing utilities can occasionally loosen stuck subpixels, but permanent dead pixels require panel replacement.',
      },
      {
        question: 'Why do stuck pixels sometimes disappear on their own?',
        answer:
          'Stuck pixels in liquid crystal panels are often caused by electrical charge imbalance or slight physical tension. As the display warms up or cools down, thermal expansion and voltage cycling can occasionally restore normal liquid crystal orientation.',
      },
      {
        question: 'How do I distinguish between dust on the screen and a dead pixel?',
        answer:
          'Change your viewing angle by moving your head 6 inches to the left or right. Because monitor glass has thickness, surface dust will shift slightly relative to the light layer underneath (parallax effect), whereas a dead pixel stays locked to the pixel grid.',
      },
    ],
    relatedSlugs: ['screen-color-test', 'screen-uniformity-test', 'clean-laptop-screen', 'monitor-test'],
  },

  // 2. Screen Color Test
  {
    slug: 'screen-color-test',
    path: '/guides/screen-color-test/',
    navLabel: 'Screen Color Test',
    title: 'Screen Color Test: How to Evaluate Color Accuracy and Balance on Your Monitor',
    metaTitle: 'Screen Color Test – Check Color Accuracy & Balance | WhiteScreen.vip',
    metaDescription:
      'Test your monitor for color tinting, banding, gamma shifts, and contrast balance. Step-by-step screen color testing guide for PC, Mac, and mobile displays.',
    readingTime: '6 min read',
    updatedAt: '2026-03-15',
    category: 'Display Calibration',
    intro:
      'Whether you are editing photos, grading video, designing websites, or matching two monitors on the same desk, accurate color reproduction is vital. Subtle color casts, uneven gamma ramps, and harsh color banding can distort your visual work without you noticing. A systematic screen color test using full-screen reference fields allows you to spot tinting, white balance drift, and saturation clipping without expensive hardware tools.',
    primaryTool: {
      label: 'Open Screen Color Test Tool',
      path: '/screen-color-test',
      description: 'Test neutral grays, primary colors, and saturation balance across your entire display.',
    },
    sections: [
      {
        id: 'why-color-testing',
        title: 'Why Visual Color Testing is Crucial Before Calibration',
        content: [
          'Computer monitors frequently ship from the factory with exaggerated blue tints, hyper-saturated greens, and crushed black levels designed to look vibrant on showroom shelves rather than accurate.',
          'Before investing in a hardware colorimeter, running a structured visual screen color test helps you identify whether your display suffers from global tinting (e.g., green or magenta cast in the midtones), aggressive black crush, or poor viewing angle shift.',
        ],
        tips: [
          'Warm up your monitor for at least 30 minutes before evaluating colors; backlight temperature shifts during warmup.',
          'Turn off ambient room lights that cast colored reflections onto the display glass.',
        ],
      },
      {
        id: 'color-test-procedure',
        title: 'Step-by-Step Color Testing Procedure',
        content: [
          'Follow these verification steps across Windows, macOS, and multi-monitor workstations.',
        ],
        steps: [
          'Disable software tinting utilities: turn off Night Light on Windows, True Tone and Night Shift on macOS, and Eye Comfort Shield on mobile.',
          'Open the WhiteScreen.vip Screen Color Test in full screen and select the 50% neutral gray swatch.',
          'Evaluate the gray field: pure neutral gray should look neither pinkish, greenish, nor bluish. Any visible cast indicates white point calibration drift.',
          'Cycle through Red, Green, and Blue primary swatches: verify that colors appear uniform from corner to corner without darkening or hue shifting at the perimeter.',
          'Check secondary colors (Cyan, Magenta, Yellow): these combinations exercise multiple subpixel channels at once, exposing channel imbalances.',
          'Inspect multi-monitor alignment: drag the browser window across the seam between two displays to visually detect white point differences between panels.',
        ],
      },
      {
        id: 'color-depth-and-banding',
        title: 'Detecting Color Banding and Bit Depth Limitations',
        content: [
          'Standard 8-bit displays can represent 16.7 million colors, while modern 10-bit panels (8-bit + FRC or true 10-bit) render over 1 billion shades. When a monitor or display driver handles color gradations poorly, smooth gradients degrade into discrete step-like bands (color banding).',
          'Inspect smooth gradient transitions on our monitor test page. If transitions appear stepped or show false color halos, verify your graphics control panel (NVIDIA Control Panel, AMD Radeon Software, or Intel Graphics Command Center) is set to full RGB range (0–255) rather than limited video range (16–235).',
        ],
        checklist: [
          'Set Output Dynamic Range to "Full" (0–255) in GPU settings.',
          'Select the sRGB or D65 preset in your monitor’s physical on-screen display (OSD) menu for standard web accuracy.',
          'Match refresh rates and color bit depths across dual-monitor desktop setups.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does my white screen look slightly yellow compared to my phone?',
        answer:
          'Smartphones frequently use aggressive 7000K–7500K cool white points that make standard 6500K (D65) monitor calibration appear warm or yellowish in comparison. D65 is the standard color temperature for web and video production.',
      },
      {
        question: 'What is the difference between sRGB and DCI-P3 color modes?',
        answer:
          'sRGB is the standard color space for web content and office work. DCI-P3 covers a 25% wider color spectrum and is used for HDR cinema and modern smartphone displays. For general web work, locking your monitor to sRGB prevents oversaturation.',
      },
    ],
    relatedSlugs: ['dead-pixel-test', 'screen-uniformity-test', 'monitor-test', 'oled-burn-in-prevention'],
  },

  // 3. Screen Uniformity Test
  {
    slug: 'screen-uniformity-test',
    path: '/guides/screen-uniformity-test/',
    navLabel: 'Screen Uniformity',
    title: 'Screen Uniformity Test: How to Check for Backlight Bleed, IPS Glow, and Clouding',
    metaTitle: 'Screen Uniformity Test – Backlight Bleed & IPS Glow Check | WhiteScreen.vip',
    metaDescription:
      'Check your monitor for backlight bleed, IPS glow, clouding, vignetting, and dirty screen effect (DSE) using solid gray and black test screens.',
    readingTime: '6 min read',
    updatedAt: '2026-03-15',
    category: 'Display Diagnostics',
    intro:
      'No flat-panel display has 100% perfect brightness distribution across its entire surface. However, severe backlight bleed, excessive IPS glow, dark vignetting at corners, or splotchy "dirty screen effect" (DSE) can ruin dark movie scenes and create distracting shadows when browsing websites with light backgrounds. Performing a structured screen uniformity test in a controlled lighting environment helps you pinpoint panel flaws and verify acceptable manufacturing tolerances.',
    primaryTool: {
      label: 'Open Screen Uniformity Test Tool',
      path: '/screen-uniformity-test',
      description: 'Inspect 5% dark gray, 50% neutral gray, black, and white fields with optional alignment grids.',
    },
    sections: [
      {
        id: 'bleed-vs-glow',
        title: 'Backlight Bleed vs IPS Glow vs Clouding: The Critical Difference',
        content: [
          'Before returning a monitor, it is essential to distinguish between a genuine hardware manufacturing defect and inherent panel technology characteristics.',
          'Backlight Bleed is a physical assembly flaw where the liquid crystal panel is pinched or improperly seated inside the bezel, allowing LED backlight illumination to leak out around the edges. It appears as localized bright yellow or white spotlights along frame edges that remain fixed regardless of where you sit.',
          'IPS Glow is a natural optical characteristic of all In-Plane Switching liquid crystal panels. Because IPS crystals cannot completely block off-angle light, a faint amber or silver sheen appears in the corners when viewed from short distances. If you move your head or back away 2 feet, IPS glow shifts and diminishes.',
          'Clouding and Dirty Screen Effect (DSE) describe uneven diffusion across the backlight sheet, producing patchy gray clouds visible when panning across solid backgrounds like football turf or sky in video games.',
        ],
        tips: [
          'Backlight bleed stays in the exact same spot and brightness regardless of your viewing angle.',
          'IPS glow changes intensity and position as you move your head from left to right.',
          'Dirty screen effect (DSE) is best spotted using a 20% or 50% solid gray screen.',
        ],
      },
      {
        id: 'testing-environment',
        title: 'How to Set Up the Test Environment Correctly',
        content: [
          'Testing uniformity in a bright office washes out backlight bleed, while taking a smartphone photo in pitch black with Night Mode exaggerates glow tenfold.',
        ],
        steps: [
          'Dim your room lighting to comfortable evening ambient levels (not pitch black).',
          'Disable any aggressive Dynamic Contrast, Black Equalizer, or Local Dimming settings in your monitor OSD.',
          'Set your display brightness to your normal working level (typically 120–150 nits, usually 30% to 50% on monitor OSD).',
          'Open the WhiteScreen.vip Black Screen in fullscreen mode and sit at your normal working distance (at least arm’s length).',
          'Observe the corners: if bright light beams flare from the bezel edges and do not change when you move your head, you have backlight bleed.',
          'Switch to our 5% Gray and 50% Gray test screens to check for dirty screen effect and center-to-edge vignetting.',
        ],
      },
      {
        id: 'mitigation-tips',
        title: 'Practical Ways to Reduce Display Uniformity Irritations',
        content: [
          'If your screen has mild backlight bleed or IPS glow that does not warrant returning the unit, several simple setup adjustments can drastically improve your viewing experience.',
        ],
        checklist: [
          'Install bias lighting (a 6500K LED light strip) behind your monitor. Bias lighting raises your eyes’ ambient iris contraction, making dark levels appear significantly deeper.',
          'Lower your monitor brightness: running at 100% brightness in a dim room exacerbates all backlight imperfections.',
          'Check VESA mount screws: over-tightening mounting screws can warp monitor chassis plastics and induce mechanical pressure bleed.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is backlight bleed covered by warranty?',
        answer:
          'Manufacturers consider slight backlight bleed and IPS glow normal manufacturing variance. Severe bleed that creates distinct white hotspots visible during ordinary daylight office work usually qualifies for warranty replacement.',
      },
      {
        question: 'Does OLED have backlight bleed?',
        answer:
          'No. OLED displays have self-emissive subpixels and do not use a backlight sheet. Black pixels turn off completely, yielding infinite contrast with zero backlight bleed or IPS glow.',
      },
    ],
    relatedSlugs: ['dead-pixel-test', 'screen-color-test', 'oled-burn-in-prevention', 'monitor-test'],
  },

  // 4. Clean Laptop Screen
  {
    slug: 'clean-laptop-screen',
    path: '/guides/clean-laptop-screen/',
    navLabel: 'Clean Laptop Screen',
    title: 'How to Clean a Laptop Screen Safely Without Scratches or Streaks',
    metaTitle: 'Clean Laptop Screen Safely – Step-by-Step Guide | WhiteScreen.vip',
    metaDescription:
      'Safe, step-by-step guide to cleaning your laptop screen or MacBook display using a white screen inspection, optical microfiber, and zero harmful chemicals.',
    readingTime: '5 min read',
    updatedAt: '2026-03-15',
    category: 'Cleaning & Maintenance',
    intro:
      'Modern laptop screens, MacBooks, and external displays feature ultra-delicate anti-reflective coatings, polarizing films, and oleophobic layers. Using harsh household glass cleaners, paper towels, or excessive pressure can permanently strip these coatings or crack the internal liquid crystal matrix. By using a fullscreen white screen as an inspection backlight, you can illuminate every smudge, dust particle, and keyboard imprint before cleaning safely with proper optical technique.',
    warning:
      'CRITICAL SAFETY INSTRUCTIONS: Always turn off and unplug your laptop or monitor from power before applying any cloth or liquid. Never spray water or cleaning solution directly onto the display surface, hinges, or bezel edges. Liquid migration into the bottom bezel will permanently destroy the display backlight.',
    primaryTool: {
      label: 'Open White Screen for Inspection',
      path: '/',
      description: 'Use fullscreen white light to reveal dust, fingerprints, and smudges clearly before cleaning.',
    },
    sections: [
      {
        id: 'why-white-screen-inspection',
        title: 'Why a White Screen is the Best Pre-Cleaning Inspection Tool',
        content: [
          'When a laptop screen is turned off or displaying a dark desktop background, fingerprint oils, keyboard key rub marks, and fine airborne dust easily blend into the black matrix of the panel.',
          'Launching WhiteScreen.vip in fullscreen illuminates the panel with uniform, high-contrast light. Dust specks and oily smudges cast distinct dark silhouettes against the bright backdrop, giving you a precise visual map of where your screen needs attention before you wipe.',
        ],
      },
      {
        id: 'safe-cleaning-procedure',
        title: 'Safe Step-by-Step Laptop Screen Cleaning Procedure',
        content: [
          'Follow these manufacturer-approved steps to clean matte PC laptops, glossy screens, and Apple MacBook Retina displays.',
        ],
        steps: [
          'Inspect the screen with WhiteScreen.vip in fullscreen mode at 100% brightness to map out dirt, keyboard oil transfers, and dried droplet marks.',
          'Shut down the laptop completely and disconnect the charger and all external USB cables. Allow the display to cool down for 5 minutes (a warm screen causes cleaning moisture to flash-evaporate, leaving streaks).',
          'Use a clean, high-density optical microfiber cloth (the same kind used for camera lenses and eyeglasses). Never use paper towels, facial tissues, or shirts.',
          'Gently wipe the screen using light, overlapping circular or horizontal motions. Let the microscopic split fibers lift dust particles without pressing into the panel.',
          'For stubborn oily fingerprints: dampen one corner of the microfiber cloth with a small amount of distilled water. The cloth must be barely damp, never dripping wet.',
          'Gently wipe the oily spot with the damp corner, then immediately buff the area dry using the dry section of the cloth.',
          'Allow 3 minutes for any residual surface moisture to evaporate before closing the laptop lid or powering on.',
        ],
      },
      {
        id: 'deadly-cleaning-mistakes',
        title: 'Common Mistakes That Destroy Laptop Screens',
        content: [
          'Many popular cleaning hacks found online cause irreversible damage to modern displays.',
        ],
        checklist: [
          'Never use Windex, Formula 409, or household glass cleaners: ammonia and vinegar strip anti-reflective coatings.',
          'Never use acetone, nail polish remover, or paint thinner: solvents dissolve plastic coatings and bezels instantly.',
          'Never spray liquid directly on the screen: gravity pulls liquid drops into the bottom bezel where the display flex cables reside.',
          'Never use paper towels or napkins: wood cellulose fibers cause microscopic permanent scratches.',
          'Never press firmly with your fingers: excessive pressure produces permanent white pressure spots ("bruises") on the LCD substrate.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I use 70% isopropyl alcohol on my MacBook screen?',
        answer:
          'Apple officially permits 70% isopropyl alcohol wipes on the exterior and non-porous glass surfaces of certain MacBooks, but warns to wipe gently. For general maintenance, distilled water on a microfiber cloth is far safer and carries zero risk of dissolving anti-reflective coatings.',
      },
      {
        question: 'Why should I use distilled water instead of tap water?',
        answer:
          'Tap water contains dissolved minerals such as calcium, magnesium, and chlorine. When tap water evaporates from the screen, it leaves chalky mineral streaks that can scratch delicate optical films when wiped.',
      },
    ],
    relatedSlugs: ['dead-pixel-test', 'screen-uniformity-test', 'screen-color-test', 'monitor-test'],
  },

  // 5. OLED Burn-In Prevention
  {
    slug: 'oled-burn-in-prevention',
    path: '/guides/oled-burn-in-prevention/',
    navLabel: 'OLED Burn-In',
    title: 'OLED Burn-In Prevention: How to Test, Prevent, and Protect OLED Displays',
    metaTitle: 'OLED Burn-In Prevention & Testing Guide | WhiteScreen.vip',
    metaDescription:
      'Understand OLED burn-in vs temporary image retention. Test your OLED monitor or TV with solid color slides and follow practical tips to prolong panel lifespan.',
    readingTime: '7 min read',
    updatedAt: '2026-03-15',
    category: 'Display Maintenance',
    intro:
      'OLED and QD-OLED monitors provide unmatched contrast, true inky blacks, and near-instantaneous pixel response times. However, because each subpixel is an organic light-emitting diode that degrades gradually with cumulative light output, static UI elements (such as Windows taskbars, browser address bars, and game HUDs) can cause uneven wear over time. Understanding how burn-in develops, how to test for it, and how to configure your operating system protects your investment for years.',
    warning:
      'CRITICAL HONESTY WARNING: Be aware of misleading tools online. Software utilities, flashing colors, or web videos CANNOT reverse or repair permanent physical OLED burn-in. Once organic subpixels have physically lost luminance capacity, the damage is permanent. Our tools help you diagnose and prevent burn-in before it becomes irreversible.',
    primaryTool: {
      label: 'Open OLED Burn-In Test Tool',
      path: '/oled-burn-in-test',
      description: 'Cycle solid red, magenta, cyan, and dark gray fields to spot faint outlines of static elements.',
    },
    sections: [
      {
        id: 'burn-in-vs-retention',
        title: 'Temporary Image Retention vs Permanent Burn-In',
        content: [
          'It is vital to understand the difference between Temporary Image Retention (TIR) and Permanent Burn-In.',
          'Temporary Image Retention (TIR) is an electrical phenomenon where residual charge remains in the TFT backplane after a high-contrast image has been displayed for 15–30 minutes. A faint ghost of the window remains visible for a few minutes before naturally fading away or clearing during an automated pixel refresher cycle.',
          'Permanent Burn-In is cumulative, non-uniform subpixel degradation. If the red or blue subpixels in your taskbar area have been illuminated at maximum brightness for thousands of hours, they will emit less light than the surrounding less-used pixels, creating a permanent dark silhouette visible across solid color slides.',
        ],
        tips: [
          'Temporary retention fades within minutes or after running a 5-minute short pixel refresher.',
          'Permanent burn-in is visible across solid red, magenta, and 5% gray screens and never fades.',
        ],
      },
      {
        id: 'how-to-test-oled',
        title: 'How to Test Your OLED Screen for Burn-In',
        content: [
          'Follow these diagnostic steps using our full-screen color test slides to detect early signs of wear.',
        ],
        steps: [
          'Open WhiteScreen.vip in fullscreen mode to eliminate browser headers and taskbars.',
          'Select the Solid Red screen: red organic subpixels wear out faster than green subpixels. Carefully examine the taskbar area, browser URL bar location, and corner HUD positions for dark ghosts.',
          'Select the Solid Magenta and Solid Cyan screens: composite colors expose differential subpixel wear between color channels.',
          'Select the 5% Dark Gray and 10% Gray screens: near-black gray slides expose vertical banding and non-uniform pixel degradation that remain invisible on pure white.',
          'Inspect at normal viewing distance: if you notice sharp outlines of desktop icons or application toolbars, your panel is exhibiting permanent burn-in.',
        ],
      },
      {
        id: 'prevention-guidelines',
        title: 'Essential Guidelines to Prevent OLED Burn-In',
        content: [
          'Modern OLED monitors come equipped with built-in protection algorithms, but simple operating system habits provide the strongest defense against premature wear.',
        ],
        checklist: [
          'Enable "Automatically hide the taskbar" in Windows Settings (or Dock autohide on macOS).',
          'Use Dark Mode in Windows, macOS, and web browsers: black pixels in OLED consume 0% power and generate 0% subpixel wear.',
          'Set your screen sleep timeout to 3–5 minutes of inactivity so static desktops do not remain energized when you step away.',
          'Use a full-screen screensaver such as our Flip Clock Screensaver or Black Screen when leaving your desk.',
          'Never unplug your OLED monitor from the wall outlet immediately after powering down; the monitor performs an automated pixel cleaning cycle in standby mode.',
          'Enable panel protection features in your monitor OSD: Pixel Shift, Logo Brightness Limiter, and Thermal Management.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do flashing pixel exercisers fix OLED burn-in?',
        answer:
          'No. Rapid flashing screens do not restore degraded organic material. In fact, running aggressive flashing patterns at maximum brightness causes additional unnecessary thermal stress on the panel.',
      },
      {
        question: 'How often should I run the deep pixel refresher cycle?',
        answer:
          'Only run deep panel refresh cycles when prompted by your monitor manufacturer (typically once every 500 to 1,500 hours of operation) or if severe image retention persists. Running deep refreshers excessively accelerates panel wear.',
      },
    ],
    relatedSlugs: ['screen-uniformity-test', 'dead-pixel-test', 'screen-color-test', 'monitor-test'],
  },

  // 6. Monitor Test (Comprehensive Diagnostic Bench Test)
  {
    slug: 'monitor-test',
    path: '/guides/monitor-test/',
    navLabel: 'Monitor Test',
    title: 'Complete Monitor Test Guide: Benchmarking New Screens for Faults, Color, and Speed',
    metaTitle: 'Monitor Test Guide – How to Benchmark Any Display | WhiteScreen.vip',
    metaDescription:
      'A complete diagnostic guide to testing a new or existing computer monitor for dead pixels, sharpness, gamma, contrast, backlight bleed, and response time.',
    readingTime: '6 min read',
    updatedAt: '2026-03-15',
    category: 'Display Diagnostics',
    intro:
      'Unboxing a new monitor is exciting, but manufacturing defects such as dead subpixels, excessive backlight bleed, color uniformity shifts, and incorrect gamma tracking frequently slip past factory quality control. Because most retailers offer a strict 14-to-30-day no-hassle return window, running a thorough 15-minute bench test as soon as your display arrives is the single best way to ensure you received a flawless panel.',
    primaryTool: {
      label: 'Open Full Monitor Test Suite',
      path: '/monitor-test',
      description: 'Comprehensive test patterns: gradients, gamma charts, sharpness grids, and color bars.',
    },
    sections: [
      {
        id: 'new-monitor-checklist',
        title: 'The 6-Step New Monitor Bench Test Checklist',
        content: [
          'Before discarding the retail packaging or registering your warranty, execute this complete 6-stage panel evaluation.',
        ],
        steps: [
          '1. Physical & Cable Inspection: ensure DisplayPort or HDMI cables support your monitor’s native resolution, refresh rate (e.g. 144Hz–240Hz), and full 10-bit color depth.',
          '2. Dead Pixel Inspection: open fullscreen White, Black, Red, Green, and Blue screens to inspect every quadrant for stuck or non-functioning subpixels.',
          '3. Uniformity & Bleed Check: in a dimly lit room, inspect a pure black screen for edge bleed and a 50% gray screen for dirty screen effect (DSE).',
          '4. Gamma & Contrast Tracking: view our grayscale ramp pattern to verify that near-black steps (1%–5%) and near-white steps (95%–99%) remain distinctly visible without crushing or clipping.',
          '5. Sharpness & Scaling Check: inspect fine 1-pixel alternating black-and-white grid lines to ensure text rendering is sharp with zero moiré color fringing.',
          '6. Motion Clarity & Ghosting: run motion test patterns to check pixel response time and tune monitor Overdrive / Response Time settings to eliminate inverse ghosting overshoot.',
        ],
      },
      {
        id: 'panel-types',
        title: 'Understanding What is Normal for Your Panel Type',
        content: [
          'Knowing your panel technology prevents returning a monitor for characteristics that are normal engineering tradeoffs.',
          'IPS Panels: excel at color accuracy and wide viewing angles (178°). Normal tradeoff: lower contrast ratio (1,000:1) and mild IPS glow visible from oblique angles.',
          'VA Panels: deliver deep contrast ratios (3,000:1 to 5,000:1) with dark inky blacks. Normal tradeoff: dark-level smearing in fast-motion scenes and narrow viewing angles.',
          'OLED / QD-OLED Panels: deliver infinite contrast, true blacks, and instant 0.03ms pixel response times. Normal tradeoff: potential for image retention and lower full-field sustained brightness.',
          'TN Panels: legacy esports displays with high refresh rates. Normal tradeoff: washed out colors and severe vertical color shifting when viewed slightly above or below center.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I test my monitor with HDR enabled or disabled?',
        answer:
          'Perform baseline color and pixel uniformity tests with HDR disabled in Windows, as Windows HDR can introduce tone mapping anomalies on non-FALD displays. Once SDR baseline accuracy is confirmed, toggle HDR to inspect peak brightness and local dimming zones.',
      },
      {
        question: 'What is monitor Overdrive and how should I set it?',
        answer:
          'Overdrive applies extra voltage to liquid crystal subpixels to speed up transitions and reduce motion blur. Setting Overdrive too high causes "inverse ghosting" (bright halos trailing behind moving objects). The "Normal" or "Fast" preset is typically best, while "Extreme" almost always creates severe overshoot.',
      },
    ],
    relatedSlugs: ['dead-pixel-test', 'screen-color-test', 'screen-uniformity-test', 'clean-laptop-screen'],
  },

  // 7. Video Call & Zoom Lighting
  {
    slug: 'white-screen-for-video-calls-and-zoom',
    path: '/guides/white-screen-for-video-calls-and-zoom/',
    navLabel: 'Zoom Lighting',
    title: 'How to Use a White Screen as a Soft Light for Video Calls and Zoom',
    metaTitle: 'How to Use White Screen as Soft Light for Zoom Calls | WhiteScreen.vip',
    metaDescription:
      'Turn your monitor or laptop into a bright, flattering ring-light alternative for Zoom, Google Meet, and video conferences without buying extra hardware.',
    readingTime: '5 min read',
    updatedAt: '2026-02-10',
    category: 'Lighting & Visuals',
    intro:
      'High-quality webcam video depends far more on good lighting than on buying an expensive 4K camera. When lighting is dim, webcam sensors compensate by increasing digital gain (ISO), introducing heavy electronic noise and grain. By opening WhiteScreen.vip on a second monitor or alongside your video window, you instantly turn your display into a massive, diffused softbox light.',
    primaryTool: {
      label: 'Open Zoom Lighting Tool',
      path: '/zoom-lighting',
      description: 'Adjustable warm-to-cool soft white light source designed specifically for webcam illumination.',
    },
    sections: [
      {
        id: 'why-it-works',
        title: 'Why Large Display Lighting Beats Small Ring Lights',
        content: [
          'In photography physics, the larger the light source relative to the subject, the softer and more flattering the shadows. A dedicated 10-inch ring light produces harsh specular reflections in glasses and pinpoints sharp facial shadows.',
          'A 24-inch or 27-inch computer monitor displaying a solid white screen creates an expansive light emitter that fills in eye sockets, softens skin texture, and reflects natural catchlights in your eyes.',
        ],
      },
      {
        id: 'setup-steps',
        title: 'How to Position Your White Screen Light',
        content: [
          'Maximize flattering facial illumination with these layout adjustments.',
        ],
        steps: [
          'Dual-monitor setup: place the white screen on the display directly behind or directly adjacent to your webcam.',
          'Single-monitor setup: split your screen 50/50. Place your Zoom or Teams meeting on one half and WhiteScreen.vip on the other half.',
          'Adjust color temperature: use our warm white preset (around 5000K–5500K) for flattering skin tones, or daylight white (6500K) if your room is illuminated by sunlight.',
          'Dial brightness: set brightness to 70%–90% to avoid squinting.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will keeping a white screen open damage my monitor during long meetings?',
        answer:
          'On LCD/LED panels, displaying a solid white screen causes zero harm and negligible extra wear. On OLED panels, keep brightness moderate (around 50%–70%) to minimize thermal buildup.',
      },
    ],
    relatedSlugs: ['clean-laptop-screen', 'screen-color-test', 'dead-pixel-test'],
  },

  // 8. Tracing & Drawing
  {
    slug: 'fullscreen-white-screen-for-drawing-and-tracing',
    path: '/guides/fullscreen-white-screen-for-drawing-and-tracing/',
    navLabel: 'Drawing & Tracing',
    title: 'How to Use Your Tablet or Monitor as a Digital Lightbox for Tracing and Drawing',
    metaTitle: 'Use Tablet or Monitor as a Lightbox for Tracing | WhiteScreen.vip',
    metaDescription:
      'Learn how to turn your iPad, Android tablet, or laptop into a bright, clean digital light table for tracing sketches, calligraphy, and film negatives.',
    readingTime: '5 min read',
    updatedAt: '2026-02-10',
    category: 'Lighting & Visuals',
    intro:
      'Traditional light tables and tracing boxes can cost upwards of $60 and clutter your desk. If you already own an iPad, Android tablet, or laptop, you can transform your device into an ultra-bright, flicker-free digital lightbox in one click.',
    primaryTool: {
      label: 'Open White Screen Lightbox',
      path: '/',
      description: 'Fullscreen white light source ideal for paper tracing, stenciling, and inspecting negatives.',
    },
    sections: [
      {
        id: 'tracing-setup',
        title: 'Step-by-Step Tracing Setup',
        content: [
          'Follow these tips to trace paper sketches without triggering unwanted touchscreen clicks.',
        ],
        steps: [
          'Open WhiteScreen.vip in fullscreen mode and turn device screen brightness to 100%.',
          'Lock touch input: on iPad, enable Guided Access (Settings > Accessibility > Guided Access) to disable touch response while drawing.',
          'On Android: use Screen Pinning or an app lock utility to prevent accidental touches.',
          'Place your reference artwork onto the screen, lay a sheet of tracing paper or lightweight sketchbook paper (under 90 gsm) on top.',
          'Use a soft graphite pencil (2B to 4B) or fine-liner pen with light hand pressure to trace contours effortlessly.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can drawing on my screen with a pencil damage the glass?',
        answer:
          'Tablet glass (such as Gorilla Glass) is significantly harder than graphite pencil lead and will not scratch from normal pencil contact. However, avoid hard pressure and ensure your paper has no grit or sand underneath.',
      },
    ],
    relatedSlugs: ['clean-laptop-screen', 'screen-color-test', 'dead-pixel-test'],
  },

  // 9. Best Monitor Settings for Eye Strain
  {
    slug: 'best-monitor-settings-for-eye-strain',
    path: '/guides/best-monitor-settings-for-eye-strain/',
    navLabel: 'Eye Strain Settings',
    title: 'Best Monitor Settings for Eye Strain, Headaches, and Night Reading',
    metaTitle: 'Best Monitor Settings for Eye Strain & Fatigue | WhiteScreen.vip',
    metaDescription:
      'Optimize monitor brightness, contrast, color temperature, and ambient room lighting to eliminate digital eye fatigue and computer vision syndrome.',
    readingTime: '6 min read',
    updatedAt: '2026-02-10',
    category: 'Display Maintenance',
    intro:
      'Staring at a harsh, misconfigured monitor for 8 to 10 hours a day causes Computer Vision Syndrome (CVS), marked by dry eyes, blurred vision, tension headaches, and neck stiffness. Adjusting display luminance to harmonize with room lighting is the most impactful ergonomic improvement you can make.',
    primaryTool: {
      label: 'Open the White Screen Tool',
      path: '/',
      description: 'Compare screen luminance with ambient paper lighting to calibrate comfortable brightness.',
    },
    sections: [
      {
        id: 'eye-strain-adjustments',
        title: 'Core Monitor Adjustments for Eye Comfort',
        content: [
          'Implement these research-backed visual ergonomics to reduce eye fatigue instantly.',
        ],
        steps: [
          'The White Paper Luminance Match: hold a plain white sheet of paper next to your monitor. Adjust monitor brightness until a fullscreen white window matches the brightness of the paper.',
          'Color Temperature: shift display color temperature from cool 7500K blue down to warm 5000K–6500K.',
          'Eliminate PWM Flicker: verify your monitor is rated "Flicker-Free" (direct current DC dimming rather than low-frequency pulse-width modulation).',
          'Follow the 20-20-20 Rule: every 20 minutes, look at an object 20 feet away for at least 20 seconds to relax ciliary eye muscles.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does dark mode prevent eye strain better than light mode?',
        answer:
          'Dark mode reduces overall light emission in dim rooms, which helps reduce glare. However, for reading long text in well-lit rooms, black text on a clean, softly calibrated white background provides higher visual contrast and faster reading comprehension.',
      },
    ],
    relatedSlugs: ['screen-color-test', 'screen-uniformity-test', 'monitor-test'],
  },

  // 10. General Display Problems Diagnostics
  {
    slug: 'common-monitor-display-problems-diagnostics',
    path: '/guides/common-monitor-display-problems-diagnostics/',
    navLabel: 'Display Diagnostics',
    title: 'Common Computer Monitor Problems: How to Diagnose and Troubleshoot Display Flaws',
    metaTitle: 'Common Monitor Display Problems & Diagnostics | WhiteScreen.vip',
    metaDescription:
      'Diagnostic guide to common computer monitor issues: screen flickering, color banding, ghosting, stuck pixels, and resolution blur with quick troubleshooting steps.',
    readingTime: '6 min read',
    updatedAt: '2026-02-10',
    category: 'Display Diagnostics',
    intro:
      'From mysterious micro-flicker to fuzzy text and sudden color tinting, display glitches can stem from software driver bugs, faulty cables, incorrect refresh rates, or hardware panel failures. This triage guide helps you systematically isolate the source of any monitor anomaly.',
    primaryTool: {
      label: 'Open Monitor Test Suite',
      path: '/monitor-test',
      description: 'Run diagnostic test patterns to isolate hardware defects from cable or driver issues.',
    },
    sections: [
      {
        id: 'triage-checklist',
        title: 'Display Glitch Triage Procedure',
        content: [
          'Follow this sequence whenever your display exhibits visual anomalies.',
        ],
        steps: [
          'Check the physical cable: loose or uncertified HDMI / DisplayPort cables cause intermittent blackouts, green sparklers, and flicker.',
          'Verify native resolution and refresh rate: running a 4K display at 1080p without integer scaling results in blurry, indistinct text.',
          'Test on an independent device: connect a laptop or game console to the same monitor input to determine whether the bug originates in the PC GPU or the monitor panel.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does my monitor display randomly go black for 2 seconds?',
        answer:
          'Brief 1–2 second blackouts are almost always caused by Display Stream Compression (DSC) bandwidth renegotiation, electromagnetic interference (such as a nearby refrigerator or fan switching on), or a low-grade HDMI/DP cable failing at high refresh rates.',
      },
    ],
    relatedSlugs: ['monitor-test', 'dead-pixel-test', 'screen-uniformity-test'],
  },
  // 11. Maximum brightness on every device
  {
    slug: 'max-brightness',
    path: '/guides/max-brightness/',
    navLabel: 'Max Brightness',
    title: 'How to Turn Screen Brightness All the Way Up on iPhone, Android, Windows and Mac',
    metaTitle: 'Max Screen Brightness on iPhone, Android, Windows & Mac',
    metaDescription:
      'Step-by-step ways to set full brightness on iPhone, Android, Windows and Mac, plus the hidden settings (power saving, auto-dimming, white point) that keep a screen dim.',
    readingTime: '7 min read',
    updatedAt: '2026-11-09',
    category: 'Device Setup',
    intro:
      'A white screen only works as a light, a tracing table or a test pattern if your display is actually at full brightness. Moving the slider to the top is the first step, but every system also has settings that quietly hold brightness back: battery savers, automatic dimming, reduced white point and heat protection. This guide covers both for iPhone, Android, Windows and Mac.',
    warning:
      'Full brightness drains the battery faster and makes phones warm. If a phone gets hot, it will dim itself to protect the battery no matter what the slider says.',
    primaryTool: {
      label: 'Open the White Screen',
      path: '/',
      description: 'A pure white fullscreen page to check your brightness and use as a light.',
    },
    sections: [
      {
        id: 'iphone-brightness',
        title: 'iPhone and iPad',
        content: [
          'The quickest way is Control Center. The same slider is also in Settings, next to the options that can limit it.',
        ],
        steps: [
          'Open Control Center: swipe down from the top-right corner (on iPhones with a Home button, swipe up from the bottom edge).',
          'Drag the brightness slider (the sun icon) all the way up.',
          'Or open Settings > Display & Brightness and move the Brightness slider to the right end.',
          'Turn off Low Power Mode in Settings > Battery, because it lowers display brightness.',
          'Check Settings > Accessibility > Display & Text Size: switch off Reduce White Point, which makes whites dimmer.',
        ],
        tips: [
          'On recent iPhones the very highest brightness, used outdoors in sunlight, is only reached when Auto-Brightness is on (Settings > Accessibility > Display & Text Size). For a fixed level indoors, turn Auto-Brightness off instead.',
          'Night Shift and True Tone (in Display & Brightness) change the color of white, not the brightness. Turn them off when you need neutral white.',
        ],
      },
      {
        id: 'android-brightness',
        title: 'Android phones and tablets',
        content: [
          'Menu names differ slightly between brands, but every Android phone has the brightness slider in Quick Settings and in the Display settings.',
        ],
        steps: [
          'Swipe down from the top of the screen twice to open Quick Settings.',
          'Drag the brightness slider fully to the right.',
          'Or go to Settings > Display and set Brightness level to the maximum.',
          'Turn off Battery Saver or Power saving mode, which can cap brightness.',
          'If your phone has Extra dim (on Pixel phones, under Settings > Accessibility), make sure it is off.',
        ],
        tips: [
          'Some Samsung Galaxy models have an Extra brightness switch under Settings > Display that raises the manual maximum.',
          'Like iPhones, many Android phones only reach their peak outdoor brightness with Adaptive brightness on. Turn it off if you want the level to stay put.',
        ],
      },
      {
        id: 'windows-brightness',
        title: 'Windows laptops and monitors',
        content: [
          'On a laptop, Windows controls the built-in screen. An external monitor is different: its brightness is usually set with the buttons on the monitor itself.',
        ],
        steps: [
          'Press Windows + A to open Quick Settings and drag the brightness slider to the right.',
          'Or use the brightness keys on the keyboard (often Fn plus a sun key).',
          'In Settings > System > Display > Brightness, turn off the options that change brightness automatically with the lighting or with the content shown.',
          'In Settings > System > Power & battery, turn off Battery saver or the option that lowers screen brightness while it is on.',
          'For an external monitor, open its on-screen menu (OSD) with the buttons on the monitor and raise Brightness there.',
        ],
        tips: [
          'With HDR on, Windows shows normal (SDR) content dimmer by default. Raise SDR content brightness under Settings > System > Display > HDR.',
          'Plugging the laptop in often allows a brighter screen than running on battery.',
        ],
      },
      {
        id: 'mac-brightness',
        title: 'Mac',
        content: [
          'MacBooks and Apple displays respond to the brightness keys. Other external monitors usually need their own buttons.',
        ],
        steps: [
          'Press the brightness up key (F2 or the sun key) until the level is full, or open Control Center > Display and drag the slider to the right.',
          'Or open System Settings > Displays and move the Brightness slider to the end.',
          'In System Settings > Displays, turn off Automatically adjust brightness if you want the level to stay fixed.',
          'In System Settings > Battery > Options, turn off Slightly dim the display on battery.',
          'Turn off Low Power Mode in System Settings > Battery, because it can lower brightness.',
        ],
        tips: [
          'Night Shift and True Tone (System Settings > Displays) tint white towards yellow. Turn them off for neutral white.',
          'MacBook Pro models with an XDR display can show HDR content brighter than the normal maximum; a plain white page uses the standard (SDR) level.',
        ],
      },
      {
        id: 'still-dim',
        title: 'Still too dim? Check these',
        content: ['If the slider is already at the top and the screen still looks dim, one of these is usually the reason.'],
        checklist: [
          'A battery saver or Low Power Mode is on.',
          'The device is hot and is protecting itself; let it cool down.',
          'A reduce white point, extra dim or eye comfort setting is on.',
          'Automatic or content-based brightness is lowering it in a dark room.',
          'On an external monitor, the brightness is set in the monitor menu, not in the system.',
          'A screen protector or a dirty screen is scattering light.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does the white screen tool make my display brighter?',
        answer:
          'No website can go past your device’s brightness setting. A white screen shows the brightest color your display can produce, so it is the easiest way to see your current maximum.',
      },
      {
        question: 'Why does my phone get dimmer after a few minutes at full brightness?',
        answer:
          'Phones lower brightness when they get warm, and some lower it after a while to save power. Keep the phone cool, out of direct sun and unplugged from fast charging if you need full brightness for long.',
      },
      {
        question: 'Is it bad to keep a screen at full brightness?',
        answer:
          'It uses more power and, on OLED screens, ages the pixels faster, especially when the same image stays on screen. For lighting or tracing it is fine; turn it down again when you are done.',
      },
    ],
    relatedSlugs: ['browser-fullscreen', 'multi-monitor-setup', 'white-screen-for-video-calls-and-zoom'],
  },

  // 12. Fullscreen in every browser
  {
    slug: 'browser-fullscreen',
    path: '/guides/browser-fullscreen/',
    navLabel: 'Fullscreen in Any Browser',
    title: 'How to Go Fullscreen in Chrome, Safari, Edge and Firefox on Any Device',
    metaTitle: 'How to Go Fullscreen in Chrome, Safari, Edge & Firefox',
    metaDescription:
      'Keyboard shortcuts and steps to make any page fill the whole screen in Chrome, Edge, Firefox and Safari on Windows, Mac, Android, iPhone and Chromebook, and how to exit.',
    readingTime: '6 min read',
    updatedAt: '2026-11-09',
    category: 'Device Setup',
    intro:
      'There are two kinds of fullscreen. Browser fullscreen hides the browser’s tabs and toolbar for every page. Page fullscreen is what the Fullscreen button on WhiteScreen.vip uses: one page takes over the whole screen until you press Esc. Page fullscreen is the cleanest for color screens and tests, and it works in every desktop browser and on Android. This guide covers both, plus the workarounds for iPhone.',
    primaryTool: {
      label: 'Open the White Screen',
      path: '/',
      description: 'Press F or the Fullscreen button to try page fullscreen right away.',
    },
    sections: [
      {
        id: 'page-fullscreen',
        title: 'The fastest way on WhiteScreen.vip',
        content: ['Every screen and tool on this site has its own fullscreen mode, so you rarely need the browser shortcuts.'],
        steps: [
          'Click the Fullscreen button under the screen, or the icon in its corner.',
          'Or press the F key on your keyboard.',
          'Or double-click (on a phone, double-tap) the screen itself.',
          'To exit, press Esc, press F again, or double-click.',
        ],
      },
      {
        id: 'windows-chromebook',
        title: 'Windows and Chromebook',
        content: ['Chrome, Edge, Firefox, Opera and Brave all use the same key on Windows.'],
        steps: [
          'Press F11 to make the browser fill the screen. On many laptops you need Fn + F11.',
          'Press F11 again to exit. Moving the pointer to the top edge shows the tabs and an exit button.',
          'On a Chromebook, press the fullscreen key in the top row of the keyboard (a rectangle with corners).',
        ],
        tips: ['If F11 changes the volume or brightness instead, hold Fn while pressing it, or turn on the function key setting in your laptop’s utilities.'],
      },
      {
        id: 'mac',
        title: 'Mac',
        content: ['On a Mac, browsers use the same system shortcut for fullscreen.'],
        steps: [
          'Press Control + Command + F in Safari, Chrome, Edge or Firefox. On recent macOS versions, Fn + F (the Globe key + F) also works.',
          'Or click the green button in the top-left corner of the window.',
          'Press the same shortcut again to exit, or move the pointer to the top and click the green button.',
        ],
        tips: [
          'If the toolbar stays visible in fullscreen, turn off View > Always Show Toolbar in Full Screen in Safari or Chrome.',
          'The menu bar slides down when the pointer touches the top edge. Keep the pointer away from it, or use page fullscreen, which hides it.',
        ],
      },
      {
        id: 'android',
        title: 'Android',
        content: [
          'Chrome, Samsung Internet, Firefox and Edge on Android all support page fullscreen, so the Fullscreen button hides the address bar and system bars.',
        ],
        steps: [
          'Tap the Fullscreen button or double-tap the screen.',
          'To exit, swipe in from an edge to show the system bars and press Back, or double-tap again.',
        ],
      },
      {
        id: 'iphone',
        title: 'iPhone and iPad',
        content: [
          'iPad Safari supports page fullscreen, so the Fullscreen button works there. iPhone Safari only allows fullscreen for videos, so on an iPhone the page fills the browser window instead. These steps get close to true fullscreen.',
        ],
        steps: [
          'Turn the iPhone to landscape: Safari shrinks its bars.',
          'Tap the page settings button in the address bar and choose Hide Toolbar, where your iOS version offers it.',
          'For the cleanest result, tap Share > Add to Home Screen. Opening WhiteScreen.vip from the Home Screen icon runs it without Safari’s address bar.',
        ],
        tips: ['Turn on Rotation Lock after positioning, so the screen does not flip while you use it as a light or for tracing.'],
      },
    ],
    faqs: [
      {
        question: 'Why does pressing F do nothing?',
        answer:
          'The page needs keyboard focus. Click once anywhere on the page first, then press F. Browsers also block fullscreen that is not started by a click or key press, which is why it never opens on its own.',
      },
      {
        question: 'What is the difference between F11 and the Fullscreen button?',
        answer:
          'F11 is browser fullscreen: it stays on as you move between pages. The Fullscreen button is page fullscreen: only that screen fills the display, and Esc exits it.',
      },
      {
        question: 'How do I exit fullscreen if nothing is visible?',
        answer: 'Press Esc. If that does not work, press F11 on Windows or Control + Command + F on a Mac. On a phone, swipe in from an edge.',
      },
    ],
    relatedSlugs: ['max-brightness', 'multi-monitor-setup', 'fullscreen-white-screen-for-drawing-and-tracing'],
  },

  // 13. Multi-monitor setups
  {
    slug: 'multi-monitor-setup',
    path: '/guides/multi-monitor-setup/',
    navLabel: 'Multi-Monitor Setup',
    title: 'Using White Screens and Screen Tests on Multiple Monitors',
    metaTitle: 'White Screen & Screen Tests on Multiple Monitors',
    metaDescription:
      'Put a fullscreen color or test on any monitor, run screens on several displays at once, and match brightness and white point across monitors on Windows and Mac.',
    readingTime: '7 min read',
    updatedAt: '2026-11-09',
    category: 'Device Setup',
    intro:
      'With two or more displays, fullscreen opens on whichever monitor the browser window is on. Once you know that, it is easy to light a video call from a second screen, check every monitor for dead pixels, or compare two displays side by side with the same white.',
    primaryTool: {
      label: 'Open the White Screen',
      path: '/',
      description: 'Move the window to any monitor, then press F to fill that screen.',
    },
    sections: [
      {
        id: 'extend-displays',
        title: 'First, extend your desktop',
        content: [
          'To show different things on each screen, the displays must be extended, not mirrored. Mirroring shows the same image everywhere.',
        ],
        steps: [
          'Windows: press Windows + P and choose Extend. Arrange the screens to match your desk in Settings > System > Display.',
          'Mac: open System Settings > Displays, click Arrange, and make sure the displays are not set to mirror.',
        ],
      },
      {
        id: 'one-screen',
        title: 'Fill one specific monitor',
        content: ['Fullscreen always uses the monitor that holds the browser window.'],
        steps: [
          'Drag the browser window by its title bar onto the monitor you want.',
          'Windows shortcut: press Windows + Shift + Left or Right arrow to move the active window to the next monitor.',
          'Mac: drag the window, or use Window > Move to and pick the display, if your browser offers it.',
          'Press F (or the Fullscreen button) to fill that monitor. The other screens stay usable.',
        ],
      },
      {
        id: 'several-screens',
        title: 'Run screens on several monitors at once',
        content: ['Each browser window can be fullscreen on its own monitor, so open one window per screen.'],
        steps: [
          'Open a new browser window with Ctrl + N (Command + N on a Mac).',
          'Open the screen or test you want in each window and move each window to a different monitor.',
          'Click inside each window and press F to make it fullscreen.',
        ],
        tips: [
          'On a Mac, keep System Settings > Desktop & Dock > Displays have separate Spaces turned on (the default). Without it, only one display can show a fullscreen window at a time.',
          'Press Esc in a window to exit its fullscreen without affecting the others.',
        ],
      },
      {
        id: 'match-monitors',
        title: 'Match brightness and color across monitors',
        content: [
          'Two monitors rarely show exactly the same white. Showing the same white screen on both makes the difference obvious, so you can adjust them to match.',
        ],
        steps: [
          'Let both monitors warm up for about 30 minutes.',
          'Turn off Night Light (Windows) or Night Shift and True Tone (Mac) on every display.',
          'Show the white screen fullscreen on both monitors.',
          'In each monitor’s on-screen menu, choose the same color mode, such as sRGB or 6500K.',
          'Adjust brightness on each monitor until the whites look equally bright, then fine-tune the color temperature or RGB settings to remove any tint.',
          'Check gray too: the Screen Color Test shows mid-gray, where small tint differences are easier to see.',
        ],
        tips: ['Brightness percentages are not comparable between monitors: 50% on one can be far brighter than 50% on another. Match them by eye, not by the number.'],
      },
      {
        id: 'tv-second-screen',
        title: 'Using a TV as a second screen',
        content: [
          'TVs often crop the picture edges (overscan) and sharpen or tint the image, which spoils tests and makes text blurry.',
        ],
        checklist: [
          'Set the TV’s picture size to Just Scan, Screen Fit or 1:1 Pixel Mapping.',
          'Choose PC or Game mode to turn off extra processing.',
          'Set the computer to the TV’s native resolution in the display settings.',
          'Use the Screen Resolution Test to confirm the edges are not cut off.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does fullscreen open on the wrong monitor?',
        answer: 'Fullscreen uses the monitor the browser window is on. Exit fullscreen, move the window to the monitor you want, and press F again.',
      },
      {
        question: 'Can I show a different color on each monitor?',
        answer: 'Yes. Open a separate browser window for each monitor, choose a different color in each, and make each one fullscreen.',
      },
      {
        question: 'Can I use a second monitor as a light for video calls?',
        answer:
          'Yes. Put the white screen fullscreen on the monitor beside or behind your camera and turn its brightness up. The Zoom Lighting tool lets you warm or cool the light to suit your skin tone.',
      },
    ],
    relatedSlugs: ['browser-fullscreen', 'max-brightness', 'screen-color-test'],
  },
] as const

/**
 * Slugs alias map for backward compatibility and canonical mapping.
 */
export const GUIDE_SLUG_ALIASES: Record<string, string> = {
  // Aliases for 1: Dead Pixel Test
  'how-to-test-monitor-dead-pixels': 'dead-pixel-test',
  'spot-stuck-pixels-vs-dead-pixels': 'dead-pixel-test',
  // Aliases for 2: Screen Color Test
  'test-monitor-colors-and-uniformity': 'screen-color-test',
  // Aliases for 3: Screen Uniformity Test
  'check-ips-glow-and-backlight-bleed': 'screen-uniformity-test',
  // Aliases for 4: Clean Laptop Screen
  'how-to-use-white-screen-for-monitor-cleaning': 'clean-laptop-screen',
  // Aliases for 5: OLED Burn-In Prevention
  'oled-screen-burn-in-test-and-prevention': 'oled-burn-in-prevention',
}

function englishGuide(slug: string): GuideArticle | undefined {
  const normalized = slug
    .replace(/^\/+|\/+$/g, '')
    .replace(/^guides\//, '')
    .replace(/\/+$/, '')

  const targetSlug = GUIDE_SLUG_ALIASES[normalized] || normalized
  return GUIDES.find((g) => g.slug === targetSlug)
}

/** A guide in `lang`, falling back to English for any language without a translation. */
export function getGuideBySlug(slug: string, lang: LanguageCode = 'en'): GuideArticle | undefined {
  const guide = englishGuide(slug)
  if (!guide || lang === 'en') return guide
  const t = GUIDE_TRANSLATIONS[lang]?.[guide.slug]
  if (!t) return guide
  return {
    ...guide,
    navLabel: t.navLabel,
    title: t.title,
    metaTitle: t.metaTitle,
    metaDescription: t.metaDescription,
    readingTime: t.readingTime,
    category: t.category,
    intro: t.intro,
    warning: t.warning ?? guide.warning,
    primaryTool: { ...guide.primaryTool, label: t.toolLabel, description: t.toolDescription },
    sections: guide.sections.map((section, index) => ({ ...section, ...t.sections[index], id: section.id })),
    faqs: t.faqs,
  }
}

/** Every guide available in `lang`. Guides not yet translated are listed only in English (their URLs are English-only too). */
export function getGuides(lang: LanguageCode = 'en'): GuideArticle[] {
  return GUIDES.filter((guide) => hasGuideTranslation(guide.slug, lang)).map((guide) => getGuideBySlug(guide.slug, lang)!)
}

/** Whether a guide has a translation in `lang` (English always does). */
export function hasGuideTranslation(slug: string, lang: LanguageCode) {
  return lang === 'en' || Boolean(GUIDE_TRANSLATIONS[lang]?.[slug])
}
