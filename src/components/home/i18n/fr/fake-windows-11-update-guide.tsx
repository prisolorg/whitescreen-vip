import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Fausse mise à jour Windows 11 (français). Traduit du guide anglais, avec les recherches françaises :
 * fausse mise à jour Windows 11 / faux écran de mise à jour Windows 11 → blague → comparaison avec Windows 10 et XP.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function FakeWindows11UpdateGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Fausse mise à jour Windows 11 : comment ça marche">
        <p className={p}>
          Le faux écran de mise à jour Windows 11 reprend le look moderne : un écran noir, un anneau qui tourne, « Mise à jour en cours », un
          pourcentage qui grimpe et « Laissez votre ordinateur allumé et branché. »
        </p>
        <ul className={ul}>
          <li>Le pourcentage continue de monter et repart de zéro après 100 %, donc la mise à jour ne se termine jamais.</li>
          <li>Appuyez sur « Pause » pour le figer et donner l&apos;impression que la mise à jour est bloquée.</li>
          <li>Ouvrez « Plus » pour l&apos;accélérer ou la ralentir.</li>
          <li>Appuyez sur F ou touchez « Plein écran » pour masquer le navigateur et la barre des tâches.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Blague de la fausse mise à jour Windows 11 : comment la préparer">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Ouvrez ce faux écran de mise à jour sur le PC Windows 11 à piéger.</li>
          <li>Appuyez sur F ou touchez « Plein écran » pour qu&apos;il remplisse l&apos;écran.</li>
          <li>Laissez-le tourner. L&apos;anneau tourne et le pourcentage avance doucement.</li>
          <li>Pour un rebondissement, touchez « Déclencher la blague BSOD » et la mise à jour « plante ».</li>
          <li>Appuyez sur Échap pour arrêter. Rien ne change sur le PC.</li>
        </ol>
      </Section>

      <Section wide id="compare-heading" title="Fausse mise à jour Windows 11, Windows 10 ou XP ?">
        <Table
          caption="Quel faux écran de mise à jour Windows choisir"
          head={['Écran', 'Ressemble à', 'Page']}
          rows={[
            ['Windows 11', 'Écran noir, anneau qui tourne, pourcentage simple', 'Cette page'],
            ['Windows 10', 'Points qui tournent et « Mise à jour en cours. 14 % effectué. »', <Link key="w10" href="/fake-windows-10-update" className={link}>Fausse mise à jour Windows 10</Link>],
            ['Windows XP', 'Installateur rétro avec barre de progression', <Link key="xp" href="/fake-windows-xp-update" className={link}>Fausse installation Windows XP</Link>],
            ['Écran de plantage', 'L’écran bleu de la mort', <Link key="bsod" href="/fake-blue-screen-of-death" className={link}>Faux écran bleu de la mort</Link>],
          ]}
        />
        <p className={p}>
          Un vrai écran de chargement ou de mise à niveau de Windows 11 peut rester longtemps sur le même chiffre. Si le vôtre semble bloqué,
          laissez-lui du temps et gardez-le branché avant de redémarrer.
        </p>
      </Section>
    </div>
  )
}
