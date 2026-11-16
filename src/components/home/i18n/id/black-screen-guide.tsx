import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Layar Hitam (Bahasa Indonesia). Urutan: cara layar hitam penuh → gambar layar hitam → hitam pekat →
 * layar kosong dan halaman hitam → layar gelap untuk monitor kedua → cek layar.
 * Nama tombol mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function BlackScreenGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="howto-heading" title="Cara Membuka Layar Hitam dalam Layar Penuh">
        <ul className={ul}>
          <li>Ketuk pratinjau dua kali atau tekan F untuk layar hitam polos dari tepi ke tepi.</li>
          <li>Di HP, ketuk ikon layar penuh di sudut pratinjau.</li>
          <li>Nyalakan Biarkan layar tetap menyala agar layar tidak meredup atau tidur.</li>
          <li>Tekan Esc atau ketuk dua kali lagi untuk keluar. Kursor tersembunyi sendiri selama Anda diam.</li>
        </ul>
      </Section>

      <Section wide id="image-heading" title="Gambar Layar Hitam: Unduh Gambar Hitam atau PNG">
        <p className={p}>
          Butuh gambar layar hitam, bukan layar langsung? Gunakan Unduh di bawah pratinjau untuk menyimpan PNG hitam murni (#000000) dengan ukuran
          persis yang Anda butuhkan. Filenya lossless, jadi hitamnya tetap solid tanpa noise kompresi.
        </p>
        <Table
          caption="Ukuran gambar layar hitam yang bisa diunduh"
          head={['Ukuran', 'Piksel', 'Cocok untuk']}
          rows={[
            ['Full HD 1080p', '1920 × 1080', 'Video YouTube, slide, sebagian besar monitor'],
            ['QHD 1440p', '2560 × 1440', 'Monitor gaming dan laptop'],
            ['4K UHD', '3840 × 2160', 'Timeline video 4K dan TV'],
            ['8K UHD', '7680 × 4320', 'Proyek 8K dan layar yang sangat besar'],
            ['iPhone / Android', '1179 × 2556 / 1080 × 2400', 'Wallpaper HP, layar utama dan layar kunci'],
            ['iPad', '2048 × 2732', 'Wallpaper tablet'],
            ['Kustom', 'Ukuran apa pun, mis. 1080 × 1920', 'Video vertikal untuk Stories, Reels, dan Shorts'],
          ]}
        />
        <h3 className={h3}>Video Layar Hitam dan Editing</h3>
        <p className={p}>
          Masukkan PNG 1080p atau 4K ke editor video mana pun dan rentangkan sesuai durasi yang dibutuhkan. Bisa dipakai sebagai frame hitam untuk
          intro, fade, dan jeda antarklip, tanpa perlu merender klip terpisah.
        </p>
        <p className={p}>
          Ingin hitam yang lebih dalam atau bertekstur? Lihat koleksi{' '}
          <Link href="/backgrounds/black-background" className={link}>
            latar belakang hitam
          </Link>
          .
        </p>
      </Section>

      <Section wide id="pure-heading" title="Layar Hitam Pekat: Hitam Murni (#000000)">
        <p className={p}>
          Halaman ini menampilkan hitam murni, RGB 0, 0, 0, nilai paling gelap yang bisa diminta dari sebuah layar. Seberapa hitam tampilannya
          tergantung pada panel Anda.
        </p>
        <Table
          caption="Tampilan layar hitam murni di setiap jenis layar"
          head={['Layar', 'Yang Anda lihat', 'Alasannya']}
          rows={[
            ['OLED / AMOLED', 'Hitam pekat sejati, tanpa pendaran', 'Setiap piksel menghasilkan cahayanya sendiri dan mati saat hitam'],
            ['Mini-LED', 'Hitam yang sangat dalam', 'Zona local dimming meredupkan lampu latar'],
            ['LCD (IPS, VA, TN)', 'Abu-abu sangat gelap di ruangan gelap', 'Lampu latar tetap menyala di belakang panel'],
          ]}
        />
        <p className={p}>
          Tidak yakin layar Anda jenis apa? <Link href="/glossary/oled-vs-lcd" className={link}>OLED vs LCD</Link> menjelaskan perbedaannya.
        </p>
      </Section>

      <Section wide id="blank-heading" title="Layar Hitam sebagai Layar Kosong: Sembunyikan Tampilan">
        <p className={p}>
          Layar hitam kosong menyembunyikan semua yang ada di layar tanpa mematikannya, jadi aplikasi, unduhan, dan panggilan tetap berjalan.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Presentasi dan proyektor:</strong> kosongkan layar di antara slide atau saat orang berbicara.
          </li>
          <li>
            <strong className="text-foreground">Privasi:</strong> tutupi pekerjaan Anda dengan satu ketukan saat meninggalkan meja.
          </li>
          <li>
            <strong className="text-foreground">Fokus:</strong> bersihkan monitor kedua yang mengganggu.
          </li>
        </ul>
        <h3 className={h3}>Situs Layar Hitam: Halaman Hitam di Browser</h3>
        <p className={p}>
          Simpan situs layar hitam ini sebagai bookmark untuk membuka halaman hitam kapan pun dibutuhkan. Tidak ada hal lain yang dimuat, tanpa
          daftar, dan Anda bisa menyeret jendela ke monitor mana pun sebelum masuk ke layar penuh.
        </p>
      </Section>

      <Section wide id="dark-heading" title="Layar Hitam untuk Monitor Kedua: Layar Gelap dan Blackout">
        <p className={p}>
          Menonton film atau bermain game di satu layar? Pasang layar gelap di layar lainnya agar tidak menerangi ruangan. Pindahkan jendela ini
          ke monitor kedua, masuk ke layar penuh, dan nyalakan Biarkan layar tetap menyala.
        </p>
        <ul className={ul}>
          <li>Berfungsi sebagai layar blackout atau screensaver hitam tanpa mengubah pengaturan daya Anda.</li>
          <li>Di OLED, piksel hitam dimatikan, jadi hitam murni tidak mengausakan panel seperti gambar terang yang statis.</li>
          <li>Di LCD, turunkan juga kecerahan monitor untuk hasil paling gelap.</li>
        </ul>
      </Section>

      <Section wide id="check-heading" title="Tes Layar Hitam: Kebocoran Cahaya, Pendaran, dan Piksel Macet">
        <p className={p}>
          Di ruangan gelap, layar hitam penuh memudahkan Anda melihat beberapa masalah umum. Untuk piksel mati dan debu, cek juga{' '}
          <Link href="/" className={link}>layar putih</Link>:
        </p>
        <Table
          caption="Masalah layar yang terlihat pada layar hitam"
          head={['Yang Anda lihat', 'Jenisnya', 'Pelajari lebih lanjut']}
          rows={[
            ['Cahaya bocor di tepi', 'Kebocoran lampu latar', <Link key="b" href="/screen-problems/backlight-bleed" className={link}>Backlight bleed</Link>],
            ['Pendaran yang bergeser saat Anda bergerak', 'IPS glow', <Link key="g" href="/screen-problems/ips-glow" className={link}>IPS glow</Link>],
            ['Titik yang tetap menyala', 'Piksel macet atau hot pixel', <Link key="d" href="/dead-pixel-test" className={link}>Tes Piksel Mati</Link>],
            ['Banding atau semburat pada warna hampir hitam', 'Keseragaman OLED', <Link key="o" href="/oled-gray-test" className={link}>Uji Abu-abu OLED</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
