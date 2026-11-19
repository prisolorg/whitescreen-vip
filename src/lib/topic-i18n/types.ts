/** Translated hub pages and color-screen answer blocks for one language. */
export type TopicTranslation = {
  hubs: Record<string, { intro: string; details: { heading: string; text: string }[]; faqs: { question: string; answer: string }[] }>
  colorAnswer: {
    /** "{subject} … ({hex}) … {tail}": the answer-first paragraph for a color screen. */
    template: string
    /** Features shared by every color screen; "{word}" and "{hex}" are filled in. */
    features: [first: string, second: string, last: string]
    benefits: [string, string]
  }
  /** Per color id: subject phrase, color word for "pure {word}", and the color-specific parts. */
  colors: Record<string, { subject: string; word: string; tail: string; feature: string; benefit: string }>
}
