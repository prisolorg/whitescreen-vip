import Link from 'next/link'
import { Section, Table, h3, link, p, ul } from '@/components/home/guide-parts'

/**
 * Pomodoro Zamanlayıcı (Türkçe). İngilizce rehberden çevrildi, Türkçe arama ifadeleriyle:
 * Pomodoro tekniği → ders çalışmak için Pomodoro → ayarlar (25/5, 50/10) → online, uygulamasız.
 * Düğme adları aracın Türkçe arayüzüyle aynıdır.
 */
export function PomodoroTimerGuideTr() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      <Section wide id="technique-heading" title="Pomodoro Zamanlayıcı ve Pomodoro Tekniği">
        <p className={p}>
          Pomodoro tekniği (Pomodoro yöntemi), Francesco Cirillo’nun 1980’lerin sonunda geliştirdiği basit bir zaman yönetimi yöntemidir.
          Pomodoro adı verilen kısa, odaklı çalışma dilimleriyle çalışır ve aralarında dinlenirsiniz. Bu Pomodoro zamanlayıcı tüm döngüyü sizin
          yerinize yürütür:
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Bir görev seçin.</li>
          <li>25 dakika boyunca ona odaklanın.</li>
          <li>5 dakikalık kısa bir mola verin.</li>
          <li>Tekrarlayın. Dört pomodorodan sonra 15 dakikalık daha uzun bir mola verin.</li>
        </ol>
        <p className={p}>
          Zamanlayıcı odaktan molaya kendiliğinden geçer, her aşama bittiğinde bir uyarı sesi çalar ve tamamladığınız oturumları sayar.
        </p>
        <h3 className={h3}>Neden Domates Zamanlayıcı Deniyor?</h3>
        <p className={p}>
          &quot;Pomodoro&quot; İtalyanca domates demektir. Cirillo ilk oturumlarını domates şeklinde bir mutfak zamanlayıcısıyla ölçtü; bu yüzden
          yöntem domates zamanlayıcı veya domates saati tekniği olarak da bilinir.
        </p>
      </Section>

      <Section wide id="study-heading" title="Ders Çalışmak için Pomodoro Zamanlayıcı">
        <p className={p}>
          Pomodoro tekniğini ders çalışırken kullanmak bu aracı harika bir ders çalışma sayacına dönüştürür: kısa bloklara başlamak daha
          kolaydır ve molalar uzun bir tekrar oturumu boyunca odağınızı taze tutar.
        </p>
        <ul className={ul}>
          <li>Her pomodoroya bir bölüm, bir soru seti veya 20 bilgi kartı gibi tek ve net bir hedef verin.</li>
          <li>Telefonunuzu molaya kadar kaldırın.</li>
          <li>Aklınıza gelen dağınık düşünceleri not edin ve oturumun ortasında değil, molada ilgilenin.</li>
          <li>Uzun molayı hareket etmek, su içmek veya biraz temiz hava almak için kullanın.</li>
          <li>Pomodoro ders çalışma yönteminin sizde ne kadar işe yaradığını görmek için tamamlanan oturumlarınızı sayın.</li>
        </ul>
      </Section>

      <Section wide id="settings-heading" title="Pomodoro Zamanlayıcı Ayarları: 25/5, 50/10 ve Özel">
        <p className={p}>Odak süresini, iki molayı ve uzun moladan önce kaç oturum olacağını ayarlamak için Daha fazla menüsünü açın.</p>
        <Table
          caption="Popüler Pomodoro zamanlayıcı ayarları"
          head={['Düzen', 'Odak', 'Kısa mola', 'Uzun mola', 'Uygun olduğu iş']}
          rows={[
            ['Klasik 25/5', '25 dk', '5 dk', '4 oturumdan sonra 15 dk', 'Çoğu iş ve ders çalışma'],
            ['Derin çalışma 50/10', '50 dk', '10 dk', '3 oturumdan sonra 20–30 dk', 'Yazı, kodlama, uzun okuma'],
            ['Kısa atılımlar 15/3', '15 dk', '3 dk', '4 oturumdan sonra 15 dk', 'Zor işlere başlamak'],
          ]}
        />
        <ul className={ul}>
          <li>Odak 5 ila 90 dakika, kısa molalar 1 ila 20, uzun molalar 5 ila 45 dakika olabilir.</li>
          <li>Her aşamayı kendiniz başlatmak için Sonrakini otomatik başlat’ı kapatın.</li>
          <li>Kütüphanede veya ofiste sessiz bir Pomodoro zamanlayıcı için uyarı sesini kapatın.</li>
        </ul>
        <p className={p}>
          Yalnızca tek bir 25 dakikalık sayaç mı lazım? <Link href="/countdown-timer" className={link}>Geri sayım sayacında</Link> tek
          dokunuşluk hazır ayarlar var; <Link href="/stopwatch" className={link}>kronometre</Link> ise bir işin gerçekte ne kadar sürdüğünü gösterir.
        </p>
      </Section>

      <Section wide id="online-heading" title="Online Pomodoro Zamanlayıcı: Uygulama Gerekmez">
        <p className={p}>
          Bu online Pomodoro sayacı PC, Mac, Chromebook, tablet veya telefonda tarayıcınızda çalışır; yüklenecek bir Pomodoro uygulaması ya da
          eklentisi yoktur, hesap da gerekmez.
        </p>
        <ul className={ul}>
          <li>Geri sayım tarayıcı sekmesinde görünür, böylece başka bir sekmede çalışmaya devam edebilirsiniz.</li>
          <li>Sekme arka plandayken bile süreyi doğru tutar.</li>
          <li>Başlatmak veya duraklatmak için boşluk tuşuna, büyük tam ekran Pomodoro saati için F tuşuna basın.</li>
        </ul>
        <p className={p}>
          Dilimlere bölmek istediğiniz her iş için odaklanma sayacı, çalışma sayacı veya verimlilik sayacı olarak da aynı derecede iyi çalışır.
        </p>
      </Section>
    </div>
  )
}
