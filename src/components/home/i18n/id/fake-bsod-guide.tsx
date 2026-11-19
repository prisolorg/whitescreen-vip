import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Layar Biru Kematian Palsu (Bahasa Indonesia). Diterjemahkan dari panduan bahasa Inggris dengan istilah pencarian Indonesia:
 * blue screen Windows / BSOD palsu → layar error dan kode stop → prank → blue screen asli.
 * Nama tombol dan teks layar mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function FakeBsodGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="styles-heading" title="Layar Biru Kematian Palsu: Windows 10, 11, dan Klasik">
        <p className={p}>Pilih gaya BSOD palsu dari menu Gaya di bawah pratinjau. Masing-masing meniru blue screen Windows yang asli:</p>
        <Table
          caption="Gaya layar biru kematian palsu"
          head={['Gaya', 'Yang ditampilkan']}
          rows={[
            ['Windows 10', 'Layar error biru terang dengan wajah sedih :(, penghitung persentase, kode QR, dan kode stop'],
            ['Windows 11', 'Tata letak yang sama dalam warna biru Windows 11 yang lebih gelap'],
            ['Hitam (baru)', 'Versi hitam yang dipakai rilis Windows 11 terbaru sebagai ganti biru'],
            ['Klasik (XP/7)', 'Layar biru kematian jadul berwarna biru tua dengan teks teknis putih'],
          ]}
        />
      </Section>

      <Section wide id="error-heading" title="Layar Error Layar Biru Kematian Palsu: Pesan dan Kode Stop">
        <p className={p}>
          Layar error Windows modern berbunyi &quot;PC Anda mengalami masalah dan perlu dimulai ulang. Kami sedang mengumpulkan info kesalahan,
          lalu kami akan memulai ulang untuk Anda.&quot; Di bawahnya, penghitung naik sampai 100% dan kode stop menyebutkan nama error-nya.
        </p>
        <p className={p}>Buka Lainnya untuk memilih salah satu kode stop asli berikut:</p>
        <ul className={ul}>
          <li>CRITICAL_PROCESS_DIED dan SYSTEM_SERVICE_EXCEPTION</li>
          <li>IRQL_NOT_LESS_OR_EQUAL dan PAGE_FAULT_IN_NONPAGED_AREA</li>
          <li>KMODE_EXCEPTION_NOT_HANDLED dan MEMORY_MANAGEMENT</li>
          <li>DPC_WATCHDOG_VIOLATION dan VIDEO_TDR_FAILURE</li>
        </ul>
        <p className={p}>Penggeser &quot;Capai 100% dalam&quot; mengatur lama penghitung naik, dari sekitar 10 detik sampai 2 menit.</p>
      </Section>

      <Section wide id="prank-heading" title="Prank Layar Biru Kematian Palsu: Cara Menyiapkannya">
        <ul className={ul}>
          <li>Buka layar crash komputer palsu ini di PC yang ingin Anda prank dan pilih gaya yang cocok dengan PC tersebut.</li>
          <li>Ketuk layar dua kali atau tekan F untuk masuk ke layar penuh.</li>
          <li>Tinggalkan. Penghitung terus naik dan kursor tersembunyi saat mouse diam.</li>
          <li>Gunakan Ulangi penghitung untuk menjalankannya lagi, dan tekan Esc untuk mengakhiri prank. Tidak ada yang berubah di komputer.</li>
        </ul>
        <h3 className={h3}>Mulai dengan Update Palsu</h3>
        <p className={p}>
          Untuk reaksi yang lebih besar, buka <Link href="/fake-windows-10-update" className={link}>Pembaruan Palsu Windows 10</Link> terlebih
          dahulu, lalu ketuk Picu prank BSOD agar update &quot;crash&quot; menjadi layar crash Windows. Di HP atau tablet,{' '}
          <Link href="/broken-screen" className={link}>Efek Layar Retak</Link> lebih cocok.
        </p>
      </Section>

      <Section wide id="real-heading" title="Bukan Layar Biru Kematian Palsu, tapi Asli?">
        <p className={p}>Blue screen asli berarti Windows berhenti untuk melindungi dirinya. Biasanya langkah-langkah ini bisa mengatasinya:</p>
        <ul className={ul}>
          <li>Catat kode stop yang muncul di bagian bawah layar.</li>
          <li>Mulai ulang dan pasang update Windows serta driver terbaru.</li>
          <li>Batalkan apa pun yang baru: aplikasi, driver, atau perangkat keras yang baru dipasang.</li>
          <li>Jika terus terjadi, cari kode stop tersebut di dukungan Microsoft.</li>
        </ul>
      </Section>
    </div>
  )
}
