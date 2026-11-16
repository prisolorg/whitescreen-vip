import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Écran Aucun signal (français). Traduit du guide anglais, avec les recherches françaises :
 * écran pas de signal / mire TV / barres de couleur TV → signification des barres → idées → vrai « aucun signal » sur la TV.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function NoSignalGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Mire TV et écran Aucun signal : trois styles">
        <Table
          caption="Styles de l'écran Aucun signal"
          head={['Style', 'Ce qu’il affiche']}
          rows={[
            ['Barres de couleur', 'Des barres de couleur TV avec un encart PAS DE SIGNAL au centre'],
            ['Rebond', 'Un encart PAS DE SIGNAL qui dérive et rebondit sur les bords, comme une TV au repos'],
            ['Entrée bleue', 'Un simple écran bleu avec le message, comme beaucoup de TV sans source'],
          ]}
        />
        <ul className={ul}>
          <li>Ouvrez « Plus » pour changer le message et le nom de l&apos;entrée (HDMI 1 par défaut).</li>
          <li>Activez la tonalité 1 kHz pour le bip classique du signal de test.</li>
          <li>Appuyez sur F ou touchez « Plein écran » pour que l&apos;écran Aucun signal remplisse une TV, un moniteur ou un PC portable.</li>
        </ul>
      </Section>

      <Section wide id="bars-heading" title="Mire TV de l'écran Aucun signal : ce que signifient les barres">
        <p className={p}>
          Les barres de couleur TV sont la mire rayée que les diffuseurs utilisaient pour régler l&apos;image. Cet écran Aucun signal en dessine
          une version de style SMPTE sur trois rangées :
        </p>
        <ul className={ul}>
          <li>En haut : sept barres grise, jaune, cyan, verte, magenta, rouge et bleue.</li>
          <li>Au milieu : une fine bande de bleu, magenta, cyan et gris, en alternance avec du noir.</li>
          <li>En bas : des blocs bleu foncé, blanc, violet et noir.</li>
        </ul>
        <p className={p}>
          Les barres de couleur TV s&apos;adaptent à tout écran, y compris les TV 1080p et 4K. Elles servent au look, pas à l&apos;étalonnage ;
          pour vérifier les couleurs, utilisez le <Link href="/screen-color-test" className={link}>test des couleurs d&apos;écran</Link>.
        </p>
      </Section>

      <Section wide id="uses-heading" title="Idées pour la mire TV et l'écran Aucun signal">
        <ul className={ul}>
          <li>Blague : affichez la mire TV ou l&apos;écran Aucun signal en plein écran et regardez quelqu&apos;un vérifier chaque câble.</li>
          <li>Accessoires de film et photo : les barres de couleur TV donnent une TV crédible en arrière-plan sans vraie diffusion.</li>
          <li>Streams et événements : un écran « je reviens » avec votre propre message.</li>
        </ul>
        <p className={p}>
          D&apos;autres blagues d&apos;écran : le <Link href="/hacked-screen" className={link}>simulateur d&apos;écran piraté</Link> et la{' '}
          <Link href="/fake-windows-10-update" className={link}>fausse mise à jour Windows 10</Link>.
        </p>
      </Section>

      <Section wide id="fix-heading" title="Écran Aucun signal sur votre vraie TV ? Solutions rapides">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Appuyez sur Input ou Source sur la télécommande et choisissez le port où votre appareil est branché.</li>
          <li>Vérifiez que l&apos;appareil (console, PC portable, box) est allumé et pas en veille.</li>
          <li>Débranchez le câble HDMI aux deux extrémités et rebranchez-le, ou essayez un autre port ou un autre câble.</li>
          <li>Redémarrez la TV et l&apos;appareil.</li>
        </ol>
      </Section>
    </div>
  )
}
