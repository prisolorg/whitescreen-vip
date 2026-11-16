import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Stopwatch Layar Penuh (Bahasa Indonesia). Urutan: stopwatch online → timer hitung maju → stopwatch digital
 * layar penuh dan kelas → perbandingan dengan stopwatch Google. Nama tombol mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function StopwatchGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Stopwatch Layar Penuh Online: Mulai, Lap, dan Reset">
        <p className={p}>Stopwatch online ini mengukur waktu hingga seperseratus detik dan menyimpan daftar lap.</p>
        <Table
          caption="Kontrol stopwatch"
          head={['Aksi', 'Tombol', 'Tombol keyboard']}
          rows={[
            ['Mulai atau jeda', 'Mulai / Jeda', 'Spasi'],
            ['Catat lap', 'Lap', 'L'],
            ['Kembali ke nol', 'Reset', 'R'],
            ['Salin semua lap', 'Salin lap', '—'],
          ]}
        />
        <p className={p}>
          Setiap lap menampilkan waktu antara dan total berjalan, jadi Anda bisa membandingkan lap sekilas. Salin lap menyalinnya ke clipboard
          untuk spreadsheet atau pesan.
        </p>
      </Section>

      <Section wide id="timer-heading" title="Stopwatch Layar Penuh sebagai Timer Hitung Maju">
        <p className={p}>
          Stopwatch menghitung maju dari nol sampai Anda menghentikannya, jadi inilah timer online yang tepat saat Anda tidak tahu berapa lama
          sesuatu akan berlangsung. Cocok sebagai timer hitung maju untuk olahraga, pidato, eksperimen, dan tugas.
        </p>
        <p className={p}>
          Perlu menghitung mundur dari waktu tertentu, misalnya 10 atau 30 menit? Gunakan{' '}
          <Link href="/countdown-timer" className={link}>Penghitung Waktu Mundur</Link>, atau{' '}
          <Link href="/pomodoro-timer" className={link}>Timer Pomodoro</Link> untuk sesi fokus dengan jeda.
        </p>
      </Section>

      <Section wide id="fullscreen-heading" title="Stopwatch Digital Layar Penuh">
        <p className={p}>
          Tekan F atau ketuk Layar Penuh untuk stopwatch digital besar yang terbaca seisi ruangan. Cocok sebagai timer kelas di proyektor atau
          papan pintar.
        </p>
        <ul className={ul}>
          <li>Kelas: ukur waktu kuis, kerja kelompok, dan lomba membaca.</li>
          <li>Belajar: catat berapa lama setiap topik sebenarnya dikerjakan.</li>
          <li>Olahraga dan permainan: ukur waktu sprint, plank, ronde, dan teka-teki.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="Stopwatch Layar Penuh atau Stopwatch Google?">
        <p className={p}>
          Hasil pencarian Google menyertakan timer bawaan yang kecil. Stopwatch ini menambahkan daftar lap lengkap dengan waktu antara, Salin
          lap sekali klik, pintasan keyboard, dan tampilan layar penuh, dan Anda bisa menyimpannya sebagai bookmark untuk langsung membukanya.
        </p>
      </Section>
    </div>
  )
}
