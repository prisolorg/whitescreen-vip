import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Beyaz Ekran (Türkçe ana sayfa). Türkçe arama ifadeleri: parlak beyaz ekran → boş / düz beyaz ekran → ışık olarak beyaz ekran
 * (el feneri) → beyaz ekran arka planı ve görsel indirme → beyaz ekran testi.
 * Düğme adları Türkçe arayüzle aynıdır: Parlaklık, Soğuk / Nötr / Sıcak, Ekranı açık tut, İndir.
 */
export function WhiteScreenGuideTr() {
  return (
    <>
      <Section id="bright-heading" title="Parlak Beyaz Ekran: Ekranınızın Gösterebileceği En Parlak Beyaz">
        <p className={p}>
          Yukarıdaki parlak beyaz ekran %100’de saf beyazdır (#FFFFFF); herhangi bir ekranın gösterebileceği en parlak renk. Gerçekte ne kadar parlak
          görüneceği cihazınızın kendi parlaklık ayarına bağlıdır, çünkü bir web sitesi donanımın arka ışığını sizin yerinize artıramaz.
        </p>
        <h3 className={h3}>Beyaz Ekran Nasıl Daha Parlak Yapılır?</h3>
        <ul className={ul}>
          <li>Ekranın altındaki Parlaklık kaydırıcısını %100’de tutun ve Nötr veya Soğuk’u seçin.</li>
          <li>Cihazınızın parlaklığını sonuna kadar açın (aşağıdaki tablo).</li>
          <li>Beyazı renklendiren veya karartan her şeyi kapatın: Gece ışığı, Night Shift, True Tone, göz koruma ve pil tasarrufu modları.</li>
          <li>Kenarları karartan tarayıcı çubukları kalmasın diye tam ekrana geçmek için ekrana iki kez dokunun.</li>
        </ul>
        <Table
          caption="Her cihazda en yüksek parlaklık nerede bulunur"
          head={['Cihaz', 'En yüksek parlaklık', 'Saf beyaz için kapatın']}
          rows={[
            ['Windows 10/11', 'Hızlı Ayarlar (Win + A) parlaklık kaydırıcısı', 'Gece ışığı, pil tasarrufu, içeriğe uyarlamalı parlaklık'],
            ['Mac', 'Parlaklık tuşları veya Denetim Merkezi → Ekran', 'Night Shift, True Tone, otomatik parlaklık'],
            ['iPhone / iPad', 'Denetim Merkezi kaydırıcısı', 'Night Shift, True Tone, Düşük Güç Modu'],
            ['Android', 'Hızlı Ayarlar kaydırıcısı', 'Uyarlanabilir parlaklık, göz koruma / gece ışığı'],
            ['Akıllı TV', 'Canlı veya Standart görüntü modu, arka ışık en yüksekte', 'Eko / enerji tasarrufu görüntü modları'],
          ]}
        />
        <h3 className={h3}>Çok Parlak Bir Ekran Gözleriniz için Güvenli mi?</h3>
        <p className={p}>
          Sabit bir beyaz ekran titremez veya yanıp sönmez, ama karanlık bir odada tam parlaklık sert gelebilir. Yalnızca yumuşak ışığa ihtiyacınız
          olduğunda kaydırıcıyı düşürün veya Sıcak’ı seçin; uzun süre kullanıyorsanız her 20 dakikada bir kısa süre başka yere bakın.
        </p>
      </Section>

      <Section id="blank-heading" title="Boş Beyaz Ekran: Üzerinde Hiçbir Şey Olmayan Düz, Saf Beyaz Ekran">
        <p className={p}>
          Boş beyaz ekran tam da budur: yazı, simge veya imleç olmayan tamamen beyaz bir ekran. Bunun gibi düz bir beyaz ekran temiz bir fon, bir ışık
          paneli veya ekranınızı tek dokunuşla temizlemenin bir yolu olarak işe yarar.
        </p>
        <ul className={ul}>
          <li>Kenardan kenara tamamen beyaz bir ekran için önizlemeye iki kez dokunun (veya F tuşuna basın).</li>
          <li>İmleç kısa bir hareketsizlikten sonra gizlenir, böylece beyazı hiçbir şey bozmaz.</li>
          <li>Tam ekrandan çıkmak için Esc tuşuna basın veya yeniden iki kez dokunun.</li>
        </ul>
        <h3 className={h3}>Saf Beyaz mı, Sıcak, Yumuşak ve Kırık Beyaz Ekranlar mı?</h3>
        <Table
          caption="Soğuk, Nötr ve Sıcak düğmeleriyle elde edebileceğiniz beyaz tonları"
          head={['Ton', 'Nasıl elde edilir', 'En uygun olduğu']}
          rows={[
            ['Saf beyaz (#FFFFFF)', 'Nötr, Parlaklık %100', 'Test, temizlik, en parlak ışık'],
            ['Soğuk beyaz', 'Soğuk, Parlaklık %100', 'Net gün ışığı görünümü, ürün fotoğrafları'],
            ['Sıcak beyaz', 'Sıcak', 'Görüntülü görüşmeler, makyaj, akşam okuması'],
            ['Yumuşak / kırık beyaz', 'Sıcak + Parlaklık %60–80', 'Karanlık odada yumuşak arka plan ışığı'],
          ]}
        />
      </Section>

      <Section id="light-heading" title="Işık için Beyaz Ekran: Ekranınızı Lamba Olarak Kullanın">
        <p className={p}>
          Ekranınız yumuşak ve eşit bir ışık kaynağıdır; tam parlaklıkta şaşırtıcı derecede parlak bir beyaz ışık verir. Parlaklık kaydırıcısını ve
          cihaz parlaklığını artırın, bir sıcaklık seçin ve ışığın görüşmenin ortasında sönmemesi için Ekranı açık tut’u açın.
        </p>
        <Table
          caption="Beyaz ekranı ışık olarak kullanmak için önerilen ayarlar"
          head={['Kullanım', 'Sıcaklık', 'İpucu']}
          rows={[
            ['Görüntülü görüşmeler (Zoom, Teams, Meet)', 'Sıcak veya Nötr', 'Ekranı web kameranızın hemen arkasına, göz hizasının biraz üstüne yerleştirin'],
            ['Makyaj ve selfie', 'Nötr', 'Eşit, gölgesiz ışık için ekrana tam karşıdan bakın'],
            ['Okuma ışığı', 'Sıcak', 'Parlamayı azaltmak için kaydırıcıyı %60–80’e düşürün'],
            ['Ürün fotoğrafları', 'Soğuk', 'İkinci bir cihazı yandan dolgu ışığı olarak kullanın'],
            ['Hızlı el feneri', 'Nötr', 'Telefonunuzda tam parlaklıkta tam ekran'],
          ]}
        />
        <h3 className={h3}>Telefonunuzu veya Laptopunuzu El Feneri Olarak Kullanın</h3>
        <p className={p}>
          Bu beyaz ekranı telefonunuzda açın, parlaklığı en yükseğe getirin ve tam ekran için iki kez dokunun. Bu ışık ekranı kamera flaşından daha
          yumuşaktır; bu yüzden karanlık bir odada kimseyi uyandırmadan bir şeyler bulmak için kullanışlıdır.
        </p>
        <p className={p}>
          Daha fazla kontrol mü istiyorsunuz? Yuvarlak bir ışık yansıması için <Link href="/ring-light" className={link}>online halka ışığı</Link>, tam
          renk sıcaklığı için <Link href="/zoom-lighting" className={link}>görüntülü görüşme ışığını</Link> deneyin.
        </p>
      </Section>

      <Section id="background-heading" title="Beyaz Ekran Arka Planı ve Görsel İndirme">
        <p className={p}>
          Dosya olarak beyaz ekran mı lazım? İhtiyacınız olan boyutta saf beyaz bir PNG kaydetmek için ekranın altındaki İndir’i kullanın. Seçtiğiniz
          parlaklık ve sıcaklık görsele uygulanır.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Masaüstü ve TV:</strong> 1080p, 2K ve 4K.
          </li>
          <li>
            <strong className="text-foreground">Telefon ve tablet:</strong> Telefon (1080×2400).
          </li>
          <li>
            <strong className="text-foreground">Özel:</strong> herhangi bir genişlik ve yükseklik.
          </li>
        </ul>
        <p className={p}>
          Daha fazla beyaz duvar kâğıdı ve ton mu arıyorsunuz? <Link href="/backgrounds/white-background" className={link}>Beyaz arka plan</Link>{' '}
          koleksiyonuna göz atın.
        </p>
      </Section>

      <Section id="test-heading" title="Beyaz Ekran Testi: Nelere Bakmalı?">
        <p className={p}>
          Tam beyaz ekran en hızlı ekran kontrolüdür. Tam parlaklıkta tam ekrana geçin ve tüm panele göz gezdirin.
        </p>
        <Table
          caption="Beyaz ekran testinin ortaya çıkarabilecekleri"
          head={['Ne görüyorsunuz', 'Ne anlama gelebilir', 'Sonraki adım']}
          rows={[
            ['Siyah veya koyu noktalar', 'Ölü pikseller', <Link key="d" href="/dead-pixel-test" className={link}>Ölü piksel testi</Link>],
            ['Lekeler, koyu köşeler veya bulutlanma', 'Eşit olmayan arka ışık', <Link key="u" href="/gray-screen" className={link}>Ekran homojenlik testi</Link>],
            ['Beyaz sarı, mavi veya pembe görünüyor', 'Renk ayarları veya panel tonu', <Link key="c" href="/screen-color-test" className={link}>Ekran renk testi</Link>],
            ['Eski görüntülerin soluk şekilleri', 'Yanma veya görüntü tutulması', <Link key="b" href="/screen-burn-in-test" className={link}>Ekran yanma testi</Link>],
            ['Silince yer değiştiren lekeler', 'Toz veya leke, piksel değil', 'Ekranı temizleyin ve yeniden kontrol edin'],
          ]}
        />
        <p className={p}>
          Ardından <Link href="/black-screen" className={link}>siyah ekrana</Link> geçin: sıkışmış pikseller ve arka ışık sızması en iyi siyahta görünür.
        </p>
      </Section>
    </>
  )
}
