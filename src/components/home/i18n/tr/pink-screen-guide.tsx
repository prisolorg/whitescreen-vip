import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pembe Ekran (Türkçe). Türkçe arama ifadeleri: selfie ve TikTok için pembe ekran ışığı → pembe tonları (fuşya, açık pembe) →
 * pembe arka plan ve duvar kâğıdı. Düğme adları Türkçe arayüzle aynıdır.
 */
export function PinkScreenGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Selfie, Fotoğraf ve TikTok için Pembe Ekran Işığı">
        <p className={p}>
          Pembe ekran kolay ve yüzü güzel gösteren bir pembe ışıktır: pembe bir LED veya ek ekipman olmadan cildi yumuşatır ve sıcak bir parıltı
          katar. Tam ekran için önizlemeye iki kez dokunun ve Ekranı açık tut’u açın. Nötr, gerçeğe uygun ışık için bunun yerine{' '}
          <Link href="/" className={link}>beyaz ekranı</Link> kullanın.
        </p>
        <Table
          caption="Pembe ekranı ışık olarak kullanma yolları"
          head={['Kullanım', 'Ayarlar', 'İpucu']}
          rows={[
            ['Selfie ve fotoğraflar', 'Parlaklık %100', 'İkinci bir telefonu veya tableti yüzünüzün biraz yanında tutun'],
            ['FaceTime ve görüntülü görüşmeler', 'Parlaklık %70–100', 'Ekranı kameranızın arkasına, size dönük yerleştirin'],
            ['TikTok ve dudak senkronu videoları', 'Parlaklık %100, Sıcak', 'Pembe ışık öne çıksın diye oda ışıklarını kapatın'],
            ['Oda ve ortam aydınlatması', 'Parlaklık %40–70', 'Parıltıyı yaymak için ekranı bir duvara çevirin'],
          ]}
        />
      </Section>

      <Section wide id="shade-heading" title="Pembe Ekran Renkleri: Sıcak Pembe, Parlak Pembe ve Koyu Tonlar">
        <p className={p}>
          Bu sıcak pembe ekran, içinde biraz mavi olan parlak bir pembe olan #FF69B4’ü (RGB 255, 105, 180) gösterir. Tonu önizlemenin altındaki
          kontrollerle değiştirin.
        </p>
        <Table
          caption="Pembe tonları ve nasıl elde edilecekleri"
          head={['Ton', 'Nasıl elde edilir', 'Görünümü']}
          rows={[
            ['Sıcak pembe / parlak pembe', 'Nötr, Parlaklık %100', 'Canlı ve neşeli (#FF69B4)'],
            ['Mercan pembesi', 'Sıcak', 'Daha sıcak, şeftalimsi pembe (#FF4F64)'],
            ['Gül pembesi', 'Soğuk', 'Daha serin, biraz daha macenta (#DD5FB4)'],
            ['Koyu pembe', 'Parlaklık %50–70', 'Daha derin, kızıl pembe (#80355A–#B34A7E)'],
            ['Açık / bebek pembesi', <Link key="lp" href="/backgrounds/light-pink-background" className={link}>Açık pembe arka plan</Link>, 'Yumuşak ve soluk (#FFB6C1)'],
          ]}
        />
        <p className={p}>
          Daha güçlü bir neon pembe mi istiyorsunuz? <Link href="/magenta-screen" className={link}>Macenta ekranı</Link> deneyin.
        </p>
      </Section>

      <Section wide id="background-heading" title="Pembe Ekran Arka Planı ve Duvar Kâğıdı">
        <p className={p}>
          Dosya olarak sıcak pembe bir arka plan mı lazım? Önizlemenin altındaki İndir’i kullanın. Parlaklık ve sıcaklık ayarlarınız görsele uygulanır.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Laptop ve masaüstü:</strong> 1080p, 2K veya 4K.
          </li>
          <li>
            <strong className="text-foreground">Telefon duvar kâğıdı:</strong> Telefon (1080×2400).
          </li>
          <li>
            <strong className="text-foreground">Diğer her şey:</strong> TikTok ve Reels için 1080×1920 gibi özel bir genişlik ve yükseklik.
          </li>
        </ul>
        <p className={p}>
          Daha yumuşak mı olsun? <Link href="/backgrounds/light-pink-background" className={link}>Açık pembe arka planı</Link> (#FFB6C1) kullanın veya{' '}
          <Link href="/backgrounds/pink-background" className={link}>pembe arka plan</Link> koleksiyonuna bakın.
        </p>
      </Section>
    </div>
  )
}
