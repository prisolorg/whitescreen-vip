import type { LanguageCode } from './locale-routing'
import { getGuides } from './guides-content'
import { getProblems, getTerms } from './article-i18n'

export type LearnMoreLink = { kind: 'guide' | 'problem' | 'glossary'; title: string; href: string; description: string }

const normalize = (path: string) => path.replace(/\/+$/, '') || '/'

/** Guides, screen problems and glossary terms that point at a tool, so the tool page can link back to them. */
export function getLearnMoreLinks(toolPath: string, language: LanguageCode = 'en'): LearnMoreLink[] {
  const target = normalize(toolPath)
  const links: LearnMoreLink[] = []
  for (const guide of getGuides(language)) {
    if (normalize(guide.primaryTool.path) === target) {
      links.push({ kind: 'guide', title: guide.title, href: `/guides/${guide.slug}`, description: guide.metaDescription })
    }
  }
  for (const problem of getProblems(language)) {
    const paths = [problem.quickDiagnostic.toolPath, problem.recommendedTool?.path].filter(Boolean) as string[]
    if (paths.some((path) => normalize(path) === target)) {
      links.push({ kind: 'problem', title: problem.title, href: `/screen-problems/${problem.slug}`, description: problem.metaDescription })
    }
  }
  for (const term of getTerms(language)) {
    if (term.relatedTools.some((tool) => normalize(tool.path) === target)) {
      links.push({ kind: 'glossary', title: term.title, href: `/glossary/${term.slug}`, description: term.metaDescription })
    }
  }
  return links
}
