import { SCREEN_COLORS } from '@/lib/screen-colors'
import { colorPages } from '@/lib/color-pages'
import type { ToolContent } from './types'

function colorContent(id: string): ToolContent {
  const color = SCREEN_COLORS.find((item) => item.id === id)!
  const page = colorPages[id]
  const lower = color.name.toLowerCase()
  return {
    title: `${color.name} Screen – Free Fullscreen ${color.name} Screen Tool`,
    intro: page.intro,
    steps: [
      `${color.name} (${color.hex}) is selected by default. You can switch to any other preset or pick a custom hex color.`,
      'Click the Fullscreen button or press F to fill your whole display.',
      'Use the brightness slider to dim the color, and the arrow or number keys to switch colors in fullscreen.',
      'Press Esc, double-click, or tap the close button to exit. Download a matching image from the panel below the tool if you need one.',
    ],
    useCases: page.uses.slice(0, 4),
    faqs: [
      {
        question: `What is the hex code of this ${lower} screen?`,
        answer: `The ${lower} screen uses ${color.hex}. If you need a slightly different shade, enter any hex value in the custom color field.`,
      },
      {
        question: `How do I make my whole screen ${lower}?`,
        answer: `Press F or click Fullscreen. Your browser hides its toolbars and shows only solid ${lower}. On iPhone Safari, which has no fullscreen API, the color fills the browser window instead.`,
      },
      {
        question: 'Will my screen go to sleep while this is open?',
        answer:
          'On browsers that support the Screen Wake Lock API, the tool keeps your display awake while in fullscreen. Otherwise, adjust your device’s sleep settings.',
      },
      {
        question: `Can I download a ${lower} screen image?`,
        answer: `Yes. Open the download panel below the tool, pick a resolution such as 1920×1080 or 4K, and save a ${lower} PNG or JPG.`,
      },
    ],
  }
}

