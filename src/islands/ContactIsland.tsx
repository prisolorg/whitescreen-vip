import { Providers } from './Providers'
import { ContactPage } from '@/views/ContactPage'

export default function ContactIsland({ url }: { url: string }) {
  return (
    <Providers url={url}>
      <ContactPage />
    </Providers>
  )
}
