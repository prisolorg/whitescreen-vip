import type { TopicTranslation } from './types'
import { es } from './es'
import { ptBr } from './pt-br'
import { de } from './de'
import { fr } from './fr'
import { it } from './it'
import { nl } from './nl'
import { id } from './id'
import { tr } from './tr'

/** Translated hub pages and color-screen answer blocks, by language. English lives in hubs.ts and glance.ts. */
export const TOPIC_TRANSLATIONS: Record<string, TopicTranslation> = { es, 'pt-br': ptBr, de, fr, it, nl, id, tr }

const capitalize = (text: string) => text.charAt(0).toLocaleUpperCase() + text.slice(1)

/** The answer-first block for a color screen in `language`, assembled from the shared template. */
export function colorGlanceFor(colorId: string, hex: string, language: string) {
  const topic = TOPIC_TRANSLATIONS[language]
  const color = topic?.colors[colorId]
  if (!topic || !color) return undefined
  const fill = (text: string) => text.replaceAll('{subject}', color.subject).replaceAll('{word}', color.word).replaceAll('{hex}', hex).replaceAll('{tail}', color.tail)
  const [first, second, last] = topic.colorAnswer.features
  return {
    answer: fill(topic.colorAnswer.template),
    features: [capitalize(fill(first)), second, color.feature, last],
    benefits: [color.benefit, ...topic.colorAnswer.benefits],
  }
}
