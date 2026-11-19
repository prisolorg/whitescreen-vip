import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pembaruan Palsu Windows 10 (Bahasa Indonesia). Halaman ini memegang kata kunci umum "update Windows palsu".
 * Urutan: cara kerja layar update palsu → prank update Windows → sistem lain → update asli yang macet.
 * Nama tombol dan teks layar mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function FakeWindowsUpdateGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Pembaruan Palsu Windows 10: Cara Kerja Layar Update Palsu">
        <p className={p}>
          Layar pembaruan palsu Windows 10 ini meniru layar &quot;Sedang mengerjakan pembaruan&quot; di Windows 10: latar gelap, ikon loading
          yang berputar, persentase yang naik perlahan, dan pesan yang sudah akrab &quot;Jangan matikan PC Anda. Ini akan memakan waktu.&quot;
        </p>
        <ul className={ul}>
          <li>Persentase naik sendiri dan mulai lagi setelah 100%, jadi layar loading palsu ini tidak pernah selesai.</li>
          <li>Gunakan Jeda untuk menghentikannya, sehingga update terlihat macet.</li>
          <li>Buka Lainnya untuk membuat update lebih cepat atau lebih lambat.</li>
          <li>Tekan F atau ketuk Layar Penuh untuk menyembunyikan browser. Kursor tersembunyi saat mouse diam.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Prank Pembaruan Palsu Windows 10: Cara Menyiapkannya">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Buka update palsu ini di komputer yang ingin Anda prank.</li>
          <li>Tekan F atau ketuk Layar Penuh agar menutupi seluruh layar.</li>
          <li>Tinggalkan. Persentase terus naik selama mereka menunggu.</li>
          <li>Untuk kejutan, ketuk Picu prank BSOD dan update akan &quot;gagal&quot; dengan layar biru.</li>
          <li>Tekan Esc untuk mengakhirinya. Tidak ada yang berubah di komputer.</li>
        </ol>
        <p className={p}>
          Mau crash-nya saja? Gunakan <Link href="/fake-blue-screen-of-death" className={link}>Layar Biru Kematian Palsu</Link>, atau retakkan
          kacanya dengan <Link href="/broken-screen" className={link}>Efek Layar Retak</Link>.
        </p>
      </Section>

      <Section wide id="systems-heading" title="Selain Pembaruan Palsu Windows 10: Windows 11, XP, dan Sistem Lain">
        <Table
          caption="Layar update palsu untuk setiap sistem"
          head={['Sistem', 'Layar update palsu']}
          rows={[
            ['Windows 11', <Link key="w11" href="/fake-windows-11-update" className={link}>Pembaruan Palsu Windows 11</Link>],
            ['Windows XP', <Link key="xp" href="/fake-windows-xp-update" className={link}>Instalasi Palsu Windows XP</Link>],
            ['Startup Windows XP', <Link key="xpb" href="/fake-windows-xp-boot" className={link}>Booting Palsu Windows XP</Link>],
            ['Mac', <Link key="mac" href="/fake-mac-update" className={link}>Pembaruan Palsu Mac</Link>],
            ['Chromebook', <Link key="cros" href="/fake-chrome-os-update" className={link}>Pembaruan Palsu Chrome OS</Link>],
            ['Ubuntu / Linux', <Link key="ub" href="/fake-ubuntu-update" className={link}>Pembaruan Palsu Terminal Ubuntu</Link>],
            ['Android', <Link key="and" href="/fake-android-update" className={link}>Pembaruan Palsu Android</Link>],
          ]}
        />
      </Section>

      <Section wide id="real-heading" title="Pembaruan Palsu Windows 10 atau Update Asli yang Macet?">
        <p className={p}>
          Jika layar update atau layar loading Windows yang asli tampak macet, halaman ini tidak bisa memperbaikinya, tetapi langkah berikut
          biasanya membantu:
        </p>
        <ul className={ul}>
          <li>Beri waktu. Update besar bisa tertahan di satu persentase cukup lama.</li>
          <li>Perhatikan aktivitas drive. Lampu drive yang berkedip berarti proses masih berjalan.</li>
          <li>Hanya sebagai jalan terakhir, tahan tombol power untuk memulai ulang. Windows biasanya membatalkan update yang gagal dengan sendirinya.</li>
        </ul>
      </Section>
    </div>
  )
}
