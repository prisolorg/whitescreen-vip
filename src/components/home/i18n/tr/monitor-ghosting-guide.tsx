import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Monitör Gölgelenme Testi (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle (gölgelenme / ghosting):
 * nasıl yapılır → izlerin anlamı → düzeltme (overdrive, Hz, kablo) → laptop, TV ve diğer ekranlar.
 * Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function MonitorGhostingGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Monitör Gölgelenme Testi Nasıl Yapılır?">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Monitörünüzü en yüksek yenileme hızına ayarlayın, ardından tam ekran için monitör gölgelenme testine iki kez dokunun.</li>
          <li>Hedefin koyu, orta gri ve açık şeritlerde hareket edişini izleyin. Gözlerinizle onu takip edin, tek bir noktaya bakmayın.</li>
          <li>İzler görünene kadar Hız’ı (240 ila 2.400 px/sn) artırın ve donmuş bir kareye bakmak için Duraklat’a basın.</li>
          <li>Monitörünüzün overdrive ayarını değiştirin ve karşılaştırmak için gölgelenme testini yeniden çalıştırın.</li>
        </ol>
        <p className={p}>
          Monitör gölgelenme testinde dikey referans ızgara (Daha fazla altında) bir izin ne kadar uzun olduğunu değerlendirmenize yardım eder. Her
          şerit farklı bir arka plan kullanır, çünkü gölgelenme (ghosting) çoğu zaman koyu veya orta gri üzerinde daha kötüdür.
        </p>
      </Section>

      <Section wide id="results-heading" title="Monitör Gölgelenme Testi Sonuçları: İzler Ne Anlama Gelir?">
        <p className={p}>
          Monitörde gölgelenme nedir? Rengini çok yavaş değiştiren pikseller, hareket eden her şeyin arkasında soluk bir kopya bırakır. Monitör
          gölgelenme testini şöyle okuyabilirsiniz:
        </p>
        <Table
          caption="Gölgelenme, bulaşma ve aşma"
          head={['Hedefin arkasında ne görüyorsunuz', 'Nedir', 'Olağan neden']}
          rows={[
            ['Soluk, daha koyu bir kopya veya iz', 'Gölgelenme (ghosting)', 'Yavaş piksel tepkisi, overdrive kapalı veya çok düşük'],
            ['Koyu bir bulaşma, en kötüsü koyu şeritte', 'Siyah bulaşma (black smearing)', 'VA paneller, yavaş koyudan açığa geçişler'],
            ['Parlak veya ters renkli bir hale', 'Aşma (ters gölgelenme)', 'Overdrive çok yüksek ayarlı'],
            ['Kopyası olmayan yumuşak, bulanık bir kenar', 'Hareket bulanıklığı', '60 Hz’de normal; yüksek yenileme hızlarında daha az'],
          ]}
        />
      </Section>

      <Section wide id="fix-heading" title="Monitör Gölgelenme Testinin Gösterdiklerini Düzeltin">
        <p className={p}>Gölgelenme yapan bir monitörün nadiren onarıma ihtiyacı olur; doğru ayarlar genellikle izleri kısaltır.</p>
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Overdrive:</strong> monitör menüsünde Response Time, Trace Free veya OD olarak da geçer. En kısa izi
            veren ve parlak hale oluşturmayan ayarı seçin; genellikle ortadaki.
          </li>
          <li>
            <strong className="text-foreground">Yenileme hızı:</strong> <Link href="/screen-refresh-rate-test" className={link}>ekran yenileme hızı testi</Link>{' '}
            ile en yüksek değerde olduğunu kontrol edin. Daha yüksek Hz daha az bulanıklık demektir.
          </li>
          <li>
            <strong className="text-foreground">Kablo ve bağlantı noktası:</strong> DisplayPort veya monitörünüzün tam yenileme hızını destekleyen bir kablo kullanın.
          </li>
          <li>
            <strong className="text-foreground">Görüntü modları:</strong> gürültü azaltma gibi ek işlemler iz ekleyebilir; kapatın.
          </li>
        </ul>
      </Section>

      <Section wide id="screen-heading" title="Laptopta, Televizyonda veya Başka Bir Ekranda Monitör Gölgelenme Testi">
        <p className={p}>
          Ekran gölgelenmesi her LCD veya OLED ekranda aynıdır: monitör gölgelenme testini kontrol etmek istediğiniz laptopta, televizyonda veya
          tablette açın ve tam ekranda çalıştırın. Televizyonlarda genellikle işlemeyi azaltan ve ekran gölgelenmesini düşüren bir oyun modu bulunur.
        </p>
        <p className={p}>
          &ldquo;Hayalet ekran&rdquo;, hiçbir şey hareket etmezken ekranda kalan soluk bir görüntü anlamına da gelebilir. Bu hareket gölgelenmesi
          değil, görüntü tutulması veya yanmadır; <Link href="/screen-burn-in-test" className={link}>ekran yanma testi</Link> ile kontrol edin.
          Ayrıntılar <Link href="/screen-problems/ghosting" className={link}>gölgelenme rehberinde</Link>.
        </p>
      </Section>
    </div>
  )
}
