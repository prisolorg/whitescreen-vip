import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Screensaver Logo DVD (Bahasa Indonesia). Diterjemahkan dari panduan bahasa Inggris dengan istilah pencarian Indonesia:
 * screensaver DVD / logo DVD memantul → easter egg Google → TV, streaming, monitor kedua → logo & GIF → kena sudut.
 * Nama tombol mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function DvdScreensaverGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="bounce-heading" title="Screensaver Logo DVD: Logo DVD yang Memantul">
        <p className={p}>
          Screensaver logo DVD adalah logo DVD memantul yang dulu muncul di pemutar DVD saat dibiarkan diam. Logo bergerak diagonal dengan
          kecepatan tetap dan berganti warna setiap kali menyentuh tepi layar, bergiliran di antara 10 warna tanpa mengulang warna terakhir.
        </p>
        <ul className={ul}>
          <li>Ketuk layar dua kali atau tekan F untuk menjalankannya dalam layar penuh.</li>
          <li>Buka Lainnya untuk mengubah Kecepatan dan Ukuran logo.</li>
          <li>Penghitung mencatat setiap pantulan dan setiap kali logo tepat kena sudut.</li>
          <li>Gunakan Jeda untuk menghentikan logo, lalu Lanjutkan untuk meneruskannya.</li>
        </ul>
      </Section>

      <Section wide id="google-heading" title="Easter Egg Google dan Screensaver Logo DVD">
        <p className={p}>
          Mencari &quot;DVD screensaver&quot; di Google kadang mengubah logo Google menjadi logo bergaya DVD yang memantul di halaman hasil
          pencarian. Easter egg seperti ini datang dan pergi, dan tidak berjalan dalam layar penuh.
        </p>
        <p className={p}>
          Halaman ini memberi Anda logo memantul yang sama kapan saja, di browser apa pun, lengkap dengan layar penuh, penghitung sudut, serta
          pengaturan kecepatan dan ukuran.
        </p>
      </Section>

      <Section wide id="tv-heading" title="Screensaver Logo DVD di TV, Streaming, atau Monitor Kedua">
        <Table
          caption="Tempat memakai screensaver logo DVD"
          head={['Kegunaan', 'Caranya']}
          rows={[
            ['Smart TV', 'Buka halaman ini di browser TV, atau cast tab browser, lalu masuk ke layar penuh'],
            ['Jeda streaming atau layar BRB', 'Tambahkan jendela ini sebagai window capture di OBS selama Anda pergi sebentar'],
            ['Monitor kedua', 'Seret jendela ke layar yang sedang tidak dipakai, lalu masuk ke layar penuh'],
            ['Ruang tunggu atau kantor', 'Biarkan berjalan di layar cadangan untuk sedikit nostalgia'],
          ]}
        />
      </Section>

      <Section wide id="logo-heading" title="Logo dan GIF Screensaver Logo DVD">
        <p className={p}>
          Logo di sini digambar langsung di browser Anda: tulisan &quot;DVD&quot; tebal di atas cakram dengan potongan tulisan
          &quot;VIDEO&quot;, yang berganti warna di setiap pantulan. Logo resmi DVD Video adalah merek dagang DVD Format/Logo Licensing
          Corporation, jadi logo itu tidak tersedia sebagai unduhan PNG.
        </p>
        <h3 className={h3}>Membuat GIF Screensaver DVD</h3>
        <p className={p}>
          Jalankan screensaver dalam layar penuh dan rekam layar dengan perekam bawaan (Snipping Tool di Windows, bilah Screenshot di Mac, atau
          perekam layar di ponsel), lalu ubah klipnya menjadi GIF DVD. Rekam sampai logo kena sudut agar loop-nya sempurna.
        </p>
      </Section>

      <Section wide id="corner-heading" title="Apakah Screensaver Logo DVD Akan Kena Sudut?">
        <p className={p}>
          Ya, tetapi seberapa sering tergantung pada bentuk layar, ukuran logo, dan posisi awalnya. Logo DVD baru kena sudut jika menyentuh sisi
          samping dan sisi atas atau bawah pada saat yang sama. Di beberapa ukuran layar hal itu sering terjadi; di ukuran lain bisa lama sekali.
          Mengubah ukuran logo atau ukuran jendela memberi lintasan baru.
        </p>
        <p className={p}>
          Itulah yang membuatnya jadi permainan DVD yang seru: semua orang menebak kapan logo kena sudut berikutnya, dan penghitung yang
          menentukan. Untuk layar diam lainnya, coba{' '}
          <Link href="/flip-clock-screensaver" className={link}>Screensaver Jam Flip</Link> atau{' '}
          <Link href="/matrix-screensaver" className={link}>Screensaver Hujan Matrix</Link>.
        </p>
      </Section>
    </div>
  )
}
