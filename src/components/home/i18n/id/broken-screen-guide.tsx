import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Efek Layar Retak (Bahasa Indonesia). Diterjemahkan dari panduan bahasa Inggris dengan istilah pencarian Indonesia:
 * layar retak / layar pecah → komputer, laptop, Chromebook, HP → prank layar retak → gambar & wallpaper → cek kerusakan asli.
 * Nama tombol mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function BrokenScreenGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Gaya Efek Layar Retak: Retak, Hancur, dan LCD Rusak">
        <p className={p}>
          Pilih Gaya retakan di bawah pratinjau, lalu ketuk atau klik di mana saja untuk meretakkan kaca di titik itu. Setiap ketukan menambah
          retakan baru, sehingga layar retak menyebar seperti kaca sungguhan.
        </p>
        <Table
          caption="Gaya efek layar retak dan tampilannya"
          head={['Gaya', 'Terlihat seperti']}
          rows={[
            ['Sarang laba-laba', 'Layar retak klasik: retakan panjang menyebar dari satu titik benturan'],
            ['Benturan di sudut', 'HP yang jatuh dan mendarat di sudutnya'],
            ['Hancur', 'Layar pecah dan hancur dengan serpihan kaca di mana-mana'],
            ['Retak rambut', 'Retakan tipis dan realistis yang awalnya mudah terlewat'],
            ['LCD bocor', 'Bercak hitam dan berwarna seperti tinta dari panel yang rusak'],
            ['Garis mati', 'Garis vertikal terang, seperti layar retak yang kehilangan kolom piksel'],
          ]}
        />
      </Section>

      <Section wide id="computer-heading" title="Prank Efek Layar Retak di Komputer, Laptop, atau Chromebook">
        <ul className={ul}>
          <li>Untuk memalsukan layar komputer yang retak, buka halaman ini di laptop, PC, Chromebook, atau smart TV yang ingin Anda prank.</li>
          <li>Pilih Layar mati atau Wallpaper di menu Lainnya agar layar komputer yang retak terlihat seperti desktop asli.</li>
          <li>Tekan F atau ketuk Layar Penuh, lalu tambahkan beberapa retakan di tempat layar biasanya terbentur.</li>
          <li>Mundur dan tunggu. Kursor akan tersembunyi sendiri saat mouse tidak digerakkan.</li>
        </ul>
        <h3 className={h3}>Prank Layar HP Retak di iPhone, Android, atau iPad</h3>
        <p className={p}>
          Buka halaman ini di browser HP, pilih Layar kunci, ketuk Layar Penuh, lalu retakkan kaca di dekat sudut, tempat HP biasanya mendarat
          saat jatuh. Nyalakan Suara retak untuk efek yang lengkap.
        </p>
      </Section>

      <Section wide id="prank-heading" title="Tips Prank Efek Layar Retak">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Jangan terlalu lama.</strong> Prank layar retak palsu terbaik berakhir dengan pengungkapan cepat
            dan tawa.
          </li>
          <li>
            <strong className="text-foreground">Pilih orang yang tepat.</strong> Lewati siapa pun yang akan benar-benar sedih jika perangkatnya
            rusak.
          </li>
          <li>
            <strong className="text-foreground">Segera ungkapkan.</strong> Tekan Esc atau tutup tab dan layar kembali normal. Tidak ada yang
            berubah di perangkat.
          </li>
        </ul>
        <p className={p}>
          Mau prank lain? Coba <Link href="/hacked-screen" className={link}>Simulator Layar Diretas</Link> atau{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>Layar Biru Kematian Palsu</Link>.
        </p>
      </Section>

      <Section wide id="image-heading" title="Gambar dan Wallpaper Efek Layar Retak">
        <p className={p}>
          Mau gambar layar retak alih-alih efek langsung? Retakkan kaca sesuai keinginan, lalu buka Lainnya dan gunakan Unduh PNG. Pasang
          gambarnya sebagai layar kunci HP atau wallpaper komputer untuk prank yang bertahan seharian.
        </p>
      </Section>

      <Section wide id="real-heading" title="Bukan Efek Layar Retak? Cara Cek Kerusakan Asli">
        <p className={p}>Tidak sedang mencari prank? Pemeriksaan cepat ini membantu membedakan kerusakan asli dari masalah software:</p>
        <Table
          caption="Tanda layar yang benar-benar rusak"
          head={['Yang Anda lihat', 'Cek dengan']}
          rows={[
            ['Retakan yang terasa atau terlihat saat layar mati', <Link key="w" href="/" className={link}>Layar putih</Link>],
            ['Bercak hitam atau tinta yang menyebar', <Link key="d" href="/dead-pixel-test" className={link}>Tes Piksel Mati</Link>],
            ['Sebagian layar tidak merespons sentuhan', <Link key="t" href="/touch-screen-test" className={link}>Tes Layar Sentuh</Link>],
            ['Garis, kedipan, atau warna aneh', <Link key="s" href="/screen-problems" className={link}>Panduan masalah layar</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
