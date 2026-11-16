import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Minuteur Pomodoro (français). Traduit du guide anglais, avec les recherches françaises :
 * minuteur Pomodoro / technique Pomodoro / méthode Pomodoro → Pomodoro pour réviser → réglages 25/5, 50/10 →
 * Pomodoro en ligne. Les boutons portent les noms de l'interface française de l'outil.
 */
export function PomodoroTimerGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="technique-heading" title="Minuteur Pomodoro et technique Pomodoro">
        <p className={p}>
          La technique Pomodoro, aussi appelée méthode Pomodoro, est une méthode simple de gestion du temps créée par Francesco Cirillo à la fin
          des années 1980. Vous travaillez par courtes sessions concentrées, appelées pomodoros, avec une pause entre chacune. Ce minuteur
          Pomodoro gère tout le cycle pour vous :
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Choisissez une seule tâche.</li>
          <li>Concentrez-vous dessus pendant 25 minutes.</li>
          <li>Prenez une pause courte de 5 minutes.</li>
          <li>Recommencez. Après quatre pomodoros, prenez une pause longue de 15 minutes.</li>
        </ol>
        <p className={p}>
          Le minuteur passe tout seul de la concentration à la pause, joue un carillon à la fin de chaque phase et compte les sessions
          terminées.
        </p>
        <h3 className={h3}>Pourquoi parle-t-on de minuteur tomate ?</h3>
        <p className={p}>
          « Pomodoro » signifie tomate en italien. Cirillo chronométrait ses premières sessions avec un minuteur de cuisine en forme de tomate,
          d&apos;où le nom de minuteur tomate ou de technique de la tomate.
        </p>
      </Section>

      <Section wide id="study-heading" title="Minuteur Pomodoro pour réviser">
        <p className={p}>
          Avec la technique Pomodoro, ce minuteur devient un excellent outil pour réviser : les blocs courts sont plus faciles à commencer, et
          les pauses gardent votre concentration intacte pendant une longue séance de révision.
        </p>
        <ul className={ul}>
          <li>Donnez à chaque pomodoro un objectif clair : un chapitre, une série d&apos;exercices ou 20 fiches.</li>
          <li>Rangez votre téléphone jusqu&apos;à la pause.</li>
          <li>Notez les pensées parasites et traitez-les pendant la pause, pas en pleine session.</li>
          <li>Profitez de la pause longue pour bouger, boire de l&apos;eau ou prendre l&apos;air.</li>
          <li>Comptez vos sessions terminées pour voir si la méthode Pomodoro vous convient pour réviser.</li>
        </ul>
      </Section>

      <Section wide id="settings-heading" title="Réglages du minuteur Pomodoro : 25/5, 50/10 et personnalisé">
        <p className={p}>
          Ouvrez « Plus » pour régler la durée de concentration, les deux pauses et le nombre de sessions avant la pause longue.
        </p>
        <Table
          caption="Réglages populaires du minuteur Pomodoro"
          head={['Réglage', 'Concentration', 'Pause courte', 'Pause longue', 'Idéal pour']}
          rows={[
            ['Classique 25/5', '25 min', '5 min', '15 min après 4', 'La plupart du travail et des révisions'],
            ['Travail profond 50/10', '50 min', '10 min', '20–30 min après 3', 'Écriture, code, longues lectures'],
            ['Sprints courts 15/3', '15 min', '3 min', '15 min après 4', 'Se lancer dans une tâche difficile'],
          ]}
        />
        <ul className={ul}>
          <li>La concentration peut durer de 5 à 90 minutes, les pauses courtes de 1 à 20 et les pauses longues de 5 à 45.</li>
          <li>Désactivez « Démarrer la suite automatiquement » pour lancer vous-même chaque phase.</li>
          <li>Coupez le carillon pour un minuteur Pomodoro silencieux en bibliothèque ou au bureau.</li>
        </ul>
        <p className={p}>
          Besoin d&apos;un simple minuteur de 25 minutes ? Le <Link href="/countdown-timer" className={link}>minuteur plein écran</Link> propose
          des préréglages en un clic, et le <Link href="/stopwatch" className={link}>chronomètre</Link> montre combien de temps prend vraiment
          une tâche.
        </p>
      </Section>

      <Section wide id="online-heading" title="Minuteur Pomodoro en ligne, sans application">
        <p className={p}>
          Ce minuteur Pomodoro en ligne fonctionne dans votre navigateur sur PC, Mac, Chromebook, tablette ou téléphone, sans application ni
          extension Pomodoro à installer et sans compte.
        </p>
        <ul className={ul}>
          <li>Le compte à rebours s&apos;affiche dans l&apos;onglet du navigateur, vous pouvez donc travailler dans un autre onglet.</li>
          <li>Il reste précis même quand l&apos;onglet est en arrière-plan.</li>
          <li>Appuyez sur Espace pour démarrer ou mettre en pause, et sur F pour une grande horloge Pomodoro en plein écran.</li>
        </ul>
        <p className={p}>
          Il sert tout aussi bien de minuteur de concentration, de minuteur de travail ou de minuteur de productivité pour toute tâche à
          découper en sprints.
        </p>
      </Section>
    </div>
  )
}
