import { Monitor, Palette, ShieldCheck, Zap } from 'lucide-react'
import { Section } from '@/components/section'
import { getHomeContent } from '@/lib/home-content'
import { useTranslation } from '@/lib/i18n'

const icons = { zap: Zap, monitor: Monitor, palette: Palette, shield: ShieldCheck }

export function Benefits() {
  const { language } = useTranslation()
  const content = getHomeContent(language)

  return (
    <Section
      id="benefits"
      eyebrow={content.benefitsEyebrow}
      title={content.benefitsTitle}
      description={content.benefitsDesc}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.benefits.map((benefit) => {
          const Icon = icons[benefit.icon]
          return (
            <li key={benefit.title} className="rounded-xl border bg-card p-5">
              <span className="mb-4 flex size-9 items-center justify-center rounded-lg border bg-muted">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <h3 className="font-medium text-foreground">{benefit.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
