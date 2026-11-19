import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Minuteur plein écran (français). Traduit du guide anglais, avec les recherches françaises :
 * minuteur / compte à rebours en ligne → compte à rebours jusqu'à une date → minuteur en ligne gratuit → idées →
 * chronomètre ou Pomodoro. Les boutons portent les noms de l'interface française de l'outil.
 */
export function CountdownTimerGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Minuteur plein écran : mode d'emploi">
        <ul className={ul}>
          <li>Choisissez une durée dans le menu « Minuteur » : 1, 5, 10, 15, 25, 45 ou 60 minutes.</li>
          <li>Besoin d&apos;une autre durée ? Cliquez ou touchez les heures, minutes ou secondes à l&apos;écran et saisissez n&apos;importe quelle durée, jusqu&apos;à 99 heures.</li>
          <li>Appuyez sur « Démarrer », ou sur Espace au clavier, et le compte à rebours commence.</li>
          <li>Mettez en pause et reprenez là où vous en étiez, ou appuyez sur R pour réinitialiser.</li>
          <li>Quand le temps est écoulé, l&apos;écran clignote en rouge et un carillon retentit. Coupez le carillon dans « Plus ».</li>
        </ul>
        <p className={p}>
          Appuyez sur F ou touchez « Plein écran » pour un compte à rebours géant, lisible depuis l&apos;autre bout de la pièce.
        </p>
      </Section>

      <Section wide id="date-heading" title="Minuteur jusqu'à une date : jours, heures, minutes">
        <p className={p}>
          Vous comptez les jours avant un anniversaire, un mariage, des vacances, un examen ou un lancement ? Choisissez{' '}
          <strong className="text-foreground">Compte à rebours jusqu’à une date</strong> dans le menu « Minuteur », sélectionnez la date et
          l&apos;heure dans le calendrier, donnez un nom à l&apos;événement si vous voulez, puis appuyez sur « Démarrer ». Le compte à rebours
          affiche les jours, heures, minutes et secondes restants, et le carillon retentit au moment venu.
        </p>
        <ul className={ul}>
          <li>Il utilise l&apos;horloge et le fuseau horaire de votre appareil : minuit, c&apos;est minuit chez vous.</li>
          <li>Votre compte à rebours est enregistré dans ce navigateur : fermez l&apos;onglet, il continue de compter à votre retour.</li>
          <li>Passez en plein écran pour afficher les jours restants sur une TV, un projecteur ou un écran libre.</li>
          <li>Touchez « Changer la date » pour choisir un nouvel événement à tout moment.</li>
        </ul>
      </Section>

      <Section wide id="online-heading" title="Minuteur en ligne gratuit, sans application">
        <p className={p}>
          Ce compte à rebours en ligne fonctionne dans tout navigateur sur ordinateur, tablette, téléphone ou smart TV. C&apos;est un minuteur
          gratuit, sans inscription et sans rien à installer. Sur ordinateur, vous pouvez passer à un autre onglet pendant qu&apos;il tourne : le
          temps restant s&apos;affiche dans le titre de l&apos;onglet, et le carillon retentit quand même à zéro. Gardez l&apos;onglet ouvert et
          le son activé. Les téléphones mettent en pause les pages que vous quittez, alors gardez-y le minuteur à l&apos;écran ; si un appareil
          se met en veille, le compte à rebours rattrape son retard et le carillon retentit au réveil.
        </p>
      </Section>

      <Section wide id="uses-heading" title="Idées d'utilisation du minuteur">
        <Table
          caption="Façons d'utiliser le minuteur plein écran"
          head={['Usage', 'Durée']}
          rows={[
            ['Activités et contrôles en classe', '10, 15 ou 45 minutes au projecteur'],
            ['Présentations et conférences', '5 ou 10 minutes, en plein écran là où l’orateur le voit'],
            ['Cuisine et thé', '1, 5 ou 10 minutes'],
            ['Pauses et entraînements', '1, 5 ou 15 minutes'],
            ['Sessions de concentration', '25 minutes, puis une courte pause'],
            ['Pâtisserie, lessive ou long examen', 'Une durée personnalisée, par exemple 1 heure 30 minutes'],
            ['Anniversaires, vacances, voyages et lancements', 'Compte à rebours jusqu’à la date'],
          ]}
        />
      </Section>

      <Section wide id="more-heading" title="Minuteur, chronomètre ou Pomodoro ?">
        <ul className={ul}>
          <li>
            Vous comptez vers le haut plutôt qu&apos;à rebours ? Utilisez le <Link href="/stopwatch" className={link}>chronomètre</Link>.
          </li>
          <li>
            Vous travaillez ou révisez par blocs ? Le <Link href="/pomodoro-timer" className={link}>minuteur Pomodoro</Link> enchaîne des
            sessions de concentration de 25 minutes avec des pauses.
          </li>
          <li>
            Vous voulez juste l&apos;heure à l&apos;écran ? Essayez l&apos;
            <Link href="/flip-clock-screensaver" className={link}>horloge flip</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
