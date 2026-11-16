import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pembaruan Palsu Windows 11 (Bahasa Indonesia). Menargetkan kata kunci Windows 11; kata kunci umum
 * "update Windows palsu" milik /fake-windows-10-update, ditautkan di bawah.
 */
export function FakeWindows11UpdateGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Pembaruan Palsu Windows 11: Cara Kerjanya">
        <p className={p}>
          Layar pembaruan palsu Windows 11 meniru tampilan modernnya: layar hitam, cincin yang berputar, &quot;Sedang mengerjakan
          pembaruan&quot;, persentase yang naik, dan &quot;Biarkan komputer tetap menyala dan tersambung ke listrik.&quot;
        </p>
        <ul className={ul}>
          <li>Persentase terus naik dan mulai lagi setelah 100%, jadi update tidak pernah selesai.</li>
          <li>Tekan Jeda untuk menghentikannya dan membuat update terlihat macet.</li>
          <li>Buka Lainnya untuk membuatnya lebih cepat atau lebih lambat.</li>
          <li>Tekan F atau ketuk Layar Penuh untuk menyembunyikan browser dan taskbar.</li>
        </ul>
      </Section>

      <Section wide id="prank-heading" title="Prank Pembaruan Palsu Windows 11: Cara Menyiapkannya">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Buka layar update palsu ini di PC Windows 11 yang ingin Anda prank.</li>
          <li>Tekan F atau ketuk Layar Penuh agar memenuhi layar.</li>
          <li>Biarkan berjalan. Cincin berputar dan persentase merayap naik.</li>
          <li>Untuk kejutan, ketuk Picu prank BSOD agar update &quot;crash&quot;.</li>
          <li>Tekan Esc untuk mengakhirinya. Tidak ada yang berubah di PC.</li>
        </ol>
      </Section>

      <Section wide id="compare-heading" title="Pembaruan Palsu Windows 11 vs Windows 10 dan XP">
        <Table
          caption="Layar update Windows palsu mana yang dipakai"
          head={['Layar', 'Terlihat seperti', 'Halaman']}
          rows={[
            ['Windows 11', 'Layar hitam, cincin berputar, persentase polos', 'Halaman ini'],
            ['Windows 10', 'Titik berputar dan "Sedang mengerjakan pembaruan. 14% selesai."', <Link key="w10" href="/fake-windows-10-update" className={link}>Pembaruan Palsu Windows 10</Link>],
            ['Windows XP', 'Penginstal retro dengan bilah kemajuan', <Link key="xp" href="/fake-windows-xp-update" className={link}>Instalasi Palsu Windows XP</Link>],
            ['Layar crash', 'Layar biru kematian', <Link key="bsod" href="/fake-blue-screen-of-death" className={link}>Layar Biru Kematian Palsu</Link>],
          ]}
        />
        <p className={p}>
          Layar loading atau layar upgrade Windows 11 yang asli bisa tertahan di satu angka cukup lama. Jika milik Anda tampak macet, beri waktu
          dan biarkan tetap tersambung ke listrik sebelum memulai ulang.
        </p>
      </Section>
    </div>
  )
}
