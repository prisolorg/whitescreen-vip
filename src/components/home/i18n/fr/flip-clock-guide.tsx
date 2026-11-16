import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Écran de veille horloge flip (français). Traduit du guide anglais, avec les recherches françaises :
 * horloge flip en ligne / horloge à palettes plein écran → horloge esthétique → horloge pour réviser → minuteur et chronomètre.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function FlipClockGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="online-heading" title="Horloge flip en ligne : écran de veille plein écran sur tout appareil">
        <p className={p}>
          Cette horloge flip en ligne affiche l&apos;heure en grands chiffres à palettes qui basculent à chaque changement de minute, comme un
          réveil rétro.
        </p>
        <ul className={ul}>
          <li>Touchez deux fois l&apos;horloge ou appuyez sur F pour passer en plein écran.</li>
          <li>En plein écran, l&apos;écran reste allumé dans les navigateurs compatibles : elle sert d&apos;horloge de bureau ou d&apos;écran de veille.</li>
          <li>Lancez-la sur un PC portable, un second écran, une vieille tablette ou le navigateur d&apos;une smart TV.</li>
        </ul>
      </Section>

      <Section wide id="style-heading" title="Horloge flip esthétique : sombre, claire et minimaliste">
        <p className={p}>Personnalisez son look avec les réglages sous l&apos;horloge :</p>
        <Table
          caption="Réglages de l'horloge flip"
          head={['Réglage', 'Effet']}
          rows={[
            ['Thème', 'Sombre pour une horloge noire épurée, Clair pour un look lumineux et aéré'],
            ['Format 24 heures', 'Passe de l’affichage 24 heures à l’affichage 12 heures avec AM/PM'],
            ['Afficher les secondes', 'Une horloge flip numérique avec les secondes, ou seulement les heures et les minutes (dans « Plus »)'],
            ['Afficher la date', 'Ajoute le jour de la semaine et la date sous l’horloge (dans « Plus »)'],
          ]}
        />
        <p className={p}>Masquez les secondes et la date pour le look d&apos;horloge flip le plus minimaliste et esthétique.</p>
      </Section>

      <Section wide id="study-heading" title="Horloge flip pour réviser">
        <p className={p}>
          Affichée en grand sur un second écran, elle devient une horloge de révision apaisante : vous voyez l&apos;heure d&apos;un coup
          d&apos;œil sans prendre votre téléphone. Associez-la au <Link href="/pomodoro-timer" className={link}>minuteur Pomodoro</Link> pour
          travailler par blocs concentrés avec des pauses.
        </p>
        <p className={p}>
          Envie de quelque chose de plus ludique sur l&apos;écran libre ? Lancez l&apos;
          <Link href="/dvd-screensaver" className={link}>écran de veille DVD</Link>.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Horloge flip, minuteur et chronomètre">
        <p className={p}>
          Vous cherchez un minuteur à palettes ? Cette horloge affiche toujours l&apos;heure actuelle ; pour chronométrer quelque chose, utilisez
          plutôt l&apos;un de ces outils :
        </p>
        <ul className={ul}>
          <li>
            <Link href="/countdown-timer" className={link}>Minuteur plein écran</Link> : compte à rebours de n&apos;importe quelle durée, avec des
            préréglages comme 5, 10 et 25 minutes.
          </li>
          <li>
            <Link href="/stopwatch" className={link}>Chronomètre</Link> : compte le temps qui passe et enregistre des tours.
          </li>
          <li>
            <Link href="/pomodoro-timer" className={link}>Minuteur Pomodoro</Link> : sessions de concentration et pauses pour réviser ou
            travailler.
          </li>
        </ul>
      </Section>
    </div>
  )
}
