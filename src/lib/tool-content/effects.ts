import type { ToolContent } from './types'

const FULLSCREEN_STEP = 'Press F or click Fullscreen to fill your display, and press Esc to exit.'

export const effectsContent: Record<string, ToolContent> = {
  'static-screen': {
    title: 'Static Screen – Animated TV Static Noise Effect',
    intro:
      'Recreate the flickering black-and-white “snow” of an untuned analog TV. Adjust grain, speed and color, and optionally add soft static sound.',
    steps: [
      'The static starts playing immediately in the preview.',
      'Use the grain, speed and contrast sliders to tune the look, or switch to color static.',
      'Turn on sound for a gentle hiss — it only plays after you click, and starts quiet.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Retro video backdrops', description: 'Use static as a transition or background in videos and streams.' },
      { title: 'Halloween & props', description: 'Put a “haunted TV” on a spare screen for parties or escape rooms.' },
      { title: 'Film and theater', description: 'Show convincing TV static on set without a real broadcast signal.' },
      { title: 'Ambient focus', description: 'Some people find gentle static helpful for focus or sleep.' },
    ],
    faqs: [
      {
        question: 'Why do analog TVs show static?',
        answer:
          'Without a station signal, the tuner amplifies random electrical noise, including a small amount of cosmic background radiation, which appears as flickering dots.',
      },
      {
        question: 'Is the static flashing safe?',
        answer:
          'Rapid flicker can be uncomfortable for some people and may trigger photosensitive epilepsy. Lower the speed or enable reduced motion, and stop if you feel unwell.',
      },
      {
        question: 'Does it play sound automatically?',
        answer: 'No. Sound is off by default and only starts after you turn it on.',
      },
    ],
  },
  'no-signal-screen': {
    title: 'No Signal Screen – Fake TV “No Signal” Display',
    intro:
      'Show a realistic “No Signal” message with SMPTE color bars or a bouncing input badge, just like a TV or monitor with nothing plugged in.',
    steps: [
      'Choose a style: classic color bars, a black screen with a bouncing message, or a blue input screen.',
      'Edit the message and input name, such as “HDMI 1”.',
      'Optionally enable the 1 kHz test tone — it starts muted and only plays after you click.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Film and photo props', description: 'Dress a set with a believable unplugged TV.' },
      { title: 'Stream intermissions', description: 'Use a no-signal card while you take a break on stream.' },
      { title: 'Retro aesthetic', description: 'Add a nostalgic broadcast vibe to videos or presentations.' },
      { title: 'Harmless pranks', description: 'Make a screen look disconnected — always reveal it afterwards.' },
    ],
    faqs: [
      {
        question: 'What are the colored bars called?',
        answer:
          'They are SMPTE color bars, a broadcast test pattern used to calibrate color and brightness on televisions and video equipment.',
      },
      {
        question: 'Will this make my monitor actually lose signal?',
        answer: 'No. It is a webpage that only looks like a no-signal screen. Your display keeps working normally.',
      },
      {
        question: 'How do I get out of it?',
        answer: 'Press Esc, or move the mouse and click the close button in the corner.',
      },
    ],
  },
  'white-noise-screen': {
    title: 'White Noise Screen – Calming Visuals With White Noise',
    intro:
      'Play soft, continuous white noise generated in your browser, paired with a slow, gentle visual. Use a timer to fade out automatically when you fall asleep.',
    steps: [
      'Click Play. Audio never starts without your action.',
      'Set the volume — it starts low on purpose — and choose a visual style or a dark screen.',
      'Optionally set a sleep timer to fade out after 15, 30 or 60 minutes.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Sleep', description: 'Mask traffic, neighbors or snoring with steady white noise.' },
      { title: 'Focus', description: 'Block distractions in open offices or busy homes.' },
      { title: 'Babies', description: 'Many parents use soft white noise to help infants settle.' },
      { title: 'Tinnitus relief', description: 'Some people find background noise makes ringing less noticeable.' },
    ],
    faqs: [
      {
        question: 'What is white noise?',
        answer:
          'White noise contains all audible frequencies at equal power, which sounds like a bright hiss, similar to an untuned radio.',
      },
      {
        question: 'Does it use any data?',
        answer: 'No. The noise is generated live in your browser with the Web Audio API, so nothing is streamed.',
      },
      {
        question: 'Is it safe for babies?',
        answer:
          'Keep the volume low and the device away from the crib. Pediatric guidance suggests staying below about 50 dB at the baby’s position.',
      },
    ],
  },
  'brown-noise-screen': {
    title: 'Brown Noise Screen – Deep Brown Noise for Focus & Sleep',
    intro:
      'Play deep, rumbling brown noise, generated live in your browser, with a calm visual. Brown noise emphasizes low frequencies and sounds like distant thunder or a waterfall.',
    steps: [
      'Click Play to start — nothing plays automatically.',
      'Adjust the volume, which starts quiet, and choose a visual or a dark screen.',
      'Set an optional sleep timer to fade out gently.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Deep focus', description: 'Many people with ADHD report brown noise helps them concentrate.' },
      { title: 'Sleep', description: 'Its low rumble is softer than white noise for long listening.' },
      { title: 'Masking low sounds', description: 'Helps cover rumbling traffic or HVAC hum.' },
      { title: 'Relaxation', description: 'Pair with a dark screen for a calm wind-down routine.' },
    ],
    faqs: [
      {
        question: 'How is brown noise different from white noise?',
        answer:
          'Brown noise loses power as frequency rises, so it sounds deeper and less hissy. White noise has equal power at all frequencies and sounds brighter.',
      },
      {
        question: 'Why is it called brown noise?',
        answer: 'It is named after Brownian motion, the random movement of particles, not the color brown.',
      },
      {
        question: 'Can I leave it running all night?',
        answer: 'Yes, but keep the volume moderate. A sleep timer is available if you prefer it to stop.',
      },
    ],
  },
  'pink-noise-screen': {
    title: 'Pink Noise Screen – Balanced Pink Noise Generator',
    intro:
      'Play balanced pink noise, generated live in your browser, with a soothing visual. Pink noise sits between white and brown, sounding like steady rain or wind.',
    steps: [
      'Click Play to start — audio never autoplays.',
      'Adjust the volume, which starts low, and pick a visual style.',
      'Set an optional sleep timer to fade out automatically.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Sleep quality', description: 'Pink noise is a popular, less harsh alternative to white noise for sleep.' },
      { title: 'Studying', description: 'A balanced background sound for long reading sessions.' },
      { title: 'Audio testing', description: 'Pink noise is used to roughly check speaker balance in a room.' },
      { title: 'Calm spaces', description: 'Add soft background sound to a waiting room or studio.' },
    ],
    faqs: [
      {
        question: 'What is pink noise?',
        answer:
          'Pink noise has equal energy per octave, so lower frequencies are louder than in white noise. It sounds more natural, like rain.',
      },
      {
        question: 'Is pink noise good for sleep?',
        answer:
          'Many people find it relaxing, and some small studies suggest it may help deep sleep, but results vary by person.',
      },
      {
        question: 'Can I use it to test speakers?',
        answer:
          'It is fine for a rough listening check. For precise room measurement, use dedicated measurement software and a calibrated microphone.',
      },
    ],
  },
  'broken-screen': {
    title: 'Broken Screen Prank – Fake Cracked Screen Effect',
    intro:
      'Show a realistic cracked-glass effect over a black or wallpaper background. Click to add more cracks. It is a harmless visual — nothing is actually broken.',
    steps: [
      'Pick a background and crack style.',
      'Click or tap anywhere on the stage to add a new crack at that point.',
      'Turn on the optional glass sound if you want — it starts off.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Harmless pranks', description: 'Give a friend a brief scare, then show them it is a webpage.' },
      { title: 'Video props', description: 'Show a broken phone or monitor in a short film without damage.' },
      { title: 'April Fools', description: 'A classic, reversible joke for the office.' },
      { title: 'Design reference', description: 'Use the crack visuals as reference for illustrations.' },
    ],
    faqs: [
      {
        question: 'Can this damage my screen?',
        answer: 'No. It is only an image drawn in your browser. Press Esc or close the tab to remove it.',
      },
      {
        question: 'How do I use it as a prank responsibly?',
        answer:
          'Keep it short, choose someone who will laugh, never use it to get money or information, and reveal the joke right away.',
      },
      {
        question: 'Can I add more cracks?',
        answer: 'Yes. Every click or tap on the stage adds a new crack radiating from that point.',
      },
    ],
  },
  'hacker-typer': {
    title: 'Hacker Typer – Type Like a Movie Hacker',
    intro:
      'Mash any keys and watch realistic-looking code pour onto a terminal, like a hacker in the movies. It is pure fiction: no real commands run and nothing connects to anything.',
    steps: [
      'Click the terminal, then type anything on your keyboard or tap the screen on mobile.',
      'Change the speed to control how many characters appear per key press.',
      'Press Alt three times for “ACCESS GRANTED”, or Caps Lock three times for “ACCESS DENIED”.',
      'Press F11 or the Fullscreen button for the full effect, and Esc to exit.',
    ],
    useCases: [
      { title: 'Impress your friends', description: 'Look like a genius while typing nonsense.' },
      { title: 'Film and streaming', description: 'Generate convincing “hacking” footage for videos.' },
      { title: 'Classroom fun', description: 'A playful way to spark interest in programming.' },
      { title: 'Party background', description: 'Run it on a spare screen at a tech-themed event.' },
    ],
    faqs: [
      {
        question: 'Does Hacker Typer actually hack anything?',
        answer:
          'No. It only prints pre-written, harmless text to the screen. It does not run commands, access networks or touch your files.',
      },
      {
        question: 'Why doesn’t the F key enter fullscreen here?',
        answer: 'Every key types code in this tool, so use the Fullscreen button instead.',
      },
      {
        question: 'Does it work on phones?',
        answer: 'Yes. Tap the terminal repeatedly to print more code.',
      },
    ],
  },
  'zoom-lighting': {
    title: 'Zoom Lighting – Screen Light for Video Calls',
    intro:
      'Turn your monitor into a soft ring light for Zoom, Teams or Meet. Choose a warm or cool tone, set the brightness, and frame your face with a glowing border while you keep your call visible.',
    steps: [
      'Open this page on a second monitor, or put it beside your call window.',
      'Pick a light tone — warm, neutral, cool or a custom color — and adjust brightness.',
      'Use ring mode to light only the edges of the screen, or full mode for maximum light.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Video calls', description: 'Brighten your face in dim rooms without buying a ring light.' },
      { title: 'Streaming', description: 'Add soft key light from a spare monitor or tablet.' },
      { title: 'Selfies', description: 'Use a laptop or tablet as a quick, even light source.' },
      { title: 'Makeup', description: 'Check makeup under warm or daylight-like light.' },
    ],
    faqs: [
      {
        question: 'Does this work with Zoom’s own settings?',
        answer:
          'Yes. It only lights your face; it does not change your camera. You can still use Zoom’s “Adjust for low light” option too.',
      },
      {
        question: 'Which tone should I choose?',
        answer:
          'Warm tones flatter skin in evening rooms, while neutral or cool tones match daylight from a window.',
      },
      {
        question: 'Will it make my screen brighter than usual?',
        answer: 'No. It uses your current brightness. Turn your display brightness up for more light.',
      },
    ],
  },
  'visual-noise': {
    title: 'Visual Noise – Animated Noise Patterns & Textures',
    intro:
      'Generate smooth, flowing noise patterns — grain, fog, plasma and Perlin-style waves — as calming visuals, backgrounds or texture references.',
    steps: [
      'Choose a noise style such as fog, plasma or fine grain.',
      'Adjust scale, speed and color palette.',
      'Pause the animation to freeze a frame you like.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Ambient visuals', description: 'Gentle motion for a TV or monitor in the background.' },
      { title: 'Design textures', description: 'Reference for grain and gradient textures.' },
      { title: 'VJ backgrounds', description: 'Simple generative visuals for events.' },
      { title: 'Relaxation', description: 'Slow-moving fog patterns for winding down.' },
    ],
    faqs: [
      {
        question: 'Is this the same as TV static?',
        answer:
          'No. TV static is random per pixel and per frame. These patterns use smoothed noise, which flows gently.',
      },
      {
        question: 'Does it use a lot of battery?',
        answer: 'It runs on your graphics hardware. Lower the speed or pause it to save power on laptops.',
      },
      {
        question: 'Does it respect reduced motion?',
        answer: 'Yes. If your system prefers reduced motion, the animation starts paused.',
      },
    ],
  },
  'color-cycle': {
    title: 'Color Cycle Screen – Smooth Rainbow Color Changing',
    intro:
      'Smoothly fade your whole screen through the color spectrum, or cycle a custom list of colors. Great for mood lighting, parties and stuck-pixel exercises.',
    steps: [
      'Choose smooth rainbow fading or a stepped cycle through preset colors.',
      'Set the speed with the slider.',
      'Press Space to pause and resume.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Mood lighting', description: 'A slowly shifting glow for parties or relaxing.' },
      { title: 'Stuck pixel exercise', description: 'Fast cycling is sometimes suggested for stuck pixels, with no guarantee.' },
      { title: 'Stream ambiance', description: 'A shifting background light behind you on camera.' },
      { title: 'Kids’ night light', description: 'A soft, slowly changing light at low brightness.' },
    ],
    faqs: [
      {
        question: 'Can color cycling fix stuck pixels?',
        answer:
          'Sometimes rapidly changing colors helps a stuck subpixel respond again, but it is not guaranteed and it cannot fix dead pixels.',
      },
      {
        question: 'Is fast cycling safe?',
        answer:
          'Fast flashing can affect people with photosensitive epilepsy. The speed is capped, starts slow, and reduced motion is respected.',
      },
      {
        question: 'Can I pause on a color I like?',
        answer: 'Yes. Press Space or click the Pause button.',
      },
    ],
  },
  'gradient-screen': {
    title: 'Gradient Screen – Fullscreen Color Gradient Maker',
    intro:
      'Create a fullscreen linear or radial gradient with two or three colors, an adjustable angle, and optional slow animation. Download it as a wallpaper.',
    steps: [
      'Choose a preset or pick your own colors.',
      'Switch between linear and radial, and set the angle.',
      'Enable animation for a slowly drifting gradient.',
      'Press F for fullscreen, or download the gradient as a PNG.',
    ],
    useCases: [
      { title: 'Wallpapers', description: 'Make a custom gradient wallpaper at any resolution.' },
      { title: 'Ambient light', description: 'A soft two-tone glow is easier on the eyes than solid color.' },
      { title: 'Banding test', description: 'Smooth gradients reveal banding on low bit-depth panels.' },
      { title: 'Backgrounds', description: 'Quick backdrops for presentations and videos.' },
    ],
    faqs: [
      {
        question: 'Why does my gradient show stripes?',
        answer:
          'Visible stripes are banding, caused by limited panel bit depth or image compression. It is a display limitation, not a fault in the gradient.',
      },
      {
        question: 'Can I download it?',
        answer: 'Yes. Choose a resolution and download a PNG made in your browser.',
      },
      {
        question: 'Can I use three colors?',
        answer: 'Yes. Enable the middle color to add a third stop.',
      },
    ],
  },
}

