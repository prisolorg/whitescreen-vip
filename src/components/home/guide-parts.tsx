import type { ReactNode } from 'react'

/** Shared layout for the keyword-led colour screen guides: section, headings, copy styles and tables. */

export const h2 = 'text-xl sm:text-2xl font-bold tracking-tight text-foreground'
export const h3 = 'mt-6 text-base sm:text-lg font-semibold text-foreground'
export const p = 'mt-3 text-sm sm:text-[15px] leading-relaxed text-muted-foreground'
export const ul = 'mt-3 list-disc space-y-1.5 pl-5 text-sm sm:text-[15px] leading-relaxed text-muted-foreground marker:text-foreground/40'
export const link = 'font-semibold text-primary hover:underline'

/** `wide` matches the colour pages' container (max-w-6xl); the home page uses the narrower default. */
export function Section({ id, title, wide, children }: { id: string; title: string; wide?: boolean; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className={wide ? 'mx-auto max-w-6xl px-4 sm:px-6' : 'mx-auto max-w-5xl px-3 sm:px-6'}>
      <h2 id={id} className={h2}>
        {title}
      </h2>
      {children}
    </section>
  )
}

export function Table({ caption, head, rows }: { caption: string; head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-muted/50 text-foreground">
          <tr>
            {head.map((cell) => (
              <th key={cell} scope="col" className="px-4 py-2.5 font-semibold">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border text-muted-foreground">
          {rows.map((row, i) => (
            <tr key={i} className="bg-card">
              {row.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="px-4 py-2.5 font-medium text-foreground">
                    {cell}
                  </th>
                ) : (
                  <td key={j} className="px-4 py-2.5">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

