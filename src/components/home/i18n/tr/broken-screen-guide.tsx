import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Kırık Ekran Efekti (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle:
 * çatlak ekran stilleri → bilgisayar, laptop, Chromebook ve telefon → kırık ekran şakası → görsel ve duvar kâğıdı →
 * gerçek hasar kontrolü. Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function BrokenScreenGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Kırık Ekran Efekti Stilleri: Çatlak, Paramparça ve LCD Hasarı">
        <p className={p}>
          Önizlemenin altından bir çatlak türü seçin, ardından camı o noktadan çatlatmak için herhangi bir yere dokunun veya tıklayın. Her
          dokunuş yeni bir ekran çatlağı ekler; böylece çatlak ekran tıpkı gerçek cam gibi yayılır.
        </p>
        <Table
          caption="Kırık ekran efekti stilleri ve görünümleri"
          head={['Stil', 'Görünümü']}
          rows={[
            ['Örümcek ağı', 'Klasik çatlak ekran: tek bir darbe noktasından yayılan uzun çatlaklar'],
            ['Köşe darbesi', 'Köşesinin üzerine düşmüş bir telefon'],
            ['Paramparça', 'Her yeri ezilmiş camla dolu, paramparça olmuş bir ekran'],
            ['İnce çatlak', 'İlk bakışta gözden kaçabilen ince, gerçekçi bir çatlak'],
            ['Akan LCD', 'Hasarlı bir panelden mürekkep gibi yayılan siyah ve renkli lekeler'],
            ['Ölü çizgiler', 'Sütunlarını kaybeden çatlak bir ekran gibi parlak dikey çizgiler'],
          ]}
        />
      </Section>

      <Section wide id="computer-heading" title="Bilgisayarda, Laptopta veya Chromebook’ta Kırık Ekran Efekti Şakası">
        <ul className={ul}>
          <li>Bilgisayar ekranı kırılmış gibi göstermek için bu sayfayı şaka yapmak istediğiniz laptopta, PC’de, Chromebook’ta veya akıllı TV’de açın.</li>
          <li>Çatlak bilgisayar ekranının gerçek masaüstü gibi görünmesi için Daha fazla altından Ekran kapalı veya Duvar kâğıdı seçin.</li>
          <li>F tuşuna basın veya Tam Ekran’a dokunun, ardından ekranın darbe alacağı yerlere birkaç çatlak ekleyin.</li>
          <li>Geri çekilin ve bekleyin. Kimse fareyi oynatmadığında imleç kendiliğinden gizlenir.</li>
        </ul>
        <h3 className={h3}>iPhone, Android veya iPad’de Kırık Telefon Ekranı Şakası</h3>
        <p className={p}>
          Sayfayı telefonun tarayıcısında açın, Kilit ekranı’nı seçin, Tam Ekran’a dokunun ve camı, gerçek düşmelerin çoğunlukla geldiği bir
          köşenin yakınından çatlatın. Tam etki için Çatlama sesi’ni açın.
        </p>
      </Section>

      <Section wide id="prank-heading" title="Kırık Ekran Efekti ve Çatlak Ekran Şakası İpuçları">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Kısa tutun.</strong> En iyi sahte kırık ekran şakaları hızlı bir açıklama ve bir kahkahayla biter.
          </li>
          <li>
            <strong className="text-foreground">Doğru kişiyi seçin.</strong> Cihazının kırılmasına gerçekten üzülecek birini seçmeyin.
          </li>
          <li>
            <strong className="text-foreground">Çabuk açıklayın.</strong> Esc tuşuna basın veya sekmeyi kapatın, ekran normale döner. Cihazda
            hiçbir şey değişmez.
          </li>
        </ul>
        <p className={p}>
          Bir şaka daha mı istiyorsunuz? <Link href="/hacked-screen" className={link}>Hacklenmiş ekran şakasını</Link> veya{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>sahte mavi ölüm ekranını</Link> deneyin.
        </p>
      </Section>

      <Section wide id="image-heading" title="Kırık Ekran Efekti Görseli ve Duvar Kâğıdı">
        <p className={p}>
          Canlı efekt yerine kırık ekran resmi mi istiyorsunuz? Camı istediğiniz gibi çatlatın, ardından Daha fazla menüsünü açıp PNG indir’i
          kullanın. Bütün gün süren bir şaka için görseli telefonunuzun kilit ekranı veya bilgisayarınızın duvar kâğıdı yapın.
        </p>
      </Section>

      <Section wide id="real-heading" title="Efekt Değil, Gerçek Kırık Ekran mı? Hasarı Nasıl Kontrol Edersiniz">
        <p className={p}>Şaka için burada değil misiniz? Bu hızlı kontroller gerçek hasarı bir yazılım sorunundan ayırmanıza yardım eder:</p>
        <Table
          caption="Gerçekten kırık bir ekranın belirtileri"
          head={['Ne görüyorsunuz', 'Şununla kontrol edin']}
          rows={[
            ['Ekran kapalıyken hissedilen veya görülen çatlaklar', <Link key="w" href="/" className={link}>Beyaz ekran</Link>],
            ['Siyah lekeler veya yayılan mürekkep', <Link key="d" href="/dead-pixel-test" className={link}>Ölü piksel testi</Link>],
            ['Ekranın bazı kısımları dokunuşa tepki vermiyor', <Link key="t" href="/touch-screen-test" className={link}>Dokunmatik ekran testi</Link>],
            ['Çizgiler, titreme veya tuhaf renkler', <Link key="s" href="/screen-problems" className={link}>Ekran sorunları rehberi</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
