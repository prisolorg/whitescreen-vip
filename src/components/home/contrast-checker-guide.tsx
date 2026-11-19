import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Color Contrast Checker page (English). Order follows search demand:
 * color contrast checker / contrast checker / color contrast (~66K) → wcag contrast checker / ratio (~12K) →
 * accessibility and ADA color checks (~8.5K) → contrast in design, text and finding colors (~1.7K).
 * Brand names (WebAIM, Coolors, ~3.4K) and whole-website accessibility checkers (~21K, a different tool) are left out;
 * bare "contrast" (105K) is too broad to target.
 */
export function ContrastCheckerGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: color contrast checker / contrast checker / colour contrast checker / contrast test / analyzer (~52K) */}
      <Section wide id="how-heading" title="Color Contrast Checker: How to Check Two Colors">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Set the text color: use the picker, or type or paste a hex code such as #1A73E8 (short codes like #333 work too).</li>
          <li>Set the background color the same way.</li>
          <li>Read the contrast ratio and the pass or fail result for each level, with a live preview of your colors.</li>
          <li>If the pair fails, tap the suggested color, or press Swap to flip text and background.</li>
        </ol>
        <p className={p}>
          The suggestion keeps your hue and changes only lightness, as little as needed to pass. The color contrast checker works as a
          contrast checker and contrast test for text, links, buttons and icons.
        </p>
      </Section>

      {/* Cluster: wcag contrast checker / wcag color contrast / contrast ratio / contrast ratio checker (~10K) */}
      <Section wide id="wcag-heading" title="Color Contrast Checker Results: WCAG AA and AAA">
        <p className={p}>WCAG 2 sets these minimum contrast ratios:</p>
        <Table
          caption="WCAG contrast requirements"
          head={['Level', 'Normal text', 'Large text', 'UI components and graphics']}
          rows={[
            ['AA (the usual target)', '4.5:1', '3:1', '3:1'],
            ['AAA (enhanced)', '7:1', '4.5:1', 'No extra requirement'],
          ]}
        />
        <ul className={ul}>
          <li>Large text means at least 24px regular, or about 18.7px (14pt) bold.</li>
          <li>UI components include button borders, input outlines, focus rings and meaningful icons.</li>
          <li>Logos and purely decorative text have no contrast requirement.</li>
        </ul>
      </Section>

      {/* Cluster: contrast ratio / color contrast ratio / contrast calculator / how to measure contrast (~4.5K) */}
      <Section wide id="ratio-heading" title="How the Color Contrast Checker Calculates the Ratio">
        <p className={p}>
          Contrast ratio compares the relative luminance (perceived brightness) of two colors, from 1:1 for identical colors to 21:1 for
          black on white:
        </p>
        <p className={p}>
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">ratio = (L1 + 0.05) / (L2 + 0.05)</code>, where L1 is the
          lighter color&apos;s luminance.
        </p>
        <p className={p}>
          The color contrast checker rounds the ratio down, never up: 4.499:1 shows as 4.49:1 and fails AA, as WCAG intends.
        </p>
      </Section>

      {/* Cluster: accessibility color checker / ada color checker / ada compliant colors / color accessibility (~8.5K) */}
      <Section wide id="ada-heading" title="Color Contrast Checker for Accessibility and ADA">
        <p className={p}>
          The ADA doesn&apos;t list approved colors. In practice, WCAG 2 level AA is the usual benchmark for accessible colors, and US
          Section 508 points to it too. A pair that passes AA here meets the WCAG color contrast part of that.
        </p>
        <p className={p}>What this color contrast checker doesn&apos;t cover:</p>
        <ul className={ul}>
          <li>Whole websites: it checks one color pair at a time, not every page.</li>
          <li>Text over images, gradients or transparent colors: check the lightest and darkest area behind the text.</li>
          <li>Other WCAG rules, such as not using color alone to show meaning.</li>
        </ul>
      </Section>

      {/* Cluster: how to use contrast in design / high contrast text / text contrast / contrast color finder (~1.4K) */}
      <Section wide id="design-heading" title="Color Contrast Checker Tips for Readable Design">
        <ul className={ul}>
          <li>Run body text, links, placeholder text and disabled states through the color contrast checker; light gray is the most common failure.</li>
          <li>Check dark mode separately; a pair that works on white may fail on dark gray.</li>
          <li>Use brand colors that fail for text as accents or backgrounds with white or black text instead.</li>
          <li>Very high contrast, like pure white on pure black, can feel harsh in long text; slightly off-white or off-black still passes AAA.</li>
        </ul>
        <p className={p}>
          To see how colors look on your actual display, try the <Link href="/screen-color-test" className={link}>screen color test</Link>.
        </p>
      </Section>
    </div>
  )
}
