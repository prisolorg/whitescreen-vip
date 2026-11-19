import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Faux écran de réunion Zoom (français). Traduit du guide anglais, avec les recherches françaises :
 * faux écran Zoom / fausse réunion Zoom → vidéos, cours et blagues → Teams ou Google Meet.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function FakeZoomMeetingGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="setup-heading" title="Faux écran de réunion Zoom : comment le configurer">
        <p className={p}>
          Le faux écran de réunion Zoom affiche une galerie façon Zoom avec cinq participants nommés, un contour vert qui passe à celui qui
          « parle », un badge d&apos;enregistrement et la barre d&apos;outils familière avec un bouton rouge « Fin ».
        </p>
        <ul className={ul}>
          <li>Ouvrez « Plus » pour saisir votre propre titre de réunion.</li>
          <li>Activez « Activer l’aperçu caméra » pour afficher votre caméra dans la vignette « Vous ». L&apos;image reste sur votre appareil.</li>
          <li>Appuyez sur F ou touchez « Plein écran » pour que la fausse réunion remplisse tout l&apos;écran.</li>
        </ul>
      </Section>

      <Section wide id="uses-heading" title="Fausse réunion Zoom pour vidéos, cours et blagues">
        <p className={p}>Un faux appel Zoom est pratique dès qu&apos;il vous faut une réunion crédible à l&apos;écran sans en organiser une vraie :</p>
        <Table
          caption="Façons d'utiliser le faux écran de réunion Zoom"
          head={['Usage', 'Astuce']}
          rows={[
            ['Accessoire pour film, TikTok et YouTube', 'Enregistrez votre écran en plein écran pour une fausse vidéo de réunion'],
            ['Avoir l’air occupé en appel', 'Laissez le faux écran de réunion affiché, caméra coupée'],
            ['Faux cours Zoom ou répétition', 'Répétez un cours ou une présentation caméra allumée'],
            ['Captures d’écran et maquettes', 'Définissez un titre de réunion, puis faites une capture d’écran'],
            ['Blague inoffensive', 'Montrez à un ami une « réunion » qu’il a oublié de rejoindre, puis révélez la blague'],
          ]}
        />
        <p className={p}>
          C&apos;est un écran, pas un appel : il n&apos;y a pas de son, personne ne peut rejoindre la réunion et rien ne se connecte à Zoom.
        </p>
      </Section>

      <Section wide id="other-heading" title="Fausse réunion Zoom, Teams ou Google Meet ?">
        <p className={p}>Besoin d&apos;une autre application ? Chacune a son propre écran :</p>
        <ul className={ul}>
          <li>
            <Link href="/fake-teams-meeting" className={link}>Faux écran de réunion Teams</Link> : commandes et bouton rouge « Quitter » dans la
            barre du haut, avec un minuteur qui tourne.
          </li>
          <li>
            <Link href="/fake-google-meet" className={link}>Faux écran Google Meet</Link> : vignettes arrondies, initiales pour les caméras
            coupées et un code de réunion.
          </li>
          <li>
            <Link href="/fake-slack-huddle" className={link}>Faux huddle Slack</Link> : une petite fenêtre de huddle avec des avatars.
          </li>
        </ul>
      </Section>
    </div>
  )
}
