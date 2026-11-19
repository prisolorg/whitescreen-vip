import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Graph Paper page (English). Grouped by intent, in order of demand:
 * graph paper / grid paper / graphing paper / squared paper + misspellings (~220K) → printable graph paper, pdf, template,
 * free (~115K) → graph paper online, image, background, drawing (~14K) → square size, math, large, small, inch (~11K) →
 * blank graph paper, blank grid, empty graph (~9K).
 * Facts match the tool: PNG only (no PDF); the grid scales with the image, about 54 small squares across the short side
 * with a bold line every 5th (src/lib/background-paint.ts), so it is not ruled in inches. Style menu: Blue, Green, Gray,
 * Yellow Pad, Pink and Dark grids (src/lib/background-shades.ts).
 */
export function GraphPaperGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: graph paper / grid paper / graphing paper / graphic paper / squared paper / graph sheet + misspellings (~220K) */}
      <Section wide id="how-heading" title="Graph Paper: Show a Grid Full Screen or Download It">
        <p className={p}>
          Free graph paper, also called grid paper, graphing paper or squared paper: fine lines on every small square and a bold line every 5
          squares, like a math notebook.
        </p>
        <Table
          caption="How to use this page"
          head={['You want', 'Do this']}
          rows={[
            ['Fill your screen with the grid', 'Press Fullscreen, double-tap the preview or press F'],
            ['Change the grid color', 'Pick Blue, Green, Gray, Yellow Pad, Pink or Dark grid in the Style menu'],
            ['Save or print it', 'Press Download PNG, then pick a size'],
            ['Use the grid in a web page', 'Press Copy CSS'],
          ]}
        />
        <p className={p}>The preview, download and CSS all use the style you pick. No sign-up and no watermark.</p>
      </Section>

      {/* Cluster: graph paper printable / printable graph paper / grid paper printable / graph paper pdf / template / free (~115K) */}
      <Section wide id="print-heading" title="Printable Graph Paper: Print It on Letter or A4">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Press Download PNG and enter a custom size: 2550 × 3300 for US Letter or 2480 × 3508 for A4.</li>
          <li>Open the image and print it with Fit to page.</li>
          <li>Choose the Gray grid for a neutral page, or Blue for the classic notebook look.</li>
        </ol>
        <p className={p}>
          There is no graph paper PDF download. To get a PDF, choose Save as PDF in the print dialog instead of a printer.
        </p>
      </Section>

      {/* Cluster: online graph paper / graph paper image / graph paper background / png / graphing paper drawing (~14K) */}
      <Section wide id="online-heading" title="Online Graph Paper: Draw, Trace or Use It as a Background">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Drawing and tracing:</strong> go full screen, turn the brightness up and lay thin
            paper over a tablet to trace along the grid, or plan pixel art and lettering.
          </li>
          <li>
            <strong className="text-foreground">Images and backgrounds:</strong> save a graph paper image in 1080p or 4K for slides
            and video, or the Phone size for a wallpaper.
          </li>
        </ul>
      </Section>

      {/* Cluster: graph paper square size / math graph paper / large / small / 1 inch / 1/4 inch graph paper (~11K) */}
      <Section wide id="size-heading" title="Graph Paper Square Size: How Big Are the Squares?">
        <p className={p}>
          The grid scales with the image, so it always has about 54 small squares across the short side, with a bold line every
          5. Printed on Letter or A4, each small square is about 4 mm (roughly 1/6 inch), a good size for math homework.
        </p>
        <p className={p}>
          The lines are not measured in inches, so for exact 1/4 inch or 1 inch graph paper use a ruled template.
        </p>
      </Section>

      {/* Cluster: blank graph paper / blank graph / blank grid / empty graph / blank line graph (~9K) */}
      <Section wide id="blank-heading" title="Blank Graph Paper: An Empty Grid With No Numbers">
        <p className={p}>
          The grid has no axes, numbers or labels. Draw your own axes for a line graph, bar graph or coordinate plane, or keep it
          empty for notes. For a plain page without lines, use the{' '}
          <Link href="/backgrounds/white-background" className={link}>white background</Link>.
        </p>
      </Section>
    </div>
  )
}
