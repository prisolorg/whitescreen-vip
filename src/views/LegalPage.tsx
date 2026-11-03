import { ContentPage } from '@/components/content-page'
import { RichText } from '@/components/rich-text'
import type { LegalPage } from '@/lib/legal-pages'

/** Privacy policy, terms and disclaimer: a short summary first, then numbered sections. */
export function LegalPageView({ page }: { page: LegalPage }) {
  return (
    <ContentPage title={page.title} description={page.description} updated={page.updated}>
      <aside aria-label="Summary" className="rounded-xl border bg-muted/40 p-5">
        <p className="font-semibold text-foreground">In short</p>
        <ul className="mt-2">
          {page.summary.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </aside>
      {page.sections.map((section, index) => (
        <section key={section.heading} className="flex flex-col gap-3">
          <h2>
            {index + 1}. {section.heading}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>
              <RichText text={paragraph} />
            </p>
          ))}
          {section.list && (
            <ul>
              {section.list.map((item) => (
                <li key={item.slice(0, 40)}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </ContentPage>
  )
}
