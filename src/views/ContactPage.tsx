import { useState } from 'react'
import { ContentPage } from '@/components/content-page'
import { ActionButton } from '@/components/tool-kit/controls'
import { siteConfig } from '@/lib/site'
import { Send, CheckCircle } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'
import { CONTACT_TRANSLATIONS } from '@/lib/content-pages-translations'

export function ContactPage() {
  const { language } = useTranslation()
  const content = CONTACT_TRANSLATIONS[language] || CONTACT_TRANSLATIONS.en

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || !email.trim()) return
    // There is no backend, so hand the message to the visitor's mail app instead of dropping it.
    const body = `${message.trim()}\n\n— ${name.trim() || email.trim()} <${email.trim()}>`
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject.trim() || 'WhiteScreen.vip contact')}&body=${encodeURIComponent(body)}`
    setIsSent(true)
  }

  return (
    <ContentPage title={content.title} description={content.description}>
      <p>
        {content.introText}{' '}
        <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>

      {isSent ? (
        <div className="my-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-center text-foreground not-prose">
          <CheckCircle className="mx-auto size-10 text-emerald-500 mb-2" />
          <h3 className="text-lg font-semibold">{content.successTitle}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {content.successDesc}
          </p>
          <button
            type="button"
            onClick={() => {
              setMessage('')
              setSubject('')
              setIsSent(false)
            }}
            className="mt-4 text-xs font-medium text-primary hover:underline"
          >
            {content.sendAnother}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="my-6 flex flex-col gap-4 not-prose rounded-2xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold text-base mb-1">{content.formTitle}</h3>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-xs font-medium text-muted-foreground">
                {content.nameLabel}
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={content.namePlaceholder}
                className="h-10 rounded-lg border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-xs font-medium text-muted-foreground">
                {content.emailLabel} <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content.emailPlaceholder}
                className="h-10 rounded-lg border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-subject" className="text-xs font-medium text-muted-foreground">
              {content.subjectLabel}
            </label>
            <input
              id="contact-subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={content.subjectPlaceholder}
              className="h-10 rounded-lg border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="text-xs font-medium text-muted-foreground">
              {content.messageLabel} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={content.messagePlaceholder}
              className="rounded-lg border bg-background p-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="pt-2">
            <ActionButton type="submit" variant="primary">
              <Send aria-hidden="true" className="size-4" />
              {content.sendButton}
            </ActionButton>
          </div>
        </form>
      )}

      <h2>{content.reportingTitle}</h2>
      <p>{content.reportingIntro}</p>
      <ul>
        <li>{content.reportingItem1}</li>
        <li>{content.reportingItem2}</li>
        <li>{content.reportingItem3}</li>
      </ul>
      <p>{content.reportingFooter}</p>
    </ContentPage>
  )
}
