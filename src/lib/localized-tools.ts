import type { Tool } from './tools'
import type { ToolCategory } from './tool-categories'
import type { LanguageCode } from './locale-routing'
import { getMessages } from './messages'

/** A tool with its name and description in `lang` (English when there is no translation). */
export function getLocalizedTool(tool: Tool, lang: LanguageCode): Tool {
  const text = lang === 'en' ? undefined : getMessages(lang).tools[tool.slug]
  return text ? { ...tool, name: text.name, description: text.description } : tool
}

/** A tool category with its labels in `lang`. */
export function getLocalizedCategory(category: ToolCategory, lang: LanguageCode): ToolCategory {
  const text = lang === 'en' ? undefined : getMessages(lang).categories[category.id]
  return text ? { ...category, name: text.name, navLabel: text.navLabel, description: text.description } : category
}

/** Translated tool name for a slug, or undefined. */
export function localizedToolName(slug: string, lang: LanguageCode) {
  return lang === 'en' ? undefined : getMessages(lang).tools[slug]?.name
}
