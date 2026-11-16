import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * DVD Ekran Koruyucu (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle:
 * seken DVD logosu → Google sürprizi → TV, yayın ve ikinci monitör → logo ve GIF → köşeye çarpma.
 * Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function DvdScreensaverGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="bounce-heading" title="DVD Ekran Koruyucu: Seken DVD Logosu">
        <p className={p}>
          DVD ekran koruyucu, eski DVD oynatıcıların boşta beklerken gösterdiği seken DVD logosudur. Logo sabit bir hızla çapraz
          ilerler ve her kenara değdiğinde yeni bir renge geçer; son rengi tekrarlamadan 10 renk arasında döner.
        </p>
        <ul className={ul}>
          <li>Tam ekranda çalıştırmak için ekrana iki kez dokunun veya F tuşuna basın.</li>
          <li>Hızı ve logo boyutunu değiştirmek için Daha fazla menüsünü açın.</li>
          <li>Sayaçlar her sekmeyi ve her tam köşe isabetini sayar.</li>
          <li>Seken logoyu dondurmak için Duraklat’a, devam ettirmek için Devam et’e basın.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="Google DVD Ekran Koruyucu Sürprizi (Easter Egg)">
        <p className={p}>
          Google’da &quot;DVD screensaver&quot; araması, zaman zaman sonuç sayfasındaki Google logosunu seken, DVD tarzı bir logoya
          dönüştürdü. Bu tür gizli sürprizler gelip gider ve tam ekranda çalışmaz.
        </p>
        <p className={p}>
          Bu sayfa aynı seken logoyu istediğiniz zaman, her tarayıcıda sunar: tam ekran, köşe sayacı ve hız ile boyut ayarlarıyla.
        </p>
      </Section>

      <Section wide id="tv-heading" title="Televizyonda, Yayında veya İkinci Monitörde DVD Ekran Koruyucu">
        <Table
          caption="DVD ekran koruyucu nerede kullanılır"
          head={['Kullanım', 'Nasıl']}
          rows={[
            ['Akıllı TV', 'Bu sayfayı televizyonun tarayıcısında açın veya bir tarayıcı sekmesini yansıtın, ardından tam ekrana geçin'],
            ['Yayın arası veya “hemen dönüyorum” ekranı', 'Uzaklaştığınızda bu pencereyi OBS’e pencere yakalama olarak ekleyin'],
            ['İkinci monitör', 'Pencereyi boştaki ekrana sürükleyin ve tam ekrana geçin'],
            ['Bekleme salonu veya ofis', 'Biraz nostalji için boştaki bir ekranda açık bırakın'],
          ]}
        />
      </Section>

      <Section wide id="logo-heading" title="DVD Ekran Koruyucu Logosu ve GIF">
        <p className={p}>
          Buradaki logo tarayıcınızda canlı olarak çizilir: içinden &quot;VIDEO&quot; yazısı oyulmuş bir diskin üzerinde kalın bir
          &quot;DVD&quot; yazısı, her sekmede yeniden renklenir. Resmi DVD Video logosu DVD Format/Logo Licensing Corporation’ın ticari
          markası olduğundan PNG olarak indirilemez.
        </p>
        <h3 className={h3}>DVD Ekran Koruyucu GIF’i Yapın</h3>
        <p className={p}>
          Ekran koruyucuyu tam ekranda çalıştırın ve ekranınızı yerleşik bir kaydediciyle kaydedin (Windows Ekran Alıntısı Aracı, Mac’te
          Ekran Görüntüsü araç çubuğu veya telefonunuzun ekran kaydedicisi), ardından klibi DVD GIF’ine dönüştürün. Kusursuz bir döngü
          için bir köşe isabetine kadar kaydedin.
        </p>
      </Section>

      <Section wide id="corner-heading" title="DVD Ekran Koruyucu Köşeye Çarpacak mı?">
        <p className={p}>
          Evet, ama ne sıklıkla olacağı ekranın şekline, logo boyutuna ve logonun nereden başladığına bağlıdır. Köşe isabeti ancak logo
          bir yana ve üst ya da alt kenara aynı anda ulaştığında gerçekleşir. Bazı ekran boyutlarında bu sık olur; bazılarında uzun sürebilir.
          Logo boyutunu değiştirmek veya pencereyi yeniden boyutlandırmak size yeni bir yol verir.
        </p>
        <p className={p}>
          Bu da onu mükemmel bir DVD oyununa çevirir: herkes bir sonraki köşe isabetinin ne zaman geleceğini tahmin eder, sayaç da kararı
          verir. Daha fazla boşta ekranı için <Link href="/flip-clock-screensaver" className={link}>yaprak saat ekran koruyucuyu</Link> veya{' '}
          <Link href="/matrix-screensaver" className={link}>Matrix ekran koruyucuyu</Link> deneyin.
        </p>
      </Section>
    </div>
  )
}
