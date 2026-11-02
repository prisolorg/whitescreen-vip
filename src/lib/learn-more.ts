import { GUIDES } from './guides-content'
import { SCREEN_PROBLEMS } from './screen-problems-data'
import { GLOSSARY_ITEMS } from './glossary-data'

export type LearnMoreLink = { kind: 'guide' | 'problem' | 'glossary'; title: string; href: string; description: string }

const normalize = (path: string) => path.replace(/\/+$/, '') || '/'

/** Guides, screen problems and glossary terms that point at a tool, so the tool page can link back to them. */
export function getLearnMoreLinks(toolPath: string): LearnMoreLink[] {
  const target = normalize(toolPath)
  const links: LearnMoreLink[] = []
  for (const guide of GUIDES) {
    if (normalize(guide.primaryTool.path) === target) {
      links.push({ kind: 'guide', title: guide.title, href: `/guides/${guide.slug}`, description: guide.metaDescription })
    }
  }
  for (const problem of SCREEN_PROBLEMS) {
    const paths = [problem.quickDiagnostic.toolPath, problem.recommendedTool?.path].filter(Boolean) as string[]
    if (paths.some((path) => normalize(path) === target)) {
      links.push({ kind: 'problem', title: problem.title, href: `/screen-problems/${problem.slug}`, description: problem.metaDescription })
    }
  }
  for (const term of GLOSSARY_ITEMS) {
    if (term.relatedTools.some((tool) => normalize(tool.path) === target)) {
      links.push({ kind: 'glossary', title: term.title, href: `/glossary/${term.slug}`, description: term.metaDescription })
    }
  }
  return links
}
