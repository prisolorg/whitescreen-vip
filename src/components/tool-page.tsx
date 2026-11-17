import type { ReactNode } from 'react'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { STUDIO_BAND, StageHeadingContext } from '@/components/screen-stage/stage-parts'
import { ToolRatingPrompt } from '@/components/tool-rating'
import { TryNextGallery } from '@/components/try-next-gallery'
import { STUDIO_TOOL_PAGES } from '@/lib/studio-layout'
import { cn } from '@/lib/utils'
import { RailAd, ToolWithAds } from '@/components/tool-ads'
import { getTool, toolPath } from '@/lib/tools'
import { getCategory } from '@/lib/tool-categories'
import { getToolContent } from '@/lib/tool-content'
import { COLOR_HUB_NAMES, hubForTool } from '@/lib/hubs'
import { useTranslation } from '@/lib/i18n'
import { getLocalizedCategory, getLocalizedTool } from '@/lib/localized-tools'
import { toolH1 } from '@/lib/tool-content/h1'

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

/** The interactive part of a tool page (hydrated): breadcrumbs and the tool itself. The next links are GalleryIsland. */
export function ToolPage({ slug, children }: { slug: string; children: ReactNode }) {
  const { t, language } = useTranslation()
  const tool = getTool(slug)
  const localizedTool = getLocalizedTool(tool, language)
  const category = getCategory(tool.category)
  const localizedCat = getLocalizedCategory(category, language)
  const hub = hubForTool(tool)
  const hubName = language === 'en' && hub ? hub.name : hub?.group === 'colors' ? COLOR_HUB_NAMES[language][0] : localizedCat.name

  // English pages can lead with a broader keyword than the tool name (see TOOL_H1_EN).
  const heading = toolH1(slug, language, localizedTool.name)

  if (STUDIO_TOOL_PAGES) {
    // Studio layout: same as the colour screens: title on top, the tool sized so its controls stay above
    // the fold, and the 300×600 ad beside it on desktop. No breadcrumbs, subtitle or rating row, so the
    // related tools start right under the tool, around the fold.
    return (
      <section aria-labelledby="screen-heading" className="pb-2">
        <div data-wide-page="" data-compact-header="" className="mx-auto max-w-[1316px] px-3 sm:px-6">
          <div className={cn('grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]', STUDIO_BAND, 'pt-2.5 sm:pt-3')}>
            <div className="flex min-w-0 flex-col gap-2">
              <header className="flex flex-col items-center gap-1 text-center">
                <h1 id="screen-heading" className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {heading}
                </h1>
              </header>
              <StageHeadingContext.Provider value={{ title: heading, studio: true, attached: true }}>{children}</StageHeadingContext.Provider>
              <ToolRatingPrompt />
              {/* Related tools right under the controls, beside the ad, so they start above the fold. */}
              <TryNextGallery currentSlug={slug} video toolLayout className="mt-3" />
            </div>
            <RailAd />
          </div>
        </div>
      </section>
    )
  }

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
            <ToolWithAds>{children}</ToolWithAds>
          </StageHeadingContext.Provider>
        </div>
      </section>

    </>
  )
}
