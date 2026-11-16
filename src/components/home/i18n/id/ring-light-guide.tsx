import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Ring Light Online (Bahasa Indonesia). Urutan: ring light online / virtual → efek ring light untuk selfie →
 * lampu makeup dan cermin → warna. Nama pengaturan mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function RingLightGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Ring Light Online: Cara Memakainya">
        <p className={p}>
          Ring light online ini menggambar cincin bercahaya di layar, sehingga HP, tablet, atau monitor kedua menjadi ring light virtual.
          Letakkan di depan Anda, tepat di belakang kamera.
        </p>
        <ul className={ul}>
          <li>Atur Kecerahan dan pilih warna: Putih, Pink, Biru, atau Ungu.</li>
          <li>Buka Lainnya untuk mengubah Ukuran cincin dan Ketebalan, suhu warna putih, Isi bagian tengah, dan latar.</li>
          <li>Ketuk layar dua kali atau tekan F agar cincin memenuhi layar.</li>
        </ul>
      </Section>

      <Section wide id="effect-heading" title="Efek Ring Light Online untuk Selfie, Foto, dan Video">
        <p className={p}>
          Efek ring light adalah pantulan bulat yang terlihat di mata seseorang, ditambah cahaya lembut dan merata dengan sedikit bayangan.
          Untuk mendapatkannya:
        </p>
        <ul className={ul}>
          <li>Pegang layar lurus di depan wajah dengan kamera di tengah cincin.</li>
          <li>Biarkan Isi bagian tengah mati agar bentuk cincin muncul sebagai pantulan di mata Anda.</li>
          <li>Gunakan cincin yang lebih besar dan tebal untuk selfie yang lebih terang.</li>
        </ul>
      </Section>

      <Section wide id="makeup-heading" title="Ring Light Online untuk Makeup dan Cermin">
        <p className={p}>
          Cahaya putih dengan kecerahan penuh menampilkan warna asli, sehingga cocok sebagai lampu makeup. Sandarkan layar di samping cermin
          setinggi mata agar wajah Anda tersinari merata dari depan. Alat ini menerangi wajah Anda; alat ini tidak menampilkan kamera sebagai
          cermin.
        </p>
      </Section>

      <Section wide id="colors-heading" title="Warna Ring Light Online: Putih, Pink, Biru, dan Ungu">
        <Table
          caption="Warna ring light dan kapan memakainya"
          head={['Warna', 'Paling cocok untuk']}
          rows={[
            ['Putih', 'Makeup, video call, dan foto yang tampak alami; atur kehangatan di menu Lainnya'],
            ['Pink', 'Selfie yang lembut dan menawan'],
            ['Biru', 'Foto dan streaming bernuansa sejuk dan dramatis'],
            ['Ungu', 'Pencahayaan pesta dan kreatif'],
          ]}
        />
        <p className={p}>
          Butuh cahaya datar, bukan cincin? Coba <Link href="/zoom-lighting" className={link}>Pencahayaan Panggilan Video</Link> atau{' '}
          <Link href="/" className={link}>layar putih</Link> biasa.
        </p>
      </Section>
    </div>
  )
}
