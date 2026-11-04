/**
 * Privacy policy, terms and disclaimer. English only: one authoritative version of each, written
 * to cover what Google AdSense requires (cookies, third-party ad vendors, opt-out and consent).
 * Links use [label](url) and render through RichText.
 */
import { siteConfig } from './site'

export type LegalSection = { heading: string; paragraphs: string[]; list?: string[] }

export type LegalPage = {
  title: string
  description: string
  updated: string
  /** Plain-language summary shown first. */
  summary: string[]
  sections: LegalSection[]
}

const EMAIL = siteConfig.contactEmail
const UPDATED = 'November 3, 2026'

export const PRIVACY_POLICY: LegalPage = {
  title: 'Privacy Policy',
  description:
    'How WhiteScreen.vip handles data: tools run in your browser, what cookies Google ads and Microsoft Clarity use, and how to opt out or contact us.',
  updated: 'November 4, 2026',
  summary: [
    'Our screen tools run in your browser. Colors, settings, camera previews and sounds never leave your device.',
    'We show ads from Google AdSense and use Microsoft Clarity to see how the site is used. Both may use cookies.',
    'You can turn off personalized ads at any time, and we never sell your personal information.',
  ],
  sections: [
    {
      heading: 'Who we are',
      paragraphs: [
        `WhiteScreen.vip is a free collection of browser-based screen tools, created by [Whitson Rao](/author-whitson-rao/) and run by the PurelyUX studio. For any privacy question, email [${EMAIL}](mailto:${EMAIL}).`,
      ],
    },
    {
      heading: 'Information we collect',
      paragraphs: ['We keep collection to the minimum needed to run and improve the site:'],
      list: [
        'Tool data: your color choices, timer settings and preferences are saved only in your browser’s local storage. Camera previews in the fake meeting tools are shown on your screen and are never recorded or uploaded.',
        'Usage data: like every website, our host receives standard request data (IP address, browser type, pages visited, time of visit) to deliver pages and protect against abuse.',
        'Analytics: we use Microsoft Clarity to see which tools are useful and where pages cause problems. Clarity captures how you use the site, including clicks, scrolling, heatmaps and session replays, along with device details and approximate location. See the [Microsoft Privacy Statement](https://privacy.microsoft.com/privacystatement).',
        'Messages you send: if you use the contact or feedback form, we receive what you write and the email address you give, and use it only to reply.',
      ],
    },
    {
      heading: 'Cookies and advertising',
      paragraphs: [
        'We use Google AdSense to show ads, which keeps every tool free. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites.',
        'Google’s use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the Internet. Learn more in [how Google uses information from sites that use its services](https://policies.google.com/technologies/partner-sites).',
        'Microsoft Clarity may also use first- and third-party cookies to collect the analytics described above. Microsoft may use this data as set out in its privacy statement.',
        'You may opt out of personalized advertising by visiting [Google Ads Settings](https://adssettings.google.com). You can also opt out of some third-party vendors’ use of cookies for personalized advertising at [aboutads.info](https://www.aboutads.info/choices/) or, in Europe, [youronlinechoices.eu](https://www.youronlinechoices.eu/). If you opt out, you will still see ads, but they will be less relevant.',
      ],
    },
    {
      heading: 'Consent in the EEA, UK and Switzerland',
      paragraphs: [
        'Visitors from the European Economic Area, the United Kingdom and Switzerland see a consent message from a Google-certified consent management platform before personalized ads or non-essential cookies are used. You can change your choice at any time from the privacy settings link in that message.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'Depending on where you live (for example under the GDPR or US state laws such as the CCPA/CPRA), you may have the right to access, correct or delete personal information, to object to processing, and to opt out of targeted advertising. We do not sell personal information for money. Browsers that send a Global Privacy Control signal are treated as an opt-out of targeted advertising where the law requires it.',
        `To make a request, email [${EMAIL}](mailto:${EMAIL}). We reply within 30 days.`,
      ],
    },
    {
      heading: 'Children',
      paragraphs: [
        'WhiteScreen.vip is a general-audience site and is not directed at children under 13 (or under 16 in the EEA). We do not knowingly collect personal information from children. If you believe a child has sent us personal information, contact us and we will delete it.',
      ],
    },
    {
      heading: 'Retention and security',
      paragraphs: [
        'Server logs are kept for a short period for security and then deleted. Messages are kept only as long as needed to answer them. The site is served over HTTPS.',
      ],
    },
    {
      heading: 'Changes to this policy',
      paragraphs: [
        'We update this page when our practices change and show the date of the latest revision at the top.',
      ],
    },
  ],
}

