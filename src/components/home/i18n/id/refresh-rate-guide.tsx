import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tes Refresh Rate Layar (Bahasa Indonesia). Urutan: tes refresh rate / tes Hz → cara cek refresh rate di Windows, Mac,
 * HP → 60, 120, 144 Hz → tes FPS. Nama tombol mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function RefreshRateGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Tes Refresh Rate Layar: Cara Kerjanya">
        <p className={p}>
          Browser menggambar frame baru sekali setiap layar refresh, jadi mengukur waktu frame tersebut menunjukkan refresh rate Anda. Tes Hz
          ini mulai sendiri dan menampilkan:
        </p>
        <ul className={ul}>
          <li>Refresh rate Anda dalam Hz, dibulatkan ke nilai umum terdekat (60, 120, 144 Hz, dan seterusnya).</li>
          <li>Lama setiap frame dalam milidetik, dan persentase frame yang terlambat.</li>
          <li>Nilai terendah dan tertinggi yang terdeteksi, plus blok bergerak yang tampak lebih mulus pada Hz lebih tinggi.</li>
        </ul>
        <p className={p}>
          Alat ini bisa dipakai untuk cek refresh rate monitor, laptop, dan HP. Tekan Ukur lagi setelah mengubah pengaturan, dan ketuk dua kali
          untuk layar penuh di layar yang ingin Anda tes.
        </p>
      </Section>

      <Section wide id="check-heading" title="Tes Refresh Rate Layar vs Pengaturan Tampilan">
        <p className={p}>Tes ini menunjukkan refresh rate layar Anda saat ini. Untuk melihat atau mengubah pengaturan refresh rate monitor:</p>
        <Table
          caption="Tempat pengaturan refresh rate"
          head={['Perangkat', 'Tempat mencarinya']}
          rows={[
            ['Windows 11 / 10', 'Settings → System → Display → Advanced display → Choose a refresh rate'],
            ['Mac', 'System Settings → Displays → Refresh Rate'],
            ['iPhone / iPad', 'Ditentukan oleh model; model ProMotion naik hingga 120 Hz secara otomatis'],
            ['Android', 'Settings → Display → Screen refresh rate (atau Motion smoothness)'],
          ]}
        />
        <h3 className={h3}>Mengapa Hasilnya Bisa Lebih Rendah dari Perkiraan</h3>
        <ul className={ul}>
          <li>Layar diatur ke 60 Hz di pengaturan, atau kabel atau port tidak mendukung refresh rate yang lebih tinggi.</li>
          <li>Laptop yang memakai baterai atau HP dalam mode hemat daya menurunkan refresh rate untuk menghemat daya.</li>
          <li>Tab atau aplikasi berat membuat browser melewatkan frame. Tutup lalu ukur lagi.</li>
        </ul>
      </Section>

      <Section wide id="rates-heading" title="Hasil Tes Refresh Rate Layar: 60, 120, dan 144 Hz">
        <Table
          caption="Refresh rate umum"
          head={['Refresh rate', 'Waktu per frame', 'Layar umum']}
          rows={[
            ['60 Hz', '16,7 md', 'Sebagian besar monitor kantor, laptop dan TV lama'],
            ['90 Hz', '11,1 md', 'Banyak HP kelas menengah'],
            ['120 Hz', '8,3 md', 'HP gaming, iPhone Pro, TV dan laptop baru'],
            ['144 Hz', '6,9 md', 'Monitor gaming'],
            ['240 Hz', '4,2 md', 'Monitor esports'],
          ]}
        />
      </Section>

      <Section wide id="fps-heading" title="Tes Refresh Rate Layar atau Tes Frame Rate?">
        <p className={p}>
          Refresh rate (Hz) adalah seberapa sering layar menggambar ulang; frame rate (FPS) adalah berapa banyak frame yang dihasilkan browser
          atau game. Untuk cek gerakan dan FPS, jalankan <Link href="/frame-rate-test" className={link}>Tes Frame Rate</Link>, dan untuk blur
          serta jejak gerakan coba <Link href="/monitor-ghosting-test" className={link}>Tes Ghosting Monitor</Link>.
        </p>
      </Section>
    </div>
  )
}
