import type { ReactNode } from 'react'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { StageHeadingContext } from '@/components/screen-stage/stage-parts'
import { getTool, toolPath } from '@/lib/tools'
import { getCategory } from '@/lib/tool-categories'
import { getToolContent } from '@/lib/tool-content'
import { COLOR_HUB_NAMES, hubForTool } from '@/lib/hubs'
import { useTranslation } from '@/lib/i18n'
import { getLocalizedCategory, getLocalizedTool } from '@/lib/localized-tools'

export function toolMetadata(slug: string): Record<string, unknown> {
  const tool = getTool(slug)
  const content = getToolContent(slug)
  const path = toolPath(slug)
  return {
    title: { absolute: content.title },
    description: tool.description,
    keywords: tool.keywords,
    alternates: { canonical: path },
    openGraph: { type: 'website', title: content.title, description: tool.description, url: path },
    twitter: { card: 'summary_large_image', title: content.title, description: tool.description },
  }
}

/** The interactive part of a tool page (hydrated): breadcrumbs, the tool itself and next links. */
export function ToolPage({ slug, children }: { slug: string; children: ReactNode }) {
  const { t, language } = useTranslation()
  const tool = getTool(slug)
  const localizedTool = getLocalizedTool(tool, language)
  const category = getCategory(tool.category)
  const localizedCat = getLocalizedCategory(category, language)
  const hub = hubForTool(tool)
  const hubName = language === 'en' && hub ? hub.name : hub?.group === 'colors' ? COLOR_HUB_NAMES[language][0] : localizedCat.name

  return (
    <>
      <section aria-labelledby="screen-heading" className="pb-2 pt-3 sm:pt-4">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-3 sm:px-6">
          <Breadcrumbs
            items={[
              { label: t('home', 'Home'), href: '/' },
              { label: hubName, href: hub?.path ?? `/tools#${category.id}` },
              { label: localizedTool.name, href: toolPath(slug) },
            ]}
          />
          {/* The stage shows the page title on itself, like the color screens. */}
          <StageHeadingContext.Provider value={{ title: localizedTool.name, intro: localizedTool.description }}>
            {children}
          </StageHeadingContext.Provider>
        </div>
      </section>

    </>
  )
}
