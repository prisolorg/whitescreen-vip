import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Sahte Windows 10 Güncellemesi (Türkçe). Bu sayfa genel "sahte Windows güncelleme ekranı" aramalarını da karşılar.
 * Sıra: nasıl çalışır → şaka kurulumu → diğer sistemler → gerçek güncelleme takıldıysa.
 * Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function FakeWindowsUpdateGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Sahte Windows 10 Güncellemesi Ekranı Nasıl Çalışır?">
        <p className={p}>
          Bu sahte Windows güncelleme ekranı, Windows 10’un &quot;Güncellemeler üzerinde çalışılıyor&quot; ekranını yeniden oluşturur: koyu
          bir arka plan, dönen bir yükleme simgesi, yavaşça yükselen bir yüzde ve tanıdık &quot;Bilgisayarınızı kapatmayın. Bu işlem biraz
          zaman alacak.&quot; yazısı.
        </p>
        <ul className={ul}>
          <li>Yüzde kendiliğinden yükselir ve %100’den sonra yeniden başlar; bu yüzden bu sahte yükleme ekranı hiç bitmez.</li>
          <li>Güncellemenin takılmış gibi görünmesi için Duraklat ile dondurun.</li>
          <li>Güncellemeyi hızlandırmak veya yavaşlatmak için Daha fazla menüsünü açın.</li>
          <li>Tarayıcıyı gizlemek için F tuşuna basın veya Tam Ekran’a dokunun. Fare hareketsizken imleç gizlenir.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Sahte Windows 10 Güncellemesi Şakası: Nasıl Kurulur?">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Bu sahte güncellemeyi şaka yapmak istediğiniz bilgisayarda açın.</li>
          <li>Tüm ekranı kaplaması için F tuşuna basın veya Tam Ekran’a dokunun.</li>
          <li>Uzaklaşın. Onlar beklerken yüzde yükselmeye devam eder.</li>
          <li>Sürpriz bir son için BSOD şakasını başlat’a dokunun; güncelleme mavi ekranla &quot;başarısız olur&quot;.</li>
          <li>Bitirmek için Esc tuşuna basın. Bilgisayarda hiçbir şey değişmez.</li>
        </ol>
        <p className={p}>
          Yalnızca çökme ekranı mı istiyorsunuz? <Link href="/fake-blue-screen-of-death" className={link}>Sahte mavi ölüm ekranını</Link>{' '}
          kullanın ya da camı <Link href="/broken-screen" className={link}>kırık ekran efekti</Link> ile çatlatın.
        </p>
      </Section>

      <Section wide id="systems-heading" title="Sahte Windows 10 Güncellemesi Dışında: Windows 11, XP ve Diğer Sistemler">
        <Table
          caption="Her sistem için sahte güncelleme ekranları"
          head={['Sistem', 'Sahte güncelleme ekranı']}
          rows={[
            ['Windows 11', <Link key="w11" href="/fake-windows-11-update" className={link}>Sahte Windows 11 güncellemesi</Link>],
            ['Windows XP', <Link key="xp" href="/fake-windows-xp-update" className={link}>Sahte Windows XP kurulumu</Link>],
            ['Windows XP açılışı', <Link key="xpb" href="/fake-windows-xp-boot" className={link}>Sahte Windows XP başlangıcı</Link>],
            ['Mac', <Link key="mac" href="/fake-mac-update" className={link}>Sahte Mac güncellemesi</Link>],
            ['Chromebook', <Link key="cros" href="/fake-chrome-os-update" className={link}>Sahte Chrome OS güncellemesi</Link>],
            ['Ubuntu / Linux', <Link key="ub" href="/fake-ubuntu-update" className={link}>Sahte Ubuntu terminal güncellemesi</Link>],
            ['Android', <Link key="and" href="/fake-android-update" className={link}>Sahte Android güncellemesi</Link>],
          ]}
        />
      </Section>

      <Section wide id="real-heading" title="Sahte Windows 10 Güncellemesi mi, Takılan Gerçek Bir Güncelleme mi?">
        <p className={p}>
          Gerçek bir Windows güncelleme ekranı veya Windows yükleme ekranı takılmış gibi görünüyorsa bu sayfa onu düzeltemez, ama şu
          adımlar genellikle işe yarar:
        </p>
        <ul className={ul}>
          <li>Zaman tanıyın. Büyük güncellemeler uzun süre aynı yüzdede kalabilir.</li>
          <li>Disk etkinliğini izleyin. Yanıp sönen bir disk ışığı hâlâ çalıştığı anlamına gelir.</li>
          <li>Yalnızca son çare olarak, yeniden başlatmak için güç düğmesini basılı tutun. Windows başarısız bir güncellemeyi genellikle kendiliğinden geri alır.</li>
        </ul>
      </Section>
    </div>
  )
}
