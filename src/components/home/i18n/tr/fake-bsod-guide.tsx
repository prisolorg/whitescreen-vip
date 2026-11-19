import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Sahte Mavi Ölüm Ekranı (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle:
 * Windows mavi ekran stilleri → mavi ekran hatası, durdurma kodları ve mesaj → şaka → gerçek mavi ekran.
 * Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function FakeBsodGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Sahte Mavi Ölüm Ekranı: Windows 10, 11 ve Klasik">
        <p className={p}>Önizlemenin altındaki Stil menüsünden bir sahte BSOD stili seçin. Her biri gerçek bir Windows mavi ekranına karşılık gelir:</p>
        <Table
          caption="Sahte mavi ölüm ekranı stilleri"
          head={['Stil', 'Ne gösterir']}
          rows={[
            ['Windows 10', 'Üzgün yüz :(, yüzde sayacı, QR kodu ve durdurma kodu bulunan parlak mavi hata ekranı'],
            ['Windows 11', 'Aynı düzen, Windows 11’in daha koyu mavisiyle'],
            ['Siyah (yeni)', 'Yeni Windows 11 sürümlerinin mavi yerine kullandığı siyah sürüm'],
            ['Klasik (XP/7)', 'Beyaz teknik yazılı, eski usul koyu mavi ölüm ekranı'],
          ]}
        />
      </Section>

      <Section wide id="error-heading" title="Sahte Mavi Ölüm Ekranı Hata Mesajı ve Durdurma Kodları">
        <p className={p}>
          Modern Windows hata ekranında &quot;Bilgisayarınız bir sorunla karşılaştı ve yeniden başlatılması gerekiyor. Yalnızca bazı hata
          bilgilerini topluyoruz, ardından sizin için yeniden başlatacağız.&quot; yazar. Altında bir sayaç %100’e kadar yükselir ve bir durdurma
          kodu hatanın adını verir.
        </p>
        <p className={p}>Bu gerçek durdurma kodlarından birini seçmek için Daha fazla menüsünü açın:</p>
        <ul className={ul}>
          <li>CRITICAL_PROCESS_DIED ve SYSTEM_SERVICE_EXCEPTION</li>
          <li>IRQL_NOT_LESS_OR_EQUAL ve PAGE_FAULT_IN_NONPAGED_AREA</li>
          <li>KMODE_EXCEPTION_NOT_HANDLED ve MEMORY_MANAGEMENT</li>
          <li>DPC_WATCHDOG_VIOLATION ve VIDEO_TDR_FAILURE</li>
        </ul>
        <p className={p}>&quot;%100’e ulaşma süresi&quot; kaydırıcısı, sayacın ne kadar süreceğini yaklaşık 10 saniyeden 2 dakikaya kadar ayarlar.</p>
      </Section>

      <Section wide id="prank-heading" title="Sahte Mavi Ölüm Ekranı Şakası: Nasıl Kurulur?">
        <ul className={ul}>
          <li>Bu sahte bilgisayar çökme ekranını şaka yapmak istediğiniz bilgisayarda açın ve ona uyan stili seçin.</li>
          <li>Tam ekrana geçmek için ekrana iki kez dokunun veya F tuşuna basın.</li>
          <li>Uzaklaşın. Sayaç yükselir ve fare hareketsiz kalınca imleç gizlenir.</li>
          <li>Yeniden çalıştırmak için Sayacı yeniden başlat’ı kullanın, şakayı bitirmek için Esc tuşuna basın. Bilgisayarda hiçbir şey değişmez.</li>
        </ul>
        <h3 className={h3}>Sahte Bir Güncellemeyle Başlayın</h3>
        <p className={p}>
          Daha büyük bir tepki için önce <Link href="/fake-windows-10-update" className={link}>sahte Windows güncelleme ekranını</Link> açın,
          ardından BSOD şakasını başlat’a dokunun; güncelleme bir Windows çökme ekranına &quot;düşer&quot;. Telefonda veya tablette{' '}
          <Link href="/broken-screen" className={link}>kırık ekran efekti</Link> daha iyi işe yarar.
        </p>
      </Section>

      <Section wide id="real-heading" title="Sahte Mavi Ölüm Ekranı Değil, Gerçek Mavi Ekran Hatası mı Aldınız?">
        <p className={p}>Gerçek bir mavi ekran, Windows’un kendini korumak için durduğu anlamına gelir. Çoğu zaman şu adımlar sorunu çözer:</p>
        <ul className={ul}>
          <li>Ekranın altında gösterilen durdurma kodunu not edin.</li>
          <li>Yeniden başlatın ve en son Windows ve sürücü güncellemelerini yükleyin.</li>
          <li>Yeni olan her şeyi geri alın: yakın zamanda eklenen bir uygulama, sürücü veya donanım parçası.</li>
          <li>Tekrarlamaya devam ederse Microsoft desteğinde o durdurma kodunu arayın.</li>
        </ul>
      </Section>
    </div>
  )
}
