import Link from 'next/link'
import { Section, link, p, ul } from '@/components/home/guide-parts'

/**
 * Simulator Layar Diretas (Bahasa Indonesia). Urutan: layar diretas / prank hack → yang ditampilkan → etika prank →
 * pop-up "Anda telah diretas" yang asli (peringatan penipuan). Nama tombol dan teks layar mengikuti antarmuka alat.
 */
export function HackedScreenGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Simulator Layar Diretas: Cara Menyiapkan Prank">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Pilih gaya: Peringatan merah atau Terminal hijau.</li>
          <li>Buka Lainnya untuk mengetik Judul Anda sendiri (bawaannya SISTEM DIRETAS) atau menyembunyikan catatan &ldquo;cuma bercanda&rdquo;.</li>
          <li>Nyalakan Suara sirene jika Anda ingin alarm.</li>
          <li>Ketuk dua kali atau tekan F untuk layar penuh, lalu tinggalkan komputer agar ditemukan teman Anda.</li>
        </ol>
        <p className={p}>Tekan Esc untuk keluar dari layar penuh dan mengakhiri prank layar diretas.</p>
      </Section>

      <Section wide id="shows-heading" title="Apa yang Ditampilkan Simulator Layar Diretas">
        <ul className={ul}>
          <li>Peringatan berkedip &ldquo;pelanggaran keamanan terdeteksi&rdquo; dan judul yang glitch.</li>
          <li>Langkah peretasan palsu seperti &ldquo;Melewati firewall&rdquo; dan &ldquo;Mendekripsi brankas kata sandi&rdquo;.</li>
          <li>Bilah kemajuan dan hitung mundur 59 detik yang sama-sama berulang, sehingga layar diretas palsu tidak pernah benar-benar selesai.</li>
          <li>Log palsu yang bergulir, garis pindai, dan pendaran merah atau hijau yang berdenyut.</li>
        </ul>
        <p className={p}>
          Tidak ada yang dipasang dan tidak ada yang disentuh di komputer. Prank layar diretas ini hanya sebuah halaman web.
        </p>
      </Section>

      <Section wide id="rules-heading" title="Simulator Layar Diretas: Tetap Seru">
        <ul className={ul}>
          <li>Prank orang yang akan tertawa, dan ungkapkan leluconnya dalam satu menit.</li>
          <li>Hindari komputer kantor, karena bisa membuat tim IT panik, dan siapa pun yang mudah takut.</li>
          <li>Biarkan catatan &ldquo;cuma bercanda&rdquo; tetap tampil jika Anda tidak yakin bagaimana reaksi mereka.</li>
        </ul>
        <p className={p}>
          Prank layar lainnya: <Link href="/hacker-typer" className={link}>Ketik Kode Hacker</Link>,{' '}
          <Link href="/broken-screen" className={link}>Efek Layar Retak</Link>, dan{' '}
          <Link href="/fake-blue-screen-of-death" className={link}>Layar Biru Kematian Palsu</Link>.
        </p>
      </Section>

      <Section wide id="real-heading" title="Bukan Simulator Layar Diretas? Pop-up Peringatan Asli">
        <p className={p}>
          Layar &ldquo;Anda telah diretas&rdquo; yang tidak Anda buka sendiri, yang meminta Anda menelepon nomor tertentu atau membayar, hampir
          selalu penipuan:
        </p>
        <ul className={ul}>
          <li>Jangan menelepon nomor itu, membayar, atau mengizinkan siapa pun terhubung ke komputer Anda.</li>
          <li>Tutup browser; jika tidak mau tertutup, gunakan Task Manager (Ctrl + Shift + Esc) atau Force Quit di Mac.</li>
          <li>Jalankan antivirus, dan ganti kata sandi dari perangkat lain jika Anda sempat memasukkannya.</li>
        </ul>
      </Section>
    </div>
  )
}
