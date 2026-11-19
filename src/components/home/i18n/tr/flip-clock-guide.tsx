import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Yaprak Saat Ekran Koruyucu (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle:
 * online flip clock / tam ekran saat → estetik görünüm → ders çalışma saati → zamanlayıcı ve kronometre.
 * Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function FlipClockGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="online-heading" title="Online Yaprak Saat Ekran Koruyucu: Her Ekranda Tam Ekran">
        <p className={p}>
          Bu online yaprak saat (flip clock), dakikalar değiştikçe dönen büyük kapaklı rakamlarla saati gösterir; tıpkı nostaljik bir komodin
          saati gibi.
        </p>
        <ul className={ul}>
          <li>Tam ekrana geçmek için saate iki kez dokunun veya F tuşuna basın.</li>
          <li>Tam ekranda, desteklenen tarayıcılarda ekran açık kalır; böylece masa saati veya ekran koruyucu olarak çalışır.</li>
          <li>Laptopta, ikinci monitörde, eski bir tablette veya akıllı TV tarayıcısında çalıştırın.</li>
        </ul>
      </Section>

      <Section wide id="style-heading" title="Estetik Yaprak Saat Ekran Koruyucu: Koyu, Açık ve Sade">
        <p className={p}>Saatin altındaki kontrollerle istediğiniz görünümü verin:</p>
        <Table
          caption="Yaprak saat ayarları"
          head={['Ayar', 'Ne yapar']}
          rows={[
            ['Tema', 'Temiz siyah bir saat için Koyu, parlak ve ferah bir görünüm için Açık'],
            ['24 saat biçimi', '24 saatlik gösterim ile ÖÖ/ÖS’li 12 saatlik gösterim arasında geçiş yapar'],
            ['Saniyeyi göster', 'Saniyeli dijital yaprak saat ya da yalnızca saat ve dakika (Daha fazla altında)'],
            ['Tarihi göster', 'Saatin altına haftanın gününü ve tarihi ekler (Daha fazla altında)'],
          ]}
        />
        <p className={p}>En sade, estetik flip clock görünümü için saniyeyi ve tarihi gizleyin.</p>
      </Section>

      <Section wide id="study-heading" title="Ders Çalışırken Yaprak Saat Ekran Koruyucu">
        <p className={p}>
          İkinci bir ekranda büyük gösterildiğinde sakin bir ders çalışma saati olur: telefonunuzu eline almadan saate göz atabilirsiniz.
          Molalı, odaklı bloklarla çalışmak için <Link href="/pomodoro-timer" className={link}>Pomodoro zamanlayıcı</Link> ile birlikte kullanın.
        </p>
        <p className={p}>
          Boştaki ekranda daha eğlenceli bir şey mi istiyorsunuz? <Link href="/dvd-screensaver" className={link}>DVD ekran koruyucuyu</Link> çalıştırın.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Yaprak Saat Ekran Koruyucu, Zamanlayıcı ve Kronometre">
        <p className={p}>Yaprak saatli bir zamanlayıcı mı arıyorsunuz? Bu saat her zaman şu anki saati gösterir; bir şeyin süresini ölçmek için şunlardan birini kullanın:</p>
        <ul className={ul}>
          <li>
            <Link href="/countdown-timer" className={link}>Geri sayım sayacı</Link>: 5, 10 ve 25 dakika gibi hazır ayarlarla her süreden geri sayın.
          </li>
          <li>
            <Link href="/stopwatch" className={link}>Kronometre</Link>: ileri sayın ve turları kaydedin.
          </li>
          <li>
            <Link href="/pomodoro-timer" className={link}>Pomodoro zamanlayıcı</Link>: ders veya iş için odak ve mola oturumları.
          </li>
        </ul>
      </Section>
    </div>
  )
}
