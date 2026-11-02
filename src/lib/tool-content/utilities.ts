import type { ToolContent } from './types'

export const utilitiesContent: Record<string, ToolContent> = {
  'countdown-timer': {
    title: 'Countdown Timer – Big Fullscreen Online Timer',
    intro:
      'A large, readable countdown timer for classrooms, presentations, workouts and cooking. Set any duration, use presets, and get a visual and optional sound alert when time is up.',
    steps: [
      'Choose a preset such as 1, 5 or 25 minutes, or type hours, minutes and seconds.',
      'Press Start or Space. Press Space again to pause, or R to reset.',
      'Turn on the chime if you want a sound — it is off by default.',
      'Press F for fullscreen so the whole room can see it. Press Esc to exit.',
    ],
    useCases: [
      { title: 'Classrooms', description: 'Time tests, activities and breaks on a projector.' },
      { title: 'Presentations', description: 'Keep speakers on schedule with a visible timer.' },
      { title: 'Pomodoro', description: 'Run 25-minute focus sessions with short breaks.' },
      { title: 'Workouts & cooking', description: 'A big timer you can read from across the room.' },
    ],
    faqs: [
      {
        question: 'Does the timer keep running in a background tab?',
        answer:
          'Yes. It is based on the actual clock time, so it stays accurate even if the browser slows down background tabs.',
      },
      {
        question: 'Will it make a sound?',
        answer: 'Only if you turn on the chime. Otherwise the screen flashes gently when time is up.',
      },
      {
        question: 'What is the maximum duration?',
        answer: 'You can set up to 99 hours, 59 minutes and 59 seconds.',
      },
    ],
  },
  stopwatch: {
    title: 'Online Stopwatch – Fullscreen Stopwatch With Laps',
    intro:
      'A precise, fullscreen online stopwatch with lap times. Big digits, keyboard shortcuts, and accurate timing based on your device clock.',
    steps: [
      'Press Start or Space to begin timing.',
      'Press Lap or L to record a split while the stopwatch keeps running.',
      'Press Space to pause, and R to reset.',
      'Press F for fullscreen, and Esc to exit.',
    ],
    useCases: [
      { title: 'Sports & running', description: 'Track lap times and intervals.' },
      { title: 'Speeches', description: 'Time talks and rehearsals precisely.' },
      { title: 'Games & quizzes', description: 'Time rounds in classrooms or game nights.' },
      { title: 'Lab and kitchen', description: 'Measure reactions, brewing or steeping times.' },
    ],
    faqs: [
      {
        question: 'How accurate is the stopwatch?',
        answer:
          'It uses the browser’s high-resolution clock and displays hundredths of a second. Display refresh can delay the visible update by a few milliseconds.',
      },
      {
        question: 'Are my laps saved?',
        answer: 'Laps stay on the page until you reset or close it. You can copy them to the clipboard.',
      },
      {
        question: 'Does it work offline?',
        answer: 'Yes. Once the page has loaded, the stopwatch runs without a connection.',
      },
    ],
  },
}
