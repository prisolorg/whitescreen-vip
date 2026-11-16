import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Görüntülü Görüşme Işığı (Türkçe). İngilizce "Zoom lighting" rehberinden çevrildi, Türkçe arama ifadeleriyle:
 * ekranı ışığa çevirme → toplantı ve görüntülü görüşme kurulumu → halka ışıkla karşılaştırma.
 * Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function ZoomLightingGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Görüntülü Görüşme Işığı: Ekranınızı Işığa Dönüştürün">
        <p className={p}>
          Bu araç boştaki bir ekranı yüzünüz için yumuşak ve eşit bir ışığa dönüştürür. En iyi, web kameranızın arkasına yerleştirilmiş ikinci
          bir monitörde, tablette veya telefonda çalışır; böylece ışık size önden vurur.
        </p>
        <ul className={ul}>
          <li>Parlak beyaz bir ışık için Parlaklık’ı %100’e ayarlayın veya daha yumuşak bir parıltı için düşürün.</li>
          <li>Sıcak (3000 K), Nötr (4500 K) veya Gün ışığı (6500 K) seçin.</li>
          <li>Tam bir renk sıcaklığı, özel bir ışık rengi veya Çerçeve modu için Daha fazla menüsünü açın.</li>
          <li>Işık ekranının tüm ekranı kaplaması için ekrana iki kez dokunun veya F tuşuna basın.</li>
        </ul>
      </Section>

      <Section wide id="setup-heading" title="Zoom Toplantıları ve Görüntülü Görüşmeler için Görüntülü Görüşme Işığı Kurulumu">
        <Table
          caption="Görüntülü görüşme ışığı kurulumları"
          head={['Durum', 'Şunu deneyin']}
          rows={[
            ['Pencere kenarında gündüz toplantısı', 'Gün ışığı; ekran güneş ışığıyla uyumlu olur'],
            ['Akşam görüntülü görüşmesi', 'Sıcak, %60–80 parlaklıkta'],
            ['Tavan lambalı ofis', 'Nötr, ışık ekranı web kameranızın hemen üstünde'],
            ['Yüzünüzün bir tarafında gölge', 'O tarafa ikinci bir ışık ekranı ekleyin'],
          ]}
        />
        <p className={p}>
          Görüntülü görüşmeler için en iyi ışık önden gelir: parlak pencereleri arkanızda değil, kameranın arkasında tutun ve ışığı yaklaşık göz
          hizasına kaldırın. Çerçeve modu daha yumuşak bir web kamerası ışığı için yalnızca ekranın kenarlarını aydınlatır.
        </p>
      </Section>

      <Section wide id="ring-heading" title="Görüntülü Görüşme Işığı mı, Halka Işık mı?">
        <p className={p}>
          Görüntülü görüşme ışığı yüzünüzü düz ve eşit bir ışıkla doldurur. İçerik üreticilerinin sevdiği, gözlerdeki yuvarlak ışık yansıması
          için <Link href="/ring-light" className={link}>online halka ışığı</Link> deneyin. Sade, parlak bir ışık için{' '}
          <Link href="/" className={link}>beyaz ekran</Link> da işe yarar.
        </p>
      </Section>
    </div>
  )
}
