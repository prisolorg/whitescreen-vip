import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Sahte Zoom Toplantı Ekranı (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle:
 * sahte Zoom toplantısı kurulumu → video, ders ve şaka için sahte Zoom görüşmesi → Teams ve Google Meet sürümleri.
 * Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function FakeZoomMeetingGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="setup-heading" title="Sahte Zoom Toplantı Ekranı: Nasıl Kurulur?">
        <p className={p}>
          Sahte Zoom toplantı ekranı; adı yazılı beş katılımcının bulunduğu Zoom tarzı bir galeri, &quot;konuşan&quot; kişiye geçen yeşil
          bir çerçeve, Kaydediliyor rozeti ve kırmızı Bitir düğmeli tanıdık araç çubuğunu gösterir.
        </p>
        <ul className={ul}>
          <li>Kendi toplantı başlığınızı yazmak için Daha fazla menüsünü açın.</li>
          <li>Kendi kameranızı &quot;Siz&quot; kutucuğuna koymak için Kamera önizlemesini aç’ı etkinleştirin. Görüntü cihazınızda kalır.</li>
          <li>Sahte toplantının tüm ekranı kaplaması için F tuşuna basın veya Tam Ekran’a dokunun.</li>
        </ul>
      </Section>

      <Section wide id="uses-heading" title="Video, Ders ve Şaka için Sahte Zoom Toplantı Ekranı">
        <p className={p}>Sahte Zoom görüşmesi, gerçek bir toplantı olmadan ekranda inandırıcı bir toplantıya ihtiyaç duyduğunuz her an işe yarar:</p>
        <Table
          caption="Sahte Zoom toplantı ekranını kullanma yolları"
          head={['Kullanım', 'İpucu']}
          rows={[
            ['Film, TikTok ve YouTube dekoru', 'Sahte toplantı videosu için ekranınızı tam ekranda kaydedin'],
            ['Görüşmede meşgul görünmek', 'Kameranız kapalıyken sahte toplantı ekranını açık bırakın'],
            ['Sahte Zoom dersi veya prova', 'Kameranız açıkken bir dersi veya sunumu prova edin'],
            ['Ekran görüntüleri ve maketler', 'Bir toplantı başlığı belirleyin, ardından ekran görüntüsü alın'],
            ['Zararsız şaka', 'Bir arkadaşınıza katılmayı unuttuğu bir “toplantı” gösterin, sonra gerçeği açıklayın'],
          ]}
        />
        <p className={p}>Bu bir görüşme değil, bir ekrandır: ses yoktur, kimse katılamaz ve hiçbir şey Zoom’a bağlanmaz.</p>
      </Section>

      <Section wide id="other-heading" title="Sahte Zoom Toplantı Ekranı mı, Teams mi, Google Meet mi?">
        <p className={p}>Farklı bir uygulama mı lazım? Her birinin kendi ekranı var:</p>
        <ul className={ul}>
          <li>
            <Link href="/fake-teams-meeting" className={link}>Sahte Teams toplantı ekranı</Link>: üst çubukta kontroller ve kırmızı Ayrıl
            düğmesi, çalışan bir zamanlayıcıyla.
          </li>
          <li>
            <Link href="/fake-google-meet" className={link}>Sahte Google Meet ekranı</Link>: yuvarlak kutucuklar, kamerası kapalı olanlar için
            baş harfler ve bir toplantı kodu.
          </li>
          <li>
            <Link href="/fake-slack-huddle" className={link}>Sahte Slack Huddle</Link>: avatarlı küçük bir huddle penceresi.
          </li>
        </ul>
      </Section>
    </div>
  )
}
