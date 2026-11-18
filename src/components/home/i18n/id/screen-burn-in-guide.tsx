import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tes Burn-in Layar (Bahasa Indonesia). Urutan: tes burn-in / cek layar terbakar → burn-in atau retensi gambar →
 * perbaikan → HP, LCD, monitor. Kata kunci OLED/AMOLED milik halaman Uji Burn-In Layar OLED.
 * Nama tombol mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function ScreenBurnInGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Tes Burn-in Layar: Cara Cek Layar Anda">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Pilih Cek burn-in dan ketuk dua kali untuk layar penuh. Naikkan kecerahan.</li>
          <li>Mulai dengan Abu-abu 50%, bidang tempat burn-in paling jelas terlihat, lalu coba Abu-abu 20%.</li>
          <li>Ganti ke putih, merah, hijau, biru, dan hitam (<Link href="/" className={link}>layar putih</Link> penuh juga membantu). Atau nyalakan Ganti otomatis (4 dtk) di menu Lainnya untuk mengganti bidang setiap 4 detik.</li>
          <li>Cari bentuk samar yang tidak seharusnya ada: taskbar, keyboard, ikon aplikasi, jam, atau logo saluran TV.</li>
        </ol>
        <p className={p}>
          Tes burn-in layar paling mudah jika Anda tahu di mana mencarinya: burn-in biasanya cocok dengan apa pun yang paling lama tampil di
          layar.
        </p>
      </Section>

      <Section wide id="results-heading" title="Hasil Tes Burn-in Layar: Burn-in atau Retensi Gambar?">
        <p className={p}>
          Apa itu burn-in layar? Gambar yang membekas di layar setelah menampilkan gambar yang sama dalam waktu lama. Tes burn-in layar
          menunjukkan keduanya, dan waktu yang membedakannya:
        </p>
        <Table
          caption="Burn-in vs retensi gambar"
          head={['', 'Retensi gambar', 'Burn-in']}
          rows={[
            ['Apa itu', 'Gambar bayangan yang bertahan sementara', 'Piksel yang aus tidak merata, secara permanen'],
            ['Berapa lama', 'Memudar dalam hitungan menit hingga jam', 'Tidak memudar'],
            ['Umum pada', 'Monitor LCD, TV, laptop', 'HP, TV, dan monitor OLED dan AMOLED'],
            ['Bisakah perbaikan membantu?', 'Sering bisa', 'Tidak; hanya bisa membuatnya kurang terlihat'],
          ]}
        />
        <p className={p}>
          Baca lebih lanjut di panduan <Link href="/screen-problems/screen-burn-in" className={link}>burn-in layar</Link> dan{' '}
          <Link href="/screen-problems/image-retention" className={link}>retensi gambar</Link>.
        </p>
      </Section>

      <Section wide id="fix-heading" title="Perbaikan di Tes Burn-in Layar: Bisakah Burn-in Diperbaiki?">
        <p className={p}>
          Pilih Perbaikan burn-in, tekan Mulai perbaikan, dan biarkan layar berjalan. Di menu Lainnya Anda bisa memilih Pola perbaikan dan
          Durasi 1 sampai 60 menit (bawaan 10):
        </p>
        <ul className={ul}>
          <li><strong className="text-foreground">Sapuan putih:</strong> bilah putih yang bergerak, tanpa kedipan.</li>
          <li><strong className="text-foreground">Siklus warna:</strong> warna layar penuh yang berganti dengan cepat.</li>
          <li><strong className="text-foreground">Noise warna:</strong> piksel berwarna acak.</li>
        </ul>
        <p className={p}>
          Siklus warna dan Noise warna berkedip; gunakan Sapuan putih jika cahaya berkedip mengganggu Anda. Setelah itu, jalankan tes burn-in
          layar lagi. Jika gambarnya masih ada setelah beberapa kali, kemungkinan besar itu burn-in permanen. Untuk mencegahnya, turunkan
          kecerahan, sembunyikan bilah statis, dan gunakan batas waktu layar.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Tes Burn-in Layar di HP, LCD, atau Monitor">
        <ul className={ul}>
          <li>
            HP dan iPhone: burn-in layar HP terlihat sebagai garis bentuk keyboard atau status bar. Buka tes burn-in layar di browser dan cek
            bidang abu-abu dengan kecerahan penuh.
          </li>
          <li>Monitor LCD dan laptop: burn-in LCD yang sebenarnya jarang terjadi; tes burn-in LCD biasanya menemukan retensi gambar yang bisa dihilangkan dengan perbaikan.</li>
          <li>
            Layar OLED dan AMOLED paling cepat aus. Untuk layar tersebut, gunakan{' '}
            <Link href="/oled-burn-in-test" className={link}>Uji Burn-In Layar OLED</Link>.
          </li>
        </ul>
        <p className={p}>
          Melihat titik, bukan bentuk? Coba <Link href="/dead-pixel-test" className={link}>Tes Piksel Mati</Link>, atau{' '}
          <Link href="/gray-screen" className={link}>Uji Keseragaman Layar</Link> untuk bercak dan kecerahan yang tidak merata.
        </p>
      </Section>
    </div>
  )
}
