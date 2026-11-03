export type GlossaryItem = {
  slug: string
  title: string
  shortLabel: string
  definition: string
  metaTitle: string
  metaDescription: string
  howItWorks: string[]
  keySpecs: { metric: string; standard: string; description: string }[]
  comparisons: {
    title: string
    headers: string[]
    rows: string[][]
  }
  practicalExamples: { scenario: string; explanation: string }[]
  advantagesAndLimits: {
    advantages: string[]
    limitations: string[]
  }
  misunderstandings: { myth: string; reality: string }[]
  relatedTools: { name: string; path: string; description: string }[]
}

export const GLOSSARY_ITEMS: readonly GlossaryItem[] = [
  {
    slug: 'refresh-rate',
    title: 'Refresh Rate (Hz): Display Frequency, Frame Pacing, and Latency Guide',
    shortLabel: 'Refresh Rate',
    definition:
      'Refresh rate, expressed in Hertz (Hz), is the exact number of times per second that a monitor’s hardware controller redraws the entire pixel raster frame on screen.',
    metaTitle: 'What is Refresh Rate? (60Hz, 120Hz, 144Hz, 240Hz Guide) | WhiteScreen.vip',
    metaDescription:
      'In-depth engineering guide to monitor refresh rate (Hz), frame time intervals, motion persistence, VRR (G-Sync/FreeSync), and testing high refresh rates.',
    howItWorks: [
      'Every digital display panel operates on an internal clock that scans out lines of pixels sequentially from top-left to bottom-right. The refresh rate determines how rapidly the display hardware reads new pixel color data from its internal frame buffer and applies electrical voltage to shift the liquid crystal or organic diode state.',
      'A traditional 60Hz monitor redraws the screen once every 16.67 milliseconds. When switching to a 144Hz gaming panel, the redraw interval shrinks to 6.94 milliseconds, while a 240Hz esports display updates every 4.17 milliseconds. This dramatic reduction in frame delivery intervals slashes the physical time a moving object remains static on retinas, cutting down sample-and-hold motion blur.',
      'Modern displays utilize Variable Refresh Rate (VRR) standards like VESA Adaptive-Sync, AMD FreeSync, and NVIDIA G-Sync. VRR enables the monitor to dynamically synchronize its redraw cycles to the exact moment your graphics processing unit (GPU) finishes rendering a new frame, eliminating screen tearing and stutter caused by desynchronized refresh cycles.',
    ],
    keySpecs: [
      {
        metric: '60 Hz (Baseline)',
        standard: '16.67 ms frame time',
        description: 'Standard for office monitors, basic laptops, and broadcast video. Suitable for document editing and web browsing.',
      },
      {
        metric: '120 Hz / 144 Hz (Fluid Standard)',
        standard: '8.33 ms / 6.94 ms frame time',
        description: 'Mainstream high-refresh benchmark for modern smartphones, macOS ProMotion, and enthusiast PC gaming. Noticeably reduces eye fatigue during fast scrolling.',
      },
      {
        metric: '240 Hz / 360 Hz / 540 Hz (Esports)',
        standard: '4.17 ms down to 1.85 ms frame time',
        description: 'Competitive tournament tier. Minimizes end-to-end input lag and provides maximum motion clarity for high-speed tracking.',
      },
      {
        metric: 'Variable Refresh Rate (VRR)',
        standard: 'HDMI 2.1 VRR / DisplayPort Adaptive-Sync',
        description: 'Dynamically scales panel refresh rate from 40Hz up to panel maximum, preventing both screen tearing and frame buffer stutter.',
      },
    ],
    comparisons: {
      title: 'Refresh Rate Tiers: Frame Time, Latency & Best Uses',
      headers: ['Refresh Rate', 'Frame Delivery Time', 'Perceived Motion Clarity', 'Recommended Application'],
      rows: [
        ['60 Hz', '16.67 ms per frame', 'Standard baseline; noticeable motion blur on rapid pan', 'Office work, programming, general video streaming'],
        ['120 Hz', '8.33 ms per frame', 'Smooth cursor tracking; 50% reduction in motion blur', 'Smartphones, creative workstations, casual gaming'],
        ['144 Hz / 165 Hz', '6.94 ms / 6.06 ms', 'Excellent fluid response; snappy window management', 'Mainstream PC gaming, fast-paced multimedia'],
        ['240 Hz - 540 Hz', '4.17 ms - 1.85 ms', 'Near-zero motion smear; instantaneous cursor response', 'Competitive first-person shooters, esports tournaments'],
      ],
    },
    practicalExamples: [
      {
        scenario: 'Cursor Tracking Across Desktop',
        explanation: 'Rapidly circling your mouse cursor across the desktop at 60Hz yields a trail of separated, jumpy pointer images. At 144Hz or 240Hz, the cursor forms a silky, contiguous stream.',
      },
      {
        scenario: 'High-Speed Document and Web Scrolling',
        explanation: 'Flicking through a long PDF or webpage at 120Hz allows text and headlines to remain legible while in motion, preventing the eye-strain disorientation common at 60Hz.',
      },
      {
        scenario: 'Fast Camera Pans in Video Games',
        explanation: 'Spinning 180 degrees in a 3D environment at 144Hz keeps background environmental details identifiable rather than smearing into an illegible streak.',
      },
    ],
    advantagesAndLimits: {
      advantages: [
        'Dramatically smoother window animations, text scrolling, and cursor navigation.',
        'Lower end-to-end system input latency from mouse click to visual display response.',
        'Reduces eye fatigue and virtual motion sickness during extended viewing sessions.',
        'Eliminates horizontal screen tearing artifacts when paired with G-Sync or FreeSync.',
      ],
      limitations: [
        'Demands significantly higher GPU and CPU computational bandwidth to sustain high frame rates in 3D apps.',
        'Consumes noticeably more battery power on laptops and mobile devices when high refresh is active.',
        'Requires modern high-bandwidth cables (DisplayPort 1.4/2.1 or HDMI 2.1) to support high refresh at 1440p and 4K.',
      ],
    },
    misunderstandings: [
      {
        myth: 'The human eye can only process up to 30 or 60 frames per second.',
        reality:
          'Human optical biology does not function in discrete frame intervals. Research shows human visual pathways can identify flashes down to 1 millisecond (1000Hz equivalent) and reliably perceive motion smoothness improvements well past 240Hz.',
      },
      {
        myth: 'Plugging in a 144Hz monitor automatically makes it run at 144Hz.',
        reality:
          'Windows and macOS frequently initialize newly connected external displays at 60Hz for compatibility. Users must manually open display settings to configure the higher refresh rate and verify the display cable supports the requested bandwidth.',
      },
      {
        myth: 'High refresh rate is only useful for hardcore video gamers.',
        reality:
          'High refresh rate enhances everyday desktop usability: dragging windows, scrolling spreadsheets, reading code, and handwriting with digital styluses all feel noticeably more responsive.',
      },
    ],
    relatedTools: [
      {
        name: 'Monitor Test Suite',
        path: '/monitor-test',
        description: 'Inspect motion blur, frame pacing, ghosting trails, and display responsiveness.',
      },
      {
        name: 'Screen Flickering Guide',
        path: '/screen-problems/screen-flickering',
        description: 'Diagnose refresh rate mismatches, cable bandwidth drops, and PWM backlight strobe.',
      },
      {
        name: 'Screen Tearing Guide',
        path: '/screen-problems/screen-tearing',
        description: 'Understand V-Sync, G-Sync, and buffer flip timing issues on high-refresh panels.',
      },
    ],
  },
  {
    slug: 'oled-vs-lcd',
    title: 'OLED vs LCD Displays: Architecture, Contrast Ratios, and Longevity',
    shortLabel: 'OLED vs LCD',
    definition:
      'OLED and LCD are the two dominant display panel architectures, differing fundamentally in whether pixels produce their own light (self-emissive OLED) or rely on an external LED backlight shining through liquid crystals (transmissive LCD).',
    metaTitle: 'OLED vs LCD Displays: Technical Comparison Guide | WhiteScreen.vip',
    metaDescription:
      'Comprehensive architectural breakdown of OLED vs LCD (IPS, VA): infinite contrast, true black levels, response times, text clarity, and burn-in prevention.',
    howItWorks: [
      'In a Liquid Crystal Display (LCD), a large backlight sheet (comprising white LEDs, Edge-lit strips, or thousands of microscopic Mini-LEDs) projects constant illumination forward through a sandwich of polarizing filters, liquid crystal molecules, and RGB color filters. When displaying black, the liquid crystal molecules twist to block the backlight. Because liquid crystals cannot completely seal off light, residual illumination always leaks through, causing blacks to appear dark charcoal or navy gray.',
      'In an Organic Light Emitting Diode (OLED) display, every single subpixel is an independent organic semiconductor diode that generates its own precise illumination and color when electrical current is applied. To display true black, the display controller completely shuts off electrical power to that specific pixel, resulting in zero candelas per square meter (0.0000 nits) of emitted light.',
      'This architectural distinction gives OLED displays an infinite contrast ratio (∞:1), instantaneous pixel response times (~0.03ms), and zero backlight bleeding or IPS glow. In contrast, LCD panels retain distinct advantages in maximum full-screen sustained brightness, resistance to permanent static image retention, and sharper text rendering due to traditional full-stripe RGB subpixel layouts.',
    ],
    keySpecs: [
      {
        metric: 'Contrast Ratio',
        standard: 'LCD: 1,000:1 - 5,000:1 | OLED: Infinite (∞:1)',
        description: 'OLED produces pure photometric black (0.0 nits), creating unmatched three-dimensional perceived depth.',
      },
      {
        metric: 'Pixel Response Time (GtG)',
        standard: 'LCD: 1 ms - 5 ms | OLED: 0.03 ms',
        description: 'OLED subpixels switch states almost instantaneously, eliminating liquid crystal transition ghosting trails.',
      },
      {
        metric: 'Full-Field Sustained Luminance',
        standard: 'LCD: 400 - 1000+ nits | OLED: 150 - 250 nits',
        description: 'LCD sustains uniform brightness across a 100% white screen. OLED utilizes Automatic Brightness Limiter (ABL) to safeguard organic diodes.',
      },
      {
        metric: 'Subpixel Structure & Text Clarity',
        standard: 'LCD: Standard RGB stripe | OLED: WRGB or QD-OLED triangular',
        description: 'Standard RGB stripe LCDs render computer typography with crisp subpixel antialiasing; non-standard OLED layouts can exhibit subtle color fringing on fine lines.',
      },
    ],
    comparisons: {
      title: 'Architectural Comparison: OLED vs IPS LCD vs VA LCD vs Mini-LED',
      headers: ['Feature', 'OLED / QD-OLED', 'IPS LCD', 'Mini-LED LCD'],
      rows: [
        ['Black Level', 'True 0% Black (0.000 nits)', 'Dark Gray (0.2 - 0.4 nits)', 'Near-Black with zone dimming (0.01 nits)'],
        ['Contrast Ratio', 'Infinite (∞:1)', '1,000:1 - 2,000:1', '50,000:1 - 1,000,000:1 (Dynamic)'],
        ['Backlight Bleed & Glow', 'Zero (Self-emissive)', 'Common (IPS corner glow)', 'Local blooming around small bright objects'],
        ['Pixel Response Time', '~0.03 ms (Virtually instant)', '1 ms - 4 ms (Minor overdrive smear)', '1 ms - 4 ms (Subject to overdrive tuning)'],
        ['Burn-In Susceptibility', 'Possible with static 24/7 UI', 'Immune (Zero permanent burn-in)', 'Immune (Zero permanent burn-in)'],
        ['Full-Screen Brightness', '150 - 250 nits (ABL dimming)', '350 - 600 nits (Stable)', '1000+ nits (Sustained HDR highlight)'],
      ],
    },
    practicalExamples: [
      {
        scenario: 'Watching Space Sci-Fi or Night Scenes',
        explanation: 'On an LCD, a starfield in deep space looks milky gray with bright halos around spaceships. On OLED, stars shine like pinpoint diamonds out of pitch-black darkness.',
      },
      {
        scenario: 'Full-Day Office Productivity & Spreadsheets',
        explanation: 'Opening multiple large white browser tabs and spreadsheets on an OLED monitor triggers ABL dimming, causing brightness to fluctuate as windows resize. An IPS LCD maintains steady, bright white without shifting.',
      },
      {
        scenario: 'Wide-Angle Co-Viewing with Colleagues',
        explanation: 'Viewing an OLED screen from extreme 45-degree angles shows zero color desaturation or brightness falloff, whereas standard VA panels wash out significantly.',
      },
    ],
    advantagesAndLimits: {
      advantages: [
        'Perfect black levels and infinite dynamic contrast ratio.',
        'Zero backlight bleed, flashlighting, or IPS corner glow.',
        'Blazing-fast pixel transitions eliminating motion blur smears.',
        'Exceptional viewing angles with no gamma shifting.',
      ],
      limitations: [
        'ABL (Automatic Brightness Limiter) dims large full-field white windows.',
        'Organic subpixels degrade over prolonged exposure to static desktop elements (taskbars, logos).',
        'Non-standard subpixel structures can cause minor color fringing on high-contrast desktop text.',
      ],
    },
    misunderstandings: [
      {
        myth: 'OLED screens burn in after only a few months of daily usage.',
        reality:
          'Modern OLED monitors and TVs incorporate multi-tiered hardware safeguards: pixel orbiting (pixel shifting), static logo luminance reduction, thermal heat-sink dissipation, and automated compensation refresh cycles that protect panels for years under normal diverse computer usage.',
      },
      {
        myth: 'Mini-LED LCD is completely identical to OLED in contrast.',
        reality:
          'While Mini-LED improves LCD contrast by dividing backlights into 1,000 to 5,000 local dimming zones, an OLED has over 8,000,000 independent dimming zones (every individual pixel). Mini-LED still exhibits noticeable light bloom or haloing around bright subtitles and white mouse cursors.',
      },
      {
        myth: 'LCD displays are outdated and obsolete.',
        reality:
          'High-end IPS LCDs remain the industry gold standard for color-accurate print proofing, professional video editing studios, medical imaging, and static office productivity where continuous 1000-nit sustained brightness and zero burn-in anxiety are required.',
      },
    ],
    relatedTools: [
      {
        name: 'Black Screen Tool',
        path: '/black-screen',
        description: 'Verify 0% true black and inspect panels for backlight bleed vs pure OLED off-state.',
      },
      {
        name: 'OLED Burn-In Test',
        path: '/oled-burn-in-test',
        description: 'Cycle full-screen red, green, blue, and gray steps to audit subpixel uniformity.',
      },
      {
        name: 'OLED Gray Test',
        path: '/oled-gray-test',
        description: 'Inspect near-black 5% and 10% dark gray uniformity to evaluate OLED panel banding.',
      },
      {
        name: 'Screen Uniformity Test',
        path: '/screen-uniformity-test',
        description: 'Evaluate brightness consistency and corner vignetting across any monitor panel.',
      },
    ],
  },
  {
    slug: 'hdr',
    title: 'HDR (High Dynamic Range): Standards, Peak Luminance, and Color Gamuts',
    shortLabel: 'HDR',
    definition:
      'High Dynamic Range (HDR) is a video mastering and display reproduction standard that dramatically expands both the peak contrast ratio (luminance range) and color gamut volume to mirror real-world visual perception.',
    metaTitle: 'What is HDR? High Dynamic Range Monitor Guide | WhiteScreen.vip',
    metaDescription:
      'Master HDR display technology: peak nits, VESA DisplayHDR tiers, 10-bit color depth, DCI-P3 color spaces, EOTF tone mapping, and calibration.',
    howItWorks: [
      'Standard Dynamic Range (SDR) video was engineered around legacy cathode-ray tube (CRT) display physics, defined by the ITU-R BT.709 standard with an 8-bit integer color depth (16.7 million addressable colors) and a maximum target brightness of approximately 100 to 250 nits. In SDR, specular highlights like sun glints, explosions, and chrome reflections are clipped into flat white blocks.',
      'High Dynamic Range breaks these limits using the Perceptual Quantizer (PQ / SMPTE ST 2084) electro-optical transfer function (EOTF). The PQ curve encodes absolute luminance values up to 10,000 nits, allowing content creators to preserve intricate shadow details in dark alleys while pushing highlights to dazzling levels of intense brightness.',
      'Additionally, HDR expands color reproduction from the narrow sRGB space to the Wide Color Gamut (WCG) standards of DCI-P3 and Rec. 2020 using a 10-bit or 12-bit pipeline (delivering over 1.07 billion gradated colors). This eliminates color stepping bands and allows rendering of deep neon greens, rich ember reds, and saturated maritime cyans that SDR displays simply cannot reproduce.',
    ],
    keySpecs: [
      {
        metric: 'VESA DisplayHDR 400',
        standard: 'Entry Tier: 400 nits peak, 8-bit+FRC, global dimming',
        description: 'Basic certification with no local dimming requirement. Often looks identical to SDR and frequently washes out black levels.',
      },
      {
        metric: 'VESA DisplayHDR 600 / 1000',
        standard: 'True HDR Tier: 600-1000 nits, zone local dimming, WCG',
        description: 'Impactful HDR with real hardware local dimming (Mini-LED or edge zones), wider color coverage (>90% DCI-P3), and intense specular highlights.',
      },
      {
        metric: 'VESA DisplayHDR True Black 400 / 500 / 600',
        standard: 'OLED Tier: 0.0005 nits black level, instant per-pixel contrast',
        description: 'Engineered specifically for self-emissive OLED and QD-OLED displays. Delivers remarkable HDR impact despite lower full-screen peak nits.',
      },
      {
        metric: 'Color Bit Depth (10-bit / 1.07B colors)',
        standard: 'SMPTE ST 2084 / Rec. 2020 container',
        description: 'Provides 1024 distinct code values per RGB color channel compared to 256 in 8-bit, virtually eliminating gradient banding across skies and sunrises.',
      },
    ],
    comparisons: {
      title: 'HDR vs SDR: Technical Architecture Breakdown',
      headers: ['Specification', 'Standard Dynamic Range (SDR)', 'High Dynamic Range (HDR)'],
      rows: [
        ['Target Peak Brightness', '100 - 300 nits (Relative scale)', '600 - 1,500+ nits (Absolute PQ scale)'],
        ['Black Level', '0.2 - 0.5 nits (Panel dependent)', '0.0005 nits (OLED) / 0.01 nits (Mini-LED)'],
        ['Color Palette', 'sRGB / Rec.709 (35% of visible spectrum)', 'DCI-P3 / Rec.2020 (75%+ of visible spectrum)'],
        ['Color Depth', '8-bit (16.7 million colors)', '10-bit to 12-bit (1.07 billion to 68 billion colors)'],
        ['Transfer Function', 'Standard Power Gamma (2.2 / 2.4)', 'SMPTE ST 2084 (Perceptual Quantizer / EOTF)'],
        ['Metadata Types', 'None (Fixed tone curve)', 'Static (HDR10) or Dynamic Frame-by-Frame (Dolby Vision, HDR10+)'],
      ],
    },
    practicalExamples: [
      {
        scenario: 'Sunlight Glinting Off Ocean Waves in 4K Video',
        explanation: 'In SDR, the ocean water looks dull and sunlight patches clip into flat white shapes. In HDR, each ripple gleams with intense specular luminance while retaining saturated turquoise hue.',
      },
      {
        scenario: 'Campfire Scene in a Dark Forest',
        explanation: 'In SDR, you must either crush the forest trees into muddy black to see the fire, or wash out the fire to see tree bark. In HDR, dancing orange flames pop brightly while pine needles in dark shadows remain crisp.',
      },
      {
        scenario: 'Sunset Sky Gradient Rendering',
        explanation: 'Viewing an 8-bit SDR sunset frequently reveals harsh stepped rings of color banding across orange and purple hues. A 10-bit HDR pipeline renders a seamless, photographic gradient.',
      },
    ],
    advantagesAndLimits: {
      advantages: [
        'Unprecedented realism in specular highlights like glass reflections, sunbeams, and chrome.',
        'Deep Wide Color Gamut reproduction covering rich emeralds, ruby reds, and sunset golds.',
        '10-bit color pipelines eliminate posterization and stair-step gradient banding.',
        'Provides greater perceived visual depth and three-dimensional image presence.',
      ],
      limitations: [
        'Inexpensive "HDR 400" monitors without local dimming wash out contrast and look worse than calibrated SDR.',
        'Desktop operating systems (Windows/Linux) can display washed-out colors on SDR desktop apps without proper tone-mapping calibration.',
        'Significantly higher power draw and heat generation when driving peak backlights.',
      ],
    },
    misunderstandings: [
      {
        myth: 'Any monitor with an "HDR" badge on the box delivers true HDR visuals.',
        reality:
          'Manufacturers frequently slap "HDR Ready" or "DisplayHDR 400" on basic 8-bit edge-lit office monitors with zero local dimming. When HDR is triggered, the monitor simply maximizes the global backlight, elevating black levels to gray and muddying the entire image. True HDR demands either thousands of Mini-LED dimming zones or an OLED panel.',
      },
      {
        myth: 'HDR simply makes the entire computer screen brighter and hurts the eyes.',
        reality:
          'HDR is not meant to make average UI elements blindingly bright. Standard interface elements (text, browser backgrounds) remain at comfortable SDR levels (100–150 nits), while high dynamic range headroom is reserved exclusively for pinpoint specular highlights and reflections.',
      },
      {
        myth: 'Windows HDR always looks washed out on the desktop.',
        reality:
          'Desktop apps use standard sRGB color spaces. When Windows HDR is engaged, the OS tone-maps SDR colors into an HDR container. Running the official Windows HDR Calibration app and balancing the SDR content brightness slider produces vibrant, accurate colors.',
      },
    ],
    relatedTools: [
      {
        name: 'White Screen',
        path: '/',
        description: 'Test peak white luminance and adjust color temperatures from 3000K to 9300K.',
      },
      {
        name: 'Screen Color Test',
        path: '/screen-color-test',
        description: 'Verify 10-bit gradient smoothness and evaluate saturation across primary color channels.',
      },
      {
        name: 'Black Screen Tool',
        path: '/black-screen',
        description: 'Audit shadow black levels and check local dimming zone blooming on HDR panels.',
      },
    ],
  },
  {
    slug: 'resolution',
    title: 'Screen Resolution: Pixel Density (PPI), Viewports, and Scaling Standards',
    shortLabel: 'Resolution (1080p, 2K, 4K)',
    definition:
      'Screen resolution is the total physical pixel count arranged along horizontal and vertical axes of a display matrix, determining rendering detail, pixel density (PPI), and desktop workspace capacity.',
    metaTitle: 'Screen Resolution Guide: 1080p vs 1440p (2K) vs 4K UHD | WhiteScreen.vip',
    metaDescription:
      'Detailed technical guide to display resolutions, aspect ratios (16:9, 21:9), pixel density (PPI), retina viewing distances, and OS display scaling.',
    howItWorks: [
      'Every digital flat panel display consists of an active matrix grid of discrete picture elements (pixels). A resolution specification like 3840 × 2160 indicates that the matrix contains 3,840 distinct columns of pixels and 2,160 distinct rows of pixels, totaling 8,294,400 addressable pixels across the panel.',
      'However, raw pixel count alone does not dictate sharpness. Sharpness is governed by Pixel Density, measured in Pixels Per Inch (PPI). A 27-inch monitor with 4K resolution packs 163 PPI, whereas a 55-inch 4K television has only 80 PPI. At higher PPI, individual pixels become microscopic, making diagonal curves smooth, typography razor-sharp, and eliminating the visible screen-door grid effect.',
      'To prevent user interface elements from shrinking to unreadable sizes on high-PPI displays, modern operating systems employ display scaling (HiDPI / Retina rendering). In 200% scaling, the OS renders vector typography and UI assets at double resolution, mapping four physical display pixels to every single virtual CSS pixel for crystal-clear clarity without sacrificing UI usability.',
    ],
    keySpecs: [
      {
        metric: '1080p Full HD (1920 × 1080)',
        standard: '2,073,600 pixels (16:9 aspect ratio)',
        description: 'Industry baseline. Easy to drive with budget graphics hardware. Best suited for 21.5-inch to 24-inch screens (~92 PPI).',
      },
      {
        metric: '1440p Quad HD / QHD (2560 × 1440)',
        standard: '3,686,400 pixels (77% more pixels than 1080p)',
        description: 'The premier desktop sweet spot for 27-inch monitors (109 PPI). Provides expansive desktop real estate without demanding 4K GPU rendering power.',
      },
      {
        metric: '4K Ultra HD / UHD (3840 × 2160)',
        standard: '8,294,400 pixels (Exactly 4× 1080p pixel count)',
        description: 'Delivers photographic print clarity on 27-inch (163 PPI) and 32-inch (138 PPI) screens. Typically paired with 125% to 150% OS display scaling.',
      },
      {
        metric: '5K (5120 × 2880) & 8K UHD-2 (7680 × 4320)',
        standard: '14,745,600 & 33,177,600 pixels',
        description: 'Studio creative benchmark (Apple Studio Display at 218 PPI) and ultra-large cinematic displays delivering perfect 2× integer Retina scaling.',
      },
    ],
    comparisons: {
      title: 'Common Desktop Resolutions & Pixel Densities',
      headers: ['Resolution Name', 'Dimensions', 'Pixel Count', 'Typical Size & Pixel Density (PPI)'],
      rows: [
        ['1080p Full HD', '1920 × 1080', '2.07 Million', '24 inches = 91.8 PPI (Native 100% scaling)'],
        ['1440p Quad HD (QHD)', '2560 × 1440', '3.69 Million', '27 inches = 108.8 PPI (Native 100% scaling)'],
        ['Ultrawide QHD (UWQHD)', '3440 × 1440', '4.95 Million', '34 inches = 109.7 PPI (21:9 cinematic aspect)'],
        ['4K Ultra HD (UHD)', '3840 × 2160', '8.29 Million', '27 inches = 163.2 PPI (150% scaling) | 32 inches = 137.7 PPI (125% scaling)'],
        ['5K Retina', '5120 × 2880', '14.75 Million', '27 inches = 217.6 PPI (Perfect 200% integer scaling)'],
        ['8K Ultra HD-2', '7680 × 4320', '33.18 Million', '32 inches = 275.4 PPI | 65 inches = 135.6 PPI'],
      ],
    },
    practicalExamples: [
      {
        scenario: 'Reading Small Code Typography in Text Editors',
        explanation: 'At 1080p on a 27-inch monitor, small 9pt programming fonts appear blocky and blurred by anti-aliasing. At 4K on a 27-inch display, punctuation, brackets, and serifs look as sharp as laser-printed paper.',
      },
      {
        scenario: 'Side-by-Side Dual Window Productivity',
        explanation: 'At 1080p, docking two browser windows side-by-side (each 960px wide) cuts off website sidebars and forces horizontal scrollbars. At 1440p or 4K, two full 1280px+ desktop websites sit comfortably side-by-side.',
      },
      {
        scenario: 'Photo and Video Timeline Editing',
        explanation: 'In 4K video editing, a 4K monitor allows displaying a full 1080p preview window at 100% pixel mapping while leaving ample surrounding screen space for audio mixers, scopes, and multi-track timelines.',
      },
    ],
    advantagesAndLimits: {
      advantages: [
        'Razor-sharp typography that reduces eye strain during long reading and coding sessions.',
        'Expansive screen canvas allowing multiple applications, tools, and documents to remain visible simultaneously.',
        'Eliminates the visible pixel grid ("screen-door effect") on modern desktop panels.',
        'Allows lossless viewing of high-resolution digital photography and 4K cinema masters.',
      ],
      limitations: [
        'Significantly increases graphics processing workload in 3D rendering and modern video gaming.',
        'Requires fractional scaling (e.g., 125% or 150%) on Windows, which can cause slight blur in legacy Win32 software.',
        'High resolution combined with high refresh rates demands high-bandwidth DisplayPort 1.4/2.1 or HDMI 2.1 cables.',
      ],
    },
    misunderstandings: [
      {
        myth: '2K is the exact technical name for 2560 × 1440 resolution.',
        reality:
          'In official DCI cinema standards, "2K" specifies 2048 × 1080 pixels (slightly wider than 1080p). Consumer monitor marketing casually adopted "2K" to describe 2560 × 1440 (Quad HD / QHD), but technically 1440p has nearly double the pixels of true cinema 2K.',
      },
      {
        myth: 'Higher resolution is always better, regardless of screen size.',
        reality:
          'Putting 4K resolution on an 8-inch screen creates over 500 PPI, exceeding what the human eye can resolve at arm\'s length while burning battery life and GPU horsepower. Pixel density (PPI) relative to your viewing distance is what determines perceived sharpness.',
      },
      {
        myth: 'Running a 4K monitor with 150% scaling wastes the extra pixels.',
        reality:
          'Display scaling does not downscale pixel rendering; it renders vector fonts, icons, and interface assets with three to four times as many physical pixels, making lines smooth and crisp while preserving comfortable, ergonomic sizing.',
      },
    ],
    relatedTools: [
      {
        name: 'Screen Resolution Test',
        path: '/screen-resolution-test',
        description: 'Read your display viewport, physical screen resolution, device pixel ratio, and color depth.',
      },
      {
        name: 'White Screen Image Generator',
        path: '/',
        description: 'Generate and download solid color test backgrounds in exact 1080p, 1440p, 4K, or 8K resolution.',
      },
      {
        name: 'Dead Pixel Test',
        path: '/dead-pixel-test',
        description: 'Inspect every individual pixel on your high-resolution panel for dead or stuck subpixel defects.',
      },
    ],
  },
  {
    slug: 'chroma-key',
    title: 'Chroma Key (Green Screen): Color Separation, Lighting, and Compositing',
    shortLabel: 'Chroma Key (Green Screen)',
    definition:
      'Chroma keying is a visual compositing technique that isolates a designated uniform color hue (most commonly pure green #00FF00 or blue #0000FF) in video footage, rendering that color range transparent to insert virtual backgrounds, graphics, or live scenes.',
    metaTitle: 'What is Chroma Key? Green Screen Video Compositing Guide | WhiteScreen.vip',
    metaDescription:
      'Master chroma keying and green screens: color channel separation, why cameras favor green, softbox lighting uniformity, spill suppression, and streaming setups.',
    howItWorks: [
      'Digital chroma key compositing operates on color-space coordinate isolation. Video keying software (such as OBS Studio, DaVinci Resolve, Adobe Premiere Pro, or Zoom) evaluates the chrominance values of incoming video frames. Pixels falling within the configured hue and tolerance radius have their alpha channel transparency set to 0%, while pixels outside the threshold remain 100% opaque.',
      'Pure digital green (Hex #00FF00 / RGB 0, 255, 0) is universally favored for modern digital camera sensors. Most camera image sensors utilize a Bayer color filter array that places two green-filtered photosites for every one red and one blue photosite (GRGB layout) to simulate the human eye’s heightened photopic sensitivity to green wavelengths. As a result, the camera’s green color channel records twice the luminance resolution and substantially lower sensor noise than red or blue channels, resulting in razor-sharp subject edges.',
      'Equally important, human skin tones across all global ethnicities contain varying proportions of melanin and hemoglobin blood pigments that sit squarely on the red-yellow spectrum, containing virtually zero green chromaticity. This spectral gap allows keying software to cleanly slice away green backdrops without making human skin, teeth, or hair accidentally transparent.',
    ],
    keySpecs: [
      {
        metric: 'Digital Chroma Green Standard',
        standard: 'Hex #00FF00 | RGB (0, 255, 0) | HSL (120°, 100%, 50%)',
        description: 'The international reference hue for maximum color separation and digital camera sensor sensitivity.',
      },
      {
        metric: 'Digital Chroma Blue Standard',
        standard: 'Hex #0000FF | RGB (0, 0, 255) | HSL (240°, 100%, 50%)',
        description: 'The preferred alternative when subjects wear green clothing, have green eyes/props, or are filmed in night cinematic scenes.',
      },
      {
        metric: 'Camera Chroma Subsampling',
        standard: '4:2:2 or 4:4:4 (Professional) vs 4:2:0 (Webcam)',
        description: 'Higher chroma sampling retains independent color resolution per pixel, eliminating jagged pixelated edges on fine hair and silhouettes.',
      },
      {
        metric: 'Subject-to-Backdrop Distance',
        standard: 'Minimum 4 to 6 feet (1.2m to 2.0m)',
        description: 'Essential physical clearance to prevent ambient green light bounce (spill) onto the subject’s shoulders, neck, and hair.',
      },
    ],
    comparisons: {
      title: 'Keying Techniques: Green Screen vs Blue Screen vs AI Software Removal',
      headers: ['Method', 'Lighting Sensitivity', 'Edge Quality & Hair Fidelity', 'System Processing Load'],
      rows: [
        ['Green Screen (#00FF00)', 'Requires uniform diffused light; cameras need less wattage', 'Flawless, crisp hairlines; zero edge jitter', 'Near-zero GPU/CPU overhead; instant hardware keying'],
        ['Blue Screen (#0000FF)', 'Requires ~1 stop more light intensity to avoid camera noise', 'Superb for fine blonde hair and dark clothing', 'Near-zero GPU/CPU overhead; clean color separation'],
        ['AI Virtual Backgrounds', 'Tolerates uneven lighting and messy room backdrops', 'Prone to edge distortion, flickering ears, and blurred fingers', 'Heavy ongoing CPU/NPU load; can cause webcam frame drops'],
      ],
    },
    practicalExamples: [
      {
        scenario: 'Live Game Streaming on Twitch or YouTube',
        explanation: 'Streamers position a green screen behind their gaming chair and use OBS Studio’s Chroma Key filter to cut out their body, placing their silhouette cleanly over gameplay without blocking the HUD.',
      },
      {
        scenario: 'Executive Video Calls & Remote Presentations',
        explanation: 'Professionals on Zoom, Teams, or Google Meet use an evenly lit green backdrop to project crisp company branding and modern office virtual backgrounds without the edge-shimmer artifacts of AI blur.',
      },
      {
        scenario: 'Macro Product Photography & Stop-Motion Video',
        explanation: 'Setting a secondary computer monitor or iPad to WhiteScreen.vip’s fullscreen Green Screen provides a perfectly illuminated, wrinkle-free digital backdrop for photographing small handheld objects.',
      },
    ],
    advantagesAndLimits: {
      advantages: [
        'Crystal-clear hairline edge isolation without algorithmic warping or missing fingers.',
        'Extremely lightweight computationally compared to machine-learning background segmentation.',
        'Permits any high-resolution virtual background, video loop, or live desktop feed.',
        'Can be deployed on displays, tablets, or fabric backdrops.',
      ],
      limitations: [
        'Requires flat, shadow-free, uniform illumination across the entire backdrop.',
        'Restricts wardrobe selection: subjects cannot wear green shirts, hats, or accessories.',
        'Green light bounce ("spill") can reflect onto skin or eyeglasses if standing too close.',
      ],
    },
    misunderstandings: [
      {
        myth: 'You can easily key out a plain white wall or white sheet.',
        reality:
          'White light reflects off human teeth, eye sclera, white shirt collars, jewelry, and specular facial highlights. Trying to key out pure white causes parts of the person’s face and clothes to turn transparent. Saturated green or blue provides the necessary color separation.',
      },
      {
        myth: 'You need expensive professional studio lighting to pull a clean green screen key.',
        reality:
          'The secret to chroma keying is not high brightness, but lighting uniformity. Two inexpensive diffused softbox lights or LED panels that evenly spread light without cast shadows key out far cleaner than an expensive, harsh spotlight.',
      },
      {
        myth: 'Crinkles and wrinkles in a green fabric backdrop don’t matter.',
        reality:
          'Folds and wrinkles create dark cast shadows. To keying software, those shadows register as dark olive green rather than bright chroma green, creating noisy static patches or requiring aggressive thresholds that erode the subject.',
      },
    ],
    relatedTools: [
      {
        name: 'Green Screen Tool',
        path: '/green-screen',
        description: 'Pure 100% saturated chroma key green (#00FF00) for instant backdrop lighting and camera isolation.',
      },
      {
        name: 'Blue Screen Tool',
        path: '/blue-screen',
        description: 'Pure chroma blue (#0000FF) display for compositing when subjects wear green apparel.',
      },
      {
        name: 'Zoom Lighting Tool',
        path: '/zoom-lighting',
        description: 'Softbox forward fill lighting to eliminate facial shadows and balance video call cameras.',
      },
      {
        name: 'White Screen',
        path: '/',
        description: 'Neutral daylight white screen to act as a soft fill light reflector for webcam video.',
      },
    ],
  },
] as const

export function getGlossaryBySlug(slug: string): GlossaryItem | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '').replace(/^glossary\//, '')
  return GLOSSARY_ITEMS.find((g) => g.slug === normalized)
}
