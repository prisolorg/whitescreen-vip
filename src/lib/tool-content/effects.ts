import type { ToolContent } from './types'

const FULLSCREEN_STEP = 'Press F or click Fullscreen to fill your display, and press Esc to exit.'

export const effectsContent: Record<string, ToolContent> = {
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
  'white-noise-generator': {
    title: 'White Noise Generator – Free Online White Noise',
    intro:
      'Press Start and this white noise generator plays a steady, full-spectrum hiss made live in your browser, with nothing to download or stream. Shape the sound with a low-pass or high-pass filter, set the volume in decibels, and add a sleep timer that fades out gently. Watch the live waveform, or switch the visual to classic TV static (this page replaces our old TV Static Screen). Want something softer? Try the [Pink Noise Generator](/pink-noise-generator/) or the deeper [Brown Noise Generator](/brown-noise-generator/), and pair any of them with the [Pomodoro Timer](/pomodoro-timer/) for focused work.',
    steps: [
      'Press Start. Sound never plays until you do, and it starts at a moderate volume.',
      'Use the White, Pink and Brown buttons to open each noise generator; your volume, filter and visual settings come with you.',
      'Use a low-pass filter to soften the hiss, or a high-pass filter to remove rumble, and set the cutoff.',
      'Pick a visual (waveform, TV static or a dark screen) and an optional sleep timer.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Sleep', description: 'Mask traffic, neighbours and snoring with a steady, even sound.' },
      { title: 'Focus', description: 'Cover office chatter and household noise while you work or study.' },
      { title: 'Babies', description: 'Many parents use soft white noise to help infants settle. Keep it quiet and away from the cot.' },
      { title: 'Retro TV static', description: 'Switch the visual to TV static for videos, props or a haunted-TV party screen.' },
    ],
    faqs: [
      {
        question: 'What is white noise?',
        answer:
          'White noise has equal power at every frequency. To the ear it sounds like a bright, even hiss, like an untuned radio or TV.',
      },
      {
        question: 'What do the low-pass and high-pass filters do?',
        answer:
          'A low-pass filter keeps frequencies below the cutoff, so the noise sounds darker and softer. A high-pass filter keeps frequencies above it, removing rumble and making it airier.',
      },
      {
        question: 'Where did the TV Static Screen go?',
        answer:
          'It is now part of this page. Choose the TV static visual to get the flickering black-and-white snow with matching white noise.',
      },
      {
        question: 'Does it use any data?',
        answer: 'No. The noise is generated on your device with the Web Audio API, so nothing is streamed and it keeps working offline once loaded.',
      },
      {
        question: 'Is the TV static visual safe to watch?',
        answer:
          'Fast flicker can be uncomfortable for some people and may trigger photosensitive epilepsy. Use the waveform or dark visual if you are sensitive.',
      },
    ],
  },
  'brown-noise-generator': {
    title: 'Brown Noise Generator – Deep Online Brown Noise',
    intro:
      'A brown noise generator for deep focus and sleep. Brown noise puts most of its energy in the low frequencies, so it sounds like a distant waterfall or a steady rumble rather than a hiss. Press Start, set the volume in decibels, soften or trim it with a filter, and let the sleep timer fade it out. Compare it with the [White Noise Generator](/white-noise-generator/) and the [Pink Noise Generator](/pink-noise-generator/) using the switch on the stage.',
    steps: [
      'Press Start. Nothing plays until you do.',
      'Set the volume; brown noise feels quieter than white noise at the same level, so go slowly.',
      'Add a low-pass filter for an even deeper rumble, or a high-pass filter to remove the lowest boom on small speakers.',
      'Choose an optional sleep timer and a visual.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Deep focus', description: 'Many people, including some with ADHD, say brown noise helps them settle into work.' },
      { title: 'Sleep', description: 'Its soft, low tone is gentle enough to leave on for hours.' },
      { title: 'Masking low sounds', description: 'Covers traffic rumble, footsteps and air conditioning hum.' },
      { title: 'Wind-down', description: 'Pair it with a dark screen in the evening.' },
    ],
    faqs: [
      {
        question: 'How is brown noise different from white and pink noise?',
        answer:
          'Brown noise loses power quickly as frequency rises (about 6 dB per octave), so it is the deepest of the three. Pink noise is in between, and white noise is the brightest.',
      },
      {
        question: 'Why is it called brown noise?',
        answer: 'It is named after Brownian motion, the random movement of particles, not the colour brown. It is also called red noise.',
      },
      {
        question: 'Why can I barely hear it on my phone?',
        answer: 'Small speakers cannot reproduce deep bass. Use headphones or larger speakers, or add a high-pass filter and raise the volume a little.',
      },
    ],
  },
  'pink-noise-generator': {
    title: 'Pink Noise Generator – Online Pink Noise for Sleep',
    intro:
      'A pink noise generator that sounds like steady rain or wind. Pink noise has equal energy in every octave, so it is fuller and less hissy than white noise but brighter than brown noise. Press Start, adjust the volume in decibels, shape it with a filter and set a sleep timer. Switch to the [White Noise Generator](/white-noise-generator/) or [Brown Noise Generator](/brown-noise-generator/) right from the stage.',
    steps: [
      'Press Start. Audio never plays on its own.',
      'Set the volume in decibels.',
      'Use the low-pass or high-pass filter and cutoff slider to fine-tune the tone.',
      'Choose an optional sleep timer and a visual.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Sleep', description: 'A popular, less harsh alternative to white noise for the whole night.' },
      { title: 'Studying', description: 'A balanced background sound for long reading sessions.' },
      { title: 'Speaker check', description: 'Pink noise is the standard signal for a rough listen to speaker balance.' },
      { title: 'Calm spaces', description: 'Soft background sound for waiting rooms and studios.' },
    ],
    faqs: [
      {
        question: 'What is pink noise?',
        answer:
          'Pink noise has equal energy per octave, so each step up in pitch is a little quieter than in white noise. It sounds more natural, like rain.',
      },
      {
        question: 'Is pink noise good for sleep?',
        answer: 'Many people find it relaxing, and some small studies suggest it may support deep sleep, but results vary from person to person.',
      },
      {
        question: 'Can I use it to test speakers?',
        answer: 'It is fine for a quick listening check. For accurate room measurements use measurement software and a calibrated microphone.',
      },
    ],
  },
  'broken-screen': {
    title: 'Broken Screen Prank – Realistic Cracked Glass Effect',
    intro:
      'Tap anywhere and the screen "shatters": a spider-web of cracks spreads from the impact point, with glass shards that catch the light, a crushed centre and a sharp crack sound. Pick a wallpaper, lock screen or black background, go fullscreen and hand over the phone or laptop. Nothing is actually broken; it is a picture drawn in your browser. For a different scare, try the [Hacked Screen Simulator](/hacked-screen/).',
    steps: [
      'Pick a background: wallpaper, phone lock screen or black.',
      'Tap or click anywhere on the screen to crack the glass at that point. Each tap adds another impact.',
      'Leave the crack sound on for extra realism, or turn it off.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Harmless pranks', description: 'A quick scare for a friend, followed by the reveal.' },
      { title: 'Video props', description: 'Show a smashed phone or monitor in a short film without breaking anything.' },
      { title: 'April Fools', description: 'A classic, fully reversible office joke.' },
      { title: 'Design reference', description: 'Study how impact cracks spread for illustration and VFX.' },
    ],
    faqs: [
      {
        question: 'Can this damage my screen?',
        answer: 'No. It is only an image drawn in your browser. Press Esc, tap Clear or close the tab to remove it.',
      },
      {
        question: 'Why does it look like real glass?',
        answer:
          'Real impacts make a dense, crushed centre, long radial cracks and rings of short cracks between them. The effect draws all three, with highlights and shadows on each crack and lighter shards where pieces have lifted.',
      },
      {
        question: 'How do I use it as a prank responsibly?',
        answer: 'Keep it short, choose someone who will laugh, never use it to get money or information, and reveal the joke right away.',
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
  'hacked-screen': {
    title: 'Hacked Screen Simulator – Fake Hacked Screen Prank',
    intro:
      'A movie-style "SYSTEM BREACHED" screen: red warning banners, glitching text, scrolling fake logs, a countdown and a progress bar that pretends to copy files. It is a harmless simulation. Nothing is accessed, nothing is sent, and it ends the moment you press Esc. Want to play the hacker instead? Try [Hacker Typer](/hacker-typer/) or the [Matrix Screensaver](/matrix-screensaver/).',
    steps: [
      'Choose a style (red alert or green terminal) and the text to show.',
      'Turn the optional siren on or off; it only plays after you start it.',
      'Go fullscreen and leave the device for your friend to find.',
      'Press Esc or move the mouse to reveal the close button.',
    ],
    useCases: [
      { title: 'Pranks', description: 'A short scare for a friend who will laugh about it afterwards.' },
      { title: 'Films and escape rooms', description: 'A convincing "you have been hacked" prop screen.' },
      { title: 'Security awareness', description: 'Show what scareware looks like so people learn to ignore it.' },
      { title: 'Streams and videos', description: 'A dramatic interlude or reaction moment.' },
    ],
    faqs: [
      {
        question: 'Does this actually hack or harm my device?',
        answer: 'No. It is text and animation in a normal browser tab. It does not run commands, read files or connect to anything.',
      },
      {
        question: 'What should I do if a real website says I have been hacked?',
        answer:
          'Close the tab. Real security tools never ask you to call a number or pay to unlock your device; pop-ups that do are scams.',
      },
      {
        question: 'How do I exit?',
        answer: 'Press Esc, or move the mouse or tap to reveal the close button. Closing the tab also works.',
      },
    ],
  },
  'zoom-lighting': {
    title: 'Zoom Lighting – Screen Light for Video Calls',
    intro:
      'Turn your monitor into a soft key light for Zoom, Teams or Google Meet. Set the color temperature in Kelvin, from warm 2700 K to daylight 6500 K, adjust brightness, and choose full-screen light or a frame that leaves room for your call window. For a round light that looks great in reflections, use the [Ring Light](/ring-light/).',
    steps: [
      'Open this page on a second monitor, or beside your call window on one screen.',
      'Set the color temperature and brightness. Turn your display brightness up for more light.',
      'Choose Full light for maximum brightness, or Frame to keep a dark window in the middle for your call.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Video calls', description: 'Brighten and even out your face in dim rooms.' },
      { title: 'Streaming', description: 'A soft key light from a spare monitor or tablet.' },
      { title: 'Selfies', description: 'Use a laptop or tablet as a quick, even light source.' },
      { title: 'Makeup', description: 'Check makeup under warm evening or daylight-like light.' },
    ],
    faqs: [
      {
        question: 'Which color temperature should I use?',
        answer:
          'Match the room. Around 3000 K suits lamp-lit evening rooms, 4000–4500 K is neutral, and 5500–6500 K matches daylight from a window.',
      },
      {
        question: 'Does this change my camera?',
        answer: 'No. It only lights your face. You can still use your meeting app\'s own low-light setting.',
      },
      {
        question: 'Will it make my screen brighter than usual?',
        answer: 'No. It uses your current brightness setting; turn your display up for more light.',
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
      'Toggle 12/24-hour format, seconds and the date. Each digit flips like a real split-flap clock.',
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
      'Adjust speed and logo size with the sliders.',
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
        question: 'Why does the logo change color?',
        answer:
          'Like the classic DVD player screensaver, the logo picks a new color every time it touches an edge, and it never repeats the same color twice in a row.',
      },
    ],
  },
  'motivational-quote-screensaver': {
    title: 'Motivational Quote Screensaver – Rotating Inspirational Quotes',
    intro:
      'Fill any screen with one big, calm quote at a time. Quotes fade in on a timer, so a spare monitor, office TV or classroom display gives people a small push without asking for attention. Pair it with the [Flip Clock Screensaver](/flip-clock-screensaver/) for a desk display, or the [Countdown Timer](/countdown-timer/) for focused work blocks.',
    steps: [
      'A random quote appears straight away.',
      'Pick a background and how many seconds each quote stays on screen.',
      'Use the arrows or ← → keys to move between quotes; Space pauses.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Office and lobby screens', description: 'A quiet, positive loop for reception TVs and team areas.' },
      { title: 'Classrooms', description: 'Show a thought for the day as students arrive.' },
      { title: 'Gyms and studios', description: 'Short, punchy lines that read from across the room.' },
      { title: 'Home desk', description: 'Keep a second monitor or old tablet useful while you work.' },
    ],
    faqs: [
      {
        question: 'Where do the quotes come from?',
        answer:
          'They are short lines from long-established authors and proverbs, such as Seneca, Marcus Aurelius, Confucius, Benjamin Franklin and Mark Twain. They are built into the page, so nothing is fetched while it runs.',
      },
      {
        question: 'Can I keep one quote on screen?',
        answer: 'Yes. Press Pause (or Space) and the current quote stays until you resume or press an arrow.',
      },
      {
        question: 'Will it read well on a TV?',
        answer:
          'Yes. The text scales with the screen and stays within a comfortable line length, so it is readable from across a room in fullscreen.',
      },
      {
        question: 'Does it keep the screen awake?',
        answer: 'In fullscreen on supported browsers, a screen wake lock stops the display from sleeping.',
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
