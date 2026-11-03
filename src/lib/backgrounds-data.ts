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

export { BACKGROUND_CATEGORIES } from './nav-links'

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
        linkHref: '/',
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
      alternativeConsiderations: 'For everyday writing and coding, consider the Beige or Pastel backgrounds for a warmer, softer light.',
    },
    contextualLinks: [
      { label: 'Beige Background', href: '/backgrounds/beige-background', description: 'Gentler warm neutral for long reading sessions.' },
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
      { name: 'White Screen Tool', path: '/', description: 'Fullscreen white tool with brightness controls and timers.' },
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
      alternativeConsiderations: 'For low-light creative editing where near-black shadow detail is essential, consider the Dark Background (#121212), which keeps a little separation from pure black.',
    },
    contextualLinks: [
      { label: 'Dark Background', href: '/backgrounds/dark-background', description: 'Soft #121212 dark-mode gray.' },
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
        linkText: 'Gold Background',
        linkHref: '/backgrounds/gold-background',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose vibrant orange when you want an uplifting, warm environment that avoids the clinical feel of cool white or blue.',
      contrastAndReadability: 'Pair orange with dark charcoal (#1A1A1A) or navy blue (#0F172A) for maximum typographic legibility. White text requires bold weights to maintain readability.',
      alternativeConsiderations: 'If this orange feels too vibrant for a late evening workspace, consider the Beige or Aesthetic backgrounds for a softer look.',
    },
    contextualLinks: [
      { label: 'Red Background', href: '/backgrounds/red-background', description: 'Check pure red primary channel subpixel performance.' },
      { label: 'Yellow Background', href: '/backgrounds/yellow-background', description: 'Sunny high-reflectivity alternative for daylight illumination.' },
      { label: 'Gold Background', href: '/backgrounds/gold-background', description: 'Warm metallic gold gradient.' },
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
        linkText: 'Aesthetic Background',
        linkHref: '/backgrounds/aesthetic-background',
      },
      {
        title: 'Video Presentation Title Backdrop',
        description: 'Provide an engaging, professional background for remote slideshows and keynote presentations.',
        linkText: 'Pastel Background',
        linkHref: '/backgrounds/pastel-background',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose this gradient background when you want visual depth and rich color variety without the clutter of photographic wallpapers.',
      contrastAndReadability: 'Dark icons and white text both maintain good legibility across the gradient, but semi-transparent frosted glass UI elements (macOS dock, Windows acrylic) look particularly striking against it.',
      alternativeConsiderations: 'For a calmer, lighter look, try the Pastel or Aesthetic backgrounds. For something warm and festive, try Gold.',
    },
    contextualLinks: [
      { label: 'Color Banding Guide', href: '/screen-problems/color-banding', description: 'Diagnose stepped stripes in smooth gradients.' },
      { label: 'Aesthetic Background', href: '/backgrounds/aesthetic-background', description: 'Soft peach, pink and blue gradient.' },
      { label: 'Pastel Background', href: '/backgrounds/pastel-background', description: 'Mint, lavender and peach.' },
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
      alternativeConsiderations: 'For a calmer nighttime ambiance, try the Purple or Dark backgrounds.',
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
      { name: 'White Noise Generator', path: '/white-noise-generator/', description: 'White noise with a TV static visual.' },
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
      alternativeConsiderations: 'For softer warm reading, choose the Beige Background (#EADBC8).',
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
      { name: 'White Screen Tool', path: '/', description: 'Verify clean 6500K neutral white.' },
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
      alternativeConsiderations: 'For a darker midnight tone, consider the Dark Background (#121212). For video calls in green attire, Blue Screen (#0000FF) is ideal.',
    },
    contextualLinks: [
      { label: 'Blue Screen Tool', href: '/blue-screen', description: 'Fullscreen pure blue utility with brightness controls.' },
      { label: 'Purple Background', href: '/backgrounds/purple-background', description: 'Rich plain violet.' },
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
      alternativeConsiderations: 'For creative meetings, try the Aesthetic or Pastel backgrounds.',
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

  // Graph Paper
  {
    slug: 'graph-paper',
    aliases: ['graph-paper-background'],
    title: 'Graph Paper Background',
    h1: 'Graph Paper Background — Blue Grid Paper Wallpaper & PNG',
    metaTitle: 'Graph Paper Background (Blue Grid, Fullscreen & PNG)',
    metaDescription:
      'Free graph paper background with a light blue 5×5 grid on white. Use it fullscreen for sketching, tracing and alignment, or download a crisp PNG up to 8K.',
    category: 'minimal',
    categoryLabel: 'Aesthetic & Minimal',
    shortDescription: 'Classic white graph paper with light blue squares and darker lines every fifth square.',
    dominantColorName: 'Paper White & Grid Blue',
    primaryHex: '#F8FBFF',
    secondaryHex: '#D3E3F4',
    accentHex: '#8DB4DD',
    type: 'pattern',
    cssBackground:
      'linear-gradient(#8DB4DD 1px, transparent 1px) 0 0 / 100px 100px, linear-gradient(90deg, #8DB4DD 1px, transparent 1px) 0 0 / 100px 100px, linear-gradient(#D3E3F4 1px, transparent 1px) 0 0 / 20px 20px, linear-gradient(90deg, #D3E3F4 1px, transparent 1px) 0 0 / 20px 20px, #F8FBFF',
    isDark: false,
    tags: ['graph-paper', 'grid-paper', 'squared-paper', 'engineering', 'sketching', 'alignment'],
    about: {
      overview:
        'This is the squared paper you know from maths and engineering notebooks: a near-white sheet (#F8FBFF) ruled with fine light blue lines (#D3E3F4) and a heavier blue line (#8DB4DD) every fifth square. In the preview each small square is 20 px and each major square is 100 px.',
      colorCharacteristics:
        'The minor grid is pale enough to fade into the background while you work, and the major grid gives you quick reference points for counting, measuring and lining things up.',
      aestheticTone: 'Tidy, studious and practical, like a fresh page in a lab notebook.',
    },
    fullscreenGuide: {
      instruction:
        'Open it fullscreen and turn the brightness up to use your screen as a light box with a built-in grid, or leave it at normal brightness as a planning surface behind floating windows.',
      bestUsedFor: 'Tracing, pixel art and lettering practice, layout planning, and checking monitor geometry.',
      inspectionTip:
        'Look along the major lines toward the edges. On a well-set-up monitor or projector they stay straight and evenly spaced; bowing or squeezing shows a geometry or scaling problem.',
    },
    useCases: [
      {
        title: 'Tracing and lettering practice',
        description: 'Lay thin paper over the screen and use the grid to keep letters, sketches and diagrams square.',
        linkText: 'Drawing and tracing guide',
        linkHref: '/guides/fullscreen-white-screen-for-drawing-and-tracing/',
      },
      {
        title: 'Monitor geometry and scaling check',
        description: 'Uneven squares reveal non-native resolutions, overscan on TVs and keystone errors on projectors.',
        linkText: 'Screen resolution test',
        linkHref: '/screen-resolution-test/',
      },
      {
        title: 'Desk wallpaper for makers',
        description: 'A calm grid behind your icons suits engineers, designers and students.',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose graph paper when you need straight reference lines; choose a plain color when you only need light.',
      contrastAndReadability: 'Dark icon labels and black text read clearly; the grid is too light to compete with them.',
      alternativeConsiderations: 'For a plain bright sheet without lines, use the White Background or the fullscreen White Screen.',
    },
    contextualLinks: [
      { label: 'White Background', href: '/backgrounds/white-background/', description: 'The same bright sheet without a grid.' },
      { label: 'Screen Resolution Test', href: '/screen-resolution-test/', description: 'Check that your display runs at native resolution.' },
      { label: 'Monitor Test', href: '/monitor-test/', description: 'Geometry, sharpness and color patterns in one place.' },
    ],
    faqs: [
      {
        question: 'What size are the squares?',
        answer:
          'In the preview each small square is 20 × 20 px, grouped into 100 px major squares (5 × 5). Downloads scale the grid with the image so it looks the same at 1080p and 4K.',
      },
      {
        question: 'Can I print it?',
        answer:
          'Yes. Download the PNG and print it to fit the page. Printed square size depends on the paper size and scaling, so it is not a precise millimetre grid.',
      },
      {
        question: 'Can I check my monitor for distortion with it?',
        answer:
          'Yes. Straight, evenly spaced lines across the whole screen mean the image is not being stretched. Bent or uneven lines usually mean scaling, overscan or projector keystone settings need adjusting.',
      },
    ],
    relatedTools: [
      { name: 'Monitor Test', path: '/monitor-test/', description: 'Geometry and sharpness tests.' },
      { name: 'White Screen', path: '/', description: 'Plain fullscreen white for light-box tracing.' },
    ],
  },

  // Pink Background
  {
    slug: 'pink-background',
    title: 'Pink Background',
    h1: 'Pink Background (#F472B6) — Plain Pink Wallpaper & PNG',
    metaTitle: 'Pink Background (Plain Pink #F472B6, Fullscreen & PNG)',
    metaDescription:
      'A clean, plain pink background (#F472B6). Show it fullscreen as soft fill light or download a pink wallpaper PNG in 1080p, 2K, 4K or a phone size.',
    category: 'solid',
    categoryLabel: 'Solid Color',
    shortDescription: 'Bright, friendly plain pink (#F472B6) for wallpapers, designs and flattering fill light.',
    dominantColorName: 'Bubblegum Pink',
    primaryHex: '#F472B6',
    type: 'solid',
    cssBackground: '#F472B6',
    isDark: false,
    tags: ['pink', 'plain-pink', 'cute', 'wallpaper', 'fill-light'],
    about: {
      overview:
        'A single flat field of pink (hex #F472B6, RGB 244, 114, 182): bright enough to feel cheerful, soft enough not to glare. There is no texture, noise or watermark, so it works as a base for designs and as a plain phone or desktop wallpaper.',
      colorCharacteristics:
        'It mixes strong red with a good share of blue and a little green, so it reads as a cool, candy pink rather than salmon or coral.',
      aestheticTone: 'Playful, warm and upbeat.',
    },
    fullscreenGuide: {
      instruction:
        'Go fullscreen and turn the brightness up to use the screen as a soft pink fill light for selfies, product shots or video calls.',
      bestUsedFor: 'Wallpapers, social graphics, flattering fill light and party displays.',
      inspectionTip: 'Pink lights red and blue subpixels together, so an uneven tint across the screen is easy to spot.',
    },
    useCases: [
      {
        title: 'Selfie and video-call fill light',
        description: 'A pink glow warms skin tones in a way plain white light does not.',
        linkText: 'Zoom lighting tool',
        linkHref: '/zoom-lighting/',
      },
      {
        title: 'Phone and desktop wallpaper',
        description: 'Download a phone-size PNG for a minimal, cheerful lock screen.',
      },
      {
        title: 'Design base',
        description: 'Drop text or product cutouts on top for posts, invites and thumbnails.',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose pink when you want something light-hearted that still looks clean.',
      contrastAndReadability: 'Dark text (near black or deep plum) reads best; white text works only when large and bold.',
      alternativeConsiderations: 'For a softer, whiter tone try the Pastel Background; for a stronger color try the Purple Background.',
    },
    contextualLinks: [
      { label: 'Pink Screen', href: '/pink-screen/', description: 'Fullscreen pink with color controls.' },
      { label: 'Pastel Background', href: '/backgrounds/pastel-background/', description: 'Softer mint, lavender and peach.' },
      { label: 'Aesthetic Background', href: '/backgrounds/aesthetic-background/', description: 'Peach-to-pink-to-blue gradient.' },
    ],
    faqs: [
      {
        question: 'What is the hex code of this pink?',
        answer: 'It is #F472B6 (RGB 244, 114, 182).',
      },
      {
        question: 'Can I use it as a phone wallpaper?',
        answer: 'Yes. Pick the phone size (1080 × 2400) or enter your exact screen size, then download the PNG.',
      },
    ],
    relatedTools: [
      { name: 'Pink Screen', path: '/pink-screen/', description: 'Fullscreen pink light.' },
      { name: 'Zoom Lighting', path: '/zoom-lighting/', description: 'Adjustable video-call fill light.' },
    ],
  },

  // Green Background
  {
    slug: 'green-background',
    aliases: ['sage-green'],
    title: 'Green Background',
    h1: 'Green Background (#16A34A) — Plain Green Wallpaper & PNG',
    metaTitle: 'Green Background (Plain Green #16A34A, Fullscreen & PNG)',
    metaDescription:
      'A plain, fresh green background (#16A34A). Use it fullscreen or download a green wallpaper PNG in 1080p, 2K, 4K or phone size. Need chroma key? See Green Screen.',
    category: 'solid',
    categoryLabel: 'Solid Color',
    shortDescription: 'Fresh leaf green (#16A34A) for calm wallpapers, slides and design backdrops.',
    dominantColorName: 'Leaf Green',
    primaryHex: '#16A34A',
    type: 'solid',
    cssBackground: '#16A34A',
    isDark: true,
    tags: ['green', 'plain-green', 'nature', 'wallpaper', 'calm'],
    about: {
      overview:
        'A flat, natural leaf green (hex #16A34A, RGB 22, 163, 74). It is a decorative green: deeper and calmer than the bright chroma-key green used for video keying.',
      colorCharacteristics:
        'Green sits in the middle of the visible spectrum where the eye is most sensitive, so even a mid-tone green looks bright and lively without being harsh.',
      aestheticTone: 'Fresh, balanced and restful.',
    },
    fullscreenGuide: {
      instruction: 'Go fullscreen for a calm green backdrop on a TV or spare monitor, or as a soft green fill light.',
      bestUsedFor: 'Wallpapers, presentation backdrops, eco and nature themed designs.',
      inspectionTip: 'For a clean check of green subpixels only, use the pure #00FF00 Green Screen instead.',
    },
    useCases: [
      {
        title: 'Calm desktop wallpaper',
        description: 'A plain green desktop is easy on the eyes and keeps icons readable.',
      },
      {
        title: 'Slides and social posts',
        description: 'A natural green base suits sustainability, health and garden topics.',
      },
      {
        title: 'Not for chroma key',
        description: 'Keying software works best with the brighter, purer chroma green.',
        linkText: 'Green Screen Background',
        linkHref: '/backgrounds/green-screen-background/',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose this green for a natural, relaxed look rather than a technical keying color.',
      contrastAndReadability: 'White text reads well on it; very dark green or black text also works.',
      alternativeConsiderations: 'For video keying use the Green Screen Background; for something lighter use the Pastel Background.',
    },
    contextualLinks: [
      { label: 'Green Screen Background', href: '/backgrounds/green-screen-background/', description: 'Chroma-key green for video.' },
      { label: 'Green Screen', href: '/green-screen/', description: 'Pure #00FF00 for subpixel tests.' },
      { label: 'Pastel Background', href: '/backgrounds/pastel-background/', description: 'Soft mint, lavender and peach.' },
    ],
    faqs: [
      {
        question: 'Is this the same as a green screen for video?',
        answer:
          'No. This is a decorative green. For keying out a background in OBS, Zoom or video editors, use the Green Screen Background, which is the standard bright chroma green.',
      },
      {
        question: 'What is the hex code?',
        answer: 'It is #16A34A (RGB 22, 163, 74).',
      },
    ],
    relatedTools: [
      { name: 'Green Screen', path: '/green-screen/', description: 'Fullscreen pure green.' },
      { name: 'Dead Pixel Test', path: '/dead-pixel-test/', description: 'Cycle red, green and blue fields.' },
    ],
  },

  // Purple Background
  {
    slug: 'purple-background',
    title: 'Purple Background',
    h1: 'Purple Background (#7C3AED) — Plain Purple Wallpaper & PNG',
    metaTitle: 'Purple Background (Plain Purple #7C3AED, Fullscreen & PNG)',
    metaDescription:
      'A rich, plain purple background (#7C3AED). Use it fullscreen as mood lighting or download a purple wallpaper PNG in 1080p, 2K, 4K or phone size.',
    category: 'solid',
    categoryLabel: 'Solid Color',
    shortDescription: 'Rich violet purple (#7C3AED) for bold wallpapers, mood lighting and creative designs.',
    dominantColorName: 'Royal Violet',
    primaryHex: '#7C3AED',
    type: 'solid',
    cssBackground: '#7C3AED',
    isDark: true,
    tags: ['purple', 'violet', 'plain-purple', 'mood-lighting', 'wallpaper'],
    about: {
      overview:
        'A flat, saturated violet (hex #7C3AED, RGB 124, 58, 237). It is strong enough to set a mood on its own and works as a clean base for text and graphics.',
      colorCharacteristics:
        'Mostly blue with a strong red component, so it glows cool and rich on screen and makes white text stand out.',
      aestheticTone: 'Creative, dreamy and a little luxurious.',
    },
    fullscreenGuide: {
      instruction: 'Go fullscreen in a dim room for purple mood lighting behind a desk, stream or gaming setup.',
      bestUsedFor: 'Gaming and streaming backdrops, mood lighting, posters and wallpapers.',
      inspectionTip: 'Purple combines red and blue subpixels; a greenish cast in one area hints at uneven backlighting.',
    },
    useCases: [
      {
        title: 'Streaming and gaming ambience',
        description: 'A purple screen behind you adds color to a webcam shot without extra lights.',
      },
      {
        title: 'Bold wallpaper',
        description: 'Plain purple keeps a desktop or phone tidy while still feeling personal.',
      },
      {
        title: 'Posters and thumbnails',
        description: 'White or yellow text on purple is easy to read at a glance.',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose purple when you want a bold color that is less aggressive than red.',
      contrastAndReadability: 'White, pale yellow and light pink text all read clearly.',
      alternativeConsiderations: 'For a gentler, pastel version use the Aesthetic or Pastel backgrounds; for darkness use the Dark Background.',
    },
    contextualLinks: [
      { label: 'Purple Screen', href: '/purple-screen/', description: 'Fullscreen purple with color controls.' },
      { label: 'Pink Background', href: '/backgrounds/pink-background/', description: 'A lighter, warmer neighbour.' },
      { label: 'Neon Background', href: '/backgrounds/neon-background/', description: 'Cyan and magenta glow on black.' },
    ],
    faqs: [
      {
        question: 'What is the hex code of this purple?',
        answer: 'It is #7C3AED (RGB 124, 58, 237).',
      },
      {
        question: 'Can I use it as room lighting?',
        answer:
          'Yes. In fullscreen at high brightness a monitor or TV gives a soft purple wash. A screen is dimmer than a real light, so it works best in a dark room.',
      },
    ],
    relatedTools: [
      { name: 'Purple Screen', path: '/purple-screen/', description: 'Fullscreen purple light.' },
      { name: 'Color Cycle', path: '/color-cycle/', description: 'Smoothly cycle through colors.' },
    ],
  },

  // Dark Background
  {
    slug: 'dark-background',
    aliases: ['navy-background'],
    title: 'Dark Background',
    h1: 'Dark Background (#121212) — Plain Dark Gray Wallpaper & PNG',
    metaTitle: 'Dark Background (Plain Dark Gray #121212, Fullscreen & PNG)',
    metaDescription:
      'A plain dark background (#121212), the soft dark gray used by dark-mode apps. Easy on the eyes at night; download a dark wallpaper PNG up to 8K.',
    category: 'dark-oled',
    categoryLabel: 'Dark & OLED',
    shortDescription: 'Soft dark gray (#121212), the dark-mode shade that is gentler than pure black.',
    dominantColorName: 'Dark Mode Gray',
    primaryHex: '#121212',
    type: 'solid',
    cssBackground: '#121212',
    isDark: true,
    tags: ['dark', 'dark-mode', 'dark-gray', 'night', 'wallpaper', 'oled'],
    about: {
      overview:
        'A flat dark gray (hex #121212, RGB 18, 18, 18), the shade many dark-mode designs use as their base surface. It is dark enough for night use but keeps a little separation from pure black.',
      colorCharacteristics:
        'Because it is not fully black, shadows, borders and lighter gray panels on top of it stay visible, and white text does not "bloom" as harshly as it can on pure black.',
      aestheticTone: 'Quiet, modern and focused.',
    },
    fullscreenGuide: {
      instruction: 'Go fullscreen to dim a second monitor at night without turning it off, or as a calm backdrop behind floating windows.',
      bestUsedFor: 'Night-time wallpapers, dark-mode design mockups and low-glare backdrops.',
      inspectionTip: 'On OLED screens a near-black gray can show faint vertical bands; on LCDs it reveals backlight bleed at the edges.',
    },
    useCases: [
      {
        title: 'Low-glare night wallpaper',
        description: 'Keeps your desktop readable in a dark room without a bright glow.',
      },
      {
        title: 'Dark-mode design base',
        description: 'Use it as the background surface when mocking up dark interfaces.',
      },
      {
        title: 'Backlight bleed check',
        description: 'A dark field makes light leaking from the edges of an LCD easy to see.',
        linkText: 'Backlight bleed guide',
        linkHref: '/screen-problems/backlight-bleed/',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose dark gray for comfortable night use; choose pure black when you want OLED pixels fully off.',
      contrastAndReadability: 'Off-white and light gray text read comfortably without harsh contrast.',
      alternativeConsiderations: 'For true 0% black use the Black Background.',
    },
    contextualLinks: [
      { label: 'Black Background', href: '/backgrounds/black-background/', description: 'True #000000 black.' },
      { label: 'OLED Gray Test', href: '/oled-gray-test/', description: 'Check near-black uniformity.' },
      { label: 'Black Screen', href: '/black-screen/', description: 'Fullscreen black with controls.' },
    ],
    faqs: [
      {
        question: 'Why #121212 instead of pure black?',
        answer:
          'Pure black next to white text creates very high contrast that some people find tiring, and it hides shadows. A soft dark gray is calmer and keeps depth visible.',
      },
      {
        question: 'Does a dark background save battery?',
        answer:
          'On OLED screens, yes: darker pixels use less power. On LCD screens the backlight stays on, so the saving is small.',
      },
    ],
    relatedTools: [
      { name: 'Black Screen', path: '/black-screen/', description: 'Pure black fullscreen.' },
      { name: 'OLED Gray Test', path: '/oled-gray-test/', description: 'Near-black banding test.' },
    ],
  },

  // Gold Background
  {
    slug: 'gold-background',
    title: 'Gold Background',
    h1: 'Gold Background — Metallic Gold Gradient Wallpaper & PNG',
    metaTitle: 'Gold Background (Metallic Gold Gradient, Fullscreen & PNG)',
    metaDescription:
      'A shiny metallic gold background with a bright highlight across the middle. Use it fullscreen or download a gold wallpaper PNG in 1080p, 2K, 4K or phone size.',
    category: 'gradient',
    categoryLabel: 'Gradients',
    shortDescription: 'Metallic gold gradient with a bright sheen, for luxury designs, invitations and celebrations.',
    dominantColorName: 'Metallic Gold',
    primaryHex: '#B8860B',
    accentHex: '#F6D77A',
    secondaryHex: '#8A6512',
    type: 'gradient',
    cssBackground: 'linear-gradient(135deg, #B8860B 0%, #F6D77A 50%, #8A6512 100%)',
    isDark: false,
    tags: ['gold', 'metallic', 'luxury', 'celebration', 'gradient', 'wallpaper'],
    about: {
      overview:
        'Gold cannot be shown as one flat color, because what makes metal look metallic is the change from shadow to highlight. This background runs from deep goldenrod (#B8860B) through a pale gold sheen (#F6D77A) to antique gold (#8A6512) on a diagonal.',
      colorCharacteristics:
        'Warm yellow and orange tones with a bright band in the middle that reads as light catching a polished surface.',
      aestheticTone: 'Luxurious, festive and premium.',
    },
    fullscreenGuide: {
      instruction: 'Go fullscreen on a TV or monitor as a warm, festive backdrop for parties, award nights or product displays.',
      bestUsedFor: 'Invitations, certificates, celebration slides and premium product graphics.',
      inspectionTip: 'Look for steps in the gradient; visible bands mean the display or file is using limited color depth.',
    },
    useCases: [
      {
        title: 'Invitations and certificates',
        description: 'Gold behind dark text instantly looks formal and celebratory.',
      },
      {
        title: 'Event and party screens',
        description: 'A warm gold glow suits weddings, anniversaries and New Year displays.',
      },
      {
        title: 'Gradient banding check',
        description: 'Smooth gradients reveal banding on 6-bit and 8-bit panels.',
        linkText: 'Color banding guide',
        linkHref: '/screen-problems/color-banding/',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose gold when the design should feel special, formal or celebratory.',
      contrastAndReadability: 'Dark brown or black text reads best; white text only works on the darker corners.',
      alternativeConsiderations: 'For a softer warm tone use the Beige Background; for a flat bright color use Yellow.',
    },
    contextualLinks: [
      { label: 'Yellow Background', href: '/backgrounds/yellow-background/', description: 'Flat bright yellow.' },
      { label: 'Beige Background', href: '/backgrounds/beige-background/', description: 'Soft warm neutral.' },
      { label: 'Gradient Background', href: '/backgrounds/gradient-background/', description: 'Indigo, magenta and amber.' },
    ],
    faqs: [
      {
        question: 'What colors make up this gold?',
        answer: 'A diagonal gradient from #B8860B through #F6D77A to #8A6512.',
      },
      {
        question: 'Will it look metallic when printed?',
        answer:
          'It will look like a gold illustration. Real metallic shine in print needs special foil or metallic ink, which no image file can reproduce.',
      },
    ],
    relatedTools: [
      { name: 'Gradient Screen', path: '/gradient-screen/', description: 'Make your own fullscreen gradient.' },
      { name: 'Yellow Screen', path: '/yellow-screen/', description: 'Fullscreen yellow.' },
    ],
  },

  // Aesthetic Background
  {
    slug: 'aesthetic-background',
    title: 'Aesthetic Background',
    h1: 'Aesthetic Background — Soft Peach, Pink & Blue Gradient',
    metaTitle: 'Aesthetic Background (Soft Gradient Wallpaper, Fullscreen & PNG)',
    metaDescription:
      'A dreamy aesthetic background that fades from peach to pink to periwinkle blue. Use it fullscreen or download an aesthetic wallpaper PNG for phone or desktop.',
    category: 'minimal',
    categoryLabel: 'Aesthetic & Minimal',
    shortDescription: 'Dreamy peach-to-pink-to-blue gradient for aesthetic wallpapers, stories and mood boards.',
    dominantColorName: 'Peach, Rose & Periwinkle',
    primaryHex: '#FBD3C1',
    accentHex: '#F5B5D6',
    secondaryHex: '#A9C1F2',
    type: 'gradient',
    cssBackground: 'linear-gradient(135deg, #FBD3C1 0%, #F5B5D6 50%, #A9C1F2 100%)',
    isDark: false,
    tags: ['aesthetic', 'soft', 'dreamy', 'gradient', 'wallpaper', 'instagram'],
    about: {
      overview:
        'A soft sky-at-dusk gradient: warm peach (#FBD3C1) blends into rose pink (#F5B5D6) and settles into periwinkle blue (#A9C1F2). It is the low-contrast, washed-out look popular for phone wallpapers and social stories.',
      colorCharacteristics: 'All three colors are light and gently saturated, so the image feels bright without being glaring.',
      aestheticTone: 'Dreamy, calm and romantic.',
    },
    fullscreenGuide: {
      instruction: 'Go fullscreen as a soft backdrop for photos, or as a gentle light behind a webcam.',
      bestUsedFor: 'Phone wallpapers, story and post backgrounds, mood boards and planners.',
      inspectionTip: 'Pale gradients are a good test for banding; smooth panels show no visible steps.',
    },
    useCases: [
      {
        title: 'Phone and tablet wallpaper',
        description: 'Download at your exact screen size for a clean aesthetic lock screen.',
      },
      {
        title: 'Story and post backgrounds',
        description: 'Light colors keep dark text and stickers easy to read.',
      },
      {
        title: 'Soft photo backdrop',
        description: 'Show it fullscreen behind small products or flat lays for a pastel glow.',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose this when you want a pretty, calm background that does not compete with what is on top.',
      contrastAndReadability: 'Dark gray, navy or deep plum text reads best. Avoid white text.',
      alternativeConsiderations: 'For more color use the Gradient Background; for a cleaner single tone use Beige or Pink.',
    },
    contextualLinks: [
      { label: 'Pastel Background', href: '/backgrounds/pastel-background/', description: 'Mint, lavender and peach.' },
      { label: 'Pink Background', href: '/backgrounds/pink-background/', description: 'Plain bright pink.' },
      { label: 'Gradient Screen', href: '/gradient-screen/', description: 'Build your own gradient.' },
    ],
    faqs: [
      {
        question: 'What does "aesthetic background" mean?',
        answer:
          'It usually means a soft, pleasing image with gentle colors and little detail, used to make a phone, desktop or post look calm and coordinated.',
      },
      {
        question: 'Which colors are used?',
        answer: 'Peach #FBD3C1, rose #F5B5D6 and periwinkle #A9C1F2 in a diagonal gradient.',
      },
    ],
    relatedTools: [
      { name: 'Gradient Screen', path: '/gradient-screen/', description: 'Fullscreen custom gradients.' },
      { name: 'Pink Screen', path: '/pink-screen/', description: 'Fullscreen pink.' },
    ],
  },

  // Beige Background
  {
    slug: 'beige-background',
    title: 'Beige Background',
    h1: 'Beige Background (#EADBC8) — Plain Beige Wallpaper & PNG',
    metaTitle: 'Beige Background (Plain Beige #EADBC8, Fullscreen & PNG)',
    metaDescription:
      'A plain, warm beige background (#EADBC8). Softer than white for reading and video calls; download a beige wallpaper PNG in 1080p, 2K, 4K or phone size.',
    category: 'minimal',
    categoryLabel: 'Aesthetic & Minimal',
    shortDescription: 'Warm, plain beige (#EADBC8) that is softer than white for reading, calls and minimalist wallpapers.',
    dominantColorName: 'Sand Beige',
    primaryHex: '#EADBC8',
    type: 'solid',
    cssBackground: '#EADBC8',
    isDark: false,
    tags: ['beige', 'neutral', 'cream', 'minimal', 'warm', 'wallpaper'],
    about: {
      overview:
        'A flat sandy beige (hex #EADBC8, RGB 234, 219, 200). It has the brightness of paper with a warm tint, so it feels calmer than pure white.',
      colorCharacteristics:
        'Blue is lowered relative to red and green, which gives the warm, paper-like tone and cuts some of the cool glare of a white screen.',
      aestheticTone: 'Natural, cosy and understated.',
    },
    fullscreenGuide: {
      instruction: 'Go fullscreen behind a reading window or use it as a warm fill light for video calls.',
      bestUsedFor: 'Minimal wallpapers, reading and writing backdrops, and neutral design bases.',
      inspectionTip: 'Compare it with a white screen side by side; the difference shows how warm or cool your display is set.',
    },
    useCases: [
      {
        title: 'Comfortable reading backdrop',
        description: 'A warm, paper-like tone behind documents can feel easier than bright white.',
        linkText: 'Monitor settings for eye strain',
        linkHref: '/guides/best-monitor-settings-for-eye-strain/',
      },
      {
        title: 'Warm video-call light',
        description: 'Gives a softer, more natural skin tone than a cool white screen.',
      },
      {
        title: 'Minimalist wallpaper',
        description: 'A neutral beige desktop keeps the focus on your work.',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose beige when white feels too harsh but you still want a light background.',
      contrastAndReadability: 'Black, charcoal and dark brown text read very well.',
      alternativeConsiderations: 'For a crisp neutral use the White Background; for gentle color use the Pastel Background.',
    },
    contextualLinks: [
      { label: 'White Background', href: '/backgrounds/white-background/', description: 'Pure #FFFFFF white.' },
      { label: 'Gold Background', href: '/backgrounds/gold-background/', description: 'Warm metallic gradient.' },
      { label: 'Aesthetic Background', href: '/backgrounds/aesthetic-background/', description: 'Soft peach, pink and blue.' },
    ],
    faqs: [
      {
        question: 'What is the hex code of this beige?',
        answer: 'It is #EADBC8 (RGB 234, 219, 200). The web color named "beige" (#F5F5DC) is paler and slightly greenish.',
      },
      {
        question: 'Is beige better for my eyes than white?',
        answer:
          'Many people find a warm, slightly darker background more comfortable for long reading, but brightness and room lighting matter more than the exact color.',
      },
    ],
    relatedTools: [
      { name: 'White Screen', path: '/', description: 'Fullscreen white.' },
      { name: 'Zoom Lighting', path: '/zoom-lighting/', description: 'Warm or cool fill light for calls.' },
    ],
  },

  // Pastel Background
  {
    slug: 'pastel-background',
    title: 'Pastel Background',
    h1: 'Pastel Background — Mint, Lavender & Peach Gradient',
    metaTitle: 'Pastel Background (Mint, Lavender & Peach, Fullscreen & PNG)',
    metaDescription:
      'A soft pastel background blending mint green, lavender and peach. Use it fullscreen or download a pastel wallpaper PNG in 1080p, 2K, 4K or phone size.',
    category: 'gradient',
    categoryLabel: 'Gradients',
    shortDescription: 'Light mint, lavender and peach pastels blended into one soft gradient.',
    dominantColorName: 'Mint, Lavender & Peach',
    primaryHex: '#B8F0DC',
    accentHex: '#D5CCF5',
    secondaryHex: '#FFD9C2',
    type: 'gradient',
    cssBackground: 'linear-gradient(135deg, #B8F0DC 0%, #D5CCF5 50%, #FFD9C2 100%)',
    isDark: false,
    tags: ['pastel', 'mint', 'lavender', 'peach', 'soft', 'gradient', 'wallpaper'],
    about: {
      overview:
        'Pastels are colors mixed with a lot of white. This background blends three of the most popular: mint (#B8F0DC), lavender (#D5CCF5) and peach (#FFD9C2), on a gentle diagonal.',
      colorCharacteristics: 'High brightness and low saturation keep it light and airy, with cool tones on one side and warm on the other.',
      aestheticTone: 'Fresh, gentle and cheerful.',
    },
    fullscreenGuide: {
      instruction: 'Go fullscreen as a soft, colorful light for photos and calls, or as a calm backdrop in a classroom or nursery.',
      bestUsedFor: 'Wallpapers, planners, children\'s materials, baby showers and spring designs.',
      inspectionTip: 'Pale gradients show banding easily; smooth panels show no visible steps between colors.',
    },
    useCases: [
      {
        title: 'Planner and study wallpaper',
        description: 'Soft colors keep a desktop pleasant without distracting from notes.',
      },
      {
        title: 'Party and shower designs',
        description: 'A neutral-friendly pastel mix works for invitations and welcome screens.',
      },
      {
        title: 'Classroom display',
        description: 'A gentle full-screen color for TVs and projectors between lessons.',
      },
    ],
    selectionAdvice: {
      whenToChoose: 'Choose pastel for a light, friendly look with more color than beige.',
      contrastAndReadability: 'Dark gray or navy text reads well on all three tones.',
      alternativeConsiderations: 'For warmer, pinker tones use the Aesthetic Background; for one flat color use Pink or Green.',
    },
    contextualLinks: [
      { label: 'Aesthetic Background', href: '/backgrounds/aesthetic-background/', description: 'Peach, rose and periwinkle.' },
      { label: 'Green Background', href: '/backgrounds/green-background/', description: 'Plain leaf green.' },
      { label: 'Purple Background', href: '/backgrounds/purple-background/', description: 'Rich plain violet.' },
    ],
    faqs: [
      {
        question: 'What makes a color "pastel"?',
        answer: 'A pastel is a pale, softened color, high in brightness and low in saturation, as if mixed with plenty of white.',
      },
      {
        question: 'Which colors are in this background?',
        answer: 'Mint #B8F0DC, lavender #D5CCF5 and peach #FFD9C2.',
      },
    ],
    relatedTools: [
      { name: 'Gradient Screen', path: '/gradient-screen/', description: 'Fullscreen custom gradients.' },
      { name: 'Color Cycle', path: '/color-cycle/', description: 'Slowly cycle through colors.' },
    ],
  },
] as const

export function getBackgroundBySlug(slug: string): BackgroundItem | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '').replace(/^backgrounds\//, '').toLowerCase()
  return BACKGROUND_ITEMS.find((b) => b.slug === normalized || (b.aliases && b.aliases.includes(normalized)))
}
