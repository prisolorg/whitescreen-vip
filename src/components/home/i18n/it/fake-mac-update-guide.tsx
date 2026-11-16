import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Aggiornamento falso Mac (italiano). Tradotto dalla guida inglese, con termini di ricerca italiani:
 * schermata aggiornamento Mac / caricamento Apple → scherzo → iPad, iPhone e altri sistemi.
 * I pulsanti hanno i nomi dell'interfaccia italiana dello strumento.
 */
export function FakeMacUpdateGuideIt() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Aggiornamento falso Mac: come funziona la schermata">
        <p className={p}>
          La schermata dell’aggiornamento falso del Mac ricrea la schermata di installazione di macOS: il logo sopra una sottile barra di
          avanzamento e una riga come «Circa 30 minuti rimanenti». Quando la barra si riempie, lo schermo diventa scuro, mostra il logo come
          una vera schermata di caricamento Apple e l’aggiornamento ricomincia.
        </p>
        <ul className={ul}>
          <li>Scegli uno schermo nero o bianco, come quello del Mac.</li>
          <li>Apri «Altro» per impostare quanto dura l’aggiornamento (da 5 a 120 minuti) e da dove parte la barra.</li>
          <li>Disattiva «Tempo rimanente» per una barra che non rivela nulla.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Scherzo con l’aggiornamento falso del Mac: come prepararlo">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Apri questa pagina sul MacBook o sull’iMac a cui vuoi fare lo scherzo.</li>
          <li>Imposta una durata lunga, come 120 minuti, così la barra si muove appena.</li>
          <li>Premi F o tocca «Schermo intero» per nascondere la barra dei menu e il Dock.</li>
          <li>Allontanati, poi premi Esc per chiudere lo scherzo. Sul Mac non cambia nulla.</li>
        </ol>
      </Section>

      <Section wide id="devices-heading" title="Aggiornamento falso Mac su iPad, iPhone o un altro computer">
        <p className={p}>
          Funziona in qualsiasi browser, quindi la stessa schermata di aggiornamento Apple va bene anche come finto aggiornamento dell’iPad o
          su un iPhone in Safari. Tocca «Schermo intero» e riempie lo schermo.
        </p>
        <p className={p}>
          Vuoi fare lo scherzo su un altro computer? Usa l’<Link href="/fake-windows-10-update" className={link}>aggiornamento falso Windows 10</Link>,
          l’<Link href="/fake-chrome-os-update" className={link}>aggiornamento falso Chrome OS</Link> per i Chromebook o l’
          <Link href="/fake-ubuntu-update" className={link}>aggiornamento falso Ubuntu</Link>. Per i telefoni, prova l’
          <Link href="/broken-screen" className={link}>effetto schermo rotto</Link>.
        </p>
      </Section>
    </div>
  )
}
