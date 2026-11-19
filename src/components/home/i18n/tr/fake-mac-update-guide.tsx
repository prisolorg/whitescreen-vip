import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Sahte Mac Güncellemesi (Türkçe). İngilizce rehberden çevrildi: nasıl çalışır → şaka kurulumu → iPad, iPhone ve diğer bilgisayarlar.
 * Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function FakeMacUpdateGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Sahte Mac Güncellemesi Ekranı Nasıl Çalışır?">
        <p className={p}>
          Sahte Mac güncelleme ekranı macOS kurulum ekranını yeniden oluşturur: ince bir ilerleme çubuğunun üzerinde logo ve &quot;Yaklaşık 30
          dakika kaldı&quot; gibi bir satır. Çubuk dolunca ekran kararır, gerçek bir Apple yükleme ekranı gibi logoyu gösterir ve güncelleme
          yeniden başlar.
        </p>
        <ul className={ul}>
          <li>Mac’e uyması için siyah veya beyaz ekran seçin.</li>
          <li>Güncellemenin ne kadar süreceğini (5 ila 120 dakika) ve çubuğun nereden başlayacağını ayarlamak için Daha fazla menüsünü açın.</li>
          <li>Hiçbir ipucu vermeyen bir çubuk için Kalan süre’yi kapatın.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Sahte Mac Güncellemesi Şakası: Nasıl Kurulur?">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Bu sayfayı şaka yapmak istediğiniz MacBook veya iMac’te açın.</li>
          <li>Çubuğun neredeyse hiç ilerlememesi için 120 dakika gibi uzun bir güncelleme süresi ayarlayın.</li>
          <li>Menü çubuğunu ve Dock’u gizlemek için F tuşuna basın veya Tam Ekran’a dokunun.</li>
          <li>Uzaklaşın, ardından şakayı bitirmek için Esc tuşuna basın. Mac’te hiçbir şey değişmez.</li>
        </ol>
      </Section>

      <Section wide id="devices-heading" title="iPad, iPhone veya Başka Bir Bilgisayarda Sahte Mac Güncellemesi">
        <p className={p}>
          Her tarayıcıda çalışır; bu yüzden aynı Apple güncelleme ekranı sahte iPad güncelleme ekranı olarak veya iPhone’da Safari’de de
          çalışır. Tam Ekran’a dokunun, ekranı kaplasın.
        </p>
        <p className={p}>
          Başka bir bilgisayara mı şaka yapıyorsunuz? <Link href="/fake-windows-10-update" className={link}>Sahte Windows güncelleme ekranını</Link>,
          Chromebook’lar için <Link href="/fake-chrome-os-update" className={link}>sahte Chrome OS güncellemesini</Link> veya{' '}
          <Link href="/fake-ubuntu-update" className={link}>sahte Ubuntu güncellemesini</Link> kullanın. Telefonlar için{' '}
          <Link href="/broken-screen" className={link}>kırık ekran efektini</Link> deneyin.
        </p>
      </Section>
    </div>
  )
}
