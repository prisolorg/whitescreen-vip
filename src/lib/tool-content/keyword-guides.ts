import type { ComponentType } from 'react'
import { MORE_KEYWORD_GUIDES } from '@/lib/tool-content/keyword-guides-more'
import { BrokenScreenGuide } from '@/components/home/broken-screen-guide'
import { DvdScreensaverGuide } from '@/components/home/dvd-screensaver-guide'
import { FakeZoomMeetingGuide } from '@/components/home/fake-zoom-meeting-guide'
import { FakeWindowsUpdateGuide } from '@/components/home/fake-windows-update-guide'
import { FakeBsodGuide } from '@/components/home/fake-bsod-guide'
import { FakeWindows11UpdateGuide } from '@/components/home/fake-windows-11-update-guide'
import { FakeMacUpdateGuide } from '@/components/home/fake-mac-update-guide'
import { PomodoroTimerGuide } from '@/components/home/pomodoro-timer-guide'
import { FlipClockGuide } from '@/components/home/flip-clock-guide'
import { ZoomLightingGuide } from '@/components/home/zoom-lighting-guide'
import { CountdownTimerGuide } from '@/components/home/countdown-timer-guide'

type Faq = { question: string; answer: string }

/**
 * Tool pages with keyword-led English content. The guide replaces the generic About, How-to and Common uses
 * sections, and these FAQs replace the generic ones (other languages keep their translated content).
 */
