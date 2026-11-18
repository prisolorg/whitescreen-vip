/**
 * The answer-first block shown directly under each tool: a direct answer to what the tool is and
 * does, its key features and why to use it, plus authoritative sources where they help the reader.
 * English; translated versions live in glance-i18n.ts.
 */
import { toolContentTranslations } from './i18n'
import { colorGlanceFor } from '../topic-i18n'
import { SCREEN_COLORS } from '../screen-colors'

export type ToolSource = { label: string; url: string }

export type ToolGlance = {
  /** 40–60 words that answer the searcher's question on their own. */
  answer: string
  features: string[]
  benefits: string[]
  sources?: ToolSource[]
}

const WIKI = (title: string, label = title.replaceAll('_', ' ')) => ({ label: `${label} (Wikipedia)`, url: `https://en.wikipedia.org/wiki/${title}` })
const MDN = (path: string, label: string) => ({ label: `${label} (MDN Web Docs)`, url: `https://developer.mozilla.org/en-US/docs/Web/API/${path}` })
const FULLSCREEN_API = MDN('Fullscreen_API', 'Fullscreen API')
const WAKE_LOCK = MDN('Screen_Wake_Lock_API', 'Screen Wake Lock API')
const FLASH_GUIDELINE = {
  label: 'WCAG 2.3.1: Three Flashes or Below Threshold (W3C)',
  url: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html',
}

/** Colour screens: every page has its own answer and lists; only the sources helper is shared. */
const RGB = WIKI('RGB_color_model')

