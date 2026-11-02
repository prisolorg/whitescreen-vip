import type { ToolContent, ToolFaq } from './types'

const SAFETY_FAQ: ToolFaq = {
  question: 'Is this a real update or anything harmful?',
  answer:
    'No. It is a harmless visual simulation that runs in a normal browser tab. It does not change your device, install anything, or ask for any information. Press Esc to exit at any time.',
}

const AFFILIATION_FAQ = (brand: string): ToolFaq => ({
  question: `Is this affiliated with ${brand}?`,
  answer: `No. This page is an independent, entertainment-only recreation and is not affiliated with, endorsed by, or sponsored by ${brand}. Product names belong to their respective owners.`,
})

const EXIT_FAQ: ToolFaq = {
  question: 'How do I exit the fake screen?',
  answer:
    'Press Esc, or move the mouse or tap the screen to reveal the close button. Closing the tab also works.',
}

type UpdateOptions = {
  name: string
  brand: string
  intro: string
  extraFaq: ToolFaq
}

function updateContent({ name, brand, intro, extraFaq }: UpdateOptions): ToolContent {
  return {
    title: `Fake ${name} Update Screen – Prank Simulation`,
    intro,
    steps: [
      'Choose the starting percentage and how long the progress should take.',
      'Click Fullscreen or press F so the simulation fills the screen and hides the browser.',
      'Walk away and let the progress run. Some screens allow a fake “stuck” point.',
      'Press Esc to exit and reveal the joke.',
    ],
    useCases: [
      { title: 'Harmless office pranks', description: 'Make a colleague think their PC is updating — then let them in on it.' },
      { title: 'Taking a break', description: 'Look busy when you step away from your desk.' },
      { title: 'Film and video props', description: `Show a believable ${name} update scene on set.` },
      { title: 'Nostalgia', description: 'Revisit a classic system screen for fun.' },
    ],
    faqs: [SAFETY_FAQ, AFFILIATION_FAQ(brand), extraFaq, EXIT_FAQ],
  }
}

type CallOptions = {
  app: string
  brand: string
  intro: string
  /** Full page title; defaults to "Fake <app> Call Screen – Video Call Simulation". */
  title?: string
  extraFaq?: ToolFaq
}

function callContent({ app, brand, intro, title, extraFaq }: CallOptions): ToolContent {
  return {
    title: title ?? `Fake ${app} Call Screen – Video Call Simulation`,
    intro,
    steps: [
      'Edit the meeting title and participant names.',
      'Optionally turn on your camera preview — it stays on your device and is never recorded or sent.',
      'Press F or Fullscreen for a convincing full-window call.',
      'Press Esc to exit at any time.',
    ],
    useCases: [
      { title: 'Video props', description: 'Film a scene that shows a meeting without a real call.' },
      { title: 'UI mockups', description: 'Reference a call layout in presentations or tutorials.' },
      { title: 'Harmless jokes', description: 'Pretend to be “in a meeting” for a laugh.' },
      { title: 'Practice', description: 'Rehearse how you look on camera before a real call.' },
    ],
    faqs: [
      SAFETY_FAQ,
      AFFILIATION_FAQ(brand),
      {
        question: 'Does it use my camera or microphone?',
        answer:
          'Only if you turn on the camera preview. The video stays on your device and is never recorded or uploaded. The microphone is never used.',
      },
      EXIT_FAQ,
      ...(extraFaq ? [extraFaq] : []),
    ],
  }
}

