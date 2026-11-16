import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Simulateur d'écran piraté (français). Traduit du guide anglais, avec les recherches françaises :
 * faux écran piraté / blague ordinateur piraté → ce qu'il affiche → règles → vraies alertes de piratage.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function HackedScreenGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Blague de l'écran piraté : comment la préparer">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Choisissez un style : « Alerte rouge » ou « Terminal vert ».</li>
          <li>Ouvrez « Plus » pour saisir votre propre titre (SYSTÈME PIRATÉ par défaut) ou masquer la note « c’est une blague ».</li>
          <li>Activez « Sirène » si vous voulez une alarme.</li>
          <li>Touchez deux fois ou appuyez sur F pour le plein écran, puis laissez l&apos;ordinateur à votre ami.</li>
        </ol>
        <p className={p}>Appuyez sur Échap pour quitter le plein écran et mettre fin à la blague de l&apos;écran piraté.</p>
      </Section>

      <Section wide id="shows-heading" title="Ce qu'affiche le simulateur d'écran piraté">
        <ul className={ul}>
          <li>Un avertissement clignotant « FAILLE DE SÉCURITÉ DÉTECTÉE » et un titre qui glitche.</li>
          <li>De fausses étapes de piratage comme « Contournement du pare-feu » et « Déchiffrement du coffre de mots de passe ».</li>
          <li>Une barre de progression et un compte à rebours de 59 secondes qui tournent en boucle : le faux écran piraté ne se termine jamais vraiment.</li>
          <li>De faux journaux qui défilent, des lignes de balayage et une lueur rouge ou verte qui pulse.</li>
        </ul>
        <p className={p}>
          Rien n&apos;est installé et rien n&apos;est touché sur l&apos;ordinateur. Le simulateur d&apos;écran piraté n&apos;est qu&apos;une page
          web.
        </p>
      </Section>

      <Section wide id="rules-heading" title="Blague de l'écran piraté : restez dans le jeu">
        <ul className={ul}>
          <li>Piégez des gens qui riront, et révélez la blague en moins d&apos;une minute.</li>
          <li>Évitez les ordinateurs de travail, où cela pourrait alarmer le service informatique, et les personnes facilement effrayées.</li>
          <li>Gardez la note « c’est une blague » si vous n&apos;êtes pas sûr de leur réaction.</li>
        </ul>
        <p className={p}>
          D&apos;autres blagues d&apos;écran : la <Link href="/hacker-typer" className={link}>simulation de frappe hacker</Link>, l&apos;
          <Link href="/broken-screen" className={link}>effet écran cassé</Link> et le{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>faux écran bleu de la mort</Link>.
        </p>
      </Section>

      <Section wide id="real-heading" title="Pas une blague d'écran piraté ? Les vraies fenêtres d'alerte">
        <p className={p}>
          Un écran « vous avez été piraté » que vous n&apos;avez pas ouvert vous-même, et qui vous demande d&apos;appeler un numéro ou de payer,
          est presque toujours une arnaque :
        </p>
        <ul className={ul}>
          <li>N&apos;appelez pas le numéro, ne payez pas et ne laissez personne se connecter à votre ordinateur.</li>
          <li>Fermez le navigateur ; s&apos;il refuse de se fermer, utilisez le Gestionnaire des tâches (Ctrl + Maj + Échap) ou Forcer à quitter sur Mac.</li>
          <li>Lancez votre antivirus, et changez vos mots de passe depuis un autre appareil si vous en avez saisi.</li>
        </ul>
      </Section>
    </div>
  )
}
