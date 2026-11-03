import type { ToolTranslations } from '../types'

export const tr: ToolTranslations = {
  'monitor-test': {
    glance: {
      answer:
        'Monitör testi, ekranınızın rengi, kontrastı, netliği ve gamayı ne kadar iyi gösterdiğini kontrol eden tam ekran test desenlerinden oluşur. Hataları bulmak ya da görüntü ayarlarını doğru yapmak için renk geçişlerini, siyah ve beyaz seviyelerini, metin netliğini ve geometri desenlerini inceleyin.',
      features: ['Renk geçişi, gama, kontrast ve netlik desenleri', 'Siyah ve beyaz seviye basamakları', 'Geometri ve metin netliği kontrolleri', 'Tüm desenler için klavye kısayolları'],
      benefits: ['Parlaklık, kontrast ve netliği doğru ayarlayın', 'Yeni veya ikinci el monitörü dakikalar içinde kontrol edin', 'TV dahil her tarayıcıda çalışır'],
    },
    steps: [
      'Monitörü kendi çözünürlüğüne ayarlayın ve tarayıcı yakınlaştırmasını sıfırlayın (Ctrl/Cmd + 0).',
      'Tam ekran için F’ye basın, sonra desen düğmeleri veya ok tuşlarıyla desen değiştirin.',
      'Renk geçişlerinde bantlanma, ızgaralarda düz çizgiler ve ince desenlerde netlik ya da moiré arayın.',
      'Her deseni izlerken monitörün parlaklık, kontrast ve netlik ayarlarını değiştirin.',
    ],
    useCases: [
      { title: 'İlk kurulum', description: 'Monitörü kutusundan çıkarınca parlaklık, kontrast ve netliği ayarlayın.' },
      { title: 'Bantlanma kontrolü', description: 'Yumuşak geçişler düşük renk derinliğinden kaynaklanan basamakları gösterir.' },
      { title: 'Geometri ve ölçekleme', description: 'Izgaralar gerilmiş, kırpılmış veya bulanık görüntüyü gösterir.' },
      { title: 'Kablo ve giriş', description: 'İnce desenler bir kablonun veya adaptörün görüntüyü yumuşatıp yumuşatmadığını gösterir.' },
    ],
    faqs: [
      { question: 'Online monitör testi kalibrasyon cihazı kadar iyi mi?', answer: 'Hayır. Desenler gözle değerlendirip ayarlamanıza yardım eder, ancak doğru renk kalibrasyonu için kolorimetre gerekir.' },
      {
        question: 'İnce desenler neden titriyor veya moiré gösteriyor?',
        answer: 'Tarayıcı yakınlaştırması, sistem ölçeklemesi veya yerel olmayan çözünürlük 1 piksellik desenleri yeniden örnekler. %100 yakınlaştırma ve yerel çözünürlük kullanın.',
      },
      { question: 'Gama deseni nasıl görünmeli?', answer: 'Uzaktan bakınca çizgili ve düz alanlar benzer parlaklıkta görünmeli. Büyük fark, gamanın 2,2 standardından uzak olduğunu gösterir.' },
    ],
  },
  'screen-resolution-test': {
    glance: {
      answer:
        'Ekran çözünürlüğü testi, ekranınızın piksel cinsinden çözünürlüğünü, tarayıcı görüntü alanını, cihaz piksel oranını ve renk derinliğini gösterir. Fiziksel çözünürlük CSS boyutu çarpı piksel oranıdır; %125 ölçekli 1920 × 1080 bir dizüstü 1536 × 864 CSS pikseli bildirir.',
      features: ['Ekran, pencere ve fiziksel çözünürlük', 'Piksel oranı ve ölçekleme', 'Renk derinliği ve yön', 'Boyutlandırınca veya döndürünce anında güncellenir'],
      benefits: ['Gerçekten 1080p, 1440p veya 4K kullanıp kullanmadığınızı görün', 'Windows veya macOS ölçeklemesini kontrol edin', 'Anında, kurulum yok'],
    },
    steps: [
      'Sayfayı kontrol etmek istediğiniz ekranda açın: değerler canlı güncellenir.',
      'Değerlerin değiştiğini görmek için pencereyi boyutlandırın veya cihazı döndürün.',
      'Görüntü alanının tamamını görmek için F’ye basıp tam ekrana geçin.',
      '1 piksellik desene bakın: yerel çözünürlükte ve %100 yakınlaştırmada ince ve düzgün bir gri gibi görünmeli.',
    ],
    useCases: [
      { title: 'Çözünürlüğünüzü öğrenin', description: 'Duvar kâğıdı veya oyun ayarı için çözünürlüğü hızla bulun.' },
      { title: 'Duyarlı tasarım', description: 'Geliştiriciler gerçek cihazlarda görüntü alanını ve piksel oranını kontrol eder.' },
      { title: 'Ölçekleme sorunları', description: 'Sistem ölçeklemesinin etkin çözünürlüğü değiştirip değiştirmediğini görün.' },
      { title: 'Destek talepleri', description: 'Bir site hatasını bildirirken doğru ekran bilgilerini paylaşın.' },
    ],
    faqs: [
      {
        question: 'Ekran boyutu neden monitörümün çözünürlüğünden küçük?',
        answer: 'Tarayıcılar CSS pikseli kullanır. %150 ölçeklemede 3840 piksel genişliğindeki ekran 2560 bildirir. Fiziksel piksel için piksel oranıyla çarpın.',
      },
      { question: 'Cihaz piksel oranı nedir?', answer: 'CSS pikseli başına düşen fiziksel piksel sayısıdır. 2 değeri, Retina benzeri yüksek yoğunluklu bir ekranı gösterir.' },
      { question: 'Tarayıcı yakınlaştırması değerleri değiştirir mi?', answer: 'Evet. Yakınlaştırma görüntü alanını ve piksel oranını değiştirir. Doğru değerler için %100’e döndürün.' },
    ],
  },
  'brown-noise-generator': {
    glance: {
      answer:
        'Kahverengi gürültü üreteci, gücü yüksek frekanslarda hızla düşen derin ve gürleyen bir ses çalar; şelale ya da sert rüzgâr gibi. Beyaz gürültüden daha yumuşaktır, bu yüzden birçok kişi uyumak, DEHB ile odaklanmak ve trafik ya da horlama gibi pes sesleri bastırmak için tercih eder.',
      features: ['Anında üretilen gerçek kahverengi (Brownian) gürültü', 'Ton için alçak ve yüksek geçiren filtreler', 'Ses ayarı ve uyku zamanlayıcısı', 'Tek tıkla beyaz veya pembe gürültüye geçin'],
      benefits: ['Uzun oturumlar için yumuşak, bas ağırlıklı ses', 'Odaklanma ve derin çalışma için popüler', 'Ücretsiz, yüklendikten sonra çevrimdışı çalışır'],
    },
    steps: [
      'Başlat’a basın. Basmadan ses çalmaz.',
      'Sesi ayarlayın; kahverengi gürültü aynı seviyede beyazdan daha kısık duyulur, bu yüzden yavaşça artırın.',
      'Alçak geçiren filtre gürlemeyi daha da derinleştirir, yüksek geçiren filtre küçük hoparlörlerde en derin bası alır.',
      'İsterseniz bir uyku zamanlayıcısı ve görsel seçin.',
      'Ekranı doldurmak için F’ye veya Tam ekran’a basın, çıkmak için Esc’ye basın.',
    ],
    useCases: [
      { title: 'Derin odaklanma', description: 'DEHB’si olanlar dahil birçok kişi kahverengi gürültünün işe odaklanmaya yardım ettiğini söylüyor.' },
      { title: 'Uyku', description: 'Yumuşak ve pes tonu saatlerce açık bırakılabilir.' },
      { title: 'Pes sesleri bastırma', description: 'Trafik uğultusunu, ayak seslerini ve klima vızıltısını örter.' },
      { title: 'Rahatlama', description: 'Akşamları karanlık bir ekranla birlikte kullanın.' },
    ],
    faqs: [
      {
        question: 'Beyaz ve pembe gürültüden farkı nedir?',
        answer: 'Kahverengi gürültü frekans yükseldikçe hızla güç kaybeder (oktav başına yaklaşık 6 dB), bu yüzden üçü arasında en derinidir. Pembe ortada, beyaz en parlaktır.',
      },
      { question: 'Neden kahverengi gürültü deniyor?', answer: 'Adını renkten değil, parçacıkların rastgele hareketi olan Brown hareketinden alır. Kırmızı gürültü de denir.' },
      { question: 'Telefonumda neden zor duyuluyor?', answer: 'Küçük hoparlörler derin bası veremez. Kulaklık veya daha büyük hoparlör kullanın ya da yüksek geçiren filtre ekleyip sesi biraz açın.' },
    ],
  },
  'pink-noise-generator': {
    glance: {
      answer:
        'Pembe gürültü üreteci, gücü her oktavda eşit oranda azalan bir ses çalar; bu yüzden dengeli ve beyaz gürültüden yumuşak, sürekli yağmur gibi duyulur. Uyku, rahatlama ve ders çalışma için kullanılır; ses mühendisleri de hoparlör dengesini kontrol etmek için pembe gürültü kullanır.',
      features: ['Tarayıcıda üretilen gerçek pembe gürültü', 'Ton filtresi, desibel cinsinden ses ve uyku zamanlayıcısı', 'Canlı dalga formu veya spektrum', 'Klavye kontrolü: boşluk ile çal veya duraklat'],
      benefits: ['Yağmur gibi doğal ses, uyumak kolay', 'Hoparlör kontrolü için referans sinyal', 'Ücretsiz ve az reklamlı'],
    },
    steps: [
      'Başlat’a basın. Ses asla kendiliğinden çalmaz.',
      'Sesi desibel cinsinden ayarlayın.',
      'Tonu alçak veya yüksek geçiren filtre ve kesim kaydırıcısıyla ince ayarlayın.',
      'İsterseniz bir uyku zamanlayıcısı ve görsel seçin.',
      'Ekranı doldurmak için F’ye veya Tam ekran’a basın, çıkmak için Esc’ye basın.',
    ],
    useCases: [
      { title: 'Uyku', description: 'Bütün gece için beyaz gürültüye göre daha az sert, popüler bir alternatif.' },
      { title: 'Ders çalışma', description: 'Uzun okuma oturumları için dengeli bir arka plan sesi.' },
      { title: 'Hoparlör kontrolü', description: 'Pembe gürültü, hoparlör dengesini dinlemek için standart sinyaldir.' },
      { title: 'Sakin mekânlar', description: 'Bekleme salonları ve stüdyolar için yumuşak arka plan sesi.' },
    ],
    faqs: [
      { question: 'Pembe gürültü nedir?', answer: 'Pembe gürültü her oktavda eşit enerjiye sahiptir; tizlere doğru her adım beyaz gürültüye göre biraz daha kısıktır. Yağmur gibi daha doğal duyulur.' },
      { question: 'Pembe gürültü uykuya iyi gelir mi?', answer: 'Birçok kişi rahatlatıcı bulur ve bazı küçük çalışmalar derin uykuyu destekleyebileceğini gösteriyor, ancak etkisi kişiden kişiye değişir.' },
      { question: 'Hoparlör test etmek için kullanabilir miyim?', answer: 'Hızlı bir dinleme için evet. Odayı hassas ölçmek için ölçüm yazılımı ve kalibre edilmiş mikrofon kullanın.' },
    ],
  },
  'broken-screen': {
    glance: {
      answer:
        'Kırık ekran şakası, ekranınızı gerçekçi bir çatlak cam görüntüsüyle doldurur: darbe noktası, yayılan çatlaklar ve isteğe bağlı LCD mürekkep lekeleri, cam sesiyle birlikte. Bir arkadaşınızın telefonunda veya bilgisayarında bırakın, sonra kapat düğmesi ya da Esc ile şakayı açıklayın.',
      features: ['Her seferinde yeniden çizilen gerçekçi cam çatlakları', 'Daha fazla darbe için dokunun veya tıklayın', 'LCD hasar efekti ve çatlama sesi', 'Arka plan: duvar kâğıdı, kilit ekranı veya siyah'],
      benefits: ['Gerçek görünen klasik ve zararsız şaka', 'Telefon, tablet ve bilgisayarda çalışır', 'Uygulama yok, cihazda hiçbir şey değişmez'],
    },
    steps: [
      'Bir arka plan seçin: duvar kâğıdı, telefon kilit ekranı veya siyah.',
      'Camı o noktada kırmak için herhangi bir yere dokunun veya tıklayın. Her dokunuş yeni bir darbe ekler.',
      'Daha gerçekçi olması için çatlama sesini açık bırakın ya da kapatın.',
      'Ekranı doldurmak için F’ye veya Tam ekran’a basın, çıkmak için Esc’ye basın.',
    ],
    useCases: [
      { title: 'Zararsız şakalar', description: 'Bir arkadaşa kısa bir korku, ardından açıklama.' },
      { title: 'Video dekoru', description: 'Hiçbir şey kırmadan kısa filmde kırık telefon veya monitör gösterin.' },
      { title: '1 Nisan', description: 'Tamamen geri alınabilen klasik bir ofis şakası.' },
      { title: 'Tasarım referansı', description: 'İllüstrasyon ve görsel efekt için darbe çatlaklarının nasıl yayıldığını inceleyin.' },
    ],
    faqs: [
      { question: 'Ekranıma zarar verir mi?', answer: 'Hayır. Tarayıcıda çizilen bir görüntüdür. Esc’ye basın, Temizle’ye dokunun veya sekmeyi kapatın.' },
      {
        question: 'Neden gerçek cam gibi görünüyor?',
        answer: 'Gerçek bir darbe ezilmiş bir merkez, uzun ışınsal çatlaklar ve aralarında kısa çatlak halkaları bırakır. Efekt üçünü de her çatlakta parlama ve gölgeyle çizer.',
      },
      { question: 'Şakayı nasıl sorumlu yaparım?', answer: 'Kısa tutun, gülecek birini seçin, asla para veya bilgi almak için kullanmayın ve şakayı hemen açıklayın.' },
    ],
  },
  'countdown-timer': {
    glance: {
      answer:
        'Geri sayım sayacı, seçtiğiniz süreden sıfıra kadar büyük tam ekran rakamlarla geri sayar, sonra hafif bir yanıp sönme ve isteğe bağlı bir sesle uyarır. Dersler, sınavlar, toplantılar, sunumlar, antrenman veya yemek için saat, dakika ve saniye ayarlayın ve odanın öbür ucundan okuyun.',
      features: ['Büyük tam ekran rakamlar', 'Hazır ayarlarla saat, dakika ve saniye', 'Sıfırda ekran yanıp sönmesi ve isteğe bağlı ses', 'Arka plan sekmelerinde de doğru kalır'],
      benefits: ['Toplantı ve dersleri zamanında tutar', 'Salonun arkasından okunur', 'Ücretsiz, uygulamasız'],
    },
    steps: [
      '1, 5 veya 25 dakika gibi bir hazır ayar seçin ya da saat, dakika ve saniye yazın.',
      'Başlat’a veya boşluk tuşuna basın. Duraklatmak için tekrar basın, sıfırlamak için R’ye basın.',
      'İsterseniz sesi açın: varsayılan olarak kapalıdır.',
      'Tüm salonun görmesi için F ile tam ekrana geçin. Çıkmak için Esc’ye basın.',
    ],
    useCases: [
      { title: 'Sınıfta', description: 'Sınavları, etkinlikleri ve molaları projeksiyonda zamanlayın.' },
      { title: 'Sunumlar', description: 'Görünür bir sayaçla konuşmacıları zamanında tutun.' },
      { title: 'Pomodoro', description: 'Kısa molalarla 25 dakikalık odak oturumları yapın.' },
      { title: 'Antrenman ve yemek', description: 'Uzaktan okunabilen büyük bir sayaç.' },
    ],
    faqs: [
      { question: 'Sayaç arka plandaki sekmede çalışmaya devam eder mi?', answer: 'Evet. Gerçek saate dayanır, tarayıcı arka plan sekmelerini yavaşlatsa bile doğru kalır.' },
      { question: 'Ses çıkarır mı?', answer: 'Yalnızca sesi açarsanız. Aksi halde süre dolunca ekran hafifçe yanıp söner.' },
      { question: 'En uzun süre ne kadar?', answer: '99 saat, 59 dakika ve 59 saniyeye kadar ayarlayabilirsiniz.' },
    ],
  },
}
