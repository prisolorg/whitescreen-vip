import { effectsContent, screensaverContent } from './effects'
import { fakeScreenContent } from './fake-screens'
import { screenTestContent } from './screen-tests'
import type { ToolContent } from './types'
import { utilitiesContent } from './utilities'

const ALL_CONTENT: Record<string, ToolContent> = {
  ...screenTestContent,
  ...effectsContent,
  ...screensaverContent,
  ...utilitiesContent,
  ...fakeScreenContent,
}

export function getToolContent(slug: string): ToolContent {
  const content = ALL_CONTENT[slug]
  if (!content) throw new Error(`Missing content for tool "${slug}"`)
  return content
}
