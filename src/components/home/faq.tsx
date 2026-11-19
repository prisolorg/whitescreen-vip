import { ChevronDown } from 'lucide-react'
import { Section } from '@/components/section'
import { getHomeContent } from '@/lib/home-content'
import { useTranslation } from '@/lib/i18n'

export function Faq() {
  const { language } = useTranslation()
  const content = getHomeContent(language)

  return (
    <Section
      id="faq"
      eyebrow={content.faqEyebrow}
      title={content.faqTitle}
      className="border-t bg-muted/40"
    >
      <div className="divide-y overflow-hidden rounded-xl border bg-card">
        {content.faqs.map((faq) => (
          <details key={faq.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium transition-colors hover:bg-accent/60 [&::-webkit-details-marker]:hidden">
              <h3 className="text-foreground">{faq.question}</h3>
              <ChevronDown
                className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
