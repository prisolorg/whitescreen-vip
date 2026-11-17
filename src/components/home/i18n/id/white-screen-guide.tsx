import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Layar Putih, halaman utama (Bahasa Indonesia). Urutan: layar putih terang → layar putih polos / putih murni →
 * layar putih sebagai lampu → gambar latar putih → tes layar putih. Nama tombol mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function WhiteScreenGuideId() {
  return (
    <>
      <Section id="bright-heading" title="Layar Putih Terang: Putih Paling Terang yang Bisa Ditampilkan Layar Anda">
        <p className={p}>
          Layar putih terang di atas adalah putih murni (#FFFFFF) pada 100%, warna paling terang yang bisa ditampilkan layar apa pun. Seberapa
          terang tampilannya tergantung pada pengaturan kecerahan perangkat Anda sendiri, karena situs web tidak bisa menaikkan lampu latar
          perangkat keras untuk Anda.
        </p>

        <h3 className={h3}>Cara Membuat Layar Putih Lebih Terang</h3>
        <ul className={ul}>
          <li>Biarkan penggeser Kecerahan di bawah layar di 100% dan pilih Netral atau Sejuk.</li>
          <li>Naikkan kecerahan perangkat sampai maksimal (lihat tabel di bawah).</li>
          <li>Matikan apa pun yang mewarnai atau meredupkan putih: Night Light, Night Shift, True Tone, mode nyaman mata, dan mode hemat baterai.</li>
          <li>Ketuk layar dua kali untuk masuk ke layar penuh agar bilah browser tidak meredupkan tepinya.</li>
        </ul>

        <Table
          caption="Tempat kecerahan maksimum di setiap perangkat"
          head={['Perangkat', 'Kecerahan maksimum', 'Matikan untuk putih murni']}
          rows={[
            ['Windows 10/11', 'Penggeser kecerahan di Quick Settings (Win + A)', 'Night light, battery saver, content-adaptive brightness'],
            ['Mac', 'Tombol kecerahan atau Control Center → Display', 'Night Shift, True Tone, kecerahan otomatis'],
            ['iPhone / iPad', 'Penggeser di Control Center', 'Night Shift, True Tone, Low Power Mode'],
            ['Android', 'Penggeser di Quick Settings', 'Kecerahan adaptif, eye comfort / night light'],
            ['Smart TV', 'Mode gambar Vivid atau Standard, lampu latar maksimum', 'Mode gambar Eco / hemat energi'],
          ]}
        />

        <h3 className={h3}>Apakah Layar yang Sangat Terang Aman untuk Mata?</h3>
        <p className={p}>
          Layar putih yang stabil tidak berkedip, tetapi kecerahan penuh di ruangan gelap bisa terasa menyilaukan. Turunkan penggeser atau pilih
          Hangat jika Anda hanya butuh cahaya lembut, dan alihkan pandangan sejenak setiap 20 menit jika Anda memakainya dalam waktu lama.
        </p>
      </Section>

      <Section id="blank-heading" title="Layar Putih Polos: Layar Putih Murni Tanpa Apa Pun">
        <p className={p}>
          Layar putih kosong memang hanya itu: layar serba putih tanpa teks, ikon, atau kursor. Layar putih polos seperti ini bisa dipakai sebagai
          latar bersih, panel cahaya, atau cara mengosongkan layar dengan satu ketukan.
        </p>
        <ul className={ul}>
          <li>Ketuk pratinjau dua kali (atau tekan F) untuk layar serba putih dari tepi ke tepi.</li>
          <li>Kursor tersembunyi setelah beberapa saat tidak digerakkan, jadi tidak ada yang mengganggu putihnya.</li>
          <li>Tekan Esc atau ketuk dua kali lagi untuk keluar dari layar penuh.</li>
        </ul>

        <h3 className={h3}>Putih Murni vs Layar Putih Hangat, Lembut, dan Off-White</h3>
        <Table
          caption="Nuansa putih yang bisa didapat dengan tombol Sejuk, Netral, dan Hangat"
          head={['Nuansa', 'Cara mendapatkannya', 'Paling cocok untuk']}
          rows={[
            ['Putih murni (#FFFFFF)', 'Netral, Kecerahan 100%', 'Pengujian, membersihkan layar, cahaya paling terang'],
            ['Putih sejuk', 'Sejuk, Kecerahan 100%', 'Tampilan siang hari yang segar, foto produk'],
            ['Putih hangat', 'Hangat', 'Video call, makeup, membaca di malam hari'],
            ['Putih lembut / off-white', 'Hangat + Kecerahan 60–80%', 'Cahaya latar lembut di ruangan gelap'],
          ]}
        />
      </Section>

      <Section id="light-heading" title="Layar Putih sebagai Lampu: Gunakan Layar Anda sebagai Penerangan">
        <p className={p}>
          Layar Anda menjadi sumber cahaya yang lembut dan merata, dan pada kecerahan penuh menghasilkan cahaya putih yang cukup terang. Naikkan
          penggeser Kecerahan dan kecerahan perangkat, pilih kehangatan, lalu nyalakan Biarkan layar tetap menyala agar cahayanya tidak padam di
          tengah panggilan.
        </p>
        <Table
          caption="Pengaturan yang disarankan untuk memakai layar putih sebagai lampu"
          head={['Kegunaan', 'Kehangatan', 'Tips']}
          rows={[
            ['Video call (Zoom, Teams, Meet)', 'Hangat atau Netral', 'Letakkan layar tepat di belakang webcam, sedikit di atas tinggi mata'],
            ['Makeup dan selfie', 'Netral', 'Hadapkan layar lurus ke wajah untuk cahaya merata tanpa bayangan'],
            ['Lampu baca', 'Hangat', 'Turunkan penggeser ke 60–80% untuk mengurangi silau'],
            ['Foto produk', 'Sejuk', 'Gunakan perangkat kedua sebagai fill light dari samping'],
            ['Senter cepat', 'Netral', 'Layar penuh di HP dengan kecerahan penuh'],
          ]}
        />
        <h3 className={h3}>Gunakan HP atau Laptop sebagai Senter</h3>
        <p className={p}>
          Buka layar putih ini di HP, naikkan kecerahan ke maksimum, dan ketuk dua kali untuk layar penuh. Layar cahaya ini lebih lembut daripada
          flash kamera, sehingga praktis untuk mencari barang di ruangan gelap tanpa membangunkan orang lain.
        </p>
        <p className={p}>
          Ingin kontrol lebih? Coba <Link href="/ring-light" className={link}>Ring Light Online</Link> untuk pantulan cahaya bulat atau{' '}
          <Link href="/zoom-lighting" className={link}>Pencahayaan Panggilan Video</Link> untuk suhu warna yang tepat.
        </p>
      </Section>

      <Section id="background-heading" title="Unduh Gambar dan Latar Layar Putih">
        <p className={p}>
          Butuh layar putih sebagai file? Gunakan Unduh di bawah layar untuk menyimpan PNG putih murni dengan ukuran yang Anda butuhkan.
          Kecerahan dan kehangatan pilihan Anda ikut diterapkan pada gambar.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Desktop & TV:</strong> 1080p, 2K dan 4K.
          </li>
          <li>
            <strong className="text-foreground">Ponsel dan tablet:</strong> Ponsel (1080×2400).
          </li>
          <li>
            <strong className="text-foreground">Ukuran khusus:</strong> lebar dan tinggi berapa pun.
          </li>
        </ul>
        <p className={p}>
          Mencari lebih banyak wallpaper dan nuansa putih? Lihat koleksi{' '}
          <Link href="/backgrounds/white-background" className={link}>
            latar belakang putih
          </Link>
          .
        </p>
      </Section>

      <Section id="test-heading" title="Tes Layar Putih: Yang Perlu Dicari">
        <p className={p}>
          Layar putih penuh adalah cara tercepat untuk cek layar. Masuk ke layar penuh dengan kecerahan penuh dan amati seluruh panel.
        </p>
        <Table
          caption="Yang bisa ditemukan tes layar putih"
          head={['Yang Anda lihat', 'Kemungkinan artinya', 'Langkah berikutnya']}
          rows={[
            ['Titik hitam atau gelap', 'Piksel mati', <Link key="d" href="/dead-pixel-test" className={link}>Tes Piksel Mati</Link>],
            ['Bercak, sudut gelap, atau awan', 'Lampu latar tidak merata', <Link key="u" href="/screen-uniformity-test" className={link}>Uji Keseragaman Layar</Link>],
            ['Putih tampak kuning, biru, atau pink', 'Pengaturan warna atau semburat panel', <Link key="c" href="/screen-color-test" className={link}>Uji Warna Layar Monitor</Link>],
            ['Bentuk samar gambar lama', 'Burn-in atau retensi gambar', <Link key="b" href="/screen-burn-in-test" className={link}>Tes Burn-in Layar</Link>],
            ['Bintik yang bergeser saat diusap', 'Debu atau noda, bukan piksel', 'Bersihkan layar lalu cek lagi'],
          ]}
        />
        <p className={p}>
          Lalu beralih ke <Link href="/black-screen" className={link}>layar hitam</Link>: piksel macet dan kebocoran lampu latar paling jelas
          terlihat pada hitam.
        </p>
      </Section>
    </>
  )
}
