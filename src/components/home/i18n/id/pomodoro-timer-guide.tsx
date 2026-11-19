import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Timer Pomodoro (Bahasa Indonesia). Urutan mengikuti pencarian: teknik Pomodoro / timer tomat → timer belajar →
 * pengaturan 25/5, 50/10 → timer Pomodoro online. Nama tombol mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function PomodoroTimerGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="technique-heading" title="Timer Pomodoro dan Teknik Pomodoro">
        <p className={p}>
          Teknik Pomodoro, juga disebut metode Pomodoro, adalah metode manajemen waktu sederhana yang diciptakan Francesco Cirillo pada akhir
          1980-an. Anda bekerja dalam sesi singkat dan fokus yang disebut pomodoro, lalu beristirahat di antaranya. Timer Pomodoro ini
          menjalankan seluruh siklusnya untuk Anda:
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Pilih satu tugas.</li>
          <li>Fokus mengerjakannya selama 25 menit.</li>
          <li>Ambil jeda singkat 5 menit.</li>
          <li>Ulangi. Setelah empat pomodoro, ambil jeda panjang 15 menit.</li>
        </ol>
        <p className={p}>
          Timer berpindah dari fokus ke jeda dengan sendirinya, membunyikan nada saat setiap fase berakhir, dan menghitung sesi yang Anda
          selesaikan.
        </p>
        <h3 className={h3}>Mengapa Disebut Timer Tomat?</h3>
        <p className={p}>
          &quot;Pomodoro&quot; berarti tomat dalam bahasa Italia. Cirillo mengukur sesi pertamanya dengan timer dapur berbentuk tomat, itulah
          sebabnya metode ini juga dikenal sebagai teknik timer tomat.
        </p>
      </Section>

      <Section wide id="study-heading" title="Timer Pomodoro untuk Belajar">
        <p className={p}>
          Dengan teknik Pomodoro untuk belajar, alat ini menjadi timer belajar yang hebat: blok singkat lebih mudah dimulai, dan jeda menjaga
          fokus Anda tetap segar selama sesi belajar yang panjang.
        </p>
        <ul className={ul}>
          <li>Beri setiap pomodoro satu tujuan yang jelas, misalnya satu bab, satu set soal, atau 20 kartu hafalan.</li>
          <li>Simpan HP sampai waktu jeda.</li>
          <li>Catat pikiran yang muncul dan urus saat jeda, bukan di tengah sesi.</li>
          <li>Gunakan jeda panjang untuk bergerak, minum air, atau menghirup udara segar.</li>
          <li>Hitung sesi yang selesai untuk melihat seberapa cocok metode belajar Pomodoro bagi Anda.</li>
        </ul>
      </Section>

      <Section wide id="settings-heading" title="Pengaturan Timer Pomodoro: 25/5, 50/10, dan Kustom">
        <p className={p}>Buka Lainnya untuk mengatur durasi Fokus, kedua jeda, dan Sesi sebelum jeda panjang.</p>
        <Table
          caption="Pengaturan timer Pomodoro yang populer"
          head={['Pengaturan', 'Fokus', 'Jeda singkat', 'Jeda panjang', 'Cocok untuk']}
          rows={[
            ['Klasik 25/5', '25 mnt', '5 mnt', '15 mnt setelah 4', 'Sebagian besar pekerjaan dan belajar'],
            ['Kerja mendalam 50/10', '50 mnt', '10 mnt', '20–30 mnt setelah 3', 'Menulis, coding, membaca panjang'],
            ['Sesi pendek 15/3', '15 mnt', '3 mnt', '15 mnt setelah 4', 'Memulai tugas yang sulit'],
          ]}
        />
        <ul className={ul}>
          <li>Fokus bisa 5 sampai 90 menit, jeda singkat 1 sampai 20, dan jeda panjang 5 sampai 45.</li>
          <li>Matikan Mulai otomatis berikutnya untuk memulai setiap fase sendiri.</li>
          <li>Matikan bunyi untuk timer Pomodoro tanpa suara di perpustakaan atau kantor.</li>
        </ul>
        <p className={p}>
          Hanya butuh timer 25 menit sekali jalan? <Link href="/countdown-timer" className={link}>Penghitung Waktu Mundur</Link> punya preset
          sekali ketuk, dan <Link href="/stopwatch" className={link}>stopwatch</Link> menunjukkan berapa lama sebuah tugas sebenarnya berlangsung.
        </p>
      </Section>

      <Section wide id="online-heading" title="Timer Pomodoro Online: Tanpa Aplikasi">
        <p className={p}>
          Timer Pomodoro online ini berjalan di browser pada PC, Mac, Chromebook, tablet, atau HP, tanpa aplikasi atau ekstensi Pomodoro yang
          perlu dipasang dan tanpa akun.
        </p>
        <ul className={ul}>
          <li>Hitung mundur tampil di tab browser, jadi Anda bisa tetap bekerja di tab lain.</li>
          <li>Waktunya tetap akurat meski tab berjalan di latar belakang.</li>
          <li>Tekan Spasi untuk mulai atau jeda, dan F untuk jam Pomodoro besar dalam layar penuh.</li>
        </ul>
        <p className={p}>
          Alat ini juga cocok sebagai timer fokus, timer kerja, atau timer produktivitas untuk tugas apa pun yang ingin Anda bagi menjadi sesi.
        </p>
      </Section>
    </div>
  )
}
