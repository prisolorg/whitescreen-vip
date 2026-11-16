import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Uji Monitor Lengkap (Bahasa Indonesia). Halaman ini memegang kata kunci umum "tes layar / cek layar / tes monitor".
 * Urutan: pola uji → cara tes layar online → warna dan kalibrasi → tes lain. Nama pola mengikuti antarmuka alat.
 */
export function MonitorTestGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Pola Uji Monitor Lengkap dan Fungsinya">
        <p className={p}>
          Uji monitor lengkap ini adalah tes layar dengan tujuh pola layar penuh, dan setiap gambar uji memeriksa hal yang berbeda. Untuk satu
          bidang polos guna mencari debu dan piksel mati, buka <Link href="/" className={link}>layar putih</Link>:
        </p>
        <Table
          caption="Pola tes layar"
          head={['Pola', 'Yang dicek', 'Layar yang baik menunjukkan']}
          rows={[
            ['Gradasi abu-abu', 'Nada yang halus, color banding', 'Satu gradasi halus tanpa tangga atau semburat warna'],
            ['Tingkat abu-abu', 'Level hitam dan putih', 'Setiap tingkat terlihat berbeda, termasuk yang paling gelap dan paling terang'],
            ['Grid', 'Geometri dan penskalaan', 'Garis lurus dengan jarak rata dari tepi ke tepi'],
            ['Gamma 2,2', 'Pengaturan gamma', 'Blok tengah menyatu dengan garis-garisnya dari jauh'],
            ['Garis halus', 'Ketajaman, resolusi bawaan', 'Garis 1 piksel yang tajam tanpa kilau atau moiré'],
            ['Papan catur', 'Kontras dan tepi yang bersih', 'Kotak tajam tanpa pendaran atau noda'],
            ['Bilah warna', 'Reproduksi warna', 'Delapan warna jenuh yang jelas terpisah'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="Cara Menjalankan Uji Monitor Lengkap Online">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Atur layar ke resolusi bawaannya dan zoom browser ke 100%.</li>
          <li>Ketuk dua kali tes layar untuk layar penuh, agar tidak ada hal lain di layar.</li>
          <li>Ketuk layar, gunakan tombol panah, atau pilih pola berdasarkan namanya. Siklus otomatis menggantinya untuk Anda.</li>
          <li>Lihat setiap pola dari depan, lalu dari samping, untuk melihat pergeseran sudut pandang.</li>
        </ol>
        <p className={p}>
          Tes layar ini berjalan di browser apa pun, jadi bisa dipakai untuk cek layar, tes layar online, tes layar laptop, tes monitor untuk
          layar PC baru atau bekas, atau cek cepat layar TV.
        </p>
      </Section>

      <Section wide id="color-heading" title="Uji Monitor Lengkap untuk Warna dan Kalibrasi">
        <p className={p}>
          Dalam tes layar ini, bilah warna dan pola gamma menunjukkan masalah warna dan gamma yang jelas terlihat mata. Untuk tes warna lengkap
          dengan warna solid dan gradasi RGB, gunakan <Link href="/screen-color-test" className={link}>Uji Warna Layar Monitor</Link>.
        </p>
        <p className={p}>
          Akurasi warna yang sebenarnya membutuhkan kolorimeter perangkat keras; tidak ada situs web yang bisa mengukurnya. Untuk kalibrasi warna
          monitor dasar, gunakan alat bawaan sistem Anda:
        </p>
        <ul className={ul}>
          <li>Windows: cari &ldquo;Calibrate display color&rdquo; di Start.</li>
          <li>Mac: System Settings → Displays → Color Profile → Customize → Calibrate.</li>
        </ul>
      </Section>

      <Section wide id="more-heading" title="Uji Monitor Lengkap untuk Piksel Mati, Hz, dan Masalah Lain">
        <Table
          caption="Tes mana yang dijalankan berikutnya"
          head={['Jika Anda ingin mengecek', 'Jalankan']}
          rows={[
            ['Piksel mati atau macet (tes LCD)', <Link key="dp" href="/dead-pixel-test" className={link}>Tes Piksel Mati</Link>],
            ['Refresh rate (Hz)', <Link key="hz" href="/screen-refresh-rate-test" className={link}>Tes Refresh Rate Layar</Link>],
            ['Waktu respons dan jejak', <Link key="gh" href="/monitor-ghosting-test" className={link}>Tes Ghosting Monitor</Link>],
            ['Kebocoran lampu latar dan keseragaman hitam', <Link key="un" href="/screen-uniformity-test" className={link}>Uji Keseragaman Layar</Link>],
            ['Gambar bayangan yang tertinggal di layar', <Link key="bi" href="/screen-burn-in-test" className={link}>Tes Burn-in Layar</Link>],
            ['Resolusi layar Anda', <Link key="rs" href="/screen-resolution-test" className={link}>Berapa resolusi layar saya?</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