export const screenTestContent: Record<string, ToolContent> = {
  'white-screen': {
    ...colorContent('white'),
    title: 'White Screen – Free Fullscreen White Screen Tool',
    faqs: [
      {
        question: 'What is a white screen tool?',
        answer:
          'A white screen tool fills your entire display with solid white. It is commonly used as a light source, for cleaning monitors, testing for dead pixels and tracing drawings.',
      },
      {
        question: 'How do I exit fullscreen mode?',
        answer:
          'Press Esc, double-click anywhere on the screen, or move your mouse or tap the screen to reveal the close button.',
      },
      {
        question: 'Can I use a color other than white?',
        answer:
          'Yes. Choose from twelve preset colors, or use the custom color picker to enter any hex code. Each color also has its own page you can bookmark.',
      },
      {
        question: 'Is a white screen bad for my display?',
        answer:
          'No. Showing a solid color is normal use. On OLED screens, avoid leaving any static image at maximum brightness for many hours.',
      },
    ],
  },
  'black-screen': colorContent('black'),
  'red-screen': colorContent('red'),
  'green-screen': colorContent('green'),
  'blue-screen': colorContent('blue'),
  'yellow-screen': colorContent('yellow'),
  'orange-screen': colorContent('orange'),
  'pink-screen': colorContent('pink'),
  'purple-screen': colorContent('purple'),
  'cyan-screen': colorContent('cyan'),
  'magenta-screen': colorContent('magenta'),
  'gray-screen': colorContent('gray'),


  'white-screen-image': {
    title: 'White Screen Image – Download Any Size PNG or JPG',
    intro:
      'Create a solid white (or any color) image at the exact resolution you need, then download it as a PNG or JPG. Everything is generated locally in your browser.',
    steps: [
      'Pick a color preset or enter a custom hex value.',
      'Choose a resolution preset such as 1920×1080, 4K or a phone size, or type a custom width and height.',
      'Select PNG for lossless quality or JPG for smaller files.',
      'Click Download. The image is created on your device and saved immediately.',
    ],
    useCases: [
      { title: 'Blank wallpapers', description: 'Set a pure white or black wallpaper for a clean, minimal desktop or phone.' },
      { title: 'Design placeholders', description: 'Drop exact-size blank images into layouts, slides or video timelines.' },
      { title: 'Video editing', description: 'Use solid frames as fades, title backgrounds or color mattes.' },
      { title: 'Display testing', description: 'Show a full-resolution solid image on TVs or projectors from a USB stick.' },
    ],
    faqs: [
      {
        question: 'Is the image uploaded anywhere?',
        answer: 'No. The image is drawn on a canvas in your browser and saved directly to your device.',
      },
      {
        question: 'What is the maximum size?',
        answer:
          'You can create images up to 8192×8192 pixels, which covers 8K displays. Very large images may take a moment on older phones.',
      },
      {
        question: 'Should I choose PNG or JPG?',
        answer:
          'PNG is lossless and keeps colors exact, and solid-color PNGs are already tiny. JPG is widely compatible but may shift colors very slightly.',
      },
    ],
  },

  'dead-pixel-test': {
    title: 'Dead Pixel Test – Check Your Screen for Stuck Pixels',
    intro:
      'Step through full-screen black, white, red, green, blue and more to inspect your display for dead, stuck or hot pixels. Look closely at each color — this is a visual check, and no software can detect pixels for you.',
    steps: [
      'Clean your screen first so dust is not mistaken for a bad pixel.',
      'Press F for fullscreen, then use the arrow keys, click the screen, or enable auto-cycle to move through colors.',
      'Look carefully across the whole panel on each color. A magnifying glass or phone camera zoom helps.',
      'Dark dots on bright colors suggest dead pixels; bright or colored dots on black suggest stuck or hot pixels.',
    ],
    useCases: [
      { title: 'New monitor check', description: 'Inspect a new monitor, laptop or TV within the return window.' },
      { title: 'Used device purchase', description: 'Check a second-hand phone or laptop before you hand over money.' },
      { title: 'Warranty evidence', description: 'Photograph a defect on a solid color to support a warranty claim.' },
      { title: 'Routine inspection', description: 'Periodically confirm that no new defects have appeared.' },
    ],
    faqs: [
      {
        question: 'What is the difference between a dead and a stuck pixel?',
        answer:
          'A dead pixel stays dark on every color. A stuck pixel stays lit in one color, like a red dot on black. A hot pixel stays white. Stuck pixels sometimes recover; dead pixels usually do not.',
      },
      {
        question: 'Can this tool fix dead pixels?',
        answer:
          'No. This test only helps you see defects. Rapid color cycling is sometimes suggested for stuck pixels, but results are not guaranteed and true dead pixels are hardware faults.',
      },
      {
        question: 'How do I report a dead pixel?',
        answer:
          'Take a clear photo of the defect on the solid color where it is most visible, note its location, and contact the manufacturer or retailer with your proof of purchase.',
      },
    ],
  },

  'screen-uniformity-test': {
    title: 'Screen Uniformity Test – Check Clouding & Backlight Bleed',
    intro:
      'Display even gray fields from dark to light, with an optional grid overlay, to reveal clouding, vignetting, dirty screen effect and backlight bleed. Best done in a dim room.',
    steps: [
      'Dim the room lights and let your display warm up for a few minutes.',
      'Press F for fullscreen and start with the darkest gray to look for bleed at the edges.',
      'Step through lighter grays and look for blotches, bands or darker corners.',
      'Turn on the grid overlay to compare specific zones of the screen.',
    ],
    useCases: [
      { title: 'Backlight bleed', description: 'Near-black fields reveal light leaking from the edges of LCD panels.' },
      { title: 'Dirty screen effect', description: 'Mid-grays show vertical bands or blotches on TVs during panning shots.' },
      { title: 'Vignetting', description: 'Compare corners against the center to spot darker edges.' },
      { title: 'Panel lottery check', description: 'Compare two units of the same model before keeping one.' },
    ],
    faqs: [
      {
        question: 'Why does my screen look uneven on gray?',
        answer:
          'No panel is perfectly uniform. Small brightness differences are normal; large blotches, strong bands or bright corners may be worth reporting if your device is new.',
      },
      {
        question: 'Should I test in a dark room?',
        answer: 'Yes. Ambient light hides subtle bleed and clouding, so a dim room makes the test far more revealing.',
      },
      {
        question: 'Can the camera show what I see?',
        answer:
          'Phone cameras often exaggerate bleed and clouding. Judge with your own eyes and use photos only as a rough reference.',
      },
    ],
  },

  'monitor-test': {
    title: 'Monitor Test – Free Online Display Test Patterns',
    intro:
      'A complete set of display test patterns in one place: gradients for banding, grids for geometry, a gamma check, fine lines for sharpness, checkerboards and color bars.',
    steps: [
      'Set your monitor to its native resolution and disable browser zoom (Ctrl/Cmd + 0).',
      'Press F for fullscreen, then use the pattern buttons or arrow keys to switch patterns.',
      'Check gradients for banding, grids for straight lines, and fine patterns for sharpness and moiré.',
      'Adjust your monitor’s brightness, contrast and sharpness settings while viewing each pattern.',
    ],
    useCases: [
      { title: 'Initial setup', description: 'Tune brightness, contrast and sharpness after unboxing a monitor.' },
      { title: 'Banding check', description: 'Smooth gradients reveal posterization from low bit depth or processing.' },
      { title: 'Geometry & scaling', description: 'Grids expose stretched, cropped or blurry scaling.' },
      { title: 'Cable & input check', description: 'Fine patterns show if a cable or adapter is softening the image.' },
    ],
    faqs: [
      {
        question: 'Is an online monitor test as good as a calibrator?',
        answer:
          'No. Patterns help you judge and adjust by eye, but accurate color calibration requires a hardware colorimeter.',
      },
      {
        question: 'Why do fine patterns flicker or show moiré?',
        answer:
          'Browser zoom, OS display scaling or a non-native resolution can resample 1-pixel patterns. Use 100% zoom and native resolution for an accurate view.',
      },
      {
        question: 'What should the gamma pattern look like?',
        answer:
          'From a distance, the striped and solid areas should blend to a similar brightness. A large mismatch suggests your gamma differs from the standard 2.2.',
      },
    ],
  },

  'oled-gray-test': {
    title: 'OLED Gray Test – Near-Black Uniformity & Banding',
    intro:
      'Show very dark gray levels, from 1% to 20%, that are hard for OLED panels to render evenly. Use them to spot near-black banding, blotches and flicker in a dark room.',
    steps: [
      'Turn off the lights and set your display to its normal viewing brightness.',
      'Press F for fullscreen and start with the 5% step.',
      'Step down to 1–3% to see where the panel starts crushing or blotching.',
      'Try the gray ramp to look for visible steps between neighboring shades.',
    ],
    useCases: [
      { title: 'Near-black uniformity', description: 'Very dark grays expose blotches and vertical lines on OLED panels.' },
      { title: 'Black crush check', description: 'See whether the lowest shades are visible or merged into black.' },
      { title: 'Low-brightness flicker', description: 'Some panels flicker at very low gray levels and brightness.' },
      { title: 'Comparing units', description: 'Compare two phones or TVs side-by-side at the same settings.' },
    ],
    faqs: [
      {
        question: 'Why do near-black grays look blotchy on OLED?',
        answer:
          'Each OLED pixel is driven individually, and tiny variations become visible at very low output. Some unevenness is normal across all OLED panels.',
      },
      {
        question: 'Is this test useful for LCD screens?',
        answer:
          'Yes, but LCDs show near-black problems mostly as backlight bleed or clouding. Use the uniformity test for those.',
      },
      {
        question: 'Why can’t I see the 1% step?',
        answer:
          'Many displays and picture modes crush the very darkest shades. Try raising brightness slightly or using a different picture mode.',
      },
    ],
  },

  'oled-burn-in-test': {
    title: 'OLED Burn-In Test – Check for Image Retention',
    intro:
      'Show solid full-screen colors to help you see image retention or permanent burn-in from static logos, taskbars or HUDs. An optional auto-cycle mode moves through colors continuously.',
    steps: [
      'Press F for fullscreen and start with a mid gray, then try red, green, blue and white.',
      'Look for faint shapes such as taskbars, logos, keyboards or channel badges.',
      'Use auto-cycle to rotate colors continuously if you are checking for temporary retention.',
      'If shapes fade after a few minutes they were likely temporary retention rather than burn-in.',
    ],
    useCases: [
      { title: 'Used OLED purchase', description: 'Check a second-hand phone or TV for ghost images before buying.' },
      { title: 'Gaming HUD check', description: 'Look for health bars or minimaps after long sessions.' },
      { title: 'Retention vs burn-in', description: 'Help tell temporary image retention from permanent burn-in.' },
      { title: 'Warranty claims', description: 'Photograph visible burn-in on a solid color for support.' },
    ],
    faqs: [
      {
        question: 'Can this tool fix burn-in?',
        answer:
          'No. Permanent burn-in is uneven pixel wear and cannot be reversed by a website. Use your display’s built-in pixel refresh feature and follow the manufacturer’s guidance.',
      },
      {
        question: 'What is the difference between image retention and burn-in?',
        answer:
          'Image retention is temporary and fades after showing other content. Burn-in is permanent and remains visible on solid colors over time.',
      },
      {
        question: 'Which color shows burn-in best?',
        answer:
          'Mid gray and solid red usually reveal burn-in most clearly, but check every color because wear can differ by subpixel.',
      },
    ],
  },

  'screen-color-test': {
    title: 'Screen Color Test – Color Bars, RGB Ramps & Saturation',
    intro:
      'Check how your display renders color with full color bars, red, green and blue ramps, a hue spectrum and saturation steps. Great for spotting tints, clipping and banding.',
    steps: [
      'Use your display’s default or calibrated picture mode.',
      'Press F for fullscreen and switch patterns with the buttons or arrow keys.',
      'On the ramps, look for smooth transitions without visible steps or clipping at the bright end.',
      'Compare the same pattern on another screen to judge relative accuracy.',
    ],
    useCases: [
      { title: 'Tint detection', description: 'Gray and white areas should look neutral, without a pink or green cast.' },
      { title: 'Clipping check', description: 'See whether the brightest steps of each channel stay distinguishable.' },
      { title: 'Banding check', description: 'Ramps reveal posterization from 6-bit panels or heavy processing.' },
      { title: 'Side-by-side comparison', description: 'Compare a laptop and an external monitor for color consistency.' },
    ],
    faqs: [
      {
        question: 'Can I calibrate my monitor with this?',
        answer:
          'You can make rough adjustments by eye, but true calibration needs a hardware colorimeter and calibration software.',
      },
      {
        question: 'Why do my color ramps show steps?',
        answer:
          'Visible steps usually mean the panel or its processing has limited bit depth. Night modes and some picture presets can also cause banding.',
      },
      {
        question: 'Why do colors look different on my phone and monitor?',
        answer:
          'Displays differ in color gamut, white point and processing. Some also apply automatic color adjustment based on ambient light.',
      },
    ],
  },

  'screen-resolution-test': {
    title: 'Screen Resolution Test – What Is My Screen Resolution?',
    intro:
      'Instantly see your screen resolution, browser viewport, device pixel ratio, color depth and orientation, plus a 1-pixel pattern to confirm the browser is rendering sharply.',
    steps: [
      'Open the page on the screen you want to check — the readings update live.',
      'Resize the window or rotate your device to watch the viewport values change.',
      'Press F for fullscreen to see the full viewport size.',
      'Check the 1-pixel pattern: at native resolution and 100% zoom it should look like even, fine gray.',
    ],
    useCases: [
      { title: 'Know your resolution', description: 'Quickly find the resolution to choose wallpapers or game settings.' },
      { title: 'Responsive design', description: 'Developers can check viewport and pixel ratio on real devices.' },
      { title: 'Scaling troubleshooting', description: 'Confirm whether OS scaling is changing the effective resolution.' },
      { title: 'Support requests', description: 'Share accurate display details when reporting a website bug.' },
    ],
    faqs: [
      {
        question: 'Why is the screen size smaller than my monitor’s resolution?',
        answer:
          'Browsers report sizes in CSS pixels. With 150% scaling, a 3840-pixel-wide display reports 2560. Multiply by the device pixel ratio to get physical pixels.',
      },
      {
        question: 'What is device pixel ratio?',
        answer:
          'It is the number of physical pixels per CSS pixel. A value of 2 means a high-density (Retina-style) display.',
      },
      {
        question: 'Does browser zoom change the values?',
        answer: 'Yes. Zooming changes the viewport size and pixel ratio. Reset zoom to 100% for accurate readings.',
      },
    ],
  },
}