export const TOOL_GLANCE: Record<string, ToolGlance> = {
  'white-screen': {
    answer:
      'A white screen turns your whole display pure white (#FFFFFF), the brightest light it can make. People use it as a soft light for video calls and selfies, to trace drawings, to spot dust while cleaning and to find dark dead pixels. Double-tap or press F for fullscreen.',
    features: ['Pure white at full brightness, or dimmed down to 10%', 'Cool, Neutral or Warm white for daylight or cozy light', 'Keep screen awake for long lighting or tracing sessions', 'White PNG download from 1080p to 4K, phone size or custom up to 8K'],
    benefits: ['The brightest free light source already in your hands', 'Shows smudges, dust and dark pixels at a glance', 'Works on any phone, laptop, monitor or smart TV'],
    sources: [RGB, WIKI('Color_temperature', 'Color temperature'), FULLSCREEN_API],
  },
  'black-screen': {
    answer:
      'A black screen fills your display with pure black (#000000). On OLED phones and TVs the pixels switch off completely, so it saves power and looks like the screen is off. On LCDs it reveals backlight bleed. People also use it to hide the screen, rest their eyes or record a black video.',
    features: ['True #000000, so OLED pixels turn fully off', 'Keeps the display awake in fullscreen while it looks off', 'Arrow keys jump to other screen colors', 'Black PNG download for wallpapers, lock screens and video edits'],
    benefits: ['Hides what is on screen without closing anything', 'Shows backlight bleed, IPS glow and bright stuck pixels', 'Saves battery on OLED and AMOLED phones'],
    sources: [RGB, WIKI('OLED'), WAKE_LOCK],
  },
  'red-screen': {
    answer:
      'A red screen fills your display with pure red (#FF0000), lighting only the red subpixels. It makes a dim red night light that keeps your eyes adjusted to the dark, a bold backdrop for photos and parties, and a quick check for stuck green or blue subpixels.',
    features: ['Pure #FF0000 with only red subpixels lit', 'Brightness down to 10% for a dim red night light', 'Keep screen awake for an all-night red light', 'Red PNG download in common screen sizes'],
    benefits: ['A red light that keeps night vision intact', 'Finds stuck green or blue subpixels in seconds', 'Instant bright red backdrop for photos and videos'],
    sources: [RGB],
  },
  'green-screen': {
    answer:
      'A green screen fills your display with chroma key green (#00FF00). Creators put it behind a subject and remove it later in OBS, Premiere or CapCut, and because only the green subpixels light up, it also shows a dead red or blue subpixel during a pixel check.',
    features: ['Bright #00FF00 chroma key green', 'Brightness and Warmth to match your camera and lights', 'Fullscreen on a monitor or TV as a keying backdrop', 'Green PNG download to key out in any video editor'],
    benefits: ['A free backdrop when you have no green cloth', 'Even, flat color that keys cleanly', 'Checks the green channel and stuck pixels'],
    sources: [RGB, WIKI('Chroma_key', 'Chroma key')],
  },
  'blue-screen': {
    answer:
      'A blue screen fills your display with pure blue (#0000FF), lighting only the blue subpixels. Use it as a calm blue light for photos and rooms, a blue chroma key backdrop, or to check the blue channel. It is just a color, not the Windows blue screen of death.',
    features: ['Pure #0000FF with only blue subpixels lit', 'Brightness from 10% to 100% for a soft or bright blue light', 'Cool or Warm for a brighter or deeper blue', 'Blue PNG download for backgrounds and keying'],
    benefits: ['Instant blue light for photos, streams and mood lighting', 'Backdrop for blue-screen keying', 'Shows stuck red or green subpixels'],
    sources: [RGB, WIKI('Chroma_key', 'Chroma key')],
  },
  'yellow-screen': {
    answer:
      'A yellow screen fills your display with pure yellow (#FFFF00): red and green at full strength with blue switched off. That makes it a warm, blue-free light for reading, calls and evenings, a cheerful backdrop for photos, and a quick check for a dead red or green subpixel.',
    features: ['Pure #FFFF00 with no blue light', 'Warm for a golden yellow, Cool for a lemon yellow', 'Brightness down to 10% for a soft reading light', 'Yellow PNG download for wallpapers and designs'],
    benefits: ['Warm light without the blue of a white screen', 'Bright, cheerful backdrop for photos and videos', 'Shows dead red or green subpixels'],
    sources: [RGB],
  },
  'orange-screen': {
    answer:
      'An orange screen fills your display with warm orange (#FF8000). With far less blue than white, it works as a gentle night light, a sunset-style mood light and a warm fill light for video calls. Turn the brightness down for an amber glow that is easy on the eyes after dark.',
    features: ['Warm #FF8000 with no blue channel', 'Brightness slider for a dim amber night light', 'Warm for a deeper, redder orange', 'Orange PNG download for backgrounds'],
    benefits: ['A night light with far less blue than white', 'Warm, flattering fill light for calls and photos', 'Sunset and autumn mood lighting in one tap'],
    sources: [RGB],
  },
  'pink-screen': {
    answer:
      'A pink screen fills your display with hot pink (#FF69B4). It gives soft, flattering light for selfies, makeup and video calls, and a fun glow for parties, streams and TikTok videos. Warm turns it coral, Cool turns it rose, and lower brightness gives a darker pink.',
    features: ['Hot pink #FF69B4 at full brightness', 'Coral (Warm) and rose (Cool) shades', 'Keep screen awake for long lighting sessions', 'Pink PNG download for wallpapers and posts'],
    benefits: ['Flattering light that softens skin and shadows', 'Instant party and stream lighting', 'Ready-made hot pink background'],
    sources: [RGB],
  },
  'purple-screen': {
    answer:
      'A purple screen fills your display with vivid purple (#8000FF): full blue, half red and no green. People use it as a purple light for rooms, gaming setups and TikTok videos, and as a bold backdrop. Screens give off no ultraviolet, so it looks like a black light but cannot act as one.',
    features: ['Vivid #8000FF in fullscreen', 'Warm for a redder purple, Cool for a bluer violet', 'Brightness down to 10% for dark purple', 'Purple PNG download in common sizes'],
    benefits: ['Instant purple light for rooms, streams and parties', 'Bold backdrop for photos and videos', 'Shows stuck green subpixels'],
    sources: [RGB],
  },
  'cyan-screen': {
    answer:
      'A cyan screen fills your display with pure cyan (#00FFFF), lighting green and blue together with red switched off. That makes a stuck red subpixel or a missing color channel easy to see, and gives a crisp, cool accent light for desks and photos.',
    features: ['Pure #00FFFF with no red light', 'Checks the green and blue channels together', 'Brightness and Warmth controls', 'Cyan PNG download'],
    benefits: ['Exposes faulty red subpixels and color tint', 'Cool, modern accent light', 'Works on any screen with no app'],
    sources: [RGB],
  },
  'magenta-screen': {
    answer:
      'A magenta screen fills your display with pure magenta (#FF00FF): red and blue at full power with no green, the most vivid color a screen can show. Use it as neon party light, a bold background or a quick check for stuck green subpixels.',
    features: ['Pure #FF00FF in fullscreen', 'Warm leans hot pink, Cool leans violet', 'Brightness control from 10% to 100%', 'Magenta PNG download for wallpapers'],
    benefits: ['Neon-style light for parties and streams', 'Loudest possible background color', 'Shows stuck green subpixels and green tint'],
    sources: [RGB],
  },
  'gray-screen': {
    answer:
      'A grey screen fills your display with neutral gray. Pick a gray level from 5% (near black) to 75% (light gray) to check for clouding, backlight bleed, dirty screen effect and dark corners, or use mid gray (#808080) as a calm, blank backdrop with no color cast.',
    features: ['Five gray levels: 5%, 10%, 25%, 50% and 75%', 'Brightness and Warmth to fine-tune the gray', 'Fullscreen for an even, blank gray field', 'Gray PNG download at the level you pick'],
    benefits: ['The standard field for screen uniformity checks', 'Neutral backdrop with no color cast', 'Calmer than white for a second screen'],
    sources: [RGB, WIKI('Color_banding', 'Color banding')],
  },
  'dead-pixel-test': {
    answer:
      'A dead pixel test fills your screen with solid colors, one after another, so faulty pixels stand out. A dead pixel stays black on every color, a stuck pixel stays one bright color, and a hot pixel stays white. The full check takes about a minute on any monitor, laptop, TV or phone.',
    features: [
      'Fullscreen white, black, red, green, blue and gray fields',
      'Auto-cycle mode or step through colors with the arrow keys',
      'Works on LCD, IPS, VA, OLED and mini-LED panels',
      'Tips to tell dead, stuck and hot pixels apart',
    ],
    benefits: [
      'Catch pixel defects before your return or warranty window closes',
      'Check a used monitor or phone before you pay for it',
      'Free, private and nothing to install',
    ],
    sources: [WIKI('Defective_pixel', 'Defective pixel'), FULLSCREEN_API],
  },
  'screen-uniformity-test': {
    answer:
      'A screen uniformity test shows dark and gray fullscreen fields so you can see whether brightness and color are even across the panel. It reveals backlight bleed at the edges, clouding on LCD and IPS screens, IPS glow, vignetting and the dirty screen effect on large TVs.',
    features: [
      'Black, dark gray and mid-gray test fields',
      'Brightness steps for checking clouding in a dark room',
      'Side-by-side guidance for IPS glow vs backlight bleed',
      'Fullscreen with all browser chrome hidden',
    ],
    benefits: [
      'Spot panel faults that are covered by warranty',
      'Compare two monitors or a replacement fairly',
      'Takes about two minutes in a dark room',
    ],
    sources: [WIKI('Backlight'), WIKI('Liquid-crystal_display', 'Liquid-crystal display')],
  },
  'monitor-test': {
    answer:
      'A screen test (or monitor test) is a set of fullscreen test patterns that checks how well your display shows color, contrast, sharpness and gamma. Step through gradients, black and white levels, text sharpness and geometry patterns to find faults or set the right picture settings.',
    features: [
      'Gradient, gamma, contrast and sharpness patterns',
      'Black level and white level steps',
      'Geometry and text clarity checks',
      'Keyboard shortcuts to step through every pattern',
    ],
    benefits: [
      'Set brightness, contrast and sharpness correctly',
      'Check a new or second-hand monitor in minutes',
      'Runs in any browser, including on TVs',
    ],
    sources: [WIKI('Gamma_correction', 'Gamma correction'), WIKI('Test_card', 'Test card')],
  },
  'oled-gray-test': {
    answer:
      'An OLED test shows very dark gray steps near black, where OLED panels most often show problems. It reveals near-black banding, mura (blotchy patches), vertical lines and uneven shading that bright content hides on OLED TVs, monitors and phones.',
    features: [
      'Near-black gray steps from 1% to 20%, plus a ramp',
      'Full-screen fields with no overlays',
      'Manual stepping to compare levels slowly',
      'Works on phones, TVs and OLED monitors',
    ],
    benefits: ['Check a new OLED within the return period', 'Find banding before calibrating', 'Free and quick'],
    sources: [WIKI('OLED'), WIKI('Color_banding', 'Color banding')],
  },
  'oled-burn-in-test': {
    answer:
      'An OLED burn-in test shows solid fullscreen colors so faded logos, status bars, navigation buttons or game HUDs left by uneven pixel wear become visible. Burn-in is permanent wear; image retention is temporary and fades. Both are easiest to spot on gray, red and blue.',
    features: [
      'Solid gray, red, green, blue and white fields',
      'Arrow keys to switch colors quickly',
      'Tips to tell burn-in from temporary retention',
      'Optimized for OLED phones, TVs and monitors',
    ],
    benefits: ['Check a used OLED phone or TV before buying', 'Catch retention early and act on it', 'No app or download'],
    sources: [WIKI('Screen_burn-in', 'Screen burn-in'), WIKI('OLED')],
  },
  'screen-burn-in-test': {
    answer:
      'A screen burn-in test lets you check any display for ghost images, then run a fixer that cycles colors and noise across the screen. Temporary image retention often fades after 10 to 30 minutes of the fixer; permanent burn-in from worn pixels cannot be repaired by software.',
    features: [
      'Check mode with solid colors and arrow-key stepping',
      'Fixer mode: color sweep, color cycle and noise patterns',
      'Built-in timer that stops the fixer automatically',
      'Works for OLED, plasma and LCD screens',
    ],
    benefits: ['Clear temporary retention without extra apps', 'See whether a mark is retention or burn-in', 'Free and safe for your display'],
    sources: [WIKI('Screen_burn-in', 'Screen burn-in'), WIKI('Image_persistence', 'Image persistence'), FLASH_GUIDELINE],
  },
  'touch-screen-test': {
    answer:
      'A touch screen test checks whether every part of your touchscreen responds. Tap every cell of a grid to find dead zones, draw lines to spot breaks or jitter, and place several fingers at once to see how many touch points your phone or tablet supports.',
    features: [
      'Grid mode that marks each cell as you touch it, with coverage %',
      'Draw mode to find gaps, jumps and ghost touches',
      'Multi-touch mode that counts simultaneous fingers',
      'Works with fingers, stylus and mouse',
    ],
    benefits: ['Find dead zones after a drop or screen repair', 'Check a used phone or tablet before buying', 'No app install needed'],
    sources: [WIKI('Touchscreen'), WIKI('Multi-touch'), MDN('Pointer_events', 'Pointer events')],
  },
  'screen-refresh-rate-test': {
    answer:
      'A refresh rate test measures how many times per second your screen redraws the picture, shown in hertz (Hz). It times your browser’s frames to report 60, 75, 120, 144, 165 or 240 Hz, so you can confirm a high-refresh monitor is really running at its rated speed.',
    features: [
      'Live Hz measurement with the nearest standard rate',
      'Average, minimum and maximum frame timing',
      'Measure again after changing display settings',
      'Works on monitors, laptops, phones and tablets',
    ],
    benefits: [
      'Confirm a 144 Hz or 240 Hz monitor is not stuck at 60 Hz',
      'Check the cable, port and Windows or macOS setting are right',
      'Result in seconds, no download',
    ],
    sources: [WIKI('Refresh_rate', 'Refresh rate'), MDN('Window/requestAnimationFrame', 'requestAnimationFrame()')],
  },
  'monitor-ghosting-test': {
    answer:
      'A monitor ghosting test moves objects across the screen so you can see trails left behind by slow pixel response. Faint copies behind the object are ghosting; bright or inverted halos are overshoot from too much overdrive. Use it to pick the best overdrive setting.',
    features: [
      'Three moving lanes at adjustable speed',
      'Light and dark backgrounds to reveal different transitions',
      'Reference grid for judging trail length',
      'Matches your screen’s real refresh rate',
    ],
    benefits: ['Choose the right overdrive mode for gaming', 'Compare monitors before buying or returning', 'Free alternative to camera-based tests'],
    sources: [WIKI('Response_time_(technology)', 'Response time (technology)'), WIKI('Refresh_rate', 'Refresh rate')],
  },
  'frame-rate-test': {
    answer:
      'An FPS test (frame rate test) shows the same motion at different frames per second (FPS) side by side: 15, 24, 30, 60 and your screen’s maximum. It makes the difference between choppy and smooth motion visible and shows why 24 FPS films and 60 FPS games feel so different.',
    features: [
      'Five lanes at 15, 24, 30, 60 FPS and max',
      'Adjustable speed to exaggerate or soften motion',
      'Shows your measured maximum refresh rate',
      'Pause and fullscreen controls',
    ],
    benefits: ['See what a high-refresh monitor adds', 'Explain FPS to students or viewers', 'Runs on any modern browser'],
    sources: [WIKI('Frame_rate', 'Frame rate'), WIKI('Refresh_rate', 'Refresh rate')],
  },
  'screen-color-test': {
    answer:
      'A screen color test shows color bars, RGB ramps and saturation patterns so you can judge how accurately your display reproduces color. Look for banding in gradients, clipped highlights, missing shades and a color tint to decide whether your picture settings need adjusting.',
    features: ['SMPTE-style color bars', 'Red, green, blue and gray ramps', 'Saturation and skin-tone patterns', 'Fullscreen view with keyboard stepping'],
    benefits: ['Spot banding and tint quickly', 'Compare picture modes side by side', 'Free, no calibration hardware needed'],
    sources: [WIKI('SMPTE_color_bars', 'SMPTE color bars'), WIKI('Color_banding', 'Color banding')],
  },
  'screen-resolution-test': {
    answer:
      'A screen resolution test shows your screen’s resolution in pixels, plus the browser viewport, device pixel ratio and color depth. Physical resolution is the CSS size multiplied by the pixel ratio, so a 1920 × 1080 laptop at 125% scaling reports 1536 × 864 CSS pixels.',
    features: ['Screen, viewport and physical resolution', 'Device pixel ratio and scaling', 'Color depth and orientation', 'Updates live when you resize or rotate'],
    benefits: ['Confirm you are really running 1080p, 1440p or 4K', 'Check Windows or macOS scaling', 'Instant, nothing to install'],
    sources: [WIKI('Display_resolution', 'Display resolution'), MDN('Window/devicePixelRatio', 'devicePixelRatio')],
  },
  'no-signal-screen': {
    answer:
      'TV color bars are the striped test pattern broadcasters used to line up pictures; a no signal screen is the message a TV shows when its HDMI or cable input is empty. Shown fullscreen, with color bars or a drifting message box, they make a convincing prank, film prop or placeholder for a spare display.',
    features: ['Classic color bars or plain blue background', 'Drifting "No Signal" box like a real TV', 'Optional 1 kHz test tone and custom input name', 'Fullscreen with hidden cursor'],
    benefits: ['Easy, harmless prank', 'Prop for films, escape rooms and sets', 'Works on smart TVs through the browser'],
    sources: [WIKI('SMPTE_color_bars', 'SMPTE color bars'), WIKI('Test_card', 'Test card')],
  },
  'white-noise-generator': {
    answer:
      'The white noise generator plays endless white noise in your browser with one tap: no app, no sign-up and no ads in the sound. Set the volume in decibels, add a sleep timer, soften the hiss with a filter and switch to pink or brown noise at any time.',
    features: ['Volume from −60 dB to 0 dB', 'Sleep timer: 15, 30, 60 or 90 minutes with a fade', 'Low-pass and high-pass filter with adjustable cutoff', 'Waveform, TV static or dark screen visuals'],
    benefits: ['Masks voices and sudden noises for focus or sleep', 'Turns any phone or laptop into a white noise machine', 'Free, with nothing to install'],
    sources: [WIKI('White_noise', 'White noise'), MDN('Web_Audio_API', 'Web Audio API')],
  },
  'brown-noise-generator': {
    answer:
      'The brown noise generator plays deep, rumbling brown noise in your browser as soon as you press Start: free, no app and no ads in the sound. Set a sleep timer, choose a dark screen for the bedroom and shape the rumble with a filter.',
    features: ['Brown noise generated in your browser, looping without clicks', 'Sleep timer up to 90 minutes with a gentle fade', 'Low-pass filter for an even deeper rumble', 'Space key to start and stop'],
    benefits: ['Plays all night with no ads interrupting', 'Works on phones, tablets and computers', 'Switch to white or pink noise in one tap'],
    sources: [WIKI('Brownian_noise', 'Brownian noise'), MDN('Web_Audio_API', 'Web Audio API')],
  },
  'pink-noise-generator': {
    answer:
      'The pink noise generator plays soft, balanced pink noise in your browser with one tap: free, with no app and no ads in the sound. Keep it running all night or set a sleep timer, and shape the tone with a low-pass or high-pass filter.',
    features: ['Pink noise generated live in your browser', 'Sleep timer: 15, 30, 60 or 90 minutes', 'Filter with cutoff from 30 Hz to 15 kHz', 'Waveform, TV static or dark screen visuals'],
    benefits: ['Gentle masking sound for sleep and study', 'A pink noise machine on any device', 'Free, with nothing to install'],
    sources: [WIKI('Pink_noise', 'Pink noise'), MDN('Web_Audio_API', 'Web Audio API')],
  },
  'broken-screen': {
    answer:
      'The broken screen prank fills your display with a realistic cracked-glass image: impact point, spreading cracks and optional LCD ink damage, with a crack sound. Leave it on a friend’s phone or computer, then reveal the joke by tapping the close button or pressing Esc.',
    features: ['Realistic glass cracks drawn fresh each time', 'Tap or click to add more impacts', 'LCD damage effect and crack sound', 'Wallpaper, lock screen or black backgrounds'],
    benefits: ['Classic harmless prank that looks real', 'Works on phones, tablets and PCs', 'No app install, nothing is changed on the device'],
  },
  'hacker-typer': {
    answer:
      'Hacker Typer turns random typing into realistic code on screen, so anyone can look like a movie hacker. Press any keys and lines of real-looking source code appear; trigger "Access Granted" or "Access Denied" pop-ups to complete the scene for pranks, videos or a laugh.',
    features: ['Real code streams out as you mash keys', 'Access Granted and Access Denied alerts', 'Adjustable typing speed and colors', 'Fullscreen terminal look'],
    benefits: ['Instant hacker scene for videos and pranks', 'Fun way to introduce kids to code', 'Free, nothing to install'],
  },
  'hacked-screen': {
    answer:
      'The hacked screen simulator shows a fake "your system has been hacked" warning with glitch text, scrolling logs, a progress bar and a countdown. It is a harmless prank: nothing is accessed or changed, and when the countdown ends a message reveals it was a joke.',
    features: ['Red alert and green terminal styles', 'Custom headline, logs and countdown', 'Optional siren sound', 'Ends with a clear "just kidding" message'],
    benefits: ['Harmless prank that looks dramatic', 'Prop for films, streams and escape rooms', 'Runs entirely in your browser'],
  },
  'zoom-lighting': {
    answer:
      'Zoom lighting turns your screen into a soft light source for video calls. Pick a color temperature from warm (about 2700 K) to daylight (6500 K), set the brightness and either fill the screen or use a light frame around your call window on Zoom, Google Meet or Microsoft Teams.',
    features: ['Color temperature slider in Kelvin with presets', 'Full screen or frame mode around your call', 'Brightness and custom color controls', 'Works on a second monitor or tablet'],
    benefits: ['Brighter, more even face lighting without buying a light', 'Warm light that flatters skin tones', 'Free and instant'],
    sources: [WIKI('Color_temperature', 'Color temperature')],
  },
  'ring-light': {
    answer:
      'An online ring light displays a bright ring on your screen that lights your face evenly from the front, like the lights photographers use. Adjust the ring size, thickness, warmth and brightness, then go fullscreen for selfies, video calls, makeup or product photos.',
    features: ['Adjustable ring size and thickness', 'Warm to cool color temperature', 'Brightness control and fullscreen', 'Works on phones, tablets and laptops'],
    benefits: ['Even, shadow-free light for free', 'Round catchlights in the eyes', 'Use any spare screen as a light'],
    sources: [WIKI('Ring_light', 'Ring light'), WIKI('Color_temperature', 'Color temperature')],
  },
  'visual-noise': {
    answer:
      'Visual noise fills the screen with animated, smoothly flowing noise patterns: soft fog, colorful plasma and fine grain. It is used as a background for videos and streams, as a reference for design textures, and as a calming visual to wind down with.',
    features: ['Fog, plasma and fine grain styles', 'Scale, speed and color palette controls', 'Pause to freeze a frame you like', 'Starts paused if you prefer reduced motion'],
    benefits: ['Calm moving backgrounds for edits and streams', 'Texture reference for design work', 'Free and lightweight'],
    sources: [WIKI('Noise_(video)', 'Noise (video)'), FLASH_GUIDELINE],
  },
  'color-cycle': {
    answer:
      'A color changing screen smoothly fades your display through the colors of the rainbow. Set the speed and brightness for party lights, mood lighting, relaxing ambience or a quick check that your display shows every hue smoothly without banding.',
    features: ['Smooth rainbow fade or step mode', 'Speed and brightness controls', 'Fullscreen with hidden cursor', 'Respects reduced-motion settings'],
    benefits: ['Instant party or mood lighting', 'Checks smooth color transitions', 'Free on any device'],
    sources: [FLASH_GUIDELINE],
  },
  'gradient-screen': {
    answer:
      'A gradient screen fills your display with a smooth blend between colors you choose. Set the colors, angle and type, use it as soft ambient light or a wallpaper, check your display for color banding, and download the gradient as an image.',
    features: ['Linear and radial gradients', 'Pick any colors and angle', 'Download as a high-resolution PNG', 'Fullscreen display'],
    benefits: ['Custom wallpapers in seconds', 'Good banding test for monitors', 'Free, no design app needed'],
    sources: [WIKI('Color_gradient', 'Color gradient'), WIKI('Color_banding', 'Color banding')],
  },
  'matrix-screensaver': {
    answer:
      'The Matrix screensaver shows columns of falling green characters, the "digital rain" made famous by the 1999 film The Matrix. It runs in your browser in fullscreen, and you can change the color, speed and character size for a desk, TV or streaming background.',
    features: ['Katakana, binary or alphanumeric characters', 'Speed, density and character size controls', 'Fullscreen with hidden cursor', 'Green, blue, red or gold rain'],
    benefits: ['Iconic look for idle screens and streams', 'No screensaver install on Windows or macOS', 'Free'],
    sources: [WIKI('Digital_rain', 'Digital rain'), WIKI('Screensaver')],
  },
  'flip-clock-screensaver': {
    answer:
      'A flip clock screensaver shows the time in large split-flap digits that flip over as each minute passes, like a retro alarm clock. Choose 12 or 24-hour time, show seconds and the date, and run it fullscreen on a spare monitor, tablet or TV.',
    features: ['Animated split-flap digits', '12 and 24-hour formats with seconds and date', 'Light and dark themes', 'Keeps the screen awake in fullscreen'],
    benefits: ['Turns an old tablet into a desk clock', 'Big, readable time across a room', 'Free, no app'],
    sources: [WIKI('Flip_clock', 'Flip clock'), WAKE_LOCK],
  },
  'dvd-screensaver': {
    answer:
      'The DVD screensaver is the classic bouncing logo from DVD players: it drifts across the screen, changes color each time it hits a wall, and occasionally lands perfectly in a corner. This version counts corner hits and lets you change the speed and logo size.',
    features: ['Color change on every wall hit', 'Corner hit counter and celebration', 'Speed and logo size controls', 'Fullscreen on any screen'],
    benefits: ['Nostalgic, oddly satisfying to watch', 'Great background for streams and waiting rooms', 'Free'],
    sources: [WIKI('Screensaver')],
  },
  'motivational-quote-screensaver': {
    answer:
      'A motivational quote screensaver shows a new inspirational quote every few seconds in large, readable type, with an optional clock. It suits office lobbies, classrooms, gyms and home screens where people glance at it during the day.',
    features: ['31 classic quotes from Seneca, Marcus Aurelius, Emerson and more', 'Rotation speed, themes and shuffle', 'Optional clock overlay', 'Fullscreen with keep-awake'],
    benefits: ['Positive display for shared spaces', 'Zero setup on smart TVs', 'Free'],
    sources: [WIKI('Screensaver')],
  },
  'countdown-timer': {
    answer:
      'A countdown timer counts down from a set time to zero in large fullscreen digits, then alerts you with a gentle flash and an optional chime. Set hours, minutes and seconds for classes, exams, meetings, presentations, workouts or cooking, and read it clearly from across the room.',
    features: ['Big fullscreen digits', 'Hours, minutes and seconds input with presets', 'Screen flash and optional chime at zero', 'Keeps time accurately even in background tabs'],
    benefits: ['Keeps meetings and classes on schedule', 'Readable from the back of a room', 'Free, no app'],
    sources: [WIKI('Timer')],
  },
  'contrast-checker': {
    answer:
      'A color contrast checker compares a text color with its background and gives the contrast ratio, from 1:1 (no contrast) to 21:1 (black on white). WCAG 2 asks for at least 4.5:1 for normal text and 3:1 for large text and UI components at level AA, and 7:1 and 4.5:1 at level AAA.',
    features: ['Color pickers and hex input', 'Contrast ratio with AA and AAA results', 'Live text, large text and button preview', 'Suggested passing color'],
    benefits: ['Meet WCAG contrast requirements', 'Readable text for everyone', 'Free, no sign-up'],
    sources: [
      { label: 'Understanding SC 1.4.3 Contrast (Minimum) (W3C)', url: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html' },
      { label: 'Understanding SC 1.4.11 Non-text Contrast (W3C)', url: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html' },
    ],
  },
  'pomodoro-timer': {
    answer:
      'A Pomodoro timer splits work into 25-minute focus sessions separated by 5-minute breaks, with a longer break after four sessions. The method, created by Francesco Cirillo in the late 1980s, helps you start tasks, avoid burnout and track how many focused blocks you finish.',
    features: ['25/5 focus and break cycle with long breaks', 'Adjustable lengths and auto-start', 'Chime and countdown in the browser tab', 'Session counter and progress ring'],
    benefits: ['Beat procrastination with short, clear goals', 'Built-in breaks reduce fatigue', 'Free, no account'],
    sources: [WIKI('Pomodoro_Technique', 'Pomodoro Technique')],
  },
  stopwatch: {
    answer:
      'An online stopwatch measures elapsed time from start to stop, to the hundredth of a second, in big fullscreen digits. Record laps for running, swimming, workouts and experiments, and the time stays accurate because it is measured against your device clock.',
    features: ['Start, stop, lap and reset', 'Hundredths of a second precision', 'Lap list with split times', 'Space bar and keyboard shortcuts'],
    benefits: ['Large display for gyms and classrooms', 'Accurate lap timing', 'Free, no sign-up'],
    sources: [WIKI('Stopwatch')],
  },
  'fake-windows-10-update': {
    answer:
      'A fake Windows 10 update screen copies the blue "Working on updates" screen with the spinning dots and a percentage that slowly climbs. Shown fullscreen, it looks like the PC is busy updating, which makes it a classic harmless prank. Press Esc to exit.',
    features: ['Spinning dots and rising percentage', 'Adjustable update speed', 'Fullscreen with hidden cursor', 'Exit any time with Esc'],
    benefits: ['Convincing, harmless office prank', 'Prop for videos and tutorials', 'Nothing is installed or changed'],
    sources: [WIKI('Windows_Update', 'Windows Update')],
  },
  'fake-windows-11-update': {
    answer:
      'A fake Windows 11 update screen shows the dark "Working on updates" screen with the spinner and a slowly rising percentage. Run it fullscreen to make a computer look busy updating, as a prank or a film prop, then press Esc to return.',
    features: ['Windows 11-style spinner and text', 'Adjustable speed and Pause', 'Fullscreen with hidden cursor', 'Esc to exit'],
    benefits: ['Realistic, harmless prank', 'Clean prop for screen recordings', 'Free'],
    sources: [WIKI('Windows_Update', 'Windows Update')],
  },
  'fake-blue-screen-of-death': {
    answer:
      'A fake blue screen of death (BSOD) imitates the Windows stop error screen: the sad face, "Your PC ran into a problem", a stop code and a progress counter. It is purely visual: nothing crashes, and you exit with Esc. Choose Windows 10, Windows 11, the new black screen or classic XP.',
    features: ['Windows 10, 11, black and classic XP styles', 'Real stop codes such as CRITICAL_PROCESS_DIED', 'Climbing percentage and QR-style block', 'Fullscreen with hidden cursor'],
    benefits: ['The most convincing computer prank there is', 'Accurate prop for films and tutorials', 'Completely harmless'],
    sources: [
      WIKI('Blue_screen_of_death', 'Blue screen of death'),
      { label: 'Bug check code reference (Microsoft Learn)', url: 'https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/bug-check-code-reference2' },
    ],
  },
  'fake-mac-update': {
    answer:
      'A fake Mac update screen shows the black macOS update screen with a progress bar and the time remaining. In fullscreen it looks like the Mac is installing an update, for a harmless prank or a video prop. Press Esc to exit.',
    features: ['macOS-style progress bar and time remaining', 'Adjustable update speed', 'Fullscreen with hidden cursor', 'Esc to exit'],
    benefits: ['Harmless prank for Mac users', 'Clean prop for videos', 'Free'],
    sources: [WIKI('MacOS', 'macOS')],
  },
  'fake-android-update': {
    answer:
      'A fake Android update screen shows a system update in progress with a progress bar. Open it in fullscreen on a phone or tablet to make it look like it is updating, then tap the close button to reveal the prank.',
    features: ['Android-style update screen and progress', 'Adjustable speed', 'Fullscreen on phones and tablets', 'Tap to exit'],
    benefits: ['Prank that works on any phone', 'No app install', 'Free'],
    sources: [WIKI('Android_(operating_system)', 'Android (operating system)')],
  },
  'fake-windows-xp-update': {
    answer:
      'A fake Windows XP update screen recreates the classic blue "Installing updates" screen from the early 2000s with its progress bar. Use it for nostalgic pranks, retro videos and film sets set in that era. Press Esc to exit.',
    features: ['Classic XP-era update look', 'Progress bar and status text', 'Fullscreen with hidden cursor', 'Esc to exit'],
    benefits: ['Instant nostalgia', 'Period-accurate prop', 'Free'],
    sources: [WIKI('Windows_XP', 'Windows XP')],
  },
  'fake-windows-xp-boot': {
    answer:
      'A fake Windows XP boot screen plays the classic startup screen with the moving blue loading bar on black. It is a quick retro prop for videos, films and pranks, and a nostalgic screensaver for fans of the 2001 operating system.',
    features: ['Classic boot screen with animated loading bar', 'Loops for as long as you like', 'Fullscreen with hidden cursor', 'Esc to exit'],
    benefits: ['Retro prop in one click', 'Nostalgic screensaver', 'Free'],
    sources: [WIKI('Windows_XP', 'Windows XP')],
  },
  'fake-chrome-os-update': {
    answer:
      'A fake ChromeOS update screen shows a Chromebook-style update in progress. Run it fullscreen on a Chromebook or any computer to make it look like the system is updating, as a harmless prank or a demo prop, then press Esc to exit.',
    features: ['ChromeOS-style update screen', 'Adjustable progress speed', 'Fullscreen with hidden cursor', 'Esc to exit'],
    benefits: ['Works on school and work Chromebooks', 'Harmless prank', 'Free'],
    sources: [WIKI('ChromeOS')],
  },
  'fake-ubuntu-update': {
    answer:
      'A fake Ubuntu update screen shows Linux package updates scrolling in a terminal with progress lines. It looks like a real system upgrade, which makes it a fun prank for developers and a believable prop for videos about Linux.',
    features: ['Scrolling apt-style update output', 'Ubuntu-like terminal colors', 'Fullscreen display', 'Esc to exit'],
    benefits: ['Developer-friendly prank', 'Realistic terminal prop', 'Free'],
    sources: [WIKI('Ubuntu')],
  },
  'fake-zoom-meeting': {
    answer:
      'A fake Zoom meeting screen shows a Zoom-style video call with a grid of participants, a toolbar and your own camera preview. It is for pranks, film props, screenshots and practising on camera. Your camera feed stays on your device and is never recorded or uploaded.',
    features: ['Participant grid with names and mute icons', 'Your live camera preview, also in fullscreen', 'Recording badge and Zoom-style toolbar', 'Editable meeting title'],
    benefits: ['Realistic call prop for videos', 'Practise presenting on camera', 'Private: nothing leaves your device'],
    sources: [MDN('MediaDevices/getUserMedia', 'getUserMedia()')],
  },
  'fake-teams-meeting': {
    answer:
      'A fake Microsoft Teams meeting screen shows a Teams-style call with participant tiles, the meeting toolbar and your camera preview. Use it for pranks, film props or rehearsing a presentation. The camera preview stays in your browser and is never recorded.',
    features: ['Teams-style tiles and controls', 'Live camera preview in fullscreen', 'Meeting timer', 'Editable meeting title'],
    benefits: ['Believable office prop', 'Rehearse calls safely', 'Private and free'],
    sources: [MDN('MediaDevices/getUserMedia', 'getUserMedia()')],
  },
  'fake-google-meet': {
    answer:
      'A fake Google Meet screen shows a Meet-style video call with participant tiles, the bottom control bar and your own camera preview. It works for pranks, videos and presentation practice, and your camera image never leaves your device.',
    features: ['Meet-style tiles and control bar', 'Live camera preview in fullscreen', 'Call timer and editable meeting title', 'No Google sign-in required'],
    benefits: ['Realistic prop for films and tutorials', 'Practise on camera', 'Private and free'],
    sources: [MDN('MediaDevices/getUserMedia', 'getUserMedia()')],
  },
  'fake-slack-huddle': {
    answer:
      'A fake Slack huddle screen shows a Slack-style audio and video huddle with participants and controls. Use it as a prank, a screenshot prop for presentations or a film set background, with nothing connected to a real Slack workspace.',
    features: ['Huddle-style participant view', 'Speaking indicators and controls', 'Fullscreen display', 'Editable huddle title'],
    benefits: ['Quick prop for remote-work videos', 'Harmless prank', 'Free'],
  },
  'fake-radar-screen': {
    answer:
      'A fake radar screen shows a classic circular radar display, called a plan position indicator, with a rotating sweep line, fading contacts and range rings. Readouts and optional pings make it a convincing prop for films, escape rooms, games and sci-fi pranks.',
    features: ['Rotating sweep with afterglow', 'Moving contacts and range rings', 'Bearing and range readouts', 'Optional sonar-style ping'],
    benefits: ['Instant sci-fi or military prop', 'Great for escape rooms and stage sets', 'Free and offline-friendly'],
    sources: [WIKI('Plan_position_indicator', 'Plan position indicator'), WIKI('Radar')],
  },
}

/** The answer-first block in `language`: a translation where one exists, the English text on English pages. */
export function getToolGlance(slug: string, language: string): ToolGlance | undefined {
  const english = TOOL_GLANCE[slug]
  if (!english) return undefined
  if (language === 'en') return english
  // Color screens without a hand-written translation use the per-language color template.
  const color = SCREEN_COLORS.find((item) => `${item.id}-screen` === slug)
  const translated = toolContentTranslations(language)?.[slug]?.glance ?? (color && colorGlanceFor(color.id, color.hex, language))
  return translated && { ...translated, sources: english.sources }
}
