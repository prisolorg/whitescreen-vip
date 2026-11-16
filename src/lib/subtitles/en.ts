/**
 * One actionable line under the H1 of every tool, colour screen and background page (English).
 * Other languages keep the generic "Click Fullscreen…" line until these are translated.
 * Small on purpose: hydrated tool pages import it.
 */
export const TOOL_SUBTITLE_EN: Record<string, string> = {
  // Colour screens (also the home page, which is the white screen)
  'white-screen': 'Turn your screen bright white for light, cleaning or dead-pixel checks.',
  'black-screen': 'Go pure black to spot stuck pixels, backlight bleed or dim a screen.',
  'red-screen': 'Fill your screen with red to check red subpixels or set a mood light.',
  'green-screen': 'Use a bright green screen as a chroma key backdrop or a pixel check.',
  'blue-screen': 'Fill your screen with blue for chroma keying or a blue subpixel check.',
  'yellow-screen': 'Turn your screen yellow for warm light or a red-and-green pixel check.',
  'orange-screen': 'Fill your room with warm orange light, or use it as a photo backdrop.',
  'pink-screen': 'Light your face with soft pink for selfies, calls or mood lighting.',
  'purple-screen': 'Set a purple glow for room ambience or a streaming backdrop.',
  'cyan-screen': 'Show cyan to check green and blue subpixels at the same time.',
  'magenta-screen': 'Show magenta to check red and blue subpixels and spot color tints.',
  'gray-screen': 'Show neutral gray to reveal clouding, banding and dirty screen effect.',

  // Screen tests
  'dead-pixel-test': 'Tap through 9 colors to find dead, stuck or hot pixels.',
  'screen-uniformity-test': 'Check even gray fields for clouding, vignetting and backlight bleed.',
  'monitor-test': 'Step through 7 test patterns to check color, gamma and sharpness.',
  'oled-gray-test': 'Step through near-black grays to spot OLED banding and mura.',
  'oled-burn-in-test': 'Cycle solid colors to spot burn-in and image retention on OLED.',
  'screen-burn-in-test': 'Check for ghost images, then run the fixer to clear retention.',
  'touch-screen-test': 'Swipe the grid to find dead zones and count multi-touch points.',
  'screen-refresh-rate-test': 'See your refresh rate in Hz as soon as the page loads.',
  'monitor-ghosting-test': 'Raise the speed until trails appear to judge ghosting and overdrive.',
  'frame-rate-test': 'Compare 15, 24, 30 and 60 FPS with your screen’s max, side by side.',
  'screen-color-test': 'Step through color bars and RGB ramps to check tint and banding.',
  'screen-resolution-test': 'See your screen resolution and pixel ratio instantly, no clicks needed.',

  // Effects and sound
  'no-signal-screen': 'Pick color bars, bouncing or blue, then go fullscreen on a TV.',
  'white-noise-generator': 'Start steady white noise and set a sleep timer for the night.',
  'brown-noise-generator': 'Start deep brown noise to focus or sleep, with a sleep timer.',
  'pink-noise-generator': 'Start rain-like pink noise and shape it with filters and volume.',
  'broken-screen': 'Tap anywhere to shatter the glass, then hand over the device.',
  'hacker-typer': 'Mash any key and watch movie-style hacker code appear.',
  'hacked-screen': 'Pick red or green, go fullscreen and leave it for a friend to find.',
  'visual-noise': 'Fill the screen with animated pixel grain in mono, color or tint.',
  'color-cycle': 'Let your screen glide through every color, or step through them yourself.',
  'gradient-screen': 'Pick colors and an angle to build a moving fullscreen gradient.',

  // Lighting
  'zoom-lighting': 'Turn your screen into a soft key light for your next video call.',
  'ring-light': 'Light your face with a glowing on-screen ring; adjust size and warmth.',

  // Screensavers
  'matrix-screensaver': 'Run falling digital rain and tune its speed, color and characters.',
  'flip-clock-screensaver': 'Turn any spare screen into a big live flip clock.',
  'dvd-screensaver': 'Watch the DVD logo bounce and wait for a perfect corner hit.',
  'motivational-quote-screensaver': 'Show rotating motivational quotes in large type on a spare screen.',

  // Timers and utilities
  'countdown-timer': 'Choose a preset or set your own time, then press Start.',
  'pomodoro-timer': 'Press Start for 25 minutes of focus, then take a 5-minute break.',
  stopwatch: 'Press Space to start timing and L to record a lap.',
  'contrast-checker': 'Pick text and background colors to see if they pass WCAG.',

  // Fake screens
  'fake-windows-10-update': 'Go fullscreen with a fake Windows 10 update to fool a friend.',
  'fake-windows-11-update': 'Show the dark Windows 11 update screen in fullscreen as a prank.',
  'fake-blue-screen-of-death': 'Go fullscreen with a fake crash screen, then reveal the joke.',
  'fake-mac-update': 'Show a fake macOS update with a slim progress bar in fullscreen.',
  'fake-android-update': 'Open on a phone to show a fake Android system update.',
  'fake-windows-xp-update': 'Bring back the 2000s with a fake Windows XP setup screen.',
  'fake-windows-xp-boot': 'Play the classic Windows XP boot screen in fullscreen.',
  'fake-chrome-os-update': 'Show a fake Chromebook update screen with changing status steps.',
  'fake-ubuntu-update': 'Watch fake Ubuntu package logs scroll in a terminal upgrade.',
  'fake-zoom-meeting': 'Set up a fake Zoom-style call screen for a prank or a video prop.',
  'fake-teams-meeting': 'Show a Teams-style meeting screen with participant tiles.',
  'fake-google-meet': 'Show a Meet-style call with tiles and a speaking outline.',
  'fake-slack-huddle': 'Show a Slack-style huddle with speaking rings and a live timer.',
  'fake-radar-screen': 'Run a sci-fi radar sweep with blips for a prop or backdrop.',
}

export const BACKGROUND_SUBTITLE_EN: Record<string, string> = {
  'white-background': 'Download a pure white background in 4K, phone or custom size.',
  'black-background': 'Get a true black background as a PNG or as CSS, in any size.',
  'orange-background': 'Download a warm orange background for your phone or desktop.',
  'gradient-background': 'Download this smooth gradient as a PNG, or copy it as CSS.',
  'neon-background': 'Save this neon glow as a 4K wallpaper or a phone background.',
  'red-background': 'Download a bold red background in any size, or copy the CSS.',
  'yellow-background': 'Download a bright yellow background for slides, phones or desktops.',
  'blue-background': 'Download a clean blue background as a PNG in 4K or phone size.',
  'green-screen-background': 'Show this green screen fullscreen as a chroma key, or download it.',
  'virtual-office': 'Download a virtual office background for your next video call.',
  'graph-paper': 'Download a graph paper grid as a PNG, or copy it as CSS.',
  'pink-background': 'Download a pink background for your phone, desktop or stories.',
  'light-pink-background': 'Download a soft light pink background in any size you need.',
  'green-background': 'Download a fresh green background as a PNG, or copy the CSS.',
  'purple-background': 'Download a rich purple background for your phone or desktop.',
  'dark-background': 'Download a dark background that is easy on the eyes, in any size.',
  'gold-background': 'Download a gold gradient background for invites, slides or phones.',
  'aesthetic-background': 'Download a soft aesthetic background for your phone or desktop.',
  'beige-background': 'Download a warm beige background as a PNG, or copy the CSS.',
  'pastel-background': 'Download a pastel gradient background for phones, slides or posts.',
}
