import type { LanguageCode } from '../locale-routing'
import type { BackgroundItem } from '../backgrounds-data'
import { getBackground, getBackgrounds } from '.'
import { backgroundText, type BackgroundText } from './background-text'

/** Only the text and colors a hydrated background page needs, passed as props so the articles stay out of its bundle. */
const swatch = ({ slug, title, type, primaryHex, secondaryHex, accentHex, cssBackground }: BackgroundItem) => ({ slug, title, type, primaryHex, secondaryHex, accentHex, cssBackground })

const categoryList = (text: BackgroundText) =>
  (Object.keys(text.categories) as (keyof BackgroundText['categories'])[]).map((id) => ({ id, label: text.categories[id].label }))

export function backgroundToolProps(slug: string, lang: LanguageCode) {
  const item = getBackground(slug, lang)!
  const others = getBackgrounds(lang).filter((b) => b.slug !== item.slug)
  const text = backgroundText(lang)
  return {
    item: { ...swatch(item), shortDescription: item.shortDescription, category: item.category, categoryLabel: item.categoryLabel },
    // Same category first, then others, so there is always a full row of next steps.
    more: [...others.filter((b) => b.category === item.category), ...others.filter((b) => b.category !== item.category)].slice(0, 6).map(({ slug, title, cssBackground }) => ({ slug, title, cssBackground })),
    categories: categoryList(text),
    text: text.tool,
  }
}

export function backgroundIndexProps(lang: LanguageCode) {
  const text = backgroundText(lang)
  return {
    items: getBackgrounds(lang).map((item) => ({ ...swatch(item), shortDescription: item.shortDescription, category: item.category, categoryLabel: item.categoryLabel, tags: item.tags })),
    categories: [{ id: 'all' as const, label: text.allLabel }, ...categoryList(text)],
    categoryMeta: text.categories,
    text: text.index,
  }
}

export type BackgroundToolProps = ReturnType<typeof backgroundToolProps>
export type BackgroundIndexProps = ReturnType<typeof backgroundIndexProps>