export const TERMS_OF_USE: LegalPage = {
  title: 'Terms of Use',
  description:
    'The rules for using WhiteScreen.vip: free personal and commercial use, prank and safety guidelines, ads, trademarks and limits of liability.',
  updated: UPDATED,
  summary: [
    'The tools are free for personal and commercial use.',
    'Use the prank and fake screens for fun only: never to deceive someone for money or access.',
    'The site is provided as is, and ads from Google help keep it free.',
  ],
  sections: [
    {
      heading: 'Acceptance of these terms',
      paragraphs: ['By using WhiteScreen.vip you agree to these terms. If you do not agree, please do not use the site.'],
    },
    {
      heading: 'Using the tools',
      paragraphs: ['You may use every tool for free, at home or at work, including in videos, streams and photo shoots. You agree not to:'],
      list: [
        'use fake update, error, meeting or hacked screens to scam, threaten or mislead anyone, or to gain money or access to a device or account;',
        'copy or republish the site’s code, text or design as your own service;',
        'interfere with the site, for example by overloading it with automated requests.',
      ],
    },
    {
      heading: 'Health and safety',
      paragraphs: [
        'Some tools flash, cycle colors quickly or play sound. Do not use them if you have photosensitive epilepsy or light sensitivity, keep volume at a safe level, and take regular breaks from bright screens. See the [Disclaimer](/disclaimer/) for details.',
      ],
    },
    {
      heading: 'Intellectual property and trademarks',
      paragraphs: [
        'The site’s design, code and text belong to WhiteScreen.vip. Windows, macOS, ChromeOS, Android, Ubuntu, Zoom, Microsoft Teams, Google Meet and Slack are trademarks of their owners. Our simulations are original look-alikes made for entertainment and are not affiliated with or endorsed by those companies.',
      ],
    },
    {
      heading: 'Advertising and external links',
      paragraphs: [
        'The site shows ads served by Google AdSense, and some pages link to other websites. We do not control third-party ads or sites and are not responsible for their content, products or privacy practices.',
      ],
    },
    {
      heading: 'No warranty',
      paragraphs: [
        'The tools are provided “as is” and “as available”, without warranties of any kind. Test results depend on your device, browser and settings and are not a substitute for professional calibration or repair.',
      ],
    },
    {
      heading: 'Limitation of liability',
      paragraphs: [
        'To the fullest extent allowed by law, WhiteScreen.vip and its creators are not liable for any indirect or consequential damage, data loss or hardware issue arising from use of the site.',
      ],
    },
    {
      heading: 'Changes and governing law',
      paragraphs: [
        'We may update these terms at any time; the date at the top shows the latest version. These terms are governed by the laws of the United States.',
        `Questions? Email [${EMAIL}](mailto:${EMAIL}) or use the [contact page](/contact/).`,
      ],
    },
  ],
}

export const DISCLAIMER: LegalPage = {
  title: 'Disclaimer',
  description:
    'Important notes on using WhiteScreen.vip: general information only, photosensitivity and noise safety, display care, simulations and advertising.',
  updated: UPDATED,
  summary: [
    'Our tools and guides are for general information and entertainment, not professional advice.',
    'Flashing effects and loud noise can be harmful for some people. Use them with care.',
    'The site is supported by ads from Google.',
  ],
  sections: [
    {
      heading: 'General information',
      paragraphs: [
        'The tools, guides and articles on WhiteScreen.vip are provided for general information. We work to keep them accurate, but we make no guarantee that any test result or explanation is complete or suitable for your specific device.',
      ],
    },
    {
      heading: 'Not professional advice',
      paragraphs: [
        'Display tests do not replace calibration with a colorimeter or an inspection by the manufacturer. The white, pink and brown noise generators are not medical devices: talk to a doctor about sleep problems, tinnitus or ADHD.',
      ],
    },
    {
      heading: 'Health and visual comfort',
      paragraphs: [
        'Rapidly changing colors and flashing patterns can trigger seizures in people with photosensitive epilepsy. Bright screens can cause eye strain: lower the brightness and follow the 20-20-20 rule (every 20 minutes, look at something 20 feet away for 20 seconds). Keep noise at a comfortable, low volume, especially for children.',
      ],
    },
    {
      heading: 'Display care',
      paragraphs: [
        'Static images left on screen for hours can cause image retention on OLED and plasma displays. Burn-in “fixer” patterns may reduce temporary retention but cannot repair permanent burn-in. Use them at your own risk.',
      ],
    },
    {
      heading: 'Simulations and trademarks',
      paragraphs: [
        'Fake update, blue screen, meeting and hacked screens are clearly labeled simulations. They do not install anything, access your files or connect to any service. Product names belong to their owners and appear only to describe what is simulated.',
      ],
    },
    {
      heading: 'Advertising and external links',
      paragraphs: [
        'WhiteScreen.vip shows ads from Google AdSense, which pay for hosting and development. Ads are labeled and are not endorsements. Links to other websites are provided for reference; we are not responsible for their content.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [`Questions about this disclaimer? Email [${EMAIL}](mailto:${EMAIL}).`],
    },
  ],
}
