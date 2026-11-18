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
        answer: 'Yes. Pick Phone in the Download menu, or type your phone’s exact size under Custom size, and set it as your home or lock screen wallpaper.',
      },
      {
        question: 'How do I make a black screen video?',
        answer: 'Download a 1080p or 4K black PNG and place it in your video editor’s timeline, then stretch it to the length you need.',
      },
      {
        question: 'Is black or white better for cleaning a monitor?',
        answer: 'Black shows fingerprints, streaks and smudges clearly, especially with a light at an angle. For dust, a [white screen](/) works better. Turn the display off before you wipe it.',
      },
      {
        question: 'How do I download a black screen image?',
        answer: 'Press Download under the preview and pick 1080p, 2K, 4K, Phone (1080×2400) or a custom size up to 8K. You get a pure black PNG you can use as a wallpaper, lock screen or a black frame in a video edit.',
      },
      {
        question: 'How do I make my screen black on Windows, Mac or a phone?',
        answer: 'Open this page and double-tap the preview or press F. The whole display turns black and stays awake until you press Esc or double-click. Nothing on the computer or phone is changed.',
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
      {
        question: 'How do I get a dark red screen?',
        answer: 'Lower the Brightness slider to 30–60%. The screen shows a deep, dark red that works as a dim night light. At 100% you get bright red (#FF0000).',
      },
      {
        question: 'Is a red screen a good night light?',
        answer: 'Yes. A dim red light disturbs dark-adapted vision less than white or blue light, which is why astronomers and pilots use red at night. Lower the brightness and turn on Keep screen awake.',
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
      {
        question: 'What color is a green screen?',
        answer: 'This page shows pure green (#00FF00). Studio chroma key green is a slightly darker, less saturated green, but any bright, even green keys well. Light your subject separately so no green spills onto them.',
      },
      {
        question: 'How do I get a light green screen?',
        answer: 'This screen only goes darker with the Brightness slider. For lighter greens such as mint, pick a shade on the [green background](/backgrounds/green-background) page.',
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
      {
        question: 'How do I get a navy or dark blue screen?',
        answer: 'Set the Brightness slider to 50% and the screen shows #000080, which is exactly navy blue. Go lower for an even darker blue.',
      },
      {
        question: 'How do I get a light blue screen?',
        answer: 'Open the [cyan screen](/cyan-screen) for a bright light blue, or pick a sky or baby blue shade on the [blue background](/backgrounds/blue-background) page.',
      },
      {
        question: 'Does a blue screen give off harmful blue light?',
        answer: 'No more than any bright screen. Blue light late at night can make it harder for some people to fall asleep, so use an orange or red screen in the evening instead.',
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
        answer: 'Yes. Use Download under the preview to save a yellow PNG at 1080p, 2K, 4K or phone size, or at any custom size up to 8K.',
      },
    ],
  },
  gray: {
    // English page body comes from GreyScreenGuide (keyword-led); only the FAQs live here.
    sections: [],
    faqs: [
      {
        question: 'Is it grey screen or gray screen?',
        answer: 'Both are right. Grey is the British spelling and gray the American one; the color is the same neutral #808080.',
      },
      {
        question: 'Which gray level is best for a uniformity test?',
        answer: 'Use 50% for dirty screen effect and tint, 5–10% in a dark room for backlight bleed and clouding, and 75% for dark corners.',
      },
      {
        question: 'Why does my grey screen look blotchy?',
        answer: 'Some unevenness is normal on large LCD and OLED panels. If patches are also obvious in everyday content, such as sports or web pages, the panel may be outside its warranty tolerance.',
      },
      {
        question: 'How do I get a light grey screen?',
        answer: 'Choose the 75% gray level under the preview for a light gray (#BFBFBF). Raise Brightness to 100% if it looks too dim.',
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
      {
        question: 'How do I get an amber screen?',
        answer: 'Open the [yellow screen](/yellow-screen) and choose Warm: it shows #FFC100, close to amber. On this page, lower the Brightness for a dimmer amber-orange glow.',
      },
      {
        question: 'How do I get a light orange screen?',
        answer: 'This screen only goes darker with the Brightness slider. For peach and pale orange, pick a shade on the [orange background](/backgrounds/orange-background) page.',
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
      {
        question: 'How do I get a light or baby pink screen?',
        answer: 'Use the [light pink background](/backgrounds/light-pink-background) page, which shows soft pink (#FFB6C1) in fullscreen and as a PNG. This page is hot pink and only gets darker with the Brightness slider.',
      },
      {
        question: 'Why is my monitor showing a pink tint?',
        answer: "If your real screen looks pink everywhere, check the video cable first, then reset the display's color settings and update the graphics driver. If the tint stays, test with a white screen; a pink cast on white points to a cable or panel fault.",
      },
    ],
  },
  purple: {
    // English page body comes from PurpleScreenGuide (keyword-led); only the FAQs live here.
    sections: [],
    faqs: [
      {
        question: 'Can a purple screen work as a UV light?',
        answer: 'No. Displays do not emit UV, so a purple light screen cannot make fluorescent paint glow or reveal UV ink.',
      },
      {
        question: 'What color code is this purple?',
        answer: 'It is #8000FF (RGB 128, 0, 255), a vivid violet. Choose Warm for a redder purple, Cool for a bluer violet, or lower Brightness for dark purple.',
      },
      {
        question: 'Why does purple look blue on my screen?',
        answer: 'Your display’s red is weaker than its blue, or a cool color temperature is set. Try a warmer or sRGB mode.',
      },
      {
        question: 'How do I get a light purple screen?',
        answer: 'For lilac, lavender or mauve, pick a shade on the [purple background](/backgrounds/purple-background) page. This screen is vivid purple and gets darker, not lighter, with the Brightness slider.',
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
        answer: 'Yes. Choose 1080p, 2K, 4K or Phone in the Download menu above to save a cyan PNG, or type any custom size up to 8K.',
      },
    ],
  },
  magenta: {
    sections: [
      {
        heading: 'Magenta, pink and purple are not the same',
        paragraphs: [
          'Magenta (#FF00FF) is red and blue at full power with green switched off, so it is brighter and more saturated than either neighbour. The [pink screen](/pink-screen) (#FF69B4) mixes in green and white for a softer, flattering light; the [purple screen](/purple-screen) (#8000FF) halves the red for a deeper, cooler violet. Pick magenta when you want the loudest color on the screen.',
        ],
      },
      {
        heading: 'Neon magenta light and backgrounds',
        paragraphs: [
          'Turn Brightness to 100%, switch off the room lights and double-tap for fullscreen: a laptop or tablet becomes a neon magenta light for parties, gaming setups or a stream backdrop. Warm pulls it toward hot pink, Cool toward violet. For a wallpaper, use Download to save a solid magenta PNG at 1080p, 2K, 4K, Phone size or a custom size. To move through magenta and other colors automatically, open the [color cycle](/color-cycle).',
        ],
      },
      {
        heading: 'A quick green-channel check',
        paragraphs: [
          'Because magenta has no green, a green subpixel stuck on shows as a pale, whitish dot, and any green tint makes magenta look dull or grayish instead of electric. That makes it a fast check on a new phone or monitor; for every channel in one place, run the [screen color test](/screen-color-test). Designers rely on the same rarity: magenta marks placeholders and missing textures, and it is the color that fringes a subject when [chroma key](/glossary/chroma-key) spill suppression goes too far.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is magenta the same as pink?',
        answer: 'No. Magenta is equal red and blue with no green; pink mixes in green and is lighter and softer. Open the pink screen to compare them side by side.',
      },
      {
        question: 'Why does magenta look purple on my display?',
        answer: 'Blue is stronger than red on your panel, or a cool color temperature is set. Choose Warm under the preview, or switch the display to a warmer or sRGB mode.',
      },
      {
        question: 'Is screen magenta the same as printer magenta?',
        answer: 'No. A screen mixes light, so #FF00FF is far brighter than the magenta ink in a printer (CMYK). Printed magenta looks darker and slightly redder, so do not use the screen to judge print colors.',
      },
    ],
  },

}
