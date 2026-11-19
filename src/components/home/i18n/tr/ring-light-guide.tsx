import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Online Halka Işık (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle:
 * nasıl kullanılır → selfie ve video efekti → makyaj ışığı → renkler. Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function RingLightGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Online Halka Işık Nasıl Kullanılır?">
        <p className={p}>
          Bu online halka ışık ekranınızda parlayan bir halka çizer; böylece telefon, tablet veya ikinci monitör sanal bir halka ışığa dönüşür.
          Onu karşınıza, kameranızın hemen arkasına koyun.
        </p>
        <ul className={ul}>
          <li>Parlaklık’ı ayarlayın ve bir renk seçin: Beyaz, Pembe, Mavi veya Mor.</li>
          <li>Halka boyutunu ve kalınlığını, beyazın renk sıcaklığını, Ortayı doldur’u ve arka planı değiştirmek için Daha fazla menüsünü açın.</li>
          <li>Halkanın ekranı doldurması için ekrana iki kez dokunun veya F tuşuna basın.</li>
        </ul>
      </Section>

      <Section wide id="effect-heading" title="Selfie, Fotoğraf ve Video için Online Halka Işık Efekti">
        <p className={p}>
          Halka ışık efekti, insanların gözlerinde gördüğünüz yuvarlak yansıma ile az gölgeli, yumuşak ve eşit ışıktır. Bunu elde etmek için:
        </p>
        <ul className={ul}>
          <li>Ekranı, kamera halkanın ortasında kalacak şekilde yüzünüzün tam karşısında tutun.</li>
          <li>Halka şeklinin gözlerinizde ışık yansıması olarak görünmesi için Ortayı doldur’u kapalı bırakın.</li>
          <li>Daha parlak selfie’ler için daha büyük ve kalın bir halka kullanın.</li>
        </ul>
      </Section>

      <Section wide id="makeup-heading" title="Makyaj ve Ayna için Online Halka Işık">
        <p className={p}>
          Tam parlaklıktaki beyaz ışık renkleri doğru gösterir, bu da onu kullanışlı bir makyaj ışığı yapar. Yüzünüz önden eşit aydınlansın diye
          ekranı aynanızın yanına göz hizasında yerleştirin. Yüzünüzü aydınlatır; kamera aynası göstermez.
        </p>
      </Section>

      <Section wide id="colors-heading" title="Online Halka Işık Renkleri: Beyaz, Pembe, Mavi ve Mor">
        <Table
          caption="Halka ışık renkleri ve ne zaman kullanılacakları"
          head={['Renk', 'En uygun olduğu']}
          rows={[
            ['Beyaz', 'Makyaj, görüntülü görüşmeler ve doğal görünen fotoğraflar; sıcaklığı Daha fazla altından ayarlayın'],
            ['Pembe', 'Yumuşak, yüzü güzel gösteren selfie’ler'],
            ['Mavi', 'Serin, atmosferik fotoğraflar ve yayınlar'],
            ['Mor', 'Parti ve yaratıcı aydınlatma'],
          ]}
        />
        <p className={p}>
          Halka yerine düz ışık mı lazım? <Link href="/zoom-lighting" className={link}>Görüntülü görüşme ışığını</Link> veya sade{' '}
          <Link href="/" className={link}>beyaz ekranı</Link> deneyin.
        </p>
      </Section>
    </div>
  )
}
