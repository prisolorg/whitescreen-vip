import { LegalPageView } from './LegalPage'
import { TERMS_OF_USE } from '@/lib/legal-pages'

export function TermsPage() {
  return <LegalPageView page={TERMS_OF_USE} />
}
