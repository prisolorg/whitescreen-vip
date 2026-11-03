import type { ToolContent } from './types'

const FULLSCREEN_STEP = 'Press F or click Fullscreen to fill your display, and press Esc to exit.'

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
  'pomodoro-timer': {
    title: 'Pomodoro Timer – Online Focus Timer (25/5)',
    intro:
      'A clean, fullscreen Pomodoro timer. Work for 25 minutes, take a 5-minute break, and after four focus sessions take a longer 15-minute break. The timer moves between phases on its own, counts your sessions, shows the time left in the tab title and plays a soft chime at the end of each phase. Add steady background sound with the [Brown Noise Generator](/brown-noise-generator/), or use the [Countdown Timer](/countdown-timer/) for one-off timings.',
    steps: [
      'Press Start to begin a 25-minute focus session.',
      'Change the focus, short-break and long-break lengths if you like (for example 50/10).',
      'When a phase ends you hear a chime and the next phase starts; turn off auto-start to begin each one yourself.',
      'Use Skip to jump ahead or Reset to start over. Space starts and pauses.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Studying', description: 'Break revision into short, focused blocks with real rest in between.' },
      { title: 'Deep work', description: 'Protect 25 minutes at a time from email and chat.' },
      { title: 'Classrooms', description: 'Show the timer on a projector for timed work and breaks.' },
      { title: 'Habit building', description: 'Count sessions to see how much focused time you put in.' },
    ],
    faqs: [
      {
        question: 'What is the Pomodoro Technique?',
        answer:
          'A time-management method from the late 1980s: work in focused blocks (traditionally 25 minutes), take a short break after each, and a longer break after every four.',
      },
      {
        question: 'Does the timer keep running in a background tab?',
        answer:
          'Yes. It counts against the real clock, so it stays accurate even if the browser slows down hidden tabs, and the tab title shows the time left.',
      },
      {
        question: 'Can I change the lengths?',
        answer: 'Yes. Set focus, short break and long break in minutes, and how many sessions come before a long break.',
      },
    ],
  },
  'ring-light': {
    title: 'Ring Light Online – Free Screen Ring Light',
    intro:
      'Use your screen as a ring light. A soft, glowing ring lights your face evenly and puts the round catchlight in your eyes that photographers love. Adjust the ring size, thickness and brightness, set the color temperature from warm to daylight, or pick a tint. It works for video calls, selfies, makeup and streaming. For a plain full-screen light, use [Zoom Lighting](/zoom-lighting/) or the [White Screen](/).',
    steps: [
      'Open the page on the screen you face (a laptop, monitor or tablet) and turn its brightness up.',
      'Adjust ring size and thickness; a thicker ring gives more light.',
      'Set the color temperature, or choose a tint for creative looks.',
      FULLSCREEN_STEP,
    ],
    useCases: [
      { title: 'Video calls', description: 'Even, flattering light on your face without buying a ring light.' },
      { title: 'Selfies and portraits', description: 'Get the classic round catchlight in your eyes.' },
      { title: 'Makeup', description: 'See your face clearly under warm or daylight-colored light.' },
      { title: 'Streaming', description: 'Soft key light from a spare monitor or tablet.' },
    ],
    faqs: [
      {
        question: 'Is a screen as bright as a real ring light?',
        answer:
          'No. A real LED ring light is much brighter. A screen ring light works best in a dim room with the display at full brightness and close to your face.',
      },
      {
        question: 'Why a ring and not the whole screen?',
        answer:
          'A ring lights you from all sides, which reduces shadows under the nose and eyes, and it makes the round reflection in your eyes. Use Fill center if you need every bit of light.',
      },
      {
        question: 'Which color temperature looks best?',
        answer: 'Around 4500–5500 K looks natural for most skin tones. Go warmer (3000 K) in the evening, cooler (6500 K) to match daylight.',
      },
    ],
  },
}
