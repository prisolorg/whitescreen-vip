import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Layar Merah Muda (Bahasa Indonesia). Orang Indonesia juga mencari "layar pink". Urutan: lampu pink untuk selfie,
 * foto, TikTok → nuansa hot pink → latar dan wallpaper. Nama pengaturan mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function PinkScreenGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="light-heading" title="Cahaya Layar Merah Muda untuk Selfie, Foto, dan TikTok">
        <p className={p}>
          Layar merah muda (pink) adalah lampu pink yang mudah dan membuat wajah tampak menawan: melembutkan kulit dan menambah cahaya hangat
          tanpa lampu LED pink atau perlengkapan tambahan. Ketuk pratinjau dua kali untuk layar penuh dan nyalakan Biarkan layar tetap menyala.
          Untuk cahaya netral yang sesuai aslinya, gunakan <Link href="/" className={link}>layar putih</Link>.
        </p>
        <Table
          caption="Cara memakai layar merah muda sebagai lampu"
          head={['Kegunaan', 'Pengaturan', 'Tips']}
          rows={[
            ['Selfie dan foto', 'Kecerahan 100%', 'Pegang HP kedua atau tablet sedikit di samping wajah'],
            ['FaceTime dan video call', 'Kecerahan 70–100%', 'Letakkan layar di belakang kamera, menghadap Anda'],
            ['Video TikTok dan lip sync', 'Kecerahan 100%, Hangat', 'Matikan lampu ruangan agar cahaya pink lebih menonjol'],
            ['Lampu kamar dan suasana', 'Kecerahan 40–70%', 'Arahkan layar ke dinding untuk menyebarkan cahayanya'],
          ]}
        />
      </Section>

      <Section wide id="shade-heading" title="Warna Layar Merah Muda: Hot Pink, Pink Terang, dan Nuansa Lebih Gelap">
        <p className={p}>
          Layar hot pink ini menampilkan #FF69B4 (RGB 255, 105, 180), pink terang dengan sedikit unsur biru. Geser nuansanya dengan kontrol di
          bawah pratinjau.
        </p>
        <Table
          caption="Nuansa merah muda dan cara mendapatkannya"
          head={['Nuansa', 'Cara mendapatkannya', 'Tampilannya']}
          rows={[
            ['Hot pink / pink terang', 'Netral, Kecerahan 100%', 'Mencolok dan ceria (#FF69B4)'],
            ['Pink koral', 'Hangat', 'Pink yang lebih hangat, seperti persik (#FF4F64)'],
            ['Pink mawar', 'Sejuk', 'Lebih sejuk, sedikit lebih magenta (#DD5FB4)'],
            ['Pink tua', 'Kecerahan 50–70%', 'Pink yang lebih dalam dan redup (#80355A–#B34A7E)'],
            ['Pink muda / baby pink', <Link key="lp" href="/backgrounds/light-pink-background" className={link}>Latar belakang pink muda</Link>, 'Lembut dan pucat (#FFB6C1)'],
          ]}
        />
        <p className={p}>
          Ingin pink neon yang lebih kuat? Coba <Link href="/magenta-screen" className={link}>layar magenta</Link>.
        </p>
      </Section>

      <Section wide id="background-heading" title="Latar dan Wallpaper Layar Merah Muda">
        <p className={p}>
          Butuh latar hot pink sebagai file? Gunakan Unduh di bawah pratinjau. Kecerahan dan kehangatan Anda ikut diterapkan pada gambar.
        </p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Laptop dan desktop:</strong> 1080p, 2K atau 4K.
          </li>
          <li>
            <strong className="text-foreground">Wallpaper HP:</strong> Ponsel (1080×2400).
          </li>
          <li>
            <strong className="text-foreground">Lainnya:</strong> lebar dan tinggi kustom, seperti 1080×1920 untuk TikTok dan Reels.
          </li>
        </ul>
        <p className={p}>
          Ingin lebih lembut? Gunakan <Link href="/backgrounds/light-pink-background" className={link}>latar belakang pink muda</Link> (#FFB6C1),
          atau lihat koleksi <Link href="/backgrounds/pink-background" className={link}>latar belakang pink</Link>.
        </p>
      </Section>
    </div>
  )
}
