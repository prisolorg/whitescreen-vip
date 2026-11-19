import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Faux écran bleu de la mort (français). Traduit du guide anglais, avec les recherches françaises :
 * faux écran bleu de la mort / faux BSOD → message et codes d'arrêt → blague → vrai écran bleu.
 * Les boutons portent les noms de l'interface française de l'outil.
 */
export function FakeBsodGuideFr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Faux écran bleu de la mort : Windows 10, 11 et classique">
        <p className={p}>Choisissez un style de faux BSOD dans le menu « Style » sous l&apos;aperçu. Chacun reproduit un vrai écran bleu de Windows :</p>
        <Table
          caption="Styles du faux écran bleu de la mort"
          head={['Style', 'Ce qu’il affiche']}
          rows={[
            ['Windows 10', 'L’écran d’erreur bleu vif avec le visage triste :(, un compteur en pourcentage, un QR code et un code d’arrêt'],
            ['Windows 11', 'La même mise en page dans le bleu plus sombre de Windows 11'],
            ['Noir (nouveau)', 'La version noire que les versions récentes de Windows 11 utilisent à la place du bleu'],
            ['Classique (XP/7)', 'L’ancien écran bleu de la mort, bleu foncé, avec un texte technique blanc'],
          ]}
        />
      </Section>

      <Section wide id="error-heading" title="Message et codes d'arrêt de l'écran bleu de la mort">
        <p className={p}>
          L&apos;écran d&apos;erreur moderne de Windows affiche « Votre PC a rencontré un problème et doit redémarrer. Nous collectons
          simplement des informations relatives aux erreurs, puis nous allons redémarrer. » En dessous, un compteur monte jusqu&apos;à 100 % et
          un code d&apos;arrêt nomme l&apos;erreur.
        </p>
        <p className={p}>Ouvrez « Plus » pour choisir l&apos;un de ces vrais codes d&apos;arrêt :</p>
        <ul className={ul}>
          <li>CRITICAL_PROCESS_DIED et SYSTEM_SERVICE_EXCEPTION</li>
          <li>IRQL_NOT_LESS_OR_EQUAL et PAGE_FAULT_IN_NONPAGED_AREA</li>
          <li>KMODE_EXCEPTION_NOT_HANDLED et MEMORY_MANAGEMENT</li>
          <li>DPC_WATCHDOG_VIOLATION et VIDEO_TDR_FAILURE</li>
        </ul>
        <p className={p}>Le curseur « Atteindre 100 % en » règle la durée du compteur, d&apos;environ 10 secondes à 2 minutes.</p>
      </Section>

      <Section wide id="prank-heading" title="Blague de l'écran bleu de la mort : comment la préparer">
        <ul className={ul}>
          <li>Ouvrez ce faux écran de plantage sur le PC à piéger et choisissez le style qui lui correspond.</li>
          <li>Touchez deux fois l&apos;écran ou appuyez sur F pour passer en plein écran.</li>
          <li>Éloignez-vous. Le compteur monte et le curseur se cache dès que la souris ne bouge plus.</li>
          <li>Utilisez « Relancer le compteur » pour recommencer, et appuyez sur Échap pour finir la blague. Rien ne change sur l&apos;ordinateur.</li>
        </ul>
        <h3 className={h3}>Commencer par une fausse mise à jour</h3>
        <p className={p}>
          Pour une plus grosse réaction, ouvrez d&apos;abord la <Link href="/fake-windows-10-update" className={link}>fausse mise à jour Windows 10</Link>,
          puis touchez « Déclencher la blague BSOD » pour que la mise à jour « plante » sur un écran de plantage Windows. Sur un téléphone ou
          une tablette, l&apos;<Link href="/broken-screen" className={link}>effet écran cassé</Link> fonctionne mieux.
        </p>
      </Section>

      <Section wide id="real-heading" title="Un vrai écran bleu de la mort ?">
        <p className={p}>Un vrai écran bleu signifie que Windows s&apos;est arrêté pour se protéger. La plupart du temps, ces étapes règlent le problème :</p>
        <ul className={ul}>
          <li>Notez le code d&apos;arrêt affiché en bas de l&apos;écran.</li>
          <li>Redémarrez et installez les dernières mises à jour de Windows et des pilotes.</li>
          <li>Annulez toute nouveauté : une application, un pilote ou un matériel récent.</li>
          <li>Si le problème revient, cherchez ce code d&apos;arrêt sur le support Microsoft.</li>
        </ul>
      </Section>
    </div>
  )
}
