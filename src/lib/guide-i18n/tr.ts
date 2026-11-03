import type { GuideTranslation } from './types'

export const tr: Record<string, GuideTranslation> = {
  'dead-pixel-test': {
    slug: 'olu-piksel-testi',
    navLabel: 'Ölü piksel testi',
    title: 'Ölü piksel testi: her ekranda ölü, takılı ve sıcak pikselleri bulma',
    metaTitle: 'Ölü piksel testi: ölü ve takılı pikselleri bulun',
    metaDescription:
      'Windows, Mac, iPhone ve Android’de ölü piksel testi yapmayı öğrenin. Tam ekran ana renklerle ölü, takılı ve sıcak pikselleri adım adım bulun.',
    readingTime: '6 dk okuma',
    category: 'Ekran teşhisi',
    intro:
      'Her modern panel (LCD, IPS, VA veya OLED) mikro transistörlerle kontrol edilen milyonlarca küçük kırmızı, yeşil ve mavi alt pikselden oluşur. Bir transistör bozulduğunda ya da takıldığında okumayı, fotoğraf düzenlemeyi ve oyunu bozan can sıkıcı bir kusur ortaya çıkar. Ekranı tam ekran ana renklerle test etmek, iade süresi içinde ya da garanti bitmeden piksel kusurlarını bulmanın en hızlı ve güvenilir yoludur.',
    toolLabel: 'Ölü piksel testini aç',
    toolDescription: 'Kusurları bulmak için tam ekranda kırmızı, yeşil, mavi, siyah ve beyaz arasında geçiş yapın.',
    sections: [
      {
        title: 'Ölü, takılı ve sıcak piksel: nasıl ayırt edilir',
        content: [
          'Her piksel kusuru aynı görünmez ve aynı davranmaz. Türünü tam olarak bilmek, bir yazılım döngüsünün onu çözüp çözemeyeceğini ya da panelin garanti kapsamında değişmesi gerekip gerekmediğini anlamanıza yardım eder.',
          'Ölü piksel, onu kontrol eden transistör tamamen kapalı kaldığında oluşur. Arkadan aydınlatmalı LCD ekranlarda, çevresi hangi rengi gösterirse göstersin kalıcı siyah bir nokta olarak görünür.',
          'Takılı piksel, bir ya da iki alt piksel (kırmızı, yeşil veya mavi) sürekli yanık kaldığında, diğerleri normal çalışırken oluşur. Koyu ya da kontrastlı arka planlarda parlak, sabit renkli bir nokta olarak görünür.',
          'Sıcak piksel, üç alt pikselin de aynı anda tam parlaklıkta takılı kalmasıyla oluşur. Siyah ve koyu içerik üzerinde çok belirgin, kalıcı beyaz bir nokta ortaya çıkar.',
        ],
        tips: [
          'Ölü pikseller beyaz, kırmızı, yeşil veya mavi ekranda siyah nokta olarak görünür.',
          'Takılı pikseller koyu arka planda renkli (kırmızı, yeşil veya mavi) nokta olarak görünür.',
          'Sıcak pikseller koyu arka planda kalıcı beyaz noktacıklar olarak görünür.',
        ],
      },
      {
        title: 'Önemli ilk adım: teşhisten önce temizleyin',
        content: [
          '"Ölü piksel" sanılan şeylerin şaşırtıcı bir kısmı aslında mikroskobik toz, kurumuş hapşırık damlacıkları ya da camda kalmış küçük yağ lekeleridir.',
          'Panelde donanım kusuru olduğuna karar vermeden önce, monitör kapalıyken ekranı temiz ve kuru bir optik mikrofiber bezle nazikçe silin. Asla tırnakla kazımayın: yansıma önleyici polarize filtreleri kalıcı olarak çizebilirsiniz.',
        ],
      },
      {
        title: 'Tüm cihazlar için adım adım test',
        content: ['Masaüstü monitörleri, dizüstü ekranları, tabletleri ve telefonları ayrıntılı test etmek için bu adımları izleyin.'],
        steps: [
          'WhiteScreen.vip ölü piksel testini açın ve adres çubuğu, görev çubuğu gibi öğeleri kaldırmak için tam ekrana geçin.',
          'Önce beyaz ekranı inceleyin: paneli sol üstten sağ alta doğru yavaşça tarayarak sabit siyah noktalar (ölü pikseller) arayın.',
          'Siyaha geçin: parlak beyaz noktalar (sıcak pikseller) ya da renkli noktacıklar (takılı pikseller) arayın.',
          'Saf kırmızı, yeşil ve maviyi sırayla açın: her ana renk bir alt piksel kanalını test eder. Bozuk alt piksel koyulaşmış ya da farklı renkte bir nokta olarak görünür.',
          'Windows veya macOS’ta: parlaklığı %80–100’e getirin ve optik kırınımı önlemek için ekrana tam karşıdan bakın.',
          'iPhone veya Android’de: tarayıcı kenar boşluğu kalmadığından emin olun ya da test renklerini galeriye kaydedip tam ekranda açın.',
        ],
      },
      {
        title: 'Tarayıcı testinin sınırları ve garanti gerçekleri',
        content: [
          'Tarayıcı tabanlı test araçları, her pikseli video sıkıştırma kusurları olmadan %100 doygunlukta sürdüğü için anında ve doğru bir görsel teşhis sağlar.',
          'Ancak yanıp sönen renklerin ya da döngüdeki videoların kalıcı ölü pikselleri sihirli biçimde onardığını iddia eden sitelere dikkat edin. Hızlı bir alt piksel çalıştırıcısı bazen tembel bir transistörü çözebilir, ama kopmuş bir devre ya da yanmış bir transistör yazılımla onarılamaz.',
          'Üreticinizin piksel kusuru sınıfına bakın (ISO 9241-307 / ISO 13406-2). Çoğu monitör garantisi, ücretsiz değişim için 3 ila 5 ölü alt piksel ya da merkez bölgede en az bir ölü piksel ister.',
        ],
        checklist: [
          'Kusur sayısını 14–30 günlük iade süresi içinde üreticinin garanti koşullarıyla karşılaştırın.',
          'Müşteri hizmetlerine kanıt olarak kusurun telefonla yakın çekim fotoğrafını çekin.',
          'Satıcınızın satın alma sonrası ilk dönemde "sıfır ölü piksel" garantisi sunup sunmadığını kontrol edin.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Tarayıcıdaki bir test ölü pikseli onarabilir mi?',
        answer:
          'Hayır. Transistör fiziksel olarak kırılmış ya da yanmışsa yazılım onu onaramaz. Hızlı yanıp sönen araçlar bazen takılı alt pikselleri çözebilir, ama kalıcı ölü pikseller panel değişimi gerektirir.',
      },
      {
        question: 'Takılı pikseller neden bazen kendiliğinden kaybolur?',
        answer:
          'Sıvı kristal panellerde takılı pikseller çoğunlukla elektrik yükü dengesizliğinden ya da hafif fiziksel gerilimden kaynaklanır. Ekran ısınıp soğudukça ısıl genleşme ve voltaj döngüleri bazen sıvı kristalin normal yönelimini geri getirir.',
      },
      {
        question: 'Ekrandaki tozu ölü pikselden nasıl ayırırım?',
        answer:
          'Başınızı yaklaşık 15 cm sağa ya da sola oynatarak bakış açınızı değiştirin. Camın bir kalınlığı olduğu için yüzeydeki toz alttaki ışık katmanına göre hafifçe kayar (paralaks etkisi); ölü piksel ise piksel ızgarasında sabit kalır.',
      },
    ],
  },
  'screen-color-test': {
    slug: 'ekran-renk-testi',
    navLabel: 'Ekran renk testi',
    title: 'Ekran renk testi: monitörünüzün renk doğruluğunu ve dengesini değerlendirme',
    metaTitle: 'Ekran renk testi: renk doğruluğu ve dengesi',
    metaDescription:
      'Monitörünüzü renk kayması, bantlanma, gama sapması ve kontrast dengesi açısından test edin. PC, Mac ve telefon için adım adım renk testi rehberi.',
    readingTime: '6 dk okuma',
    category: 'Ekran kalibrasyonu',
    intro:
      'Fotoğraf düzenliyor, video renklendiriyor, web sitesi tasarlıyor ya da aynı masadaki iki monitörü eşitlemeye çalışıyor olun, doğru renk çok önemlidir. Hafif renk kaymaları, düzensiz gama eğrileri ve sert renk bantları siz fark etmeden işinizi bozabilir. Tam ekran referans alanlarla yapılan sistematik bir renk testi, pahalı cihazlar olmadan renk kaymasını, beyaz nokta sapmasını ve kırpılmış doygunluğu gösterir.',
    toolLabel: 'Ekran renk testini aç',
    toolDescription: 'Tüm ekranda nötr grileri, ana renkleri ve doygunluk dengesini test edin.',
    sections: [
      {
        title: 'Kalibrasyondan önce neden gözle renk testi yapmalı',
        content: [
          'Pek çok monitör fabrikadan, mağazada göz alıcı görünsün diye abartılı mavi tonla, aşırı doygun yeşillerle ve ezilmiş siyahlarla çıkar; doğruluk için değil.',
          'Bir kolorimetreye yatırım yapmadan önce yapılandırılmış bir görsel test, ekranınızda genel bir renk kayması (örneğin orta tonlarda yeşil ya da macenta), ezilmiş siyahlar veya açıya göre büyük renk değişimi olup olmadığını gösterir.',
        ],
        tips: [
          'Renkleri değerlendirmeden önce monitörü en az 30 dakika ısıtın; arka ışığın renk sıcaklığı ısınırken değişir.',
          'Cama renkli yansıma yapan oda ışıklarını kapatın.',
        ],
      },
      {
        title: 'Adım adım renk testi',
        content: ['Bu doğrulama adımlarını Windows, macOS ve çok monitörlü masalarda uygulayın.'],
        steps: [
          'Yazılımsal renk filtrelerini kapatın: Windows’ta Gece ışığı, macOS’ta True Tone ve Night Shift, telefonda göz konforu modu.',
          'WhiteScreen.vip ekran renk testini tam ekranda açın ve %50 nötr gri örneği seçin.',
          'Griyi değerlendirin: saf nötr gri pembemsi, yeşilimsi ya da mavimsi görünmemelidir. Görünen her kayma beyaz noktanın saptığını gösterir.',
          'Kırmızı, yeşil ve maviyi sırayla açın: renklerin köşeden köşeye eşit kaldığını, kenarlarda koyulaşmadığını ya da ton değiştirmediğini kontrol edin.',
          'İkincil renkleri (camgöbeği, macenta, sarı) kontrol edin: birden fazla kanalı aynı anda kullandıkları için kanallar arası dengesizliği ortaya çıkarırlar.',
          'Monitör hizasını kontrol edin: tarayıcı penceresini iki ekranın birleşim yerine sürükleyerek paneller arasındaki beyaz nokta farkını görün.',
        ],
      },
      {
        title: 'Renk bantlanmasını ve bit derinliği sınırlarını tespit etme',
        content: [
          'Standart 8 bit ekranlar 16,7 milyon renk, modern 10 bit paneller (8 bit + FRC ya da gerçek 10 bit) 1 milyardan fazla ton gösterir. Monitör veya sürücü geçişleri kötü işlediğinde yumuşak gradyanlar görünür basamaklara (bantlanma) dönüşür.',
          'Monitör test sayfamızdaki gradyan geçişlerine bakın. Basamaklı ya da sahte renk haleli görünüyorsa, ekran kartı kontrol panelinizin (NVIDIA, AMD Radeon veya Intel) sınırlı video aralığı (16–235) yerine tam RGB aralığına (0–255) ayarlı olduğunu kontrol edin.',
        ],
        checklist: [
          'GPU ayarlarında çıkış dinamik aralığını "Tam" (0–255) yapın.',
          'Standart web doğruluğu için monitörün ekran menüsünde (OSD) sRGB veya D65 modunu seçin.',
          'Çift monitörlü kurulumlarda yenileme hızını ve renk derinliğini eşitleyin.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Beyaz ekranım telefonuma göre neden biraz sarı görünüyor?',
        answer:
          'Telefonlar genelde 7000–7500 K soğuk beyaz nokta kullanır; bu yüzden 6500 K (D65) kalibre edilmiş bir monitör yanında sıcak ya da sarımsı görünür. D65, web ve video için standart renk sıcaklığıdır.',
      },
      {
        question: 'sRGB ile DCI-P3 renk modları arasındaki fark nedir?',
        answer:
          'sRGB, web içeriği ve ofis işleri için standart renk alanıdır. DCI-P3 yaklaşık %25 daha geniş bir yelpazeyi kapsar ve HDR sinema ile modern telefon ekranlarında kullanılır. Genel web işleri için monitörü sRGB’de sabitlemek aşırı doygunluğu önler.',
      },
    ],
  },
  'screen-uniformity-test': {
    slug: 'ekran-homojenlik-testi',
    navLabel: 'Ekran homojenliği',
    title: 'Ekran homojenlik testi: ışık sızması, IPS parlaması ve bulutlanmayı kontrol etme',
    metaTitle: 'Homojenlik testi: ışık sızması ve IPS parlaması',
    metaDescription:
      'Gri ve siyah test ekranlarıyla monitörünüzde ışık sızması, IPS parlaması, bulutlanma, vinyet ve kirli ekran etkisini (DSE) kontrol edin.',
    readingTime: '6 dk okuma',
    category: 'Ekran teşhisi',
    intro:
      'Hiçbir düz ekran parlaklığı tüm yüzeyine kusursuz dağıtmaz. Ancak şiddetli ışık sızması, aşırı IPS parlaması, karanlık köşeler ya da lekeli "kirli ekran etkisi" (DSE) karanlık film sahnelerini mahvedebilir ve açık arka planlı sitelerde rahatsız edici gölgeler yaratabilir. Kontrollü ışıkta yapılan yapılandırılmış bir homojenlik testi panel kusurlarını bulmanıza ve üretim toleransı içinde olup olmadıklarını anlamanıza yardım eder.',
    toolLabel: 'Homojenlik testini aç',
    toolDescription: 'İsteğe bağlı ızgaralarla %5 koyu gri, %50 gri, siyah ve beyaz alanları inceleyin.',
    sections: [
      {
        title: 'Işık sızması, IPS parlaması ve bulutlanma: kritik fark',
        content: [
          'Bir monitörü iade etmeden önce gerçek bir üretim kusurunu panel teknolojisinin doğal özelliklerinden ayırmak gerekir.',
          'Işık sızması (backlight bleed) bir montaj kusurudur: panel çerçevede sıkışmış ya da yanlış oturmuştur ve LED ışığı kenarlardan kaçar. Kenarlarda, nereden bakarsanız bakın değişmeyen sabit sarımsı ya da beyaz ışık lekeleri olarak görünür.',
          'IPS parlaması tüm IPS panellerin doğal optik özelliğidir. IPS kristalleri açılı gelen ışığı tamamen engelleyemediği için yakından bakınca köşelerde soluk kehribar ya da gümüşi bir parıltı görülür. Başınızı oynatırsanız ya da yarım metre geri çekilirseniz parlama yer değiştirir ve azalır.',
          'Bulutlanma ve kirli ekran etkisi (DSE), arka ışığın düzensiz dağılmasıdır; futbol sahası ya da oyundaki gökyüzü gibi düz alanlarda kaydırırken lekeli gri bulutlar görünür.',
        ],
        tips: [
          'Işık sızması bakış açısından bağımsız olarak aynı yerde ve aynı parlaklıkta kalır.',
          'IPS parlaması başınızı sağa sola hareket ettirdiğinizde şiddet ve konum değiştirir.',
          'Kirli ekran etkisi (DSE) en iyi %20 veya %50 düz gri ekranda görülür.',
        ],
      },
      {
        title: 'Test ortamını doğru hazırlama',
        content: [
          'Aydınlık bir ofiste ışık sızması gizlenirken, karanlıkta gece moduyla çekilen bir telefon fotoğrafı parlamayı on kat abartır.',
        ],
        steps: [
          'Oda ışıklarını rahat bir akşam seviyesine indirin (zifiri karanlık değil).',
          'Monitör menüsünde dinamik kontrast, siyah eşitleyici veya yerel karartmayı kapatın.',
          'Parlaklığı normal çalışma seviyenize getirin (yaklaşık 120–150 nit, menüde genelde %30–50).',
          'WhiteScreen.vip siyah ekranını tam ekranda açın ve normal mesafenizde oturun (en az bir kol boyu).',
          'Köşelere bakın: kenarlardan çıkan ve başınızı oynattığınızda değişmeyen ışık huzmeleri varsa bu ışık sızmasıdır.',
          'Kirli ekran etkisi ve merkezden kenara vinyet için %5 ve %50 gri ekranlarımıza geçin.',
        ],
      },
      {
        title: 'Homojenlik sorunlarını azaltmanın pratik yolları',
        content: [
          'Ekranınızda iadeyi gerektirmeyen hafif bir ışık sızması ya da IPS parlaması varsa, birkaç basit ayar görüntüyü belirgin şekilde iyileştirir.',
        ],
        checklist: [
          'Monitörün arkasına bias aydınlatma (6500 K LED şerit) takın. Göz uyum sağlar ve siyahlar çok daha derin görünür.',
          'Parlaklığı düşürün: karanlık odada %100 parlaklık arka ışığın tüm kusurlarını belirginleştirir.',
          'VESA vidalarını kontrol edin: fazla sıkılan vidalar kasayı eğip basınç kaynaklı sızmaya yol açabilir.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Işık sızması garanti kapsamında mı?',
        answer:
          'Üreticiler hafif sızmayı ve IPS parlamasını normal üretim farkı sayar. Gündüz normal ofis kullanımında net beyaz lekeler oluşturan şiddetli sızma ise genellikle garanti kapsamında değişime hak kazanır.',
      },
      {
        question: 'OLED ekranlarda ışık sızması olur mu?',
        answer:
          'Hayır. OLED alt pikselleri kendi ışığını üretir ve arka ışık kullanmaz. Siyah pikseller tamamen kapanır: ışık sızması ve IPS parlaması olmadan sonsuz kontrast.',
      },
    ],
  },
  'clean-laptop-screen': {
    slug: 'dizustu-ekrani-temizleme',
    navLabel: 'Dizüstü ekranını temizleme',
    title: 'Dizüstü bilgisayar ekranı çizmeden ve iz bırakmadan nasıl temizlenir',
    metaTitle: 'Dizüstü ekranı güvenle nasıl temizlenir',
    metaDescription:
      'Beyaz ekran kontrolü, mikrofiber bez ve zararlı kimyasallar olmadan dizüstü veya MacBook ekranını adım adım güvenle temizleme rehberi.',
    readingTime: '5 dk okuma',
    category: 'Temizlik ve bakım',
    intro:
      'Modern dizüstü ekranları, MacBook’lar ve harici monitörler çok hassas yansıma önleyici kaplamalara, polarize filmlere ve yağ itici katmanlara sahiptir. Ev tipi cam temizleyiciler, kağıt havlu ya da fazla bastırmak bu katmanları kalıcı olarak soyabilir veya sıvı kristali bozabilir. Tam ekran beyazı kontrol ışığı olarak kullanırsanız, doğru teknikle temizlemeden önce her lekeyi, tozu ve klavye izini görürsünüz.',
    warning:
      'GÜVENLİK TALİMATI: bez ya da sıvı kullanmadan önce dizüstünü veya monitörü her zaman kapatıp fişten çekin. Ekrana, menteşelere ya da kenarlara asla doğrudan su veya temizleyici püskürtmeyin. Alt kenara sızan sıvı arka ışığı kalıcı olarak bozabilir.',
    toolLabel: 'Kontrol için beyaz ekranı aç',
    toolDescription: 'Temizlemeden önce toz, parmak izi ve lekeleri net görmek için tam ekran beyaz ışık kullanın.',
    sections: [
      {
        title: 'Temizlik öncesi kontrol için neden beyaz ekran en iyisi',
        content: [
          'Ekran kapalıyken ya da koyu bir arka plan gösterirken parmak yağı, klavye izleri ve ince toz panelin siyahına karışır.',
          'WhiteScreen.vip’i tam ekranda açmak paneli eşit ve yüksek kontrastlı bir ışıkla aydınlatır. Toz ve yağ lekeleri parlak zeminde koyu siluetler olarak belirir; neresinin temizlenmesi gerektiğini tam olarak görürsünüz.',
        ],
      },
      {
        title: 'Adım adım güvenli temizlik',
        content: ['Mat dizüstü ekranları, parlak ekranlar ve MacBook Retina ekranları için üreticilerin önerdiği bu adımları izleyin.'],
        steps: [
          'Kir, klavye yağı ve kurumuş damla izlerini görmek için ekranı WhiteScreen.vip ile tam ekranda ve %100 parlaklıkta inceleyin.',
          'Dizüstünü tamamen kapatın, şarj aletini ve tüm USB kablolarını çıkarın. Ekranın soğuması için 5 dakika bekleyin (sıcak ekranda nem anında buharlaşır ve iz bırakır).',
          'Temiz ve sık dokulu bir optik mikrofiber bez kullanın (gözlük ve kamera lensleri için olanlar gibi). Asla kağıt havlu, peçete ya da tişört kullanmayın.',
          'Ekranı üst üste binen dairesel ya da yatay hareketlerle nazikçe silin. Lifler paneli bastırmadan tozu alsın.',
          'İnatçı yağlı parmak izleri için: bezin bir köşesini biraz saf suyla nemlendirin. Bez sadece nemli olmalı, asla damlamamalı.',
          'Lekeyi nemli köşeyle silin, ardından bezin kuru kısmıyla hemen kurulayın.',
          'Kapağı kapatmadan ya da açmadan önce kalan nemin buharlaşması için 3 dakika bekleyin.',
        ],
      },
      {
        title: 'Ekranları bozan yaygın hatalar',
        content: ['İnternetteki pek çok popüler temizlik ipucu modern ekranlara kalıcı zarar verir.'],
        checklist: [
          'Ev tipi cam temizleyici kullanmayın: amonyak ve sirke yansıma önleyici kaplamayı soyar.',
          'Aseton, oje çıkarıcı veya tiner kullanmayın: çözücüler plastik kaplamaları ve çerçeveleri anında eritir.',
          'Sıvıyı asla doğrudan ekrana püskürtmeyin: damlalar ekran kablolarının bulunduğu alt kenara akar.',
          'Kağıt havlu ya da peçete kullanmayın: selüloz lifleri kalıcı mikro çizikler oluşturur.',
          'Parmaklarınızla sert bastırmayın: fazla basınç LCD panelde kalıcı beyaz basınç izleri bırakır.',
        ],
      },
    ],
    faqs: [
      {
        question: 'MacBook ekranında %70 izopropil alkol kullanabilir miyim?',
        answer:
          'Apple, bazı MacBook’ların dış yüzeyinde ve cam yüzeylerinde nazikçe silmek koşuluyla %70 izopropil alkollü mendillere izin verir. Günlük bakım için mikrofiber bezde saf su çok daha güvenlidir ve yansıma önleyici kaplamayı eritme riski taşımaz.',
      },
      {
        question: 'Neden musluk suyu yerine saf su?',
        answer:
          'Musluk suyu kalsiyum, magnezyum ve klor gibi çözünmüş mineraller içerir. Buharlaşınca silerken hassas optik filmleri çizebilecek kireç izleri bırakır.',
      },
    ],
  },
  'oled-burn-in-prevention': {
    slug: 'oled-yanmasini-onleme',
    navLabel: 'OLED yanması',
    title: 'OLED yanmasını önleme: OLED ekranları test etme, koruma ve yanmayı önleme',
    metaTitle: 'OLED yanmasını önleme ve test etme rehberi',
    metaDescription:
      'OLED yanması ile geçici görüntü kalıcılığı arasındaki farkı öğrenin. OLED monitörünüzü veya TV’nizi renkli ekranlarla test edin ve ömrünü uzatın.',
    readingTime: '7 dk okuma',
    category: 'Ekran bakımı',
    intro:
      'OLED ve QD-OLED monitörler eşsiz kontrast, derin siyahlar ve neredeyse anlık tepki süresi sunar. Ancak her alt piksel, yaydığı ışıkla yavaş yavaş yıpranan organik bir diyot olduğundan sabit öğeler (Windows görev çubuğu, adres çubuğu, oyun HUD’ları) zamanla eşit olmayan yıpranmaya yol açabilir. Yanmanın nasıl oluştuğunu, nasıl test edileceğini ve sistemin nasıl ayarlanacağını bilmek yatırımınızı yıllarca korur.',
    warning:
      'DÜRÜST UYARI: yanıltıcı araçlara dikkat edin. Hiçbir yazılım, yanıp sönen renk ya da video kalıcı OLED yanmasını geri alamaz. Organik alt pikseller parlaklık kaybettiğinde hasar kalıcıdır. Araçlarımız, geri dönüşsüz hale gelmeden önce yanmayı teşhis etmenize ve önlemenize yardım eder.',
    toolLabel: 'OLED yanma testini aç',
    toolDescription: 'Sabit öğelerin soluk izlerini görmek için kırmızı, macenta, camgöbeği ve koyu gri arasında geçiş yapın.',
    sections: [
      {
        title: 'Geçici görüntü kalıcılığı ve kalıcı yanma',
        content: [
          'Geçici görüntü kalıcılığı ile kalıcı yanma arasındaki farkı anlamak çok önemlidir.',
          'Geçici görüntü kalıcılığı elektriksel bir olaydır: yüksek kontrastlı bir görüntü 15–30 dakika gösterildikten sonra transistör katmanında artık yük kalır. Pencerenin soluk bir hayaleti birkaç dakika görünür, sonra kendiliğinden ya da otomatik piksel yenileme sırasında kaybolur.',
          'Kalıcı yanma, alt piksellerin birikmiş ve eşit olmayan yıpranmasıdır. Görev çubuğu bölgesindeki kırmızı veya mavi alt pikseller binlerce saat tam parlaklıkta yanmışsa, komşularından daha az ışık verir ve düz renkli ekranlarda görünen kalıcı koyu bir silüet bırakır.',
        ],
        tips: [
          'Geçici kalıcılık birkaç dakikada ya da 5 dakikalık kısa bir piksel yenilemeden sonra kaybolur.',
          'Kalıcı yanma kırmızı, macenta ve %5 gri ekranlarda görünür ve asla kaybolmaz.',
        ],
      },
      {
        title: 'OLED ekranınızı yanmaya karşı nasıl test edersiniz',
        content: ['Yıpranmanın ilk işaretlerini görmek için tam ekran renk ekranlarımızla bu adımları izleyin.'],
        steps: [
          'Tarayıcı başlıklarını ve görev çubuğunu kaldırmak için WhiteScreen.vip’i tam ekranda açın.',
          'Düz kırmızıyı seçin: kırmızı organik alt pikseller yeşillerden daha hızlı yıpranır. Görev çubuğu, adres çubuğu ve HUD köşelerinin bulunduğu alanlarda koyu hayaletleri dikkatle arayın.',
          'Düz macenta ve camgöbeğini seçin: karışık renkler kanallar arasındaki farklı yıpranmayı gösterir.',
          '%5 koyu gri ve %10 griyi seçin: siyaha yakın griler saf beyazda görünmeyen dikey bantları ve eşit olmayan yıpranmayı ortaya çıkarır.',
          'Normal mesafeden bakın: masaüstü simgelerinin ya da araç çubuklarının net hatlarını görüyorsanız panelde kalıcı yanma vardır.',
        ],
      },
      {
        title: 'OLED yanmasını önlemenin temel kuralları',
        content: [
          'Modern OLED monitörlerde dahili koruma algoritmaları bulunur, ama işletim sistemindeki basit alışkanlıklar erken yıpranmaya karşı en güçlü savunmadır.',
        ],
        checklist: [
          'Windows’ta "Görev çubuğunu otomatik olarak gizle"yi açın (macOS’ta Dock’u otomatik gizleyin).',
          'Windows, macOS ve tarayıcıda koyu modu kullanın: siyah OLED pikselleri enerji harcamaz ve yıpranmaz.',
          'Masadan kalktığınızda sabit masaüstü açık kalmasın diye ekran uykusunu 3–5 dakikalık hareketsizliğe ayarlayın.',
          'Masadan ayrılırken yaprak saat ya da siyah ekran gibi tam ekran bir ekran koruyucu kullanın.',
          'OLED monitörü kapattıktan hemen sonra fişten çekmeyin; bekleme modunda otomatik piksel temizleme döngüsü çalışır.',
          'Monitör menüsündeki panel korumalarını açın: piksel kaydırma, logo parlaklık sınırlayıcı ve ısı yönetimi.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Yanıp sönen piksel çalıştırıcılar OLED yanmasını düzeltir mi?',
        answer:
          'Hayır. Yanıp sönen ekranlar yıpranmış organik malzemeyi geri getirmez. Hatta en yüksek parlaklıkta agresif desenler panele gereksiz ısıl yük bindirir.',
      },
      {
        question: 'Derin piksel yenilemeyi ne sıklıkla çalıştırmalıyım?',
        answer:
          'Yalnızca üretici istediğinde (genellikle her 500 ila 1.500 kullanım saatinde bir) ya da güçlü bir görüntü kalıcılığı geçmediğinde. Gereğinden sık çalıştırmak panelin yıpranmasını hızlandırır.',
      },
    ],
  },
  'monitor-test': {
    slug: 'monitor-testi',
    navLabel: 'Monitör testi',
    title: 'Eksiksiz monitör testi rehberi: yeni ekranları kusur, renk ve hız açısından inceleme',
    metaTitle: 'Yeni bir monitörü adım adım test etme rehberi',
    metaDescription:
      'Yeni ya da ikinci el bir monitörü test etmek için eksiksiz rehber: ölü pikseller, netlik, gama, kontrast, ışık sızması ve tepki süresi.',
    readingTime: '6 dk okuma',
    category: 'Ekran teşhisi',
    intro:
      'Yeni bir monitörün kutusunu açmak heyecan vericidir, ama ölü alt pikseller, aşırı ışık sızması, düzensiz renkler veya yanlış gama gibi üretim kusurları kalite kontrolden sıkça kaçar. Çoğu satıcı 14–30 günlük iade süresi sunduğu için monitör gelir gelmez 15 dakikalık kapsamlı bir test yapmak kusursuz bir panel aldığınızdan emin olmanın en iyi yoludur.',
    toolLabel: 'Kapsamlı monitör testini aç',
    toolDescription: 'Kapsamlı test desenleri: gradyanlar, gama tabloları, netlik ızgaraları ve renk çubukları.',
    sections: [
      {
        title: 'Yeni monitör için 6 adımlı kontrol listesi',
        content: ['Kutuyu atmadan ya da garantiyi kaydetmeden önce bu 6 aşamalı panel değerlendirmesini yapın.'],
        steps: [
          '1. Fiziksel ve kablo kontrolü: DisplayPort veya HDMI kablonun monitörün doğal çözünürlüğünü, yenileme hızını (ör. 144–240 Hz) ve 10 bit rengini desteklediğinden emin olun.',
          '2. Ölü pikseller: beyaz, siyah, kırmızı, yeşil ve maviyi tam ekranda açın ve her çeyreği takılı ya da ölü alt pikseller için inceleyin.',
          '3. Homojenlik ve sızma: loş bir odada kenar sızması için siyah ekrana, kirli ekran etkisi için %50 gri ekrana bakın.',
          '4. Gama ve kontrast: gri rampa desenimizle siyaha yakın (%1–5) ve beyaza yakın (%95–99) adımların ezilmeden ya da kırpılmadan ayırt edilebildiğini kontrol edin.',
          '5. Netlik ve ölçekleme: metnin renk saçağı veya moiré olmadan net göründüğünden emin olmak için 1 piksellik siyah-beyaz çizgileri inceleyin.',
          '6. Hareket netliği ve gölgelenme: hareket desenleriyle tepki süresini kontrol edin ve ters gölgelenmeyi önlemek için Overdrive ayarını düzenleyin.',
        ],
      },
      {
        title: 'Panel türüne göre neyin normal olduğu',
        content: [
          'Panel teknolojinizi bilmek, normal tasarım tercihleri olan özellikler yüzünden monitörü iade etmenizi önler.',
          'IPS paneller: renk doğruluğunda ve geniş görüş açısında (178°) üstündür. Normal ödünleşim: daha düşük kontrast (1.000:1) ve yandan bakınca hafif IPS parlaması.',
          'VA paneller: yüksek kontrast (3.000:1 ila 5.000:1) ve derin siyahlar. Normal ödünleşim: hızlı sahnelerde koyu izler ve daha dar görüş açıları.',
          'OLED / QD-OLED paneller: sonsuz kontrast, gerçek siyahlar ve 0,03 ms tepki süresi. Normal ödünleşim: olası görüntü kalıcılığı ve tam ekranda daha düşük sürekli parlaklık.',
          'TN paneller: yüksek yenileme hızlı eski e-spor ekranları. Normal ödünleşim: soluk renkler ve biraz yukarıdan ya da aşağıdan bakınca belirgin dikey renk değişimi.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Monitörü HDR açıkken mi kapalıyken mi test etmeliyim?',
        answer:
          'Temel renk ve homojenlik testlerini Windows HDR kapalıyken yapın; yerel karartması olmayan ekranlarda HDR ton eşleme hatalarına yol açabilir. SDR doğruluğu onaylandıktan sonra tepe parlaklığı ve karartma bölgelerini incelemek için HDR’ı açın.',
      },
      {
        question: 'Overdrive nedir ve nasıl ayarlanmalı?',
        answer:
          'Overdrive, geçişleri hızlandırmak ve hareket bulanıklığını azaltmak için alt piksellere ek voltaj uygular. Çok yüksek ayarlanırsa "ters gölgelenme" (hareketli nesnelerin arkasında parlak haleler) oluşur. "Normal" ya da "Hızlı" ayarı genelde en iyisidir; "Aşırı" neredeyse her zaman taşma yapar.',
      },
    ],
  },
  'white-screen-for-video-calls-and-zoom': {
    slug: 'goruntulu-gorusme-icin-beyaz-ekran',
    navLabel: 'Zoom için ışık',
    title: 'Görüntülü görüşmeler ve Zoom için beyaz ekranı yumuşak ışık olarak kullanma',
    metaTitle: 'Görüntülü görüşmede yumuşak ışık için beyaz ekran',
    metaDescription:
      'Monitörünüzü veya dizüstünüzü Zoom, Google Meet ve video konferanslar için halka ışığa alternatif, parlak ve yüze yakışan bir ışığa çevirin.',
    readingTime: '5 dk okuma',
    category: 'Işık ve görsel',
    intro:
      'İyi bir web kamerası görüntüsü pahalı bir 4K kameradan çok ışığa bağlıdır. Işık azsa sensör dijital kazancı (ISO) artırır, gürültü ve kumlanma oluşur. WhiteScreen.vip’i ikinci bir monitörde ya da görüşme penceresinin yanında açtığınızda ekranınız anında büyük, yumuşak bir ışık kutusuna dönüşür.',
    toolLabel: 'Görüntülü görüşme ışığını aç',
    toolDescription: 'Web kamerasını aydınlatmak için sıcaktan soğuğa ayarlanabilen yumuşak beyaz ışık.',
    sections: [
      {
        title: 'Büyük ekran neden küçük halka ışıktan daha iyi aydınlatır',
        content: [
          'Fotoğrafçılıkta ışık kaynağı yüze göre ne kadar büyükse gölgeler o kadar yumuşak ve yüze yakışır olur. 25 cm’lik bir halka ışık gözlüklerde sert yansımalar ve yüzde keskin gölgeler oluşturur.',
          'Beyaz ekran gösteren 24 veya 27 inçlik bir monitör, göz çevresini aydınlatan, cildi yumuşatan ve gözlerde doğal ışık yansımaları oluşturan geniş bir ışık yüzeyi olur.',
        ],
      },
      {
        title: 'Beyaz ekran ışığınızı nasıl konumlandırırsınız',
        content: ['Bu ayarlarla yüzünüzü daha güzel aydınlatın.'],
        steps: [
          'İki monitörle: beyaz ekranı web kamerasının hemen arkasındaki ya da yanındaki monitörde açın.',
          'Tek monitörle: ekranı ikiye bölün. Zoom veya Teams bir yarıda, WhiteScreen.vip diğer yarıda olsun.',
          'Renk sıcaklığını ayarlayın: yüze yakışan cilt tonları için sıcak beyaz (yaklaşık 5000–5500 K), oda güneş alıyorsa gün ışığı beyazı (6500 K) kullanın.',
          'Parlaklığı ayarlayın: gözlerinizi kısmamak için %70–90 arası.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Uzun toplantılarda beyaz ekranı açık tutmak monitöre zarar verir mi?',
        answer:
          'LCD/LED panellerde beyaz ekran hiçbir zarar vermez ve yıpranmayı neredeyse hiç artırmaz. OLED’de ısınmayı azaltmak için parlaklığı orta seviyede (%50–70) tutun.',
      },
    ],
  },
  'fullscreen-white-screen-for-drawing-and-tracing': {
    slug: 'kopyalama-ve-cizim-icin-beyaz-ekran',
    navLabel: 'Çizim ve kopyalama',
    title: 'Tablet veya monitörü kopyalama ve çizim için dijital ışıklı masa olarak kullanma',
    metaTitle: 'Tablet veya monitörü ışıklı masa olarak kullanın',
    metaDescription:
      'iPad, Android tablet veya dizüstünüzü eskiz, kaligrafi ve negatifleri kopyalamak için parlak bir dijital ışıklı masaya nasıl çevireceğinizi öğrenin.',
    readingTime: '5 dk okuma',
    category: 'Işık ve görsel',
    intro:
      'Geleneksel ışıklı masalar ve kopyalama kutuları pahalı olabilir ve masada yer kaplar. Zaten bir iPad, Android tablet ya da dizüstünüz varsa, tek tıkla onu çok parlak ve titreşimsiz bir dijital ışıklı masaya dönüştürebilirsiniz.',
    toolLabel: 'Beyaz ekranı ışıklı masa olarak aç',
    toolDescription: 'Kağıda kopyalama, şablon ve negatif incelemek için ideal tam ekran beyaz ışık.',
    sections: [
      {
        title: 'Adım adım kopyalama düzeni',
        content: ['Dokunmatik ekranda istenmeyen dokunuşlar olmadan kopyalamak için bu ipuçlarını izleyin.'],
        steps: [
          'WhiteScreen.vip’i tam ekranda açın ve cihaz parlaklığını %100’e getirin.',
          'Dokunmayı kilitleyin: iPad’de çizim yaparken dokunmayı kapatmak için Rehberli Erişim’i açın (Ayarlar > Erişilebilirlik > Rehberli Erişim).',
          'Android’de: yanlışlıkla dokunmayı önlemek için ekran sabitleme ya da bir kilit uygulaması kullanın.',
          'Referans çizimi ekrana koyun, üstüne bir aydınger ya da ince eskiz kağıdı (90 g/m² altı) yerleştirin.',
          'Hatları kolayca takip etmek için yumuşak bir kurşun kalem (2B–4B) ya da ince uçlu kalemle hafif baskı uygulayın.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Ekranın üzerinde kurşun kalemle çizmek cama zarar verir mi?',
        answer:
          'Tablet camı (ör. Gorilla Glass) kurşun kalem grafitinden çok daha serttir ve normal kullanımda çizilmez. Yine de sert bastırmaktan kaçının ve kağıdın altında kum ya da kir olmadığından emin olun.',
      },
    ],
  },
  'best-monitor-settings-for-eye-strain': {
    slug: 'goz-yorgunlugu-icin-monitor-ayarlari',
    navLabel: 'Göz yorgunluğu ayarları',
    title: 'Göz yorgunluğu, baş ağrısı ve gece okuması için en iyi monitör ayarları',
    metaTitle: 'Göz yorgunluğu için en iyi monitör ayarları',
    metaDescription:
      'Dijital göz yorgunluğunu ve bilgisayarla görme sendromunu gidermek için parlaklık, kontrast, renk sıcaklığı ve oda ışığını ayarlayın.',
    readingTime: '6 dk okuma',
    category: 'Ekran bakımı',
    intro:
      'Günde 8–10 saat fazla parlak ve yanlış ayarlanmış bir monitöre bakmak bilgisayarla görme sendromuna yol açar: göz kuruluğu, bulanık görme, gerilim baş ağrısı ve boyun tutulması. Ekran parlaklığını oda ışığına uydurmak yapabileceğiniz en etkili ergonomik iyileştirmedir.',
    toolLabel: 'Beyaz ekranı aç',
    toolDescription: 'Rahat bir parlaklık bulmak için ekranı oda ışığındaki bir kağıtla karşılaştırın.',
    sections: [
      {
        title: 'Göz konforu için temel monitör ayarları',
        content: ['Göz yorgunluğunu hemen azaltmak için araştırmalara dayanan bu görsel ergonomi kurallarını uygulayın.'],
        steps: [
          'Beyaz kağıtla eşleştirme: monitörün yanına beyaz bir kağıt tutun ve tam ekran beyaz bir pencere kağıt kadar parlak görünene dek parlaklığı ayarlayın.',
          'Renk sıcaklığı: soğuk mavi 7500 K’den sıcak 5000–6500 K tonuna indirin.',
          'PWM titreşiminden kaçının: monitörün "Flicker-Free" olduğunu (düşük frekanslı darbe genişlik modülasyonu yerine doğru akımla karartma) doğrulayın.',
          '20-20-20 kuralını uygulayın: her 20 dakikada bir, 6 metre uzaktaki bir nesneye en az 20 saniye bakarak göz kaslarını gevşetin.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Koyu mod göz yorgunluğunu açık moddan daha iyi önler mi?',
        answer:
          'Loş odalarda koyu mod toplam ışığı azaltarak kamaşmayı azaltır. Ancak iyi aydınlatılmış bir odada uzun metin okurken yumuşak ayarlı beyaz zemin üzerinde siyah yazı daha yüksek kontrast ve daha hızlı okuma sağlar.',
      },
    ],
  },
  'common-monitor-display-problems-diagnostics': {
    slug: 'yaygin-monitor-sorunlari',
    navLabel: 'Ekran teşhisi',
    title: 'Yaygın monitör sorunları: ekran hatalarını teşhis etme ve giderme',
    metaTitle: 'Yaygın monitör sorunları ve teşhisi',
    metaDescription:
      'Yaygın monitör sorunları için teşhis rehberi: titreme, renk bantlanması, gölgelenme, takılı pikseller ve bulanık metin, hızlı çözüm adımlarıyla.',
    readingTime: '6 dk okuma',
    category: 'Ekran teşhisi',
    intro:
      'Gizemli mikro titremeden bulanık metne ve ani renk kaymasına kadar ekran hataları sürücü hatalarından, kötü kablolardan, yanlış yenileme hızından ya da panel arızasından kaynaklanabilir. Bu rehber her anormalliğin kaynağını adım adım bulmanıza yardım eder.',
    toolLabel: 'Monitör testini aç',
    toolDescription: 'Donanım kusurlarını kablo ya da sürücü sorunlarından ayırmak için teşhis desenlerini çalıştırın.',
    sections: [
      {
        title: 'Ekran hatası teşhis adımları',
        content: ['Ekranınız görsel bir anormallik gösterdiğinde bu sırayı izleyin.'],
        steps: [
          'Kabloyu kontrol edin: gevşek ya da sertifikasız HDMI veya DisplayPort kabloları ara ara kararma, yeşil kıvılcımlar ve titreme yapar.',
          'Doğal çözünürlüğü ve yenileme hızını kontrol edin: 4K bir ekranı tam sayı ölçekleme olmadan 1080p’de kullanmak metni bulanıklaştırır.',
          'Başka bir cihazla deneyin: sorunun PC ekran kartından mı yoksa monitör panelinden mi geldiğini anlamak için aynı girişe bir dizüstü ya da konsol bağlayın.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Monitörüm neden ara sıra 2 saniye kararıyor?',
        answer:
          '1–2 saniyelik kısa kararmalar neredeyse her zaman DSC sıkıştırmasının bant genişliği yeniden pazarlığından, elektromanyetik parazitten (yakında çalışmaya başlayan bir buzdolabı ya da fan gibi) veya yüksek yenileme hızlarında yetersiz kalan düşük kaliteli bir HDMI/DP kablosundan kaynaklanır.',
      },
    ],
  },
}
