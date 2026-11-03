import type { ToolTranslations } from '../types'

export const tr: ToolTranslations = {
  'screen-uniformity-test': {
    glance: {
      answer:
        'Ekran homojenlik testi, parlaklık ve rengin panel boyunca eşit olup olmadığını görmeniz için koyu ve gri tam ekran alanlar gösterir. Kenarlardaki ışık sızmasını, LCD ve IPS ekranlardaki bulutlanmayı, IPS parlamasını, vinyeti ve büyük TV’lerdeki kirli ekran etkisini ortaya çıkarır.',
      features: ['Siyah, koyu gri ve orta gri test alanları', 'Karanlık odada bulutlanmayı görmek için parlaklık adımları', 'IPS parlaması ile ışık sızmasını ayırt etme rehberi', 'Tarayıcı çubukları olmadan tam ekran'],
      benefits: ['Garanti kapsamındaki panel kusurlarını bulun', 'İki monitörü veya değişim cihazını adil karşılaştırın', 'Karanlık odada yaklaşık iki dakika sürer'],
    },
    steps: [
      'Oda ışıklarını kısın ve ekranın birkaç dakika ısınmasını bekleyin.',
      'Tam ekran için F’ye basın ve kenarlardaki sızmayı aramak için en koyu griyle başlayın.',
      'Daha açık grilere geçin; leke, bant veya daha koyu köşeler arayın.',
      'Ekranın belirli bölgelerini karşılaştırmak için ızgarayı açın.',
    ],
    useCases: [
      { title: 'Işık sızması', description: 'Siyaha yakın alanlar LCD panellerin kenarlarından kaçan ışığı gösterir.' },
      { title: 'Kirli ekran etkisi', description: 'Orta gri, kamera kaydırmalarında TV’lerdeki dikey bantları veya lekeleri gösterir.' },
      { title: 'Vinyet', description: 'Daha koyu kenarları görmek için köşeleri merkezle karşılaştırın.' },
      { title: 'Panel piyangosu', description: 'Birini tutmadan önce aynı modelin iki ünitesini karşılaştırın.' },
    ],
    faqs: [
      { question: 'Ekranım gride neden eşit görünmüyor?', answer: 'Hiçbir panel kusursuz homojen değildir. Küçük parlaklık farkları normaldir; büyük lekeler, belirgin bantlar veya parlak köşeler yeni bir cihazda bildirmeye değer olabilir.' },
      { question: 'Karanlık odada mı test etmeliyim?', answer: 'Evet. Ortam ışığı ince sızmayı ve bulutlanmayı gizler; loş bir oda testi çok daha anlamlı yapar.' },
      { question: 'Kamera gördüğümü gösterir mi?', answer: 'Telefon kameraları sızma ve bulutlanmayı genellikle abartır. Kendi gözünüzle değerlendirin, fotoğrafları yalnızca kaba bir referans olarak kullanın.' },
    ],
  },
  stopwatch: {
    glance: {
      answer:
        'Online kronometre, başlangıçtan durmaya kadar geçen süreyi saniyenin yüzde biri hassasiyetle, büyük tam ekran rakamlarla ölçer. Koşu, yüzme, antrenman ve deneyler için tur kaydedin; süre cihazınızın saatiyle ölçüldüğü için doğru kalır.',
      features: ['Başlat, durdur, tur ve sıfırla', 'Saniyenin yüzde biri hassasiyeti', 'Ara sürelerle tur listesi', 'Boşluk tuşu ve klavye kısayolları'],
      benefits: ['Spor salonu ve sınıf için büyük ekran', 'Doğru tur süreleri', 'Ücretsiz, çevrimdışı çalışır'],
    },
    steps: [
      'Saymaya başlamak için Başlat’a veya boşluk tuşuna basın.',
      'Kronometre çalışırken ara süre kaydetmek için Tur’a veya L’ye basın.',
      'Boşluk duraklatır, R sıfırlar.',
      'Tam ekran için F’ye, çıkmak için Esc’ye basın.',
    ],
    useCases: [
      { title: 'Spor ve koşu', description: 'Tur sürelerini ve aralıkları takip edin.' },
      { title: 'Konuşmalar', description: 'Sunumları ve provaları tam olarak zamanlayın.' },
      { title: 'Oyunlar ve yarışmalar', description: 'Sınıfta veya oyun gecelerinde turları zamanlayın.' },
      { title: 'Laboratuvar ve mutfak', description: 'Tepkimeleri ve demleme sürelerini ölçün.' },
    ],
    faqs: [
      { question: 'Kronometre ne kadar doğru?', answer: 'Tarayıcının yüksek çözünürlüklü saatini kullanır ve saniyenin yüzde birini gösterir. Ekran yenilemesi görünen güncellemeyi birkaç milisaniye geciktirebilir.' },
      { question: 'Turlarım kaydediliyor mu?', answer: 'Turlar siz sıfırlayana veya sayfayı kapatana kadar sayfada kalır. Panoya kopyalayabilirsiniz.' },
      { question: 'Çevrimdışı çalışır mı?', answer: 'Evet. Sayfa yüklendikten sonra kronometre bağlantı olmadan çalışır.' },
    ],
  },
  'matrix-screensaver': {
    glance: {
      answer:
        'Matrix ekran koruyucusu, 1999 yapımı Matrix filmiyle ünlenen “dijital yağmuru”, yani yukarıdan düşen yeşil karakter sütunlarını gösterir. Tarayıcıda tam ekran çalışır; masa, TV veya yayın arka planı için renk, hız ve karakter boyutunu değiştirebilirsiniz.',
      features: ['Düşen katakana, rakam ve semboller', 'Renk, hız ve karakter boyutu ayarı', 'Gizli imleçle tam ekran', 'Yüksek yenileme hızlı ekranlarda akıcı'],
      benefits: ['Boştaki ekranlar ve yayınlar için ikonik görünüm', 'Windows veya macOS’e ekran koruyucu kurmak gerekmez', 'Ücretsiz'],
    },
    steps: [
      'Yağmur önizlemede hemen başlar.',
      'Hızı, yoğunluğu ve yazı boyutunu ayarlayın veya başka bir renk seçin.',
      'Katakana, ikili veya siber tarzı karakterleri seçin.',
      'Ekranı doldurmak için F’ye veya Tam ekran’a basın, çıkmak için Esc’ye basın.',
    ],
    useCases: [
      { title: 'Ekran koruyucu', description: 'Boştaki bir monitörde çalışır halde bırakın.' },
      { title: 'Teknoloji atmosferi', description: 'Yayınlar, ofisler veya etkinlikler için arka plan görseli.' },
      { title: 'Video arka planları', description: 'Videolarınız için “siber” bir arka plan kaydedin.' },
      { title: 'Kostüm partileri', description: 'Bilim kurgu temalı bir gecenin havasını yaratın.' },
    ],
    faqs: [
      { question: 'Matrix yağmuru hangi karakterleri kullanır?', answer: 'Orijinal efekt, rakamlarla karışık aynalanmış yarım genişlik katakana kullanıyordu. Burada o stili, ikili veya siber karakterleri seçebilirsiniz.' },
      { question: 'Gerçek bir ekran koruyucu olarak kullanabilir miyim?', answer: 'Tarayıcılar sistem ekran koruyucusu kuramaz, ama masadan kalkarken tam ekran açabilirsiniz. Uyanık tutma kilidi ekranı açık tutar.' },
      { question: 'Bilgisayarı yavaşlatır mı?', answer: 'Hafiftir. Eski cihazlarda daha akıcı animasyon için yoğunluğu düşürün.' },
    ],
  },
  'dvd-screensaver': {
    glance: {
      answer:
        'DVD ekran koruyucusu, DVD oynatıcıların klasik seken logosudur: ekranda süzülür, her kenara çarptığında renk değiştirir ve ara sıra tam köşeye oturur. Bu sürüm köşe isabetlerini sayar ve hızı ile logo boyutunu değiştirmenize izin verir.',
      features: ['Her sekişte renk değişimi', 'Kutlamalı köşe isabet sayacı', 'Hız ve logo boyutu ayarı', 'Her ekranda tam ekran'],
      benefits: ['Nostaljik ve tuhaf biçimde tatmin edici', 'Yayınlar ve bekleme salonları için harika arka plan', 'Ücretsiz'],
    },
    steps: [
      'Logo hemen sekmeye başlar.',
      'Kaydırıcılarla hızı ve logo boyutunu ayarlayın.',
      'Köşe sayacını izleyin: her tam köşe isabeti kutlanır.',
      'Ekranı doldurmak için F’ye veya Tam ekran’a basın, çıkmak için Esc’ye basın.',
    ],
    useCases: [
      { title: 'Nostalji', description: 'Bekleme salonu klasiğini yeniden yaşayın.' },
      { title: 'Boştaki ekran', description: 'TV veya ofis monitörü için eğlenceli bir ekran koruyucu.' },
      { title: 'Yayın araları', description: 'İzleyiciler köşe isabetini beklemeye bayılır.' },
      { title: 'Birlikte izleme', description: 'Köşeye ne zaman çarpacağına arkadaşlarınızla iddiaya girin.' },
    ],
    faqs: [
      { question: 'Gerçekten tam köşeye çarpar mı?', answer: 'Evet. Ne zaman ve ne sıklıkla çarpacağı ekran boyutuna, logo boyutuna ve hıza bağlıdır. Sayaç her tam köşe isabetini kaydeder.' },
      { question: 'Bu resmi DVD logosu mu?', answer: 'Hayır. Aynı ruhta genel bir rozettir ve DVD Format/Logo Licensing Corporation ile bağlantısı yoktur.' },
      { question: 'Logo neden renk değiştiriyor?', answer: 'Klasik ekran koruyucuda olduğu gibi logo her kenara değdiğinde yeni bir renk seçer ve aynı rengi iki kez üst üste kullanmaz.' },
    ],
  },
  'fake-windows-10-update': {
    glance: {
      answer:
        'Sahte Windows 10 güncelleme ekranı, dönen noktalar ve yavaşça yükselen yüzdeyle mavi “Güncellemeler üzerinde çalışılıyor” ekranını taklit eder. Tam ekranda bilgisayar güncelleniyormuş gibi görünür: klasik ve zararsız bir şaka. Çıkmak için Esc’ye basın.',
      features: ['Dönen noktalar ve yükselen yüzde', 'Ayarlanabilir güncelleme hızı', 'Gizli imleçle tam ekran', 'İstediğiniz an Esc ile çıkın'],
      benefits: ['İnandırıcı ve zararsız ofis şakası', 'Video ve eğitimler için dekor', 'Hiçbir şey kurulmaz veya değiştirilmez'],
    },
    steps: [
      'Hız kaydırıcısıyla yüzdenin ne kadar hızlı yükseleceğini ayarlayın.',
      'Simülasyonun ekranı doldurup tarayıcıyı gizlemesi için Tam ekran’a tıklayın veya F’ye basın.',
      'Uzaklaşın ve ilerlemenin sürmesine izin verin. Güncellemenin takılmış görünmesi için Duraklat’a basın.',
      'Çıkmak ve şakayı açıklamak için Esc’ye basın.',
    ],
    useCases: [
      { title: 'Zararsız ofis şakaları', description: 'Bir iş arkadaşınıza bilgisayarının güncellendiğini düşündürün, sonra gerçeği söyleyin.' },
      { title: 'Mola vermek', description: 'Masanızdan kalktığınızda meşgul görünün.' },
      { title: 'Film ve video dekoru', description: 'Sette inandırıcı bir Windows 10 güncellemesi gösterin.' },
      { title: 'Nostalji', description: 'Klasik bir sistem ekranını eğlence için yeniden görün.' },
    ],
    faqs: [
      { question: 'Bu gerçek bir güncelleme mi, zararlı bir şey mi?', answer: 'Hayır. Normal bir tarayıcı sekmesinde çalışan zararsız bir görsel simülasyondur. Cihazınızı değiştirmez, bir şey yüklemez ve bilgi istemez. İstediğiniz an Esc ile çıkın.' },
      { question: 'Microsoft ile bağlantılı mı?', answer: 'Hayır. Eğlence amaçlı bağımsız bir yeniden yapımdır; Microsoft ile bağlantısı veya sponsorluğu yoktur.' },
      { question: 'İlerleme hızını kontrol edebilir miyim?', answer: 'Evet. Hız kaydırıcısı yüzdenin ne kadar hızlı yükseleceğini belirler, Duraklat ise güncellemenin takılmış görünmesi için yüzdeyi sabitler.' },
      { question: 'Sahte ekrandan nasıl çıkarım?', answer: 'Esc’ye basın ya da kapat düğmesini görmek için fareyi oynatın veya ekrana dokunun. Sekmeyi kapatmak da işe yarar.' },
    ],
  },
  'ring-light': {
    glance: {
      answer:
        'Online halka ışık, ekranınızda yüzünüzü önden ve eşit şekilde aydınlatan parlak bir halka gösterir; tıpkı fotoğrafçıların halka ışığı gibi. Halkanın boyutunu, kalınlığını, sıcaklığını ve parlaklığını ayarlayın, sonra selfie, görüntülü görüşme, makyaj veya ürün fotoğrafı için tam ekrana geçin.',
      features: ['Ayarlanabilir halka boyutu ve kalınlığı', 'Sıcaktan soğuğa renk sıcaklığı', 'Parlaklık ayarı ve tam ekran', 'Telefon, tablet ve dizüstünde çalışır'],
      benefits: ['Eşit ve gölgesiz ışık, ücretsiz', 'Gerçek halka ışık gibi gözlerde ışık yansıması', 'Boştaki her ekran bir lambaya dönüşür'],
    },
    steps: [
      'Sayfayı karşınızdaki ekranda (dizüstü, monitör veya tablet) açın ve parlaklığını artırın.',
      'Halkanın boyutunu ve kalınlığını ayarlayın; daha kalın halka daha fazla ışık verir.',
      'Renk sıcaklığını veya yaratıcı görünümler için bir renk tonu seçin.',
      'Ekranı doldurmak için F’ye veya Tam ekran’a basın, çıkmak için Esc’ye basın.',
    ],
    useCases: [
      { title: 'Görüntülü görüşmeler', description: 'Halka ışık almadan yüzünüzde eşit ve hoş bir ışık.' },
      { title: 'Selfie ve portreler', description: 'Gözlerde klasik yuvarlak ışık yansımasını yakalayın.' },
      { title: 'Makyaj', description: 'Yüzünüzü sıcak veya gün ışığına yakın ışıkta net görün.' },
      { title: 'Yayın', description: 'Boştaki bir monitör veya tabletten yumuşak ana ışık.' },
    ],
    faqs: [
      { question: 'Ekran gerçek bir halka ışık kadar parlak mı?', answer: 'Hayır. Gerçek LED halka ışık çok daha parlaktır. Ekran halka ışığı loş bir odada, tam parlaklıkta ve yüze yakın en iyi sonucu verir.' },
      { question: 'Neden tüm ekran değil de halka?', answer: 'Halka sizi her yönden aydınlatır, burun ve göz altındaki gölgeleri azaltır ve gözlerde yuvarlak yansıma oluşturur. Tüm ışığa ihtiyacınız varsa merkezi doldurma seçeneğini açın.' },
      { question: 'Hangi renk sıcaklığı en iyi görünür?', answer: 'Yaklaşık 4500–5500 K çoğu ten renginde doğal görünür. Akşamları daha sıcak (3000 K), gün ışığına uyum için daha soğuk (6500 K) seçin.' },
    ],
  },
}
