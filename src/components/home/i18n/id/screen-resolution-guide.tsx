import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Uji Resolusi Layar (Bahasa Indonesia). Urutan: berapa resolusi layar saya → cek resolusi di pengaturan Windows dan Mac →
 * resolusi HP → resolusi umum, 4K. Nama nilai mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function ScreenResolutionGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="read-heading" title="Uji Resolusi Layar: Arti Setiap Angka">
        <p className={p}>
          Berapa resolusi layar saya? Halaman ini menjawabnya sendiri, tanpa tombol yang perlu ditekan. Inilah arti setiap nilai:
        </p>
        <Table
          caption="Nilai uji resolusi layar"
          head={['Nilai', 'Artinya']}
          rows={[
            ['Resolusi layar', 'Ukuran layar Anda dalam piksel CSS, setelah penskalaan tampilan'],
            ['Piksel fisik', 'Jumlah piksel yang sebenarnya: resolusi layar × rasio piksel. Biasanya ini resolusi bawaan monitor Anda'],
            ['Viewport browser', 'Ruang di dalam jendela browser'],
            ['Area tersedia', 'Layar dikurangi taskbar atau dock'],
            ['Rasio piksel', 'Berapa piksel fisik yang membentuk satu piksel CSS (1 = tanpa penskalaan)'],
            ['Kedalaman warna', 'Bit per piksel yang dilaporkan browser, biasanya 24-bit'],
          ]}
        />
        <p className={p}>
          Nilai diperbarui langsung saat Anda mengubah ukuran jendela atau memutar HP. Biarkan zoom browser di 100%, karena zoom mengubah rasio
          piksel dan jumlah piksel fisik.
        </p>
      </Section>

      <Section wide id="check-heading" title="Uji Resolusi Layar vs Pengaturan Tampilan">
        <p className={p}>
          Uji resolusi layar membaca apa yang dilihat browser Anda. Untuk cek resolusi monitor di pengaturan sistem, atau mengubahnya:
        </p>
        <Table
          caption="Tempat pengaturan resolusi tampilan"
          head={['Perangkat', 'Tempat mencarinya']}
          rows={[
            ['Windows 11 / 10', 'Settings → System → Display → Display resolution (yang bertanda Recommended adalah resolusi bawaan)'],
            ['Mac', 'System Settings → Displays (pengaturan berskala bisa membuat Piksel fisik berbeda dari ukuran bawaan panel)'],
            ['iPhone / iPad', 'Ditentukan oleh model; gunakan nilai piksel fisik di atas'],
            ['Android', 'Settings → Display → Screen resolution (hanya di sebagian HP)'],
          ]}
        />
        <p className={p}>
          Jika cek resolusi layar menunjukkan piksel fisik lebih sedikit dari spesifikasi monitor, layar tidak diatur ke resolusi bawaannya, dan
          teks bisa terlihat buram.
        </p>
      </Section>

      <Section wide id="phone-heading" title="Uji Resolusi Layar di HP: Berapa Resolusi Layar Saya?">
        <p className={p}>
          HP melaporkan resolusi kecil, misalnya 390 × 844, karena semuanya diperbesar agar teks tajam. Resolusi HP Anda yang sebenarnya adalah
          nilai Piksel fisik: misalnya, 390 × 844 dengan rasio piksel 3 berarti 1170 × 2532.
        </p>
      </Section>

      <Section wide id="common-heading" title="Resolusi Umum dalam Uji Resolusi Layar: HD hingga 4K">
        <Table
          caption="Resolusi tampilan umum"
          head={['Nama', 'Resolusi', 'Layar umum']}
          rows={[
            ['HD', '1280 × 720', 'Laptop dan TV lama'],
            ['Full HD (1080p)', '1920 × 1080', 'Sebagian besar monitor dan laptop'],
            ['QHD (1440p)', '2560 × 1440', 'Monitor gaming dan kantor'],
            ['4K UHD', '3840 × 2160', 'Monitor dan TV 4K'],
          ]}
        />
        <ul className={ul}>
          <li>Apakah monitor saya 4K? Ya, jika Piksel fisik menunjukkan 3840 × 2160 pada zoom browser 100%.</li>
          <li>Browser tidak bisa membaca ukuran layar dalam inci; halaman ini hanya menampilkan ukuran layar dalam piksel.</li>
          <li>
            Cek ketajaman pada resolusi Anda dengan garis halus di <Link href="/monitor-test" className={link}>tes layar</Link>.
          </li>
        </ul>
      </Section>
    </div>
  )
}
