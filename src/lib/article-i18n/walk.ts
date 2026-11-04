/**
 * Articles are translated as flat lists of strings, in the order this walk visits them, so the
 * data files hold only text. Links, slugs and other non-text fields always come from English.
 */
const SKIP_KEYS = new Set(['slug', 'path', 'toolPath', 'url', 'href', 'type', 'organization'])
const isText = (value: string) => /[A-Za-z]{2}/.test(value)

function walk(value: unknown, visit: (text: string) => string): unknown {
  if (typeof value === 'string') return isText(value) ? visit(value) : value
  if (Array.isArray(value)) return value.map((entry) => walk(entry, visit))
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, SKIP_KEYS.has(key) ? entry : walk(entry, visit)]))
  }
  return value
}

/** Every translatable string of an article, in order. */
export function collectStrings(article: unknown): string[] {
  const strings: string[] = []
  walk(article, (text) => {
    strings.push(text)
    return text
  })
  return strings
}

/** The article with its text replaced by `strings`. Throws if the list does not line up. */
export function applyStrings<T>(article: T, strings: readonly string[], label: string): T {
  let index = 0
  const translated = walk(article, () => strings[index++]) as T
  if (index !== strings.length) throw new Error(`${label}: expected ${index} strings, got ${strings.length}`)
  return translated
}
