import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tes Layar Sentuh (Bahasa Indonesia). Urutan: tes layar sentuh / cek touchscreen → ghost touch dan multi-sentuh →
 * tes layar HP, iPhone, Android, Samsung → kode tes. Nama mode dan tombol mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function TouchScreenGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="modes-heading" title="Tes Layar Sentuh: Tiga Cara Cek Touchscreen">
        <Table
          caption="Mode tes layar sentuh"
          head={['Mode', 'Yang dicek', 'Caranya']}
          rows={[
            ['Grid zona mati', 'Titik yang tidak merespons sentuhan', 'Usap setiap kotak sampai Tercakup menunjukkan 100%; kotak yang tetap gelap adalah zona mati'],
            ['Gambar', 'Pelacakan yang mulus tanpa celah', 'Gambar garis perlahan melintasi layar; garis putus atau melompat menunjukkan area yang lemah'],
            ['Multi-sentuh', 'Berapa banyak jari yang terbaca', 'Letakkan beberapa jari; Sentuhan dan Maks. menunjukkan jumlahnya'],
          ]}
        />
        <p className={p}>
          Tekan Hapus untuk mulai dari awal, dan tekan F atau ketuk Layar Penuh agar tes layar sentuh juga mencakup tepi layar.
        </p>
      </Section>

      <Section wide id="ghost-heading" title="Tes Layar Sentuh untuk Ghost Touch dan Multi-Sentuh">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Ghost touch:</strong> buka Gambar, lalu letakkan HP dan jangan menyentuhnya. Garis atau titik
            yang muncul sendiri adalah ghost touch.
          </li>
          <li>
            <strong className="text-foreground">Multi-sentuh:</strong> sebagian besar HP membaca 5 sampai 10 jari sekaligus. Lencana menunjukkan
            berapa titik sentuh yang dilaporkan perangkat Anda.
          </li>
          <li>
            <strong className="text-foreground">Sensitivitas:</strong> usapan ringan dan cepat di mode Gambar menunjukkan apakah sentuhan lembut
            terbaca.
          </li>
        </ul>
      </Section>

      <Section wide id="phone-heading" title="Tes Layar Sentuh di iPhone, Android, dan Samsung">
        <p className={p}>
          Tes layar sentuh berjalan di Safari, Chrome, atau browser HP apa pun, tanpa perlu memasang apa pun. Lepaskan casing tebal atau
          pelindung layar jika sentuhan di dekat tepi sering meleset, lalu tes lagi.
        </p>
        <p className={p}>
          Di banyak HP Samsung Galaxy, Anda juga bisa menekan *#0*#, kode tes layar sentuh yang membuka menu tes bawaan. Kode seperti ini
          tergantung merek dan model, dan sebagian HP tidak memilikinya.
        </p>
      </Section>

      <Section wide id="next-heading" title="Setelah Tes Layar Sentuh">
        <p className={p}>
          Jika sentuhan normal tetapi gambarnya bermasalah, periksa layarnya sendiri: jalankan{' '}
          <Link href="/dead-pixel-test" className={link}>Tes Piksel Mati</Link> untuk titik-titik, atau{' '}
          <Link href="/monitor-test" className={link}>tes layar</Link> untuk warna dan keseragaman.
        </p>
      </Section>
    </div>
  )
}
