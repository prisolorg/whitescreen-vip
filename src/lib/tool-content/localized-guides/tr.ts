import type { LanguageGuides } from './types'
import { DvdScreensaverGuideTr } from '@/components/home/i18n/tr/dvd-screensaver-guide'
import { BrokenScreenGuideTr } from '@/components/home/i18n/tr/broken-screen-guide'
import { FakeZoomMeetingGuideTr } from '@/components/home/i18n/tr/fake-zoom-meeting-guide'
import { FakeWindowsUpdateGuideTr } from '@/components/home/i18n/tr/fake-windows-update-guide'
import { FakeWindows11UpdateGuideTr } from '@/components/home/i18n/tr/fake-windows-11-update-guide'
import { FakeBsodGuideTr } from '@/components/home/i18n/tr/fake-bsod-guide'
import { FakeMacUpdateGuideTr } from '@/components/home/i18n/tr/fake-mac-update-guide'
import { PomodoroTimerGuideTr } from '@/components/home/i18n/tr/pomodoro-timer-guide'
import { FlipClockGuideTr } from '@/components/home/i18n/tr/flip-clock-guide'
import { ZoomLightingGuideTr } from '@/components/home/i18n/tr/zoom-lighting-guide'
import { CountdownTimerGuideTr } from '@/components/home/i18n/tr/countdown-timer-guide'
import { RingLightGuideTr } from '@/components/home/i18n/tr/ring-light-guide'
import { StopwatchGuideTr } from '@/components/home/i18n/tr/stopwatch-guide'
import { RefreshRateGuideTr } from '@/components/home/i18n/tr/refresh-rate-guide'
import { DeadPixelGuideTr } from '@/components/home/i18n/tr/dead-pixel-guide'
import { TouchScreenGuideTr } from '@/components/home/i18n/tr/touch-screen-guide'
import { MonitorGhostingGuideTr } from '@/components/home/i18n/tr/monitor-ghosting-guide'
import { MonitorTestGuideTr } from '@/components/home/i18n/tr/monitor-test-guide'
import { ScreenBurnInGuideTr } from '@/components/home/i18n/tr/screen-burn-in-guide'
import { ScreenResolutionGuideTr } from '@/components/home/i18n/tr/screen-resolution-guide'
import { ScreenColorGuideTr } from '@/components/home/i18n/tr/screen-color-guide'
import { FrameRateGuideTr } from '@/components/home/i18n/tr/frame-rate-guide'
import { OledGrayGuideTr } from '@/components/home/i18n/tr/oled-gray-guide'
import { HackedScreenGuideTr } from '@/components/home/i18n/tr/hacked-screen-guide'
import { NoSignalGuideTr } from '@/components/home/i18n/tr/no-signal-guide'
import { BlackScreenGuideTr } from '@/components/home/i18n/tr/black-screen-guide'
import { YellowScreenGuideTr } from '@/components/home/i18n/tr/yellow-screen-guide'
import { GreenScreenGuideTr } from '@/components/home/i18n/tr/green-screen-guide'
import { BlueScreenGuideTr } from '@/components/home/i18n/tr/blue-screen-guide'
import { RedScreenGuideTr } from '@/components/home/i18n/tr/red-screen-guide'
import { PinkScreenGuideTr } from '@/components/home/i18n/tr/pink-screen-guide'
import { WhiteScreenGuideTr } from '@/components/home/i18n/tr/white-screen-guide'

