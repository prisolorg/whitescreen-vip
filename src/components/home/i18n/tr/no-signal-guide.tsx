import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Sinyal Yok Ekranı (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle (TV renk çubukları, sinyal yok):
 * üç stil → renk çubuklarının anlamı → kullanım fikirleri → gerçek TV’de sinyal yok. Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function NoSignalGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="TV Renk Çubukları ve Sinyal Yok Ekranı: Üç Stil">
        <Table
          caption="Sinyal yok ekranı stilleri"
          head={['Stil', 'Ne gösterir']}
          rows={[
            ['Renk çubukları', 'Ortasında SİNYAL YOK kutusu bulunan TV renk çubukları'],
            ['Seken', 'Boştaki bir televizyon gibi kayan ve kenarlardan seken bir SİNYAL YOK kutusu'],
            ['Mavi giriş', 'Birçok televizyonun giriş olmadığında gösterdiği gibi mesajlı düz mavi ekran'],
          ]}
        />
        <ul className={ul}>
          <li>Mesajı ve giriş adını (varsayılan: HDMI 1) değiştirmek için Daha fazla menüsünü açın.</li>
          <li>Klasik test sinyali bip sesi için 1 kHz tonu açın.</li>
          <li>Sinyal yok ekranının bir televizyonu, monitörü veya laptopu doldurması için F tuşuna basın veya Tam Ekran’a dokunun.</li>
        </ul>
      </Section>

      <Section wide id="bars-heading" title="Sinyal Yok Ekranındaki TV Renk Çubukları: Şeritler Ne Anlama Gelir?">
        <p className={p}>
          TV renk çubukları, yayıncıların görüntüyü ayarlamak için kullandığı şeritli test desenidir. Bu sinyal yok ekranı üç sıralı, SMPTE tarzı bir
          sürüm çizer:
        </p>
        <ul className={ul}>
          <li>Üst: gri, sarı, camgöbeği, yeşil, macenta, kırmızı ve mavi yedi çubuk.</li>
          <li>Orta: siyahla dönüşümlü ince bir mavi, macenta, camgöbeği ve gri şerit.</li>
          <li>Alt: koyu mavi, beyaz, mor ve siyah bloklar.</li>
        </ul>
        <p className={p}>
          TV renk çubukları 1080p ve 4K televizyonlar dahil her ekrana ölçeklenir. Görünüm içindir, kalibrasyon için değil; renkleri kontrol etmek için{' '}
          <Link href="/screen-color-test" className={link}>ekran renk testini</Link> kullanın.
        </p>
      </Section>

      <Section wide id="uses-heading" title="TV Renk Çubukları ve Sinyal Yok Ekranı Fikirleri">
        <ul className={ul}>
          <li>Şaka: TV renk çubuklarını veya sinyal yok TV ekranını tam ekrana alın ve birinin tüm kabloları kontrol edişini izleyin.</li>
          <li>Film ve fotoğraf dekoru: TV renk çubukları, gerçek bir yayın olmadan arka planda inandırıcı bir televizyon oluşturur.</li>
          <li>Yayınlar ve etkinlikler: kendi mesajınızla bir &ldquo;hemen dönüyorum&rdquo; ekranı.</li>
        </ul>
        <p className={p}>
          Daha fazla ekran şakası: <Link href="/hacked-screen" className={link}>hacklenmiş ekran şakası</Link> ve{' '}
          <Link href="/fake-windows-10-update" className={link}>sahte Windows güncelleme ekranı</Link>.
        </p>
      </Section>

      <Section wide id="fix-heading" title="Gerçek Televizyonunuzda Sinyal Yok Ekranı mı? Hızlı Çözümler">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Kumandada Input veya Source (Kaynak) düğmesine basın ve cihazınızın takılı olduğu bağlantı noktasını seçin.</li>
          <li>Cihazın (konsol, laptop, uydu alıcısı) açık olduğunu ve uyku modunda olmadığını kontrol edin.</li>
          <li>HDMI kablosunu iki ucundan çıkarıp yeniden takın veya başka bir bağlantı noktası ya da kablo deneyin.</li>
          <li>Televizyonu ve cihazı yeniden başlatın.</li>
        </ol>
      </Section>
    </div>
  )
}
