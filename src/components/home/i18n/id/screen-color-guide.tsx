import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Uji Warna Layar Monitor (Bahasa Indonesia). Urutan: tes warna layar / pola → cara menjalankan → monitor, TV, HP →
 * batasan: akurasi dan perubahan warna. Kata kunci "cek layar" milik halaman Uji Monitor Lengkap.
 * Nama pola mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function ScreenColorGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="patterns-heading" title="Pola Uji Warna Layar Monitor dan Yang Perlu Dicari">
        <p className={p}>
          Tes warna layar ini punya tujuh pola layar penuh, dan setiap gambar tes warna memeriksa hal yang berbeda:
        </p>
        <Table
          caption="Pola uji warna layar"
          head={['Pola', 'Yang dicek', 'Layar yang baik menunjukkan']}
          rows={[
            ['Bilah warna', 'Reproduksi warna dasar', 'Delapan warna yang jelas dan terpisah tanpa semburat'],
            ['Gradasi RGB', 'Gradasi dan clipping', 'Gradasi halus dari hitam tanpa tangga; ujung terang tidak mendatar terlalu cepat'],
            ['Spektrum warna', 'Setiap rona di antaranya', 'Pelangi halus tanpa pita atau lompatan'],
            ['Tingkat saturasi', 'Intensitas warna', 'Sepuluh tingkat dari abu-abu ke merah penuh, masing-masing berbeda'],
            ['Merah, Hijau, Biru', 'Setiap warna subpiksel secara terpisah', 'Satu warna rata dari tepi ke tepi, tanpa titik gelap'],
          ]}
        />
      </Section>

      <Section wide id="how-heading" title="Cara Menjalankan Uji Warna Layar Monitor">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Matikan mode malam, filter cahaya biru, dan kecerahan otomatis agar warna layar tidak bergeser.</li>
          <li>Ketuk dua kali uji warna layar untuk layar penuh, agar hanya layar warna yang terlihat.</li>
          <li>Ketuk layar, gunakan tombol panah, atau pilih pola berdasarkan namanya. Siklus otomatis menggantinya untuk Anda.</li>
          <li>Lihat dari depan, lalu dari samping: pada sebagian panel, warna tampilan bergeser jika dilihat dari sudut.</li>
        </ol>
        <p className={p}>
          Butuh satu layar warna solid saja? Buka <Link href="/" className={link}>layar putih</Link>,{' '}
          <Link href="/red-screen" className={link}>layar merah</Link>, atau halaman mana pun di{' '}
          <Link href="/color-screens" className={link}>layar warna</Link>.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Uji Warna Layar Monitor, TV, atau HP">
        <ul className={ul}>
          <li>Monitor: gunakan Gradasi RGB sebagai tes warna monitor, lalu atur suhu warna atau mode gambar di menunya.</li>
          <li>TV: buka uji warna layar di browser TV atau cast tab dari laptop. Mode Movie atau Filmmaker biasanya menampilkan warna paling akurat.</li>
          <li>HP: naikkan kecerahan dan bandingkan mode warna Natural dan Vivid, jika HP Anda memilikinya.</li>
          <li>Bidang Merah, Hijau, dan Biru juga berfungsi sebagai tes RGB untuk subpiksel macet.</li>
        </ul>
      </Section>

      <Section wide id="accuracy-heading" title="Batasan Uji Warna Layar Monitor: Akurasi dan Perubahan Warna">
        <p className={p}>
          Uji warna layar adalah cek warna dengan mata: alat ini menemukan semburat, banding, dan warna mati, tetapi akurasi warna yang
          sebenarnya membutuhkan kolorimeter perangkat keras; tidak ada situs web yang bisa mengukurnya. Memilih warna teks untuk situs web?
          Gunakan <Link href="/contrast-checker" className={link}>pemeriksa kontras warna</Link>.
        </p>
        <Table
          caption="Arti masalah warna"
          head={['Yang Anda lihat', 'Coba']}
          rows={[
            ['Semburat kuning atau biru di mana-mana', <Link key="y" href="/screen-problems/yellow-tint-on-screen" className={link}>Panduan semburat kuning</Link>],
            ['Tangga atau pita pada gradasi', <Link key="b" href="/screen-problems/color-banding" className={link}>Panduan color banding</Link>],
            ['Bercak atau area tidak rata (perubahan warna layar)', <Link key="u" href="/gray-screen" className={link}>Uji Keseragaman Layar</Link>],
            ['Logo pudar atau gambar bayangan', <Link key="bi" href="/screen-burn-in-test" className={link}>Tes Burn-in Layar</Link>],
            ['Ketajaman, gamma, dan lainnya (cek layar lengkap)', <Link key="m" href="/monitor-test" className={link}>Uji Monitor Lengkap</Link>],
          ]}
        />
      </Section>
    </div>
  )
}
