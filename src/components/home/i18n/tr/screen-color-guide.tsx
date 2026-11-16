import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Ekran Renk Testi (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle (renk testi, monitör renk testi):
 * desenler → nasıl yapılır → monitör, TV, telefon → sınırlar ve renk bozulması. Desen adları aracın Türkçe arayüzüyle aynıdır.
 */
export function ScreenColorGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Ekran Renk Testi Desenleri ve Nelere Bakmalı">
        <p className={p}>Bu renk testi yedi tam ekran desen içerir ve her renk testi görüntüsü farklı bir şeyi kontrol eder:</p>
        <Table
          caption="Ekran renk testi desenleri"
          head={['Desen', 'Neyi kontrol eder', 'İyi bir ekranda görülen']}
          rows={[
            ['Renk çubukları', 'Temel renk üretimi', 'Renk tonu sapması olmadan net, ayrı sekiz renk'],
            ['RGB geçişleri', 'Geçişler ve kırpılma', 'Siyahtan başlayan basamaksız yumuşak geçişler; parlak uç erkenden düzleşmez'],
            ['Ton yelpazesi', 'Aradaki her ton', 'Şerit veya sıçrama olmayan yumuşak bir gökkuşağı'],
            ['Doygunluk basamakları', 'Renk yoğunluğu', 'Griden tam kırmızıya, her biri farklı on basamak'],
            ['Kırmızı, Yeşil, Mavi', 'Her alt piksel rengi tek başına', 'Kenardan kenara koyu nokta olmadan tek, eşit bir renk'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="Ekran Renk Testi Nasıl Yapılır?">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Ekran rengi kaymasın diye gece modunu, mavi ışık filtrelerini ve otomatik parlaklığı kapatın.</li>
          <li>Yalnızca renkli ekran görünsün diye tam ekran için ekran renk testine iki kez dokunun.</li>
          <li>Ekrana dokunun, ok tuşlarını kullanın veya adıyla bir desen seçin. Otomatik döngü desenler arasında sizin için geçiş yapar.</li>
          <li>Önce tam karşıdan, sonra yandan bakın: bazı panellerde ekran rengi açıyla kayar.</li>
        </ol>
        <p className={p}>
          Bunun yerine tek bir düz renkli ekran mı lazım? <Link href="/" className={link}>Beyaz ekranı</Link>,{' '}
          <Link href="/red-screen" className={link}>kırmızı ekranı</Link> veya <Link href="/color-screens" className={link}>renk ekranları</Link> arasından
          herhangi bir sayfayı açın.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Monitörde, Televizyonda veya Telefonda Ekran Renk Testi">
        <ul className={ul}>
          <li>Monitör: RGB geçişlerini monitör renk testi olarak kullanın, ardından menüsünden renk sıcaklığını veya görüntü modunu ayarlayın.</li>
          <li>Televizyon: ekran renk testini televizyonun tarayıcısında açın veya bir laptop sekmesini yansıtın. Sinema veya Filmmaker modları genellikle en doğru rengi gösterir.</li>
          <li>Telefon: parlaklığı artırın ve telefonunuzda varsa Doğal ve Canlı renk modlarını karşılaştırın.</li>
          <li>Kırmızı, Yeşil ve Mavi alanlar, sıkışmış alt pikseller için RGB testi olarak da işe yarar.</li>
        </ul>
      </Section>

      <Section wide id="accuracy-heading" title="Ekran Renk Testinin Sınırları: Doğruluk ve Renk Bozulması">
        <p className={p}>
          Ekran renk testi gözle yapılan bir renk kontrolüdür: renk tonu sapmalarını, şeritlenmeyi ve ölü renkleri bulur, ancak gerçek renk doğruluğu
          donanımsal bir kolorimetre gerektirir; hiçbir web sitesi bunu ölçemez. Bir web sitesi için yazı renkleri mi seçiyorsunuz?{' '}
          <Link href="/contrast-checker" className={link}>Renk kontrastı denetleyicisini</Link> kullanın.
        </p>
        <Table
          caption="Bir renk sorunu ne anlama gelebilir"
          head={['Ne görüyorsunuz', 'Şunu deneyin']}
          rows={[
            ['Her yerde sarı veya mavi ton', <Link key="y" href="/screen-problems/yellow-tint-on-screen" className={link}>Sarı ton rehberi</Link>],
            ['Geçişlerde basamaklar veya şeritler', <Link key="b" href="/screen-problems/color-banding" className={link}>Renk şeritlenmesi rehberi</Link>],
            ['Lekeler veya eşit olmayan alanlar (ekran renk bozulması)', <Link key="u" href="/screen-uniformity-test" className={link}>Ekran homojenlik testi</Link>],
            ['Soluk logolar veya hayalet görüntüler', <Link key="bi" href="/screen-burn-in-test" className={link}>Ekran yanma testi</Link>],
            ['Keskinlik, gama ve daha fazlası (tam ekran kontrolü)', <Link key="m" href="/monitor-test" className={link}>Monitör testi</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
