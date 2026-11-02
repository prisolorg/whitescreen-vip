export type ToolFaq = { question: string; answer: string }

export type ToolContent = {
  /** Full <title>, kept under ~60 characters. */
  title: string
  intro: string
  steps: string[]
  useCases: { title: string; description: string }[]
  faqs: ToolFaq[]
}
