import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Kırmızı Ekran (Türkçe). Türkçe arama ifadeleri: gece ve uyku için kırmızı ekran ışığı → fotoğraf ve Reels için kırmızı ışık →
 * kırmızı tonları → kırmızı ekran testi. Düğme adları Türkçe arayüzle aynıdır.
 */
export function RedScreenGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="night-heading" title="Gece ve Uyku için Kırmızı Ekran Işığı">
        <p className={p}>
          Loş kırmızı ışık gece görüşünüzü en az etkileyen ışıktır. Gözlerinizin düşük ışık hücreleri koyu kırmızıya neredeyse hiç tepki vermez; bu
          yüzden gökbilimciler ve pilotlar onu kullanır. Parlaklık kaydırıcısını düşürün, tam ekran için iki kez dokunun ve Ekranı açık tut’u açın.
        </p>
        <Table
          caption="Kırmızı ekranı gece kullanmak için önerilen ayarlar"
          head={['Kullanım', 'Parlaklık', 'İpucu']}
          rows={[
            ['Gece lambası', '%20–40', 'Yumuşak bir parıltı için ekranı bir duvara çevirin'],
            ['Karanlıkta not okumak', '%30–50', 'Telefonu yakın ve göz hizasının altında tutun'],
            ['Yıldız gözlemi', 'Olabildiğince düşük', 'Gözlerinizin karanlık gökyüzüne alışık kalmasını sağlar'],
            ['Parlak kırmızı ışık', '%100', 'Sinyaller, efektler ve fotoğraflar için; dinlenmek için değil'],
          ]}
        />
        <h3 className={h3}>Kırmızı Ekran Uyku için İyi mi?</h3>
        <p className={p}>
          Loş kırmızı ışık ekranı, mavi ışık içermediği için yatmadan önce parlak bir <Link href="/" className={link}>beyaz ekrandan</Link> veya mavi
          ekrandan daha yumuşaktır. Yine de bir ışıktır; düşük tutun ve uyumaya hazır olduğunuzda kapatın. Ekran bir kırmızı ışık terapisi cihazı
          değildir: onlar belirli dalga boyları ve çok daha yüksek güç kullanır.
        </p>
      </Section>

      <Section wide id="photo-heading" title="Fotoğraf, Reels ve Resimler için Kırmızı Ekran">
        <p className={p}>Kırmızı ekran, yalnızca bir telefon veya laptopla selfie’lere ve Reels videolarına atmosferik kırmızı bir parıltı verir.</p>
        <ul className={ul}>
          <li>Yüzünüzdeki tek ışık kırmızı ışık olsun diye oda ışıklarını kapatın.</li>
          <li>Bu tamamen kırmızı ekranı ikinci bir telefonda, tablette veya laptopta açın, Parlaklık’ı %100’e ayarlayın ve tam ekrana geçin.</li>
          <li>Gölge ve derinlik için ekranı yüzünüzden 20–40 cm uzakta, biraz yana doğru tutun.</li>
          <li>Cildiniz patlamış görünüyorsa parlaklığı düşürün veya ekranı geri çekin.</li>
        </ul>
        <p className={p}>iPhone, Android ve laptoplarda aynı şekilde çalışır. Ekran ne kadar büyükse ışık o kadar yumuşak olur.</p>
      </Section>

      <Section wide id="shade-heading" title="Kırmızı Ekran Renkleri: Parlak, Koyu ve Açık Kırmızı">
        <p className={p}>
          Bu sayfa saf kırmızıyı, #FF0000’ı (RGB 255, 0, 0) gösterir: üzerinde başka hiçbir şey olmayan boş bir kırmızı ekran. Sıcaklık Nötr’deyken
          koyulaştırmak için Parlaklık kaydırıcısını kullanın.
        </p>
        <Table
          caption="Kırmızı tonları ve nasıl elde edilecekleri"
          head={['Ton', 'Hex', 'Nasıl elde edilir']}
          rows={[
            ['Parlak kırmızı', '#FF0000', 'Parlaklık %100'],
            ['Koyu kırmızı', '#B30000', 'Parlaklık %70'],
            ['Derin kırmızı / bordo', '#800000', 'Parlaklık %50'],
            ['Açık kırmızı / pembe', '#FF69B4', <Link key="p" href="/pink-screen" className={link}>Pembe ekranı açın</Link>],
          ]}
        />
        <p className={p}>
          Dosya mı lazım? İndir, 1080p, 2K, 4K veya telefon boyutunda ya da 8K’ya kadar özel boyutta kırmızı bir PNG kaydeder. Daha fazla ton{' '}
          <Link href="/backgrounds/red-background" className={link}>kırmızı arka plan</Link> koleksiyonunda.
        </p>
      </Section>

      <Section wide id="test-heading" title="Kırmızı Ekran Testi: Kırmızı Alt Pikseller ve Renk Doğruluğu">
        <p className={p}>
          Saf kırmızı yalnızca kırmızı alt pikselleri yakar. Koyu bir nokta ölü bir kırmızı alt pikseldir; sarı veya macenta bir nokta ise yeşil ya da
          mavi bir alt pikselin açık kaldığı anlamına gelir. Ucuz monitörler kırmızıyı da çoğu zaman turuncumsu veya pembemsi gösterir; başka bir
          cihazla karşılaştırın ya da <Link href="/screen-color-test" className={link}>ekran renk testini</Link> ve{' '}
          <Link href="/dead-pixel-test" className={link}>ölü piksel testini</Link> yapın.
        </p>
      </Section>
    </div>
  )
}
