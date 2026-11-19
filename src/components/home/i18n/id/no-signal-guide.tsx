import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Layar Tanpa Sinyal (Bahasa Indonesia). Urutan: gaya layar no signal → bilah warna TV → ide pemakaian →
 * "no signal" di TV asli. Nama gaya dan pengaturan mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function NoSignalGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Layar Tanpa Sinyal: Tiga Gaya">
        <Table
          caption="Gaya layar tanpa sinyal"
          head={['Gaya', 'Yang ditampilkan']}
          rows={[
            ['Bilah warna', 'Bilah warna TV dengan kotak TIDAK ADA SINYAL di tengah'],
            ['Memantul', 'Kotak TIDAK ADA SINYAL yang melayang dan memantul di tepi, seperti TV yang menganggur'],
            ['Input biru', 'Layar biru polos dengan pesan, seperti yang ditampilkan banyak TV tanpa input'],
          ]}
        />
        <ul className={ul}>
          <li>Buka Lainnya untuk mengubah Pesan dan Nama input (bawaannya HDMI 1).</li>
          <li>Nyalakan nada 1 kHz untuk bunyi bip sinyal uji klasik.</li>
          <li>Tekan F atau ketuk Layar Penuh agar layar tanpa sinyal memenuhi TV, monitor, atau laptop.</li>
        </ul>
      </Section>

      <Section wide id="bars-heading" title="Bilah Warna TV di Layar Tanpa Sinyal: Arti Garis-garisnya">
        <p className={p}>
          Bilah warna TV adalah pola uji bergaris yang dipakai stasiun TV untuk menyelaraskan gambar. Layar tanpa sinyal ini menggambar versi
          bergaya SMPTE dalam tiga baris:
        </p>
        <ul className={ul}>
          <li>Atas: tujuh bilah abu-abu, kuning, sian, hijau, magenta, merah, dan biru.</li>
          <li>Tengah: strip tipis biru, magenta, sian, dan abu-abu, berselang-seling dengan hitam.</li>
          <li>Bawah: blok biru tua, putih, ungu, dan hitam.</li>
        </ul>
        <p className={p}>
          Bilah warna TV menyesuaikan dengan layar apa pun, termasuk TV 1080p dan 4K. Bilah ini untuk tampilan, bukan kalibrasi; untuk cek
          warna, gunakan <Link href="/screen-color-test" className={link}>Uji Warna Layar Monitor</Link>.
        </p>
      </Section>

      <Section wide id="uses-heading" title="Ide Memakai Layar Tanpa Sinyal dan Bilah Warna TV">
        <ul className={ul}>
          <li>Prank: tampilkan bilah warna TV atau layar TV tanpa sinyal dalam layar penuh dan lihat seseorang memeriksa setiap kabel.</li>
          <li>Properti film dan foto: bilah warna TV membuat TV di latar tampak meyakinkan tanpa siaran sungguhan.</li>
          <li>Streaming dan acara: layar &ldquo;be right back&rdquo; dengan pesan Anda sendiri.</li>
        </ul>
        <p className={p}>
          Prank layar lainnya: <Link href="/hacked-screen" className={link}>Simulator Layar Diretas</Link> dan{' '}
          <Link href="/fake-windows-10-update" className={link}>Pembaruan Palsu Windows 10</Link>.
        </p>
      </Section>

      <Section wide id="fix-heading" title="Layar Tanpa Sinyal di TV Asli? Solusi Cepat">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Tekan Input atau Source di remote dan pilih port tempat perangkat Anda tersambung.</li>
          <li>Pastikan perangkat (konsol, laptop, set-top box) menyala dan tidak dalam mode tidur.</li>
          <li>Cabut kabel HDMI di kedua ujungnya lalu colokkan kembali, atau coba port atau kabel lain.</li>
          <li>Mulai ulang TV dan perangkatnya.</li>
        </ol>
      </Section>
    </div>
  )
}
