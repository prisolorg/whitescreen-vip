import { ToolPage } from '@/components/tool-page'
import { renderToolComponent } from '@/components/tool-dispatcher'

export function ToolDetailPage({ slug }: { slug: string }) {
  return <ToolPage slug={slug}>{renderToolComponent(slug)}</ToolPage>
}
