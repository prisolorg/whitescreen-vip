import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Penghitung Waktu Mundur (Bahasa Indonesia). Alat menghitung mundur preset (1–60 menit), waktu kustom hingga 99:59:59,
 * dan ke tanggal tertentu. Urutan: timer hitung mundur → hitung mundur hari → online → ide → timer lain.
 * Nama tombol mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function CountdownTimerGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Penghitung Waktu Mundur: Cara Memakainya">
        <ul className={ul}>
          <li>Pilih durasi dari menu Pengatur waktu: 1, 5, 10, 15, 25, 45, atau 60 menit.</li>
          <li>Butuh durasi lain? Klik atau ketuk jam, menit, atau detik di layar dan ketik waktu apa pun, hingga 99 jam.</li>
          <li>Tekan Mulai, atau Spasi di keyboard, dan jam hitung mundur mulai berjalan.</li>
          <li>Jeda lalu lanjutkan dari titik terakhir, atau tekan R untuk mengatur ulang.</li>
          <li>Saat waktu habis, layar berkedip merah dan bunyi terdengar. Matikan bunyi di menu Lainnya.</li>
        </ul>
        <p className={p}>Tekan F atau ketuk Layar Penuh untuk timer hitung mundur besar yang terbaca dari seberang ruangan.</p>
      </Section>

      <Section wide id="date-heading" title="Penghitung Waktu Mundur ke Tanggal: Hari, Jam, Menit">
        <p className={p}>
          Menghitung hari menuju ulang tahun, pernikahan, liburan, ujian, atau peluncuran? Pilih{' '}
          <strong className="text-foreground">Hitung mundur ke tanggal</strong> di menu Pengatur waktu, pilih tanggal dan waktu dari kalender,
          beri nama acara jika mau, lalu tekan Mulai. Hitung mundur hari menampilkan sisa hari, jam, menit, dan detik, dan bunyi terdengar saat
          waktunya tiba.
        </p>
        <ul className={ul}>
          <li>Alat ini memakai jam dan zona waktu perangkat Anda, jadi tengah malam berarti tengah malam di tempat Anda.</li>
          <li>Hitung mundur Anda tersimpan di browser ini: tutup tab dan hitungan tetap berjalan saat Anda kembali.</li>
          <li>Masuk ke layar penuh untuk menampilkan hitung mundur hari di TV, proyektor, atau monitor cadangan.</li>
          <li>Ketuk Ubah tanggal untuk memilih acara baru kapan saja.</li>
        </ul>
      </Section>

      <Section wide id="online-heading" title="Penghitung Waktu Mundur Online: Gratis, Tanpa Aplikasi">
        <p className={p}>
          Timer hitung mundur online ini berjalan di browser apa pun pada komputer, tablet, HP, atau smart TV. Gratis, tanpa daftar, dan tanpa
          memasang apa pun. Di komputer Anda bisa pindah ke tab lain selama timer berjalan: sisa waktu tampil di judul tab, dan bunyi tetap
          terdengar di angka nol. Biarkan tab terbuka dan suara menyala. HP menjeda halaman yang ditinggalkan, jadi biarkan timer tetap di
          layar; jika perangkat tidur, hitung mundur menyesuaikan dan bunyi terdengar saat perangkat aktif kembali.
        </p>
      </Section>

      <Section wide id="uses-heading" title="Ide Memakai Penghitung Waktu Mundur">
        <Table
          caption="Cara memakai penghitung waktu mundur"
          head={['Kegunaan', 'Durasi']}
          rows={[
            ['Aktivitas kelas dan ujian', '10, 15, atau 45 menit di proyektor'],
            ['Presentasi dan pidato', '5 atau 10 menit, layar penuh di tempat pembicara bisa melihatnya'],
            ['Memasak dan menyeduh teh', '1, 5, atau 10 menit'],
            ['Istirahat dan olahraga', '1, 5, atau 15 menit'],
            ['Sesi fokus', '25 menit, lalu jeda singkat'],
            ['Memanggang, mencuci, atau ujian panjang', 'Waktu kustom seperti 1 jam 30 menit'],
            ['Ulang tahun, liburan, perjalanan, dan peluncuran', 'Hitung mundur ke tanggal'],
          ]}
        />
      </Section>

      <Section wide id="more-heading" title="Penghitung Waktu Mundur, Stopwatch, atau Pomodoro?">
        <ul className={ul}>
          <li>
            Ingin menghitung maju? Gunakan <Link href="/stopwatch" className={link}>stopwatch</Link>.
          </li>
          <li>
            Bekerja atau belajar dalam blok? <Link href="/pomodoro-timer" className={link}>Timer Pomodoro</Link> mengulang sesi fokus 25 menit
            dengan jeda.
          </li>
          <li>
            Hanya ingin waktu di layar? Coba <Link href="/flip-clock-screensaver" className={link}>Screensaver Jam Flip</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
