import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Layar Rapat Zoom Palsu (Bahasa Indonesia). Diterjemahkan dari panduan bahasa Inggris dengan istilah pencarian Indonesia:
 * zoom palsu / rapat zoom palsu → video, kelas, prank → versi Teams dan Google Meet.
 * Nama tombol mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function FakeZoomMeetingGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="setup-heading" title="Layar Rapat Zoom Palsu: Cara Menyiapkannya">
        <p className={p}>
          Layar rapat Zoom palsu menampilkan galeri bergaya Zoom dengan lima peserta bernama, garis hijau yang berpindah ke siapa pun yang
          sedang &quot;berbicara&quot;, lencana Merekam, dan bilah alat yang sudah akrab dengan tombol merah Akhiri.
        </p>
        <ul className={ul}>
          <li>Buka Lainnya untuk mengetik Judul rapat Anda sendiri.</li>
          <li>Nyalakan Aktifkan pratinjau kamera untuk menampilkan kamera Anda di kotak &quot;Anda&quot;. Videonya tetap di perangkat Anda.</li>
          <li>Tekan F atau ketuk Layar Penuh agar rapat palsu memenuhi seluruh layar.</li>
        </ul>
      </Section>

      <Section wide id="uses-heading" title="Layar Rapat Zoom Palsu untuk Video, Kelas, dan Prank">
        <p className={p}>Panggilan Zoom palsu berguna setiap kali Anda butuh rapat yang meyakinkan di layar tanpa rapat sungguhan:</p>
        <Table
          caption="Cara memakai layar rapat Zoom palsu"
          head={['Kegunaan', 'Tips']}
          rows={[
            ['Properti film, TikTok, dan YouTube', 'Rekam layar dalam layar penuh untuk video rapat palsu'],
            ['Terlihat sibuk di panggilan', 'Biarkan layar rapat palsu terbuka dengan kamera mati'],
            ['Kelas Zoom palsu atau latihan', 'Latih pelajaran atau presentasi dengan kamera menyala'],
            ['Tangkapan layar dan mockup', 'Atur judul rapat, lalu ambil tangkapan layar'],
            ['Prank yang aman', 'Tunjukkan pada teman "rapat" yang lupa mereka ikuti, lalu ungkapkan'],
          ]}
        />
        <p className={p}>
          Ini hanya layar, bukan panggilan: tidak ada audio, tidak ada yang bisa bergabung, dan tidak ada yang terhubung ke Zoom.
        </p>
      </Section>

      <Section wide id="other-heading" title="Layar Rapat Zoom Palsu, Teams, atau Google Meet?">
        <p className={p}>Butuh aplikasi lain? Masing-masing punya layarnya sendiri:</p>
        <ul className={ul}>
          <li>
            <Link href="/fake-teams-meeting" className={link}>Layar Rapat Teams Palsu</Link>: kontrol dan tombol merah Keluar di bilah atas,
            dengan timer yang berjalan.
          </li>
          <li>
            <Link href="/fake-google-meet" className={link}>Layar Google Meet Palsu</Link>: kotak membulat, inisial untuk kamera yang mati, dan
            kode rapat.
          </li>
          <li>
            <Link href="/fake-slack-huddle" className={link}>Simulasi Slack Huddle</Link>: jendela huddle kecil dengan avatar.
          </li>
        </ul>
      </Section>
    </div>
  )
}
