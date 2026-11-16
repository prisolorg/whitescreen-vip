import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Siyah Ekran (Türkçe). Türkçe arama ifadeleri: tam ekran siyah ekran → siyah ekran resmi / siyah PNG → simsiyah ekran →
 * boş ekran → ikinci monitör için karanlık ekran → siyah ekran testi.
 * Düğme adları Türkçe arayüzle aynıdır: İndir, Ekranı açık tut, Tam Ekran.
 */
export function BlackScreenGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="howto-heading" title="Tam Ekran Siyah Ekran Nasıl Açılır?">
        <ul className={ul}>
          <li>Kenardan kenara düz bir siyah ekran için önizlemeye iki kez dokunun veya F tuşuna basın.</li>
          <li>Telefonda önizlemenin köşesindeki tam ekran simgesine dokunun.</li>
          <li>Ekranın kararmaması veya uykuya geçmemesi için Ekranı açık tut’u açın.</li>
          <li>Çıkmak için Esc tuşuna basın veya yeniden iki kez dokunun. Hareketsiz kaldığınızda imleç kendiliğinden gizlenir.</li>
        </ul>
      </Section>

      <Section wide id="image-heading" title="Siyah Ekran Resmi: Siyah Görsel veya PNG İndirin">
        <p className={p}>
          Canlı ekran yerine siyah ekran resmi mi lazım? Tam ihtiyacınız olan boyutta saf siyah (#000000) bir PNG kaydetmek için önizlemenin
          altındaki İndir’i kullanın. Kayıpsız bir dosyadır; siyah, sıkıştırma paraziti olmadan düz kalır.
        </p>
        <Table
          caption="İndirebileceğiniz siyah ekran resmi boyutları"
          head={['Boyut', 'Piksel', 'Uygun olduğu']}
          rows={[
            ['Full HD 1080p', '1920 × 1080', 'YouTube videoları, sunumlar, çoğu monitör'],
            ['QHD 1440p', '2560 × 1440', 'Oyuncu monitörleri ve laptoplar'],
            ['4K UHD', '3840 × 2160', '4K video zaman çizelgeleri ve televizyonlar'],
            ['8K UHD', '7680 × 4320', '8K projeler ve çok büyük ekranlar'],
            ['iPhone / Android', '1179 × 2556 / 1080 × 2400', 'Telefon duvar kâğıdı, ana ekran ve kilit ekranı'],
            ['iPad', '2048 × 2732', 'Tablet duvar kâğıdı'],
            ['Özel', 'Herhangi bir boyut, ör. 1080 × 1920', 'Hikâyeler, Reels ve Shorts için dikey video'],
          ]}
        />
        <h3 className={h3}>Siyah Ekran Videosu ve Video Düzenleme</h3>
        <p className={p}>
          1080p veya 4K PNG’yi herhangi bir video düzenleyiciye bırakın ve istediğiniz uzunluğa kadar uzatın. Girişler, geçişler ve klipler arasındaki
          boşluklar için siyah kare görevi görür ve ayrı bir klip oluşturma zahmetinden kurtarır.
        </p>
        <p className={p}>
          Daha derin veya dokulu siyahlar mı istiyorsunuz? <Link href="/backgrounds/black-background" className={link}>Siyah arka plan</Link>{' '}
          koleksiyonuna göz atın.
        </p>
      </Section>

      <Section wide id="pure-heading" title="Simsiyah Ekran: Saf Siyah Ekran (#000000)">
        <p className={p}>
          Bu sayfa saf siyahı, yani bir ekrandan gösterilmesi istenebilecek en koyu değer olan RGB 0, 0, 0’ı gösterir. Gerçekte ne kadar siyah
          göründüğü panelinize bağlıdır.
        </p>
        <Table
          caption="Saf siyah ekran her ekran türünde nasıl görünür"
          head={['Ekran', 'Ne görürsünüz', 'Neden']}
          rows={[
            ['OLED / AMOLED', 'Gerçek simsiyah, parlama yok', 'Her piksel kendi ışığını üretir ve siyahta kapanır'],
            ['Mini-LED', 'Çok derin siyah', 'Yerel karartma bölgeleri arka ışığı kısar'],
            ['LCD (IPS, VA, TN)', 'Karanlık odada çok koyu gri', 'Arka ışık panelin arkasında açık kalır'],
          ]}
        />
        <p className={p}>
          Hangisine sahip olduğunuzdan emin değil misiniz? <Link href="/glossary/oled-vs-lcd" className={link}>OLED ve LCD</Link> farkı açıklıyor.
        </p>
      </Section>

      <Section wide id="blank-heading" title="Boş Ekran Olarak Siyah Ekran: Ekranınızı Gizleyin">
        <p className={p}>
          Boş bir siyah ekran, ekranınızdaki her şeyi kapatmadan gizler; böylece uygulamalar, indirmeler ve görüşmeler çalışmaya devam eder.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Sunumlar ve projeksiyonlar:</strong> slaytlar arasında veya insanlar konuşurken ekranı karartın.
          </li>
          <li>
            <strong className="text-foreground">Gizlilik:</strong> uzaklaştığınızda çalışmanızı tek dokunuşla örtün.
          </li>
          <li>
            <strong className="text-foreground">Odak:</strong> dikkat dağıtan ikinci bir monitörü temizleyin.
          </li>
        </ul>
        <h3 className={h3}>Siyah Ekran Sitesi: Tarayıcınızda Siyah Bir Sayfa</h3>
        <p className={p}>
          İhtiyaç duyduğunuzda siyah bir sayfa açmak için bu siyah ekran sitesini yer imlerine ekleyin. Başka hiçbir şey yüklenmez, kayıt gerekmez ve
          tam ekrana geçmeden önce pencereyi istediğiniz monitöre sürükleyebilirsiniz.
        </p>
      </Section>

      <Section wide id="dark-heading" title="İkinci Monitör için Siyah Ekran: Karanlık Ekran ve Karartma">
        <p className={p}>
          Bir ekranda film mi izliyor ya da oyun mu oynuyorsunuz? Odayı aydınlatmayı bıraksın diye diğerine karanlık bir ekran koyun. Bu pencereyi
          ikinci monitöre taşıyın, tam ekrana geçin ve Ekranı açık tut’u açın.
        </p>
        <ul className={ul}>
          <li>Güç ayarlarınızı değiştirmeden karartma ekranı veya siyah ekran koruyucu görevi görür.</li>
          <li>OLED’de siyah pikseller kapalıdır, bu yüzden saf siyah paneli sabit parlak bir görüntü gibi yıpratmaz.</li>
          <li>LCD’de en karanlık sonuç için monitörün parlaklığını da kısın.</li>
        </ul>
      </Section>

      <Section wide id="check-heading" title="Siyah Ekran Testi: Işık Sızması, Parlama ve Sıkışmış Pikseller">
        <p className={p}>
          Karanlık bir odada tam siyah ekran, birkaç yaygın hatayı kolayca görmenizi sağlar. Ölü pikseller ve toz için{' '}
          <Link href="/" className={link}>beyaz ekranı</Link> da kontrol edin:
        </p>
        <Table
          caption="Siyah ekranın ortaya çıkardığı ekran sorunları"
          head={['Ne görüyorsunuz', 'Nedir', 'Daha fazlası']}
          rows={[
            ['Kenarlardan sızan ışık', 'Arka ışık sızması', <Link key="b" href="/screen-problems/backlight-bleed" className={link}>Arka ışık sızması</Link>],
            ['Siz hareket ettikçe kayan parlama', 'IPS parlaması', <Link key="g" href="/screen-problems/ips-glow" className={link}>IPS parlaması</Link>],
            ['Yanık kalan bir nokta', 'Sıkışmış veya sıcak piksel', <Link key="d" href="/dead-pixel-test" className={link}>Ölü piksel testi</Link>],
            ['Siyaha yakın tonlarda şeritlenme veya renk tonu', 'OLED homojenliği', <Link key="o" href="/oled-gray-test" className={link}>OLED gri testi</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
