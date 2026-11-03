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
    sections: [
      {
        heading: 'What a black screen reveals',
        paragraphs: [
          'On an LCD, black is the hardest color to show well, because the backlight stays on behind the panel. In a dark room, a fullscreen black image makes any light leaking around the edges obvious: bright patches near the corners are [backlight bleed](/screen-problems/backlight-bleed), while a glow that shifts as you move your head is [IPS glow](/screen-problems/ips-glow). Uneven, cloudy patches in the middle are clouding.',
          'Black is also the best background for spotting pixels that never turn off. A single lit white, red, green or blue dot on black is a [hot or stuck pixel](/screen-problems/hot-pixel). To check every color, step through the [dead pixel test](/dead-pixel-test).',
        ],
      },
      {
        heading: 'Black on OLED screens',
        paragraphs: [
          'OLED pixels make their own light, so on pure black (#000000) they switch off completely. That gives true black with no glow and uses almost no power for the black area. If you are deciding between panel types, [OLED vs LCD](/glossary/oled-vs-lcd) explains the trade-offs. For a near-black check of OLED uniformity, use the [OLED gray test](/oled-gray-test) instead, because dark gray shows banding and tinting that pure black hides.',
        ],
      },
      {
        heading: 'How to check for bleed and glow',
        paragraphs: [
          'Turn the room lights off, set the display to about 50% brightness and open the black screen in fullscreen. Let your eyes adjust for a minute, then look straight at the screen from your normal seating position. Photos exaggerate bleed, so judge with your eyes rather than your phone camera.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does a black screen save battery?',
        answer: 'On OLED phones, tablets and laptops, yes: black pixels are switched off. On LCD screens the backlight stays on, so a black screen saves very little. Lowering brightness saves more on LCDs.',
      },
      {
        question: 'Will a black screen keep my computer awake?',
        answer: 'In fullscreen, supported browsers keep the screen on while the page is open. Your operating system’s sleep settings still apply when you leave fullscreen.',
      },
      {
        question: 'Is some backlight bleed normal?',
        answer: 'A little bleed at the edges is common on LCD monitors and usually only visible on black in a dark room. If it shows up in everyday content, check your warranty.',
      },
    ],
  },
  red: {
    sections: [
      {
        heading: 'Testing red subpixels',
        paragraphs: [
          'Every pixel is made of red, green and blue subpixels. Pure red (#FF0000) lights only the red ones, so a dead red subpixel shows up as a dark dot. A green subpixel that is stuck on mixes with red and appears as a yellow dot, and a stuck blue subpixel appears magenta. Compare with [green](/green-screen) and [blue](/blue-screen) to narrow down which subpixel is affected, or read how to tell a [stuck pixel](/screen-problems/stuck-pixel) from a dead one.',
        ],
      },
      {
        heading: 'Red light for night vision',
        paragraphs: [
          'Your eyes’ low-light rod cells are least sensitive to deep red, which is why astronomers and pilots use dim red light. A red screen at low brightness lets you read notes or find things at night with less loss of dark adaptation than white light. Keep brightness as low as you can comfortably read; even red light is too bright at full power.',
          'For everyday evening use, reducing blue light across the whole display works better than a single color. See [monitor settings for eye strain](/guides/best-monitor-settings-for-eye-strain).',
        ],
      },
      {
        heading: 'Checking red accuracy',
        paragraphs: [
          'Red is where cheaper panels often look orange or pinkish. Put a red screen next to the same color on another device: a well-calibrated display shows a deep, clean red. For a fuller check of every channel and smooth gradients, use the [screen color test](/screen-color-test).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does my red screen look orange?',
        answer: 'Usually the display’s color mode or a warm night filter (Night Shift, Night Light) is shifting it. Turn those off and use the standard or sRGB mode, then check again.',
      },
      {
        question: 'Can a red screen develop film or photo paper safely?',
        answer: 'No. A screen is not a darkroom safelight: its red is not filtered narrowly enough and it is far too bright. Use a proper safelight for light-sensitive materials.',
      },
      {
        question: 'How do I find a stuck pixel on red?',
        answer: 'Look for a yellow or magenta dot. That is a green or blue subpixel stuck on. A black dot is a red subpixel that is off.',
      },
    ],
  },
  green: {
    sections: [
      {
        heading: 'Green and screen uniformity',
        paragraphs: [
          'Green carries most of the brightness we perceive, so a pure green screen is the brightest of the three primaries. That makes it good at revealing uneven brightness: darker corners, vertical bands or a cloudy center stand out more on green than on red or blue. For a structured check, run the [screen uniformity test](/screen-uniformity-test).',
          'Pure green (#00FF00) lights only green subpixels. A dark dot is a dead green subpixel; a yellow dot is a red subpixel stuck on; a cyan dot is a stuck blue subpixel. The [stuck pixel guide](/screen-problems/stuck-pixel) explains what you can do about each.',
        ],
      },
      {
        heading: 'Using a green screen display for chroma key',
        paragraphs: [
          'A fullscreen green display can stand in for a small chroma key backdrop when filming small objects, products or hands. Keep the subject a little away from the screen so green light does not spill onto it, and turn the brightness down until the green is even with no hotspots. For people and larger shots, real fabric or a [green screen background](/backgrounds/green-screen-background) behind you works better. [Chroma key](/glossary/chroma-key) explains how keying works.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which green is best for chroma key?',
        answer: 'Software keys well on a bright, even green. Pure #00FF00 works, but at full brightness it can spill onto your subject. Lower the screen brightness until the green looks even.',
      },
      {
        question: 'Why does green look brighter than other colors?',
        answer: 'Human eyes are most sensitive to green light, so at the same power a green screen looks brighter than red or blue.',
      },
      {
        question: 'Can I use a green screen to check for dead pixels?',
        answer: 'Yes, for green subpixels. To check every subpixel, also look at red, blue, white and black, or use the dead pixel test, which cycles through them for you.',
      },
    ],
  },
  blue: {
    sections: [
      {
        heading: 'Testing blue subpixels',
        paragraphs: [
          'Pure blue (#0000FF) lights only the blue subpixels. Blue looks the dimmest of the three primaries, so take a moment to let your eyes adjust and look closely. A black dot is a dead blue subpixel, a magenta dot is a red subpixel stuck on, and a cyan dot is a stuck green one. Repeat the check on [red](/red-screen) and [green](/green-screen), or run the full [dead pixel test](/dead-pixel-test).',
        ],
      },
      {
        heading: 'Banding and color tints',
        paragraphs: [
          'Blue gradients such as skies and dark backgrounds are where [color banding](/screen-problems/color-banding) shows up most. A flat blue screen should look even from edge to edge; if one side looks purple or teal, the panel has a color tint. The [screen color test](/screen-color-test) has smooth gradients for checking banding directly.',
        ],
      },
      {
        heading: 'Blue light and sleep',
        paragraphs: [
          'Blue light in the evening can make it harder to fall asleep, so a bright blue screen late at night is a poor choice for a night light. Use [red](/red-screen) or [orange](/orange-screen) at low brightness instead, and see [monitor settings for eye strain](/guides/best-monitor-settings-for-eye-strain) for day-to-day settings.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does pure blue look so dark?',
        answer: 'Our eyes are least sensitive to blue, so pure blue looks much darker than green or red at the same brightness. That is normal and not a fault.',
      },
      {
        question: 'Is this the Windows “blue screen of death”?',
        answer: 'No. This is a plain blue color screen for testing and lighting. It does not show any error message or affect your computer.',
      },
      {
        question: 'Can a blue screen help me find banding?',
        answer: 'A flat blue screen shows tinting and uneven brightness. Banding needs a gradient, so use the screen color test for that.',
      },
    ],
  },
  yellow: {
    sections: [
      {
        heading: 'What yellow tests',
        paragraphs: [
          'Yellow (#FFFF00) is red and green at full power with blue switched off. That makes it a quick way to check two subpixel colors at once: a red dot means a dead green subpixel, a green dot means a dead red one, and a white dot means a blue subpixel stuck on. Narrow it down with the [red](/red-screen), [green](/green-screen) and [blue](/blue-screen) screens.',
        ],
      },
      {
        heading: 'Yellow screen or yellow tint?',
        paragraphs: [
          'If your white screen looks yellow, that is a different problem: usually a warm color mode, Night Shift or Night Light, True Tone or an aging backlight. The [yellow tint guide](/screen-problems/yellow-tint-on-screen) walks through the fixes. A deliberate yellow screen, on the other hand, is useful as a warm, cheerful light for photos or as a bright backdrop for presentations and signs.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does my yellow look greenish?',
        answer: 'The display’s green is stronger than its red. Try the standard or sRGB color mode, or calibrate the display. The screen color test helps you compare channels.',
      },
      {
        question: 'Is a yellow screen easier on the eyes?',
        answer: 'A yellow screen has no blue light, but full-brightness yellow is still very bright. For evening use, lower the brightness or use a warm night filter.',
      },
      {
        question: 'Can I download a yellow background?',
        answer: 'Yes. Use the download button above to save a yellow PNG in sizes from 480p to 8K.',
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
          'Faint outlines of taskbars, logos or keyboard shortcuts on a gray screen are signs of [image retention](/screen-problems/image-retention), which fades, or [burn-in](/screen-problems/screen-burn-in), which does not. OLED owners should also run the [OLED gray test](/oled-gray-test), which steps through darker grays where OLED tinting appears, and the [OLED burn-in test](/oled-burn-in-test).',
        ],
      },
      {
        heading: 'A neutral backdrop',
        paragraphs: [
          'Gray is also a calm, neutral background for checking prints against the screen, photographing products without color casts, or as a low-distraction second screen. If you need a whole set of test patterns, the [monitor test](/monitor-test) covers gray levels, gradients and sharpness in one place.',
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
    sections: [
      {
        heading: 'A soft, flattering light',
        paragraphs: [
          'Hot pink (#FF69B4) mixes all three subpixel colors, with red at full power. As a light source it gives a soft, warm glow that is flattering on skin, which is why it is popular for selfies, short videos and streaming setups. Put the screen to one side of your face and lower the brightness until the color looks soft. For neutral video call light, use [Zoom lighting](/zoom-lighting) instead.',
        ],
      },
      {
        heading: 'Checking color accuracy with pink',
        paragraphs: [
          'Pink is sensitive to small errors in the balance between red and blue. On a well-calibrated display it looks clean and vivid; a panel with a blue bias shifts it toward purple, and one with a green bias makes it look salmon. Compare it on two devices, or use the [screen color test](/screen-color-test) and [monitor test](/monitor-test) to see where the difference comes from.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What color code is this pink?',
        answer: 'It is #FF69B4, often called hot pink. Use the custom color picker above to try a lighter or deeper pink.',
      },
      {
        question: 'Why does pink look purple on my screen?',
        answer: 'The display is pushing blue too strongly. A warmer color temperature or the sRGB mode usually fixes it.',
      },
      {
        question: 'Can I download a pink background?',
        answer: 'Yes. Pick a size with the download button above to save a pink PNG from 480p up to 8K.',
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
