import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tam Ekran Kronometre (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle:
 * online kronometre (başlat, tur, sıfırla) → ileri sayan sayaç → tam ekran dijital kronometre → Google kronometresi.
 * Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function StopwatchGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Online Tam Ekran Kronometre: Başlat, Tur ve Sıfırla">
        <p className={p}>Bu online kronometre saniyenin yüzde birine kadar ölçer ve turların listesini tutar.</p>
        <Table
          caption="Kronometre kontrolleri"
          head={['İşlem', 'Düğme', 'Tuş']}
          rows={[
            ['Başlat veya duraklat', 'Başlat / Duraklat', 'Boşluk'],
            ['Tur kaydet', 'Tur', 'L'],
            ['Sıfıra döndür', 'Sıfırla', 'R'],
            ['Tüm turları kopyala', 'Turları kopyala', '—'],
          ]}
        />
        <p className={p}>
          Her tur kendi ara süresini ve toplam süreyi gösterir, böylece turları bir bakışta karşılaştırabilirsiniz. Turları kopyala, onları bir
          tablo veya mesaj için panonuza kopyalar.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Tam Ekran Kronometre: Sıfırdan İleri Sayın">
        <p className={p}>
          Siz durdurana kadar sıfırdan ileri sayar; bu yüzden bir işin ne kadar süreceğini bilmediğinizde kullanılacak online sayaçtır. Antrenmanlar,
          konuşmalar, deneyler ve görevler için ileri sayan bir sayaç olarak çalışır.
        </p>
        <p className={p}>
          Bunun yerine 10 veya 30 dakika gibi belirli bir süreden geri mi saymanız gerekiyor?{' '}
          <Link href="/countdown-timer" className={link}>Geri sayım sayacını</Link> ya da molalı odak oturumları için{' '}
          <Link href="/pomodoro-timer" className={link}>Pomodoro zamanlayıcıyı</Link> kullanın.
        </p>
      </Section>

      <Section wide id="fullscreen-heading" title="Dijital Tam Ekran Kronometre">
        <p className={p}>
          Bütün odanın okuyabileceği dev bir dijital kronometre için F tuşuna basın veya Tam Ekran’a dokunun. Projeksiyonda veya akıllı tahtada
          sınıf sayacı olarak iyi çalışır.
        </p>
        <ul className={ul}>
          <li>Sınıf: kısa sınavları, grup çalışmalarını ve okuma yarışlarını zamanlayın.</li>
          <li>Ders çalışma: her konunun gerçekte ne kadar sürdüğünü takip edin.</li>
          <li>Spor ve oyunlar: sprintleri, plank’leri, raundları ve bulmacaları zamanlayın.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="Tam Ekran Kronometre mi, Google Kronometresi mi?">
        <p className={p}>
          Google’ın arama sonuçlarında küçük, yerleşik bir sayaç bulunur. Bu araç buna ara süreli tam bir tur listesi, tek tıkla Turları kopyala,
          klavye kısayolları ve tam ekran görünüm ekler; ayrıca hemen açmak için yer imlerinize ekleyebilirsiniz.
        </p>
      </Section>
    </div>
  )
}
