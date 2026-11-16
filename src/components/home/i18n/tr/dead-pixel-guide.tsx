import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Ölü Piksel Testi (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle:
 * ölü piksel testi / piksel testi / LCD testi → ölü, sıkışmış, sıcak piksel → telefon, laptop, monitör, TV → onarım.
 * Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function DeadPixelGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="how-heading" title="Ölü Piksel Testi: Ekranınızı Nasıl Kontrol Edersiniz?">
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Tozun piksel sanılmaması için ekranı temizleyin.</li>
          <li>Her pikselin test edilmesi için iki kez dokunun veya tam ekran için F tuşuna basın.</li>
          <li>9 renk arasında geçiş yapmak için ekrana dokunun veya ok tuşlarını kullanın: siyah, beyaz, kırmızı, yeşil, mavi, camgöbeği, macenta, sarı ve gri.</li>
          <li>Her rengi kenardan kenara dikkatle inceleyin. Ya da rengi birkaç saniyede bir değiştirmek için Otomatik döngü’ye basın.</li>
        </ol>
        <p className={p}>
          Tarayıcısı olan her monitör, laptop, telefon, tablet veya televizyonda piksel testi ve LCD testi olarak çalışır. Tek bir rengi daha
          uzun süre incelemek için <Link href="/black-screen" className={link}>siyah ekranı</Link> veya{' '}
          <Link href="/" className={link}>beyaz ekranı</Link> açın.
        </p>
      </Section>

      <Section wide id="types-heading" title="Ölü Piksel Testi Sonuçları: Ölü, Sıkışmış mı, Sıcak mı?">
        <p className={p}>Ölü piksel nedir? Artık hiç yanmayan bir pikseldir. Diğerlerinden nasıl ayırt edeceğiniz:</p>
        <Table
          caption="Bir piksel hatası nasıl görünür"
          head={['Ne görüyorsunuz', 'En iyi göründüğü yer', 'Nedir']}
          rows={[
            ['Hiç yanmayan siyah bir nokta', 'Beyaz ve parlak renkler', 'Ölü piksel'],
            ['Kırmızı, yeşil veya mavide takılı kalan bir nokta', 'Siyah ve diğer renkler', 'Sıkışmış piksel'],
            ['Her zaman beyaz olan bir nokta', 'Siyah', 'Sıcak piksel'],
            ['Silince yer değiştiren lekeler', 'Her renk', 'Toz, piksel değil'],
          ]}
        />
        <p className={p}>
          Daha fazlası için <Link href="/screen-problems/stuck-pixel" className={link}>sıkışmış piksel</Link> ve{' '}
          <Link href="/screen-problems/hot-pixel" className={link}>sıcak piksel</Link> rehberlerine bakın.
        </p>
      </Section>

      <Section wide id="devices-heading" title="Telefonda, Laptopta, Monitörde veya Televizyonda Ölü Piksel Testi">
        <ul className={ul}>
          <li>Telefon ve iPhone: parlaklığı artırın, tam ekran simgesine dokunun ve renkler arasında dokunarak geçin.</li>
          <li>Laptop ve monitör: bir pikselin bir piksel olarak görünmesi için ekranı yerel çözünürlüğüne ayarlayın.</li>
          <li>Televizyon: sayfayı televizyonun tarayıcısında açın veya bir laptop sekmesini yansıtın ve yakından kontrol edin.</li>
          <li>Yeni bir cihaz mı? Hâlâ iade edebilirken ölü piksel kontrolünü hemen yapın.</li>
        </ul>
      </Section>

      <Section wide id="fix-heading" title="Ölü Piksel Testinden Sonra: Düzeltilebilir mi?">
        <p className={p}>
          Ölü piksel çözümü mü arıyorsunuz? Gerçekten ölü bir piksel neredeyse hiç geri gelmez, çünkü güç almıyordur. Sıkışmış bir piksel ise
          bazen geri gelir: üzerinde 10 ila 20 dakika hızla yanıp sönen renkler onu uyandırabilir.{' '}
          <Link href="/screen-burn-in-test" className={link}>Ekran yanma testinde</Link> bunun için kullanabileceğiniz bir renk döngüsü düzeltici
          var; yanıp sönen ışık sizi rahatsız ediyorsa kullanmayın.
        </p>
        <p className={p}>
          Ekran garanti kapsamındaysa üreticinin ölü piksel politikasını kontrol edin. Renkleri ve homojenliği de kapsayan tam bir kontrol için{' '}
          <Link href="/monitor-test" className={link}>monitör testini</Link> yapın.
        </p>
      </Section>
    </div>
  )
}