export const fakeScreenContent: Record<string, ToolContent> = {
  'fake-windows-10-update': updateContent({
    name: 'Windows 10',
    brand: 'Microsoft',
    intro:
      'A full-screen recreation of the blue “Working on updates” screen with a spinning loader and slowly rising percentage. It is a harmless simulation for pranks and props.',
    extraFaq: {
      question: 'Can I control how fast it progresses?',
      answer: 'Yes. Pick the starting percentage and a total duration from a few minutes to several hours.',
    },
  }),
  'fake-windows-11-update': updateContent({
    name: 'Windows 11',
    brand: 'Microsoft',
    intro:
      'A full-screen recreation of the modern dark “Working on updates” screen with the circular loader. A harmless simulation that hides your browser in fullscreen.',
    extraFaq: {
      question: 'How is it different from the Windows 10 version?',
      answer: 'It uses the darker background and simpler layout seen on newer systems.',
    },
  }),
  'fake-mac-update': updateContent({
    name: 'macOS',
    brand: 'Apple',
    intro:
      'A full-screen recreation of a Mac installing an update: a simple logo mark, a thin progress bar and an estimated time remaining. A harmless simulation.',
    extraFaq: {
      question: 'Does it use the real Apple logo?',
      answer: 'No. It uses a neutral generic mark to avoid trademark misuse, while keeping the familiar layout.',
    },
  }),
  'fake-android-update': updateContent({
    name: 'Android',
    brand: 'Google',
    intro:
      'A full-screen recreation of a phone “Installing system update” screen with a progress bar. Best on a phone or tablet in fullscreen.',
    extraFaq: {
      question: 'Does it work on phones?',
      answer:
        'Yes. On most Android browsers fullscreen hides the address bar. On iPhone Safari it fills the browser window instead.',
    },
  }),
  'fake-windows-xp-update': updateContent({
    name: 'Windows XP',
    brand: 'Microsoft',
    intro:
      'A nostalgic recreation of the classic XP-style installing updates dialog with a green block progress bar. A harmless simulation for fun and props.',
    extraFaq: {
      question: 'Why does it look so retro?',
      answer: 'It mimics the early-2000s dialog style for a nostalgic, recognizable look.',
    },
  }),
  'fake-windows-xp-boot': {
    title: 'Fake Windows XP Boot Screen – Retro Startup Simulation',
    intro:
      'Relive the classic black boot screen with the sliding blue progress blocks, then a welcome screen. A harmless, nostalgic simulation that starts silently.',
    steps: [
      'Press Start to play the boot sequence.',
      'Choose whether to loop the progress bar or continue to the welcome screen.',
      'Press F for fullscreen.',
      'Press Esc to exit.',
    ],
    useCases: [
      { title: 'Nostalgia', description: 'Remember the sound-free start of an early-2000s PC.' },
      { title: 'Retro props', description: 'Dress a vintage computer set for photos or film.' },
      { title: 'Harmless pranks', description: 'Make a modern PC look like it is booting XP.' },
      { title: 'Stream intros', description: 'A retro “starting up” intro for streams.' },
    ],
    faqs: [
      SAFETY_FAQ,
      AFFILIATION_FAQ('Microsoft'),
      {
        question: 'Does it play the startup sound?',
        answer: 'No. To respect your ears and copyright, there is no startup sound.',
      },
      EXIT_FAQ,
    ],
  },
  'fake-chrome-os-update': updateContent({
    name: 'ChromeOS',
    brand: 'Google',
    intro:
      'A clean, full-screen recreation of a Chromebook-style update screen with a progress bar and status text. A harmless visual simulation.',
    extraFaq: {
      question: 'Does it work on a Chromebook?',
      answer: 'Yes. Press the fullscreen key or the Fullscreen button for the full effect.',
    },
  }),
  'fake-ubuntu-update': updateContent({
    name: 'Ubuntu',
    brand: 'Canonical',
    intro:
      'A full-screen recreation of a Linux boot-time update with a terminal-style log scrolling by and a progress indicator. A harmless simulation.',
    extraFaq: {
      question: 'Are the log lines real commands?',
      answer: 'No. They are pre-written text for show and nothing is executed on your computer.',
    },
  }),
  'fake-video-call': callContent({
    app: 'Video',
    brand: 'any video-calling service',
    intro:
      'A generic, brand-free video call screen with a participant grid, call timer and control bar. Useful for props, mockups and harmless jokes.',
  }),
  'fake-zoom-meeting': callContent({
    app: 'Zoom Meeting',
    brand: 'Zoom Video Communications',
    title: 'Fake Zoom Meeting Screen – Zoom-Style Meeting Simulation',
    intro:
      'A Zoom-style meeting screen with a dark gallery view, participant tiles, an active-speaker outline and a bottom toolbar. An independent simulation for film props, mockups and harmless jokes. For a Teams-style layout, open the [Fake Teams Meeting Screen](/fake-teams-meeting).',
    extraFaq: {
      question: 'How is it different from the Teams meeting screen?',
      answer:
        'This one follows the Zoom-style layout: a gallery of tiles with the meeting controls along the bottom. The Fake Teams Meeting Screen puts the controls and a red Leave button in a top bar with a running meeting timer.',
    },
  }),
  'fake-teams-meeting': callContent({
    app: 'Teams Meeting',
    brand: 'Microsoft',
    title: 'Fake Teams Meeting Screen – Teams-Style Meeting Simulation',
    intro:
      'A Teams-style meeting screen with a dark stage, participant tiles with name labels, a top control bar with a red Leave button and a running meeting timer. An independent simulation for film props, mockups and harmless jokes. For a Zoom-style gallery, open the [Fake Zoom Meeting Screen](/fake-zoom-meeting).',
    extraFaq: {
      question: 'Can I change the meeting name?',
      answer:
        'Yes. Type a new name in the Meeting Title box below the screen. It appears in the top bar straight away, and nothing is saved or sent anywhere.',
    },
  }),
  'fake-slack-huddle': callContent({
    app: 'Slack-Style Huddle',
    brand: 'Slack Technologies',
    intro:
      'A Slack-style huddle window with avatars, speaking indicators and huddle controls. An independent simulation for props and jokes.',
  }),
}
