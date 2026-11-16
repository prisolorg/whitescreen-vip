import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Dokunmatik Ekran Testi (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle:
 * üç test modu → hayalet dokunma ve çoklu dokunma → iPhone, Android ve Samsung → sonraki adımlar.
 * Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function TouchScreenGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="modes-heading" title="Dokunmatik Ekran Testi: Kontrol Etmenin Üç Yolu">
        <Table
          caption="Dokunmatik ekran testi modları"
          head={['Mod', 'Neyi kontrol eder', 'Nasıl']}
          rows={[
            ['Ölü bölge ızgarası', 'Dokunuşunuza tepki vermeyen noktalar', 'Kaplanan %100 olana kadar her karenin üzerinden kaydırın; karanlık kalan kareler ölü bölgelerdir'],
            ['Çiz', 'Akıcı, boşluksuz takip', 'Ekranda yavaş çizgiler çizin; kopmalar veya sıçramalar zayıf alanları gösterir'],
            ['Çoklu dokunma', 'Kaç parmağı algıladığı', 'Birkaç parmağınızı koyun; Dokunuşlar ve Maks. sayıyı gösterir'],
          ]}
        />
        <p className={p}>
          Baştan başlamak için Temizle’ye basın; dokunmatik ekran testinin ekranın kenarlarını da kapsaması için F tuşuna basın veya Tam Ekran’a dokunun.
        </p>
      </Section>

      <Section wide id="ghost-heading" title="Hayalet Dokunma ve Çoklu Dokunma için Dokunmatik Ekran Testi">
        <ul className={ul}>
          <li>
            <strong className="text-foreground">Hayalet dokunma:</strong> Çiz’i açın, ardından telefonu bırakın ve dokunmayın. Kendiliğinden beliren
            çizgiler veya noktalar hayalet dokunmalardır.
          </li>
          <li>
            <strong className="text-foreground">Çoklu dokunma:</strong> çoğu telefon aynı anda 5 ila 10 parmak algılar. Rozet, cihazınızın kaç dokunma
            noktası bildirdiğini gösterir.
          </li>
          <li>
            <strong className="text-foreground">Hassasiyet:</strong> Çiz modunda hafif ve hızlı kaydırmalar, yumuşak dokunuşların algılanıp algılanmadığını gösterir.
          </li>
        </ul>
      </Section>

      <Section wide id="phone-heading" title="iPhone, Android ve Samsung’da Dokunmatik Ekran Testi">
        <p className={p}>
          Dokunmatik ekran testi Safari, Chrome veya herhangi bir telefon tarayıcısında çalışır; hiçbir şey yüklemeniz gerekmez. Kenarlara yakın
          dokunuşlar algılanmıyor gibi görünüyorsa kalın bir kılıfı veya ekran koruyucuyu çıkarın ve yeniden test edin.
        </p>
        <p className={p}>
          Birçok Samsung Galaxy telefonda yerleşik bir test menüsünü açan dokunmatik ekran test kodu *#0*#’ı da tuşlayabilirsiniz. Bu tür kodlar
          markaya ve modele bağlıdır; bazı telefonlarda hiç yoktur.
        </p>
      </Section>

      <Section wide id="next-heading" title="Dokunmatik Ekran Testinden Sonra">
        <p className={p}>
          Dokunma sorunsuz ama görüntü sorunluysa ekranın kendisini kontrol edin: noktalar için{' '}
          <Link href="/dead-pixel-test" className={link}>ölü piksel testini</Link>, renk ve homojenlik için{' '}
          <Link href="/monitor-test" className={link}>monitör testini</Link> yapın.
        </p>
      </Section>
    </div>
  )
}
