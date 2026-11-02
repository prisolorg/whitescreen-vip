import { Section } from '@/components/section'
import { getHomeContent } from '@/lib/home-content'
import { useTranslation } from '@/lib/i18n'

export function HowToUse() {
  const { language } = useTranslation()
  const content = getHomeContent(language)

  return (
    <Section
      id="how-to-use"
      eyebrow={content.howToUseEyebrow}
      title={content.howToUseTitle}
      description={content.howToUseDesc}
    >
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.steps.map((step, index) => (
          <li key={step.title} className="rounded-xl border bg-card p-5">
            <span className="mb-4 flex size-8 items-center justify-center rounded-full bg-primary font-mono text-sm text-primary-foreground font-semibold">
              {index + 1}
            </span>
            <h3 className="font-medium text-foreground">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-8 rounded-xl border bg-card p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs sm:text-sm">
        <p className="text-muted-foreground">
          Looking for detailed step-by-step instructions? Read our in-depth tutorials on{' '}
          <a href="/guides/clean-laptop-screen" className="font-semibold text-primary hover:underline">
            monitor cleaning
          </a>{' '}
          and{' '}
          <a href="/guides/dead-pixel-test" className="font-semibold text-primary hover:underline">
            dead pixel diagnostics
          </a>.
        </p>
        <a
          href="/guides"
          className="inline-flex items-center gap-1 font-semibold text-primary hover:underline shrink-0"
        >
          <span>All 10 display guides</span>
          <span>→</span>
        </a>
      </div>
    </Section>
  )
}
