import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tes Frame Rate (Bahasa Indonesia). Urutan: tes FPS / cek FPS → hasil per frame rate → FPS vs refresh rate →
 * FPS di game. Nama tombol mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function FrameRateGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Tes Frame Rate (FPS): Bandingkan Frame Rate Berdampingan">
        <p className={p}>
          Tes frame rate atau tes FPS ini menggerakkan blok yang sama di lima jalur, masing-masing dengan frame rate berbeda, sehingga Anda bisa
          melihat perbedaannya sendiri:
        </p>
        <ul className={ul}>
          <li>Jalur 15, 24, 30, dan 60 FPS, masing-masing hanya bergerak pada frame-nya sendiri, seperti video pada frame rate tersebut.</li>
          <li>Jalur maks. yang bergerak di setiap frame yang ditampilkan layar Anda, diberi label FPS Anda yang sebenarnya.</li>
          <li>&ldquo;Layar Anda:&rdquo; menunjukkan FPS tertinggi yang bisa ditampilkan layar dan browser Anda, diukur secara langsung.</li>
        </ul>
        <p className={p}>
          Gunakan Kecepatan (120 sampai 1.800 px/dtk) untuk mempercepat gerakan, tekan Jeda untuk menghentikannya, dan ketuk dua kali untuk
          layar penuh. Jalankan tes FPS online ini di browser apa pun, tanpa memasang apa pun.
        </p>
      </Section>

      <Section wide id="results-heading" title="Hasil Tes Frame Rate: Seperti Apa Setiap Frame Rate">
        <Table
          caption="Frame rate umum"
          head={['Frame rate', 'Waktu per frame', 'Tempat Anda melihatnya']}
          rows={[
            ['15 FPS', '66,7 md', 'Patah-patah; video call lambat, webcam lama'],
            ['24 FPS', '41,7 md', 'Film dan sebagian besar tayangan streaming'],
            ['30 FPS', '33,3 md', 'TV, YouTube, game konsol'],
            ['60 FPS', '16,7 md', 'Game dan video olahraga yang mulus'],
            ['120+ FPS', '8,3 md atau kurang', 'Monitor dan HP dengan refresh rate tinggi'],
          ]}
        />
        <p className={p}>Cek FPS cepat: jika jalur maks. tidak terlihat lebih mulus dari 60, layar Anda kemungkinan berjalan di 60 Hz.</p>
      </Section>

      <Section wide id="hz-heading" title="Tes Frame Rate vs Tes Refresh Rate">
        <p className={p}>
          Frame rate (FPS) adalah berapa banyak frame yang digambar setiap detik; refresh rate (Hz) adalah seberapa sering monitor bisa
          menampilkan frame baru. Layar tidak bisa menampilkan FPS lebih tinggi dari Hz-nya, jadi dalam tes frame rate jalur maks. dibatasi
          oleh refresh rate Anda.
        </p>
        <p className={p}>
          Untuk cek refresh rate dengan tepat, lengkap dengan waktu frame dan frame terlambat, jalankan{' '}
          <Link href="/screen-refresh-rate-test" className={link}>Tes Refresh Rate Layar</Link>. Untuk jejak di belakang benda bergerak, coba{' '}
          <Link href="/monitor-ghosting-test" className={link}>Tes Ghosting Monitor</Link>.
        </p>
      </Section>

      <Section wide id="games-heading" title="Tes Frame Rate untuk Game">
        <p className={p}>
          Alat online mengukur browser, bukan game Anda, dan tes FPS ini tidak bisa melihat ke dalam game. Untuk melihat FPS di dalam game,
          gunakan overlay:
        </p>
        <ul className={ul}>
          <li>Windows: tekan Win + G dan buka widget Performance di Xbox Game Bar.</li>
          <li>Steam: nyalakan penghitung FPS di pengaturan In Game Steam.</li>
          <li>NVIDIA atau AMD: overlay performa di aplikasi driver grafis.</li>
        </ul>
      </Section>
    </div>
  )
}
