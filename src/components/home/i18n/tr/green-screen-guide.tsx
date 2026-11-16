import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Yeşil Ekran (Türkçe). Türkçe arama ifadeleri: yeşil ekran rengi / chroma key yeşili → bilgisayarda yeşil ekran kurulumu →
 * YouTube ve video düzenleme için yeşil ekran → yeşil ekran testi. Düğme adları Türkçe arayüzle aynıdır.
 */
export function GreenScreenGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="color-heading" title="Yeşil Ekran Rengi: Hangi Yeşil En İyisi?">
        <p className={p}>
          Bu sayfa saf yeşili, #00FF00’ı (RGB 0, 255, 0) gösterir. Anahtarlama yazılımları eşit ve doygun her yeşili kaldırır, ama çok parlak yeşil
          çekim konusuna yansıyabilir. İhtiyacınız olan tonu elde etmek için Parlaklık kaydırıcısını kullanın ve sıcaklığı Nötr’de tutun.
        </p>
        <Table
          caption="Yeşil ekran renkleri ve bu sayfada nasıl elde edilecekleri"
          head={['Ton', 'Hex', 'Nasıl elde edilir', 'En uygun olduğu']}
          rows={[
            ['Parlak yeşil', '#00FF00', 'Parlaklık %100', 'Piksel testleri, en canlı fon'],
            ['Chroma key yeşili', '#00B300 (#00B140 standardına yakın)', 'Parlaklık %70', 'Daha az renk yansımasıyla video anahtarlama'],
            ['Koyu yeşil', '#008000', 'Parlaklık %50', 'Loş odalarda daha yumuşak bir fon'],
          ]}
        />
        <p className={p}>
          Açık yeşil veya pastel tonlar mı arıyorsunuz? <Link href="/backgrounds/green-background" className={link}>Yeşil arka plan</Link>{' '}
          koleksiyonuna göz atın.
        </p>
      </Section>

      <Section wide id="computer-heading" title="Bilgisayarda Yeşil Ekran Kurulumu: Laptop, Monitör veya Telefon">
        <p className={p}>Yeşil bir bilgisayar ekranı küçük çekimler için hızlı bir fon olur: ürünler, eller, oyuncaklar ve yakın çekimler.</p>
        <ul className={ul}>
          <li>Bu sayfayı bir monitörde, laptopta, tablette veya telefonda açın ve tam ekran için iki kez dokunun.</li>
          <li>Yeşilin çekimin ortasında kapanmaması için Ekranı açık tut’u açın.</li>
          <li>Sıcak noktalar olmadan eşit bir yeşil için Parlaklık’ı yaklaşık %70’e ayarlayın.</li>
          <li>Yeşil ışığın üzerine yansımaması için çekim konusunu ekranın 20–30 cm önünde tutun.</li>
          <li>Tam karşıdan çekin. Görüş açıları ekranın kenarlarda daha koyu görünmesine yol açabilir.</li>
        </ul>
        <p className={p}>
          Bir ekran, bir insanın arkasında durmak için çok küçüktür. Boy çekimleri veya yüz kamerası çekimleri için arkanıza yeşil kumaş asın ya da
          bunun yerine düzenleyicinizde yeşil bir arka plan ekleyin.
        </p>
      </Section>

      <Section wide id="video-heading" title="YouTube, Video ve Düzenleme için Yeşil Ekran">
        <p className={p}>
          Bir ekranda değil de düzenlemeniz için online bir yeşil ekran mı lazım? 1080p, 4K, telefon boyutunda veya herhangi bir özel boyutta yeşil
          bir PNG kaydetmek için önizlemenin altındaki İndir’i kullanın, ardından zaman çizelgenize bırakın.
        </p>
        <Table
          caption="Yeşil ekran nerede kaldırılır"
          head={['Yazılım', 'Kullanılacak araç']}
          rows={[
            ['OBS Studio', 'Kamera kaynağında Chroma Key (Renk Anahtarı) filtresi'],
            ['CapCut', 'Arka planı kaldır → Chroma key'],
            ['Premiere Pro', 'Ultra Key efekti'],
            ['DaVinci Resolve', '3D Keyer veya Delta Keyer'],
          ]}
        />
        <h3 className={h3}>Zoom ve Teams için Yeşil Ekran Arka Planları</h3>
        <p className={p}>
          Zoom ve Teams sanal bir yeşil ekran efekti sunar, ancak arkanızdaki gerçek yeşil kumaş daha temiz kenarlar verir. Anahtarlamaya hazır
          görseller için <Link href="/backgrounds/green-screen-background" className={link}>yeşil ekran arka planı</Link> setine bakın.{' '}
          <Link href="/glossary/chroma-key" className={link}>Chroma key</Link> anahtarlamanın nasıl çalıştığını açıklar.
        </p>
      </Section>

      <Section wide id="check-heading" title="Yeşil Ekran Testi: Alt Pikseller ve Homojenlik">
        <p className={p}>
          Gördüğümüz parlaklığın çoğunu yeşil taşır; bu yüzden koyu köşeler veya bulutlu lekeler onun üzerinde göze çarpar. Koyu bir nokta ölü bir
          yeşil alt pikseldir; sarı veya camgöbeği bir nokta ise kırmızı ya da mavi bir alt pikselin açık kaldığı anlamına gelir. Sonraki adımlar
          için <Link href="/screen-uniformity-test" className={link}>homojenlik testini</Link> yapın veya{' '}
          <Link href="/screen-problems/stuck-pixel" className={link}>sıkışmış piksel rehberini</Link> okuyun.{' '}
          <Link href="/" className={link}>Beyaz ekranda</Link> da görünen siyah bir nokta tamamen ölü bir pikseldir.
        </p>
      </Section>
    </div>
  )
}
