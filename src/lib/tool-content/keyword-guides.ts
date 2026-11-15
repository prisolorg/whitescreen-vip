import type { ComponentType } from 'react'
import { BrokenScreenGuide } from '@/components/home/broken-screen-guide'
import { DvdScreensaverGuide } from '@/components/home/dvd-screensaver-guide'
import { FakeZoomMeetingGuide } from '@/components/home/fake-zoom-meeting-guide'

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
}
