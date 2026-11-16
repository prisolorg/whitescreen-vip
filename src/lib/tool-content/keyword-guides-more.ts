import type { ComponentType } from 'react'
import { RingLightGuide } from '@/components/home/ring-light-guide'
import { StopwatchGuide } from '@/components/home/stopwatch-guide'
import { RefreshRateGuide } from '@/components/home/refresh-rate-guide'
import { DeadPixelGuide } from '@/components/home/dead-pixel-guide'
import { TouchScreenGuide } from '@/components/home/touch-screen-guide'
import { MonitorGhostingGuide } from '@/components/home/monitor-ghosting-guide'
import { MonitorTestGuide } from '@/components/home/monitor-test-guide'
import { ScreenBurnInGuide } from '@/components/home/screen-burn-in-guide'
import { ScreenResolutionGuide } from '@/components/home/screen-resolution-guide'
import { ScreenColorGuide } from '@/components/home/screen-color-guide'
import { FrameRateGuide } from '@/components/home/frame-rate-guide'
import { OledGrayGuide } from '@/components/home/oled-gray-guide'
import { HackedScreenGuide } from '@/components/home/hacked-screen-guide'
import { NoSignalGuide } from '@/components/home/no-signal-guide'
import { ContrastCheckerGuide } from '@/components/home/contrast-checker-guide'

type Faq = { question: string; answer: string }

