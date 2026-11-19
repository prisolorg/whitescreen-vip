/**
 * Shades (solid pages) and color styles (gradient and pattern pages) each background offers in its Shade / Style menu.
 * The first entry is the default and is the page's own color, so the page looks exactly as before until someone picks
 * another. Solid shades use standard named colors and their usual hex codes.
 * Kept small and separate because the hydrated background tool imports it.
 *
 * Fields: `hex` is the main color. Gradients: `accent` is the middle stop and `secondary` the end stop. Neon: `secondary`
 * is the second glow and `accent` the dark base. Virtual office: center, `secondary` middle, `accent` edge. Graph paper:
 * paper, `secondary` fine lines, `accent` bold lines.
 */
export type BackgroundShade = { name: string; hex: string; secondary?: string; accent?: string }

export const BACKGROUND_SHADES: Record<string, readonly BackgroundShade[]> = {
  'white-background': [
    { name: 'Pure White', hex: '#FFFFFF' },
    { name: 'Snow', hex: '#FFFAFA' },
    { name: 'Ghost White', hex: '#F8F8FF' },
    { name: 'Off-White', hex: '#FAF9F6' },
    { name: 'Floral White', hex: '#FFFAF0' },
    { name: 'Ivory', hex: '#FFFFF0' },
    { name: 'Seashell', hex: '#FFF5EE' },
    { name: 'Linen', hex: '#FAF0E6' },
    { name: 'Cream', hex: '#FFFDD0' },
    { name: 'Alabaster', hex: '#EDEADE' },
  ],
  // The most-discussed named shades of black, darkest first.
  'black-background': [
    { name: 'Pure Black', hex: '#000000' },
    { name: 'Rich Black', hex: '#010B13' },
    { name: 'Smoky Black', hex: '#100C08' },
    { name: 'Dark Mode Black', hex: '#121212' },
    { name: 'Eerie Black', hex: '#1B1B1B' },
    { name: 'Raisin Black', hex: '#242124' },
    { name: 'Jet', hex: '#343434' },
    { name: 'Onyx', hex: '#353839' },
    { name: 'Charcoal', hex: '#36454F' },
  ],
  'dark-background': [
    { name: 'Dark Mode Gray', hex: '#121212' },
    { name: 'Eerie Black', hex: '#1B1B1B' },
    { name: 'Raisin Black', hex: '#242124' },
    { name: 'Gunmetal', hex: '#2A3439' },
    { name: 'Dark Slate Gray', hex: '#2F4F4F' },
    { name: 'Jet', hex: '#343434' },
    { name: 'Onyx', hex: '#353839' },
    { name: 'Charcoal', hex: '#36454F' },
  ],
  'red-background': [
    { name: 'Red', hex: '#DC2626' },
    { name: 'Pure Red', hex: '#FF0000' },
    { name: 'Scarlet', hex: '#FF2400' },
    { name: 'Crimson', hex: '#DC143C' },
    { name: 'Cherry', hex: '#D2042D' },
    { name: 'Cardinal', hex: '#C41E3A' },
    { name: 'Dark Red', hex: '#8B0000' },
    { name: 'Maroon', hex: '#800000' },
    { name: 'Burgundy', hex: '#800020' },
  ],
  'orange-background': [
    { name: 'Orange', hex: '#FF7A00' },
    { name: 'Web Orange', hex: '#FFA500' },
    { name: 'Dark Orange', hex: '#FF8C00' },
    { name: 'Tangerine', hex: '#F28500' },
    { name: 'Pumpkin', hex: '#FF7518' },
    { name: 'Coral', hex: '#FF7F50' },
    { name: 'Burnt Orange', hex: '#CC5500' },
    { name: 'Peach', hex: '#FFE5B4' },
  ],
  'yellow-background': [
    { name: 'Yellow', hex: '#FACC15' },
    { name: 'Pure Yellow', hex: '#FFFF00' },
    { name: 'Lemon', hex: '#FFF700' },
    { name: 'Canary', hex: '#FFEF00' },
    { name: 'Gold', hex: '#FFD700' },
    { name: 'Amber', hex: '#FFBF00' },
    { name: 'Mustard', hex: '#FFDB58' },
    { name: 'Pastel Yellow', hex: '#FDFD96' },
    { name: 'Light Yellow', hex: '#FFFFE0' },
  ],
  'blue-background': [
    { name: 'Blue', hex: '#0066FF' },
    { name: 'Pure Blue', hex: '#0000FF' },
    { name: 'Azure', hex: '#007FFF' },
    { name: 'Royal Blue', hex: '#4169E1' },
    { name: 'Cobalt', hex: '#0047AB' },
    { name: 'Navy', hex: '#000080' },
    { name: 'Midnight Blue', hex: '#191970' },
    { name: 'Sky Blue', hex: '#87CEEB' },
    { name: 'Baby Blue', hex: '#89CFF0' },
  ],
  'green-background': [
    { name: 'Green', hex: '#16A34A' },
    { name: 'Lime Green', hex: '#32CD32' },
    { name: 'Kelly Green', hex: '#4CBB17' },
    { name: 'Emerald', hex: '#50C878' },
    { name: 'Mint', hex: '#3EB489' },
    { name: 'Forest Green', hex: '#228B22' },
    { name: 'Hunter Green', hex: '#355E3B' },
    { name: 'Dark Green', hex: '#006400' },
    { name: 'Olive', hex: '#808000' },
  ],
  'green-screen-background': [
    { name: 'Digital Green', hex: '#00FF00' },
    { name: 'Chroma Green', hex: '#00B140' },
  ],
  'pink-background': [
    { name: 'Pink', hex: '#F472B6' },
    { name: 'Hot Pink', hex: '#FF69B4' },
    { name: 'Deep Pink', hex: '#FF1493' },
    { name: 'Rose', hex: '#FF007F' },
    { name: 'Magenta', hex: '#FF00FF' },
    { name: 'Blush', hex: '#DE5D83' },
    { name: 'Salmon Pink', hex: '#FF91A4' },
    { name: 'Baby Pink', hex: '#F4C2C2' },
    { name: 'Pastel Pink', hex: '#FFD1DC' },
  ],
  'light-pink-background': [
    { name: 'Light Pink', hex: '#FFB6C1' },
    { name: 'Pink', hex: '#FFC0CB' },
    { name: 'Baby Pink', hex: '#F4C2C2' },
    { name: 'Pastel Pink', hex: '#FFD1DC' },
    { name: 'Cotton Candy', hex: '#FFBCD9' },
    { name: 'Pale Pink', hex: '#FADADD' },
    { name: 'Misty Rose', hex: '#FFE4E1' },
    { name: 'Lavender Blush', hex: '#FFF0F5' },
  ],
  'purple-background': [
    { name: 'Purple', hex: '#7C3AED' },
    { name: 'Violet', hex: '#8F00FF' },
    { name: 'Royal Purple', hex: '#7851A9' },
    { name: 'Amethyst', hex: '#9966CC' },
    { name: 'Indigo', hex: '#4B0082' },
    { name: 'Plum', hex: '#8E4585' },
    { name: 'Eggplant', hex: '#614051' },
    { name: 'Lilac', hex: '#C8A2C8' },
    { name: 'Mauve', hex: '#E0B0FF' },
    { name: 'Lavender', hex: '#E6E6FA' },
  ],
  'beige-background': [
    { name: 'Beige', hex: '#EADBC8' },
    { name: 'Classic Beige', hex: '#F5F5DC' },
    { name: 'Almond', hex: '#EFDECD' },
    { name: 'Champagne', hex: '#F7E7CE' },
    { name: 'Cream', hex: '#FFFDD0' },
    { name: 'Tan', hex: '#D2B48C' },
    { name: 'Khaki', hex: '#C3B091' },
    { name: 'Sand', hex: '#C2B280' },
  ],

  // Gradient and pattern pages: color styles in the page's own look.
  'gradient-background': [
    { name: 'Sunset Glow', hex: '#6366F1', accent: '#EC4899', secondary: '#F59E0B' },
    { name: 'Ocean', hex: '#2563EB', accent: '#06B6D4', secondary: '#A7F3D0' },
    { name: 'Peach', hex: '#FF9A8B', accent: '#FF6A88', secondary: '#FF99AC' },
    { name: 'Fire', hex: '#F12711', accent: '#F5591F', secondary: '#F5AF19' },
    { name: 'Purple Haze', hex: '#7F00FF', accent: '#B44CFF', secondary: '#E100FF' },
    { name: 'Forest', hex: '#134E5E', accent: '#2E8B57', secondary: '#71B280' },
    { name: 'Mint Sky', hex: '#A8EDEA', accent: '#C2E9FB', secondary: '#FED6E3' },
    { name: 'Night', hex: '#0F2027', accent: '#203A43', secondary: '#2C5364' },
  ],
  'gold-background': [
    { name: 'Classic Gold', hex: '#B8860B', accent: '#F6D77A', secondary: '#8A6512' },
    { name: 'Bright Gold', hex: '#D4AF37', accent: '#FFE680', secondary: '#B8860B' },
    { name: 'Antique Gold', hex: '#9C7A3C', accent: '#D4AF37', secondary: '#6E5523' },
    { name: 'Champagne Gold', hex: '#C9B37E', accent: '#F7E7CE', secondary: '#A08850' },
    { name: 'Rose Gold', hex: '#B76E79', accent: '#F4C2C2', secondary: '#8E4B57' },
    { name: 'White Gold', hex: '#C8C8C0', accent: '#F5F5EE', secondary: '#A8A8A0' },
  ],
  'aesthetic-background': [
    { name: 'Peach Dream', hex: '#FBD3C1', accent: '#F5B5D6', secondary: '#A9C1F2' },
    { name: 'Lavender Haze', hex: '#E0C3FC', accent: '#C5B3F7', secondary: '#8EC5FC' },
    { name: 'Cotton Candy', hex: '#FFC3E1', accent: '#FFDDEE', secondary: '#B5DEFF' },
    { name: 'Sunset Blush', hex: '#FAD0C4', accent: '#FFD1FF', secondary: '#FBC2EB' },
    { name: 'Sage Calm', hex: '#D8E2DC', accent: '#BFD8BD', secondary: '#98C9A3' },
    { name: 'Vintage Rose', hex: '#E8B4B8', accent: '#EED6D3', secondary: '#A49393' },
  ],
  'pastel-background': [
    { name: 'Mint Mix', hex: '#B8F0DC', accent: '#D5CCF5', secondary: '#FFD9C2' },
    { name: 'Baby Blue Mix', hex: '#C9E4FF', accent: '#E2D5FF', secondary: '#FFE5EC' },
    { name: 'Lemon Mint', hex: '#FFF6B7', accent: '#D4F5E9', secondary: '#C7E9FF' },
    { name: 'Peach Lilac', hex: '#FFDAC1', accent: '#E2D1F9', secondary: '#B5EAD7' },
    { name: 'Rose Sky', hex: '#FFD1DC', accent: '#FFE8D6', secondary: '#CDE7F0' },
  ],
  'neon-background': [
    { name: 'Cyan & Pink', hex: '#00FFCC', secondary: '#FF007F', accent: '#0D0221' },
    { name: 'Blue & Purple', hex: '#00E5FF', secondary: '#B400FF', accent: '#0A0420' },
    { name: 'Lime & Magenta', hex: '#39FF14', secondary: '#FF00FF', accent: '#0B0B1A' },
    { name: 'Orange & Blue', hex: '#FF6B00', secondary: '#00A2FF', accent: '#050A1F' },
    { name: 'Red & Aqua', hex: '#FF0040', secondary: '#00FFF0', accent: '#0A0010' },
  ],
  'virtual-office': [
    { name: 'Slate', hex: '#475569', secondary: '#1E293B', accent: '#0F172A' },
    { name: 'Soft Gray', hex: '#D1D5DB', secondary: '#9CA3AF', accent: '#6B7280' },
    { name: 'Warm Wood', hex: '#8B6B4A', secondary: '#5C4430', accent: '#3B2A1C' },
    { name: 'Navy Studio', hex: '#2B4A7A', secondary: '#16294A', accent: '#0B1630' },
    { name: 'Forest Green', hex: '#3F6B50', secondary: '#24412F', accent: '#13261A' },
    { name: 'Plum', hex: '#6B4A6E', secondary: '#3F2A42', accent: '#241726' },
  ],
  'graph-paper': [
    { name: 'Blue Grid', hex: '#F8FBFF', secondary: '#D3E3F4', accent: '#8DB4DD' },
    { name: 'Green Grid', hex: '#F5FBF5', secondary: '#CFE8D2', accent: '#7FB88A' },
    { name: 'Gray Grid', hex: '#FFFFFF', secondary: '#E5E7EB', accent: '#9CA3AF' },
    { name: 'Yellow Pad', hex: '#FFFBE6', secondary: '#F1E3A8', accent: '#D4B85A' },
    { name: 'Pink Grid', hex: '#FFF7FA', secondary: '#F6D3E1', accent: '#E39BB8' },
    { name: 'Dark Grid', hex: '#111827', secondary: '#2B3545', accent: '#4B5563' },
  ],
}

