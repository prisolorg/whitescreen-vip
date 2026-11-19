import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Fausse mise à jour Mac (français). Traduit du guide anglais, avec les recherches françaises :
 * fausse mise à jour Mac / faux écran de mise à jour macOS → blague → iPad, iPhone et autres ordinateurs.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function FakeMacUpdateGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Fausse mise à jour Mac : comment ça marche">
        <p className={p}>
          Le faux écran de mise à jour Mac reproduit l&apos;écran d&apos;installation de macOS : le logo au-dessus d&apos;une fine barre de
          progression et une ligne du type « Environ 30 minutes restantes ». Quand la barre est pleine, l&apos;écran devient noir, affiche le
          logo comme un vrai écran de chargement Apple, puis la mise à jour recommence.
        </p>
        <ul className={ul}>
          <li>Choisissez un écran noir ou blanc selon le Mac.</li>
          <li>Ouvrez « Plus » pour régler la durée de la mise à jour (5 à 120 minutes) et le point de départ de la barre.</li>
          <li>Désactivez « Temps restant » pour une barre qui ne trahit rien.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Blague de la fausse mise à jour Mac : comment la préparer">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Ouvrez cette page sur le MacBook ou l&apos;iMac à piéger.</li>
          <li>Réglez une longue durée de mise à jour, par exemple 120 minutes, pour que la barre bouge à peine.</li>
          <li>Appuyez sur F ou touchez « Plein écran » pour masquer la barre des menus et le Dock.</li>
          <li>Éloignez-vous, puis appuyez sur Échap pour finir la blague. Rien ne change sur le Mac.</li>
        </ol>
      </Section>

      <Section wide id="devices-heading" title="Fausse mise à jour Mac sur iPad, iPhone ou un autre ordinateur">
        <p className={p}>
          Elle fonctionne dans tous les navigateurs : le même écran de mise à jour Apple sert aussi de faux écran de mise à jour iPad, ou sur
          un iPhone dans Safari. Touchez « Plein écran » et il remplit l&apos;écran.
        </p>
        <p className={p}>
          Vous piégez un autre ordinateur ? Utilisez la <Link href="/fake-windows-10-update" className={link}>fausse mise à jour Windows 10</Link>,
          la <Link href="/fake-chrome-os-update" className={link}>fausse mise à jour Chrome OS</Link> pour les Chromebooks ou la{' '}
          <Link href="/fake-ubuntu-update" className={link}>fausse mise à jour Ubuntu</Link>. Pour les téléphones, essayez l&apos;
          <Link href="/broken-screen" className={link}>effet écran cassé</Link>.
        </p>
      </Section>
    </div>
  )
}
