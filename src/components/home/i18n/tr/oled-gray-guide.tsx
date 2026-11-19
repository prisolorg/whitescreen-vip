import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * OLED Gri Testi (Türkçe). İngilizce "OLED test" rehberinden çevrildi, Türkçe arama ifadeleriyle (OLED testi, gri ekran testi):
 * siyaha yakın tonları kontrol → sonuçlar → yanma testiyle farkı → düz gri ekran. Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function OledGrayGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="OLED Gri Testi: Siyaha Yakın Tonlar Nasıl Kontrol Edilir?">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Odayı karartın ve ekranı yaklaşık %50 parlaklığa ayarlayın.</li>
          <li>OLED testinin tüm paneli kaplaması için tam ekran amacıyla iki kez dokunun.</li>
          <li>Koyu gri seviyeleri arasında geçiş yapın: %1, %2, %3, %5, %10, %15 ve %20. Ekrana dokunun veya ok tuşlarını kullanın.</li>
          <li>%0 ile %20 griyi 12 basamakta yan yana gösteren siyaha yakın geçişle bitirin.</li>
        </ol>
        <p className={p}>
          Her OLED test görüntüsü düz ve eşit görünmeli, geçişteki her basamak bir sonrakinden ancak fark edilecek kadar farklı olmalıdır. Bu OLED
          testi her telefon, televizyon, laptop veya monitörde gri tonlama testi olarak çalışır.
        </p>
      </Section>

      <Section wide id="results-heading" title="OLED Gri Testi Sonuçları: Nelere Bakmalı?">
        <Table
          caption="Yaygın siyaha yakın OLED hataları"
          head={['Ne görüyorsunuz', 'Nedir', 'Yaygın mı?']}
          rows={[
            ['Koyu gri üzerinde lekeli, bulutlu alanlar', 'Mura (düzensiz panel)', '%1–5’te bir miktar normaldir'],
            ['Geçiş boyunca şeritler veya renk tonları', 'Siyaha yakın şeritlenme', 'Panele ve görüntü moduna göre değişir'],
            ['Geçişin ilk basamakları tamamen siyah görünüyor', 'Siyah ezilmesi (black crush)', 'Parlaklığı ve görüntü modunu kontrol edin'],
            ['Koyu gri üzerinde yeşil veya macenta ton', 'Siyaha yakın renk tonu', 'Panele göre değişir'],
          ]}
        />
        <p className={p}>
          Normal izleme mesafenizden değerlendirin. OLED gri testinde %1 alanında hafif mura yaygındır; gerçek filmlerde veya oyunlarda gördüğünüz
          sorunlar daha önemlidir.
        </p>
      </Section>

      <Section wide id="burn-heading" title="OLED Gri Testi mi, Yanma Testi mi?">
        <p className={p}>Bu OLED testi yanmayı değil, koyu tonları kontrol eder. Yanma en iyi %50 gri, kırmızı ve mavi gibi daha parlak alanlarda görünür:</p>
        <ul className={ul}>
          <li>
            OLED yanma kontrolü için <Link href="/oled-burn-in-test" className={link}>OLED yanma (burn-in) testini</Link> kullanın.
          </li>
          <li>
            Herhangi bir ekranda görüntü tutulmasını kontrol etmek ve temizlemeyi denemek için{' '}
            <Link href="/screen-burn-in-test" className={link}>ekran yanma testini</Link> kullanın.
          </li>
        </ul>
      </Section>

      <Section wide id="gray-heading" title="OLED Gri Testi mi, Düz Gri Ekran mı?">
        <p className={p}>
          Test seviyeleri yerine tek bir düz gri ekran mı lazım? <Link href="/gray-screen" className={link}>Gri ekranı</Link> ya da gerçek OLED siyahını
          görmek için <Link href="/black-screen" className={link}>siyah ekranı</Link> açın. Renk, keskinlik ve gamanın tam kontrolü için{' '}
          <Link href="/monitor-test" className={link}>monitör testini</Link> yapın.
        </p>
      </Section>
    </div>
  )
}
