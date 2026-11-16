import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pencahayaan Panggilan Video (Bahasa Indonesia). Urutan: lampu Zoom / layar sebagai lampu → pengaturan untuk rapat
 * dan video call → ring light. Nama pengaturan mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function ZoomLightingGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Pencahayaan Panggilan Video: Jadikan Layar Anda Lampu">
        <p className={p}>
          Alat ini mengubah layar cadangan menjadi cahaya lembut dan merata untuk wajah Anda. Hasil terbaik didapat dengan monitor kedua,
          tablet, atau HP yang diletakkan di belakang webcam, sehingga cahaya mengenai Anda dari depan.
        </p>
        <ul className={ul}>
          <li>Atur Kecerahan ke 100% untuk cahaya putih terang, atau turunkan untuk cahaya yang lebih lembut.</li>
          <li>Pilih Hangat (3000 K), Netral (4500 K), atau Siang hari (6500 K).</li>
          <li>Buka Lainnya untuk Suhu warna yang tepat, Warna cahaya kustom, atau mode Bingkai.</li>
          <li>Ketuk layar dua kali atau tekan F agar layar pencahayaan memenuhi seluruh tampilan.</li>
        </ul>
      </Section>

      <Section wide id="setup-heading" title="Pengaturan Pencahayaan Panggilan Video untuk Rapat Zoom">
        <Table
          caption="Pengaturan pencahayaan panggilan video"
          head={['Situasi', 'Coba ini']}
          rows={[
            ['Rapat siang hari dekat jendela', 'Siang hari, agar layar cocok dengan sinar matahari'],
            ['Video call malam hari', 'Hangat, dengan kecerahan 60–80%'],
            ['Kantor dengan lampu plafon', 'Netral, dengan layar lampu tepat di atas webcam'],
            ['Bayangan di satu sisi wajah', 'Tambahkan layar lampu kedua di sisi itu'],
          ]}
        />
        <p className={p}>
          Cahaya terbaik untuk video call datang dari depan: letakkan jendela yang terang di belakang kamera, bukan di belakang Anda, dan naikkan
          lampu kira-kira setinggi mata. Mode Bingkai hanya menyalakan tepi layar untuk cahaya webcam yang lebih lembut.
        </p>
      </Section>

      <Section wide id="ring-heading" title="Pencahayaan Panggilan Video atau Ring Light?">
        <p className={p}>
          Pencahayaan panggilan video menerangi wajah Anda dengan cahaya datar dan merata. Untuk pantulan bulat di mata yang disukai para
          kreator, coba <Link href="/ring-light" className={link}>Ring Light Online</Link>. Untuk cahaya terang biasa,{' '}
          <Link href="/" className={link}>layar putih</Link> juga bisa dipakai.
        </p>
      </Section>
    </div>
  )
}