export const TOOL_KEYWORD_GUIDES: Record<string, { Guide: ComponentType; faqs: Faq[] }> = {
  'dvd-screensaver': {
    Guide: DvdScreensaverGuide,
    faqs: [
      {
        question: 'Is this the official DVD logo?',
        answer:
          'No. The DVD screensaver draws a DVD-style logo in your browser and is not affiliated with the DVD Format/Logo Licensing Corporation, which owns the DVD Video logo.',
      },
      {
        question: 'Why does the DVD screensaver logo change color?',
        answer:
          'Like the classic DVD player screensaver, the logo picks a new color every time it touches an edge, and it never repeats the same color twice in a row.',
      },
      {
        question: 'Can I use the DVD screensaver as a real screensaver on Windows or Mac?',
        answer:
          'It runs in your browser instead of installing as a system screensaver. Open it fullscreen whenever your computer is idle; your system’s own screensaver and sleep settings still apply.',
      },
    ],
  },
  'broken-screen': {
    Guide: BrokenScreenGuide,
    faqs: [
      {
        question: 'Can the broken screen prank damage my screen?',
        answer: 'No. It is only an image drawn in your browser. Press Esc or close the tab and the screen is back to normal.',
      },
      {
        question: 'Does the broken screen prank work on a Chromebook?',
        answer:
          'Yes. It works in any modern browser, including Chromebooks, Windows and Mac computers, phones, tablets and smart TV browsers. Nothing is installed.',
      },
      {
        question: 'How do I use a cracked screen prank responsibly?',
        answer: 'Keep it short, choose someone who will laugh, never use it to get money or information, and reveal the joke right away.',
      },
    ],
  },
  'fake-zoom-meeting': {
    Guide: FakeZoomMeetingGuide,
    faqs: [
      {
        question: 'Is this fake Zoom meeting connected to Zoom?',
        answer:
          'No. It is an independent Zoom-style simulation and is not affiliated with Zoom Video Communications. Nobody can join, and nothing is sent anywhere.',
      },
      {
        question: 'Does the fake Zoom meeting use my camera?',
        answer:
          'Only if you turn on Enable Camera Preview. Your video appears in your own tile and never leaves your device; nothing is recorded or uploaded. The microphone is never used.',
      },
      {
        question: 'Does the fake Zoom meeting have audio?',
        answer: 'No, it is silent. For a fake meeting video, add sound or chatter in your video editor.',
      },
    ],
  },
  'fake-windows-10-update': {
    Guide: FakeWindowsUpdateGuide,
    faqs: [
      {
        question: 'Can a fake Windows update screen harm my computer?',
        answer: 'No. It is only a page in your browser. Nothing is installed or changed, and pressing Esc or closing the tab ends it.',
      },
      {
        question: 'Can I make the fake Windows update look stuck?',
        answer: 'Yes. Press Pause and the percentage stops where it is. Open More to change how fast it climbs.',
      },
      {
        question: 'Does the fake Windows update work on a Mac or Chromebook?',
        answer: 'Yes. It runs in any modern browser, so you can show a fake Windows update on a Mac, Chromebook or tablet too.',
      },
    ],
  },
  'fake-blue-screen-of-death': {
    Guide: FakeBsodGuide,
    faqs: [
      {
        question: 'Can a fake blue screen of death harm my computer?',
        answer: 'No. It is an image in your browser. Your computer keeps running normally, and pressing Esc or closing the tab ends it.',
      },
      {
        question: 'Why is the blue screen of death black now?',
        answer: 'Newer Windows 11 releases show the crash screen in black instead of blue. Choose Black (new) in the Style menu for that look.',
      },
      {
        question: 'Can I change the stop code on the blue screen of death?',
        answer: 'Yes. Open More and pick a stop code, such as CRITICAL_PROCESS_DIED or MEMORY_MANAGEMENT. It updates on the screen straight away.',
      },
    ],
  },  'fake-windows-11-update': {
    Guide: FakeWindows11UpdateGuide,
    faqs: [
      {
        question: 'Is the fake Windows 11 update real?',
        answer: 'No. It is a page in your browser that looks like the Windows 11 update screen. Nothing is installed, and Esc or closing the tab ends it.',
      },
      {
        question: 'How long does the fake Windows 11 update take?',
        answer: 'It never finishes: the percentage restarts after 100%. Use Pause to hold it on one number, or open More to change the speed.',
      },
      {
        question: 'Can I run the fake Windows 11 update on a Mac or Chromebook?',
        answer: 'Yes. It runs in any modern browser, so the Windows 11 update screen works on Macs, Chromebooks, tablets and phones too.',
      },
    ],
  },
  'fake-mac-update': {
    Guide: FakeMacUpdateGuide,
    faqs: [
      {
        question: 'Is this fake Mac update made by Apple?',
        answer: 'No. It is an independent simulation of a macOS-style update screen and is not affiliated with Apple. Nothing is installed or changed on your Mac.',
      },
      {
        question: 'Can I make the fake Mac update take hours?',
        answer: 'Set the update time to 120 minutes under More. When the bar fills, the screen restarts and the update begins again, so it can run as long as you like.',
      },
    ],
  },
  'pomodoro-timer': {
    Guide: PomodoroTimerGuide,
    faqs: [
      {
        question: 'What is a Pomodoro timer?',
        answer:
          'A Pomodoro timer splits work into focused blocks, usually 25 minutes, with a short break after each one and a longer break after four. It follows the Pomodoro Technique by Francesco Cirillo.',
      },
      {
        question: 'How long is one pomodoro?',
        answer: 'Traditionally 25 minutes of focus followed by a 5-minute break. You can change both, for example to 50 and 10 minutes, under More.',
      },
      {
        question: 'Does the Pomodoro timer work on my phone?',
        answer: 'Yes. Open it in your phone’s browser and press Start. Keep the tab open so you hear the chime when a phase ends.',
      },
      {
        question: 'Is this Pomodoro timer free?',
        answer: 'Yes. It is completely free, with no sign-up, no app and no ads in the timer itself.',
      },
    ],
  },
  'flip-clock-screensaver': {
    Guide: FlipClockGuide,
    faqs: [
      {
        question: 'Does the flip clock keep my screen on?',
        answer: 'Yes, in fullscreen. Supported browsers keep the screen awake while it is fullscreen, so it can run all day as a desk clock.',
      },
      {
        question: 'Can I show 12-hour time?',
        answer: 'Yes. Turn off 24-Hour Format and the clock switches to 12-hour time with an AM or PM label.',
      },
      {
        question: 'Can I use it as a screensaver on Windows or Mac?',
        answer: 'It runs in your browser rather than installing as a system screensaver. Open it fullscreen on a spare screen or whenever your computer is idle.',
      },
    ],
  },
  'zoom-lighting': {
    Guide: ZoomLightingGuide,
    faqs: [
      {
        question: 'Can I use Zoom lighting on the same laptop as my call?',
        answer:
          'It works best on a second screen, tablet or phone placed behind your webcam, so the call stays visible. On a single laptop, fullscreen lighting would cover your Zoom window.',
      },
      {
        question: 'What is the best color temperature for Zoom lighting?',
        answer: 'Neutral (4500 K) suits most rooms. Choose Daylight (6500 K) to match window light, or Warm (3000 K) for a softer evening look.',
      },
      {
        question: 'Is it free?',
        answer: 'Yes. It is free in any browser, with no app or sign-up, and works with Zoom, Teams, Google Meet and any other video call.',
      },
    ],
  },
  'countdown-timer': {
    Guide: CountdownTimerGuide,
    faqs: [
      {
        question: 'What lengths can I count down?',
        answer:
          'Any length up to 99 hours, 59 minutes and 59 seconds. Pick 1, 5, 10, 15, 25, 45 or 60 minutes from the Timer menu, or click the hours, minutes and seconds on the screen and type your own time, then press Start.',
      },
      {
        question: 'Does it make a sound when time is up?',
        answer: 'Yes. A chime plays and the screen flashes red when time runs out. Turn the chime off under More for a silent countdown.',
      },
      {
        question: 'Can the countdown timer count down to a date?',
        answer:
          'Yes. Choose Count down to a date in the Timer menu, pick the date and time, add an event name if you like, and press Start. It shows the days, hours, minutes and seconds left, and remembers your countdown in this browser when you come back.',
      },
    ],
  },
  ...MORE_KEYWORD_GUIDES,
}
