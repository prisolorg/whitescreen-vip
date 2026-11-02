import { useState } from 'react'
import { ContentPage } from '@/components/content-page'
import { ActionButton } from '@/components/tool-kit/controls'
import { Star, CheckCircle, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from '@/lib/i18n'
import { FEEDBACK_TRANSLATIONS } from '@/lib/content-pages-translations'
import { siteConfig } from '@/lib/site'

export function FeedbackPage() {
  const { language } = useTranslation()
  const content = FEEDBACK_TRANSLATIONS[language] || FEEDBACK_TRANSLATIONS.en

  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('feature')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return
    // There is no backend, so hand the feedback to the visitor's mail app instead of dropping it.
    const lines = [`Rating: ${rating}/5`, `Category: ${selectedCategory}`, '', message.trim()]
    if (email.trim()) lines.push('', `Reply to: ${email.trim()}`)
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(`WhiteScreen.vip feedback (${selectedCategory})`)}&body=${encodeURIComponent(lines.join('\n'))}`
    setIsSubmitted(true)
  }

  const getRatingLabel = (val: number) => {
    switch (val) {
      case 5:
        return content.ratingExcellent
      case 4:
        return content.ratingGood
      case 3:
        return content.ratingAverage
      default:
        return content.ratingNeedsWork
    }
  }

  return (
    <ContentPage
      title={content.title}
      description={content.description}
    >
      {isSubmitted ? (
        <div className="my-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center text-foreground">
          <CheckCircle className="mx-auto size-12 text-emerald-500 mb-3" />
          <h2 className="text-xl font-semibold !mt-0">{content.successTitle}</h2>
          <p className="mt-2 text-muted-foreground text-sm max-w-md mx-auto">
            {content.successDesc}
          </p>
          <button
            type="button"
            onClick={() => {
              setMessage('')
              setIsSubmitted(false)
            }}
            className="mt-6 text-sm font-medium text-primary hover:underline"
          >
            {content.submitAnother}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6 not-prose">
          {/* Rating */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">{content.ratingLabel}</label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(null)}
                  className="p-1 text-muted-foreground hover:scale-110 transition-transform"
                >
                  <Star
                    className={cn(
                      'size-6 transition-colors',
                      (hoverRating ?? rating) >= star
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-muted-foreground/40',
                    )}
                  />
                </button>
              ))}
              <span className="ml-2 text-xs font-mono text-muted-foreground">
                {getRatingLabel(hoverRating ?? rating)}
              </span>
            </div>
          </div>

          {/* Feedback Type */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">{content.categoryLabel}</label>
            <div className="flex flex-wrap gap-2">
              {content.categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    'rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors',
                    selectedCategory === cat.id
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background hover:bg-muted text-foreground',
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="feedback-message" className="text-sm font-medium">
              {content.messageLabel} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="feedback-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={content.messagePlaceholder}
              className="rounded-xl border bg-background p-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="feedback-email" className="text-sm font-medium">
              {content.emailLabel}{' '}
              <span className="text-xs font-normal text-muted-foreground">{content.emailOptional}</span>
            </label>
            <input
              id="feedback-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.emailPlaceholder}
              className="h-10 rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="pt-2">
            <ActionButton type="submit" variant="primary" className="w-full sm:w-auto">
              <Send aria-hidden="true" className="size-4" />
              {content.sendButton}
            </ActionButton>
          </div>
        </form>
      )}

      <h2>{content.otherWaysTitle}</h2>
      <p>
        {content.otherWaysText}
      </p>
    </ContentPage>
  )
}
