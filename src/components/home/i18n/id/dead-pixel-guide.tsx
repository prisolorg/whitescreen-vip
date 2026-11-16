import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tes Piksel Mati (Bahasa Indonesia). Urutan: tes piksel mati / cek piksel → jenis piksel rusak → HP, laptop, monitor,
 * TV → perbaikan. Kata kunci umum "tes layar" milik halaman Uji Monitor Lengkap.
 * Nama tombol mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function DeadPixelGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Tes Piksel Mati: Cara Cek Layar Anda">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Bersihkan layar agar debu tidak dikira piksel mati.</li>
          <li>Ketuk dua kali atau tekan F untuk layar penuh, agar setiap piksel ikut dites.</li>
          <li>Ketuk layar atau gunakan tombol panah untuk berganti di antara 9 warna: hitam, putih, merah, hijau, biru, sian, magenta, kuning, dan abu-abu.</li>
          <li>Amati setiap warna dengan teliti dari tepi ke tepi. Atau tekan Siklus otomatis untuk berganti warna setiap beberapa detik.</li>
        </ol>
        <p className={p}>
          Alat ini berfungsi sebagai tes piksel dan tes LCD di monitor, laptop, HP, tablet, atau TV apa pun yang punya browser. Untuk memeriksa
          satu warna lebih lama, buka <Link href="/black-screen" className={link}>layar hitam</Link> atau{' '}
          <Link href="/" className={link}>layar putih</Link>.
        </p>
      </Section>

      <Section wide id="types-heading" title="Hasil Tes Piksel Mati: Mati, Macet, atau Panas?">
        <p className={p}>Apa itu piksel mati? Piksel yang sama sekali tidak menyala lagi. Begini cara membedakannya dari yang lain:</p>
        <Table
          caption="Seperti apa piksel yang rusak"
          head={['Yang Anda lihat', 'Paling terlihat pada', 'Jenisnya']}
          rows={[
            ['Titik hitam yang tidak pernah menyala', 'Putih dan warna terang', 'Piksel mati'],
            ['Titik yang macet di merah, hijau, atau biru', 'Hitam dan warna lain', 'Piksel macet'],
            ['Titik yang selalu putih', 'Hitam', 'Piksel panas (hot pixel)'],
            ['Bintik yang bergeser saat diusap', 'Warna apa pun', 'Debu, bukan piksel'],
          ]}
        />
        <p className={p}>
          Pelajari lebih lanjut di panduan <Link href="/screen-problems/stuck-pixel" className={link}>piksel macet</Link> dan{' '}
          <Link href="/screen-problems/hot-pixel" className={link}>hot pixel</Link>.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Tes Piksel Mati di HP, Laptop, Monitor, atau TV">
        <ul className={ul}>
          <li>HP dan iPhone: naikkan kecerahan, ketuk ikon layar penuh, lalu ketuk untuk berganti warna.</li>
          <li>Laptop dan monitor: atur layar ke resolusi bawaannya agar satu piksel tampil sebagai satu piksel.</li>
          <li>TV: buka halaman ini di browser TV, atau cast tab dari laptop, lalu periksa dari dekat.</li>
          <li>Perangkat baru? Segera cek piksel mati, selagi masih bisa dikembalikan.</li>
        </ul>
      </Section>

      <Section wide id="fix-heading" title="Setelah Tes Piksel Mati: Bisakah Diperbaiki?">
        <p className={p}>
          Mencari cara memperbaiki piksel mati? Piksel yang benar-benar mati hampir tidak pernah kembali, karena tidak lagi mendapat daya. Piksel
          macet kadang bisa: warna yang berkedip cepat di atasnya selama 10 sampai 20 menit dapat menghidupkannya kembali.{' '}
          <Link href="/screen-burn-in-test" className={link}>Tes Burn-in Layar</Link> punya pola perbaikan Siklus warna yang bisa dipakai untuk
          ini; lewati jika cahaya berkedip mengganggu Anda.
        </p>
        <p className={p}>
          Jika layar masih bergaransi, cek kebijakan piksel mati dari produsennya. Untuk pemeriksaan lengkap warna dan keseragaman, jalankan{' '}
          <Link href="/monitor-test" className={link}>tes layar</Link>.
        </p>
      </Section>
    </div>
  )
}
