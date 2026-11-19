import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Layar Biru (Bahasa Indonesia). Urutan: cahaya biru / lampu biru → nuansa terang, gelap, navy → chroma key, foto,
 * editing → tes kacamata anti radiasi biru dan subpiksel. Nama pengaturan mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function BlueScreenGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Cahaya Layar Biru: Gunakan Layar sebagai Lampu Biru">
        <p className={p}>
          Layar biru penuh mengubah monitor, laptop, atau HP apa pun menjadi layar cahaya biru yang lembut. Ketuk pratinjau dua kali untuk layar
          penuh, nyalakan Biarkan layar tetap menyala, dan atur kecerahan yang Anda butuhkan.
        </p>
        <Table
          caption="Cara memakai layar biru sebagai lampu"
          head={['Kegunaan', 'Pengaturan', 'Tips']}
          rows={[
            ['Cahaya latar untuk streaming dan video', 'Kecerahan 70–100%', 'Letakkan layar kedua di belakang Anda, di luar bingkai'],
            ['Cahaya aksen foto dan video', 'Kecerahan 100%', 'Sinari dari samping untuk garis tepi sejuk pada objek'],
            ['Lampu suasana dan pesta', 'Kecerahan 40–70%', 'Hadapkan layar ke dinding untuk menyebarkan cahaya biru'],
            ['Kilatan biru terang', 'Kecerahan 100%, layar penuh', 'HP memberi cahaya paling kuat pada kecerahan maksimum'],
          ]}
        />
        <h3 className={h3}>Cahaya Biru dari Layar dan Tidur</h3>
        <p className={p}>
          Cahaya biru terang di malam hari bisa membuat Anda lebih sulit tidur. Gunakan cahaya biru di siang hari atau untuk foto kreatif, dan
          beralih ke <Link href="/red-screen" className={link}>layar merah</Link> atau{' '}
          <Link href="/orange-screen" className={link}>layar oranye</Link> dengan kecerahan rendah di malam hari.
        </p>
      </Section>

      <Section wide id="shade-heading" title="Warna Layar Biru: Biru Terang, Tua, Navy, dan Muda">
        <p className={p}>
          Halaman ini menampilkan biru murni, #0000FF (RGB 0, 0, 255). Gunakan penggeser Kecerahan untuk menggelapkannya, dengan kehangatan di
          Netral.
        </p>
        <Table
          caption="Nuansa biru dan cara mendapatkannya"
          head={['Nuansa', 'Hex', 'Cara mendapatkannya']}
          rows={[
            ['Biru terang', '#0000FF', 'Kecerahan 100%'],
            ['Biru tua', '#0000B3', 'Kecerahan 70%'],
            ['Biru navy', '#000080', 'Kecerahan 50%'],
            ['Biru muda', '#00FFFF', <Link key="c" href="/cyan-screen" className={link}>Buka layar sian</Link>],
          ]}
        />
        <p className={p}>
          Butuh file? Unduh menyimpan PNG biru dalam 1080p, 2K, 4K, atau ukuran HP, atau ukuran kustom apa pun hingga 8K. Pilihan lain ada di koleksi{' '}
          <Link href="/backgrounds/blue-background" className={link}>latar belakang biru</Link>.
        </p>
      </Section>

      <Section wide id="chroma-heading" title="Layar Biru untuk Chroma Key, Fotografi, dan Editing">
        <p className={p}>Layar biru bekerja seperti green screen, dan menjadi pilihan yang lebih baik dalam beberapa kasus:</p>
        <ul className={ul}>
          <li>Objek Anda memakai baju hijau atau memegang benda hijau.</li>
          <li>Anda ingin pantulan warna yang tidak terlalu terlihat. Pantulan biru lebih mudah disembunyikan, meski biru butuh cahaya lebih banyak agar keying bersih.</li>
        </ul>
        <p className={p}>
          Untuk produk kecil dan close-up, buka halaman ini di laptop, monitor komputer, atau HP, atur Kecerahan sekitar 70%, dan jaga objek 20–30
          cm di depan layar. Untuk editing, unduh PNG biru dan lakukan keying dengan alat yang sama seperti untuk hijau: Chroma Key di OBS, Chroma
          key di CapCut, Ultra Key di Premiere, atau 3D Keyer di DaVinci Resolve. Lihat{' '}
          <Link href="/glossary/chroma-key" className={link}>chroma key</Link> untuk cara kerja keying.
        </p>
      </Section>

      <Section wide id="test-heading" title="Tes Layar Biru: Kacamata Anti Radiasi Biru dan Subpiksel">
        <p className={p}>
          Ingin tes cahaya biru cepat untuk kacamata Anda? Lihat halaman ini dengan kecerahan penuh, dengan dan tanpa kacamata. Lensa yang
          berwarna kuat membuat biru tampak jauh lebih gelap; lensa bening yang hanya sedikit memblokir biru hampir tidak membuat perbedaan.
          Coba hal yang sama dengan <Link href="/" className={link}>layar putih</Link> untuk melihat seberapa besar lensa mewarnai semuanya. Ini
          cek visual cepat, bukan pengukuran laboratorium.
        </p>
        <p className={p}>
          Biru murni juga hanya menyalakan subpiksel biru. Titik hitam adalah subpiksel biru yang mati, sedangkan titik magenta atau sian berarti
          subpiksel merah atau hijau macet menyala. Untuk pemeriksaan lengkap, jalankan{' '}
          <Link href="/dead-pixel-test" className={link}>Tes Piksel Mati</Link>.
        </p>
      </Section>
    </div>
  )
}
