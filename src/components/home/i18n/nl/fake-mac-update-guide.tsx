import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Nep Mac Update (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * nep Mac update / macOS update-scherm → grap instellen → iPad, iPhone en andere computers.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function FakeMacUpdateGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Nep Mac update-scherm: zo werkt het">
        <p className={p}>
          Het nep Mac update-scherm bootst het installatiescherm van macOS na: het logo boven een dunne voortgangsbalk en een regel als “Nog
          ongeveer 30 minuten”. Als de balk vol is, wordt het scherm donker, verschijnt het logo zoals bij een echt Apple-laadscherm en begint
          de update opnieuw.
        </p>
        <ul className={ul}>
          <li>Kies een zwart of wit scherm dat bij de Mac past.</li>
          <li>Open Meer om in te stellen hoe lang de update duurt (5 tot 120 minuten) en waar de balk begint.</li>
          <li>Zet Resterende tijd uit voor een balk die niets verraadt.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Nep Mac update als grap: zo stel je het in">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Open deze pagina op de MacBook of iMac die je wilt foppen.</li>
          <li>Kies een lange Updateduur, zoals 120 minuten, zodat de balk bijna niet beweegt.</li>
          <li>Druk op F of tik op Volledig scherm om de menubalk en het Dock te verbergen.</li>
          <li>Loop weg en druk daarna op Esc om de grap te stoppen. Er verandert niets aan de Mac.</li>
        </ol>
      </Section>

      <Section wide id="devices-heading" title="Nep Mac update op een iPad, iPhone of andere computer">
        <p className={p}>
          Het werkt in elke browser, dus hetzelfde Apple update-scherm werkt ook als nep iPad update-scherm of op een iPhone in Safari. Tik op
          Volledig scherm en het vult het hele scherm.
        </p>
        <p className={p}>
          Wil je een andere computer foppen? Gebruik de <Link href="/fake-windows-10-update" className={link}>nep Windows 10 update</Link>,
          de <Link href="/fake-chrome-os-update" className={link}>nep Chrome OS update</Link> voor Chromebooks of de{' '}
          <Link href="/fake-ubuntu-update" className={link}>nep Ubuntu update</Link>. Voor telefoons probeer je het{' '}
          <Link href="/broken-screen" className={link}>gebroken scherm effect</Link>.
        </p>
      </Section>
    </div>
  )
}
