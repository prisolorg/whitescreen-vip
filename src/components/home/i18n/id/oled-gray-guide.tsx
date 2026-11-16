import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Uji Abu-abu OLED (Bahasa Indonesia). Urutan: tes OLED / gambar uji OLED → hasil (mura, banding, black crush) →
 * tes OLED vs tes burn-in → layar abu-abu polos.
 */
export function OledGrayGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Uji Abu-abu OLED: Cara Cek Warna Hampir Hitam">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Redupkan ruangan dan atur kecerahan layar sekitar 50%.</li>
          <li>Ketuk dua kali untuk layar penuh agar uji abu-abu OLED mencakup seluruh panel.</li>
          <li>Ganti di antara tingkat abu-abu gelap: 1%, 2%, 3%, 5%, 10%, 15%, dan 20%. Ketuk layar atau gunakan tombol panah.</li>
          <li>Akhiri dengan Gradasi hampir hitam, yang menampilkan abu-abu 0% sampai 20% berdampingan dalam 12 tingkat.</li>
        </ol>
        <p className={p}>
          Setiap gambar uji OLED harus terlihat datar dan rata, dan setiap tingkat gradasi harus sedikit berbeda dari tingkat berikutnya. Tes OLED
          ini juga berfungsi sebagai tes grayscale di HP, TV, laptop, atau monitor apa pun.
        </p>
      </Section>

      <Section wide id="results-heading" title="Hasil Uji Abu-abu OLED: Yang Perlu Dicari">
        <Table
          caption="Masalah umum OLED pada warna hampir hitam"
          head={['Yang Anda lihat', 'Jenisnya', 'Umum?']}
          rows={[
            ['Bercak berawan pada abu-abu gelap', 'Mura (panel tidak rata)', 'Sedikit masih normal pada 1–5%'],
            ['Pita atau semburat warna di sepanjang gradasi', 'Banding hampir hitam', 'Tergantung panel dan mode gambar'],
            ['Tingkat pertama gradasi semuanya tampak hitam', 'Black crush', 'Cek kecerahan dan mode gambar'],
            ['Semburat hijau atau magenta pada abu-abu gelap', 'Semburat hampir hitam', 'Tergantung panel'],
          ]}
        />
        <p className={p}>
          Nilailah dari jarak pandang normal Anda. Dalam uji abu-abu OLED, mura samar pada bidang 1% itu umum; masalah yang terlihat saat
          menonton film atau bermain game lebih penting.
        </p>
      </Section>

      <Section wide id="burn-heading" title="Uji Abu-abu OLED vs Tes Burn-in">
        <p className={p}>
          Uji abu-abu OLED ini memeriksa nada gelap, bukan burn-in. Burn-in paling jelas terlihat pada bidang yang lebih terang seperti abu-abu
          50%, merah, dan biru:
        </p>
        <ul className={ul}>
          <li>
            Untuk cek burn-in OLED, gunakan <Link href="/oled-burn-in-test" className={link}>Uji Burn-In Layar OLED</Link>.
          </li>
          <li>
            Untuk mengecek, dan mencoba menghilangkan, retensi gambar di layar apa pun, gunakan{' '}
            <Link href="/screen-burn-in-test" className={link}>Tes Burn-in Layar</Link>.
          </li>
        </ul>
      </Section>

      <Section wide id="gray-heading" title="Uji Abu-abu OLED atau Layar Abu-abu Polos?">
        <p className={p}>
          Butuh satu layar abu-abu solid, bukan tingkat uji? Buka <Link href="/gray-screen" className={link}>layar abu-abu</Link>, atau{' '}
          <Link href="/black-screen" className={link}>layar hitam</Link> untuk melihat hitam OLED yang sebenarnya. Untuk pemeriksaan lengkap
          warna, ketajaman, dan gamma, jalankan <Link href="/monitor-test" className={link}>tes layar</Link>.
        </p>
      </Section>
    </div>
  )
}
