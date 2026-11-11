import { Section } from '@/components/section'
import { getHomeContent } from '@/lib/home-content'
import { useTranslation } from '@/lib/i18n'

export function UseCases() {
  const { language } = useTranslation()
  const content = getHomeContent(language)

  return (
    <Section
      id="use-cases"
      eyebrow={content.useCasesEyebrow}
      title={content.useCasesTitle}
      className="border-y bg-muted/40"
    >
      <ul className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {content.useCases.map((useCase) => (
          <li key={useCase.title} className="bg-card p-6">
            <h3 className="font-medium text-foreground">{useCase.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {useCase.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
