import { HomeTool } from '@/components/home/home-tool'
import { HomeSections, HOMEPAGE_FAQS } from '@/components/home/home-sections'
import { JsonLd } from '@/components/json-ld'
import { absoluteUrl } from '@/lib/site'

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'White Screen Online',
  url: absoluteUrl('/'),
  description:
    'Open a free fullscreen white screen online. Switch colors, test your display, adjust brightness, and download white screen PNG images.',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires a modern web browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOMEPAGE_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export function HomePage() {
  return (
    <>
      <JsonLd data={webApplicationSchema} />
      <JsonLd data={faqSchema} />
      <HomeTool />
      <HomeSections />
    </>
  )
}
