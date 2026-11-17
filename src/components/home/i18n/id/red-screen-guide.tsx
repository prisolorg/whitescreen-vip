import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Layar Merah (Bahasa Indonesia). Urutan: lampu merah untuk malam dan tidur → foto, reels → nuansa merah →
 * tes layar merah. Nama pengaturan mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function RedScreenGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="night-heading" title="Cahaya Layar Merah untuk Malam dan Tidur">
        <p className={p}>
          Cahaya merah redup paling ramah bagi penglihatan malam Anda. Sel mata untuk cahaya rendah hampir tidak bereaksi terhadap merah tua,
          itulah sebabnya astronom dan pilot memakainya. Turunkan penggeser Kecerahan, ketuk dua kali untuk layar penuh, dan nyalakan Biarkan
          layar tetap menyala.
        </p>
        <Table
          caption="Pengaturan yang disarankan untuk memakai layar merah di malam hari"
          head={['Kegunaan', 'Kecerahan', 'Tips']}
          rows={[
            ['Lampu tidur', '20–40%', 'Hadapkan layar ke dinding untuk cahaya lembut'],
            ['Membaca catatan dalam gelap', '30–50%', 'Pegang HP dekat dan di bawah tinggi mata'],
            ['Mengamati bintang', 'Serendah mungkin', 'Menjaga mata tetap terbiasa dengan langit gelap'],
            ['Cahaya merah terang', '100%', 'Untuk sinyal, efek, dan foto, bukan untuk bersantai sebelum tidur'],
          ]}
        />
        <h3 className={h3}>Apakah Layar Merah Baik untuk Tidur?</h3>
        <p className={p}>
          Layar cahaya merah yang redup lebih lembut sebelum tidur dibanding <Link href="/" className={link}>layar putih</Link> yang terang atau
          layar biru, karena tidak mengandung cahaya biru. Namun tetap saja itu cahaya, jadi biarkan redup dan matikan saat Anda siap tidur. Layar
          bukan alat terapi cahaya merah: alat tersebut memakai panjang gelombang tertentu dan daya yang jauh lebih tinggi.
        </p>
      </Section>

      <Section wide id="photo-heading" title="Layar Merah untuk Foto, Reels, dan Selfie">
        <p className={p}>Layar merah memberi selfie dan reels cahaya merah yang dramatis hanya dengan HP atau laptop.</p>
        <ul className={ul}>
          <li>Matikan lampu ruangan agar cahaya merah menjadi satu-satunya cahaya di wajah Anda.</li>
          <li>Buka layar merah penuh ini di HP kedua, tablet, atau laptop, atur Kecerahan ke 100%, dan masuk ke layar penuh.</li>
          <li>Pegang layar 20–40 cm dari wajah, sedikit ke samping, untuk bayangan dan kedalaman.</li>
          <li>Turunkan kecerahan atau mundurkan layar jika kulit Anda terlihat terlalu terang.</li>
        </ul>
        <p className={p}>Cara ini sama di iPhone, Android, dan laptop. Makin besar layarnya, makin lembut cahayanya.</p>
      </Section>

      <Section wide id="shade-heading" title="Warna Layar Merah: Merah Terang, Tua, dan Muda">
        <p className={p}>
          Halaman ini menampilkan merah murni, #FF0000 (RGB 255, 0, 0): layar merah polos tanpa apa pun di atasnya. Gunakan penggeser Kecerahan
          untuk menggelapkannya, dengan kehangatan di Netral.
        </p>
        <Table
          caption="Nuansa merah dan cara mendapatkannya"
          head={['Nuansa', 'Hex', 'Cara mendapatkannya']}
          rows={[
            ['Merah terang', '#FF0000', 'Kecerahan 100%'],
            ['Merah tua', '#B30000', 'Kecerahan 70%'],
            ['Merah gelap / marun', '#800000', 'Kecerahan 50%'],
            ['Merah muda / pink', '#FF69B4', <Link key="p" href="/pink-screen" className={link}>Buka layar merah muda</Link>],
          ]}
        />
        <p className={p}>
          Butuh file? Unduh menyimpan PNG merah dalam 1080p, 2K, 4K, atau ukuran HP, atau ukuran kustom apa pun hingga 8K. Nuansa lain ada di koleksi{' '}
          <Link href="/backgrounds/red-background" className={link}>latar belakang merah</Link>.
        </p>
      </Section>

      <Section wide id="test-heading" title="Tes Layar Merah: Subpiksel Merah dan Akurasi Warna">
        <p className={p}>
          Merah murni hanya menyalakan subpiksel merah. Titik gelap adalah subpiksel merah yang mati, sedangkan titik kuning atau magenta berarti
          subpiksel hijau atau biru macet menyala. Merah juga warna yang sering tampak oranye atau kemerahmudaan di monitor murah; bandingkan
          dengan perangkat lain, atau jalankan <Link href="/screen-color-test" className={link}>Uji Warna Layar Monitor</Link> dan{' '}
          <Link href="/dead-pixel-test" className={link}>Tes Piksel Mati</Link>.
        </p>
      </Section>
    </div>
  )
}
