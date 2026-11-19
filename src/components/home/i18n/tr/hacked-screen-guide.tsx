import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Hacklenmiş Ekran Simülatörü (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle (hacklenmiş ekran şakası):
 * kurulum → ne gösterir → eğlenceli tutun → gerçek uyarı pencereleri. Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function HackedScreenGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Hacklenmiş Ekran Simülatörü Şakası: Nasıl Kurulur?">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Bir stil seçin: Kırmızı alarm veya Yeşil terminal.</li>
          <li>Kendi başlığınızı yazmak (varsayılan: SİSTEM HACKLENDİ) veya &ldquo;Şakaydı&rdquo; notunu gizlemek için Daha fazla menüsünü açın.</li>
          <li>Alarm istiyorsanız Siren sesi’ni açın.</li>
          <li>Tam ekran için iki kez dokunun veya F tuşuna basın, ardından bilgisayarı arkadaşınızın bulması için bırakın.</li>
        </ol>
        <p className={p}>Tam ekrandan çıkmak ve hacklenmiş ekran şakasını bitirmek için Esc tuşuna basın.</p>
      </Section>

      <Section wide id="shows-heading" title="Hacklenmiş Ekran Simülatörü Neler Gösterir?">
        <ul className={ul}>
          <li>Yanıp sönen bir &ldquo;güvenlik ihlali tespit edildi&rdquo; uyarısı ve bozulan (glitch) bir başlık.</li>
          <li>&ldquo;Güvenlik duvarı aşılıyor&rdquo; ve &ldquo;Parola kasasının şifresi çözülüyor&rdquo; gibi sahte hackleme adımları.</li>
          <li>İkisi de döngüye giren bir ilerleme çubuğu ve 59 saniyelik geri sayım; böylece sahte hacklenmiş ekran hiçbir zaman gerçekten bitmez.</li>
          <li>Kayan sahte kayıtlar, tarama çizgileri ve atan kırmızı veya yeşil bir parıltı.</li>
        </ul>
        <p className={p}>Hiçbir şey yüklenmez ve bilgisayardaki hiçbir şeye dokunulmaz. Hacklenmiş ekran şakası yalnızca bir web sayfasıdır.</p>
      </Section>

      <Section wide id="rules-heading" title="Hacklenmiş Ekran Simülatörü: Eğlenceli Tutun">
        <ul className={ul}>
          <li>Gülecek insanlara şaka yapın ve şakayı bir dakika içinde açıklayın.</li>
          <li>BT ekibini alarma geçirebileceği iş bilgisayarlarında ve kolay korkan kişilerde kullanmayın.</li>
          <li>Nasıl tepki vereceklerinden emin değilseniz &ldquo;Şakaydı&rdquo; notunu açık tutun.</li>
        </ul>
        <p className={p}>
          Daha fazla ekran şakası: <Link href="/hacker-typer" className={link}>hacker yazı simülasyonu</Link>,{' '}
          <Link href="/broken-screen" className={link}>kırık ekran efekti</Link> ve{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>sahte mavi ölüm ekranı</Link>.
        </p>
      </Section>

      <Section wide id="real-heading" title="Hacklenmiş Ekran Simülatörü Değil mi? Gerçek Uyarı Pencereleri">
        <p className={p}>
          Kendiniz açmadığınız, bir numarayı aramanızı veya ödeme yapmanızı isteyen bir &ldquo;hacklendiniz&rdquo; ekranı neredeyse her zaman
          dolandırıcılıktır:
        </p>
        <ul className={ul}>
          <li>Numarayı aramayın, ödeme yapmayın ve kimsenin bilgisayarınıza bağlanmasına izin vermeyin.</li>
          <li>Tarayıcıyı kapatın; kapanmıyorsa Görev Yöneticisi’ni (Ctrl + Shift + Esc) veya Mac’te Çıkmaya Zorla’yı kullanın.</li>
          <li>Antivirüs programınızı çalıştırın ve herhangi bir parola girdiyseniz parolalarınızı başka bir cihazdan değiştirin.</li>
        </ul>
      </Section>
    </div>
  )
}
