/**
 * Screen problem and glossary articles in every language. Server-side only: it imports all the
 * article text, so hydrated code must receive what it needs as props (see index-items) instead.
 */
import type { LanguageCode } from '../locale-routing'
import { GLOSSARY_ITEMS, type GlossaryItem } from '../glossary-data'
import { SCREEN_PROBLEMS, type ScreenProblemItem } from '../screen-problems-data'
import { applyStrings } from './walk'
import { es as glossaryEs } from './glossary/es'
import { ptBr as glossaryPtBr } from './glossary/pt-br'
import { de as glossaryDe } from './glossary/de'
import { fr as glossaryFr } from './glossary/fr'
import { it as glossaryIt } from './glossary/it'
import { nl as glossaryNl } from './glossary/nl'
import { id as glossaryId } from './glossary/id'
import { tr as glossaryTr } from './glossary/tr'
import { es1 } from './problems/es-1'
import { es2 } from './problems/es-2'
import { ptBr1 } from './problems/pt-br-1'
import { ptBr2 } from './problems/pt-br-2'
import { de1 } from './problems/de-1'
import { de2 } from './problems/de-2'
import { fr1 } from './problems/fr-1'
import { fr2 } from './problems/fr-2'
import { it1 } from './problems/it-1'
import { it2 } from './problems/it-2'
import { nl1 } from './problems/nl-1'
import { nl2 } from './problems/nl-2'
import { id1 } from './problems/id-1'
import { id2 } from './problems/id-2'
import { tr1 } from './problems/tr-1'
import { tr2 } from './problems/tr-2'

type Strings = Record<string, readonly string[]>

// Built inside functions: a module-level object made with spreads or calls can't be tree-shaken,
// and would pull every article into the client bundle through the messages module.
const termStrings = (lang: LanguageCode): Strings | undefined =>
  ({ es: glossaryEs, 'pt-br': glossaryPtBr, de: glossaryDe, fr: glossaryFr, it: glossaryIt, nl: glossaryNl, id: glossaryId, tr: glossaryTr } as Partial<Record<LanguageCode, Strings>>)[lang]

const problemStrings = (lang: LanguageCode): Strings | undefined =>
  ({
    es: { ...es1, ...es2 },
    'pt-br': { ...ptBr1, ...ptBr2 },
    de: { ...de1, ...de2 },
    fr: { ...fr1, ...fr2 },
    it: { ...it1, ...it2 },
    nl: { ...nl1, ...nl2 },
    id: { ...id1, ...id2 },
    tr: { ...tr1, ...tr2 },
  } as Partial<Record<LanguageCode, Strings>>)[lang]

const caches = /* @__PURE__ */ new Map<string, unknown[]>()

function localized<T extends { slug: string }>(kind: string, items: readonly T[], strings: Strings | undefined, lang: LanguageCode): readonly T[] {
  if (lang === 'en' || !strings) return items
  const key = `${kind}/${lang}`
  let list = caches.get(key) as T[] | undefined
  if (!list) {
    list = items.map((item) => applyStrings(item, strings[item.slug] ?? [], `${lang}/${item.slug}`))
    caches.set(key, list)
  }
  return list
}

export const getProblems = (lang: LanguageCode) => localized<ScreenProblemItem>('problems', SCREEN_PROBLEMS, problemStrings(lang), lang)
export const getTerms = (lang: LanguageCode) => localized<GlossaryItem>('terms', GLOSSARY_ITEMS, termStrings(lang), lang)

export const getProblem = (slug: string, lang: LanguageCode) => getProblems(lang).find((item) => item.slug === slug)
export const getTerm = (slug: string, lang: LanguageCode) => getTerms(lang).find((item) => item.slug === slug)

/** Article slug → short menu label in `lang` (the second string of every article). */
export const problemLabels = (lang: LanguageCode) => Object.fromEntries(Object.entries(problemStrings(lang) ?? {}).map(([slug, strings]) => [slug, strings[1]]))
export const termLabels = (lang: LanguageCode) => Object.fromEntries(Object.entries(termStrings(lang) ?? {}).map(([slug, strings]) => [slug, strings[1]]))
