import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Screen Resolution Test page (English H1: What Is My Screen Resolution?). Order follows search demand:
 * what is my screen resolution / my screen resolution / screen resolution (~27K) → screen resolution check / test,
 * how to check on Windows and Mac (~2.8K) → phone and mobile resolution (~1.9K) → common resolutions, 4K, screen size (~1.7K).
 */
export function ScreenResolutionGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: what is my screen resolution / my screen resolution / screen resolution / my resolution (~27K) */}
      <Section wide id="read-heading" title="My Screen Resolution: What Each Number Means">
        <p className={p}>
          What is my screen resolution? This page answers on its own, with no button to press. Here is what each reading shows:
        </p>
        <Table
          caption="Screen resolution test readings"
          head={['Reading', 'What it means']}
          rows={[
            ['Screen resolution', 'Your screen size in CSS pixels, after display scaling'],
            ['Physical pixels', 'The real pixel count: screen resolution × pixel ratio. This is usually your monitor’s native resolution'],
            ['Browser viewport', 'The space inside the browser window'],
            ['Available area', 'The screen minus the taskbar or dock'],
            ['Pixel ratio', 'How many physical pixels make one CSS pixel (1 = no scaling)'],
            ['Color depth', 'Bits per pixel the browser reports, usually 24-bit'],
          ]}
        />
        <p className={p}>
          Values update live when you resize the window or rotate a phone. Keep browser zoom at 100%, because zoom changes the pixel ratio
          and the physical pixel count.
        </p>
      </Section>

      {/* Cluster: how to check screen resolution / check monitor resolution / what resolution is my monitor (~3.5K) */}
      <Section wide id="check-heading" title="Screen Resolution in Your Display Settings">
        <p className={p}>
          The screen resolution test reads what your browser sees. To check monitor resolution in your system settings, or change it:
        </p>
        <Table
          caption="Where to find the display resolution setting"
          head={['Device', 'Where to look']}
          rows={[
            ['Windows 11 / 10', 'Settings → System → Display → Display resolution (the one marked Recommended is native)'],
            ['Mac', 'System Settings → Displays (a scaled setting can make Physical pixels differ from the panel’s native size)'],
            ['iPhone / iPad', 'Fixed by the model; use the physical pixels reading above'],
            ['Android', 'Settings → Display → Screen resolution (on some phones only)'],
          ]}
        />
        <p className={p}>
          If the screen resolution check shows fewer physical pixels than your monitor&apos;s spec, the display is not set to its native
          resolution, and text can look blurry.
        </p>
      </Section>

      {/* Cluster: phone resolution / mobile resolution / what is my phone resolution / android (~1.9K) */}
      <Section wide id="phone-heading" title="What Is My Screen Resolution on a Phone?">
        <p className={p}>
          Phones report a small resolution, such as 390 × 844, because they scale everything up for sharp text. Your real phone
          resolution is the Physical pixels reading: for example, 390 × 844 at a pixel ratio of 3 is 1170 × 2532.
        </p>
      </Section>

      {/* Cluster: screen resolutions / display resolution chart / is my monitor 4k / hd / screen size in pixels (~1.7K) */}
      <Section wide id="common-heading" title="Common Screen Resolutions: HD to 4K">
        <Table
          caption="Common display resolutions"
          head={['Name', 'Resolution', 'Typical screens']}
          rows={[
            ['HD', '1280 × 720', 'Older laptops and TVs'],
            ['Full HD (1080p)', '1920 × 1080', 'Most monitors and laptops'],
            ['QHD (1440p)', '2560 × 1440', 'Gaming and office monitors'],
            ['4K UHD', '3840 × 2160', '4K monitors and TVs'],
          ]}
        />
        <ul className={ul}>
          <li>Is my monitor 4K? It is if Physical pixels reads 3840 × 2160 at 100% browser zoom.</li>
          <li>
            A browser can&apos;t read screen size in inches; this page shows screen size in pixels only.
          </li>
          <li>
            Check sharpness at your resolution with the fine lines in the <Link href="/monitor-test" className={link}>screen test</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