/** More keyword-led tool guides (merged into TOOL_KEYWORD_GUIDES). */
export const MORE_KEYWORD_GUIDES: Record<string, { Guide: ComponentType; faqs: Faq[] }> = {
  'ring-light': {
    Guide: RingLightGuide,
    faqs: [
      {
        question: 'Can a screen replace a real ring light?',
        answer:
          'For video calls, selfies and makeup, a bright screen works surprisingly well. A real LED light is brighter and better for filming in a dark room or from far away.',
      },
      {
        question: 'Does it work on my phone?',
        answer: 'Yes. Open it on a phone or tablet, turn the brightness up and double-tap for fullscreen, then point the screen at your face.',
      },
      {
        question: 'Which color is best for makeup?',
        answer: 'White at full brightness, so colors look true. Open More to make the white warmer or cooler to match your room.',
      },
    ],
  },
  stopwatch: {
    Guide: StopwatchGuide,
    faqs: [
      {
        question: 'How accurate is it?',
        answer:
          'It uses your browser’s high-precision clock and shows time to the hundredth of a second. If the tab goes to the background, the time is still correct when you return.',
      },
      {
        question: 'What are the keyboard shortcuts?',
        answer: 'Space starts and pauses, L records a lap and R resets to zero.',
      },
      {
        question: 'Can I save my laps?',
        answer: 'Yes. Press Copy Laps to copy every lap with its split and total time, then paste it into a spreadsheet, notes or a message.',
      },
    ],
  },
  'screen-refresh-rate-test': {
    Guide: RefreshRateGuide,
    faqs: [
      {
        question: 'How accurate is the refresh rate test?',
        answer:
          'Very close for most screens. It times hundreds of frames and rounds to the nearest common rate. Busy tabs, battery saving or a slow computer can make it read lower, so close other apps and press Measure again.',
      },
      {
        question: 'Why does my 144 Hz monitor show 60 Hz?',
        answer:
          'The display is probably set to 60 Hz. Choose the higher rate in your display settings and use a cable and port that support it, such as DisplayPort or a high-speed HDMI cable.',
      },
      {
        question: 'Does the refresh rate test work on phones?',
        answer: 'Yes. Open it in your phone’s browser. Turn off power-saving mode first, because it often limits the screen to 60 Hz.',
      },
    ],
  },
  'dead-pixel-test': {
    Guide: DeadPixelGuide,
    faqs: [
      {
        question: 'How long does a dead pixel test take?',
        answer: 'About a minute. Step through all 9 colors in fullscreen and look over the whole screen on each one.',
      },
      {
        question: 'Is one dead pixel normal?',
        answer:
          'It happens, and many makers only replace a screen after a set number of faulty pixels. Check the warranty policy for your monitor, laptop or phone.',
      },
      {
        question: 'What is the difference between a dead pixel and a stuck pixel?',
        answer:
          'A dead pixel never lights up and looks black. A stuck pixel stays on one color, like red, green or blue, and can sometimes be fixed by flashing colors over it.',
      },
    ],
  },
  'touch-screen-test': {
    Guide: TouchScreenGuide,
    faqs: [
      {
        question: 'How do I test my touch screen for dead spots?',
        answer: 'Choose Dead zone grid and swipe over every square. Squares that stay dark after you touch them are dead spots.',
      },
      {
        question: 'Does the touch screen test work on iPhone?',
        answer: 'Yes. It works in Safari and other iPhone browsers, as well as on Android phones, tablets and touch-screen laptops.',
      },
      {
        question: 'How many touch points should my phone support?',
        answer: 'Most phones and tablets read 5 to 10 at once. Use Multi-touch and watch the Max count to see how many yours handles.',
      },
    ],
  },
  'monitor-ghosting-test': {
    Guide: MonitorGhostingGuide,
    faqs: [
      {
        question: 'Does every monitor show some ghosting?',
        answer:
          'Most LCD monitors show a little at high speeds. It is a problem when the trail is long at normal speeds or a bright halo appears. Then adjust overdrive and run the monitor ghosting test again.',
      },
      {
        question: 'Is ghosting the same as input lag?',
        answer: 'No. Ghosting is a visual trail from slow pixels; input lag is a delay between your mouse or controller and the screen. This test shows ghosting only.',
      },
      {
        question: 'Is this an anti-ghosting test for keyboards?',
        answer:
          'No. Keyboard anti-ghosting is about registering many keys pressed at once. This monitor ghosting test checks motion trails on your display.',
      },
    ],
  },
  'monitor-test': {
    Guide: MonitorTestGuide,
    faqs: [
      {
        question: 'Is the monitor test free and online?',
        answer: 'Yes. It runs in your browser on any monitor, laptop, TV or phone, with no download or sign-up.',
      },
      {
        question: 'How do I test a new monitor?',
        answer:
          'Run the monitor test patterns in fullscreen at native resolution, then the dead pixel test and the uniformity test. Doing this while you can still return it is the best time.',
      },
      {
        question: 'Can a monitor test calibrate my screen?',
        answer:
          'It helps you set brightness, contrast and gamma by eye. Accurate calibration needs a hardware colorimeter or your system’s calibration tool.',
      },
    ],
  },
  'screen-burn-in-test': {
    Guide: ScreenBurnInGuide,
    faqs: [
      {
        question: 'How long does it take for a screen to burn in?',
        answer:
          'Usually hundreds or thousands of hours of the same static image, often at high brightness. LCD image retention can appear after a few hours but fades.',
      },
      {
        question: 'How long should I run the burn-in fixer?',
        answer: 'Start with 10 to 30 minutes, then run the screen burn-in test again. Repeat a few times; if nothing changes, the burn-in is likely permanent.',
      },
      {
        question: 'Does the screen burn-in test work on phones?',
        answer: 'Yes. Open it in your phone browser, turn the brightness up and double-tap for fullscreen. For OLED and AMOLED phones, also try the OLED burn-in test.',
      },
    ],
  },
  'screen-resolution-test': {
    Guide: ScreenResolutionGuide,
    faqs: [
      {
        question: 'Why is my screen resolution lower than my monitor’s?',
        answer:
          'Display scaling. At 150% scaling, a 2560 × 1440 monitor reports 1707 × 960 to the browser. The Physical pixels reading multiplies by the pixel ratio to show the real count.',
      },
      {
        question: 'Is the screen resolution test accurate?',
        answer: 'It shows exactly what your browser reports. Keep zoom at 100% so the physical pixel count matches your display.',
      },
      {
        question: 'What should my resolution be?',
        answer: 'Your monitor’s native resolution, marked Recommended in Windows display settings. Anything else can look blurry.',
      },
    ],
  },
  'screen-color-test': {
    Guide: ScreenColorGuide,
    faqs: [
      {
        question: 'Is the screen color test free?',
        answer: 'Yes. It runs in your browser on any monitor, laptop, TV or phone, with no download or sign-up.',
      },
      {
        question: 'Why do colors look different on my phone and monitor?',
        answer:
          'Screens differ in panel type, color mode and calibration. Run the screen color test on both with night mode off and compare the RGB ramps.',
      },
      {
        question: 'Can a color test fix my screen colors?',
        answer: 'No, it shows problems. Fix tints with your display’s color temperature or picture mode, or your system’s calibration tool.',
      },
    ],
  },
  'frame-rate-test': {
    Guide: FrameRateGuide,
    faqs: [
      {
        question: 'Why does the FPS test show 60 on my 144 Hz monitor?',
        answer:
          'The monitor is probably set to 60 Hz, the cable can’t carry more, or the laptop is saving power. Check your display settings and run the FPS test again.',
      },
      {
        question: 'Can the human eye see more than 60 FPS?',
        answer: 'Yes. Most people notice smoother motion at 120 FPS and beyond. Compare the 60 FPS lane with the max lane on a high refresh rate screen.',
      },
      {
        question: 'Does the FPS test work on phones?',
        answer: 'Yes. Open it in your phone browser and double-tap for fullscreen. Phones with 90 or 120 Hz screens show a smoother max lane.',
      },
    ],
  },
  'oled-gray-test': {
    Guide: OledGrayGuide,
    faqs: [
      {
        question: 'Is some mura normal on an OLED?',
        answer: 'Yes. Faint patches on the 1% to 5% fields are common. It is only a problem if you notice it in normal movies and games.',
      },
      {
        question: 'Does the OLED gray test work on LCD screens?',
        answer: 'Yes, but LCDs show backlight glow and bleed on dark gray instead. For those, the screen uniformity test is a better fit.',
      },
      {
        question: 'What brightness should I use?',
        answer: 'Medium brightness in a dark room. Very high brightness can hide near-black problems, and very low can exaggerate them.',
      },
    ],
  },
  'hacked-screen': {
    Guide: HackedScreenGuide,
    faqs: [
      {
        question: 'Is the hacked screen prank safe?',
        answer: 'Yes. It is a web page that only shows animations. It installs nothing and does not touch files, the webcam or the network.',
      },
      {
        question: 'How do I close the hacked screen?',
        answer: 'Press Esc to leave fullscreen, then close the tab.',
      },
      {
        question: 'Does it work on phones?',
        answer: 'Yes. Open it in a phone browser and double-tap for fullscreen. The siren needs a tap first, as phones block sound until you interact.',
      },
    ],
  },
  'contrast-checker': {
    Guide: ContrastCheckerGuide,
    faqs: [
      {
        question: 'What is a good contrast ratio?',
        answer: 'At least 4.5:1 for normal text and 3:1 for large text and UI components (WCAG AA). 7:1 or more is excellent and meets AAA.',
      },
      {
        question: 'Does the color contrast checker support WCAG 2.2?',
        answer: 'Yes. The contrast rules and formula are the same in WCAG 2.0, 2.1 and 2.2, so the results apply to all three.',
      },
      {
        question: 'Can I check colors with transparency?',
        answer: 'Not directly. Enter the final color you see on screen, after any transparency is blended with the background.',
      },
    ],
  },
  'no-signal-screen': {
    Guide: NoSignalGuide,
    faqs: [
      {
        question: 'How do I show the no signal screen on my TV?',
        answer: 'Open the page in your TV’s browser, or cast or plug in a laptop, then press F or tap Fullscreen.',
      },
      {
        question: 'Can I change the NO SIGNAL text?',
        answer: 'Yes. Open More to type your own message (up to 24 characters) and input name, such as HDMI 2 or AV.',
      },
      {
        question: 'What is the beep on TV color bars?',
        answer: 'A steady 1 kHz test tone that broadcasters played with color bars to line up audio levels. Turn it on with the 1 kHz tone button.',
      },
    ],
  },
}
