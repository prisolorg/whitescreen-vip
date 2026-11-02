export type BackgroundCategory =
  | 'solid'
  | 'gradient'
  | 'video-call'
  | 'dark-oled'
  | 'minimal'
  | 'neon'

export type BackgroundUseCase = {
  title: string
  description: string
  linkText?: string
  linkHref?: string
}

export type ContextualLink = {
  label: string
  href: string
  description: string
}

export type AuthoritativeLink = {
  title: string
  url: string
  organization: string
  note: string
}

export type BackgroundFaq = {
  question: string
  answer: string
}

export type BackgroundItem = {
  slug: string
  aliases?: string[]
  title: string
  h1: string
  metaTitle: string
  metaDescription: string
  category: BackgroundCategory
  categoryLabel: string
  shortDescription: string
  dominantColorName: string
  primaryHex: string
  secondaryHex?: string
  accentHex?: string
  type: 'solid' | 'gradient' | 'pattern'
  cssBackground: string
  isDark: boolean
  tags: string[]
  about: {
    overview: string
    colorCharacteristics: string
    aestheticTone: string
  }
  fullscreenGuide: {
    instruction: string
    bestUsedFor: string
    inspectionTip: string
  }
  useCases: BackgroundUseCase[]
  selectionAdvice: {
    whenToChoose: string
    contrastAndReadability: string
    alternativeConsiderations: string
  }
  contextualLinks: ContextualLink[]
  authoritativeLink?: AuthoritativeLink
  faqs: BackgroundFaq[]
  relatedTools: {
    name: string
    path: string
    description: string
  }[]
}

export const BACKGROUND_CATEGORIES: { id: BackgroundCategory | 'all'; label: string; description: string }[] = [
  { id: 'all', label: 'All Backgrounds', description: 'Browse our complete library of solid, gradient, and studio screen backgrounds.' },
  { id: 'solid', label: 'Solid Colors', description: 'Pure uncompressed color screens for display testing, tracing, video lighting, and clean wallpapers.' },
  { id: 'gradient', label: 'Gradients', description: 'Smooth multi-stop aesthetic gradients to evaluate display color banding and elevate creative desktops.' },
  { id: 'video-call', label: 'Video Call', description: 'Professional neutral and blurred virtual backgrounds designed for Zoom, Google Meet, and Microsoft Teams.' },
  { id: 'dark-oled', label: 'Dark & OLED', description: 'True 0% pitch black and near-black carbon shades that save battery and deliver infinite contrast on OLED panels.' },
  { id: 'minimal', label: 'Aesthetic & Minimal', description: 'Earthy, pastel, and low-contrast palettes designed to reduce eye strain during prolonged writing and reading.' },
  { id: 'neon', label: 'Neon & Glow', description: 'Vibrant cyberpunk luminescent backgrounds engineered to evaluate monitor response time, motion ghosting, and HDR pop.' },
]

