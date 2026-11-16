import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pembaruan Palsu Mac (Bahasa Indonesia). Set kata kunci kecil: layar update/loading Mac dan Apple →
 * prank → iPad, iPhone, dan sistem lain. Nama tombol mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function FakeMacUpdateGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Pembaruan Palsu Mac: Cara Kerja Layarnya">
        <p className={p}>
          Layar pembaruan palsu Mac meniru layar instalasi macOS: logo di atas bilah kemajuan yang tipis dan baris seperti &quot;Sekitar 30 menit
          lagi&quot;. Saat bilah penuh, layar menjadi gelap, menampilkan logo seperti layar loading Apple yang asli, lalu update dimulai lagi.
        </p>
        <ul className={ul}>
          <li>Pilih layar hitam atau putih agar cocok dengan Mac tersebut.</li>
          <li>Buka Lainnya untuk mengatur Durasi pembaruan (5 sampai 120 menit) dan titik awal bilah.</li>
          <li>Matikan Sisa waktu untuk bilah yang tidak memberi petunjuk apa pun.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Prank Pembaruan Palsu Mac: Cara Menyiapkannya">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Buka halaman ini di MacBook atau iMac yang ingin Anda prank.</li>
          <li>Atur durasi update yang panjang, misalnya 120 menit, agar bilah hampir tidak bergerak.</li>
          <li>Tekan F atau ketuk Layar Penuh untuk menyembunyikan bilah menu dan Dock.</li>
          <li>Tinggalkan, lalu tekan Esc untuk mengakhiri lelucon. Tidak ada yang berubah di Mac.</li>
        </ol>
      </Section>

      <Section wide id="devices-heading" title="Pembaruan Palsu Mac di iPad, iPhone, atau Komputer Lain">
        <p className={p}>
          Alat ini berjalan di browser apa pun, jadi layar update Apple yang sama juga bisa dipakai sebagai layar update iPad palsu atau di iPhone
          lewat Safari. Ketuk Layar Penuh dan tampilannya memenuhi layar.
        </p>
        <p className={p}>
          Mau prank komputer lain? Gunakan <Link href="/fake-windows-10-update" className={link}>Pembaruan Palsu Windows 10</Link>,{' '}
          <Link href="/fake-chrome-os-update" className={link}>Pembaruan Palsu Chrome OS</Link> untuk Chromebook, atau{' '}
          <Link href="/fake-ubuntu-update" className={link}>Pembaruan Palsu Terminal Ubuntu</Link>. Untuk HP, coba{' '}
          <Link href="/broken-screen" className={link}>Efek Layar Retak</Link>.
        </p>
      </Section>
    </div>
  )
}
