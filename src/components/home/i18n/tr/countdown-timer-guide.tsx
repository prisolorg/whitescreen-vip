import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Geri Sayım Sayacı (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle:
 * nasıl kullanılır → tarihe geri sayım (gün, saat, dakika) → online, ücretsiz → kullanım fikirleri → kronometre ve Pomodoro.
 * Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function CountdownTimerGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Geri Sayım Sayacı Nasıl Kullanılır?">
        <ul className={ul}>
          <li>Zamanlayıcı menüsünden bir süre seçin: 1, 5, 10, 15, 25, 45 veya 60 dakika.</li>
          <li>Başka bir süre mi lazım? Ekrandaki saate, dakikaya veya saniyeye tıklayın ya da dokunun ve 99 saate kadar istediğiniz süreyi yazın.</li>
          <li>Başlat’a veya klavyede boşluk tuşuna basın, geri sayım başlar.</li>
          <li>Duraklatıp kaldığınız yerden devam edin veya sıfırlamak için R tuşuna basın.</li>
          <li>Süre dolduğunda ekran kırmızı yanıp söner ve bir uyarı sesi çalar. Sesi Daha fazla altından kapatabilirsiniz.</li>
        </ul>
        <p className={p}>Odanın öbür ucundan okunabilen dev bir geri sayım sayacı için F tuşuna basın veya Tam Ekran’a dokunun.</p>
      </Section>

      <Section wide id="date-heading" title="Tarihe Geri Sayım Sayacı: Gün, Saat, Dakika">
        <p className={p}>
          Bir doğum gününe, düğüne, tatile, sınava veya lansmana kalan günleri mi sayıyorsunuz? Zamanlayıcı menüsünden{' '}
          <strong className="text-foreground">Bir tarihe geri sayım</strong>’ı seçin, takvimden tarih ve saati belirleyin, isterseniz etkinliğe
          bir ad verin ve Başlat’a basın. Gün sayacı kalan günleri, saatleri, dakikaları ve saniyeleri gösterir; o an geldiğinde uyarı sesi çalar.
        </p>
        <ul className={ul}>
          <li>Cihazınızın saatini ve saat dilimini kullanır; yani gece yarısı, bulunduğunuz yerdeki gece yarısıdır.</li>
          <li>Geri sayımınız bu tarayıcıda kaydedilir: sekmeyi kapatsanız da geri döndüğünüzde saymaya devam ediyor olur.</li>
          <li>Kalan günleri TV’de, projeksiyonda veya boştaki bir monitörde göstermek için tam ekrana geçin.</li>
          <li>İstediğiniz zaman yeni bir etkinlik seçmek için Tarihi değiştir’e dokunun.</li>
        </ul>
      </Section>

      <Section wide id="online-heading" title="Online Geri Sayım Sayacı: Ücretsiz, Uygulamasız">
        <p className={p}>
          Bu online geri sayım sayacı bilgisayar, tablet, telefon veya akıllı TV’deki her tarayıcıda çalışır. Kayıt gerektirmeyen, hiçbir şey
          yüklenmeyen ücretsiz bir geri sayım sayacıdır. Bilgisayarda sayaç çalışırken başka bir sekmeye geçebilirsiniz: kalan süre sekme
          başlığında görünür ve uyarı sesi sıfırda yine çalar. Sekmeyi açık ve sesinizi açık tutun. Telefonlar arkada bıraktığınız sayfaları
          duraklatır, bu yüzden orada sayacı ekranda tutun; bir cihaz uykuya geçerse geri sayım uyandığında kaldığı yeri yakalar ve uyarı sesi çalar.
        </p>
      </Section>

      <Section wide id="uses-heading" title="Geri Sayım Sayacı Kullanım Fikirleri">
        <Table
          caption="Geri sayım sayacını kullanma yolları"
          head={['Kullanım', 'Süre']}
          rows={[
            ['Sınıf etkinlikleri ve sınavlar', 'Projeksiyonda 10, 15 veya 45 dakika'],
            ['Sunumlar ve konuşmalar', '5 veya 10 dakika, konuşmacının görebileceği yerde tam ekran'],
            ['Yemek ve çay', '1, 5 veya 10 dakika'],
            ['Molalar ve antrenmanlar', '1, 5 veya 15 dakika'],
            ['Odak oturumları', '25 dakika, ardından kısa bir mola'],
            ['Fırın, çamaşır veya uzun bir sınav', '1 saat 30 dakika gibi özel bir süre'],
            ['Doğum günleri, tatiller, yolculuklar ve lansmanlar', 'Tarihe geri sayım'],
          ]}
        />
      </Section>

      <Section wide id="more-heading" title="Geri Sayım Sayacı mı, Kronometre mi, Pomodoro mu?">
        <ul className={ul}>
          <li>
            Geri değil ileri mi sayıyorsunuz? <Link href="/stopwatch" className={link}>Kronometreyi</Link> kullanın.
          </li>
          <li>
            Bloklar halinde mi çalışıyor ya da ders mi çalışıyorsunuz? <Link href="/pomodoro-timer" className={link}>Pomodoro zamanlayıcı</Link>{' '}
            molalı 25 dakikalık odak oturumlarını tekrarlar.
          </li>
          <li>
            Sadece ekranda saati mi görmek istiyorsunuz? <Link href="/flip-clock-screensaver" className={link}>Yaprak saati</Link> deneyin.
          </li>
        </ul>
      </Section>
    </div>
  )
}