/** Turkish (siz-form like the Turkish UI, Turkish UI button names, Turkish search terms). */
export const tr: LanguageGuides = {
  tools: {
    'dvd-screensaver': {
      Guide: DvdScreensaverGuideTr,
      faqs: [
        {
          question: 'Bu resmi DVD logosu mu?',
          answer:
            'Hayır. DVD ekran koruyucu tarayıcınızda DVD tarzı bir logo çizer ve DVD Video logosunun sahibi olan DVD Format/Logo Licensing Corporation ile bağlantılı değildir.',
        },
        {
          question: 'DVD ekran koruyucu logosu neden renk değiştiriyor?',
          answer:
            'Klasik DVD oynatıcı ekran koruyucusunda olduğu gibi logo her kenara değdiğinde yeni bir renk seçer ve aynı rengi asla art arda iki kez tekrarlamaz.',
        },
        {
          question: 'DVD ekran koruyucuyu Windows veya Mac’te gerçek bir ekran koruyucu olarak kullanabilir miyim?',
          answer:
            'Sistem ekran koruyucusu olarak yüklenmez, tarayıcınızda çalışır. Bilgisayarınız boştayken tam ekranda açın; sisteminizin kendi ekran koruyucu ve uyku ayarları yine geçerlidir.',
        },
      ],
    },
    'broken-screen': {
      Guide: BrokenScreenGuideTr,
      faqs: [
        {
          question: 'Kırık ekran şakası ekranıma zarar verebilir mi?',
          answer: 'Hayır. Bu yalnızca tarayıcınızda çizilen bir görseldir. Esc tuşuna basın veya sekmeyi kapatın, ekran normale döner.',
        },
        {
          question: 'Kırık ekran şakası Chromebook’ta çalışır mı?',
          answer:
            'Evet. Chromebook’lar, Windows ve Mac bilgisayarlar, telefonlar, tabletler ve akıllı TV tarayıcıları dahil her modern tarayıcıda çalışır. Hiçbir şey yüklenmez.',
        },
        {
          question: 'Çatlak ekran şakasını nasıl sorumlu bir şekilde yaparım?',
          answer: 'Kısa tutun, gülecek birini seçin, asla para veya bilgi almak için kullanmayın ve şakayı hemen açıklayın.',
        },
      ],
    },
    'fake-zoom-meeting': {
      Guide: FakeZoomMeetingGuideTr,
      faqs: [
        {
          question: 'Bu sahte Zoom toplantısı Zoom’a bağlı mı?',
          answer:
            'Hayır. Bağımsız, Zoom tarzı bir simülasyondur ve Zoom Video Communications ile bağlantılı değildir. Kimse katılamaz ve hiçbir yere bir şey gönderilmez.',
        },
        {
          question: 'Sahte Zoom toplantısı kameramı kullanıyor mu?',
          answer:
            'Yalnızca Kamera önizlemesini aç seçeneğini etkinleştirirseniz. Görüntünüz kendi kutucuğunuzda görünür ve cihazınızdan hiç çıkmaz; hiçbir şey kaydedilmez veya yüklenmez. Mikrofon hiç kullanılmaz.',
        },
        {
          question: 'Sahte Zoom toplantısında ses var mı?',
          answer: 'Hayır, sessizdir. Sahte toplantı videosu için sesi veya konuşmaları video düzenleyicinizde ekleyin.',
        },
      ],
    },
    'fake-windows-10-update': {
      Guide: FakeWindowsUpdateGuideTr,
      faqs: [
        {
          question: 'Sahte Windows güncelleme ekranı bilgisayarıma zarar verebilir mi?',
          answer: 'Hayır. Bu yalnızca tarayıcınızdaki bir sayfadır. Hiçbir şey yüklenmez veya değiştirilmez; Esc tuşuna basmak ya da sekmeyi kapatmak onu sonlandırır.',
        },
        {
          question: 'Sahte Windows güncellemesini takılmış gibi gösterebilir miyim?',
          answer: 'Evet. Duraklat’a basın, yüzde olduğu yerde durur. Ne kadar hızlı yükseleceğini değiştirmek için Daha fazla menüsünü açın.',
        },
        {
          question: 'Sahte Windows güncellemesi Mac’te veya Chromebook’ta çalışır mı?',
          answer: 'Evet. Her modern tarayıcıda çalışır, yani sahte Windows güncellemesini Mac’te, Chromebook’ta veya tablette de gösterebilirsiniz.',
        },
      ],
    },
    'fake-windows-11-update': {
      Guide: FakeWindows11UpdateGuideTr,
      faqs: [
        {
          question: 'Sahte Windows 11 güncellemesi gerçek mi?',
          answer: 'Hayır. Windows 11 güncelleme ekranına benzeyen, tarayıcınızdaki bir sayfadır. Hiçbir şey yüklenmez; Esc tuşu veya sekmeyi kapatmak onu sonlandırır.',
        },
        {
          question: 'Sahte Windows 11 güncellemesi ne kadar sürer?',
          answer: 'Hiç bitmez: yüzde %100’den sonra yeniden başlar. Tek bir sayıda tutmak için Duraklat’ı kullanın veya hızı değiştirmek için Daha fazla menüsünü açın.',
        },
        {
          question: 'Sahte Windows 11 güncellemesini Mac’te veya Chromebook’ta çalıştırabilir miyim?',
          answer: 'Evet. Her modern tarayıcıda çalışır, yani Windows 11 güncelleme ekranı Mac’lerde, Chromebook’larda, tabletlerde ve telefonlarda da çalışır.',
        },
      ],
    },
    'fake-blue-screen-of-death': {
      Guide: FakeBsodGuideTr,
      faqs: [
        {
          question: 'Sahte mavi ölüm ekranı bilgisayarıma zarar verebilir mi?',
          answer: 'Hayır. Bu tarayıcınızdaki bir görseldir. Bilgisayarınız normal çalışmaya devam eder; Esc tuşuna basmak veya sekmeyi kapatmak onu sonlandırır.',
        },
        {
          question: 'Mavi ölüm ekranı neden artık siyah?',
          answer: 'Yeni Windows 11 sürümleri çökme ekranını mavi yerine siyah gösterir. Bu görünüm için Stil menüsünden Siyah (yeni) seçeneğini seçin.',
        },
        {
          question: 'Mavi ölüm ekranındaki durdurma kodunu değiştirebilir miyim?',
          answer: 'Evet. Daha fazla menüsünü açın ve CRITICAL_PROCESS_DIED veya MEMORY_MANAGEMENT gibi bir durdurma kodu seçin. Ekranda hemen güncellenir.',
        },
      ],
    },
    'fake-mac-update': {
      Guide: FakeMacUpdateGuideTr,
      faqs: [
        {
          question: 'Bu sahte Mac güncellemesi Apple tarafından mı yapıldı?',
          answer: 'Hayır. macOS tarzı bir güncelleme ekranının bağımsız bir simülasyonudur ve Apple ile bağlantılı değildir. Mac’inizde hiçbir şey yüklenmez veya değiştirilmez.',
        },
        {
          question: 'Sahte Mac güncellemesini saatlerce sürdürebilir miyim?',
          answer: 'Daha fazla altından güncelleme süresini 120 dakikaya ayarlayın. Çubuk dolduğunda ekran yeniden başlar ve güncelleme baştan başlar; böylece istediğiniz kadar çalışabilir.',
        },
      ],
    },
    'pomodoro-timer': {
      Guide: PomodoroTimerGuideTr,
      faqs: [
        {
          question: 'Pomodoro zamanlayıcı nedir?',
          answer:
            'Pomodoro zamanlayıcı, çalışmayı genellikle 25 dakikalık odaklı bloklara böler; her birinden sonra kısa bir mola, dört bloktan sonra daha uzun bir mola verilir. Francesco Cirillo’nun Pomodoro tekniğini izler.',
        },
        {
          question: 'Bir pomodoro ne kadar sürer?',
          answer: 'Geleneksel olarak 25 dakika odak ve ardından 5 dakika mola. İkisini de Daha fazla altından değiştirebilirsiniz, örneğin 50 ve 10 dakikaya.',
        },
        {
          question: 'Pomodoro zamanlayıcı telefonumda çalışır mı?',
          answer: 'Evet. Telefonunuzun tarayıcısında açın ve Başlat’a basın. Bir aşama bittiğinde uyarı sesini duymak için sekmeyi açık tutun.',
        },
        {
          question: 'Bu Pomodoro zamanlayıcı ücretsiz mi?',
          answer: 'Evet. Tamamen ücretsizdir; kayıt, uygulama yoktur ve zamanlayıcının kendisinde reklam yoktur.',
        },
      ],
    },
    'flip-clock-screensaver': {
      Guide: FlipClockGuideTr,
      faqs: [
        {
          question: 'Yaprak saat ekranımı açık tutar mı?',
          answer: 'Evet, tam ekranda. Desteklenen tarayıcılar tam ekrandayken ekranı açık tutar, böylece bütün gün masa saati olarak çalışabilir.',
        },
        {
          question: '12 saatlik gösterim kullanabilir miyim?',
          answer: 'Evet. 24 saat biçimi’ni kapatın, saat ÖÖ veya ÖS etiketiyle 12 saatlik gösterime geçer.',
        },
        {
          question: 'Windows veya Mac’te ekran koruyucu olarak kullanabilir miyim?',
          answer: 'Sistem ekran koruyucusu olarak yüklenmez, tarayıcınızda çalışır. Boştaki bir ekranda veya bilgisayarınız boştayken tam ekranda açın.',
        },
      ],
    },
    'zoom-lighting': {
      Guide: ZoomLightingGuideTr,
      faqs: [
        {
          question: 'Görüntülü görüşme ışığını görüşmeyi yaptığım laptopta kullanabilir miyim?',
          answer:
            'En iyi, web kameranızın arkasına yerleştirilmiş ikinci bir ekranda, tablette veya telefonda çalışır; böylece görüşme görünür kalır. Tek bir laptopta tam ekran ışık Zoom pencerenizi kapatır.',
        },
        {
          question: 'Görüntülü görüşme ışığı için en iyi renk sıcaklığı hangisi?',
          answer: 'Nötr (4500 K) çoğu odaya uyar. Pencere ışığıyla eşleşmesi için Gün ışığı (6500 K), daha yumuşak bir akşam görünümü için Sıcak (3000 K) seçin.',
        },
        {
          question: 'Ücretsiz mi?',
          answer: 'Evet. Uygulama veya kayıt olmadan her tarayıcıda ücretsizdir ve Zoom, Teams, Google Meet ve diğer tüm görüntülü görüşmelerle çalışır.',
        },
      ],
    },
    'countdown-timer': {
      Guide: CountdownTimerGuideTr,
      faqs: [
        {
          question: 'Hangi sürelerden geri sayabilirim?',
          answer:
            '99 saat, 59 dakika ve 59 saniyeye kadar her süreden. Zamanlayıcı menüsünden 1, 5, 10, 15, 25, 45 veya 60 dakikayı seçin ya da ekrandaki saat, dakika ve saniyeye tıklayıp kendi sürenizi yazın, ardından Başlat’a basın.',
        },
        {
          question: 'Süre dolduğunda ses çıkarır mı?',
          answer: 'Evet. Süre bittiğinde bir uyarı sesi çalar ve ekran kırmızı yanıp söner. Sessiz bir geri sayım için sesi Daha fazla altından kapatın.',
        },
        {
          question: 'Geri sayım sayacı bir tarihe geri sayabilir mi?',
          answer:
            'Evet. Zamanlayıcı menüsünden Bir tarihe geri sayım’ı seçin, tarih ve saati belirleyin, isterseniz bir etkinlik adı ekleyin ve Başlat’a basın. Kalan günleri, saatleri, dakikaları ve saniyeleri gösterir ve geri döndüğünüzde geri sayımınızı bu tarayıcıda hatırlar.',
        },
      ],
    },
    'ring-light': {
      Guide: RingLightGuideTr,
      faqs: [
        {
          question: 'Bir ekran gerçek bir halka ışığın yerini tutabilir mi?',
          answer:
            'Görüntülü görüşmeler, selfie’ler ve makyaj için parlak bir ekran şaşırtıcı derecede iyi çalışır. Gerçek bir LED ışık daha parlaktır ve karanlık bir odada veya uzaktan çekim için daha iyidir.',
        },
        {
          question: 'Telefonumda çalışır mı?',
          answer: 'Evet. Telefonda veya tablette açın, parlaklığı artırın ve tam ekran için iki kez dokunun, ardından ekranı yüzünüze doğru tutun.',
        },
        {
          question: 'Makyaj için en iyi renk hangisi?',
          answer: 'Renkler doğru görünsün diye tam parlaklıkta Beyaz. Beyazı odanıza uyacak şekilde daha sıcak veya daha soğuk yapmak için Daha fazla menüsünü açın.',
        },
      ],
    },
    stopwatch: {
      Guide: StopwatchGuideTr,
      faqs: [
        {
          question: 'Ne kadar hassas?',
          answer:
            'Tarayıcınızın yüksek hassasiyetli saatini kullanır ve süreyi saniyenin yüzde birine kadar gösterir. Sekme arka plana geçse bile geri döndüğünüzde süre doğrudur.',
        },
        {
          question: 'Klavye kısayolları neler?',
          answer: 'Boşluk tuşu başlatır ve duraklatır, L tur kaydeder, R sıfıra döndürür.',
        },
        {
          question: 'Turlarımı kaydedebilir miyim?',
          answer: 'Evet. Her turu ara süresi ve toplam süresiyle kopyalamak için Turları kopyala’ya basın, ardından bir tabloya, notlara veya mesaja yapıştırın.',
        },
      ],
    },
    'screen-refresh-rate-test': {
      Guide: RefreshRateGuideTr,
      faqs: [
        {
          question: 'Ekran yenileme hızı testi ne kadar doğru?',
          answer:
            'Çoğu ekranda gerçeğe çok yakındır. Yüzlerce kareyi ölçer ve en yakın yaygın değere yuvarlar. Yoğun sekmeler, pil tasarrufu veya yavaş bir bilgisayar sonucu düşük gösterebilir; diğer uygulamaları kapatıp Yeniden ölç’e basın.',
        },
        {
          question: '144 Hz monitörüm neden 60 Hz gösteriyor?',
          answer:
            'Ekran muhtemelen 60 Hz’e ayarlıdır. Ekran ayarlarınızdan daha yüksek hızı seçin ve DisplayPort veya yüksek hızlı bir HDMI kablosu gibi bunu destekleyen bir kablo ve bağlantı noktası kullanın.',
        },
        {
          question: 'Ekran yenileme hızı testi telefonlarda çalışır mı?',
          answer: 'Evet. Telefonunuzun tarayıcısında açın. Önce güç tasarrufu modunu kapatın, çünkü genellikle ekranı 60 Hz ile sınırlar.',
        },
      ],
    },
    'dead-pixel-test': {
      Guide: DeadPixelGuideTr,
      faqs: [
        {
          question: 'Ölü piksel testi ne kadar sürer?',
          answer: 'Yaklaşık bir dakika. Tam ekranda 9 rengin hepsine geçin ve her birinde tüm ekrana göz gezdirin.',
        },
        {
          question: 'Tek bir ölü piksel normal mi?',
          answer:
            'Olabiliyor; birçok üretici bir ekranı ancak belirli sayıda hatalı pikselden sonra değiştirir. Monitörünüzün, laptopunuzun veya telefonunuzun garanti politikasını kontrol edin.',
        },
        {
          question: 'Ölü piksel ile sıkışmış piksel arasındaki fark nedir?',
          answer:
            'Ölü piksel hiç yanmaz ve siyah görünür. Sıkışmış piksel kırmızı, yeşil veya mavi gibi tek bir renkte kalır ve bazen üzerinde renkler yanıp söndürülerek düzeltilebilir.',
        },
      ],
    },
    'touch-screen-test': {
      Guide: TouchScreenGuideTr,
      faqs: [
        {
          question: 'Dokunmatik ekranımda ölü noktaları nasıl test ederim?',
          answer: 'Ölü bölge ızgarası’nı seçin ve her karenin üzerinden kaydırın. Dokunduktan sonra karanlık kalan kareler ölü noktalardır.',
        },
        {
          question: 'Dokunmatik ekran testi iPhone’da çalışır mı?',
          answer: 'Evet. Safari’de ve diğer iPhone tarayıcılarında, ayrıca Android telefonlarda, tabletlerde ve dokunmatik ekranlı laptoplarda çalışır.',
        },
        {
          question: 'Telefonum kaç dokunma noktasını desteklemeli?',
          answer: 'Çoğu telefon ve tablet aynı anda 5 ila 10 nokta algılar. Sizinkinin kaçını algıladığını görmek için Çoklu dokunma’yı kullanın ve Maks. sayısını izleyin.',
        },
      ],
    },
    'monitor-ghosting-test': {
      Guide: MonitorGhostingGuideTr,
      faqs: [
        {
          question: 'Her monitörde biraz gölgelenme olur mu?',
          answer:
            'Çoğu LCD monitör yüksek hızlarda biraz gösterir. İz normal hızlarda uzunsa veya parlak bir hale beliriyorsa sorun vardır. O zaman overdrive’ı ayarlayın ve monitör gölgelenme testini yeniden çalıştırın.',
        },
        {
          question: 'Gölgelenme, giriş gecikmesi (input lag) ile aynı şey mi?',
          answer: 'Hayır. Gölgelenme yavaş piksellerin bıraktığı görsel bir izdir; giriş gecikmesi ise fareniz veya kumandanız ile ekran arasındaki gecikmedir. Bu test yalnızca gölgelenmeyi gösterir.',
        },
        {
          question: 'Bu klavyeler için bir anti-ghosting testi mi?',
          answer:
            'Hayır. Klavye anti-ghosting özelliği aynı anda basılan birçok tuşun algılanmasıyla ilgilidir. Bu monitör gölgelenme testi ekranınızdaki hareket izlerini kontrol eder.',
        },
      ],
    },
    'monitor-test': {
      Guide: MonitorTestGuideTr,
      faqs: [
        {
          question: 'Monitör testi ücretsiz ve online mı?',
          answer: 'Evet. İndirme veya kayıt olmadan her monitör, laptop, televizyon veya telefonda tarayıcınızda çalışır.',
        },
        {
          question: 'Yeni bir monitörü nasıl test ederim?',
          answer:
            'Monitör testi desenlerini yerel çözünürlükte tam ekranda çalıştırın, ardından ölü piksel testini ve homojenlik testini yapın. Bunun için en iyi zaman, monitörü hâlâ iade edebileceğiniz zamandır.',
        },
        {
          question: 'Monitör testi ekranımı kalibre edebilir mi?',
          answer:
            'Parlaklık, kontrast ve gamayı gözle ayarlamanıza yardım eder. Doğru kalibrasyon için donanımsal bir kolorimetre veya sisteminizin kalibrasyon aracı gerekir.',
        },
      ],
    },
    'screen-burn-in-test': {
      Guide: ScreenBurnInGuideTr,
      faqs: [
        {
          question: 'Bir ekranın yanması ne kadar sürer?',
          answer:
            'Genellikle aynı sabit görüntünün, çoğu zaman yüksek parlaklıkta yüzlerce veya binlerce saat gösterilmesi gerekir. LCD görüntü tutulması birkaç saat sonra görünebilir ama kaybolur.',
        },
        {
          question: 'Yanık düzelticiyi ne kadar süre çalıştırmalıyım?',
          answer: '10 ila 30 dakikayla başlayın, ardından ekran yanma testini yeniden yapın. Birkaç kez tekrarlayın; hiçbir şey değişmiyorsa yanma muhtemelen kalıcıdır.',
        },
        {
          question: 'Ekran yanma testi telefonlarda çalışır mı?',
          answer: 'Evet. Telefonunuzun tarayıcısında açın, parlaklığı artırın ve tam ekran için iki kez dokunun. OLED ve AMOLED telefonlar için OLED yanma testini de deneyin.',
        },
      ],
    },
    'screen-resolution-test': {
      Guide: ScreenResolutionGuideTr,
      faqs: [
        {
          question: 'Ekran çözünürlüğüm neden monitörümünkinden düşük?',
          answer:
            'Ekran ölçeklendirmesi yüzünden. %150 ölçeklendirmede 2560 × 1440 bir monitör tarayıcıya 1707 × 960 bildirir. Fiziksel pikseller değeri gerçek sayıyı göstermek için piksel oranıyla çarpar.',
        },
        {
          question: 'Ekran çözünürlük testi doğru mu?',
          answer: 'Tarayıcınızın bildirdiğini tam olarak gösterir. Fiziksel piksel sayısının ekranınızla eşleşmesi için yakınlaştırmayı %100’de tutun.',
        },
        {
          question: 'Çözünürlüğüm ne olmalı?',
          answer: 'Monitörünüzün yerel çözünürlüğü; Windows ekran ayarlarında Önerilen olarak işaretlidir. Başka herhangi bir değer bulanık görünebilir.',
        },
      ],
    },
    'screen-color-test': {
      Guide: ScreenColorGuideTr,
      faqs: [
        {
          question: 'Ekran renk testi ücretsiz mi?',
          answer: 'Evet. İndirme veya kayıt olmadan her monitör, laptop, televizyon veya telefonda tarayıcınızda çalışır.',
        },
        {
          question: 'Renkler neden telefonumda ve monitörümde farklı görünüyor?',
          answer:
            'Ekranlar panel türü, renk modu ve kalibrasyon bakımından farklıdır. Ekran renk testini ikisinde de gece modu kapalıyken çalıştırın ve RGB geçişlerini karşılaştırın.',
        },
        {
          question: 'Bir renk testi ekran renklerimi düzeltebilir mi?',
          answer: 'Hayır, sorunları gösterir. Renk tonu sapmalarını ekranınızın renk sıcaklığı veya görüntü moduyla ya da sisteminizin kalibrasyon aracıyla düzeltin.',
        },
      ],
    },
    'frame-rate-test': {
      Guide: FrameRateGuideTr,
      faqs: [
        {
          question: 'Kare hızı testi 144 Hz monitörümde neden 60 gösteriyor?',
          answer:
            'Monitör muhtemelen 60 Hz’e ayarlıdır, kablo daha fazlasını taşıyamıyordur veya laptop güç tasarrufu yapıyordur. Ekran ayarlarınızı kontrol edin ve FPS testini yeniden yapın.',
        },
        {
          question: 'İnsan gözü 60 FPS’ten fazlasını görebilir mi?',
          answer: 'Evet. Çoğu kişi 120 FPS ve üzerinde daha akıcı hareketi fark eder. Yüksek yenileme hızlı bir ekranda 60 FPS şeridini maksimum şeridiyle karşılaştırın.',
        },
        {
          question: 'Kare hızı testi telefonlarda çalışır mı?',
          answer: 'Evet. Telefonunuzun tarayıcısında açın ve tam ekran için iki kez dokunun. 90 veya 120 Hz ekranlı telefonlarda maksimum şeridi daha akıcı görünür.',
        },
      ],
    },
    'oled-gray-test': {
      Guide: OledGrayGuideTr,
      faqs: [
        {
          question: 'OLED’de bir miktar mura normal mi?',
          answer: 'Evet. %1 ila %5 alanlarında hafif lekeler yaygındır. Yalnızca normal filmlerde ve oyunlarda fark ediyorsanız sorundur.',
        },
        {
          question: 'OLED gri testi LCD ekranlarda çalışır mı?',
          answer: 'Evet, ama LCD’ler koyu gri üzerinde bunun yerine arka ışık parlaması ve sızması gösterir. Bunlar için ekran homojenlik testi daha uygundur.',
        },
        {
          question: 'Hangi parlaklığı kullanmalıyım?',
          answer: 'Karanlık bir odada orta parlaklık. Çok yüksek parlaklık siyaha yakın sorunları gizleyebilir, çok düşük parlaklık ise abartabilir.',
        },
      ],
    },
    'hacked-screen': {
      Guide: HackedScreenGuideTr,
      faqs: [
        {
          question: 'Hacklenmiş ekran şakası güvenli mi?',
          answer: 'Evet. Yalnızca animasyon gösteren bir web sayfasıdır. Hiçbir şey yüklemez ve dosyalara, web kamerasına veya ağa dokunmaz.',
        },
        {
          question: 'Hacklenmiş ekranı nasıl kapatırım?',
          answer: 'Tam ekrandan çıkmak için Esc tuşuna basın, ardından sekmeyi kapatın.',
        },
        {
          question: 'Telefonlarda çalışır mı?',
          answer: 'Evet. Bir telefon tarayıcısında açın ve tam ekran için iki kez dokunun. Siren için önce bir dokunuş gerekir, çünkü telefonlar siz etkileşime girene kadar sesi engeller.',
        },
      ],
    },
    'no-signal-screen': {
      Guide: NoSignalGuideTr,
      faqs: [
        {
          question: 'Sinyal yok ekranını televizyonumda nasıl gösteririm?',
          answer: 'Sayfayı televizyonunuzun tarayıcısında açın ya da bir laptopu yansıtın veya bağlayın, ardından F tuşuna basın veya Tam Ekran’a dokunun.',
        },
        {
          question: 'SİNYAL YOK yazısını değiştirebilir miyim?',
          answer: 'Evet. Kendi mesajınızı (en fazla 24 karakter) ve HDMI 2 veya AV gibi giriş adını yazmak için Daha fazla menüsünü açın.',
        },
        {
          question: 'TV renk çubuklarındaki bip sesi nedir?',
          answer: 'Yayıncıların ses seviyelerini ayarlamak için renk çubuklarıyla birlikte çaldığı sabit 1 kHz test tonudur. 1 kHz ton düğmesiyle açın.',
        },
      ],
    },
  },
  colors: {
    white: {
      Guide: WhiteScreenGuideTr,
      faqs: [
        {
          question: 'Ekranımı tamamen beyaz nasıl yaparım?',
          answer: 'WhiteScreen.vip’i açın, beyazı seçin ve tarayıcınızın desteklediği yerlerde tam ekran modunu etkinleştirin.',
        },
        {
          question: 'Beyaz ekran telefonumda çalışır mı?',
          answer: 'Evet. Aracı uyumlu bir mobil tarayıcıda açabilirsiniz. Kullanılabilen tam ekran davranışı cihazınıza ve tarayıcınıza bağlıdır.',
        },
        {
          question: 'Beyaz ekran ölü pikselleri tespit edebilir mi?',
          answer:
            'Beyaz bir arka plan koyu pikselleri ortaya çıkarabilir; siyah ve ana renk arka planlar ise görünür diğer piksel kusurlarını göstermeye yardımcı olabilir. Bu görsel bir kontroldür, eksiksiz bir donanım teşhisi değildir.',
        },
        {
          question: 'Ekranım neden sürekli kapanıyor?',
          answer:
            'Cihazınızın uyku zamanlayıcısı, pil tasarrufu ayarları veya tarayıcı kısıtlamaları ekranı kapatabilir. Güç ayarlarınızı kontrol edin ve web sitesi ile tarayıcı destekliyorsa Ekranı açık tut özelliğini kullanın.',
        },
        {
          question: 'Parlak beyaz ekran OLED ekranlar için güvenli mi?',
          answer:
            'OLED ekranda parlak, sabit bir görüntüyü uzun süre bırakmaktan kaçının. Parlaklık ve ekran kullanımı için üreticinin önerilerine uyun. Hiçbir tarayıcı özelliği yanmanın önleneceğini garanti edemez.',
        },
        {
          question: 'WhiteScreen.vip ücretsiz mi?',
          answer:
            'WhiteScreen.vip, web tarayıcınızda online olarak tamamen ücretsizdir. Tüm ekran renkleri, testler ve görsel indirme özellikleri kayıt, hesap oluşturma veya yazılım yükleme gerektirmeden kullanılabilir.',
        },
        {
          question: 'Boş beyaz ekran ile saf beyaz ekran arasındaki fark nedir?',
          answer:
            'Burada ikisi aynı şeydir: saf beyazla (#FFFFFF) dolu ve üzerinde başka hiçbir şey olmayan bir ekran. Daha yumuşak, kırık beyaz bir görünüm istiyorsanız Sıcak’ı seçin veya parlaklığı düşürün.',
        },
        {
          question: 'Beyaz ekranı çizim kopyalamak için kullanabilir miyim?',
          answer:
            'Evet. Tam parlaklıktaki bir tablet veya monitör basit bir ışık masası olarak çalışır. Kâğıdınızı bantla sabitleyin ve ekrana sertçe bastırmadan nazikçe kopyalayın.',
        },
        {
          question: 'Beyaz ekran monitörümü temizlememe yardımcı olur mu?',
          answer:
            'Beyaz ekran tozu, parmak izlerini ve çizgileri kolayca görmenizi sağlar. Silmeden önce ekranı kapatın, ardından atladığınız lekeleri kontrol etmek için beyaz ekranı yeniden açın.',
        },
      ],
    },
    black: {
      Guide: BlackScreenGuideTr,
      faqs: [
        {
          question: 'Siyah ekran pil tasarrufu sağlar mı?',
          answer:
            'OLED telefonlarda, tabletlerde ve laptoplarda evet: siyah pikseller kapalıdır. LCD ekranlarda arka ışık açık kalır, bu yüzden çok az tasarruf sağlar. LCD’lerde parlaklığı düşürmek daha fazla tasarruf sağlar.',
        },
        {
          question: 'Siyah ekran bilgisayarımı uyanık tutar mı?',
          answer:
            'Evet; destekleyen tarayıcılarda, sayfa açık ve Ekranı açık tut etkinken. Sayfayı kapattığınızda veya seçeneği kapattığınızda normal uyku ayarlarınız geri gelir.',
        },
        {
          question: 'Siyah ekran monitörü kapatmakla aynı şey mi?',
          answer:
            'Hayır. Monitör açık kalır ve bilgisayarınız çalışmaya devam eder; ekran yalnızca saf siyah gösterir. OLED’de pikseller karanlık olduğu için kapalı gibi görünür, LCD ise arka ışığını yakmaya devam eder.',
        },
        {
          question: 'Telefonumda siyah bir ana ekran veya kilit ekranı ayarlayabilir miyim?',
          answer: 'Evet. İndir menüsünden iPhone veya Android boyutunu indirin ve ana ekran ya da kilit ekranı duvar kâğıdı olarak ayarlayın.',
        },
        {
          question: 'Siyah ekran videosu nasıl yapılır?',
          answer: '1080p veya 4K siyah bir PNG indirin, video düzenleyicinizin zaman çizelgesine yerleştirin ve istediğiniz uzunluğa kadar uzatın.',
        },
        {
          question: 'Monitör temizlemek için siyah mı yoksa beyaz mı daha iyi?',
          answer:
            'Siyah, özellikle açılı bir ışıkla parmak izlerini, çizgileri ve lekeleri net gösterir. Toz için [beyaz ekran](/) daha iyi çalışır. Silmeden önce ekranı kapatın.',
        },
      ],
    },
    red: {
      Guide: RedScreenGuideTr,
      faqs: [
        {
          question: 'Kırmızı ekranı iPhone veya Android telefonumda kullanabilir miyim?',
          answer: 'Evet. Bu sayfayı telefonunuzun tarayıcısında açın, tam ekran simgesine dokunun ve Ekranı açık tut’u açın. Loş bir gece lambası için Parlaklık kaydırıcısını düşürün.',
        },
        {
          question: 'Kırmızı ekranım neden turuncu görünüyor?',
          answer: 'Genellikle ekranın renk modu veya sıcak bir gece filtresi (Night Shift, Gece ışığı) rengi kaydırıyordur. Bunları kapatın ve standart ya da sRGB modunu kullanıp yeniden kontrol edin.',
        },
        {
          question: 'Kırmızı ekran karanlık oda güvenlik ışığı olarak kullanılabilir mi?',
          answer: 'Hayır. Kırmızısı yeterince dar filtrelenmemiştir ve film veya fotoğraf kâğıdı için çok parlaktır. Işığa duyarlı malzemeler için uygun bir güvenlik ışığı kullanın.',
        },
      ],
    },
    green: {
      Guide: GreenScreenGuideTr,
      faqs: [
        {
          question: 'Yeşil ölüm ekranı nedir?',
          answer:
            'Windows mavi ölüm ekranının, bir Windows Insider Preview sürümü çöktüğünde gösterilen yeşil versiyonudur. Xbox konsolları da yeşil bir yükleme ekranında takılabilir. Eğlence için göstermek mi istiyorsunuz? [Sahte mavi ölüm ekranını](/fake-blue-screen-of-death) deneyin.',
        },
        {
          question: 'Telefonumda yeşil ekran kullanabilir miyim?',
          answer:
            'Evet, küçük nesneler ve yakın çekimler için. Bu sayfayı açın, parlaklığı artırın, tam ekrana geçin ve Ekranı açık tut’u açın. Telefondan büyük her şey için yeşil kumaş veya düzenleyicinizde bir arka plan kullanın.',
        },
        {
          question: 'Bu yeşil ekran sitesi arka planımı kaldırır mı?',
          answer:
            'Hayır. Bu sayfa düz yeşil gösterir ve yeşil görseller indirmenizi sağlar. Arka planın kaldırılması OBS, CapCut, Zoom veya Teams gibi video ya da yayın uygulamanızda gerçekleşir.',
        },
      ],
    },
    blue: {
      Guide: BlueScreenGuideTr,
      faqs: [
        {
          question: 'Bu mavi ekran Windows mavi ölüm ekranı mı?',
          answer:
            'Hayır. Bu, aydınlatma, test ve düzenleme için düz mavi bir renk ekranıdır. Hata göstermez ve bilgisayarınızı etkilemez. Şaka olarak hata ekranını mı arıyorsunuz? [Sahte mavi ölüm ekranını](/fake-blue-screen-of-death) deneyin.',
        },
        {
          question: 'Mavi ekranı laptopumda, bilgisayarımda veya telefonumda kullanabilir miyim?',
          answer: 'Evet. Her modern tarayıcıda çalışır. Tam ekran için iki kez dokunun, Ekranı açık tut’u açın ve tonu ayarlamak için Parlaklık kaydırıcısını kullanın.',
        },
        {
          question: 'Saf mavi ekran neden bu kadar koyu görünüyor?',
          answer: 'Gözlerimiz maviye en az duyarlıdır; bu yüzden saf mavi aynı parlaklıkta yeşil veya kırmızıdan çok daha koyu görünür. Bu normaldir, bir hata değildir.',
        },
      ],
    },
    yellow: {
      Guide: YellowScreenGuideTr,
      faqs: [
        {
          question: 'Sarı ekran gözü daha az yorar mı?',
          answer: 'Sarıda mavi ışık yoktur ve birçok kişi bunu akşamları daha rahatlatıcı bulur. Tam parlaklıkta sarı yine de parlaktır; daha yumuşak bir sıcak ışık için Parlaklık kaydırıcısını düşürün.',
        },
        {
          question: 'Sarı ekranı daha sıcak veya daha yumuşak yapabilir miyim?',
          answer: 'Evet. Altın sarısı için Sıcak’ı seçin, daha loş ve yumuşak bir ışık için Parlaklık kaydırıcısını düşürün.',
        },
        {
          question: 'Sarı ekran görseli indirebilir miyim?',
          answer: 'Evet. 1080p, 1440p, 4K veya 8K’da, telefon ve tablet boyutlarında ya da özel boyutta sarı bir PNG kaydetmek için önizlemenin altındaki İndir’i kullanın.',
        },
      ],
    },
    pink: {
      Guide: PinkScreenGuideTr,
      faqs: [
        {
          question: 'Bu pembenin renk kodu nedir?',
          answer: '#FF69B4’tür (RGB 255, 105, 180); genellikle sıcak pembe (hot pink) olarak adlandırılır. Mercan pembesi için Sıcak’ı, gül pembesi için Soğuk’u seçin veya daha koyu bir pembe için Parlaklık kaydırıcısını düşürün.',
        },
        {
          question: 'Pembe ekranı 10 saat açık tutabilir miyim?',
          answer: 'Evet. Ekranı açık tut’u açın; destekleyen tarayıcılarda sayfa açık olduğu sürece ekran açık kalır. Uzun kullanımlar için laptopunuzu veya telefonunuzu şarja takın.',
        },
        {
          question: 'Pembe ekranım neden mor görünüyor?',
          answer: 'Ekran maviyi çok güçlü veriyordur. Önizlemenin altından Sıcak’ı seçin veya ekranınızı daha sıcak bir renk sıcaklığına ya da sRGB moduna geçirin.',
        },
      ],
    },
  },
  glanceHeadings: {
    'dvd-screensaver': 'DVD ekran koruyucu nedir?',
    'broken-screen': 'Kırık ekran efekti nedir?',
    'fake-zoom-meeting': 'Sahte Zoom toplantı ekranı nedir?',
    'fake-windows-10-update': 'Sahte Windows 10 güncellemesi nedir?',
    'fake-windows-11-update': 'Sahte Windows 11 güncellemesi nedir?',
    'fake-blue-screen-of-death': 'Sahte mavi ölüm ekranı nedir?',
    'fake-mac-update': 'Sahte Mac güncellemesi nedir?',
    'pomodoro-timer': 'Pomodoro zamanlayıcı nedir?',
    'flip-clock-screensaver': 'Yaprak saat ekran koruyucu nedir?',
    'zoom-lighting': 'Görüntülü görüşme ışığı nedir?',
    'countdown-timer': 'Geri sayım sayacı nedir?',
    'ring-light': 'Online halka ışık nedir?',
    stopwatch: 'Online kronometre nedir?',
    'screen-refresh-rate-test': 'Ekran yenileme hızı testi nedir?',
    'dead-pixel-test': 'Ölü piksel testi nedir?',
    'touch-screen-test': 'Dokunmatik ekran testi nedir?',
    'monitor-ghosting-test': 'Monitör gölgelenme testi nedir?',
    'monitor-test': 'Monitör testi nedir?',
    'screen-burn-in-test': 'Ekran yanma testi nedir?',
    'screen-resolution-test': 'Ekran çözünürlük testi nedir?',
    'screen-color-test': 'Ekran renk testi nedir?',
    'frame-rate-test': 'Kare hızı (FPS) testi nedir?',
    'oled-gray-test': 'OLED gri testi nedir?',
    'hacked-screen': 'Hacklenmiş ekran simülatörü nedir?',
    'no-signal-screen': 'Sinyal yok ekranı nedir?',
    'white-screen': 'Beyaz ekran nedir?',
    'black-screen': 'Siyah ekran nedir?',
    'red-screen': 'Kırmızı ekran nedir?',
    'green-screen': 'Yeşil ekran nedir?',
    'blue-screen': 'Mavi ekran nedir?',
    'yellow-screen': 'Sarı ekran nedir?',
    'pink-screen': 'Pembe ekran nedir?',
  },
}
