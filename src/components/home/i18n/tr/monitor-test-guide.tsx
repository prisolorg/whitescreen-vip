import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Monitör Testi (Türkçe). Bu sayfa genel "ekran testi" aramalarını da karşılar. İngilizce rehberden çevrildi:
 * test desenleri → online nasıl yapılır → renk ve kalibrasyon → ölü piksel, Hz ve diğer hatalar.
 * Desen ve düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function MonitorTestGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Monitör Testi Desenleri ve Her Birinin Kontrol Ettiği">
        <p className={p}>
          Bu ekran testi yedi tam ekran desen içerir ve her test görüntüsü farklı bir şeyi kontrol eder. Toz ve ölü pikselleri görmek için tek
          bir düz alan isterseniz <Link href="/" className={link}>beyaz ekranı</Link> açın:
        </p>
        <Table
          caption="Monitör testi desenleri"
          head={['Desen', 'Neyi kontrol eder', 'İyi bir ekranda görülen']}
          rows={[
            ['Gri geçişi', 'Yumuşak tonlar, renk şeritlenmesi', 'Basamaksız ve renk tonu olmayan tek bir yumuşak geçiş'],
            ['Gri basamakları', 'Siyah ve beyaz seviyeleri', 'En koyu ve en açık dahil her basamak gözle görülür şekilde farklı'],
            ['Izgara', 'Geometri ve ölçekleme', 'Kenardan kenara düz, eşit aralıklı çizgiler'],
            ['Gama 2,2', 'Gama ayarı', 'Ortadaki blok uzaktan bakınca çizgilerle karışır'],
            ['İnce çizgiler', 'Keskinlik, yerel çözünürlük', 'Titreşim veya moiré olmadan net 1 piksellik çizgiler'],
            ['Dama tahtası', 'Kontrast ve temiz kenarlar', 'Parlama veya bulaşma olmadan keskin kareler'],
            ['Renk çubukları', 'Renk üretimi', 'Birbirinden net ayrılan sekiz doygun renk'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="Online Monitör Testi Nasıl Yapılır?">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Ekranı yerel çözünürlüğüne, tarayıcı yakınlaştırmasını %100’e ayarlayın.</li>
          <li>Ekranda başka bir şey kalmaması için tam ekran amacıyla teste iki kez dokunun.</li>
          <li>Ekrana dokunun, ok tuşlarını kullanın veya adıyla bir desen seçin. Otomatik döngü desenler arasında sizin için geçiş yapar.</li>
          <li>Görüş açısı kaymalarını fark etmek için her desene önce tam karşıdan, sonra yandan bakın.</li>
        </ol>
        <p className={p}>
          Bu ekran testi her tarayıcıda çalışır; bu yüzden online ekran kontrolü, laptop ekran testi, yeni veya ikinci el bir PC ekranı için monitör
          testi ya da televizyonda hızlı bir &ldquo;ekranımı test et&rdquo; kontrolü olarak kullanılabilir.
        </p>
      </Section>

      <Section wide id="color-heading" title="Renk ve Kalibrasyon için Monitör Testi">
        <p className={p}>
          Monitör testinde renk çubukları ve gama deseni bariz renk ve gama sorunlarını gözle gösterir. Düz renkler ve RGB geçişleriyle tam bir renk
          testi için <Link href="/screen-color-test" className={link}>ekran renk testini</Link> kullanın.
        </p>
        <p className={p}>
          Gerçek renk doğruluğu donanımsal bir kolorimetre gerektirir; hiçbir web sitesi bunu ölçemez. Temel monitör renk kalibrasyonu için
          sisteminizdeki yerleşik aracı kullanın:
        </p>
        <ul className={ul}>
          <li>Windows: Başlat’ta &ldquo;Ekran rengini ayarla&rdquo; araması yapın.</li>
          <li>Mac: Sistem Ayarları → Ekranlar → Renk Profili → Özelleştir → Kalibre Et.</li>
        </ul>
      </Section>

      <Section wide id="more-heading" title="Monitör Testi Sonrası: Ölü Piksel, Hz ve Diğer Hatalar">
        <Table
          caption="Sırada hangi test yapılmalı"
          head={['Kontrol etmek istediğiniz', 'Yapılacak test']}
          rows={[
            ['Ölü veya sıkışmış pikseller (LCD testi)', <Link key="dp" href="/dead-pixel-test" className={link}>Ölü piksel testi</Link>],
            ['Yenileme hızı (Hz)', <Link key="hz" href="/screen-refresh-rate-test" className={link}>Ekran yenileme hızı testi</Link>],
            ['Tepki süresi ve izler', <Link key="gh" href="/monitor-ghosting-test" className={link}>Monitör gölgelenme testi</Link>],
            ['Işık sızması ve siyah homojenliği', <Link key="un" href="/gray-screen" className={link}>Ekran homojenlik testi</Link>],
            ['Ekranda kalan hayalet görüntüler', <Link key="bi" href="/screen-burn-in-test" className={link}>Ekran yanma testi</Link>],
            ['Ekran çözünürlüğünüz', <Link key="rs" href="/screen-resolution-test" className={link}>Ekran çözünürlüğüm nedir?</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
