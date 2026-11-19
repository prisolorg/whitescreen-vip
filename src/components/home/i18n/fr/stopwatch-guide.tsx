import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Chronomètre plein écran (français). Traduit du guide anglais, avec les recherches françaises :
 * chronomètre en ligne → chrono qui compte depuis zéro → chronomètre numérique plein écran → chronomètre Google.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function StopwatchGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Chronomètre en ligne : démarrer, tour et réinitialiser">
        <p className={p}>Ce chronomètre en ligne mesure le temps au centième de seconde et garde une liste des tours.</p>
        <Table
          caption="Commandes du chronomètre"
          head={['Action', 'Bouton', 'Touche']}
          rows={[
            ['Démarrer ou mettre en pause', 'Démarrer / Pause', 'Espace'],
            ['Enregistrer un tour', 'Tour', 'L'],
            ['Remettre à zéro', 'Réinitialiser', 'R'],
            ['Copier tous les tours', 'Copier les tours', '—'],
          ]}
        />
        <p className={p}>
          Chaque tour affiche son temps intermédiaire et le total cumulé, pour comparer les tours d&apos;un coup d&apos;œil. « Copier les tours »
          les place dans le presse-papiers pour un tableur ou un message.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Chronomètre : compter le temps depuis zéro">
        <p className={p}>
          Il compte à partir de zéro jusqu&apos;à ce que vous l&apos;arrêtiez : c&apos;est le chrono en ligne à utiliser quand vous ne savez pas
          combien de temps prendra une activité. Il sert de chrono pour le sport, les discours, les expériences et les tâches.
        </p>
        <p className={p}>
          Besoin plutôt d&apos;un compte à rebours depuis une durée fixe, comme 10 ou 30 minutes ? Utilisez le{' '}
          <Link href="/countdown-timer" className={link}>minuteur plein écran</Link>, ou le{' '}
          <Link href="/pomodoro-timer" className={link}>minuteur Pomodoro</Link> pour des sessions de concentration avec pauses.
        </p>
      </Section>

      <Section wide id="fullscreen-heading" title="Chronomètre numérique en plein écran">
        <p className={p}>
          Appuyez sur F ou touchez « Plein écran » pour un énorme chronomètre numérique lisible par toute la salle. Il fait un très bon chrono
          de classe sur un projecteur ou un tableau interactif.
        </p>
        <ul className={ul}>
          <li>En classe : chronométrez les interrogations, le travail en groupe et les courses de lecture.</li>
          <li>Révisions : mesurez le temps que prend vraiment chaque sujet.</li>
          <li>Sport et jeux : chronométrez sprints, gainage, manches et puzzles.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="Chronomètre en ligne ou chronomètre Google ?">
        <p className={p}>
          Les résultats de recherche Google incluent un petit chronomètre intégré. Celui-ci ajoute une liste complète des tours avec temps
          intermédiaires, « Copier les tours » en un clic, des raccourcis clavier et un affichage plein écran, et vous pouvez l&apos;ajouter à
          vos favoris pour l&apos;ouvrir aussitôt.
        </p>
      </Section>
    </div>
  )
}
