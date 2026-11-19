import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Kare Hızı Testi (Türkçe). İngilizce "FPS test" rehberinden çevrildi, Türkçe arama ifadeleriyle (FPS testi, kare hızı):
 * yan yana karşılaştırma → sonuçlar → yenileme hızı testiyle farkı → oyunlarda FPS. Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function FrameRateGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Kare Hızı Testi: FPS Değerlerini Yan Yana Karşılaştırın">
        <p className={p}>
          Bu kare hızı testi (FPS testi), aynı bloğu her biri farklı kare hızında olan beş şeritte hareket ettirir; böylece farkı kendiniz görebilirsiniz:
        </p>
        <ul className={ul}>
          <li>15, 24, 30 ve 60 FPS şeritleri; her biri o hızdaki bir video gibi yalnızca kendi karelerinde hareket eder.</li>
          <li>Ekranınızın gösterdiği her karede hareket eden ve gerçek FPS değerinizle etiketlenen bir maksimum şeridi.</li>
          <li>&ldquo;Ekranınız&rdquo;, ekranınızın ve tarayıcınızın gösterebildiği en yüksek FPS’i canlı ölçerek okur.</li>
        </ul>
        <p className={p}>
          Hareketi hızlandırmak için Hız’ı (120 ila 1.800 px/sn) kullanın, dondurmak için Duraklat’a basın ve tam ekran için iki kez dokunun. Bu online
          FPS testini hiçbir şey yüklemeden her tarayıcıda çalıştırın.
        </p>
      </Section>

      <Section wide id="results-heading" title="Kare Hızı Testi Sonuçları: Her FPS Nasıl Görünür?">
        <Table
          caption="Yaygın kare hızları"
          head={['Kare hızı', 'Kare başına süre', 'Nerede görürsünüz']}
          rows={[
            ['15 FPS', '66,7 ms', 'Kesik kesik; yavaş görüntülü görüşmeler, eski web kameraları'],
            ['24 FPS', '41,7 ms', 'Filmler ve çoğu dizi yayını'],
            ['30 FPS', '33,3 ms', 'TV, YouTube, konsol oyunları'],
            ['60 FPS', '16,7 ms', 'Akıcı oyun ve spor videoları'],
            ['120+ FPS', '8,3 ms veya daha az', 'Yüksek yenileme hızlı monitörler ve telefonlar'],
          ]}
        />
        <p className={p}>Hızlı FPS kontrolü: maksimum şeridi 60’tan daha akıcı görünmüyorsa ekranınız muhtemelen 60 Hz’de çalışıyordur.</p>
      </Section>

      <Section wide id="hz-heading" title="Kare Hızı Testi mi, Yenileme Hızı Testi mi?">
        <p className={p}>
          Kare hızı (FPS) her saniye kaç kare çizildiğidir; yenileme hızı (Hz) ise monitörünüzün ne sıklıkla yeni bir kare gösterebildiğidir. Bir
          ekran Hz değerinden fazla FPS gösteremez; bu yüzden kare hızı testinde maksimum şeridi yenileme hızınızla sınırlıdır.
        </p>
        <p className={p}>
          Yenileme hızını kare süreleri ve geç karelerle birlikte tam olarak kontrol etmek için{' '}
          <Link href="/screen-refresh-rate-test" className={link}>ekran yenileme hızı testini</Link> yapın. Hareket eden nesnelerin arkasındaki izler için{' '}
          <Link href="/monitor-ghosting-test" className={link}>monitör gölgelenme testini</Link> deneyin.
        </p>
      </Section>

      <Section wide id="games-heading" title="Oyunlar için Kare Hızı Testi">
        <p className={p}>
          Online araçlar oyunlarınızı değil tarayıcıyı ölçer; bu FPS ölçer oyunların içini göremez. Oyun içi FPS’i görmek için bir katman (overlay) kullanın:
        </p>
        <ul className={ul}>
          <li>Windows: Win + G tuşlarına basın ve Xbox Game Bar’da Performans pencere öğesini açın.</li>
          <li>Steam: Steam’in Oyun İçi ayarlarında FPS sayacını açın.</li>
          <li>NVIDIA veya AMD: ekran kartı sürücüsü uygulamasındaki performans katmanı.</li>
        </ul>
      </Section>
    </div>
  )
}
