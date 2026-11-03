import { ContentPage } from '@/components/content-page'
import { JsonLd } from '@/components/json-ld'
import { AUTHOR, SOCIAL_PROFILES } from '@/lib/author'
import { absoluteUrl, siteConfig } from '@/lib/site'
import { GUIDES } from '@/lib/guides-content'
import Link from 'next/link'

/** The author profile: who builds and tests the tools, with ProfilePage/Person schema. */
export function AuthorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: absoluteUrl(AUTHOR.path),
    mainEntity: {
      '@type': 'Person',
      '@id': `${absoluteUrl(AUTHOR.path)}#person`,
      name: AUTHOR.name,
      jobTitle: AUTHOR.jobTitle,
      description: AUTHOR.bio[0],
      url: absoluteUrl(AUTHOR.path),
      alumniOf: { '@type': 'CollegeOrUniversity', name: AUTHOR.alumniOf },
      knowsAbout: AUTHOR.expertise,
      worksFor: { '@type': 'Organization', name: siteConfig.name, url: absoluteUrl('/') },
      sameAs: SOCIAL_PROFILES.map((profile) => profile.url),
    },
  }

  return (
    <ContentPage title={AUTHOR.name} description={`${AUTHOR.jobTitle} · Creator of ${siteConfig.name}`}>
      <JsonLd data={schema} />
      <div className="flex items-center gap-4">
        <span aria-hidden="true" className="flex size-16 shrink-0 items-center justify-center rounded-full bg-foreground text-xl font-semibold text-background">
          WR
        </span>
        <p className="text-sm text-muted-foreground">
          Founder of {siteConfig.name} at the {AUTHOR.studio} studio · United States
        </p>
      </div>
      {AUTHOR.bio.map((paragraph) => (
        <p key={paragraph.slice(0, 30)}>{paragraph}</p>
      ))}
      <h2>Expertise</h2>
      <ul>
        {AUTHOR.expertise.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>Education</h2>
      <p>{AUTHOR.education}</p>
      <h2>Certifications</h2>
      <ul>
        {AUTHOR.certifications.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>How Whitson tests the tools</h2>
      <p>
        Every tool is checked on real LCD, IPS, VA and OLED monitors, laptops, phones and TVs before it goes live. Test patterns
        use exact color values, timers count against the system clock, and nothing you do is uploaded. Read more{' '}
        <Link href="/about">about the site</Link>.
      </p>
      <h2>Guides by Whitson Rao</h2>
      <ul>
        {GUIDES.map((guide) => (
          <li key={guide.slug}>
            <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
          </li>
        ))}
      </ul>
      <h2>Find WhiteScreen.vip online</h2>
      <ul>
        {SOCIAL_PROFILES.map((profile) => (
          <li key={profile.url}>
            <a href={profile.url} target="_blank" rel="noopener me">
              {profile.name}
            </a>
          </li>
        ))}
      </ul>
    </ContentPage>
  )
}
