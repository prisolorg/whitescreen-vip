import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Ekran Çözünürlük Testi (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle (ekran çözünürlüğüm nedir):
 * değerlerin anlamı → ekran ayarları → telefonda çözünürlük → yaygın çözünürlükler. Okuma adları aracın Türkçe arayüzüyle aynıdır.
 */
export function ScreenResolutionGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="read-heading" title="Ekran Çözünürlük Testi: Her Değer Ne Anlama Gelir?">
        <p className={p}>
          Ekran çözünürlüğüm nedir? Bu sayfa hiçbir düğmeye basmanıza gerek kalmadan kendiliğinden yanıt verir. Her değerin gösterdiği:
        </p>
        <Table
          caption="Ekran çözünürlük testi değerleri"
          head={['Değer', 'Anlamı']}
          rows={[
            ['Ekran çözünürlüğü', 'Ekran ölçeklendirmesinden sonra CSS pikseli cinsinden ekran boyutunuz'],
            ['Fiziksel pikseller', 'Gerçek piksel sayısı: ekran çözünürlüğü × piksel oranı. Bu genellikle monitörünüzün yerel çözünürlüğüdür'],
            ['Tarayıcı görüntü alanı', 'Tarayıcı penceresinin içindeki alan'],
            ['Kullanılabilir alan', 'Görev çubuğu veya Dock çıkarıldıktan sonraki ekran'],
            ['Piksel oranı', 'Bir CSS pikselini kaç fiziksel pikselin oluşturduğu (1 = ölçeklendirme yok)'],
            ['Renk derinliği', 'Tarayıcının bildirdiği piksel başına bit, genellikle 24 bit'],
          ]}
        />
        <p className={p}>
          Pencereyi yeniden boyutlandırdığınızda veya telefonu döndürdüğünüzde değerler canlı güncellenir. Tarayıcı yakınlaştırmasını %100’de
          tutun, çünkü yakınlaştırma piksel oranını ve fiziksel piksel sayısını değiştirir.
        </p>
      </Section>

      <Section wide id="check-heading" title="Ekran Çözünürlük Testi ve Ekran Ayarlarınız">
        <p className={p}>
          Ekran çözünürlük testi tarayıcınızın gördüğünü okur. Monitör çözünürlüğünü sistem ayarlarınızda kontrol etmek veya değiştirmek için:
        </p>
        <Table
          caption="Ekran çözünürlüğü ayarı nerede bulunur"
          head={['Cihaz', 'Nereye bakılır']}
          rows={[
            ['Windows 11 / 10', 'Ayarlar → Sistem → Ekran → Ekran çözünürlüğü (Önerilen olarak işaretli olan yerel çözünürlüktür)'],
            ['Mac', 'Sistem Ayarları → Ekranlar (ölçeklenmiş bir ayar, Fiziksel pikseller değerinin panelin yerel boyutundan farklı olmasına yol açabilir)'],
            ['iPhone / iPad', 'Modele göre sabittir; yukarıdaki fiziksel pikseller değerini kullanın'],
            ['Android', 'Ayarlar → Ekran → Ekran çözünürlüğü (yalnızca bazı telefonlarda)'],
          ]}
        />
        <p className={p}>
          Ekran çözünürlüğü kontrolü monitörünüzün teknik özelliğinden daha az fiziksel piksel gösteriyorsa ekran yerel çözünürlüğüne ayarlı
          değildir ve yazılar bulanık görünebilir.
        </p>
      </Section>

      <Section wide id="phone-heading" title="Telefonda Ekran Çözünürlük Testi: Çözünürlüğüm Ne?">
        <p className={p}>
          Telefonlar net yazı için her şeyi büyüttüklerinden 390 × 844 gibi küçük bir çözünürlük bildirir. Telefonunuzun gerçek çözünürlüğü
          Fiziksel pikseller değeridir: örneğin, piksel oranı 3 olan 390 × 844, 1170 × 2532 eder.
        </p>
      </Section>

      <Section wide id="common-heading" title="Ekran Çözünürlük Testi için Yaygın Çözünürlükler: HD’den 4K’ya">
        <Table
          caption="Yaygın ekran çözünürlükleri"
          head={['Ad', 'Çözünürlük', 'Tipik ekranlar']}
          rows={[
            ['HD', '1280 × 720', 'Eski laptoplar ve televizyonlar'],
            ['Full HD (1080p)', '1920 × 1080', 'Çoğu monitör ve laptop'],
            ['QHD (1440p)', '2560 × 1440', 'Oyun ve ofis monitörleri'],
            ['4K UHD', '3840 × 2160', '4K monitörler ve televizyonlar'],
          ]}
        />
        <ul className={ul}>
          <li>Monitörüm 4K mı? %100 tarayıcı yakınlaştırmasında Fiziksel pikseller 3840 × 2160 gösteriyorsa evet.</li>
          <li>Tarayıcı ekran boyutunu inç olarak okuyamaz; bu sayfa ekran boyutunu yalnızca piksel olarak gösterir.</li>
          <li>
            Çözünürlüğünüzdeki keskinliği <Link href="/monitor-test" className={link}>monitör testindeki</Link> ince çizgilerle kontrol edin.
          </li>
        </ul>
      </Section>
    </div>
  )
}
