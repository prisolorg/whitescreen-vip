import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Tes Ghosting Monitor (Bahasa Indonesia). Urutan: tes ghosting → hasil (ghosting, smearing, overshoot) → cara
 * memperbaiki → laptop, TV, layar lain. Nama tombol mengikuti antarmuka alat dalam bahasa Indonesia.
 */
export function MonitorGhostingGuideId() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Tes Ghosting Monitor: Cara Menjalankannya">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Atur monitor ke refresh rate tertingginya, lalu ketuk dua kali tes ghosting monitor untuk layar penuh.</li>
          <li>Perhatikan target bergerak melintasi jalur gelap, abu-abu sedang, dan terang. Ikuti dengan mata, jangan menatap satu titik.</li>
          <li>Naikkan Kecepatan (240 sampai 2.400 px/dtk) sampai jejak muncul, lalu tekan Jeda untuk melihat frame yang berhenti.</li>
          <li>Ubah pengaturan overdrive monitor dan jalankan tes ghosting lagi untuk membandingkan.</li>
        </ol>
        <p className={p}>
          Dalam tes ghosting monitor, Grid acuan vertikal (di menu Lainnya) membantu Anda menilai panjang jejak. Setiap jalur memakai latar
          berbeda karena ghosting sering lebih parah pada warna gelap atau abu-abu sedang.
        </p>
      </Section>

      <Section wide id="results-heading" title="Hasil Tes Ghosting Monitor: Arti Jejaknya">
        <p className={p}>
          Apa itu ghosting pada monitor? Piksel yang berganti warna terlalu lambat meninggalkan salinan samar di belakang benda yang bergerak.
          Begini cara membaca tes ghosting monitor:
        </p>
        <Table
          caption="Ghosting, smearing, dan overshoot"
          head={['Yang terlihat di belakang target', 'Jenisnya', 'Penyebab umum']}
          rows={[
            ['Salinan atau jejak samar yang lebih gelap', 'Ghosting', 'Respons piksel lambat, overdrive mati atau terlalu rendah'],
            ['Noda gelap, paling parah di jalur gelap', 'Black smearing', 'Panel VA, perubahan gelap ke terang yang lambat'],
            ['Halo terang atau terbalik', 'Overshoot (inverse ghosting)', 'Overdrive diatur terlalu tinggi'],
            ['Tepi lembut dan buram tanpa salinan', 'Motion blur', 'Normal pada 60 Hz; berkurang pada refresh rate lebih tinggi'],
          ]}
        />
      </Section>

      <Section wide id="fix-heading" title="Atasi Masalah yang Ditunjukkan Tes Ghosting Monitor">
        <p className={p}>Monitor yang mengalami ghosting jarang perlu diperbaiki; pengaturan yang tepat biasanya memperpendek jejaknya.</p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Overdrive:</strong> disebut juga Response Time, Trace Free, atau OD di menu monitor. Pilih
            pengaturan dengan jejak terpendek tanpa halo terang, biasanya yang tengah.
          </li>
          <li>
            <strong className="text-foreground">Refresh rate:</strong> pastikan sudah maksimal dengan{' '}
            <Link href="/screen-refresh-rate-test" className={link}>Tes Refresh Rate Layar</Link>. Hz lebih tinggi berarti blur lebih sedikit.
          </li>
          <li>
            <strong className="text-foreground">Kabel dan port:</strong> gunakan DisplayPort atau kabel yang mendukung refresh rate penuh
            monitor Anda.
          </li>
          <li>
            <strong className="text-foreground">Mode gambar:</strong> pemrosesan tambahan seperti pengurangan noise dapat menambah jejak;
            matikan.
          </li>
        </ul>
      </Section>

      <Section wide id="screen-heading" title="Tes Ghosting Monitor di Laptop, TV, atau Layar Lain">
        <p className={p}>
          Ghosting layar sama saja di layar LCD atau OLED mana pun: buka tes ghosting monitor di laptop, TV, atau tablet yang ingin dicek dan
          jalankan dalam layar penuh. TV sering punya mode game yang memangkas pemrosesan dan mengurangi ghosting.
        </p>
        <p className={p}>
          &ldquo;Ghost screen&rdquo; juga bisa berarti gambar samar yang tetap ada di layar saat tidak ada yang bergerak. Itu retensi gambar
          atau burn-in, bukan ghosting gerakan; cek dengan <Link href="/screen-burn-in-test" className={link}>Tes Burn-in Layar</Link>. Detail
          lebih lanjut ada di <Link href="/screen-problems/ghosting" className={link}>panduan ghosting</Link>.
        </p>
      </Section>
    </div>
  )
}
