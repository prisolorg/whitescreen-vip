import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Layar Hijau (Bahasa Indonesia). Orang Indonesia juga mencari "green screen". Urutan: warna green screen →
 * komputer, laptop, HP sebagai layar hijau → YouTube dan editing video → cek subpiksel dan keseragaman.
 * Nama pengaturan mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function GreenScreenGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="color-heading" title="Warna Layar Hijau: Hijau Mana yang Terbaik untuk Green Screen?">
        <p className={p}>
          Halaman ini menampilkan hijau murni, #00FF00 (RGB 0, 255, 0). Software keying menghapus hijau apa pun yang rata dan jenuh, tetapi hijau
          yang sangat terang bisa memantul ke objek Anda. Gunakan penggeser Kecerahan untuk mendapatkan nuansa yang dibutuhkan, dan biarkan
          kehangatan di Netral.
        </p>
        <Table
          caption="Warna green screen dan cara mendapatkannya di halaman ini"
          head={['Nuansa', 'Hex', 'Cara mendapatkannya', 'Paling cocok untuk']}
          rows={[
            ['Hijau terang', '#00FF00', 'Kecerahan 100%', 'Tes piksel, latar paling mencolok'],
            ['Hijau chroma key', '#00B300 (mendekati standar #00B140)', 'Kecerahan 70%', 'Keying video dengan pantulan warna lebih sedikit'],
            ['Hijau tua', '#008000', 'Kecerahan 50%', 'Latar yang lebih lembut di ruangan redup'],
          ]}
        />
        <p className={p}>
          Mencari nuansa hijau muda atau pastel? Lihat koleksi <Link href="/backgrounds/green-background" className={link}>latar belakang hijau</Link>.
        </p>
      </Section>

      <Section wide id="computer-heading" title="Layar Hijau di Komputer: Laptop, Monitor, atau HP">
        <p className={p}>Layar komputer hijau menjadi latar cepat untuk pengambilan gambar kecil: produk, tangan, mainan, dan close-up.</p>
        <ul className={ul}>
          <li>Buka halaman ini di monitor, laptop, tablet, atau HP dan ketuk dua kali untuk layar penuh.</li>
          <li>Nyalakan Biarkan layar tetap menyala agar hijaunya tidak mati di tengah pengambilan gambar.</li>
          <li>Atur Kecerahan sekitar 70% untuk hijau yang rata tanpa titik terang.</li>
          <li>Jaga objek 20–30 cm di depan layar agar cahaya hijau tidak memantul ke objek.</li>
          <li>Rekam dari depan. Sudut pandang bisa membuat tepi layar terlihat lebih gelap.</li>
        </ul>
        <p className={p}>
          Layar terlalu kecil untuk diletakkan di belakang orang. Untuk pengambilan seluruh badan atau face-cam, gantungkan kain hijau di belakang
          Anda atau tambahkan latar hijau di editor.
        </p>
      </Section>

      <Section wide id="video-heading" title="Layar Hijau untuk YouTube, Video, dan Editing">
        <p className={p}>
          Butuh green screen online untuk editing, bukan di layar? Gunakan Unduh di bawah pratinjau untuk menyimpan PNG hijau 1080p, 4K, ukuran HP,
          atau ukuran kustom apa pun, lalu masukkan ke timeline Anda.
        </p>
        <Table
          caption="Tempat menghapus green screen"
          head={['Software', 'Alat yang dipakai']}
          rows={[
            ['OBS Studio', 'Filter Chroma Key pada sumber kamera'],
            ['CapCut', 'Remove background → Chroma key'],
            ['Premiere Pro', 'Efek Ultra Key'],
            ['DaVinci Resolve', '3D Keyer atau Delta Keyer'],
          ]}
        />
        <h3 className={h3}>Latar Layar Hijau untuk Zoom dan Teams</h3>
        <p className={p}>
          Zoom dan Teams menawarkan efek green screen virtual, tetapi kain hijau sungguhan di belakang Anda memberi tepi yang lebih bersih. Untuk
          gambar siap chroma key, lihat set <Link href="/backgrounds/green-screen-background" className={link}>latar green screen</Link>.{' '}
          <Link href="/glossary/chroma-key" className={link}>Chroma key</Link> menjelaskan cara kerja keying.
        </p>
      </Section>

      <Section wide id="check-heading" title="Tes Layar Hijau: Subpiksel dan Keseragaman">
        <p className={p}>
          Hijau membawa sebagian besar kecerahan yang kita lihat, jadi sudut yang lebih gelap atau bercak berawan mudah terlihat. Titik gelap
          adalah subpiksel hijau yang mati, sedangkan titik kuning atau sian berarti subpiksel merah atau biru macet menyala. Jalankan{' '}
          <Link href="/screen-uniformity-test" className={link}>Uji Keseragaman Layar</Link> atau baca{' '}
          <Link href="/screen-problems/stuck-pixel" className={link}>panduan piksel macet</Link> untuk langkah selanjutnya. Titik hitam yang juga
          terlihat di <Link href="/" className={link}>layar putih</Link> adalah piksel yang mati total.
        </p>
      </Section>
    </div>
  )
}
