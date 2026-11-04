import type { ToolTranslations } from './types'

export const tr: ToolTranslations = {
  'white-screen': {
    glance: {
      answer:
        'Beyaz ekran, tüm ekranınızı saf beyazla (#FFFFFF) doldurur. Tam ekran düğmesine tıklayın ya da F tuşuna basın; her piksel aynı rengi gösterir, çubuk ya da dikkat dağıtan bir şey kalmaz. En yüksek parlaklıkta ekranınızın verebileceği en güçlü ışıktır: görüntülü görüşme ve fotoğraf ışığı, monitör temizliği, çizim kopyalama ve ölü piksel bulma için kullanılır.',
      features: [
        'Saf beyaz #FFFFFF veya istediğiniz hex renk',
        'Tek tıkla tam ekran ve parlaklık ayarı',
        '2700 K (sıcak) ile 9300 K (soğuk) arası renk sıcaklığı',
        '720p’den 8K’ya ücretsiz PNG indirme',
      ],
      benefits: [
        'Görüşme, selfie ve çizim için anında yumuşak ışık',
        'Telefon, dizüstü, monitör ve akıllı TV’de çalışır',
        'Uygulama, kayıt ve kurulum gerektirmez',
      ],
    },
  },
  'black-screen': {
    glance: {
      answer:
        'Siyah ekran, tek tıkla tüm ekranınızı saf siyah (#000000) yapar. OLED ekranlarda pikseller tamamen kapanır; ekrandakini gizlemenin, ışık sızmasını kontrol etmenin ya da enerji tasarrufu yapmanın en hızlı yoludur.',
      features: [
        'Saf siyah #000000 veya istediğiniz özel renk',
        'Tek tıkla tam ekran ve parlaklık ayarı',
        'Tam ekranda ekranı açık tutar',
        '720p’den 8K’ya ücretsiz PNG indirme',
      ],
      benefits: ['Işık sızmasını, IPS parlamasını ve takılı pikselleri gösterir', 'OLED ekranlarda enerji tasarrufu sağlar', 'Ücretsiz, kurulum yok'],
    },
  },
  'dead-pixel-test': {
    glance: {
      answer:
        'Ölü piksel testi, ekranı sırayla düz renklerle doldurur ve kusurlu pikselleri belirgin hale getirir. Ölü piksel her renkte siyah kalır, takılı piksel tek bir parlak renkte kalır, sıcak piksel ise beyaz kalır. Tam kontrol her monitör, dizüstü, TV veya telefonda yaklaşık bir dakika sürer.',
      features: [
        'Tam ekran beyaz, siyah, kırmızı, yeşil, mavi ve gri alanlar',
        'Otomatik geçiş veya ok tuşlarıyla geçiş',
        'LCD, IPS, VA, OLED ve mini-LED panellerde çalışır',
        'Ölü, takılı ve sıcak pikselleri ayırt etme ipuçları',
      ],
      benefits: [
        'Kusurları iade süresi dolmadan yakalayın',
        'İkinci el monitör veya telefonu ödemeden önce kontrol edin',
        'Ücretsiz, gizli, kurulum yok',
      ],
    },
    steps: [
      'Tozu kusurlu pikselle karıştırmamak için önce ekranı temizleyin.',
      'Tam ekran için F tuşuna basın; renkleri ok tuşları, tıklama veya otomatik geçişle değiştirin.',
      'Her renkte paneli dikkatle inceleyin. Büyüteç veya telefon kamerasının yakınlaştırması işe yarar.',
      'Açık renklerde koyu noktalar ölü pikseli; siyah üzerinde parlak veya renkli noktalar takılı ya da sıcak pikseli gösterir.',
    ],
    useCases: [
      { title: 'Yeni monitör', description: 'Yeni monitör, dizüstü veya TV’yi iade süresi içinde kontrol edin.' },
      { title: 'İkinci el alım', description: 'Kullanılmış telefon veya dizüstünü ödemeden önce test edin.' },
      { title: 'Garanti kanıtı', description: 'Garanti başvurusu için kusuru düz renk üzerinde fotoğraflayın.' },
      { title: 'Düzenli kontrol', description: 'Ara sıra yeni kusur oluşmadığını doğrulayın.' },
    ],
    faqs: [
      {
        question: 'Ölü piksel ile takılı piksel arasındaki fark nedir?',
        answer:
          'Ölü piksel her renkte karanlık kalır. Takılı piksel tek bir renkte yanık kalır, siyah üzerinde kırmızı nokta gibi. Sıcak piksel beyaz kalır. Takılı pikseller bazen düzelir; ölü pikseller neredeyse hiç düzelmez.',
      },
      {
        question: 'Bu araç ölü pikselleri onarır mı?',
        answer:
          'Hayır. Test yalnızca kusurları görmenizi sağlar. Takılı pikseller için hızlı renk değişimi bazen önerilir ama garantisi yoktur; ölü piksel bir donanım arızasıdır.',
      },
      {
        question: 'Ölü pikseli nasıl bildiririm?',
        answer:
          'Kusurun en iyi göründüğü renkte net bir fotoğraf çekin, yerini not edin ve faturanızla üreticiye veya satıcıya başvurun.',
      },
    ],
  },
  'screen-refresh-rate-test': {
    glance: {
      answer:
        'Yenileme hızı testi, ekranınızın görüntüyü saniyede kaç kez yeniden çizdiğini hertz (Hz) cinsinden ölçer. Tarayıcının karelerini zamanlayarak 60, 75, 120, 144, 165 veya 240 Hz sonucunu verir; böylece yüksek yenileme hızlı monitörünüzün gerçekten belirtilen hızda çalıştığını doğrularsınız.',
      features: [
        'Canlı Hz ölçümü ve en yakın standart değer',
        'Ortalama, en düşük ve en yüksek kare süresi',
        'Ayar değiştirdikten sonra yeniden ölçüm',
        'Monitör, dizüstü, telefon ve tablette çalışır',
      ],
      benefits: [
        '144 veya 240 Hz monitörünüzün 60 Hz’de kalmadığını doğrulayın',
        'Kabloyu, portu ve Windows ya da macOS ayarını kontrol edin',
        'Saniyeler içinde sonuç, indirme yok',
      ],
    },
    steps: [
      'Sayfayı açın ve değerin oturması için bir iki saniye bekleyin.',
      'Hz değerini ve en yakın standart değeri okuyun.',
      'Yüksek hızlı monitör 60 Hz gösteriyorsa ekran ayarlarını ve kabloyu kontrol edip tekrar test edin.',
      'Tam ekran için F’ye basın veya iki kez dokunun, çıkmak için Esc’ye basın.',
    ],
    useCases: [
      { title: 'Yeni monitör', description: '144 veya 240 Hz monitörün gerçekten o hızda çalıştığını doğrulayın.' },
      { title: 'Kablo ve port', description: 'Eski HDMI kablo veya portlar sizi 60 Hz ile sınırlayabilir.' },
      { title: 'Pilde çalışan dizüstü', description: 'Birçok dizüstü prize takılı değilken 60 Hz’e düşer.' },
      { title: 'Telefon ve tablet', description: 'Uyarlanabilir 90/120 Hz modlarının açık olup olmadığını görün.' },
    ],
    faqs: [
      {
        question: '144 Hz monitörüm neden 60 Hz gösteriyor?',
        answer:
          'Yenileme hızı işletim sisteminin ekran ayarlarından seçilir ve kablonun da desteklemesi gerekir (DisplayPort veya HDMI 2.0 ve üstü). Tarayıcı penceresinin doğru monitörde olduğunu da kontrol edin.',
      },
      {
        question: 'Değer neden oynuyor?',
        answer:
          'Yoğun sekmeler, güç tasarrufu ve değişken yenileme (FreeSync, G-Sync, ProMotion) kare zamanlamasını değiştirir. Ölçüm, bunu yumuşatmak için son karelerin medyanını kullanır.',
      },
      {
        question: 'Yenileme hızı FPS ile aynı şey mi?',
        answer:
          'Hayır. Yenileme hızı ekranın ne sıklıkla güncellendiğidir; FPS ise bir oyunun ya da videonun kaç yeni kare ürettiğidir. Yenileme hızınızın izin verdiğinden fazla kare göremezsiniz.',
      },
    ],
  },
  'touch-screen-test': {
    glance: {
      answer:
        'Dokunmatik ekran testi, ekranınızın her bölümünün dokunmaya yanıt verip vermediğini kontrol eder. Ölü bölgeleri bulmak için ızgaradaki her kareye dokunun, kopma veya sıçramaları görmek için çizgi çizin ve telefonunuzun ya da tabletinizin kaç dokunma noktası desteklediğini görmek için birkaç parmağınızı aynı anda koyun.',
      features: [
        'Dokunulan her kareyi işaretleyen ızgara ve kapsama yüzdesi',
        'Boşluk, sıçrama ve hayalet dokunuşları bulmak için çizim modu',
        'Aynı anda kaç parmak algılandığını sayan çoklu dokunma modu',
        'Parmak, kalem ve fareyle çalışır',
      ],
      benefits: ['Düşme veya ekran değişiminden sonra ölü bölgeleri bulun', 'İkinci el telefon veya tableti almadan önce test edin', 'Uygulama kurmanız gerekmez'],
    },
    steps: [
      'Ölü bölge ızgarasını seçin ve kapsama %100 olana kadar parmağınızı her karenin üzerinden yavaşça geçirin.',
      'Birkaç denemeye rağmen dolmayan kareler ölü bölgeye işaret eder.',
      'Çizim moduna geçin ve yavaş çizgiler çekin; kopma veya sıçrama kaçan dokunuş demektir.',
      'Çoklu dokunmayı açın ve birkaç parmağınızı koyarak aynı anda kaç tanesinin algılandığını görün.',
    ],
    useCases: [
      { title: 'Yanıt vermeyen noktalar', description: 'Telefon veya tabletin dokunuşu tam olarak nerede algılamadığını bulun.' },
      { title: 'Tamirden sonra', description: 'Cihazı teslim almadan önce yeni dokunmatik paneli test edin.' },
      { title: 'İkinci el alım', description: 'Tüm yüzeyi bir dakikada test edin.' },
      { title: 'Hayalet dokunuşlar', description: 'Parmak yokken beliren dokunma noktalarına dikkat edin.' },
    ],
    faqs: [
      {
        question: 'Ekranım kaç dokunma noktası desteklemeli?',
        answer: 'Çoğu telefon ve tablet 5–10 parmağı algılar. Sayfa, tarayıcınızın bildirdiği sayıyı ve aynı anda görülen en yüksek değeri gösterir.',
      },
      {
        question: 'Fare veya kalemle çalışır mı?',
        answer: 'Evet. Fare ve kalem girişi de çizilir, böylece bir kalemi aynı şekilde test edebilirsiniz.',
      },
      {
        question: 'Ölü bölgelere ne sebep olur?',
        answer: 'Çatlak cam, hasarlı dokunmatik panel kablosu, nem veya hava kabarcıklı ekran koruyucu. Önce koruyucuyu çıkarıp tekrar test edin.',
      },
    ],
  },
  'white-noise-generator': {
    glance: {
      answer:
        'Beyaz gürültü üreteci, duyulabilen tüm frekansları eşit güçte içeren sabit bir hışırtı çalar. Bu düzenli ses konuşmaları, trafiği ve ani gürültüleri bastırır; bu yüzden odaklanmak, ders çalışmak, bebekleri sakinleştirmek ve uyumak için kullanılır. Sesi kısık tutun ve gece için zamanlayıcı ekleyin.',
      features: [
        'Beyaz, pembe ve kahverengi gürültü tek oynatıcıda',
        'Ton filtresi ve desibel cinsinden ses seviyesi',
        'Yumuşak kapanan uyku zamanlayıcısı',
        'İsteğe bağlı görsel: TV karıncalanması veya dalga',
      ],
      benefits: ['Ofiste ve evde dikkat dağıtıcıları bastırır', 'Birçok kişinin daha hızlı uykuya dalmasına yardım eder', 'Ücretsiz, sınırsız, uygulamasız'],
    },
    steps: [
      'Başlat’a basın. Basmadan ses çalmaz ve orta seviyede başlar.',
      'Beyaz, Pembe ve Kahverengi düğmeleri her üreteci açar; ses, filtre ve görsel ayarlarınız korunur.',
      'Alçak geçiren filtre hışırtıyı yumuşatır, yüksek geçiren filtre uğultuyu alır; kesim frekansını ayarlayın.',
      'Bir görsel (dalga, TV karıncalanması veya karanlık ekran) ve isterseniz uyku zamanlayıcısı seçin.',
      'Ekranı doldurmak için F’ye veya Tam ekran’a basın, çıkmak için Esc’ye basın.',
    ],
    useCases: [
      { title: 'Uyku', description: 'Trafiği, komşuları ve horlamayı sabit bir sesle bastırın.' },
      { title: 'Odaklanma', description: 'Çalışırken veya ders çalışırken konuşmaları ve ev seslerini örtün.' },
      { title: 'Bebekler', description: 'Birçok ebeveyn bebeği sakinleştirmek için hafif beyaz gürültü kullanır. Sesi kısık ve beşikten uzak tutun.' },
      { title: 'Retro TV karıncalanması', description: 'Görseli TV karıncalanmasına alarak video, dekor veya temalı partilerde kullanın.' },
    ],
    faqs: [
      {
        question: 'Beyaz gürültü nedir?',
        answer: 'Beyaz gürültü her frekansta eşit güce sahiptir. Kulağa ayarlanmamış bir radyo ya da televizyon gibi parlak ve düzenli bir hışırtı olarak gelir.',
      },
      {
        question: 'Alçak ve yüksek geçiren filtreler ne işe yarar?',
        answer:
          'Alçak geçiren filtre kesim noktasının altındaki frekansları tutar, gürültü daha koyu ve yumuşak olur. Yüksek geçiren filtre üsttekileri tutar, uğultuyu alır ve sesi daha havadar yapar.',
      },
      {
        question: 'Veri kullanır mı?',
        answer: 'Hayır. Gürültü Web Audio API ile cihazınızda üretilir; hiçbir şey akış olarak gelmez ve yüklendikten sonra çevrimdışı da çalışır.',
      },
      {
        question: 'TV karıncalanmasını izlemek güvenli mi?',
        answer: 'Hızlı titreme rahatsız edici olabilir ve ışığa duyarlı epilepsiyi tetikleyebilir. Hassassanız dalga veya karanlık görseli kullanın.',
      },
    ],
  },
  'fake-blue-screen-of-death': {
    glance: {
      answer:
        'Sahte mavi ölüm ekranı (BSOD), Windows hata ekranını taklit eder: üzgün yüz, “Bilgisayarınız bir sorunla karşılaştı” yazısı, durdurma kodu ve ilerleme sayacı. Tamamen görseldir: hiçbir şey çökmez, Esc ile çıkarsınız. Windows 10, Windows 11, yeni siyah ekran veya klasik XP’yi seçin.',
      features: ['Windows 10, 11, siyah ve klasik XP stilleri', 'CRITICAL_PROCESS_DIED gibi gerçek durdurma kodları', 'Yükselen yüzde ve QR benzeri blok', 'Gizli imleçle tam ekran'],
      benefits: ['En inandırıcı bilgisayar şakası', 'Video ve eğitimler için gerçekçi dekor', 'Tamamen zararsız'],
    },
    steps: [
      'Bir stil seçin: Windows 10, Windows 11, yeni siyah ekran veya klasik XP/7.',
      'Bir durdurma kodu ve sayacın %100’e ne kadar sürede ulaşacağını seçin.',
      'Tam ekran için iki kez dokunun veya F’ye basın. İmleç kısa sürede gizlenir.',
      'Çıkmak için Esc’ye basın ya da fareyi oynatıp kapat düğmesine tıklayın.',
    ],
    useCases: [
      { title: 'Ofis şakası', description: 'Bir iş arkadaşınızın ekranında birkaç saniye bırakın, sonra şakayı açıklayın.' },
      { title: 'Video ve yayınlar', description: 'Gerçek bir bilgisayarı çökertmeden kamerada çökme gösterin.' },
      { title: 'BT eğitimi', description: 'Durdurma hatasının nasıl göründüğünü ve kodun anlamını gösterin.' },
      { title: 'Film ve tiyatro', description: 'Herhangi bir cihazda bir sahne için inandırıcı çökme ekranı.' },
    ],
    faqs: [
      {
        question: 'Mavi ölüm ekranı nedir?',
        answer:
          'Windows’un, arızalı bir sürücü veya bellek hatası gibi kurtaramadığı bir sorunla karşılaştığında gösterdiği tam ekran hatadır. Bir durdurma kodu gösterir, çökme bilgilerini kaydeder ve yeniden başlatır.',
      },
      {
        question: 'Durdurma kodları ne anlama gelir?',
        answer:
          'Her biri arıza türünü belirtir: CRITICAL_PROCESS_DIED bir sistem işleminin durduğunu, IRQL_NOT_LESS_OR_EQUAL genellikle bir sürücüyü, MEMORY_MANAGEMENT ise çoğu zaman RAM’i işaret eder. Burada yalnızca metindir.',
      },
      {
        question: 'Bilgisayarıma zarar verebilir mi?',
        answer: 'Hayır. Bir tarayıcı sekmesindeki görüntüdür. Windows’u çökertmez, ayarları değiştirmez ve hiçbir şey yüklemez.',
      },
      {
        question: 'Yeni çökme ekranı neden siyah?',
        answer: 'Microsoft 2025’te Windows 11’deki mavi ekranı daha sade bir siyah ekranla değiştirdi. O görünüm için “Siyah (yeni)” seçeneğini seçin.',
      },
      {
        question: 'Microsoft ile bağlantılı mı?',
        answer: 'Hayır. Eğlence amaçlı bağımsız bir yeniden yapımdır; Microsoft ile bağlantısı veya sponsorluğu yoktur.',
      },
    ],
  },
  'pomodoro-timer': {
    glance: {
      answer:
        'Pomodoro zamanlayıcı, işi 5 dakikalık molalarla ayrılan 25 dakikalık odak bloklarına böler ve her dört bloktan sonra uzun bir mola verir. Francesco Cirillo’nun 1980’lerin sonunda geliştirdiği bu yöntem, işe başlamayı kolaylaştırır, tükenmişliği önler ve tamamlanan blokları saymanızı sağlar.',
      features: ['Uzun molalı 25/5 döngüsü', 'Ayarlanabilir süreler ve otomatik başlatma', 'Sesli uyarı ve sekmede geri sayım', 'Oturum sayacı ve ilerleme halkası'],
      benefits: ['Kısa hedeflerle erteleme alışkanlığını yenin', 'Molalar yorgunluğu azaltır', 'Ücretsiz, hesap gerekmez'],
    },
    steps: [
      '25 dakikalık bir odak oturumu başlatmak için Başlat’a basın.',
      'İsterseniz odak ve mola sürelerini değiştirin (örneğin 50/10).',
      'Her aşama bitince bir uyarı çalar ve sonraki başlar; her birini kendiniz başlatmak için otomatik başlatmayı kapatın.',
      'İleri gitmek için Atla’yı, baştan başlamak için Sıfırla’yı kullanın. Boşluk tuşu başlatır ve duraklatır.',
      'Ekranı doldurmak için F’ye veya Tam ekran’a basın, çıkmak için Esc’ye basın.',
    ],
    useCases: [
      { title: 'Ders çalışma', description: 'Tekrarı gerçek molalarla kısa ve odaklı bloklara bölün.' },
      { title: 'Derin çalışma', description: 'Her seferinde 25 dakikayı e-posta ve sohbetten koruyun.' },
      { title: 'Sınıfta', description: 'Süreli çalışma ve molalar için zamanlayıcıyı projeksiyona yansıtın.' },
      { title: 'Alışkanlık edinme', description: 'Ne kadar odaklı zaman biriktirdiğinizi görmek için oturumları sayın.' },
    ],
    faqs: [
      {
        question: 'Pomodoro tekniği nedir?',
        answer:
          '1980’lerin sonundan kalma bir zaman yönetimi yöntemi: odaklı bloklar halinde çalışın (geleneksel olarak 25 dakika), her bloktan sonra kısa, her dört bloktan sonra uzun mola verin.',
      },
      {
        question: 'Zamanlayıcı arka plandaki sekmede çalışmaya devam eder mi?',
        answer: 'Evet. Gerçek saate göre sayar; tarayıcı gizli sekmeleri yavaşlatsa bile doğru kalır ve sekme başlığı kalan süreyi gösterir.',
      },
      {
        question: 'Süreleri değiştirebilir miyim?',
        answer: 'Evet. Odak, kısa mola ve uzun mola sürelerini dakika olarak ve uzun moladan önceki oturum sayısını ayarlayın.',
      },
    ],
  },
}
