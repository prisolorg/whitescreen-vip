import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Layar Kuning (Bahasa Indonesia). Urutan: cahaya hangat / lampu kuning → kuning solid → cek subpiksel.
 * Nama pengaturan mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function YellowScreenGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Layar Kuning sebagai Cahaya Hangat">
        <p className={p}>
          Layar kuning memancarkan cahaya hangat tanpa unsur biru, sehingga menjadi layar cahaya hangat yang nyaman untuk membaca, video call,
          dan malam hari. Ketuk pratinjau dua kali untuk layar penuh dan nyalakan Biarkan layar tetap menyala agar cahayanya tidak padam.
        </p>
        <Table
          caption="Pengaturan yang disarankan untuk memakai layar kuning sebagai lampu"
          head={['Kegunaan', 'Pengaturan', 'Tips']}
          rows={[
            ['Lampu baca', 'Hangat, Kecerahan 60–80%', 'Sandarkan tablet di samping buku, miring menjauhi mata'],
            ['Video call', 'Netral, Kecerahan 100%', 'Letakkan layar di belakang webcam untuk cahaya keemasan'],
            ['Lampu malam', 'Hangat, Kecerahan 30–50%', 'Kecerahan rendah membuat cahaya tetap lembut di ruangan gelap'],
            ['Warna foto dan video', 'Netral atau Hangat', 'Gunakan layar kedua sebagai cahaya aksen hangat dari samping'],
          ]}
        />
        <h3 className={h3}>Senter Kuning di HP Anda</h3>
        <p className={p}>
          Buka halaman ini di HP, naikkan kecerahan, dan masuk ke layar penuh. Cahaya kuning hangat tidak sesilau senter putih terang dalam gelap,
          jadi praktis untuk menengok anak atau mencari jalan di malam hari.
        </p>
      </Section>

      <Section wide id="solid-heading" title="Layar Kuning Solid (#FFFF00)">
        <p className={p}>
          Halaman ini menampilkan kuning solid: merah dan hijau pada kekuatan penuh dengan biru mati (RGB 255, 255, 0). Ini layar kuning polos
          tanpa apa pun di atasnya, dan Anda bisa menggeser nuansanya dengan kontrol di bawah pratinjau.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Kuning terang:</strong> Netral, Kecerahan 100%.
          </li>
          <li>
            <strong className="text-foreground">Kuning keemasan:</strong> pilih Hangat.
          </li>
          <li>
            <strong className="text-foreground">Kuning mustard:</strong> turunkan penggeser Kecerahan.
          </li>
        </ul>
        <p className={p}>
          Butuh file? Unduh menyimpan PNG kuning dari 1080p hingga 8K, atau ukuran HP dan kustom. Untuk nuansa kuning pastel dan muda, lihat
          koleksi <Link href="/backgrounds/yellow-background" className={link}>latar belakang kuning</Link>.
        </p>
      </Section>

      <Section wide id="check-heading" title="Tes Layar Kuning: Subpiksel Merah dan Hijau">
        <p className={p}>
          Kuning menyalakan subpiksel merah dan hijau bersamaan. Titik merah berarti subpiksel hijau mati, titik hijau berarti subpiksel merah
          mati, dan titik putih berarti subpiksel biru macet menyala. Persempit dengan <Link href="/red-screen" className={link}>layar merah</Link>,{' '}
          <Link href="/green-screen" className={link}>layar hijau</Link>, dan <Link href="/blue-screen" className={link}>layar biru</Link>.
        </p>
        <p className={p}>
          Jika <Link href="/" className={link}>layar putih</Link> Anda malah terlihat kekuningan, lihat{' '}
          <Link href="/screen-problems/yellow-tint-on-screen" className={link}>
            panduan semburat kuning
          </Link>
          .
        </p>
      </Section>
    </div>
  )
}
