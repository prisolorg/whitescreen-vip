import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Fausse mise à jour Windows 10 (français). Traduit du guide anglais, avec les recherches françaises :
 * fausse mise à jour Windows / faux écran de mise à jour → blague → Windows 11, XP et autres systèmes →
 * vraie mise à jour bloquée. Les boutons portent les noms de l'interface française de l'outil.
 */
export function FakeWindowsUpdateGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Fausse mise à jour Windows 10 : comment ça marche">
        <p className={p}>
          Ce faux écran de mise à jour Windows reproduit l&apos;écran « Mise à jour en cours » de Windows 10 : un fond sombre, une animation
          de chargement qui tourne, un pourcentage qui grimpe lentement et le fameux « N’éteignez pas votre PC. Cette opération peut prendre
          un certain temps. »
        </p>
        <ul className={ul}>
          <li>Le pourcentage monte tout seul et repart de zéro après 100 %, donc ce faux écran de chargement ne se termine jamais.</li>
          <li>Utilisez « Pause » pour le figer, comme si la mise à jour était bloquée.</li>
          <li>Ouvrez « Plus » pour accélérer ou ralentir la mise à jour.</li>
          <li>Appuyez sur F ou touchez « Plein écran » pour masquer le navigateur. Le curseur disparaît quand la souris ne bouge pas.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Blague de la fausse mise à jour Windows 10 : comment la préparer">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Ouvrez cette fausse mise à jour sur l&apos;ordinateur à piéger.</li>
          <li>Appuyez sur F ou touchez « Plein écran » pour couvrir tout l&apos;écran.</li>
          <li>Éloignez-vous. Le pourcentage continue de grimper pendant qu&apos;ils attendent.</li>
          <li>Pour un rebondissement, touchez « Déclencher la blague BSOD » et la mise à jour « échoue » sur un écran bleu.</li>
          <li>Appuyez sur Échap pour arrêter. Rien n&apos;est modifié sur l&apos;ordinateur.</li>
        </ol>
        <p className={p}>
          Vous voulez juste le plantage ? Utilisez le <Link href="/fake-blue-screen-of-death" className={link}>faux écran bleu de la mort</Link>,
          ou fissurez la vitre avec l&apos;<Link href="/broken-screen" className={link}>effet écran cassé</Link>.
        </p>
      </Section>

      <Section wide id="systems-heading" title="Fausse mise à jour Windows pour Windows 11, XP et d'autres systèmes">
        <Table
          caption="Faux écrans de mise à jour pour chaque système"
          head={['Système', 'Faux écran de mise à jour']}
          rows={[
            ['Windows 11', <Link key="w11" href="/fake-windows-11-update" className={link}>Fausse mise à jour Windows 11</Link>],
            ['Windows XP', <Link key="xp" href="/fake-windows-xp-update" className={link}>Fausse installation Windows XP</Link>],
            ['Démarrage de Windows XP', <Link key="xpb" href="/fake-windows-xp-boot" className={link}>Faux démarrage Windows XP</Link>],
            ['Mac', <Link key="mac" href="/fake-mac-update" className={link}>Fausse mise à jour Mac</Link>],
            ['Chromebook', <Link key="cros" href="/fake-chrome-os-update" className={link}>Fausse mise à jour Chrome OS</Link>],
            ['Ubuntu / Linux', <Link key="ub" href="/fake-ubuntu-update" className={link}>Fausse mise à jour Ubuntu</Link>],
            ['Android', <Link key="and" href="/fake-android-update" className={link}>Fausse mise à jour Android</Link>],
          ]}
        />
      </Section>

      <Section wide id="real-heading" title="Fausse mise à jour Windows 10 ou vraie mise à jour bloquée ?">
        <p className={p}>
          Si un vrai écran de mise à jour ou de chargement de Windows semble bloqué, cette page ne peut pas le réparer, mais ces étapes aident
          généralement :
        </p>
        <ul className={ul}>
          <li>Laissez-lui du temps. Les grosses mises à jour peuvent rester longtemps sur le même pourcentage.</li>
          <li>Surveillez l&apos;activité du disque. Un voyant de disque qui clignote signifie qu&apos;il travaille encore.</li>
          <li>En dernier recours seulement, maintenez le bouton d&apos;alimentation pour redémarrer. Windows annule généralement de lui-même une mise à jour ratée.</li>
        </ul>
      </Section>
    </div>
  )
}