export const screensaverContent: Record<string, ToolContent> = {
  'matrix-screensaver': {
    title: 'Matrix Screensaver – Digital Rain in Your Browser',
    intro:
      'Watch cascading green code rain down your screen, inspired by the famous film effect. Change the color, speed, density and characters.',
    steps: [
      'The rain starts immediately in the preview.',
      'Adjust speed, density and font size, or pick another color.',
      'Choose katakana, binary or Latin characters.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Screensaver', description: 'Leave it running on an idle monitor.' },
      { title: 'Tech ambiance', description: 'Background visuals for streams, offices or events.' },
      { title: 'Video backdrops', description: 'Record a “cyber” background for videos.' },
      { title: 'Costume parties', description: 'Set the scene for a sci-fi themed night.' },
    ],
    faqs: [
      {
        question: 'What characters does the Matrix rain use?',
        answer:
          'The original effect used mirrored half-width katakana mixed with numbers. You can choose that or binary and Latin characters here.',
      },
      {
        question: 'Can I make it a real screensaver?',
        answer:
          'Browsers cannot install system screensavers, but you can open it in fullscreen when you step away. The screen wake lock keeps the display on.',
      },
      {
        question: 'Will it slow down my computer?',
        answer: 'It is lightweight. Lower the density on older devices for smoother animation.',
      },
    ],
  },
  'flip-clock-screensaver': {
    title: 'Flip Clock Screensaver – Fullscreen Retro Clock',
    intro:
      'A large, readable flip-style clock with smooth digit animation. Choose 12 or 24-hour time, show seconds, and pick a dark or light theme.',
    steps: [
      'Your local time appears automatically.',
      'Toggle 12/24-hour format, seconds and date.',
      'Choose a theme that suits your room.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Desk clock', description: 'Turn a spare tablet or monitor into a bedside or desk clock.' },
      { title: 'Presentations', description: 'Show the time clearly during events and breaks.' },
      { title: 'Focus sessions', description: 'Keep a calm, minimal clock in view while working.' },
      { title: 'Streaming', description: 'A stylish “starting soon” background.' },
    ],
    faqs: [
      {
        question: 'Where does the time come from?',
        answer: 'It uses your device’s local clock and time zone, so it works offline after loading.',
      },
      {
        question: 'Will my screen stay on?',
        answer: 'In fullscreen on supported browsers, a screen wake lock keeps the display awake.',
      },
      {
        question: 'Can I turn off the flip animation?',
        answer: 'Yes. If your system prefers reduced motion, digits change instantly without flipping.',
      },
    ],
  },
  'dvd-screensaver': {
    title: 'DVD Screensaver – Bouncing Logo, Will It Hit the Corner?',
    intro:
      'The classic bouncing logo that changes color with every wall hit. Watch and wait for that perfect corner hit — the counter keeps score.',
    steps: [
      'The logo starts bouncing right away.',
      'Adjust speed and size with the sliders.',
      'Watch the corner hit counter — every exact corner gets celebrated.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Nostalgia', description: 'Relive the waiting room classic.' },
      { title: 'Idle screen', description: 'A playful screensaver for a TV or office monitor.' },
      { title: 'Stream breaks', description: 'Viewers love waiting for the corner hit.' },
      { title: 'Group watch', description: 'Bet with friends on when it will hit.' },
    ],
    faqs: [
      {
        question: 'Does it ever hit the corner exactly?',
        answer:
          'Yes. Whether and how often depends on the screen size, logo size and speed. The counter records every exact corner hit.',
      },
      {
        question: 'Is this the official DVD logo?',
        answer:
          'No. It uses a generic bouncing badge in the same spirit, and is not affiliated with the DVD Format/Logo Licensing Corporation.',
      },
      {
        question: 'Can I use my own logo?',
        answer: 'Yes. Use the Custom DVD Screensaver to bounce your own text or image.',
      },
    ],
  },
  'custom-dvd-screensaver': {
    title: 'Custom DVD Screensaver – Bounce Your Own Logo or Text',
    intro:
      'Make the classic bouncing screensaver your own. Upload a logo or type text, choose colors, and let it bounce. Images stay on your device.',
    steps: [
      'Type your text, or upload a PNG, JPG, SVG or GIF logo.',
      'Choose whether the color changes on each bounce.',
      'Adjust size and speed.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Office branding', description: 'Bounce your company logo on a lobby screen.' },
      { title: 'Events', description: 'Show a wedding monogram or party name.' },
      { title: 'Streaming', description: 'Bounce your channel logo during breaks.' },
      { title: 'Gifts and jokes', description: 'Bounce a friend’s name or face for a laugh.' },
    ],
    faqs: [
      {
        question: 'Is my uploaded image stored?',
        answer: 'No. It is read locally in your browser and never uploaded. It disappears when you leave the page.',
      },
      {
        question: 'What image works best?',
        answer:
          'A transparent PNG or SVG works best. Color-change mode tints single-color logos; full-color images keep their colors.',
      },
      {
        question: 'Can I bounce text instead?',
        answer: 'Yes. Type up to 24 characters and pick a font weight.',
      },
    ],
  },
  'snow-screen': {
    title: 'Snow Screen – Falling Snow Screensaver',
    intro:
      'Gentle snowflakes drift across your screen over a night-sky gradient. Adjust the amount of snow, wind and flake size for a cozy winter scene.',
    steps: [
      'Snow starts falling immediately.',
      'Use the sliders to change density, wind and flake size.',
      'Pick a background: night sky, dusk or pure black.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Holiday ambiance', description: 'A winter scene on your TV during the holidays.' },
      { title: 'Relaxation', description: 'Slow, soft motion helps you wind down.' },
      { title: 'Shop windows', description: 'A seasonal display for storefront screens.' },
      { title: 'Video backgrounds', description: 'Record a snowy backdrop for greetings.' },
    ],
    faqs: [
      {
        question: 'Can I use it on a TV?',
        answer: 'Yes. Open the page in your TV’s browser or cast a browser tab, then go fullscreen.',
      },
      {
        question: 'Does it work offline?',
        answer: 'Once loaded, the animation runs entirely in your browser without a connection.',
      },
      {
        question: 'Does it respect reduced motion?',
        answer: 'Yes. With reduced motion enabled, snow falls much more slowly and with fewer flakes.',
      },
    ],
  },
}
