import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Screensaver Jam Flip (Bahasa Indonesia). Urutan: jam flip online layar penuh → jam flip estetik → jam belajar →
 * timer dan stopwatch (jam ini hanya menampilkan waktu). Nama pengaturan mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function FlipClockGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="online-heading" title="Screensaver Jam Flip Online: Layar Penuh di Layar Apa Pun">
        <p className={p}>
          Jam flip online ini menampilkan waktu dengan angka split-flap besar yang membalik saat menit berganti, seperti jam meja retro.
        </p>
        <ul className={ul}>
          <li>Ketuk jam dua kali atau tekan F untuk masuk ke layar penuh.</li>
          <li>Dalam layar penuh, layar tetap menyala di browser yang mendukung, jadi bisa dipakai sebagai jam meja atau screensaver.</li>
          <li>Jalankan di laptop, monitor kedua, tablet lama, atau browser smart TV.</li>
        </ul>
      </Section>

      <Section wide id="style-heading" title="Screensaver Jam Flip Estetik: Gelap, Terang, dan Minimalis">
        <p className={p}>Atur tampilannya sesuai selera dengan kontrol di bawah jam:</p>
        <Table
          caption="Pengaturan jam flip"
          head={['Pengaturan', 'Fungsinya']}
          rows={[
            ['Tema', 'Gelap untuk jam hitam yang bersih, Terang untuk tampilan cerah dan lapang'],
            ['Format 24 jam', 'Beralih antara format 24 jam dan 12 jam dengan AM/PM'],
            ['Tampilkan detik', 'Jam flip digital dengan detik, atau hanya jam dan menit (di menu Lainnya)'],
            ['Tampilkan tanggal', 'Menambahkan hari dan tanggal di bawah jam (di menu Lainnya)'],
          ]}
        />
        <p className={p}>Sembunyikan detik dan tanggal untuk tampilan jam flip yang paling minimalis dan estetik.</p>
      </Section>

      <Section wide id="study-heading" title="Screensaver Jam Flip untuk Belajar">
        <p className={p}>
          Ditampilkan besar di layar kedua, jam ini menjadi jam belajar yang tenang: Anda bisa melirik waktu tanpa mengambil HP. Padukan
          dengan <Link href="/pomodoro-timer" className={link}>Timer Pomodoro</Link> untuk bekerja dalam blok fokus dengan jeda.
        </p>
        <p className={p}>
          Ingin sesuatu yang lebih seru di layar cadangan? Jalankan <Link href="/dvd-screensaver" className={link}>Screensaver Logo DVD</Link>.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Timer dan Stopwatch Selain Screensaver Jam Flip">
        <p className={p}>Mencari flip timer? Jam ini selalu menampilkan waktu saat ini, jadi untuk mengukur waktu, gunakan salah satu alat ini:</p>
        <ul className={ul}>
          <li>
            <Link href="/countdown-timer" className={link}>Penghitung Waktu Mundur</Link>: hitung mundur dari durasi apa pun, dengan preset
            seperti 5, 10, dan 25 menit.
          </li>
          <li>
            <Link href="/stopwatch" className={link}>Stopwatch</Link>: hitung maju dan catat lap.
          </li>
          <li>
            <Link href="/pomodoro-timer" className={link}>Timer Pomodoro</Link>: sesi fokus dan jeda untuk belajar atau bekerja.
          </li>
        </ul>
      </Section>
    </div>
  )
}
