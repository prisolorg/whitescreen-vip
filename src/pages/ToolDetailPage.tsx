import { useEffect } from 'react'
import { ToolPage } from '@/components/tool-page'
import { renderToolComponent } from '@/components/tool-dispatcher'
import { getToolContent } from '@/lib/tool-content'

export function ToolDetailPage({ slug }: { slug: string }) {
  useEffect(() => {
    try {
      const content = getToolContent(slug)
      if (content?.title) {
        document.title = `${content.title} | WhiteScreen.vip`
      }
    } catch {
      // Ignore if slug not found
    }
  }, [slug])

  const toolElement = renderToolComponent(slug)

  return <ToolPage slug={slug}>{toolElement}</ToolPage>
}
