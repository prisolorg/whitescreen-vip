import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Ekran Yenileme Hızı Testi (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle:
 * Hz testi nasıl çalışır → ekran ayarları → 60, 120, 144 Hz sonuçları → kare hızı testiyle farkı.
 * Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function RefreshRateGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Ekran Yenileme Hızı Testi Nasıl Çalışır?">
        <p className={p}>
          Tarayıcılar her ekran yenilemesinde bir yeni kare çizer; bu karelerin süresini ölçmek yenileme hızınızı ortaya çıkarır. Bu Hz testi
          kendiliğinden başlar ve şunları gösterir:
        </p>
        <ul className={ul}>
          <li>En yakın yaygın değere (60, 120, 144 Hz vb.) yuvarlanmış, Hz cinsinden yenileme hızınız.</li>
          <li>Her karenin milisaniye cinsinden ne kadar sürdüğü ve geç karelerin oranı.</li>
          <li>Görülen en düşük ve en yüksek değerler, ayrıca yüksek Hz’de daha akıcı görünen hareketli bir blok.</li>
        </ul>
        <p className={p}>
          Monitörler, laptoplar ve telefonlar için Hz ölçer olarak çalışır. Bir ayarı değiştirdikten sonra Yeniden ölç’e basın ve test etmek
          istediğiniz ekranda tam ekran için iki kez dokunun.
        </p>
      </Section>

      <Section wide id="check-heading" title="Ekran Yenileme Hızı Testi ve Ekran Ayarlarınız">
        <p className={p}>Test, ekranınızın şu anda hangi hızda çalıştığını gösterir. Monitör yenileme hızı ayarınızı görmek veya değiştirmek için:</p>
        <Table
          caption="Yenileme hızı ayarı nerede bulunur"
          head={['Cihaz', 'Nereye bakılır']}
          rows={[
            ['Windows 11 / 10', 'Ayarlar → Sistem → Ekran → Gelişmiş ekran → Yenileme hızı seçin'],
            ['Mac', 'Sistem Ayarları → Ekranlar → Yenileme Hızı'],
            ['iPhone / iPad', 'Modele göre sabittir; ProMotion modelleri otomatik olarak 120 Hz’e kadar çıkar'],
            ['Android', 'Ayarlar → Ekran → Ekran yenileme hızı (veya Hareket akıcılığı)'],
          ]}
        />
        <h3 className={h3}>Sonuç Neden Beklenenden Düşük Çıkabilir?</h3>
        <ul className={ul}>
          <li>Ekran ayarlarda 60 Hz’e ayarlıdır ya da kablo veya bağlantı noktası daha yüksek hızı taşıyamaz.</li>
          <li>Pille çalışan bir laptop veya güç tasarrufu modundaki bir telefon enerji tasarrufu için hızı düşürür.</li>
          <li>Ağır sekmeler veya uygulamalar tarayıcının kare atlamasına neden olur. Onları kapatın ve yeniden ölçün.</li>
        </ul>
      </Section>

      <Section wide id="rates-heading" title="Ekran Yenileme Hızı Testi Sonuçları: 60, 120 ve 144 Hz">
        <Table
          caption="Yaygın yenileme hızları"
          head={['Hız', 'Kare başına süre', 'Tipik ekranlar']}
          rows={[
            ['60 Hz', '16,7 ms', 'Çoğu ofis monitörü, eski laptoplar ve televizyonlar'],
            ['90 Hz', '11,1 ms', 'Birçok orta segment telefon'],
            ['120 Hz', '8,3 ms', 'Oyun telefonları, iPhone Pro, yeni televizyonlar ve laptoplar'],
            ['144 Hz', '6,9 ms', 'Oyuncu monitörleri'],
            ['240 Hz', '4,2 ms', 'E-spor monitörleri'],
          ]}
        />
      </Section>

      <Section wide id="fps-heading" title="Ekran Yenileme Hızı Testi mi, Kare Hızı Testi mi?">
        <p className={p}>
          Yenileme hızı (Hz) ekranınızın ne sıklıkla yeniden çizildiğidir; kare hızı (FPS) ise tarayıcınızın veya oyununuzun kaç kare ürettiğidir.
          Hareketi ve FPS’i kontrol etmek için <Link href="/frame-rate-test" className={link}>FPS testini</Link>, bulanıklık ve izler için{' '}
          <Link href="/monitor-ghosting-test" className={link}>monitör gölgelenme testini</Link> deneyin.
        </p>
      </Section>
    </div>
  )
}
