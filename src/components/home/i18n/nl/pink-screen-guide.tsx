import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Roze Scherm (Nederlands). Vertaald uit de Engelse gids, met Nederlandse zoektermen:
 * roze scherm als licht voor selfies en TikTok → tinten roze → roze achtergrond en wallpaper.
 * Knoppen heten zoals in de Nederlandse interface van de tool.
 */
export function PinkScreenGuideNl() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Roze scherm als licht voor selfies, foto’s en TikTok">
        <p className={p}>
          Een roze scherm is een makkelijk, flatterend roze licht: het verzacht je huid en geeft een warme gloed zonder roze ledlamp of extra
          spullen. Dubbeltik op het voorbeeld voor volledig scherm en zet Scherm aan houden aan. Voor neutraal, natuurgetrouw licht gebruik je
          het <Link href="/" className={link}>witte scherm</Link>.
        </p>
        <Table
          caption="Manieren om het roze scherm als lamp te gebruiken"
          head={['Gebruik', 'Instellingen', 'Tip']}
          rows={[
            ['Selfies en foto’s', 'Helderheid 100%', 'Houd een tweede telefoon of tablet net naast je gezicht'],
            ['FaceTime en videogesprekken', 'Helderheid 70–100%', 'Zet het scherm achter je camera, naar je toe gericht'],
            ['TikTok- en playbackvideo’s', 'Helderheid 100%, Warm', 'Doe de lampen in de kamer uit, zodat het roze licht opvalt'],
            ['Kamer- en sfeerverlichting', 'Helderheid 40–70%', 'Richt het scherm op een muur om de gloed te verspreiden'],
          ]}
        />
      </Section>

      <Section wide id="shade-heading" title="Kleuren roze scherm: hot pink, felroze en diepere tinten">
        <p className={p}>
          Dit hot pink-scherm toont #FF69B4 (RGB 255, 105, 180), een felroze kleur met een beetje blauw erin. Pas de tint aan met de knoppen
          onder het voorbeeld.
        </p>
        <Table
          caption="Tinten roze en hoe je ze krijgt"
          head={['Tint', 'Zo krijg je het', 'Ziet eruit']}
          rows={[
            ['Hot pink / felroze', 'Neutraal, Helderheid 100%', 'Levendig en speels (#FF69B4)'],
            ['Koraalroze', 'Warm', 'Warmer, perzikachtig roze (#FF4F64)'],
            ['Koel roze','Koel', 'Koeler, iets meer magenta (#DD5FB4)'],
            ['Donkerroze', 'Helderheid 50–70%', 'Dieper, gedempt roze (#80355A–#B34A7E)'],
            ['Licht- / babyroze', <Link key="lp" href="/backgrounds/light-pink-background" className={link}>Lichtroze achtergrond</Link>, 'Zacht en bleek (#FFB6C1)'],
          ]}
        />
        <p className={p}>
          Wil je een sterkere neonroze? Probeer het <Link href="/magenta-screen" className={link}>magenta scherm</Link>.
        </p>
      </Section>

      <Section wide id="background-heading" title="Roze scherm als achtergrond en wallpaper">
        <p className={p}>
          Heb je een hot pink-achtergrond als bestand nodig? Gebruik Downloaden onder het voorbeeld. Je helderheid en warmte worden op de
          afbeelding toegepast.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Laptop en desktop:</strong> 1080p, 2K of 4K.
          </li>
          <li>
            <strong className="text-foreground">Achtergrond voor je telefoon:</strong> Telefoon (1080×2400).
          </li>
          <li>
            <strong className="text-foreground">Al het andere:</strong> een eigen breedte en hoogte, zoals 1080×1920 voor TikTok en Reels.
          </li>
        </ul>
        <p className={p}>
          Liever zachter? Gebruik de <Link href="/backgrounds/light-pink-background" className={link}>lichtroze achtergrond</Link> (#FFB6C1), of
          bekijk de collectie <Link href="/backgrounds/pink-background" className={link}>roze achtergronden</Link>.
        </p>
      </Section>
    </div>
  )
}
