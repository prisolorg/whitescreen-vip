import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Sarı Ekran (Türkçe). Türkçe arama ifadeleri: sıcak ışık olarak sarı ekran → sarı el feneri → düz sarı ekran (#FFFF00) →
 * sarı ekran testi (kırmızı ve yeşil alt pikseller). Düğme adları Türkçe arayüzle aynıdır.
 */
export function YellowScreenGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Sıcak Işık Olarak Sarı Ekran">
        <p className={p}>
          Sarı ekran içinde mavi olmayan sıcak bir ışık verir; bu da onu okuma, görüntülü görüşme ve akşamlar için rahat bir sıcak ışık ekranı yapar.
          Tam ekran için önizlemeye iki kez dokunun ve ışığın açık kalması için Ekranı açık tut’u açın.
        </p>
        <Table
          caption="Sarı ekranı ışık olarak kullanmak için önerilen ayarlar"
          head={['Kullanım', 'Ayarlar', 'İpucu']}
          rows={[
            ['Okuma ışığı', 'Sıcak, Parlaklık %60–80', 'Bir tableti kitabınızın yanına, gözlerinizden uzağa açılı yerleştirin'],
            ['Görüntülü görüşmeler', 'Nötr, Parlaklık %100', 'Altın rengi bir parıltı için ekranı web kameranızın arkasına koyun'],
            ['Akşam veya gece ışığı', 'Sıcak, Parlaklık %30–50', 'Düşük parlaklık karanlık bir odada ışığı yumuşak tutar'],
            ['Fotoğraf ve video rengi', 'Nötr veya Sıcak', 'İkinci bir ekranı yandan sıcak vurgu ışığı olarak kullanın'],
          ]}
        />
        <h3 className={h3}>Telefonunuzda Sarı El Feneri</h3>
        <p className={p}>
          Bu sayfayı telefonunuzda açın, parlaklığı artırın ve tam ekrana geçin. Sıcak sarı ışık karanlıkta parlak beyaz bir el fenerinden daha az
          rahatsız edicidir; bu yüzden geceleri çocukları kontrol etmek veya yolunuzu bulmak için kullanışlıdır.
        </p>
      </Section>

      <Section wide id="solid-heading" title="Düz Sarı Ekran (#FFFF00)">
        <p className={p}>
          Bu sayfa düz sarıyı gösterir: kırmızı ve yeşil tam güçte, mavi kapalı (RGB 255, 255, 0). Üzerinde başka hiçbir şey olmayan boş bir sarı
          ekrandır ve tonunu önizlemenin altındaki kontrollerle değiştirebilirsiniz.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Parlak sarı:</strong> Nötr, Parlaklık %100.
          </li>
          <li>
            <strong className="text-foreground">Altın sarısı:</strong> Sıcak’ı seçin.
          </li>
          <li>
            <strong className="text-foreground">Hardal sarısı:</strong> Parlaklık kaydırıcısını düşürün.
          </li>
        </ul>
        <p className={p}>
          Dosya mı lazım? İndir, 1080p’den 8K’ya veya telefon ve özel boyutlarda sarı bir PNG kaydeder. Pastel ve açık sarı tonlar için{' '}
          <Link href="/backgrounds/yellow-background" className={link}>sarı arka plan</Link> koleksiyonuna göz atın.
        </p>
      </Section>

      <Section wide id="check-heading" title="Sarı Ekran Testi: Kırmızı ve Yeşil Alt Pikseller">
        <p className={p}>
          Sarı, kırmızı ve yeşil alt pikselleri birlikte yakar. Kırmızı bir nokta ölü bir yeşil alt piksel, yeşil bir nokta ölü bir kırmızı alt piksel,
          beyaz bir nokta ise açık kalmış bir mavi alt piksel anlamına gelir. <Link href="/red-screen" className={link}>Kırmızı</Link>,{' '}
          <Link href="/green-screen" className={link}>yeşil</Link> ve <Link href="/blue-screen" className={link}>mavi</Link> ekranlarla daraltın.
        </p>
        <p className={p}>
          <Link href="/" className={link}>Beyaz ekranınız</Link> sarı görünüyorsa{' '}
          <Link href="/screen-problems/yellow-tint-on-screen" className={link}>sarı ton rehberine</Link> bakın.
        </p>
      </Section>
    </div>
  )
}