/** CSS for a shade or style, in the same shape as the page's own background. */
export function shadeCss(slug: string, shade: BackgroundShade): string {
  const { hex, secondary, accent } = shade
  if (slug === 'neon-background') return `radial-gradient(circle at 20% 30%, ${hex} 0%, transparent 45%), radial-gradient(circle at 80% 70%, ${secondary} 0%, ${accent} 65%)`
  if (slug === 'virtual-office') return `radial-gradient(ellipse at 50% 40%, ${hex} 0%, ${secondary} 70%, ${accent} 100%)`
  if (slug === 'graph-paper')
    return `linear-gradient(${accent} 1px, transparent 1px) 0 0 / 100px 100px, linear-gradient(90deg, ${accent} 1px, transparent 1px) 0 0 / 100px 100px, linear-gradient(${secondary} 1px, transparent 1px) 0 0 / 20px 20px, linear-gradient(90deg, ${secondary} 1px, transparent 1px) 0 0 / 20px 20px, ${hex}`
  if (secondary) return `linear-gradient(135deg, ${hex} 0%, ${accent ? `${accent} 50%, ` : ''}${secondary} 100%)`
  return hex
}

/** A small swatch for the menu: graph paper shows paper and line colors, everything else its own background. */
export function shadeSwatch(slug: string, shade: BackgroundShade): string {
  if (slug === 'graph-paper') return `linear-gradient(135deg, ${shade.hex} 55%, ${shade.accent} 55%)`
  return shadeCss(slug, shade)
}