export const BACKGROUND_ITEMS: readonly BackgroundItem[] = [
  // 1. White Background
  {
    slug: 'white-background',
    aliases: ['pure-white'],
    title: 'White Background',
    h1: 'Pure White Background (100% #FFFFFF) — Fullscreen Screen & 4K PNG',
    metaTitle: 'White Background (100% Pure White Screen & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Display a clean, uncompressed pure white (#FFFFFF) background in fullscreen. Download 1080p, 2K, and 4K lossless PNG files for tracing, lighting, and monitor inspection.',
    category: 'solid',
    categoryLabel: 'Solid Color',
    shortDescription: 'Clean 100% pure white (#FFFFFF) background for lighting, testing, tracing, and minimal wallpapers.',
    dominantColorName: 'Pure White',
    primaryHex: '#FFFFFF',
    type: 'solid',
    cssBackground: '#FFFFFF',
    isDark: false,
    tags: ['white', 'clean', 'bright', 'minimal', 'lighting', 'tracing'],
    about: {
      overview: 'This background displays an entirely flat, uncompressed field of pure white (sRGB hex #FFFFFF, RGB 255, 255, 255). It emits maximum light output across all red, green, and blue subpixel transistors without any digital compression artifacts or gradient shifts.',
      colorCharacteristics: 'With zero chromatic bias and neutral 6500K color temperature on properly calibrated displays, pure white acts as an optical baseline for color evaluation and brightness testing.',
      aestheticTone: 'Sterile, modern, and clinical. When expanded to full screen, it turns your device display into an expansive soft light source suitable for desk lighting or manual tracing.',
    },
    fullscreenGuide: {
      instruction: 'Click "Open Fullscreen" or press the F key on your keyboard to instantly expand pure white across your entire display without browser toolbars, tabs, or desktop distraction.',
      bestUsedFor: 'Illuminating your face during video calls, manual animation tracing through paper against your tablet screen, and locating tiny stuck subpixels.',
      inspectionTip: 'Examine the corners and edges of your screen. Any darker vignetting or color shifts reveal backlight non-uniformity across your monitor panel.',
    },
    useCases: [
      {
        title: 'Webcam Softbox & Video Call Lighting',
        description: 'Position your laptop or secondary monitor in front of you with full white active to wash out harsh shadows on your face during video conferences.',
        linkText: 'Try Zoom Lighting Tool',
        linkHref: '/zoom-lighting',
      },
      {
        title: 'Monitor Dead & Stuck Pixel Detection',
        description: 'Dark dead pixels and discolored subpixels stand out clearly against an unbroken white canvas.',
        linkText: 'Dead Pixel Diagnostic Test',
        linkHref: '/dead-pixel-test',
      },
      {
        title: 'Manual Tracing Light Box',
        description: 'Turn an iPad, tablet, or laptop into an impromptu lightbox by laying translucent paper over the glass surface.',
        linkText: 'Open Full White Screen',
        linkHref: '/white-screen',
      },
      {
        title: 'Screen Cleaning & Dust Inspection',
        description: 'Surface smudges, fingerprints, and keyboard marks become visible when illuminated against white.',
        linkText: 'Screen Cleaning Guide',
        linkHref: '/guides/clean-laptop-screen',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose pure white when you need maximum lumen output for video lighting, physical tracing, or high-contrast display uniformity testing.',
      contrastAndReadability: 'Pure white provides maximum contrast for black typography (21:1 ratio), but prolonged exposure in a dark room can cause eye fatigue. Lower your display brightness if reading for extended periods.',
      alternativeConsiderations: 'For everyday writing and coding, consider Warm Beige or Soft Lavender to soften harsh blue wavelength emissions.',
    },
    contextualLinks: [
      { label: 'Warm Beige Background', href: '/backgrounds/warm-beige', description: 'Gentler warm cream alternative for reduced eye strain.' },
      { label: 'Black Background', href: '/backgrounds/black-background', description: 'Opposite true 0% black screen for OLED panels.' },
      { label: 'Gradient Background', href: '/backgrounds/gradient-background', description: 'Smooth colorful linear gradients for creative wallpaper.' },
      { label: 'Screen Uniformity Test', href: '/screen-uniformity-test', description: 'Inspect panel backlight distribution and edge vignetting.' },
    ],
    authoritativeLink: {
      title: 'W3C Web Content Accessibility Guidelines (WCAG 2.1) Contrast Minimums',
      url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html',
      organization: 'World Wide Web Consortium (W3C)',
      note: 'Explains the 21:1 contrast ratio between pure white (#FFFFFF) and pure black (#000000) for visual accessibility.',
    },
    faqs: [
      {
        question: 'Does running a full white screen consume more battery?',
        answer: 'On OLED and AMOLED displays, yes. Pure white requires every subpixel to emit light at maximum power. On traditional LCD panels with LED backlights, energy consumption remains roughly constant regardless of the displayed color.',
      },
      {
        question: 'Can I use this white background for physical paper tracing?',
        answer: 'Yes. Set your screen brightness to maximum, lock screen rotation on tablets, and place your tracing sheet directly against the glass.',
      },
      {
        question: 'What is the color code for pure white?',
        answer: 'The hex code is #FFFFFF, RGB is rgb(255, 255, 255), and HSL is hsl(0, 0%, 100%).',
      },
    ],
    relatedTools: [
      { name: 'White Screen Tool', path: '/white-screen', description: 'Fullscreen white tool with brightness controls and timers.' },
      { name: 'Zoom Lighting', path: '/zoom-lighting', description: 'Adjustable color temperature softbox fill light.' },
      { name: 'Dead Pixel Test', path: '/dead-pixel-test', description: 'Cycle through primary colors to locate defective subpixels.' },
      { name: 'Screen Uniformity Test', path: '/screen-uniformity-test', description: 'Evaluate backlight variance across multi-zone panels.' },
    ],
  },

  // 2. Black Background
  {
    slug: 'black-background',
    aliases: ['true-black'],
    title: 'Black Background',
    h1: 'True Black OLED Background (0% Black) — Pure Dark Screen & 4K PNG',
    metaTitle: 'Black Background (True 0% OLED Black Screen & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Open a true 0% black (#000000) background online. Zero pixel emission on OLED displays, infinite contrast, backlight bleed inspection, and 4K lossless downloads.',
    category: 'dark-oled',
    categoryLabel: 'Dark & OLED',
    shortDescription: 'Pure 0% black (#000000) for OLED battery saving, infinite contrast, and backlight bleed checking.',
    dominantColorName: 'True Black',
    primaryHex: '#000000',
    type: 'solid',
    cssBackground: '#000000',
    isDark: true,
    tags: ['black', 'oled', 'dark', '0-percent', 'battery-saver', 'contrast'],
    about: {
      overview: 'This background provides an absolute true pitch black (hex #000000, RGB 0, 0, 0). On self-emissive displays such as OLED, AMOLED, and QD-OLED, every individual subpixel turns completely off, achieving true 0 cd/m² luminance and infinite contrast.',
      colorCharacteristics: 'Absolute darkness with zero light emission. On LCD panels (IPS, VA, TN), the liquid crystal shutter blocks backlight pass-through, highlighting any perimeter light leakage.',
      aestheticTone: 'Minimalist, immersive, and sleek. Ideal for cinematic focus, late-night workstations, and dual-monitor sleeping setups.',
    },
    fullscreenGuide: {
      instruction: 'Enter fullscreen in a pitch-dark room to evaluate panel contrast, examine backlight bleed along bezel edges, or rest secondary monitors.',
      bestUsedFor: 'Testing OLED deep blacks, checking for hot subpixels, and reducing power draw on mobile devices.',
      inspectionTip: 'If your screen appears slightly dark gray rather than pitch black, you are viewing an LCD display with an active LED backlight. If patches of light appear along the edges, observe whether the light shifts with your head angle (IPS glow) or stays stationary (backlight bleed).',
    },
    useCases: [
      {
        title: 'Backlight Bleed & IPS Glow Diagnosis',
        description: 'Identify hardware light leakage along display bezels in a darkened environment.',
        linkText: 'Backlight Bleed Troubleshooting',
        linkHref: '/screen-problems/backlight-bleed',
      },
      {
        title: 'OLED Battery Conservation',
        description: 'Smartphones, laptops, and tablets with OLED panels consume drastically less power when rendering true black.',
        linkText: 'OLED Gray Uniformity Test',
        linkHref: '/oled-gray-test',
      },
      {
        title: 'Dual-Monitor Sleep Screen',
        description: 'Keep your secondary monitor powered on without emitting distracting glow while watching movies or gaming.',
        linkText: 'Fullscreen Black Screen',
        linkHref: '/black-screen',
      },
      {
        title: 'Locating Hot & Stuck Pixels',
        description: 'Stuck subpixels that stay energized (red, green, blue, or white) pop immediately against pitch black.',
        linkText: 'Hot Pixel Guide',
        linkHref: '/screen-problems/hot-pixel',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Select true black for OLED battery saving, darkroom media consumption, and panel defect diagnostics.',
      contrastAndReadability: 'While true black offers infinite contrast, reading dense small text against pitch black can cause halation or astigmatism glow for some users. Dark gray backgrounds (#121212) can be more forgiving for reading.',
      alternativeConsiderations: 'For low-light creative editing where near-black shadow detail is essential, consider Carbon Dark (#0D0E11) or Midnight Cosmic Purple (#140B1F).',
    },
    contextualLinks: [
      { label: 'Carbon Dark Background', href: '/backgrounds/carbon-dark', description: '5% near-black shade for shadow detail testing.' },
      { label: 'Midnight Cosmic Purple', href: '/backgrounds/midnight-cosmic-purple', description: 'Deep space tone that preserves OLED battery efficiency.' },
      { label: 'Backlight Bleed Guide', href: '/screen-problems/backlight-bleed', description: 'Learn how to differentiate light bleed from IPS angle glow.' },
      { label: 'OLED Burn-In Guide', href: '/screen-problems/screen-burn-in', description: 'Prevent uneven organic pixel degradation on OLED displays.' },
    ],
    authoritativeLink: {
      title: 'VESA DisplayHDR True Black Specification',
      url: 'https://displayhdr.org/performance-criteria/',
      organization: 'Video Electronics Standards Association (VESA)',
      note: 'Specifies the maximum permissible black level (0.0005 cd/m²) required for HDR True Black display certification.',
    },
    faqs: [
      {
        question: 'Does a black background actually save battery on laptops?',
        answer: 'Only if your laptop features an OLED or mini-LED display with local dimming. Standard IPS and TN laptop screens keep their backlight lamps on regardless of what color is on screen.',
      },
      {
        question: 'Why does my black screen look glowing blue or gray from an angle?',
        answer: 'That is known as IPS glow, an inherent optical behavior of in-plane switching panels. When viewed from wide oblique angles, unpolarized light scatters through the liquid crystals.',
      },
      {
        question: 'What is the color code for true black?',
        answer: 'The hex code is #000000, RGB is rgb(0, 0, 0), and HSL is hsl(0, 0%, 0%).',
      },
    ],
    relatedTools: [
      { name: 'Black Screen Tool', path: '/black-screen', description: 'True 0% black fullscreen utility.' },
      { name: 'OLED Gray Test', path: '/oled-gray-test', description: 'Check 5% near-black uniformity on OLED panels.' },
      { name: 'OLED Burn-In Test', path: '/oled-burn-in-test', description: 'Inspect panel aging across primary color channels.' },
      { name: 'Dead Pixel Test', path: '/dead-pixel-test', description: 'Spot stuck and hot pixels against black.' },
    ],
  },

  // 3. Orange Background
  {
    slug: 'orange-background',
    title: 'Orange Background',
    h1: 'Vibrant Orange Background (#FF7A00) — High Energy Screen & 4K PNG',
    metaTitle: 'Orange Background (Warm Amber #FF7A00 & 4K Download) | WhiteScreen.vip',
    metaDescription: 'Fullscreen warm orange (#FF7A00) background tool. Download lossless 1080p, 2K, and 4K wallpapers. Ideal for warm ambient lighting, video accents, and display color evaluation.',
    category: 'solid',
    categoryLabel: 'Solid Color',
    shortDescription: 'Warm, high-energy amber orange (#FF7A00) for golden-hour ambient lighting and display color testing.',
    dominantColorName: 'Vibrant Orange',
    primaryHex: '#FF7A00',
    type: 'solid',
    cssBackground: '#FF7A00',
    isDark: false,
    tags: ['orange', 'warm', 'amber', 'energy', 'sunset', 'lighting'],
    about: {
      overview: 'This background renders a saturated, high-chroma orange (hex #FF7A00, RGB 255, 122, 0). It combines full-intensity red subpixels with balanced mid-level green subpixels to emit a radiant amber hue that catches the eye without the harsh psychological urgency of crimson red.',
      colorCharacteristics: 'Occupying the 590–620 nanometer band of the visible light spectrum, pure orange radiates warmth and stimulates creativity, optimism, and mental alertness.',
      aestheticTone: 'Dynamic, inviting, and radiant. When cast across a room in full screen, it mimics the cozy illumination of golden hour or firelight.',
    },
    fullscreenGuide: {
      instruction: 'Activate fullscreen mode on a laptop or desktop monitor to use this background as an amber softbox lamp or warm accent backdrop.',
      bestUsedFor: 'Adding a flattering warm glow to webcam calls, checking subpixel color transitions between red and green channels, and setting vibrant desktop wallpapers.',
      inspectionTip: 'Check whether the orange color appears uniform across the entire screen. Inexpensive panels often show slight shift toward yellow in the center and red toward edges.',
    },
    useCases: [
      {
        title: 'Golden Hour Webcam Lighting',
        description: 'Position your screen to illuminate your face with natural warm skin tones instead of cold blue office fluorescent glare.',
        linkText: 'Webcam Lighting Tool',
        linkHref: '/zoom-lighting',
      },
      {
        title: 'Subpixel Color Blending Verification',
        description: 'Because orange requires simultaneous red and green subpixel activation, it is ideal for testing subpixel response times.',
        linkText: 'Screen Color Test',
        linkHref: '/screen-color-test',
      },
      {
        title: 'Creative Presentation & Video Backdrops',
        description: 'Provides an energetic foundation for title cards, digital signage, and product mockups.',
        linkText: 'Sunset Glow Background',
        linkHref: '/backgrounds/sunset-glow',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose vibrant orange when you want an uplifting, warm environment that avoids the clinical feel of cool white or blue.',
      contrastAndReadability: 'Pair orange with dark charcoal (#1A1A1A) or navy blue (#0F172A) for maximum typographic legibility. White text requires bold weights to maintain readability.',
      alternativeConsiderations: 'If this orange feels too vibrant for a late evening workspace, consider Sunset Glow or Warm Beige for a softer aesthetic.',
    },
    contextualLinks: [
      { label: 'Red Background', href: '/backgrounds/red-background', description: 'Check pure red primary channel subpixel performance.' },
      { label: 'Yellow Background', href: '/backgrounds/yellow-background', description: 'Sunny high-reflectivity alternative for daylight illumination.' },
      { label: 'Sunset Glow Gradient', href: '/backgrounds/sunset-glow', description: 'Warm transitional sunset gradient blending orange, pink, and purple.' },
      { label: 'Orange Screen Tool', href: '/orange-screen', description: 'Fullscreen orange screen with adjustable brightness.' },
    ],
    authoritativeLink: {
      title: 'CIE 1931 Color Space Standards',
      url: 'https://cie.co.at/',
      organization: 'International Commission on Illumination (CIE)',
      note: 'Foundational scientific standard defining human optical response to amber and orange wavelengths.',
    },
    faqs: [
      {
        question: 'Does orange light interfere with sleep like blue light?',
        answer: 'No. Amber and orange wavelengths suppress melatonin release far less than short-wavelength blue light, making orange a popular choice for evening screen sessions.',
      },
      {
        question: 'What is the exact color code for this orange background?',
        answer: 'Hex code is #FF7A00, RGB is rgb(255, 122, 0), and HSL is hsl(29, 100%, 50%).',
      },
    ],
    relatedTools: [
      { name: 'Orange Screen Tool', path: '/orange-screen', description: 'Dedicated fullscreen orange screen tool.' },
      { name: 'Screen Color Test', path: '/screen-color-test', description: 'Inspect panel color accuracy across color wheels.' },
      { name: 'Zoom Lighting Tool', path: '/zoom-lighting', description: 'Customizable color temperature key light.' },
    ],
  },

  // 4. Gradient Background
  {
    slug: 'gradient-background',
    title: 'Gradient Background',
    h1: 'Sunset Horizon Gradient Background — Smooth Multi-Stop 4K Wallpaper',
    metaTitle: 'Gradient Background (Sunset Horizon & 4K Ultra HD PNG) | WhiteScreen.vip',
    metaDescription: 'High-fidelity multi-stop linear gradient background. Test display 8-bit vs 10-bit color banding, enjoy smooth aesthetic aesthetics, and download in 4K resolution.',
    category: 'gradient',
    categoryLabel: 'Gradients',
    shortDescription: 'Multi-stop linear transition from twilight indigo to magenta and amber for aesthetic setups and banding tests.',
    dominantColorName: 'Sunset Multi-Stop Gradient',
    primaryHex: '#6366F1',
    secondaryHex: '#F59E0B',
    accentHex: '#EC4899',
    type: 'gradient',
    cssBackground: 'linear-gradient(135deg, #6366F1 0%, #EC4899 50%, #F59E0B 100%)',
    isDark: false,
    tags: ['gradient', 'aesthetic', 'sunset', 'multi-color', 'wallpaper', 'banding-test'],
    about: {
      overview: 'This background features a high-bit-depth linear gradient flowing diagonally from indigo blue (#6366F1) through vivid orchid magenta (#EC4899) into golden amber (#F59E0B). It combines warm and cool optical frequencies in a balanced, modern visual transition.',
      colorCharacteristics: 'Designed with continuous mathematical color stepping across the sRGB color gamut. On 8-bit panels with temporal dithering (FRC) or native 10-bit panels, transitions appear silk-smooth.',
      aestheticTone: 'Sophisticated, creative, and inspiring. Widely favored by digital designers, developers, and creative professionals as an aesthetic wallpaper backdrop.',
    },
    fullscreenGuide: {
      instruction: 'Open fullscreen on your monitor to examine gradient rendering quality. Look closely at the midpoint where magenta blends into amber.',
      bestUsedFor: 'Testing monitor bit-depth for color banding artifacts, checking GPU color depth settings, and enjoying high-res aesthetic desktop backgrounds.',
      inspectionTip: 'If you see visible discrete "steps" or jagged stripes rather than a seamless blend, your monitor or graphics card may be operating in 6-bit color mode or compressed 4:2:0 chroma subsampling.',
    },
    useCases: [
      {
        title: 'Color Banding & Bit-Depth Inspection',
        description: 'Expose panel quantization limitations and verify whether 8-bit or 10-bit color processing is properly active.',
        linkText: 'Color Banding Diagnostic Guide',
        linkHref: '/screen-problems/color-banding',
      },
      {
        title: 'Modern Desktop Wallpaper',
        description: 'Elevate your dual-monitor or laptop workspace with a contemporary high-res colorway that complements dark mode operating systems.',
        linkText: 'Purple Dream Gradient',
        linkHref: '/backgrounds/purple-dream',
      },
      {
        title: 'Video Presentation Title Backdrop',
        description: 'Provide an engaging, professional background for remote slideshows and keynote presentations.',
        linkText: 'Ocean Breeze Gradient',
        linkHref: '/backgrounds/ocean-breeze',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose this gradient background when you want visual depth and rich color variety without the clutter of photographic wallpapers.',
      contrastAndReadability: 'Dark icons and white text both maintain good legibility across the gradient, but semi-transparent frosted glass UI elements (macOS dock, Windows acrylic) look particularly striking against it.',
      alternativeConsiderations: 'For a calmer, cooler tone, consider Ocean Breeze (cyan to royal blue). For a nocturnal aesthetic, explore Purple Dream.',
    },
    contextualLinks: [
      { label: 'Color Banding Guide', href: '/screen-problems/color-banding', description: 'Diagnose stepped stripes in smooth gradients.' },
      { label: 'Purple Dream Gradient', href: '/backgrounds/purple-dream', description: 'Deep violet to pink gradient background.' },
      { label: 'Ocean Breeze Gradient', href: '/backgrounds/ocean-breeze', description: 'Cool cyan to deep ocean blue gradient.' },
      { label: 'Screen Color Test', href: '/screen-color-test', description: 'Check full spectrum color purity and RGB balance.' },
    ],
    authoritativeLink: {
      title: 'W3C CSS Images Module Level 3 — Gradients Specification',
      url: 'https://www.w3.org/TR/css-images-3/#linear-gradients',
      organization: 'World Wide Web Consortium (W3C)',
      note: 'Technical specification defining linear gradient interpolation mathematics and color transition algorithms.',
    },
    faqs: [
      {
        question: 'Why do I see stripes or bands across the gradient on my laptop?',
        answer: 'This is called color banding. It occurs when a monitor uses a 6-bit panel, when the graphics driver is set to Limited RGB (16-235), or when temporal dithering is disabled.',
      },
      {
        question: 'Can I download this gradient in 4K resolution?',
        answer: 'Yes. Use the download buttons above to generate lossless 3840×2160 (4K UHD) PNG files rendered directly in your browser without compression.',
      },
    ],
    relatedTools: [
      { name: 'Screen Color Test', path: '/screen-color-test', description: 'Inspect full-spectrum color transitions.' },
      { name: 'Monitor Test', path: '/monitor-test', description: 'Test contrast ratios and motion clarity.' },
      { name: 'Screen Uniformity Test', path: '/screen-uniformity-test', description: 'Examine luminance consistency across the panel.' },
    ],
  },

  // 5. Forest Background
  {
    slug: 'forest-background',
    aliases: ['sage-green'],
    title: 'Forest Background',
    h1: 'Deep Forest Green Background (#1E3A2B) — Calming Pine Wallpaper & 4K PNG',
    metaTitle: 'Forest Green Background (Deep Pine #1E3A2B & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Soothing deep forest pine green background. Reduces eye strain, brings natural tranquility to workspaces, and provides lossless 1080p and 4K downloads.',
    category: 'minimal',
    categoryLabel: 'Aesthetic & Minimal',
    shortDescription: 'Deep, earthy pine green (#1E3A2B) inspired by Scandinavian evergreens to soothe tired eyes and bring tranquility.',
    dominantColorName: 'Deep Pine Green',
    primaryHex: '#1E3A2B',
    type: 'solid',
    cssBackground: '#1E3A2B',
    isDark: true,
    tags: ['forest', 'green', 'pine', 'nature', 'minimal', 'eye-strain', 'calm'],
    about: {
      overview: 'This background displays a rich, organic forest green (hex #1E3A2B, RGB 30, 58, 43). Drawn from the deep shade of subalpine fir needles and mossy woodlands, this color strikes a deliberate balance between deep contrast and muted organic warmth.',
      colorCharacteristics: 'Green sits right in the center of the human visual sensitivity curve (around 555 nanometers). Deep botanical greens trigger minimal retinal fatigue, making them physiologically restorative.',
      aestheticTone: 'Grounded, peaceful, and scholarly. It pairs effortlessly with natural wood desk setups, minimalist mechanical keyboards, and ambient warm desk lamps.',
    },
    fullscreenGuide: {
      instruction: 'Open full screen during 5-minute Pomodoro breaks. Rest your gaze upon the deep evergreen shade while practicing the 20-20-20 rule to relax your ciliary eye muscles.',
      bestUsedFor: 'Reducing digital eye fatigue during marathon coding, writing, or studying sessions, and creating a calming desktop wallpaper.',
      inspectionTip: 'Inspect whether your screen maintains rich green depth or washes out into dark gray from off-center viewing angles.',
    },
    useCases: [
      {
        title: 'Eye Strain Relief During Work Sprints',
        description: 'Swap stark white backgrounds for forest green to dramatically reduce retinal glare while maintaining high visual elegance.',
        linkText: 'Laptop Screen Care Guide',
        linkHref: '/guides/clean-laptop-screen',
      },
      {
        title: 'Minimalist Focus Wallpaper',
        description: 'Eliminates icon clutter distraction on your desktop while framing terminal windows and text editors with organic warmth.',
        linkText: 'Warm Beige Aesthetic',
        linkHref: '/backgrounds/warm-beige',
      },
      {
        title: 'Understated Video Call Ambience',
        description: 'Provides a grounded, sophisticated backdrop that looks professional without feeling clinical.',
        linkText: 'Virtual Office Background',
        linkHref: '/backgrounds/virtual-office',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose forest green when you work long hours at your computer and want to alleviate eye fatigue while avoiding harsh stark black.',
      contrastAndReadability: 'Pure white text, cream, and soft gold accents offer exceptional contrast and legibility over this background.',
      alternativeConsiderations: 'For studio video keying or green-screen production, do not use forest green; use pure Chroma Key Green (#00FF00) instead.',
    },
    contextualLinks: [
      { label: 'Green Screen Background', href: '/backgrounds/green-screen-background', description: 'Pure #00FF00 green for video keying in OBS and Zoom.' },
      { label: 'Warm Beige Background', href: '/backgrounds/warm-beige', description: 'Gentle cream companion for light-mode lovers.' },
      { label: 'Deep Navy Background', href: '/backgrounds/deep-navy', description: 'Dark executive slate blue alternative.' },
      { label: 'Green Screen Tool', href: '/green-screen', description: 'Live broadcast green screen utility.' },
    ],
    authoritativeLink: {
      title: 'American Academy of Ophthalmology: Computer Eye Strain & 20-20-20 Rule',
      url: 'https://www.aao.org/eye-health/tips-prevention/computer-usage',
      organization: 'American Academy of Ophthalmology (AAO)',
      note: 'Clinical recommendations on reducing visual fatigue, glare management, and taking distance eye breaks.',
    },
    faqs: [
      {
        question: 'Why is green considered the easiest color on human eyes?',
        answer: 'Human retinas feature photoreceptor cone cells that are most sensitive to green wavelengths. Processing green requires minimal optical lens refraction, reducing strain on focusing muscles.',
      },
      {
        question: 'Can this forest green be keyed out in OBS or Zoom?',
        answer: 'While technically possible with color pickers, chroma key software is engineered for pure high-luminance green (#00FF00). Use our Green Screen Background for studio keying.',
      },
    ],
    relatedTools: [
      { name: 'Green Screen Tool', path: '/green-screen', description: 'Chroma key green screen tool.' },
      { name: 'Screen Color Test', path: '/screen-color-test', description: 'Verify RGB balance and panel uniformity.' },
      { name: 'Monitor Test', path: '/monitor-test', description: 'Check contrast and black level gradation.' },
    ],
  },

  // 6. Neon Background
  {
    slug: 'neon-background',
    aliases: ['cyberpunk-neon'],
    title: 'Neon Background',
    h1: 'Cyberpunk Neon Glow Background — High Dynamic Glow & 4K Download',
    metaTitle: 'Neon Glow Background (Cyberpunk Dual-Tone & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Electric cyan and hot magenta neon glow background. Test high-refresh motion blur, verify HDR peak highlights, and download lossless 4K wallpapers.',
    category: 'neon',
    categoryLabel: 'Neon & Glow',
    shortDescription: 'High-voltage electric cyan and radiant magenta glow on deep black for gaming setups and motion ghosting checks.',
    dominantColorName: 'Electric Neon Glow',
    primaryHex: '#00FFCC',
    secondaryHex: '#FF007F',
    type: 'gradient',
    cssBackground: 'radial-gradient(circle at 20% 30%, #00FFCC 0%, transparent 45%), radial-gradient(circle at 80% 70%, #FF007F 0%, #0D0221 65%)',
    isDark: true,
    tags: ['neon', 'cyberpunk', 'glow', 'synthwave', 'gaming', 'ghosting-test'],
    about: {
      overview: 'This background features high-voltage luminescence inspired by cyberpunk aesthetics. An electric cyan orb (#00FFCC) and vibrant magenta flare (#FF007F) glow from a pitch-dark nocturnal canvas (#0D0221), creating intense dynamic range and saturated contrast.',
      colorCharacteristics: 'Employs complementary phosphorescent tones placed across deep blacks to evaluate monitor peak brightness, local dimming zone blooming, and pixel response time.',
      aestheticTone: 'Futuristic, high-energy, and cinematic. Tailor-made for battlestation setups, RGB-illuminated gaming rigs, and high-refresh gaming monitors.',
    },
    fullscreenGuide: {
      instruction: 'Switch to fullscreen on a gaming display to evaluate response time overdrive settings and inspect for inverse ghosting coronas.',
      bestUsedFor: 'Testing monitor overdrive overshoot, inspecting local dimming blooming on mini-LED screens, and streaming backdrops.',
      inspectionTip: 'Drag an open window slowly across the neon perimeter. If you notice bright trailing coronas or purple ghost silhouettes, reduce your monitor overdrive setting in the OSD.',
    },
    useCases: [
      {
        title: 'Monitor Response Time & Ghosting Check',
        description: 'High contrast between neon edges and dark canvas exposes sluggish pixel transitions and overdrive overshoot.',
        linkText: 'Ghosting Diagnostic Guide',
        linkHref: '/screen-problems/ghosting',
      },
      {
        title: 'Gamer Battlestation Wallpaper',
        description: 'Matches RGB mechanical keyboards, ambient lightstrips, and gaming PC aesthetics with 4K clarity.',
        linkText: 'Matrix Code Screensaver',
        linkHref: '/matrix-screensaver',
      },
      {
        title: 'Mini-LED Blooming Evaluation',
        description: 'Observe whether bright neon clusters produce halo blooming across neighboring dimming zones.',
        linkText: 'Monitor Test Suite',
        linkHref: '/monitor-test',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose neon glow when you want an exciting, futuristic gaming aesthetic that highlights the contrast ratio of your screen.',
      contrastAndReadability: 'Keep desktop icons along the darker center and bottom edges to maintain readability against the vivid neon flares.',
      alternativeConsiderations: 'For a calmer nighttime ambiance, try Purple Dream or Midnight Cosmic Purple.',
    },
    contextualLinks: [
      { label: 'Ghosting Diagnostic Guide', href: '/screen-problems/ghosting', description: 'Identify response time blur and overdrive overshoot.' },
      { label: 'Screen Flickering Guide', href: '/screen-problems/screen-flickering', description: 'Fix refresh rate stutter and backlight strobing.' },
      { label: 'True Black Background', href: '/backgrounds/black-background', description: 'Zero emission black for infinite OLED contrast.' },
      { label: 'Matrix Screen Tool', href: '/matrix-screensaver', description: 'Digital rain terminal simulation.' },
    ],
    authoritativeLink: {
      title: 'Blur Busters: LCD Motion Blur & Overdrive Overshoot Guide',
      url: 'https://blurbusters.com/faq/lcd-overdrive-artifacts/',
      organization: 'Blur Busters / Mark Rejhon',
      note: 'Industry authority on high-refresh monitor pixel response times, GtG transitions, and inverse ghosting.',
    },
    faqs: [
      {
        question: 'Does running bright neon on black cause burn-in on OLED screens?',
        answer: 'Static neon elements displayed continuously for thousands of hours at maximum brightness could unevenly age subpixels. Use your monitor screen saver timer and avoid displaying static bright borders indefinitely.',
      },
      {
        question: 'What are the hex codes used in this neon background?',
        answer: 'Electric cyan is #00FFCC, neon magenta is #FF007F, and the deep obsidian backdrop is #0D0221.',
      },
    ],
    relatedTools: [
      { name: 'Monitor Test', path: '/monitor-test', description: 'Motion blur, response time, and tearing checks.' },
      { name: 'Static Screen', path: '/static-screen', description: 'Retro analog TV static noise generator.' },
      { name: 'Flip Clock Screensaver', path: '/flip-clock-screensaver', description: 'Aesthetic minimal clock screensaver.' },
    ],
  },

  // 7. Red Background
  {
    slug: 'red-background',
    title: 'Red Background',
    h1: 'Pure Red Screen Background (#DC2626) — Subpixel Test & 4K Download',
    metaTitle: 'Red Background (Pure Red Subpixel Screen & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Clean saturated red (#DC2626) background in fullscreen. Test red subpixel health, detect stuck pixels, and download 1080p and 4K wallpapers.',
    category: 'solid',
    categoryLabel: 'Solid Color',
    shortDescription: 'Saturated pure red screen background for TFT subpixel testing and dramatic accent lighting.',
    dominantColorName: 'Crimson Red',
    primaryHex: '#DC2626',
    type: 'solid',
    cssBackground: '#DC2626',
    isDark: false,
    tags: ['red', 'crimson', 'subpixel-test', 'stuck-pixel', 'bold'],
    about: {
      overview: 'This background presents an unadulterated field of high-energy red (hex #DC2626, RGB 220, 38, 38). In an RGB color filter array, this activates only the red subpixels while holding green and blue subpixels in their closed states.',
      colorCharacteristics: 'Longest wavelength in the visible spectrum (~620–750 nm). Ideal for diagnosing broken gate lines or failed transistors specifically tied to the red color channel.',
      aestheticTone: 'Bold, commanding, and intense. In a dark room, it projects an immersive photographic darkroom-style illumination.',
    },
    fullscreenGuide: {
      instruction: 'Enter fullscreen to inspect your panel for dark dead red subpixels or stuck subpixels of other colors.',
      bestUsedFor: 'Isolating red subpixel defects and checking darkroom ambient lighting.',
      inspectionTip: 'Look closely for any pinpoints that appear black (indicating a non-firing red subpixel) or cyan (indicating blue and green are stuck on).',
    },
    useCases: [
      {
        title: 'Red Channel Subpixel Inspection',
        description: 'Isolate and diagnose defects within the red TFT addressing circuitry.',
        linkText: 'Stuck Pixel Diagnostic Guide',
        linkHref: '/screen-problems/stuck-pixel',
      },
      {
        title: 'Darkroom Style Photographic Accent',
        description: 'Casts a moody ruby glow across recording studios and desk setups.',
        linkText: 'Orange Background Alternative',
        linkHref: '/backgrounds/orange-background',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose pure red for hardware subpixel testing and high-impact visual mockups.',
      contrastAndReadability: 'Requires crisp white or high-contrast black typography. Avoid pairing with blue or green text to prevent chromatic aberration.',
      alternativeConsiderations: 'For everyday desktop use, softer sunset tones or warm orange provide greater visual comfort.',
    },
    contextualLinks: [
      { label: 'Orange Background', href: '/backgrounds/orange-background', description: 'Warmer, gentler amber screen.' },
      { label: 'Stuck Pixel Guide', href: '/screen-problems/stuck-pixel', description: 'How to diagnose and address stuck subpixels.' },
      { label: 'Red Screen Tool', href: '/red-screen', description: 'Fullscreen primary red screen utility.' },
    ],
    faqs: [
      {
        question: 'Why is red used in dead pixel testing?',
        answer: 'Modern LCD and OLED panels use independent red, green, and blue subpixels to form pixels. Testing red individually isolates the red subpixel transistors.',
      },
    ],
    relatedTools: [
      { name: 'Red Screen Tool', path: '/red-screen', description: 'Pure red fullscreen color tool.' },
      { name: 'Dead Pixel Test', path: '/dead-pixel-test', description: 'Cycle through RGB fields.' },
    ],
  },

  // 8. Yellow Background
  {
    slug: 'yellow-background',
    title: 'Yellow Background',
    h1: 'Bright Yellow Background (#FACC15) — Cheerful Daylight Screen & 4K PNG',
    metaTitle: 'Yellow Background (Sunny Yellow Screen & 4K Download) | WhiteScreen.vip',
    metaDescription: 'Luminous sunny yellow (#FACC15) background. Test panel color temperature, calibrate neutral white points, and download lossless 4K wallpapers.',
    category: 'solid',
    categoryLabel: 'Solid Color',
    shortDescription: 'Luminous, optimistic yellow (#FACC15) for daylight ambient illumination and white-point calibration checks.',
    dominantColorName: 'Sunny Yellow',
    primaryHex: '#FACC15',
    type: 'solid',
    cssBackground: '#FACC15',
    isDark: false,
    tags: ['yellow', 'bright', 'cheerful', 'daylight', 'color-temp'],
    about: {
      overview: 'This background renders a radiant, sunny yellow (hex #FACC15, RGB 250, 204, 21). Formed by combining high-output red and green subpixels, it delivers intense optical luminance without blue light spike.',
      colorCharacteristics: 'Yellow carries the highest perceived brightness of any chromatic hue. It highlights yellow tint anomalies and uneven warm-point calibration across display panels.',
      aestheticTone: 'Optimistic, sunny, and energetic. When reflected off a wall or desk, it produces cheerful daylight illumination.',
    },
    fullscreenGuide: {
      instruction: 'Open full screen to inspect whether your display has warm yellow patchiness or color temperature drift.',
      bestUsedFor: 'Checking for unwanted yellow tints and evaluating warm-spectrum uniformity.',
      inspectionTip: 'Compare the center of your screen with the outer edges. A patchy yellow cast often indicates aging fluorescent backlights or uneven glue curing in laminated panels.',
    },
    useCases: [
      {
        title: 'Yellow Tint & White Point Calibration',
        description: 'Identify software filters (Night Light, True Tone) versus genuine panel hardware discoloration.',
        linkText: 'Yellow Tint Diagnostic Guide',
        linkHref: '/screen-problems/yellow-tint-on-screen',
      },
      {
        title: 'High-Visibility Creative Backdrops',
        description: 'Provide an eye-catching background for graphic mockups and bright social media visuals.',
        linkText: 'Orange Background Alternative',
        linkHref: '/backgrounds/orange-background',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Select bright yellow for cheerful daylight illumination and warm-point panel inspection.',
      contrastAndReadability: 'Always use deep black or dark charcoal typography (#111827) for high legibility. White text will blend into the background.',
      alternativeConsiderations: 'For softer warm reading, choose Warm Beige (#F5EBE0).',
    },
    contextualLinks: [
      { label: 'Yellow Tint on Screen Guide', href: '/screen-problems/yellow-tint-on-screen', description: 'Diagnose and fix warm screen discoloration.' },
      { label: 'Orange Background', href: '/backgrounds/orange-background', description: 'Warm amber alternative.' },
      { label: 'Yellow Screen Tool', href: '/yellow-screen', description: 'Fullscreen yellow utility.' },
    ],
    faqs: [
      {
        question: 'Why does my white screen look like this yellow background?',
        answer: 'You may have Windows Night Light, macOS True Tone, or a third-party app like f.lux active, or your monitor color temperature preset may be set to "Warm" (5000K).',
      },
    ],
    relatedTools: [
      { name: 'Yellow Screen Tool', path: '/yellow-screen', description: 'Fullscreen yellow tool with brightness controls.' },
      { name: 'White Screen Tool', path: '/white-screen', description: 'Verify clean 6500K neutral white.' },
    ],
  },

  // Blue Background
  {
    slug: 'blue-background',
    aliases: ['pure-blue', 'solid-blue'],
    title: 'Blue Background',
    h1: 'Pure Blue Screen Background (#0066FF) — Subpixel Test & 4K PNG',
    metaTitle: 'Blue Background (Pure Blue Screen & 4K PNG Download) | WhiteScreen.vip',
    metaDescription: 'Display a clean, saturated royal blue (#0066FF) background in fullscreen. Test blue subpixel health, chroma key composite, and download lossless 1080p and 4K wallpapers.',
    category: 'solid',
    categoryLabel: 'Solid Color',
    shortDescription: 'Pure saturated royal blue (#0066FF) for blue subpixel testing, cool ambient lighting, and chroma key compositing.',
    dominantColorName: 'Royal Blue',
    primaryHex: '#0066FF',
    type: 'solid',
    cssBackground: '#0066FF',
    isDark: true,
    tags: ['blue', 'royal-blue', 'solid', 'subpixel-test', 'chroma-key', 'cool'],
    about: {
      overview: 'This background presents an unbroken field of pure royal blue (sRGB hex #0066FF, RGB 0, 102, 255). It drives the display panel’s blue subpixel transistors with maximum clarity, providing an essential diagnostic canvas for panel health evaluation.',
      colorCharacteristics: 'Blue light sits at the short-wavelength end of the visible optical spectrum (~450–485 nm). It is crucial for testing subpixel color purity, locating stuck subpixels, and providing cool ambient desk lighting.',
      aestheticTone: 'Cool, serene, and focused. When projected in fullscreen, it creates an immersive electric atmosphere that reduces visual clutter.',
    },
    fullscreenGuide: {
      instruction: 'Click "Open Fullscreen" or press F to expand pure blue across your screen. Inspect for dim or dead blue subpixels.',
      bestUsedFor: 'Diagnosing blue subpixel failure, alternative chroma keying when subjects wear green, and cool background illumination.',
      inspectionTip: 'On LCD panels, inspect the corners to ensure blue saturation does not exhibit purple or cyan drift.',
    },
    useCases: [
      {
        title: 'Blue Subpixel Health & Defect Check',
        description: 'Locate individual dead blue subpixels or persistent stuck transistors across your display grid.',
        linkText: 'Dead Pixel Diagnostic Test',
        linkHref: '/dead-pixel-test',
      },
      {
        title: 'Chroma Key Video Compositing',
        description: 'Use as an alternative chroma key backdrop when subjects wear green clothing or use green props.',
        linkText: 'Chroma Key Guide',
        linkHref: '/glossary/chroma-key',
      },
      {
        title: 'Cool Ambient Desk Lighting',
        description: 'Set a secondary monitor to pure blue to create a modern tech glow across your workspace.',
        linkText: 'Blue Screen Tool',
        linkHref: '/blue-screen',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Select royal blue for subpixel inspection, cool studio accent lighting, or video compositing.',
      contrastAndReadability: 'Pure white text (#FFFFFF) provides crisp legibility (over 8:1 contrast ratio) against royal blue.',
      alternativeConsiderations: 'For a darker midnight tone, consider Deep Navy (#0F172A). For video calls in green attire, Blue Screen (#0000FF) is ideal.',
    },
    contextualLinks: [
      { label: 'Blue Screen Tool', href: '/blue-screen', description: 'Fullscreen pure blue utility with brightness controls.' },
      { label: 'Deep Navy Background', href: '/backgrounds/deep-navy', description: 'Dark midnight slate alternative.' },
      { label: 'Green Screen Background', href: '/backgrounds/green-screen-background', description: 'Studio green chroma key backdrop.' },
      { label: 'Screen Color Test', href: '/screen-color-test', description: 'Inspect all three RGB primary channels.' },
    ],
    faqs: [
      {
        question: 'What is the color code for this blue background?',
        answer: 'The hex code is #0066FF, RGB is rgb(0, 102, 255), and HSL is hsl(216, 100%, 50%).',
      },
      {
        question: 'Can I download this blue background in 4K resolution?',
        answer: 'Yes. Use the download buttons above to export lossless 3840×2160 (4K UHD) PNG files generated directly in your browser without compression.',
      },
    ],
    relatedTools: [
      { name: 'Blue Screen Tool', path: '/blue-screen', description: 'Dedicated fullscreen blue screen tool.' },
      { name: 'Dead Pixel Test', path: '/dead-pixel-test', description: 'Cycle RGB primaries to detect dead subpixels.' },
      { name: 'Screen Color Test', path: '/screen-color-test', description: 'Evaluate panel color accuracy.' },
    ],
  },

  // 9. Green Screen Background
  {
    slug: 'green-screen-background',
    aliases: ['chroma-green'],
    title: 'Green Screen Background',
    h1: 'Pure Chroma Key Green Screen Background (#00FF00) — Studio Keying & 4K PNG',
    metaTitle: 'Green Screen Background (Chroma Key #00FF00 & 4K Download) | WhiteScreen.vip',
    metaDescription: 'Broadcast-standard pure green (#00FF00) background. Perfect for chroma keying in OBS, Zoom, and Premiere Pro. Download 1080p and 4K PNG files.',
    category: 'video-call',
    categoryLabel: 'Video Call',
    shortDescription: 'Broadcast standard pure green (#00FF00) for software chroma key video compositing in OBS, Zoom, and editing suites.',
    dominantColorName: 'Chroma Key Green',
    primaryHex: '#00FF00',
    type: 'solid',
    cssBackground: '#00FF00',
    isDark: false,
    tags: ['green-screen', 'chroma-key', 'obs', 'video-call', 'streaming', 'zoom'],
    about: {
      overview: 'This background is calibrated to pure broadcast-standard chroma key green (hex #00FF00, RGB 0, 255, 0). It isolates the green subpixel channel at 100% saturation while completely deactivating red and blue channels.',
      colorCharacteristics: 'Because human skin tones contain predominantly red, brown, and yellow pigments and virtually zero pure green, green provides the highest mathematical separation for digital video keying algorithms.',
      aestheticTone: 'Engineered for utility. When displayed on a monitor, TV, or mobile device behind a subject, video software can replace it with any custom virtual set.',
    },
    fullscreenGuide: {
      instruction: 'Display this background on a secondary television, monitor, or tablet positioned behind a subject or small product to create an instant digital green-screen backdrop.',
      bestUsedFor: 'Chroma keying in OBS Studio, Streamlabs, Zoom virtual backgrounds, and video editing suites like Premiere Pro and DaVinci Resolve.',
      inspectionTip: 'Ensure even lighting across the screen without glare reflections from studio lights, which can cause keying fringing around edges.',
    },
    useCases: [
      {
        title: 'OBS & Streaming Virtual Backdrop',
        description: 'Position your green screen monitor behind you to easily key yourself into games and presentations.',
        linkText: 'Chroma Key Technology Guide',
        linkHref: '/glossary/chroma-key',
      },
      {
        title: 'Product Photography & Video B-Roll Keying',
        description: 'Place small physical objects in front of a green screen tablet to cleanly isolate them in post-production.',
        linkText: 'Fullscreen Green Screen Tool',
        linkHref: '/green-screen',
      },
      {
        title: 'Green Subpixel Health Check',
        description: 'Examine panel health on the green color channel to detect weak or stuck green subpixels.',
        linkText: 'Dead Pixel Test',
        linkHref: '/dead-pixel-test',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Use pure chroma green whenever you plan to use software background removal (OBS, Premiere, Zoom).',
      contrastAndReadability: 'Do not use this background for general desktop reading or writing, as 100% green saturation causes optical fatigue.',
      alternativeConsiderations: 'If the subject is wearing green clothing or holding green objects, switch to Blue Screen (#0000FF) instead.',
    },
    contextualLinks: [
      { label: 'Chroma Key Explained', href: '/glossary/chroma-key', description: 'Technical guide on video keying algorithms and lighting.' },
      { label: 'Virtual Office Background', href: '/backgrounds/virtual-office', description: 'Pre-rendered professional backdrop without green screen.' },
      { label: 'Green Screen Tool', href: '/green-screen', description: 'Interactive fullscreen green screen.' },
      { label: 'Blue Screen Tool', href: '/blue-screen', description: 'Alternative chroma blue for subjects wearing green.' },
    ],
    authoritativeLink: {
      title: 'OBS Studio: Chroma Key Filter Configuration Guide',
      url: 'https://obsproject.com/wiki/',
      organization: 'OBS Project',
      note: 'Official documentation on fine-tuning similarity, smoothness, and spill reduction for green-screen video.',
    },
    faqs: [
      {
        question: 'Why is green used instead of white for video backgrounds?',
        answer: 'Human eyes, teeth, and skin reflections contain white light, which causes parts of a person to disappear if white is keyed out. Pure green is absent from human skin, making it clean to separate.',
      },
      {
        question: 'What do I do if green light spills onto my shoulders or hair?',
        answer: 'Increase the physical distance between you and the green screen, lower the screen brightness slightly, or enable "Key Color Spill Reduction" in your streaming software.',
      },
    ],
    relatedTools: [
      { name: 'Green Screen Tool', path: '/green-screen', description: 'Dedicated chroma key tool.' },
      { name: 'Blue Screen Tool', path: '/blue-screen', description: 'Chroma key blue alternative.' },
      { name: 'Zoom Lighting Tool', path: '/zoom-lighting', description: 'Fill light to eliminate green spill.' },
    ],
  },

  // 10. Warm Beige
  {
    slug: 'warm-beige',
    aliases: ['beige-background'],
    title: 'Warm Beige Background',
    h1: 'Warm Beige Aesthetic Background (#F5EBE0) — Calm Linen & 4K Wallpaper',
    metaTitle: 'Warm Beige Background (Minimalist Cream Linen & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Gentle warm beige and cream linen background (#F5EBE0). Low eye strain, Scandinavian minimalism, and lossless 1080p and 4K downloads.',
    category: 'minimal',
    categoryLabel: 'Aesthetic & Minimal',
    shortDescription: 'Gentle warm cream and unbleached linen tone (#F5EBE0) that softens harsh blue glare during long work sessions.',
    dominantColorName: 'Warm Linen Beige',
    primaryHex: '#F5EBE0',
    type: 'solid',
    cssBackground: '#F5EBE0',
    isDark: false,
    tags: ['beige', 'cream', 'minimal', 'aesthetic', 'calm', 'low-contrast'],
    about: {
      overview: 'This background presents a tranquil warm beige (hex #F5EBE0, RGB 245, 235, 224). Inspired by unbleached linen, natural stone, and heavy cream book paper, it reflects light gently without the intense glare of 100% white.',
      colorCharacteristics: 'Slightly attenuated blue subpixels create a warm color cast around 5400K, mirroring the natural warmth of morning sunlight.',
      aestheticTone: 'Restful, understated, and timeless. Favored in architectural portfolios and Scandinavian minimalist interior workspaces.',
    },
    fullscreenGuide: {
      instruction: 'Use full screen warm beige as an ambient reading lamp or soothing background for long typing sessions.',
      bestUsedFor: 'Reducing eye fatigue for users who dislike dark mode but find pure white too harsh.',
      inspectionTip: 'Check whether your screen renders the cream undertone smoothly across the panel without cool cyan blotches.',
    },
    useCases: [
      {
        title: 'Comfortable Long-Form Writing & Reading',
        description: 'Mimics the optical warmth of high-grade paperback book paper for prolonged document review.',
        linkText: 'Forest Background Alternative',
        linkHref: '/backgrounds/forest-background',
      },
      {
        title: 'Minimalist Clean Wallpaper',
        description: 'Creates a clutter-free, aesthetic desktop that complements light-colored physical accessories.',
        linkText: 'White Background',
        linkHref: '/backgrounds/white-background',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose warm beige if you want a clean, bright workspace that does not assault your retinas with blue light.',
      contrastAndReadability: 'Pair with dark espresso brown (#2B1B17) or deep charcoal (#1F2937) for sophisticated legibility.',
      alternativeConsiderations: 'For even lower light at night, switch to Forest Green or Deep Navy.',
    },
    contextualLinks: [
      { label: 'White Background', href: '/backgrounds/white-background', description: 'Clinical 100% pure white alternative.' },
      { label: 'Forest Background', href: '/backgrounds/forest-background', description: 'Calming dark botanical green.' },
      { label: 'Zoom Lighting Tool', href: '/zoom-lighting', description: 'Adjustable warm ambient softbox.' },
    ],
    faqs: [
      {
        question: 'Is beige easier on eyes than white?',
        answer: 'Yes. Warm beige emits significantly lower blue wavelength energy and reduces pupil contraction stress, preventing headaches during long reading sessions.',
      },
    ],
    relatedTools: [
      { name: 'Zoom Lighting', path: '/zoom-lighting', description: 'Adjustable color temperature lighting.' },
      { name: 'White Screen Tool', path: '/white-screen', description: 'Baseline pure white screen.' },
    ],
  },

  // 11. Deep Navy
  {
    slug: 'deep-navy',
    aliases: ['navy-background'],
    title: 'Deep Navy Background',
    h1: 'Deep Navy Blue Background (#0F172A) — Executive Midnight & 4K Wallpaper',
    metaTitle: 'Deep Navy Background (Midnight Slate #0F172A & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Executive deep navy slate background (#0F172A). Authoritative, low glare, high contrast for white text, and 4K lossless PNG downloads.',
    category: 'dark-oled',
    categoryLabel: 'Dark & OLED',
    shortDescription: 'Authoritative midnight slate blue (#0F172A) for executive presentations and glare-free dark workspaces.',
    dominantColorName: 'Deep Navy Slate',
    primaryHex: '#0F172A',
    type: 'solid',
    cssBackground: '#0F172A',
    isDark: true,
    tags: ['navy', 'blue', 'midnight', 'executive', 'dark', 'corporate'],
    about: {
      overview: 'This background renders a deep, saturated navy slate (hex #0F172A, RGB 15, 23, 42). It evokes the serene stillness of the midnight ocean while maintaining crisp contrast for white typography.',
      colorCharacteristics: 'Rich in deep blue hues with heavy black absorption, it minimizes screen glare while avoiding the stark void of pure black.',
      aestheticTone: 'Authoritative, calm, and professional. The classic corporate tone for fintech, law, and high-stakes executive briefings.',
    },
    fullscreenGuide: {
      instruction: 'Open fullscreen to create a sophisticated, distraction-free environment for deep focus.',
      bestUsedFor: 'Slide presentations, dual-monitor workstations, and high-contrast dark mode coding.',
      inspectionTip: 'Check whether the deep navy retains blue saturation or washes out into charcoal on low-contrast TN panels.',
    },
    useCases: [
      {
        title: 'Executive Presentation Slide Backdrop',
        description: 'Lends authority and clarity to charts, key metrics, and financial presentations.',
        linkText: 'Virtual Office Background',
        linkHref: '/backgrounds/virtual-office',
      },
      {
        title: 'Nighttime Coding & Writing Environment',
        description: 'Deep navy provides a gentle dark backdrop that makes colored syntax pop cleanly.',
        linkText: 'Black Background',
        linkHref: '/backgrounds/black-background',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose deep navy when you want the glare reduction of dark mode combined with rich color elegance.',
      contrastAndReadability: 'Provides over 14:1 contrast ratio with white text (#FFFFFF) and pairs beautifully with cyan and gold accents.',
      alternativeConsiderations: 'For battery saving on OLED panels, True Black is slightly more energy efficient.',
    },
    contextualLinks: [
      { label: 'Black Background', href: '/backgrounds/black-background', description: '0% true OLED black.' },
      { label: 'Ocean Breeze Gradient', href: '/backgrounds/ocean-breeze', description: 'Dynamic cyan to navy ocean gradient.' },
      { label: 'Blue Screen Tool', href: '/blue-screen', description: 'Primary chroma blue screen.' },
    ],
    faqs: [
      {
        question: 'Why do so many professional software applications use navy slate?',
        answer: 'Navy slate (#0F172A) provides the eye-comfort benefits of dark mode while retaining subtle color psychology of stability and trust that pure black lacks.',
      },
    ],
    relatedTools: [
      { name: 'Blue Screen Tool', path: '/blue-screen', description: 'Fullscreen blue screen tool.' },
      { name: 'Black Screen Tool', path: '/black-screen', description: 'Zero emission black screen.' },
    ],
  },

  // 12. Sunset Glow
  {
    slug: 'sunset-glow',
    title: 'Sunset Glow Background',
    h1: 'Sunset Glow Gradient Background — Warm Horizon 4K Wallpaper',
    metaTitle: 'Sunset Glow Background (Warm Horizon & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Mesmerizing warm sunset gradient background blending dusk violet, coral, and golden amber. Download in 1080p and 4K Ultra HD.',
    category: 'gradient',
    categoryLabel: 'Gradients',
    shortDescription: 'Warm, poetic transition from dusk violet to coral and golden amber reminiscent of twilight skies.',
    dominantColorName: 'Sunset Glow',
    primaryHex: '#4A154B',
    secondaryHex: '#FF7A00',
    accentHex: '#E11D48',
    type: 'gradient',
    cssBackground: 'linear-gradient(135deg, #3B0764 0%, #BE185D 45%, #F97316 80%, #FBBF24 100%)',
    isDark: true,
    tags: ['sunset', 'gradient', 'warm', 'coral', 'amber', 'twilight'],
    about: {
      overview: 'This background captures the ethereal beauty of twilight, transitioning smoothly from deep violet sky through warm raspberry coral into radiant amber gold.',
      colorCharacteristics: 'Rich in warm red and amber frequencies with deep purple anchor tones, creating high dynamic visual drama.',
      aestheticTone: 'Poetic, evocative, and cozy. Brings warmth and inspiration to any desktop or tablet setup.',
    },
    fullscreenGuide: {
      instruction: 'Open fullscreen during dusk hours to harmonize your indoor lighting with natural twilight outdoors.',
      bestUsedFor: 'Desktop wallpapers, creative mood boards, and aesthetic stream overlays.',
      inspectionTip: 'Inspect the smoothness of color blending across the red-to-orange threshold for bit-depth banding.',
    },
    useCases: [
      {
        title: 'Aesthetic Workstation Wallpaper',
        description: 'Transforms cold monitor setups into an inspiring, radiant artistic window.',
        linkText: 'Orange Background',
        linkHref: '/backgrounds/orange-background',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose Sunset Glow for an uplifting, warm creative aesthetic.',
      contrastAndReadability: 'Use bold white or dark icons depending on screen position.',
      alternativeConsiderations: 'For a cooler palette, choose Ocean Breeze.',
    },
    contextualLinks: [
      { label: 'Gradient Background', href: '/backgrounds/gradient-background', description: 'Sunset Horizon multi-stop gradient.' },
      { label: 'Orange Background', href: '/backgrounds/orange-background', description: 'Pure saturated amber orange.' },
    ],
    faqs: [
      {
        question: 'Does this gradient support 4K UHD monitors?',
        answer: 'Yes, our download engine renders the gradient at 3840×2160 lossless PNG with full mathematical smoothing.',
      },
    ],
    relatedTools: [
      { name: 'Screen Color Test', path: '/screen-color-test', description: 'Test color rendering.' },
    ],
  },

  // 13. Ocean Breeze
  {
    slug: 'ocean-breeze',
    title: 'Ocean Breeze Background',
    h1: 'Ocean Breeze Gradient Background — Coastal Cyan to Deep Blue 4K PNG',
    metaTitle: 'Ocean Breeze Background (Cyan to Deep Blue & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Invigorating cyan to deep ocean sapphire gradient background. Clean, refreshing aesthetic with 1080p and 4K downloads.',
    category: 'gradient',
    categoryLabel: 'Gradients',
    shortDescription: 'Refreshing gradient flowing from tropical aqua cyan into deep oceanic sapphire blue.',
    dominantColorName: 'Ocean Cyan & Sapphire',
    primaryHex: '#06B6D4',
    secondaryHex: '#1E3A8A',
    type: 'gradient',
    cssBackground: 'linear-gradient(135deg, #06B6D4 0%, #0284C7 40%, #1E3A8A 100%)',
    isDark: false,
    tags: ['ocean', 'cyan', 'blue', 'gradient', 'refreshing', 'water'],
    about: {
      overview: 'This background evokes clear coastal waters, moving smoothly from luminous aqua cyan into cobalt and deep marine sapphire.',
      colorCharacteristics: 'Cool color temperature that promotes clarity, focus, and calm efficiency.',
      aestheticTone: 'Crisp, refreshing, and clean.',
    },
    fullscreenGuide: {
      instruction: 'Open fullscreen for an energizing visual reset during midday work slumps.',
      bestUsedFor: 'High-productivity workspaces and tech presentation backdrops.',
      inspectionTip: 'Check blue subpixel saturation consistency from top left to bottom right.',
    },
    useCases: [
      {
        title: 'Productivity & Focus Desktop',
        description: 'Promotes sustained mental clarity without warm distractions.',
        linkText: 'Deep Navy Background',
        linkHref: '/backgrounds/deep-navy',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose Ocean Breeze when you want clean modern vibes without harsh dark mode.',
      contrastAndReadability: 'Crisp white typography looks exceptional across the entire gradient.',
      alternativeConsiderations: 'For evening work, warmer tones like Sunset Glow may be easier on the eyes.',
    },
    contextualLinks: [
      { label: 'Deep Navy Background', href: '/backgrounds/deep-navy', description: 'Executive dark blue alternative.' },
      { label: 'Blue Screen Tool', href: '/blue-screen', description: 'Pure blue screen tool.' },
    ],
    faqs: [
      {
        question: 'Why do cool blue backgrounds aid focus?',
        answer: 'Cool optical wavelengths stimulate alertness pathways and promote mental endurance during analytical tasks.',
      },
    ],
    relatedTools: [
      { name: 'Blue Screen Tool', path: '/blue-screen', description: 'Pure blue screen.' },
    ],
  },

  // 14. Virtual Office
  {
    slug: 'virtual-office',
    title: 'Virtual Office Background',
    h1: 'Professional Virtual Office Background — Clean Video Call Backdrop',
    metaTitle: 'Virtual Office Background (Zoom & Teams Video Backdrop & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Sophisticated neutral backdrop for Zoom, Google Meet, and Microsoft Teams. Conceal home clutter with 4K professional studio elegance.',
    category: 'video-call',
    categoryLabel: 'Video Call',
    shortDescription: 'Clean, architectural gradient backdrop designed to look natural and professional on video calls.',
    dominantColorName: 'Studio Slate & Warm Fog',
    primaryHex: '#334155',
    secondaryHex: '#1E293B',
    type: 'gradient',
    cssBackground: 'radial-gradient(ellipse at 50% 40%, #475569 0%, #1E293B 70%, #0F172A 100%)',
    isDark: true,
    tags: ['virtual-office', 'zoom', 'teams', 'video-call', 'professional', 'backdrop'],
    about: {
      overview: 'Designed specifically for remote workers, consultants, and interviewees. This background provides a subtle vignette studio lighting effect that frames your webcam portrait perfectly without distracting moving elements.',
      colorCharacteristics: 'Neutral charcoal and slate tones that complement all skin complexions and business attire.',
      aestheticTone: 'Executive, polished, and competent.',
    },
    fullscreenGuide: {
      instruction: 'Download the 1080p or 4K PNG file and upload it into Zoom, Microsoft Teams, or Google Meet as your custom virtual background.',
      bestUsedFor: 'Client consultations, job interviews, and team presentations from home.',
      inspectionTip: 'The central soft hotspot provides an optical halo behind your head that helps edge-detection algorithms separate you from the background cleanly.',
    },
    useCases: [
      {
        title: 'Job Interviews & Client Calls',
        description: 'Eliminates household clutter and conveys executive polish.',
        linkText: 'Zoom Lighting Tool',
        linkHref: '/zoom-lighting',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Use on any video conference where you want to look polished and trustworthy.',
      contrastAndReadability: 'Dark neutral background makes light and dark clothing stand out clearly.',
      alternativeConsiderations: 'For creative meetings, try Blurred Studio or Soft Lavender.',
    },
    contextualLinks: [
      { label: 'Green Screen Background', href: '/backgrounds/green-screen-background', description: 'Hardware chroma keying alternative.' },
      { label: 'Zoom Lighting Tool', href: '/zoom-lighting', description: 'Face-flattering key light.' },
    ],
    faqs: [
      {
        question: 'How do I add this to Zoom?',
        answer: 'Download the 1080p image, open Zoom Settings > Backgrounds & Filters > click "+" to Add Image, and select your downloaded PNG.',
      },
    ],
    relatedTools: [
      { name: 'Zoom Lighting', path: '/zoom-lighting', description: 'Softbox fill light for webcams.' },
    ],
  },

  // 15. Purple Dream
  {
    slug: 'purple-dream',
    title: 'Purple Dream Background',
    h1: 'Purple Dream Gradient Background — Soft Lilac to Magenta 4K Wallpaper',
    metaTitle: 'Purple Dream Background (Lilac to Magenta Gradient & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Dreamy purple, lilac, and magenta gradient background. Aesthetic desktop wallpaper with 1080p, 2K, and 4K downloads.',
    category: 'gradient',
    categoryLabel: 'Gradients',
    shortDescription: 'Dreamy blend of soft lilac, cosmic violet, and rich magenta for creative desktop elegance.',
    dominantColorName: 'Cosmic Violet & Lilac',
    primaryHex: '#8B5CF6',
    secondaryHex: '#EC4899',
    type: 'gradient',
    cssBackground: 'linear-gradient(135deg, #7C3AED 0%, #C026D3 50%, #F43F5E 100%)',
    isDark: true,
    tags: ['purple', 'dream', 'violet', 'magenta', 'aesthetic', 'creative'],
    about: {
      overview: 'A lush, modern gradient that blends regal purple with electric magenta and rose twilight.',
      colorCharacteristics: 'Rich in both blue and red wavelengths, stimulating both calm focus and imaginative energy.',
      aestheticTone: 'Mystical, creative, and luxurious.',
    },
    fullscreenGuide: {
      instruction: 'Enter fullscreen to envelop your room in ambient violet glow.',
      bestUsedFor: 'Creative digital art setups, late-night writing, and aesthetic wallpapers.',
      inspectionTip: 'Check for smooth gradation across violet-to-rose transitions.',
    },
    useCases: [
      {
        title: 'Creative Studio Wallpaper',
        description: 'Brings modern creative vibrancy to dual-monitor edit suites.',
        linkText: 'Neon Background',
        linkHref: '/backgrounds/neon-background',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Select Purple Dream for creative workstations and designer desktops.',
      contrastAndReadability: 'White typography and dark icons both maintain strong contrast.',
      alternativeConsiderations: 'For a softer pastel approach, try Soft Lavender.',
    },
    contextualLinks: [
      { label: 'Neon Background', href: '/backgrounds/neon-background', description: 'High-energy cyberpunk glow.' },
      { label: 'Gradient Background', href: '/backgrounds/gradient-background', description: 'Multi-stop sunset horizon.' },
    ],
    faqs: [
      {
        question: 'What monitors display purple gradients best?',
        answer: 'Wide color gamut displays covering 95%+ of DCI-P3 reproduce the deep magenta and violet tones with breathtaking saturation.',
      },
    ],
    relatedTools: [
      { name: 'Screen Color Test', path: '/screen-color-test', description: 'Verify color gamut accuracy.' },
    ],
  },

  // 16. Soft Lavender
  {
    slug: 'soft-lavender',
    title: 'Soft Lavender Background',
    h1: 'Soft Lavender Aesthetic Background (#E9D5FF) — Pastel Calm & 4K PNG',
    metaTitle: 'Soft Lavender Background (Pastel Lilac #E9D5FF & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Delicate pastel soft lavender background (#E9D5FF). Calming, elegant, low glare, and available in lossless 1080p and 4K resolution.',
    category: 'minimal',
    categoryLabel: 'Aesthetic & Minimal',
    shortDescription: 'Delicate pastel lilac (#E9D5FF) with soothing undertones for peaceful, low-stress computing.',
    dominantColorName: 'Pastel Lavender',
    primaryHex: '#E9D5FF',
    type: 'solid',
    cssBackground: '#E9D5FF',
    isDark: false,
    tags: ['lavender', 'pastel', 'lilac', 'calm', 'minimal', 'gentle'],
    about: {
      overview: 'This background renders a delicate, gentle lavender (hex #E9D5FF, RGB 233, 213, 255). It blends white light with soft floral violet for an airy, peaceful ambiance.',
      colorCharacteristics: 'Low saturation pastel that softens harsh glare while keeping spaces feeling light and open.',
      aestheticTone: 'Tranquil, sweet, and comforting.',
    },
    fullscreenGuide: {
      instruction: 'Open fullscreen to create a gentle, warm pastel ambient light in dark rooms.',
      bestUsedFor: 'Studying, creative journaling, and aesthetic desktop setups.',
      inspectionTip: 'Inspect whether the delicate lilac hue remains consistent across the entire display.',
    },
    useCases: [
      {
        title: 'Mindful Study & Writing Backdrop',
        description: 'Reduces visual noise and anxiety during intense study and writing periods.',
        linkText: 'Warm Beige Alternative',
        linkHref: '/backgrounds/warm-beige',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose Soft Lavender when you want a light, cheerful environment that feels much softer than stark white.',
      contrastAndReadability: 'Pair with dark violet or charcoal typography (#3B0764) for perfect legibility.',
      alternativeConsiderations: 'For a neutral earthy tone, choose Warm Beige.',
    },
    contextualLinks: [
      { label: 'Warm Beige Background', href: '/backgrounds/warm-beige', description: 'Earthy cream linen alternative.' },
      { label: 'White Background', href: '/backgrounds/white-background', description: 'Pure white background.' },
    ],
    faqs: [
      {
        question: 'Does soft lavender reduce glare?',
        answer: 'Yes, its reduced luminance compared to 100% white prevents pupil fatigue and harsh reflection off glossy screens.',
      },
    ],
    relatedTools: [
      { name: 'White Screen Tool', path: '/white-screen', description: 'Fullscreen white screen tool.' },
    ],
  },

  // 17. Blurred Studio
  {
    slug: 'blurred-studio',
    title: 'Blurred Studio Background',
    h1: 'Blurred Studio Bokeh Background — Video Call Depth of Field & 4K PNG',
    metaTitle: 'Blurred Studio Background (Bokeh Blur & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Realistic shallow depth of field blurred studio background for video calls. Download in 1080p and 4K Ultra HD.',
    category: 'video-call',
    categoryLabel: 'Video Call',
    shortDescription: 'Realistic optical bokeh blur mimicking high-end DSLR shallow depth of field for Zoom and Teams.',
    dominantColorName: 'Studio Bokeh Blur',
    primaryHex: '#1E293B',
    secondaryHex: '#64748B',
    type: 'gradient',
    cssBackground: 'radial-gradient(circle at 75% 20%, #94A3B8 0%, #475569 35%, #1E293B 75%, #0F172A 100%)',
    isDark: true,
    tags: ['blurred-studio', 'bokeh', 'dslr', 'zoom', 'teams', 'video-call'],
    about: {
      overview: 'Simulates the creamy optical bokeh of an f/1.4 prime lens in a professional architectural loft, giving your webcam feed a high-end cinematic depth.',
      colorCharacteristics: 'Rich mid-tone grays and soft ambient light patches that look convincing to the human eye.',
      aestheticTone: 'Refined, high-end, and contemporary.',
    },
    fullscreenGuide: {
      instruction: 'Download the 1080p image and set it as your virtual background in your preferred video conferencing software.',
      bestUsedFor: 'Concealing unmade beds or home clutter with believable photographic depth.',
      inspectionTip: 'Ensures natural blending without the jagged "cutout" look of artificial AI background blurs.',
    },
    useCases: [
      {
        title: 'Cinematic Webcam Enhancement',
        description: 'Gives standard $30 webcams the appearance of a $1,500 mirrorless camera setup.',
        linkText: 'Virtual Office Background',
        linkHref: '/backgrounds/virtual-office',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose when you want the most realistic, believable video conference backdrop available.',
      contrastAndReadability: 'Balanced tones flatter both formal and casual business attire.',
      alternativeConsiderations: 'For a simpler minimal look, try Virtual Office.',
    },
    contextualLinks: [
      { label: 'Virtual Office Background', href: '/backgrounds/virtual-office', description: 'Clean architectural backdrop.' },
      { label: 'Zoom Lighting Tool', href: '/zoom-lighting', description: 'Facial fill lighting.' },
    ],
    faqs: [
      {
        question: 'Why is an image background often better than built-in app blur?',
        answer: 'Real-time AI blur consumes heavy CPU/GPU power causing video lag. A static pre-blurred image requires virtually zero processing power.',
      },
    ],
    relatedTools: [
      { name: 'Zoom Lighting', path: '/zoom-lighting', description: 'Fill light for webcam calls.' },
    ],
  },

  // 18. Matrix Code
  {
    slug: 'matrix-code',
    title: 'Matrix Code Background',
    h1: 'Matrix Terminal Digital Rain Background — Cyber Green & 4K Wallpaper',
    metaTitle: 'Matrix Code Background (Cyber Green Terminal & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Iconic sci-fi cyber terminal digital rain background. Download high-resolution 1080p and 4K wallpapers.',
    category: 'neon',
    categoryLabel: 'Neon & Glow',
    shortDescription: 'Cyberpunk digital rain terminal aesthetics inspired by classic sci-fi hacking consoles.',
    dominantColorName: 'Terminal Green',
    primaryHex: '#00FF41',
    secondaryHex: '#0D0208',
    type: 'pattern',
    cssBackground: 'linear-gradient(180deg, #00FF41 0%, #008F11 50%, #003B00 85%, #0D0208 100%)',
    isDark: true,
    tags: ['matrix', 'cyber', 'terminal', 'code', 'hacker', 'green'],
    about: {
      overview: 'Tribute to classic phosphor terminal screens and sci-fi digital rain aesthetics. High-contrast terminal green (#00FF41) descending into obsidian darkness.',
      colorCharacteristics: 'Saturated green phosphorescence on true black for extreme contrast.',
      aestheticTone: 'Nostalgic, hacker-chic, and futuristic.',
    },
    fullscreenGuide: {
      instruction: 'Open fullscreen on secondary monitors for an authentic cyber terminal vibe while programming.',
      bestUsedFor: 'Developer desks, streaming overlays, and gaming wallpapers.',
      inspectionTip: 'Check monitor contrast and black level detail.',
    },
    useCases: [
      {
        title: 'Developer Battlestation Decor',
        description: 'Brings classic hacker cinema aesthetic to your development workstation.',
        linkText: 'Interactive Matrix Screensaver',
        linkHref: '/matrix-screensaver',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose for playful sci-fi atmosphere and gamer setups.',
      contrastAndReadability: 'High visual activity; best suited for secondary screens.',
      alternativeConsiderations: 'For a solid calm green, choose Forest Background.',
    },
    contextualLinks: [
      { label: 'Matrix Screen Tool', href: '/matrix-screensaver', description: 'Interactive live falling code simulation.' },
      { label: 'Neon Background', href: '/backgrounds/neon-background', description: 'Cyberpunk neon glow.' },
    ],
    faqs: [
      {
        question: 'Is there an animated version of this background?',
        answer: 'Yes! Check out our interactive Matrix Screen tool for live streaming digital rain code.',
      },
    ],
    relatedTools: [
      { name: 'Matrix Screen', path: '/matrix-screensaver', description: 'Live animated digital rain.' },
      { name: 'Static Screen', path: '/static-screen', description: 'TV static effect.' },
    ],
  },

  // 19. Graph Paper
  {
    slug: 'graph-paper',
    title: 'Graph Paper Background',
    h1: 'Engineering Graph Paper Background — Blueprint Grid & 4K PNG',
    metaTitle: 'Graph Paper Background (Blueprint Grid & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Precision engineering grid and graph paper background. Perfect for architectural sketching, alignment, and minimalist desktop setups.',
    category: 'minimal',
    categoryLabel: 'Aesthetic & Minimal',
    shortDescription: 'Precision engineering grid pattern for visual alignment, layout planning, and technical desktop setups.',
    dominantColorName: 'Blueprint Slate & Grid',
    primaryHex: '#0F172A',
    secondaryHex: '#1E293B',
    type: 'pattern',
    cssBackground: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, #0F172A 1px)',
    isDark: true,
    tags: ['graph-paper', 'grid', 'blueprint', 'engineering', 'alignment', 'technical'],
    about: {
      overview: 'Features a clean, mathematically precise technical grid overlaid on deep slate blue. Evokes technical blueprints and precision drafting paper.',
      colorCharacteristics: 'Subtle high-precision lines that assist with window alignment and layout planning without causing visual noise.',
      aestheticTone: 'Analytical, structured, and disciplined.',
    },
    fullscreenGuide: {
      instruction: 'Open fullscreen to verify window placement, check display aspect ratios, or inspect physical monitor tilt and bezel alignment.',
      bestUsedFor: 'Display geometry inspection and technical wallpapers.',
      inspectionTip: 'Inspect whether grid lines remain perfectly straight across the panel without barrel or pincushion distortion.',
    },
    useCases: [
      {
        title: 'Physical Display Alignment & Tilt Check',
        description: 'Verify dual-monitor horizontal alignment and bezel seams using straight grid references.',
        linkText: 'Monitor Test Suite',
        linkHref: '/monitor-test',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose for structured technical workstations and engineering setups.',
      contrastAndReadability: 'Subtle lines do not interfere with desktop icon text.',
      alternativeConsiderations: 'For a plain solid blue, choose Deep Navy.',
    },
    contextualLinks: [
      { label: 'Deep Navy Background', href: '/backgrounds/deep-navy', description: 'Solid midnight slate blue.' },
      { label: 'Monitor Test', href: '/monitor-test', description: 'Comprehensive monitor alignment suite.' },
    ],
    faqs: [
      {
        question: 'Can I use this grid to check for monitor distortion?',
        answer: 'Yes. Curved monitors or miscalibrated projectors can be checked against these straight reference lines.',
      },
    ],
    relatedTools: [
      { name: 'Monitor Test', path: '/monitor-test', description: 'Geometry and sharpness tests.' },
    ],
  },

  // 20. Carbon Dark
  {
    slug: 'carbon-dark',
    title: 'Carbon Dark Background',
    h1: 'Carbon Dark Background (#0D0E11) — 5% Near-Black OLED & 4K PNG',
    metaTitle: 'Carbon Dark Background (5% Near-Black #0D0E11 & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Precision 5% near-black carbon background (#0D0E11). Test OLED near-black uniformity, prevent black crush, and download 4K wallpapers.',
    category: 'dark-oled',
    categoryLabel: 'Dark & OLED',
    shortDescription: 'Subtle 5% near-black carbon (#0D0E11) designed to prevent black crush and inspect OLED dark gray uniformity.',
    dominantColorName: 'Carbon Near-Black',
    primaryHex: '#0D0E11',
    type: 'solid',
    cssBackground: '#0D0E11',
    isDark: true,
    tags: ['carbon', 'oled', 'near-black', '5-percent', 'shadow-detail', 'banding-test'],
    about: {
      overview: 'Renders an ultra-deep charcoal (hex #0D0E11, RGB 13, 14, 17) sitting at approximately 5% stimulus above absolute black. Specifically tuned for discerning shadow detail.',
      colorCharacteristics: 'Exposes vertical banding streaks and panel mura that hide in pure pitch black.',
      aestheticTone: 'Understated, sophisticated, and dark.',
    },
    fullscreenGuide: {
      instruction: 'Open full screen in a darkened room to evaluate near-black uniformity on OLED TVs and monitors.',
      bestUsedFor: 'Inspecting OLED vertical banding and preventing black crush in image editing.',
      inspectionTip: 'OLED panels often show faint vertical bands on 5% dark gray that vanish at 20% gray or pure black.',
    },
    useCases: [
      {
        title: 'OLED Near-Black Uniformity Testing',
        description: 'Reveal panel manufacturing banding across low-stimulus gray channels.',
        linkText: 'OLED Gray Test Suite',
        linkHref: '/oled-gray-test',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose when 100% black causes black crush and you need faint visible separation for dark mode UI.',
      contrastAndReadability: 'Excellent contrast with muted light gray and white text.',
      alternativeConsiderations: 'For total pixel shut-off, use True Black.',
    },
    contextualLinks: [
      { label: 'Black Background', href: '/backgrounds/black-background', description: '0% true OLED black.' },
      { label: 'OLED Gray Test', href: '/oled-gray-test', description: '5% to 50% gray field evaluation.' },
    ],
    faqs: [
      {
        question: 'What is black crush?',
        answer: 'Black crush occurs when near-black dark gray details are pushed into pure pitch black, losing shadow detail in photos and games.',
      },
    ],
    relatedTools: [
      { name: 'OLED Gray Test', path: '/oled-gray-test', description: 'Near-black banding test.' },
      { name: 'Black Screen Tool', path: '/black-screen', description: '0% black screen.' },
    ],
  },

  // 21. Midnight Cosmic Purple
  {
    slug: 'midnight-cosmic-purple',
    title: 'Midnight Cosmic Purple Background',
    h1: 'Midnight Cosmic Purple Background (#140B1F) — Deep Space 4K Wallpaper',
    metaTitle: 'Midnight Cosmic Purple Background (#140B1F & 4K PNG) | WhiteScreen.vip',
    metaDescription: 'Deep midnight cosmic purple (#140B1F) background. Atmospheric low-light wallpaper with 1080p, 2K, and 4K downloads.',
    category: 'dark-oled',
    categoryLabel: 'Dark & OLED',
    shortDescription: 'Deep obsidian purple (#140B1F) that maintains low OLED power draw while providing rich subtle color.',
    dominantColorName: 'Midnight Cosmic Purple',
    primaryHex: '#140B1F',
    type: 'solid',
    cssBackground: '#140B1F',
    isDark: true,
    tags: ['midnight', 'purple', 'space', 'cosmic', 'oled', 'dark'],
    about: {
      overview: 'A deep space obsidian purple (hex #140B1F, RGB 20, 11, 31) that merges the battery benefits of dark themes with the richness of cosmic violet.',
      colorCharacteristics: 'Low luminous emission with just enough chromatic presence to feel atmospheric.',
      aestheticTone: 'Mysterious, tranquil, and luxurious.',
    },
    fullscreenGuide: {
      instruction: 'Open fullscreen for an atmospheric nocturnal glow that does not disturb room ambiance.',
      bestUsedFor: 'Nighttime coding, ambient room lighting, and desktop wallpapers.',
      inspectionTip: 'Check whether your panel maintains subtle purple undertones without crushing into plain black.',
    },
    useCases: [
      {
        title: 'Atmospheric Nocturnal Wallpaper',
        description: 'Offers an alluring alternative to standard charcoal dark mode themes.',
        linkText: 'Deep Navy Background',
        linkHref: '/backgrounds/deep-navy',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose for low-light workstations where you want mood and color depth.',
      contrastAndReadability: 'Pastel text (cyan, lavender, peach) creates an ethereal reading experience.',
      alternativeConsiderations: 'For a bolder vibrant look, choose Purple Dream.',
    },
    contextualLinks: [
      { label: 'Deep Navy Background', href: '/backgrounds/deep-navy', description: 'Classic executive dark blue.' },
      { label: 'Purple Dream Gradient', href: '/backgrounds/purple-dream', description: 'Vibrant violet-to-pink gradient.' },
    ],
    faqs: [
      {
        question: 'Does this save power on OLED screens?',
        answer: 'Yes, because the subpixels are emitting only a tiny fraction of their maximum luminance compared to standard bright wallpapers.',
      },
    ],
    relatedTools: [
      { name: 'Black Screen Tool', path: '/black-screen', description: 'True 0% black screen.' },
      { name: 'OLED Gray Test', path: '/oled-gray-test', description: 'Uniformity test.' },
    ],
  },
] as const

export function getBackgroundBySlug(slug: string): BackgroundItem | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '').replace(/^backgrounds\//, '').toLowerCase()
  return BACKGROUND_ITEMS.find((b) => b.slug === normalized || (b.aliases && b.aliases.includes(normalized)))
}
