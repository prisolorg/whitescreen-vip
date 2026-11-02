import { useEffect } from 'react'
import { ToolPage } from '@/components/tool-page'
import { renderToolComponent } from '@/components/tool-dispatcher'
import { getToolContent } from '@/lib/tool-content'
import { useTranslation } from '@/lib/i18n'

export function ToolDetailPage({ slug }: { slug: string }) {
  const { language } = useTranslation()

  useEffect(() => {
    // The hand-written SEO titles are English-only; other languages keep the localized title set in App.
    if (language !== 'en') return
    try {
      const content = getToolContent(slug)
      if (content?.title) {
        document.title = `${content.title} | WhiteScreen.vip`
      }
    } catch {
      // Ignore if slug not found
    }
  }, [slug, language])

  const toolElement = renderToolComponent(slug)

  return <ToolPage slug={slug}>{toolElement}</ToolPage>
}
