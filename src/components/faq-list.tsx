import { ChevronDown } from 'lucide-react'
import type { ToolFaq } from '@/lib/tool-content/types'
import { RichText } from './rich-text'

export function FaqList({ faqs }: { faqs: readonly ToolFaq[] }) {
  return (
    <div className="divide-y overflow-hidden rounded-xl border bg-card">
      {faqs.map((faq) => (
        <details key={faq.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium transition-colors hover:bg-muted/50 [&::-webkit-details-marker]:hidden">
            <h3>{faq.question}</h3>
            <ChevronDown
              className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="px-5 pb-5 leading-relaxed text-muted-foreground"><RichText text={faq.answer} /></p>
        </details>
      ))}
    </div>
  )
}
