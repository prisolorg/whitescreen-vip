import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Mavi Ekran (Türkçe). Türkçe arama ifadeleri: mavi ekran ışığı → mavi tonları (lacivert, açık mavi) → chroma key için mavi ekran →
 * mavi ekran testi (mavi ışık gözlüğü, alt pikseller). Düğme adları Türkçe arayüzle aynıdır.
 */
export function BlueScreenGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Mavi Ekran Işığı: Ekranınızı Mavi Aydınlatma için Kullanın">
        <p className={p}>
          Tam mavi ekran her monitörü, laptopu veya telefonu yumuşak bir mavi ışık ekranına dönüştürür. Tam ekran için önizlemeye iki kez dokunun,
          Ekranı açık tut’u açın ve ihtiyacınız olan parlaklığı ayarlayın.
        </p>
        <Table
          caption="Mavi ekranı ışık olarak kullanma yolları"
          head={['Kullanım', 'Ayarlar', 'İpucu']}
          rows={[
            ['Yayınlar ve videolar için arka plan parıltısı', 'Parlaklık %70–100', 'İkinci bir ekranı arkanıza, kadraj dışına yerleştirin'],
            ['Fotoğraf ve video vurgu ışığı', 'Parlaklık %100', 'Çekim konusunda serin bir kenar ışığı için yandan aydınlatın'],
            ['Ortam ve parti aydınlatması', 'Parlaklık %40–70', 'Mavi ışığı yaymak için ekranı bir duvara çevirin'],
            ['Parlak mavi flaş', 'Parlaklık %100, tam ekran', 'Telefonlar en güçlü ışığı en yüksek parlaklıkta verir'],
          ]}
        />
        <h3 className={h3}>Ekranlardan Gelen Mavi Işık ve Uyku</h3>
        <p className={p}>
          Akşamları parlak mavi ışık uykuya dalmayı zorlaştırabilir. Mavi aydınlatmayı gündüz veya yaratıcı çekimler için kullanın, geceleri düşük
          parlaklıkta <Link href="/red-screen" className={link}>kırmızı</Link> veya <Link href="/orange-screen" className={link}>turuncu</Link> ekrana geçin.
        </p>
      </Section>

      <Section wide id="shade-heading" title="Mavi Ekran Renkleri: Parlak, Koyu, Lacivert ve Açık Mavi">
        <p className={p}>Bu sayfa saf maviyi, #0000FF’u (RGB 0, 0, 255) gösterir. Sıcaklık Nötr’deyken koyulaştırmak için Parlaklık kaydırıcısını kullanın.</p>
        <Table
          caption="Mavi tonları ve nasıl elde edilecekleri"
          head={['Ton', 'Hex', 'Nasıl elde edilir']}
          rows={[
            ['Parlak mavi', '#0000FF', 'Parlaklık %100'],
            ['Koyu mavi', '#0000B3', 'Parlaklık %70'],
            ['Lacivert', '#000080', 'Parlaklık %50'],
            ['Açık mavi', '#00FFFF', <Link key="c" href="/cyan-screen" className={link}>Camgöbeği ekranı açın</Link>],
          ]}
        />
        <p className={p}>
          Dosya mı lazım? İndir, 1080p’den 8K’ya veya telefon ve özel boyutlarda mavi bir PNG kaydeder. Daha fazla seçenek{' '}
          <Link href="/backgrounds/blue-background" className={link}>mavi arka plan</Link> koleksiyonunda.
        </p>
      </Section>

      <Section wide id="chroma-heading" title="Chroma Key, Fotoğrafçılık ve Düzenleme için Mavi Ekran">
        <p className={p}>Mavi ekran yeşil ekran gibi çalışır ve bazı durumlarda daha iyi bir seçimdir:</p>
        <ul className={ul}>
          <li>Çekim konunuz yeşil giyiyor veya yeşil nesneler tutuyorsa.</li>
          <li>Daha az görünür renk yansıması istiyorsanız. Mavi yansımayı gizlemek daha kolaydır, ancak mavinin temiz anahtarlanması için daha fazla ışık gerekir.</li>
        </ul>
        <p className={p}>
          Küçük ürünler ve yakın çekimler için bu sayfayı bir laptopta, bilgisayar monitöründe veya telefonda açın, Parlaklık’ı yaklaşık %70’e ayarlayın
          ve çekim konusunu ekranın 20–30 cm önünde tutun. Düzenleme için mavi bir PNG indirin ve yeşil için kullanacağınız araçlarla anahtarlayın:
          OBS Chroma Key, CapCut Chroma key, Premiere Ultra Key veya DaVinci Resolve’un 3D Keyer’ı. Anahtarlamanın nasıl çalıştığı için{' '}
          <Link href="/glossary/chroma-key" className={link}>chroma key</Link> sayfasına bakın.
        </p>
      </Section>

      <Section wide id="test-heading" title="Mavi Ekran Testi: Mavi Işık Gözlükleri ve Alt Pikseller">
        <p className={p}>
          Gözlükleriniz için hızlı bir mavi ışık testi mi istiyorsunuz? Bu sayfaya tam parlaklıkta gözlükle ve gözlüksüz bakın. Belirgin renkli camlar
          maviyi fark edilir şekilde koyulaştırır; mavinin çok azını engelleyen şeffaf camlar neredeyse hiç fark yaratmaz. Camların her şeyi ne kadar
          renklendirdiğini görmek için aynısını <Link href="/" className={link}>beyaz ekranla</Link> deneyin. Bu hızlı bir görsel kontroldür, laboratuvar
          ölçümü değildir.
        </p>
        <p className={p}>
          Saf mavi yalnızca mavi alt pikselleri yakar. Siyah bir nokta ölü bir mavi alt pikseldir; macenta veya camgöbeği bir nokta ise kırmızı ya da
          yeşil bir alt pikselin açık kaldığı anlamına gelir. Tam bir kontrol için <Link href="/dead-pixel-test" className={link}>ölü piksel testini</Link> yapın.
        </p>
      </Section>
    </div>
  )
}
