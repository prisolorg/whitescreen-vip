import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Ekran Yanma Testi (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle (ekran yanması / burn-in):
 * nasıl yapılır → yanma mı görüntü tutulması mı → düzeltici → telefon, LCD ve monitör.
 * Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function ScreenBurnInGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Ekran Yanma Testi: Ekranınızı Nasıl Kontrol Edersiniz?">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Yanık kontrolü’nü seçin ve tam ekran için iki kez dokunun. Parlaklığı artırın.</li>
          <li>Ekran yanmasının en net göründüğü alan olan %50 gri ile başlayın, ardından %20 gri’yi deneyin.</li>
          <li>
            Beyaz, kırmızı, yeşil, mavi ve siyaha geçin (tam bir <Link href="/" className={link}>beyaz ekran</Link> da yardımcı olur). Ya da alanı 4
            saniyede bir değiştirmek için Daha fazla altından Otomatik geçiş’i açın.
          </li>
          <li>Orada olmaması gereken soluk şekillere bakın: görev çubuğu, klavye, uygulama simgeleri, saat veya kanal logosu.</li>
        </ol>
        <p className={p}>
          Ekran yanma testi nereye bakacağınızı bildiğinizde en kolaydır: yanma genellikle ekranda en uzun süre kalan şeyle örtüşür.
        </p>
      </Section>

      <Section wide id="results-heading" title="Ekran Yanma Testi Sonuçları: Yanma mı, Görüntü Tutulması mı?">
        <p className={p}>
          Ekran yanması nedir? Aynı görüntüyü uzun süre gösterdikten sonra ekrana kazınan bir görüntüdür. Ekran yanma testi iki türü de gösterir;
          onları ayırt eden zamandır:
        </p>
        <Table
          caption="Yanma ve görüntü tutulması karşılaştırması"
          head={['', 'Görüntü tutulması', 'Yanma (burn-in)']}
          rows={[
            ['Nedir', 'Bir süre kalan hayalet görüntü', 'Kalıcı olarak eşit olmayan şekilde yıpranmış pikseller'],
            ['Ne kadar sürer', 'Dakikalar ile saatler içinde kaybolur', 'Kaybolmaz'],
            ['Nerede yaygın', 'LCD monitörler, televizyonlar, laptoplar', 'OLED ve AMOLED telefonlar, televizyonlar ve monitörler'],
            ['Düzeltici yardımcı olur mu?', 'Çoğu zaman evet', 'Hayır; yalnızca daha az görünür hale getirebilir'],
          ]}
        />
        <p className={p}>
          Daha fazlası için <Link href="/screen-problems/screen-burn-in" className={link}>ekran yanması</Link> ve{' '}
          <Link href="/screen-problems/image-retention" className={link}>görüntü tutulması</Link> rehberlerine bakın.
        </p>
      </Section>

      <Section wide id="fix-heading" title="Ekran Yanma Testi Düzelticisi: Ekran Yanması Düzelir mi?">
        <p className={p}>
          Yanık düzeltici’yi seçin, Düzelticiyi başlat’a basın ve ekranı çalışır halde bırakın. Daha fazla altından deseni seçebilir ve 1 ila 60
          dakika (varsayılan 10) çalıştırabilirsiniz:
        </p>
        <ul className={ul}>
          <li><strong className="text-foreground">Beyaz tarama:</strong> yanıp sönme olmadan hareket eden beyaz bir çubuk.</li>
          <li><strong className="text-foreground">Renk döngüsü:</strong> hızla değişen tam ekran renkler.</li>
          <li><strong className="text-foreground">Renkli parazit:</strong> rastgele renkli pikseller.</li>
        </ul>
        <p className={p}>
          Renk döngüsü ve renkli parazit yanıp söner; yanıp sönen ışık sizi rahatsız ediyorsa Beyaz tarama’yı kullanın. Sonrasında ekran yanma
          testini yeniden yapın. Görüntü birkaç denemeden sonra hâlâ oradaysa muhtemelen kalıcı yanmadır. Önlemek için parlaklığı düşürün, sabit
          çubukları gizleyin ve ekran zaman aşımı kullanın.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Telefonda, LCD’de veya Monitörde Ekran Yanma Testi">
        <ul className={ul}>
          <li>
            Telefon ve iPhone: telefon ekranı yanması klavye veya durum çubuğu ana hatları olarak görünür. Ekran yanma testini tarayıcınızda açın ve
            gri alanları tam parlaklıkta kontrol edin.
          </li>
          <li>LCD monitörler ve laptoplar: gerçek LCD yanması nadirdir; bir LCD ekran yanma testi genellikle düzelticinin temizleyebileceği görüntü tutulmasını bulur.</li>
          <li>
            OLED ve AMOLED ekranlar en hızlı yıpranır. Bunlar için <Link href="/oled-burn-in-test" className={link}>OLED yanma (burn-in) testini</Link> kullanın.
          </li>
        </ul>
        <p className={p}>
          Şekil yerine nokta mı görüyorsunuz? <Link href="/dead-pixel-test" className={link}>Ölü piksel testini</Link> ya da lekeler ve eşit olmayan
          parlaklık için <Link href="/gray-screen" className={link}>ekran homojenlik testini</Link> deneyin.
        </p>
      </Section>
    </div>
  )
}
