import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Sahte Windows 11 Güncellemesi (Türkçe). Windows 11 aramalarını hedefler; genel "sahte Windows güncelleme ekranı"
 * /fake-windows-10-update sayfasına aittir ve aşağıda bağlantısı verilir. Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function FakeWindows11UpdateGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Sahte Windows 11 Güncellemesi Ekranı Nasıl Çalışır?">
        <p className={p}>
          Sahte Windows 11 güncelleme ekranı modern görünümü taklit eder: siyah bir ekran, dönen bir halka, &quot;Güncellemeler üzerinde
          çalışılıyor&quot;, yükselen bir yüzde ve &quot;Lütfen bilgisayarınızı açık ve prize takılı tutun.&quot; yazısı.
        </p>
        <ul className={ul}>
          <li>Yüzde yükselmeye devam eder ve %100’den sonra yeniden başlar; yani güncelleme hiç bitmez.</li>
          <li>Dondurmak ve güncellemeyi takılmış gibi göstermek için Duraklat’a basın.</li>
          <li>Hızlandırmak veya yavaşlatmak için Daha fazla menüsünü açın.</li>
          <li>Tarayıcıyı ve görev çubuğunu gizlemek için F tuşuna basın veya Tam Ekran’a dokunun.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Sahte Windows 11 Güncellemesi Şakası: Nasıl Kurulur?">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Bu sahte güncelleme ekranını şaka yapmak istediğiniz Windows 11 bilgisayarda açın.</li>
          <li>Ekranı doldurması için F tuşuna basın veya Tam Ekran’a dokunun.</li>
          <li>Çalışır halde bırakın. Halka döner ve yüzde yavaş yavaş artar.</li>
          <li>Sürpriz bir son için BSOD şakasını başlat’a dokunun; güncelleme &quot;çöker&quot;.</li>
          <li>Bitirmek için Esc tuşuna basın. Bilgisayarda hiçbir şey değişmez.</li>
        </ol>
      </Section>

      <Section wide id="compare-heading" title="Sahte Windows 11 Güncellemesi mi, Windows 10 mu, XP mi?">
        <Table
          caption="Hangi sahte Windows güncelleme ekranı kullanılmalı"
          head={['Ekran', 'Görünümü', 'Sayfa']}
          rows={[
            ['Windows 11', 'Siyah ekran, dönen halka, sade yüzde', 'Bu sayfa'],
            ['Windows 10', 'Dönen noktalar ve "Güncellemeler üzerinde çalışılıyor. %14 tamamlandı"', <Link key="w10" href="/fake-windows-10-update" className={link}>Sahte Windows güncelleme ekranı</Link>],
            ['Windows XP', 'İlerleme çubuklu nostaljik kurulum ekranı', <Link key="xp" href="/fake-windows-xp-update" className={link}>Sahte Windows XP kurulumu</Link>],
            ['Çökme ekranı', 'Mavi ölüm ekranı', <Link key="bsod" href="/fake-blue-screen-of-death" className={link}>Sahte mavi ölüm ekranı</Link>],
          ]}
        />
        <p className={p}>
          Gerçek bir Windows 11 yükleme veya yükseltme ekranı uzun süre aynı sayıda kalabilir. Sizinki takılmış gibi görünüyorsa yeniden
          başlatmadan önce zaman tanıyın ve prize takılı tutun.
        </p>
      </Section>
    </div>
  )
}
