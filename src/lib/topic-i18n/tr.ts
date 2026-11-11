import type { TopicTranslation } from './types'

export const tr: TopicTranslation = {
  hubs: {
    '/color-screens': {
      intro:
        'Renkli ekranlar tüm ekranınızı tek bir düz renkle doldurur. Bir renk seçin, tam ekran için F’ye basın; her piksel tam olarak o rengi gösterir. Ölü ve takılı pikselleri bulmak, yumuşak bir ışık kaynağı, chroma key arka planı ve sakin, dikkat dağıtmayan bir ekran olarak kullanılır.',
      details: [
        {
          heading: 'Hangi rengi kullanmalıyım?',
          text: 'Aydınlatma ve temizlik için beyaz, ekranı gizlemek veya ışık sızmasını görmek için siyah, her alt pikseli test etmek için saf kırmızı, yeşil ve mavi kullanın. Gri dengesiz parlaklığı gösterir; sıcak turuncu ve pembe ise gece lambası ya da selfie ışığı olur.',
        },
        {
          heading: 'Tam renk değerleri',
          text: 'Her renkli ekran kesin bir hex değeri kullanır (örneğin kırmızı için #FF0000), böylece testler güvenilir olur. Yine de istediğiniz hex kodunu yazabilir ve her rengi 8K’ya kadar PNG olarak indirebilirsiniz.',
        },
      ],
      faqs: [
        { question: 'Tüm ekranı tek renk nasıl yaparım?', answer: 'Renk sayfasını açın ve F’ye basın veya Tam ekran’a tıklayın. Tarayıcı çubuklarını gizler ve yalnızca renk görünür. Çıkmak için Esc’ye basın.' },
        { question: 'Telefon ve TV’de çalışır mı?', answer: 'Evet. Android, iPhone, akıllı TV ve oyun konsolları dahil her modern tarayıcıda çalışır. iPhone Safari’de renk tarayıcı penceresini doldurur.' },
        { question: 'Düz renk görsel indirebilir miyim?', answer: 'Evet. Her renk sayfasında o rengin ücretsiz PNG’si var; indirme panelinde 720p’den 8K’ya istediğiniz boyutu oluşturabilirsiniz.' },
      ],
    },
    '/screen-tests': {
      intro:
        'Ekran testleri, ekranınızın ne kadar iyi çalıştığını gösteren tam ekran desenler ve ölçümlerdir. Ölü pikselleri bulmak, gerçek yenileme hızını Hz cinsinden ölçmek, gölgelenme, ışık sızması ve ekran yanığını görmek, dokunmatik ekrandaki ölü bölgeleri kontrol etmek ve renkleri değerlendirmek için kullanın; hepsi tarayıcıda, kurulum yok.',
      details: [
        {
          heading: 'Önce hangi testi yapmalıyım?',
          text: 'Yeni veya ikinci el bir ekranda ölü piksel testi ve homojenlik testiyle başlayın: iade veya garantinin en sık kapsadığı kusurları bunlar yakalar. Oyuncular yenileme hızı ve gölgelenme testlerini, telefon ve tablet sahipleri dokunmatik testi, OLED sahipleri de yanık testlerini eklemeli.',
        },
        {
          heading: 'Tarayıcı testleri ne kadar doğru?',
          text: 'Desenler kesin piksel değerleri kullanır ve zamanlama tarayıcının kare saatinden gelir; sonuç, ekranınızın gerçekten gösterdiğiyle örtüşür. Profesyonel kalibrasyon için kolorimetrenin yerini tutmaz.',
        },
      ],
      faqs: [
        { question: 'Monitörümde sorun olup olmadığını nasıl kontrol ederim?', answer: 'Ekranı temizleyin, ardından ölü piksel testini, karanlık odada homojenlik testini ve yenileme hızı testini yapın. Toplam yaklaşık beş dakika.' },
        { question: 'Testler TV ve telefonda çalışır mı?', answer: 'Evet. Sayfayı cihazın tarayıcısında açıp tam ekrana geçin. Dokunmatik ekran testi telefon ve tabletler için tasarlandı.' },
        { question: 'Ekran testleri ücretsiz mi?', answer: 'Evet. Tüm testler ücretsizdir, kayıt gerektirmez ve tamamen cihazınızda çalışır.' },
      ],
    },
    '/screensavers': {
      intro:
        'Online ekran koruyucular bilgisayara kurulmak yerine tarayıcıda çalışır. Birini açın, tam ekrana geçin; PC, Mac, Chromebook, akıllı TV ya da masadaki eski bir tablet, her cihazda oynar. Matrix dijital yağmurunu, seken DVD logosunu, retro kapaklı saati veya motivasyon sözlerini seçin.',
      details: [
        {
          heading: 'Neden tarayıcıda ekran koruyucu?',
          text: 'Akıllı TV ve Chromebook gibi ekran koruyucu ayarı olmayan cihazlarda çalışır, kurulum gerektirmez ve çalıştığı sürece ekranı açık tutar; resepsiyon, masa ve yayınlar için idealdir.',
        },
      ],
      faqs: [
        { question: 'Online ekran koruyucu bilgisayarın uykuya geçmesini engeller mi?', answer: 'Tam ekranda, destekleyen tarayıcılar Screen Wake Lock API ile ekranı açık tutar; siz çıkana kadar çalışır.' },
        { question: 'Akıllı TV’de kullanabilir miyim?', answer: 'Evet. Sayfayı TV’nin tarayıcısında açıp tam ekran düğmesine basın.' },
      ],
    },
    '/prank-screens': {
      intro:
        'Şaka ekranları, tarayıcıda çalışan gerçekçi ve zararsız sahte ekranlardır: Windows, macOS, ChromeOS ve Android güncelleme ekranları, mavi ölüm ekranı, hacklenmiş ekran ve sahte toplantılar. Birini açın, tam ekrana geçin ve şaka bitince Esc’ye basın. Hiçbir şey kurulmaz veya değiştirilmez.',
      details: [
        {
          heading: 'Sorumlu şaka',
          text: 'Kısa tutun ve şakayı açıklayın. Sahte bir güncelleme veya hatayı, birini para ödemeye ya da cihaza erişim vermeye korkutmak için asla kullanmayın: bu şaka değil, dolandırıcılıktır.',
        },
        {
          heading: 'Dekor olarak da',
          text: 'Film yapımcıları, yayıncılar, öğretmenler ve kaçış odaları bu ekranları inandırıcı dekor olarak kullanır; gerçek bir sisteme dokunmadan kamerada doğru görünürler.',
        },
      ],
      faqs: [
        { question: 'Şaka ekranları güvenli mi?', answer: 'Evet. Bir tarayıcı sekmesindeki görüntü ve animasyonlardır. Hiçbir şey kuramaz, dosya okuyamaz veya ayar değiştiremez.' },
        { question: 'Şaka ekranından nasıl çıkarım?', answer: 'Esc’ye basın ya da kapat düğmesini görmek için fareyi oynatın veya ekrana dokunun. Sekmeyi kapatmak da işe yarar.' },
      ],
    },
    '/visual-effects': {
      intro:
        'Görsel efektler ekranınızı bir görüntüden fazlasına dönüştürür: TV karıncalanmalı gürültü üreteci, halka ışık veya görüntülü görüşme ışığı, kırık ekran, hacker terminali, hareketli gürültü, renk geçişleri ve renk döngüleri. Hepsi tarayıcıda tam ekran çalışır; telefon, bilgisayar ve TV’de.',
      details: [
        {
          heading: 'Işık, ses ve eğlence tek yerde',
          text: 'Yüzünüzü aydınlatmak için halka ışığı ve Zoom ışığını, odaklanmak veya uyumak için gürültü üreteçlerini, şakalar ve videolar için kırık ekranı ve Hacker Typer’ı kullanın.',
        },
      ],
      faqs: [
        { question: 'Yanıp sönen efektler güvenli mi?', answer: 'Hızlı titreme ışığa duyarlı epilepsisi olanlarda nöbet tetikleyebilir. Hassassanız hızı düşürün veya sakin bir efekt seçin.' },
        { question: 'Gürültü üreteçleri veri harcar mı?', answer: 'Hayır. Ses cihazınızda üretilir, hiçbir şey akış olarak gelmez.' },
      ],
    },
    '/online-timers': {
      intro:
        'Online zamanlayıcılar odanın öbür ucundan okunabilen büyük tam ekran rakamlar gösterir. Dersler, toplantılar ve sınavlar için geri sayımı, 25 dakikalık bloklarla çalışmak için Pomodoro’yu, antrenman ve yarışlar için turlu kronometreyi kullanın. Arka plan sekmelerinde bile doğru kalırlar.',
      details: [
        {
          heading: 'Arka planda da doğru',
          text: 'Her zamanlayıcı tik saymak yerine cihaz saatiyle hesaplar; tarayıcı gizli sekmeleri yavaşlatsa da doğru kalır ve sekme başlığı kalan süreyi gösterir.',
        },
      ],
      faqs: [
        { question: 'Sekme arka plandayken zamanlayıcı çalar mı?', answer: 'Evet, sekme açık kaldığı sürece. Süre dolunca, açıksa uyarı sesi çalar.' },
        { question: 'Zamanlayıcıyı projeksiyonda veya TV’de gösterebilir miyim?', answer: 'Evet. Tarayıcıda açıp tam ekran için F’ye basın.' },
      ],
    },
  },
  colorAnswer: {
    template: '{subject}, tüm ekranınızı saf {word} ({hex}) ile doldurur. Tam ekran’a tıklayın veya F’ye basın; her piksel aynı rengi gösterir, çubuk ya da dikkat dağıtan bir şey kalmaz. {tail}',
    features: ['Saf {word} {hex} veya istediğiniz hex renk', 'Tek tıkla tam ekran ve parlaklık ayarı', '720p’den 8K’ya ücretsiz PNG indirme'],
    benefits: ['Telefon, dizüstü, monitör ve akıllı TV’de anında çalışır', 'Uygulama, kayıt ve kurulum gerektirmez'],
  },
  colors: {
    red: { subject: 'Kırmızı ekran', word: 'kırmızı', tail: 'Yalnızca kırmızı alt pikseller yanar; ölü veya takılı yeşil ve mavi alt pikseller kolayca görünür. Karanlığa uyumu koruyan kırmızı bir gece lambası olarak da kullanılır.', feature: 'Ok tuşları kırmızı, yeşil ve mavi arasında geçiş yapar', benefit: 'Takılı yeşil veya mavi alt pikselleri saniyeler içinde bulur' },
    green: { subject: 'Yeşil ekran', word: 'yeşil', tail: 'İçerik üreticileri hızlı bir chroma key arka planı olarak kullanır; yalnızca yeşil alt pikseller yandığı için kusurlu kırmızı veya mavi alt pikseller piksel testinde öne çıkar.', feature: 'OBS, Premiere veya CapCut için parlak chroma yeşili', benefit: 'Yeşil kumaşınız yokken ücretsiz yeşil perde' },
    blue: { subject: 'Mavi ekran', word: 'mavi', tail: 'Piksel testleri için yalnızca mavi alt pikselleri yakar; mavi chroma arka planı veya fotoğraflar için sakin, serin bir ışık olarak da işe yarar.', feature: 'Alt piksel testi ve mavi perde için saf mavi', benefit: 'Mavi kanalı kontrol eder ve takılı pikselleri gösterir' },
    yellow: { subject: 'Sarı ekran', word: 'sarı', tail: 'Sarı, kırmızı ve yeşil alt pikselleri birlikte yakar; ölü bir mavi alt piksel veya renk kayması açıkça görünür. Fotoğraflar için sıcak ve neşeli bir ışıktır.', feature: 'Tam güçte kırmızı ve yeşilden oluşan kesin sarı', benefit: 'Ölü mavi alt pikselleri ve dengesiz renk tonunu gösterir' },
    orange: { subject: 'Turuncu ekran', word: 'turuncu', tail: 'Sıcak tonu beyazdan daha az mavi ışık içerir; bu yüzden birçok kişi onu yumuşak gece lambası, gün batımı ambiyansı veya video için sıcak dolgu ışığı olarak kullanır.', feature: 'Loş, sıcak bir gece lambası için parlaklık ayarı', benefit: 'Beyaz ekrandan çok daha az mavi içeren sıcak ışık' },
    pink: { subject: 'Pembe ekran', word: 'pembe', tail: 'Canlı pembe, selfie ve makyaj için yumuşak, hoş bir ışık verir; partilere, yayınlara ve odalara atmosfer katar.', feature: 'Varsayılan canlı pembe, daha açık veya koyu tonlarla', benefit: 'Selfie ve makyaj için yumuşak, hoş ışık' },
    purple: { subject: 'Mor ekran', word: 'mor', tail: 'Mor, kırmızı ve mavi ışığı karıştırır: yayınlar, oyun masaları ve partiler için çarpıcı bir ambiyans ışığıdır ve yeşil kanalın gerçekten kapalı olduğunu hızla gösterir.', feature: 'Lavantadan menekşeye tonlarla canlı mor', benefit: 'Yayınlar ve partiler için anında ambiyans ışığı' },
    cyan: { subject: 'Camgöbeği ekran', word: 'camgöbeği', tail: 'Camgöbeği yeşil ve maviyi birlikte yakar; takılı bir kırmızı alt piksel veya eksik bir kanal kolayca görünür. Ayrıca serin ve keskin bir vurgu ışığıdır.', feature: 'Yeşil ve mavi kanalları kontrol için saf camgöbeği', benefit: 'Kusurlu kırmızı alt pikselleri ve renk kaymasını gösterir' },
    magenta: { subject: 'Eflatun ekran', word: 'eflatun', tail: 'Eflatun, yeşil kapalıyken kırmızı ve maviyi yakar; takılı yeşil alt pikseller ve yeşilimsi tonlar ekran testlerinde hemen fark edilir.', feature: 'Kırmızı ve mavi kanallar için saf eflatun', benefit: 'Takılı yeşil alt pikselleri ve yeşilimsi tonları gösterir' },
    gray: { subject: 'Gri ekran', word: 'gri', tail: 'Orta gri; parlak renklerin gizlediği kirli ekran etkisini, bulutlanmayı, vinyet ve renk bantlanmasını görmenin standart yoludur.', feature: 'Açık, orta ve koyu gri arasında geçiş', benefit: 'Homojenlik sorunlarını ve kirli ekran etkisini gösterir' },
  },
}
