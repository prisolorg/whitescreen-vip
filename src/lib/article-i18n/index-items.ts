import type { LanguageCode } from '../locale-routing'
import { getProblems, getTerms } from '.'
import { articlePageText } from './page-text'

/** What the searchable index islands need, passed as props so article text stays out of their bundle. */
export const problemIndexProps = (lang: LanguageCode) => ({
  text: articlePageText(lang),
  items: getProblems(lang).map(({ slug, title, shortLabel, heroSummary, quickDiagnostic: { toolName, toolPath, actionText } }) => ({ slug, title, shortLabel, heroSummary, toolName, toolPath, actionText })),
})

export const termIndexProps = (lang: LanguageCode) => ({
  text: articlePageText(lang),
  items: getTerms(lang).map(({ slug, title, shortLabel, definition, relatedTools }) => ({ slug, title, shortLabel, definition, toolCount: relatedTools.length })),
})

export type ProblemIndexProps = ReturnType<typeof problemIndexProps>
export type TermIndexProps = ReturnType<typeof termIndexProps>
