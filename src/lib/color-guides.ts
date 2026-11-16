/**
 * Long-form English copy for each color screen page: what that color reveals about a display,
 * how to use it, and color-specific questions. Inline links use `[anchor](/path)` (see RichText).
 * White is not here: /white-screen canonicalizes to the homepage, which has its own long-form copy.
 */
export type ColorGuide = {
  sections: { heading: string; paragraphs: string[] }[]
  faqs: { question: string; answer: string }[]
}

export const COLOR_GUIDES: Record<string, ColorGuide> = {
  black: {
    // English page body comes from BlackScreenGuide (keyword-led); only the FAQs live here.
    sections: [],
    faqs: [
      {
        question: 'Does a black screen save battery?',
        answer: 'On OLED phones, tablets and laptops, yes: black pixels are switched off. On LCD screens the backlight stays on, so it saves very little. Lowering brightness saves more on LCDs.',
      },
      {
        question: 'Will a black screen keep my computer awake?',
        answer: 'Yes, while the page is open with Keep screen awake turned on, in browsers that support it. Your normal sleep settings return when you close the page or turn the option off.',
      },
      {
        question: 'Is a black screen the same as turning off my monitor?',
        answer: 'No. The monitor stays on and your computer keeps running; the screen just shows pure black. On OLED it looks off because the pixels are dark, while an LCD still lights its backlight.',
      },
      {
        question: 'Can I set a black home screen or lock screen on my phone?',
        answer: 'Yes. Download the iPhone or Android size from the Download menu and set it as your home or lock screen wallpaper.',
      },
      {
        question: 'How do I make a black screen video?',
        answer: 'Download a 1080p or 4K black PNG and place it in your video editor’s timeline, then stretch it to the length you need.',
      },
      {
        question: 'Is black or white better for cleaning a monitor?',
        answer: 'Black shows fingerprints, streaks and smudges clearly, especially with a light at an angle. For dust, a [white screen](/) works better. Turn the display off before you wipe it.',
      },
    ],
  },
  red: {
    // English page body comes from RedScreenGuide (keyword-led); only the FAQs live here.
    sections: [],
    faqs: [
      {
        question: 'Can I use a red screen on my iPhone or Android phone?',
        answer: 'Yes. Open this page in your phone’s browser, tap the fullscreen icon and turn on Keep screen awake. Lower the Brightness slider for a dim night light.',
      },
      {
        question: 'Why does my red screen look orange?',
        answer: 'Usually the display’s color mode or a warm night filter (Night Shift, Night Light) is shifting it. Turn those off and use the standard or sRGB mode, then check again.',
      },
      {
        question: 'Can a red screen work as a darkroom safelight?',
        answer: 'No. Its red is not filtered narrowly enough and it is far too bright for film or photo paper. Use a proper safelight for light-sensitive materials.',
      },
    ],
  },
  green: {
    // English page body comes from GreenScreenGuide (keyword-led); only the FAQs live here.
    sections: [],
    faqs: [
      {
        question: 'What is the green screen of death?',
        answer: 'It is the green version of the Windows blue screen of death, shown when a Windows Insider Preview build crashes. Xbox consoles can also get stuck on a green loading screen. Want to show one for fun? Try the [fake blue screen of death](/fake-blue-screen-of-death).',
      },
      {
        question: 'Can I use a green screen on my phone?',
        answer: 'Yes, for small objects and close-ups. Open this page, turn brightness up, go fullscreen and turn on Keep screen awake. For anything bigger than the phone, use green fabric or a background in your editor.',
      },
      {
        question: 'Does this green screen website remove my background?',
        answer: 'No. This page shows solid green and lets you download green images. The background removal happens in your video or streaming app, such as OBS, CapCut, Zoom or Teams.',
      },
    ],
  },
  blue: {
    // English page body comes from BlueScreenGuide (keyword-led); only the FAQs live here.
    sections: [],
    faqs: [
      {
        question: 'Is this blue screen the Windows blue screen of death?',
        answer: 'No. This is a plain blue color screen for lighting, testing and editing. It shows no error and does not affect your computer. Looking for the error screen as a prank? Try the [fake blue screen of death](/fake-blue-screen-of-death).',
      },
      {
        question: 'Can I use a blue screen on my laptop, PC or phone?',
        answer: 'Yes. It works in any modern browser. Double-tap for fullscreen, turn on Keep screen awake, and use the Brightness slider to set the shade.',
      },
      {
        question: 'Why does a pure blue screen look so dark?',
        answer: 'Our eyes are least sensitive to blue, so pure blue looks much darker than green or red at the same brightness. That is normal and not a fault.',
      },
    ],
  },
  yellow: {
    // English page body comes from YellowScreenGuide (keyword-led); only the FAQs live here.
    sections: [],
    faqs: [
      {
        question: 'Is a yellow screen easier on the eyes?',
        answer: 'Yellow has no blue light, which many people find more relaxing in the evening. Full-brightness yellow is still bright, so lower the Brightness slider for a softer warm light.',
      },
      {
        question: 'Can I make the yellow screen warmer or softer?',
        answer: 'Yes. Choose Warm for a golden yellow and lower the Brightness slider for a dimmer, soft light.',
      },
      {
        question: 'Can I download a yellow screen image?',
        answer: 'Yes. Use Download under the preview to save a yellow PNG at 1080p, 1440p, 4K or 8K, in phone and tablet sizes, or at a custom size.',
      },
    ],
  },
  gray: {
    sections: [
      {
        heading: 'Why 50% gray is the best uniformity test',
        paragraphs: [
          'A mid gray (#808080) is where panel flaws are easiest to see. Darker patches, vertical bands, a dirty-screen effect on large TVs and a slightly colored tint in one area all stand out on gray in a way they never do on white or black. Look at the screen from a normal distance with the room lights dim. For a guided version with several gray levels, use the [screen uniformity test](/screen-uniformity-test).',
        ],
      },
      {
        heading: 'Spotting burn-in and image retention',
        paragraphs: [
          'Faint outlines of taskbars, logos or keyboard shortcuts on a gray screen are signs of [image retention](/screen-problems/image-retention), which fades, or [burn-in](/screen-problems/screen-burn-in), which does not. OLED owners should also run the [OLED test](/oled-gray-test), which steps through darker grays where OLED tinting appears, and the [OLED burn-in test](/oled-burn-in-test).',
        ],
      },
      {
        heading: 'A neutral backdrop',
        paragraphs: [
          'Gray is also a calm, neutral background for checking prints against the screen, photographing products without color casts, or as a low-distraction second screen. If you need a whole set of test patterns, the [screen test](/monitor-test) covers gray levels, gradients and sharpness in one place.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does my gray screen look blotchy?',
        answer: 'Some unevenness is normal on large LCD and OLED panels. If patches are obvious in everyday content, such as sports or web pages, the panel may be outside its warranty tolerance.',
      },
      {
        question: 'What gray level should I use?',
        answer: '50% gray is best for uniformity. Darker grays (5–20%) reveal OLED tinting and near-black banding; use the OLED gray test for those.',
      },
      {
        question: 'Can a gray screen fix burn-in?',
        answer: 'No. Gray only makes it visible. Temporary image retention often fades after showing varied content for a while; permanent burn-in does not.',
      },
    ],
  },
  orange: {
    sections: [
      {
        heading: 'A warm, low-blue light',
        paragraphs: [
          'Orange (#FF8000) is full red, half green and no blue. That makes it a warm, comfortable light for the evening: bright enough to read by at low brightness, with no blue light. It also works as a warm fill light for video calls if your room light is cold; for a softer setup see [Zoom lighting](/zoom-lighting) and the [video call lighting guide](/guides/white-screen-for-video-calls-and-zoom).',
        ],
      },
      {
        heading: 'Mood lighting and backdrops',
        paragraphs: [
          'A fullscreen orange screen on a TV or tablet makes simple ambient light for parties, autumn and Halloween decorations or product photos with a warm tone. For something that moves, try the [gradient screen](/gradient-screen) or the [color cycle](/color-cycle). If you need a file instead, download an orange PNG with the button above or browse [orange backgrounds](/backgrounds/orange-background).',
        ],
      },
      {
        heading: 'What orange shows about your display',
        paragraphs: [
          'Because the green subpixels run at half power here, orange is a good check that mid-level colors look even. A screen that turns orange into yellowish or reddish patches across the panel has uneven color response. The [screen color test](/screen-color-test) checks this more thoroughly.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is orange light better than white at night?',
        answer: 'Yes, at low brightness. Orange contains no blue light, which is the part of white light most linked to staying alert.',
      },
      {
        question: 'Why does my orange look red?',
        answer: 'A warm night filter or a vivid color mode can push orange toward red. Switch to the standard or sRGB mode to see the true color.',
      },
      {
        question: 'Can I use an orange screen as a photo light?',
        answer: 'Yes, for close-up subjects. A tablet or monitor at full brightness gives a soft warm light; move it closer for more light rather than raising the brightness further.',
      },
    ],
  },
  pink: {
    // English page body comes from PinkScreenGuide (keyword-led); only the FAQs live here.
    sections: [],
    faqs: [
      {
        question: 'What color code is this pink?',
        answer: 'It is #FF69B4 (RGB 255, 105, 180), often called hot pink. Choose Warm for a coral pink, Cool for a rose pink, or lower the Brightness slider for a darker pink.',
      },
      {
        question: 'Can I keep a pink screen on for 10 hours?',
        answer: 'Yes. Turn on Keep screen awake and the display stays on as long as the page is open, in browsers that support it. Plug in your laptop or phone for long sessions.',
      },
      {
        question: 'Why does my pink screen look purple?',
        answer: 'The display is pushing blue too strongly. Choose Warm under the preview, or switch your display to a warmer color temperature or the sRGB mode.',
      },
    ],
  },
  purple: {
    sections: [
      {
        heading: 'Purple for ambient light',
        paragraphs: [
          'Purple (#8000FF) is full blue with half red and no green. It makes a rich ambient color for parties, gaming setups and backdrops in photos and videos. Combine it with the [color cycle](/color-cycle) or the [gradient screen](/gradient-screen) for light that changes slowly, or download a [purple background](/backgrounds/purple-background) to use as a wallpaper.',
        ],
      },
      {
        heading: 'A purple screen is not a black light',
        paragraphs: [
          'Screens cannot emit ultraviolet light, so a purple screen will not make fluorescent paint glow or reveal UV markings. It only looks similar to a black light. For real UV effects you need a UV lamp.',
        ],
      },
      {
        heading: 'What purple shows about your display',
        paragraphs: [
          'With green switched off, a stuck green subpixel shows as a bright pale-cyan dot on purple, and a dead blue subpixel as a dim red one. Uneven purple across the panel, such as bluer edges and a redder center, points to a color uniformity issue that the [screen uniformity test](/screen-uniformity-test) can confirm.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can a purple screen work as a UV light?',
        answer: 'No. Displays do not emit UV, so a purple screen cannot activate fluorescent materials.',
      },
      {
        question: 'What color code is this purple?',
        answer: 'It is #8000FF, a vivid violet. Use the custom color picker to try a softer lavender or a deeper indigo.',
      },
      {
        question: 'Why does purple look blue on my screen?',
        answer: 'Your display’s red is weaker than its blue, or a cool color temperature is set. Try a warmer or sRGB mode.',
      },
    ],
  },
  cyan: {
    sections: [
      {
        heading: 'Cyan checks the red channel',
        paragraphs: [
          'Cyan (#00FFFF) is green and blue at full power with red switched off. That makes it a good test for red subpixels stuck on: they appear as white dots on cyan. A blue dot means a dead green subpixel and a green dot a dead blue one. Check the same spot on [red](/red-screen) to confirm, or see the [stuck pixel guide](/screen-problems/stuck-pixel).',
        ],
      },
      {
        heading: 'A cool, bright backdrop',
        paragraphs: [
          'Cyan is one of the brightest colors a screen can show, with a cool, clean look. It works as a bright backdrop for product photos, a highlight color for presentations and signs, or a cool accent light. For a calmer cool tone, try a [gradient screen](/gradient-screen) or the [pastel background](/backgrounds/pastel-background).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does cyan look greenish on my screen?',
        answer: 'The display’s green is stronger than its blue. The sRGB color mode or calibration usually brings it back to a balanced cyan.',
      },
      {
        question: 'Is cyan the same as light blue?',
        answer: 'No. Light blue mixes in some red, while cyan has none. Use the custom color picker to try sky blue or turquoise.',
      },
      {
        question: 'Can I download a cyan image?',
        answer: 'Yes. Choose a size with the download button above to save a cyan PNG from 480p up to 8K.',
      },
    ],
  },
  magenta: {
    sections: [
      {
        heading: 'Magenta checks the green channel',
        paragraphs: [
          'Magenta (#FF00FF) is red and blue at full power with green switched off. A green subpixel stuck on shows up as a white-ish dot, a dead red subpixel as a blue dot and a dead blue one as a red dot. Because green is off, magenta is also the quickest way to see whether a display has a green tint: any green cast makes magenta look grayish or muddy. For a full check of every channel, run the [screen color test](/screen-color-test).',
        ],
      },
      {
        heading: 'Magenta in video and design',
        paragraphs: [
          'Magenta is the complement of green, which is why it shows up as a fringe around subjects when [chroma key](/glossary/chroma-key) spill suppression goes too far. Designers also use it as a placeholder color precisely because it rarely appears in real images. As a light, it gives a vivid, party-style glow; the [color cycle](/color-cycle) moves through it smoothly.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does magenta look purple on my display?',
        answer: 'Blue is stronger than red on your panel, or a cool color temperature is set. A warmer or sRGB mode usually fixes it.',
      },
      {
        question: 'Is magenta the same as pink?',
        answer: 'No. Magenta is equal red and blue with no green; pink mixes in some green and is lighter. Try the pink screen to compare.',
      },
      {
        question: 'Can magenta help find stuck pixels?',
        answer: 'Yes, especially stuck green subpixels, which show up as bright dots. Confirm on the green screen.',
      },
    ],
  },
}
