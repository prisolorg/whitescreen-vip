import type { LocalizedToolContent, ToolTranslations } from '../types'
import type { ToolFaq } from '../../types'

const EXIT: ToolFaq = { question: 'Sahte ekrandan nasıl çıkarım?', answer: 'Esc’ye basın ya da kapat düğmesini görmek için fareyi oynatın veya ekrana dokunun. Sekmeyi kapatmak da işe yarar.' }
const brandFaq = (brand: string): ToolFaq => ({ question: `Bu ${brand} ile bağlantılı mı?`, answer: `Hayır. Eğlence amaçlı bağımsız bir yeniden yapımdır; ${brand} ile bağlantısı, onayı veya sponsorluğu yoktur. Ürün adları sahiplerine aittir.` })

function update(name: string, brand: string, glance: LocalizedToolContent['glance'], extra: ToolFaq): LocalizedToolContent {
  return {
    glance,
    steps: [
      'Hız kaydırıcısıyla yüzdenin ne kadar hızlı yükseleceğini ayarlayın.',
      'Simülasyonun ekranı doldurup tarayıcıyı gizlemesi için Tam ekran’a tıklayın veya F’ye basın.',
      'Uzaklaşın ve ilerlemenin sürmesine izin verin. Güncellemenin takılmış görünmesi için Duraklat’a basın.',
      'Çıkmak ve şakayı açıklamak için Esc’ye basın.',
    ],
    useCases: [
      { title: 'Zararsız ofis şakaları', description: 'Bir iş arkadaşınıza cihazının güncellendiğini düşündürün, sonra gerçeği söyleyin.' },
      { title: 'Mola vermek', description: 'Masanızdan kalktığınızda meşgul görünün.' },
      { title: 'Film ve video dekoru', description: `Sette inandırıcı bir ${name} güncellemesi gösterin.` },
      { title: 'Nostalji', description: 'Klasik bir sistem ekranını eğlence için yeniden görün.' },
    ],
    faqs: [
      { question: 'Bu gerçek bir güncelleme mi, zararlı bir şey mi?', answer: 'Hayır. Normal bir tarayıcı sekmesinde çalışan zararsız bir görsel simülasyondur. Cihazınızı değiştirmez, bir şey yüklemez ve bilgi istemez. İstediğiniz an Esc ile çıkın.' },
      brandFaq(brand),
      extra,
      EXIT,
    ],
  }
}

function call(brand: string, glance: LocalizedToolContent['glance'], extra?: ToolFaq): LocalizedToolContent {
  return {
    glance,
    steps: [
      'Görüşmenin üstünde görünen toplantı başlığını düzenleyin.',
      'İsterseniz kamera önizlemesini açın: cihazınızda kalır, asla kaydedilmez veya gönderilmez.',
      'İnandırıcı bir tam ekran görüşme için F’ye veya Tam ekran’a basın.',
      'İstediğiniz an çıkmak için Esc’ye basın.',
    ],
    useCases: [
      { title: 'Video dekoru', description: 'Gerçek bir görüşme olmadan toplantı sahnesi çekin.' },
      { title: 'Arayüz taslakları', description: 'Sunumlarda veya eğitimlerde bir görüşme düzenini kullanın.' },
      { title: 'Zararsız şakalar', description: 'Gülmek için “toplantıdaymış” gibi yapın.' },
      { title: 'Pratik', description: 'Gerçek bir görüşmeden önce kamerada nasıl göründüğünüzü deneyin.' },
    ],
    faqs: [
      { question: 'Bu gerçek bir görüşme mi, zararlı bir şey mi?', answer: 'Hayır. Normal bir tarayıcı sekmesinde çalışan zararsız bir görsel simülasyondur. Hiçbir hizmete bağlanmaz, bir şey yüklemez ve bilgi istemez.' },
      brandFaq(brand),
      { question: 'Kameramı veya mikrofonumu kullanıyor mu?', answer: 'Yalnızca kamera önizlemesini açarsanız. Görüntü cihazınızda kalır, asla kaydedilmez veya yüklenmez. Mikrofon hiç kullanılmaz.' },
      EXIT,
      ...(extra ? [extra] : []),
    ],
  }
}

export const tr: ToolTranslations = {
  'oled-gray-test': {
    glance: {
      answer: 'OLED gri testi, OLED panellerin en sık sorun gösterdiği siyaha yakın çok koyu gri tonları gösterir. OLED TV, monitör ve telefonlarda parlak içeriğin gizlediği siyaha yakın bantlanmayı, mura (lekeler), dikey çizgileri ve düzensiz gölgelenmeyi ortaya çıkarır.',
      features: ['%1’den %20’ye siyaha yakın griler ve bir geçiş', 'Üzerinde hiçbir şey olmayan tam ekran alanlar', 'Seviyeleri sakince karşılaştırmak için elle geçiş', 'Telefon, TV ve OLED monitörlerde çalışır'],
      benefits: ['Yeni bir OLED’i iade süresi içinde kontrol edin', 'Kalibrasyondan önce bantlanmayı bulun', 'Ücretsiz ve hızlı'],
    },
    steps: ['Işıkları kapatın ve ekranı normal parlaklığına ayarlayın.', 'Tam ekran için F’ye basın ve %5 seviyesiyle başlayın.', 'Panelin siyahları nerede yuttuğunu veya lekelendiğini görmek için %1–3’e inin.', 'Komşu tonlar arasında görünür sıçramalar için gri geçişini deneyin.'],
    useCases: [
      { title: 'Siyaha yakın homojenlik', description: 'Çok koyu griler OLED panellerdeki lekeleri ve dikey çizgileri gösterir.' },
      { title: 'Yutulan siyahlar', description: 'En düşük tonların görünüp görünmediğini veya siyaha karıştığını kontrol edin.' },
      { title: 'Düşük parlaklıkta titreme', description: 'Bazı paneller çok düşük gri ve parlaklıkta titrer.' },
      { title: 'Cihaz karşılaştırma', description: 'İki telefonu veya TV’yi aynı ayarlarla yan yana karşılaştırın.' },
    ],
    faqs: [
      { question: 'Siyaha yakın griler OLED’de neden lekeli görünüyor?', answer: 'Her OLED pikseli ayrı sürülür ve çok düşük ışıkta küçük farklar görünür olur. Biraz düzensizlik tüm OLED’lerde normaldir.' },
      { question: 'Bu test LCD ekranlar için de faydalı mı?', answer: 'Evet, ama LCD’lerde siyaha yakın sorunlar çoğunlukla ışık sızması veya bulutlanma olarak görünür. Bunlar için homojenlik testini kullanın.' },
      { question: '%1 seviyesini neden göremiyorum?', answer: 'Birçok ekran ve görüntü modu en koyu tonları yutar. Parlaklığı biraz artırın veya başka bir görüntü modu deneyin.' },
    ],
  },
  'oled-burn-in-test': {
    glance: {
      answer: 'OLED yanık testi, düzensiz piksel aşınmasının bıraktığı soluk logoları, durum çubuklarını, gezinme düğmelerini veya oyun arayüzlerini görünür kılmak için tam ekran düz renkler gösterir. Yanık kalıcıdır; görüntü tutulması geçicidir ve kaybolur. İkisi de en iyi gri, kırmızı ve mavide görülür.',
      features: ['Gri, kırmızı, yeşil, mavi ve beyaz alanlar', 'Hızlı renk değişimi için ok tuşları', 'Yanık ile tutulmayı ayırt etme ipuçları', 'OLED telefon, TV ve monitörler için'],
      benefits: ['İkinci el OLED telefonu veya TV’yi almadan önce kontrol edin', 'Tutulmayı erken yakalayın', 'Uygulama veya indirme yok'],
    },
    steps: ['Tam ekran için F’ye basın ve orta griyle başlayın, sonra kırmızı, yeşil, mavi ve beyazı deneyin.', 'Görev çubuğu, logo, klavye veya kanal logosu gibi soluk şekilleri arayın.', 'Geçici tutulma arıyorsanız otomatik geçişi kullanın.', 'Şekiller birkaç dakikada kaybolursa yanık değil geçici tutulmaydı.'],
    useCases: [
      { title: 'İkinci el OLED alımı', description: 'Kullanılmış bir telefonu veya TV’yi hayalet görüntüler için kontrol edin.' },
      { title: 'Oyun arayüzleri', description: 'Uzun oturumlardan sonra can çubuklarını veya mini haritaları arayın.' },
      { title: 'Tutulma mı yanık mı', description: 'Geçici tutulmayı kalıcı yanıktan ayırmaya yardım eder.' },
      { title: 'Garanti', description: 'Destek için yanığı düz bir renk üzerinde fotoğraflayın.' },
    ],
    faqs: [
      { question: 'Bu araç yanığı düzeltir mi?', answer: 'Hayır. Kalıcı yanık düzensiz piksel aşınmasıdır ve hiçbir web sitesi bunu geri alamaz. Ekranınızın yerleşik piksel yenileme özelliğini kullanın ve üreticinin önerilerine uyun.' },
      { question: 'Görüntü tutulması ile yanık arasındaki fark nedir?', answer: 'Tutulma geçicidir ve başka içerik gösterince kaybolur. Yanık kalıcıdır ve düz renklerde görünmeye devam eder.' },
      { question: 'Yanığı en iyi hangi renk gösterir?', answer: 'Orta gri ve kırmızı genellikle en net gösterir, ama aşınma alt piksele göre değiştiği için tüm renkleri kontrol edin.' },
    ],
  },
  'screen-burn-in-test': {
    glance: {
      answer: 'Ekran yanığı testi, herhangi bir ekranı hayalet görüntüler için kontrol etmenizi ve ardından ekranda renk ve parazit dolaştıran bir düzeltici çalıştırmanızı sağlar. Geçici tutulma genellikle 10–30 dakikalık düzelticiden sonra kaybolur; aşınmış piksellerden kaynaklanan kalıcı yanık yazılımla onarılamaz.',
      features: ['Düz renkler ve ok tuşlarıyla kontrol modu', 'Düzeltici modu: tarama, renk döngüsü ve parazit', 'Düzelticiyi otomatik durduran zamanlayıcı', 'OLED, plazma ve LCD ekranlar için'],
      benefits: ['Geçici tutulmayı ek uygulama olmadan temizleyin', 'İzin tutulma mı yanık mı olduğunu görün', 'Ücretsiz ve ekranınız için güvenli'],
    },
    steps: ['Parlaklığı artırın ve loş bir odada tam ekrana geçin.', 'Kontrol modunda ok tuşları veya düğmelerle her rengi gezin. %50 gri yanığı en iyi gösterir.', 'Şekil görürseniz düzelticiye geçin, beyaz taramayı (veya yanıp sönme sizi rahatsız etmiyorsa yanıp sönen bir deseni) seçin ve 10–30 dakika çalıştırın.', 'Sonra tekrar kontrol edin. Birkaç turdan sonra kalan şekiller genellikle kalıcı yanıktır.'],
    useCases: [
      { title: 'İkinci el ekran alımı', description: 'Ödemeden önce yanmış logoları veya görev çubuklarını fark edin.' },
      { title: 'Uzun sabit kullanımdan sonra', description: 'Saatlerce pano, kayan yazı veya oyun gösteren monitörleri kontrol edin.' },
      { title: 'Tutulmayı temizleme', description: 'Hayalet görüntü kaldığında düzelticiyi çalıştırın.' },
      { title: 'Garanti', description: 'Destek için yanığı gri bir alanda fotoğraflayın.' },
    ],
    faqs: [
      { question: 'Görüntü tutulması ile yanık arasındaki fark nedir?', answer: 'Tutulma geçicidir ve dakikalar ya da saatler süren çeşitli içerikten sonra kaybolur. Yanık piksellerin kalıcı aşınmasıdır.' },
      { question: 'Düzeltici yanığı onarabilir mi?', answer: 'Geçici tutulmaya yardımcı olur. OLED’deki kalıcı yanık, hiçbir desenin geri alamayacağı düzensiz aşınmadır; TV’nizin veya monitörünüzün piksel yenileme özelliği en iyi seçenektir.' },
      { question: 'Yanığı en iyi hangi renk gösterir?', answer: 'Orta veya koyu gri genellikle en net gösterir, ardından kırmızı, yeşil ve mavi gelir.' },
    ],
  },
  'monitor-ghosting-test': {
    glance: {
      answer: 'Monitör gölgelenme testi, yavaş piksel tepkisinin bıraktığı izleri görebilmeniz için nesneleri ekranda hareket ettirir. Nesnenin arkasındaki soluk kopyalar gölgelenmedir; parlak veya ters haleler aşırı overdrive’dan kaynaklanan taşmadır. En iyi overdrive ayarını seçmek için kullanın.',
      features: ['Ayarlanabilir hızda üç hareketli şerit', 'Farklı geçişler için açık ve koyu arka planlar', 'İz uzunluğunu değerlendirmek için referans ızgara', 'Ekranınızın gerçek yenileme hızına uyar'],
      benefits: ['Oyun için doğru overdrive modunu seçin', 'Almadan veya iade etmeden önce monitörleri karşılaştırın', 'Kamerayla yapılan testlere ücretsiz alternatif'],
    },
    steps: ['Monitörü en yüksek yenileme hızına ayarlayın ve tam ekrana geçin.', 'Hedefi gözlerinizle takip edin. Arkasında iz, kenarlarında hale arayın.', 'Hızı değiştirin, ardından monitör menüsündeki her overdrive veya tepki süresi ayarını deneyin.', 'Durağan bir kareye bakmak için duraklatın; hedefin kendisi net olmalı.'],
    useCases: [
      { title: 'Overdrive ayarı', description: 'En kısa izli ve ters gölgelenmesiz ayarı seçin.' },
      { title: 'VA panellerde siyah iz', description: 'Koyu şerit, VA panellerde yaygın mor-siyah izi gösterir.' },
      { title: 'Monitör karşılaştırma', description: 'Aynı hızı yan yana iki ekranda kullanın.' },
      { title: 'Yeni alımı kontrol', description: 'Hareketin vaat edildiği gibi görünüp görünmediğine bakın.' },
    ],
    faqs: [
      { question: 'Monitör gölgelenmesi nedir?', answer: 'Piksellerin bir sonraki kareden önce rengini yeterince hızlı değiştirememesi nedeniyle hareketli nesnelerin arkasında kalan soluk izdir.' },
      { question: 'Ters gölgelenme nedir?', answer: 'Overdrive’ın pikselleri hedeflerinin ötesine itmesiyle hareketli nesnelerin etrafında oluşan parlak veya renkli haledir. Düzeltmek için overdrive’ı düşürün.' },
      { question: 'Hedef gölgelenme olmadan da neden bulanık görünüyor?', answer: 'Bu, örnekle-ve-tut bulanıklığıdır: her kare sabitken gözleriniz nesneyi takip eder. Daha yüksek yenileme hızı veya arka ışık strobe modu bunu azaltır.' },
    ],
  },
  'frame-rate-test': {
    glance: {
      answer: 'Kare hızı testi, aynı hareketi farklı saniyedeki kare (FPS) değerlerinde yan yana gösterir: 15, 24, 30, 60 ve ekranınızın en yükseği. Takılan ile akıcı hareket arasındaki farkı görünür kılar ve 24 FPS filmlerle 60 FPS oyunların neden bu kadar farklı hissettirdiğini gösterir.',
      features: ['15, 24, 30, 60 FPS ve en yüksek değerde beş şerit', 'Hareketi abartmak veya yumuşatmak için ayarlanabilir hız', 'Ölçülen en yüksek yenileme hızını gösterir', 'Duraklatma ve tam ekran'],
      benefits: ['Yüksek yenileme hızlı monitörün farkını görün', 'FPS’yi öğrencilere veya izleyicilere anlatın', 'Her modern tarayıcıda çalışır'],
    },
    steps: ['Her şeridi izleyin; hepsi aynı hızda hareket eder.', 'Takılmaları daha iyi görmek için hızı artırın.', 'Yüksek yenileme hızlı bir ekranda 60 FPS şeridini en yüksek şeritle karşılaştırın.', 'Tam ekran için F’ye basın veya iki kez dokunun, çıkmak için Esc’ye basın.'],
    useCases: [
      { title: 'Oyun ayarları', description: 'Daha yüksek FPS’nin daha düşük grafik ayarlarına değip değmediğine karar verin.' },
      { title: 'Video prodüksiyonu', description: 'Filmlerin neden 24 FPS, sporun neden 50 veya 60 kullandığını görün.' },
      { title: 'Arkadaşlara gösterme', description: '“Göz 30 FPS’den fazlasını görmez” tartışmasını bitirin.' },
      { title: 'Ekran seçimi', description: '120 veya 144 Hz ekranın neler kattığını görün.' },
    ],
    faqs: [
      { question: 'En yüksek şerit neden 60 FPS gibi görünüyor?', answer: 'Ekranınız her yenilemede en fazla bir kare gösterir. 60 Hz bir ekranda 60 FPS ve en yüksek şerit aynı görünür.' },
      { question: '24 FPS burada neden takılıyor da filmlerde akıcı?', answer: 'Film kameraları her karede hareket bulanıklığı kaydeder ve bu hareketi yumuşatır. Bu test net kareler kullanır, bu yüzden her adım görünür.' },
      { question: 'Oyun için kaç FPS gerekir?', answer: 'Çoğu oyunda en az 60 FPS akıcı hissettirir; rekabetçi oyuncular 144 Hz veya daha yüksek bir monitörü yakalamayı hedefler.' },
    ],
  },
  'screen-color-test': {
    glance: {
      answer: 'Ekran renk testi, ekranınızın rengi ne kadar doğru gösterdiğini değerlendirmeniz için renk çubukları, RGB geçişleri ve doygunluk desenleri gösterir. Görüntü ayarlarınızı değiştirmeniz gerekip gerekmediğine karar vermek için geçişlerde bantlanma, patlamış parlak alanlar, eksik tonlar ve renk kayması arayın.',
      features: ['SMPTE tarzı renk çubukları', 'Kırmızı, yeşil, mavi ve gri geçişler', 'Doygunluk ve ten rengi desenleri', 'Klavyeyle geçişli tam ekran'],
      benefits: ['Bantlanmayı ve renk kaymasını hızla görün', 'Görüntü modlarını karşılaştırın', 'Ücretsiz, kalibrasyon cihazı gerekmez'],
    },
    steps: ['Ekranınızın varsayılan veya kalibre edilmiş görüntü modunu kullanın.', 'Tam ekran için F’ye basın ve düğmeler veya ok tuşlarıyla desen değiştirin.', 'Geçişlerde, parlak uçta basamak veya kırpılma olmadan yumuşak geçişler arayın.', 'Aynı deseni başka bir ekranda karşılaştırın.'],
    useCases: [
      { title: 'Renk kayması tespiti', description: 'Gri ve beyaz alanlar pembe veya yeşil tonsuz, nötr görünmeli.' },
      { title: 'Kırpılma kontrolü', description: 'Her kanalın en parlak basamaklarının ayırt edilebilir kalıp kalmadığına bakın.' },
      { title: 'Bantlanma kontrolü', description: 'Geçişler 6 bit panellerden veya yoğun işlemeden gelen basamakları gösterir.' },
      { title: 'Yan yana karşılaştırma', description: 'Bir dizüstüyü ve harici monitörü renk tutarlılığı için karşılaştırın.' },
    ],
    faqs: [
      { question: 'Monitörümü bununla kalibre edebilir miyim?', answer: 'Gözle kaba ayarlar yapabilirsiniz, ama gerçek kalibrasyon için kolorimetre ve kalibrasyon yazılımı gerekir.' },
      { question: 'Renk geçişlerim neden basamaklı görünüyor?', answer: 'Genellikle panelin veya görüntü işlemenin renk derinliği sınırlıdır. Gece modları ve bazı görüntü ön ayarları da bantlanmaya yol açabilir.' },
      { question: 'Renkler neden telefonumda ve monitörümde farklı?', answer: 'Ekranlar renk gamı, beyaz noktası ve işleme açısından farklıdır. Bazıları renkleri ortam ışığına göre otomatik ayarlar.' },
    ],
  },
  'no-signal-screen': {
    glance: {
      answer: '“Sinyal yok” ekranı, HDMI veya kablodan giriş almayan bir TV ya da monitörün tanıdık mesajını gösterir. Renk çubukları ve kayan bir mesaj kutusuyla tam ekranda inandırıcı bir şaka, film dekoru veya boştaki bir ekran için yer tutucu olur.',
      features: ['Klasik renk çubukları veya mavi arka plan', 'Gerçek bir TV gibi kayan “Sinyal yok” kutusu', 'İsteğe bağlı 1 kHz test sesi ve özel giriş adı', 'Gizli imleçle tam ekran'],
      benefits: ['Kolay ve zararsız şaka', 'Film, kaçış odası ve setler için dekor', 'Akıllı TV’lerde tarayıcıdan çalışır'],
    },
    steps: ['Bir stil seçin: klasik renk çubukları, seken mesajlı siyah ekran veya mavi giriş ekranı.', 'Mesajı ve “HDMI 1” gibi giriş adını düzenleyin.', 'İsterseniz 1 kHz test sesini açın: sessiz başlar ve yalnızca tıkladıktan sonra çalar.', 'Ekranı doldurmak için F’ye veya Tam ekran’a basın, çıkmak için Esc’ye basın.'],
    useCases: [
      { title: 'Film ve fotoğraf dekoru', description: 'Bir seti inandırıcı biçimde fişi çekilmiş bir TV ile hazırlayın.' },
      { title: 'Yayın araları', description: 'Mola verirken “sinyal yok” kartı kullanın.' },
      { title: 'Retro estetik', description: 'Videolara veya sunumlara nostaljik bir yayın havası katın.' },
      { title: 'Zararsız şakalar', description: 'Bir ekranı bağlantısı kopmuş gibi gösterin, sonra açıklayın.' },
    ],
    faqs: [
      { question: 'Renkli çubukların adı ne?', answer: 'Bunlar SMPTE renk çubuklarıdır; TV’lerde ve video ekipmanında renk ve parlaklığı kalibre etmek için kullanılan bir yayın test desenidir.' },
      { question: 'Monitörüm gerçekten sinyal kaybeder mi?', answer: 'Hayır. Yalnızca sinyalsiz bir ekran gibi görünen bir web sayfasıdır. Ekranınız normal çalışmaya devam eder.' },
      { question: 'Nasıl çıkarım?', answer: 'Esc’ye basın ya da fareyi oynatıp köşedeki kapat düğmesine tıklayın.' },
    ],
  },
  'hacker-typer': {
    glance: {
      answer: 'Hacker Typer rastgele yazmayı ekranda gerçekçi koda dönüştürür; böylece herkes film hacker’ı gibi görünür. Herhangi bir tuşa basın, gerçek görünen kod satırları belirsin; sahneyi tamamlamak için “Access Granted” veya “Access Denied” uyarılarını tetikleyin.',
      features: ['Tuşlara bastıkça gerçek kod akar', 'Erişim verildi ve reddedildi uyarıları', 'Ayarlanabilir yazma hızı ve metin rengi', 'Tam ekran terminal görünümü'],
      benefits: ['Videolar ve şakalar için anında hacker sahnesi', 'Çocukları kodla tanıştırmanın eğlenceli yolu', 'Ücretsiz, kurulum yok'],
    },
    steps: ['Terminale tıklayın ve herhangi bir şey yazın, ya da telefonda ekrana dokunun.', 'Tuş başına kaç karakter çıkacağını belirlemek için hızı değiştirin.', '“ACCESS GRANTED” için üç kez Alt’a, “ACCESS DENIED” için üç kez Caps Lock’a basın.', 'Tam etki için Tam ekran düğmesini veya F11’i kullanın, çıkmak için Esc’ye basın.'],
    useCases: [
      { title: 'Arkadaşları etkileyin', description: 'Saçma sapan yazarken bir dahi gibi görünün.' },
      { title: 'Film ve yayın', description: 'Videolar için inandırıcı “hackleme” görüntüleri.' },
      { title: 'Sınıfta eğlence', description: 'Programlamaya ilgi uyandırmanın oyunbaz bir yolu.' },
      { title: 'Parti arka planı', description: 'Teknoloji temalı bir etkinlikte boş bir ekranda çalıştırın.' },
    ],
    faqs: [
      { question: 'Hacker Typer gerçekten bir şey hackliyor mu?', answer: 'Hayır. Yalnızca önceden yazılmış zararsız metni ekrana basar. Komut çalıştırmaz, ağlara erişmez ve dosyalarınıza dokunmaz.' },
      { question: 'F tuşu burada neden tam ekranı açmıyor?', answer: 'Bu araçta her tuş kod yazar; bu yüzden tam ekran düğmesini kullanın.' },
      { question: 'Telefonda çalışır mı?', answer: 'Evet. Daha fazla kod için terminale tekrar tekrar dokunun.' },
    ],
  },
  'hacked-screen': {
    glance: {
      answer: 'Hacklenmiş ekran simülatörü, bozuk efektli metin, kayan kayıtlar, ilerleme çubuğu ve geri sayımla sahte bir “sisteminiz hacklendi” uyarısı gösterir. Zararsız bir şakadır: hiçbir şeye erişilmez veya değiştirilmez, geri sayım bitince bir mesaj bunun şaka olduğunu açıklar.',
      features: ['Kırmızı alarm ve yeşil terminal stilleri', 'Özel başlık, kayıtlar ve geri sayım', 'İsteğe bağlı siren', 'Net bir “şakaydı” mesajıyla biter'],
      benefits: ['Dramatik görünen zararsız şaka', 'Filmler, yayınlar ve kaçış odaları için dekor', 'Tarayıcıda tamamen çevrimdışı çalışır'],
    },
    steps: ['Bir stil (kırmızı alarm veya yeşil terminal) ve gösterilecek metni seçin.', 'İsteğe bağlı sireni açın veya kapatın; yalnızca başlattıktan sonra çalar.', 'Tam ekrana geçin ve cihazı arkadaşınızın bulması için bırakın.', 'Kapat düğmesini görmek için Esc’ye basın veya fareyi oynatın.'],
    useCases: [
      { title: 'Şakalar', description: 'Sonra gülecek bir arkadaşa kısa bir korku.' },
      { title: 'Filmler ve kaçış odaları', description: 'İnandırıcı bir “hacklendiniz” dekor ekranı.' },
      { title: 'Güvenlik farkındalığı', description: 'İnsanların görmezden gelmeyi öğrenmesi için korkutma yazılımının neye benzediğini gösterin.' },
      { title: 'Yayınlar ve videolar', description: 'Dramatik bir ara veya tepki anı.' },
    ],
    faqs: [
      { question: 'Bu cihazımı gerçekten hackliyor veya zarar veriyor mu?', answer: 'Hayır. Normal bir tarayıcı sekmesindeki metin ve animasyondur. Komut çalıştırmaz, dosya okumaz ve hiçbir yere bağlanmaz.' },
      { question: 'Gerçek bir site hacklendiğimi söylerse ne yapmalıyım?', answer: 'Sekmeyi kapatın. Gerçek güvenlik araçları asla bir numarayı aramanızı veya cihazın kilidini açmak için ödeme yapmanızı istemez; bunu isteyen pencereler dolandırıcılıktır.' },
      { question: 'Nasıl çıkarım?', answer: 'Esc’ye basın ya da kapat düğmesini görmek için fareyi oynatın veya dokunun. Sekmeyi kapatmak da işe yarar.' },
    ],
  },
  'zoom-lighting': {
    glance: {
      answer: 'Zoom ışığı, ekranınızı görüntülü görüşmeler için yumuşak bir ışık kaynağına dönüştürür. Sıcaktan (yaklaşık 2700 K) gün ışığına (6500 K) bir renk sıcaklığı seçin, parlaklığı ayarlayın ve ekranı doldurun ya da Zoom, Google Meet veya Microsoft Teams pencerenizin çevresinde ışık çerçevesi kullanın.',
      features: ['Hazır ayarlı Kelvin renk sıcaklığı kaydırıcısı', 'Tam ekran veya görüşme çevresinde çerçeve', 'Parlaklık ve özel renk', 'İkinci monitörde veya tablette çalışır'],
      benefits: ['Işık almadan daha parlak ve eşit yüz aydınlatması', 'Cilde yakışan sıcak ışık', 'Ücretsiz ve anında'],
    },
    steps: ['Bu sayfayı ikinci bir monitörde veya görüşme pencerenizin yanında açın.', 'Renk sıcaklığını ve parlaklığı ayarlayın. Daha fazla ışık için ekran parlaklığını artırın.', 'En yüksek parlaklık için tam ışığı, görüşmeniz için ortada karanlık bir pencere bırakmak için çerçeveyi seçin.', 'Ekranı doldurmak için F’ye veya Tam ekran’a basın, çıkmak için Esc’ye basın.'],
    useCases: [
      { title: 'Görüntülü görüşmeler', description: 'Loş odalarda yüzünüzü aydınlatın ve dengeleyin.' },
      { title: 'Yayın', description: 'Boştaki bir monitör veya tabletten yumuşak ana ışık.' },
      { title: 'Selfie', description: 'Dizüstü veya tableti hızlı ve eşit bir ışık kaynağı olarak kullanın.' },
      { title: 'Makyaj', description: 'Makyajı sıcak akşam ışığında veya gün ışığına yakın ışıkta kontrol edin.' },
    ],
    faqs: [
      { question: 'Hangi renk sıcaklığını kullanmalıyım?', answer: 'Odaya uyanı. Akşam lambayla aydınlanan odalar için yaklaşık 3000 K, 4000–4500 K nötr, 5500–6500 K pencereden gelen gün ışığına uyar.' },
      { question: 'Bu kameramı değiştirir mi?', answer: 'Hayır. Yalnızca yüzünüzü aydınlatır. Toplantı uygulamanızın düşük ışık ayarını kullanmaya devam edebilirsiniz.' },
      { question: 'Ekranım normalden parlak mı olur?', answer: 'Hayır. Mevcut parlaklığınızı kullanır; daha fazla ışık için ekran parlaklığını artırın.' },
    ],
  },
  'visual-noise': {
    glance: {
      answer: 'Görsel parazit, ekranı yumuşakça akan hareketli desenlerle doldurur: hafif sis, renkli plazma ve ince gren. Videolar ve yayınlar için arka plan, tasarım dokuları için referans ve rahatlamak için sakin bir görsel olarak kullanılır.',
      features: ['Sis, plazma ve ince gren stilleri', 'Ölçek, hız ve renk paleti', 'Bir kareyi dondurmak için duraklatma', 'Azaltılmış hareketi tercih ediyorsanız duraklatılmış başlar'],
      benefits: ['Videolar ve yayınlar için sakin hareketli arka planlar', 'Tasarım için doku referansı', 'Ücretsiz ve hafif'],
    },
    steps: ['Sis, plazma veya ince gren gibi bir stil seçin.', 'Ölçeği, hızı ve renk paletini ayarlayın.', 'Beğendiğiniz bir kareyi dondurmak için animasyonu duraklatın.', 'Ekranı doldurmak için F’ye veya Tam ekran’a basın, çıkmak için Esc’ye basın.'],
    useCases: [
      { title: 'Ortam görseli', description: 'Arka planda bir TV veya monitörde yumuşak hareket.' },
      { title: 'Tasarım dokuları', description: 'Gren ve geçiş dokuları için referans.' },
      { title: 'VJ arka planları', description: 'Etkinlikler için basit üretken görseller.' },
      { title: 'Rahatlama', description: 'Gevşemek için yavaş sis desenleri.' },
    ],
    faqs: [
      { question: 'Bu TV karıncalanmasıyla aynı mı?', answer: 'Hayır. TV karıncalanması her piksel ve karede rastgeledir. Bu desenler yavaşça akan yumuşatılmış parazit kullanır.' },
      { question: 'Çok pil harcar mı?', answer: 'Grafik donanımında çalışır. Dizüstünde enerji tasarrufu için hızı düşürün veya duraklatın.' },
      { question: 'Azaltılmış hareket tercihine uyuyor mu?', answer: 'Evet. Sisteminiz azaltılmış hareketi tercih ediyorsa animasyon duraklatılmış başlar.' },
    ],
  },
  'color-cycle': {
    glance: {
      answer: 'Renk değiştiren ekran, ekranınızı gökkuşağının renkleri arasında yumuşakça geçirir. Parti ışığı, ambiyans ışığı, rahatlama ya da ekranınızın her tonu bantlanma olmadan gösterip göstermediğini hızla kontrol etmek için hızı ve parlaklığı ayarlayın.',
      features: ['Yumuşak gökkuşağı veya adımlı mod', 'Hız ve parlaklık ayarları', 'Gizli imleçle tam ekran', 'Azaltılmış hareket tercihine uyar'],
      benefits: ['Anında parti veya ambiyans ışığı', 'Yumuşak renk geçişlerini kontrol eder', 'Her cihazda ücretsiz'],
    },
    steps: ['Yumuşak gökkuşağı geçişini veya renkler arasında adımlı döngüyü seçin.', 'Kaydırıcıyla hızı ayarlayın.', 'Duraklatmak ve devam etmek için boşluk tuşuna basın.', 'Ekranı doldurmak için F’ye veya Tam ekran’a basın, çıkmak için Esc’ye basın.'],
    useCases: [
      { title: 'Ambiyans ışığı', description: 'Partiler veya rahatlamak için yavaşça değişen bir ışıltı.' },
      { title: 'Takılı pikseller', description: 'Hızlı renk döngüsü bazen takılı pikseller için önerilir, garantisi yoktur.' },
      { title: 'Yayın ambiyansı', description: 'Kamerada arkanızda değişen bir arka plan ışığı.' },
      { title: 'Çocuk gece lambası', description: 'Düşük parlaklıkta yavaşça değişen yumuşak bir ışık.' },
    ],
    faqs: [
      { question: 'Renk döngüsü takılı pikselleri düzeltir mi?', answer: 'Hızlı renk değişimi bazen takılı bir alt pikselin yeniden tepki vermesine yardım eder, ama garantisi yoktur ve ölü pikselleri düzeltemez.' },
      { question: 'Hızlı döngü güvenli mi?', answer: 'Hızlı yanıp sönme ışığa duyarlı epilepsisi olanları etkileyebilir. Hız sınırlıdır, yavaş başlar ve azaltılmış hareket tercihine uyulur.' },
      { question: 'Beğendiğim bir renkte durdurabilir miyim?', answer: 'Evet. Boşluk tuşuna veya duraklat düğmesine basın.' },
    ],
  },
  'gradient-screen': {
    glance: {
      answer: 'Renk geçişi ekranı, seçtiğiniz renkler arasında yumuşak bir geçişle ekranınızı doldurur. Renkleri, açıyı ve türü ayarlayın; yumuşak ortam ışığı veya duvar kâğıdı olarak kullanın, ekranınızda bantlanma olup olmadığını kontrol edin ve geçişi görsel olarak indirin.',
      features: ['Doğrusal ve dairesel geçişler', 'İstediğiniz renk ve açı', 'Yüksek çözünürlüklü PNG indirme', 'Tam ekran'],
      benefits: ['Saniyeler içinde özel duvar kâğıtları', 'Monitörler için iyi bir bantlanma testi', 'Ücretsiz, tasarım uygulaması gerekmez'],
    },
    steps: ['Bir hazır ayar veya kendi renklerinizi seçin.', 'Doğrusal ile dairesel arasında geçiş yapın ve açıyı ayarlayın.', 'Yavaşça kayan bir geçiş için animasyonu açın.', 'Tam ekran için F’ye basın veya geçişi PNG olarak indirin.'],
    useCases: [
      { title: 'Duvar kâğıtları', description: 'Her çözünürlükte özel bir geçiş duvar kâğıdı oluşturun.' },
      { title: 'Ortam ışığı', description: 'Yumuşak iki tonlu ışıltı, düz renkten daha az yorar.' },
      { title: 'Bantlanma testi', description: 'Yumuşak geçişler düşük renk derinlikli panellerde bantlanmayı gösterir.' },
      { title: 'Arka planlar', description: 'Sunumlar ve videolar için hızlı arka planlar.' },
    ],
    faqs: [
      { question: 'Geçişim neden çizgili görünüyor?', answer: 'Bu bantlanmadır; panelin sınırlı renk derinliğinden veya görüntü sıkıştırmasından kaynaklanır. Geçişteki bir hata değil, ekranın bir sınırıdır.' },
      { question: 'İndirebilir miyim?', answer: 'Evet. Bir çözünürlük seçin ve tarayıcınızda oluşturulan PNG’yi indirin.' },
      { question: 'Üç renk kullanabilir miyim?', answer: 'Evet. Üçüncü bir renk noktası eklemek için orta rengi açın.' },
    ],
  },
  'flip-clock-screensaver': {
    glance: {
      answer: 'Kapaklı saat ekran koruyucusu, retro bir çalar saat gibi her dakika dönen büyük rakamlarla saati gösterir. 12 veya 24 saat biçimini seçin, saniyeleri ve tarihi gösterin, boştaki bir monitörde, tablette veya TV’de tam ekran çalıştırın.',
      features: ['Animasyonlu kapaklı rakamlar', 'Saniye ve tarihli 12 ve 24 saat biçimi', 'Açık ve koyu temalar', 'Tam ekranda ekranı açık tutar'],
      benefits: ['Eski bir tableti masa saatine çevirir', 'Odanın öbür ucundan okunan büyük saat', 'Ücretsiz, uygulamasız'],
    },
    steps: ['Yerel saatiniz otomatik olarak görünür.', '12/24 saat biçimini, saniyeleri ve tarihi değiştirin. Her rakam gerçek bir kapaklı saat gibi döner.', 'Odanıza uyan bir tema seçin.', 'Ekranı doldurmak için F’ye veya Tam ekran’a basın, çıkmak için Esc’ye basın.'],
    useCases: [
      { title: 'Masa saati', description: 'Boştaki bir tableti veya monitörü masa ya da başucu saatine çevirin.' },
      { title: 'Sunumlar', description: 'Etkinliklerde ve aralarda saati net gösterin.' },
      { title: 'Odak oturumları', description: 'Çalışırken gözünüzün önünde sakin, sade bir saat.' },
      { title: 'Yayın', description: 'Şık bir “birazdan başlıyoruz” arka planı.' },
    ],
    faqs: [
      { question: 'Saat nereden geliyor?', answer: 'Cihazınızın saatinden ve saat diliminden; bu yüzden yüklendikten sonra çevrimdışı çalışır.' },
      { question: 'Ekranım açık kalır mı?', answer: 'Tam ekranda, destekleyen tarayıcılarda uyanık tutma kilidi ekranı açık tutar.' },
      { question: 'Dönme animasyonunu kapatabilir miyim?', answer: 'Evet. Sisteminiz azaltılmış hareketi tercih ediyorsa rakamlar dönmeden değişir.' },
    ],
  },
  'motivational-quote-screensaver': {
    glance: {
      answer: 'Motivasyon sözleri ekran koruyucusu, birkaç saniyede bir büyük ve okunaklı yazıyla yeni bir ilham verici söz gösterir; isteğe bağlı bir saat de vardır. Ofis lobileri, sınıflar, spor salonları ve gün içinde göz atılan ev ekranları için uygundur.',
      features: ['Seneca, Marcus Aurelius, Emerson ve başkalarından sözler', 'Geçiş hızı, arka planlar ve karışık sıra', 'İsteğe bağlı saat', 'Kapanmadan tam ekran'],
      benefits: ['Ortak alanlar için olumlu bir ekran', 'Akıllı TV’lerde kurulum gerekmez', 'Ücretsiz'],
    },
    steps: ['Hemen rastgele bir söz görünür.', 'Bir arka plan ve her sözün ekranda kaç saniye kalacağını seçin.', 'Sözler arasında geçmek için okları veya ← → tuşlarını kullanın; boşluk duraklatır.', 'Ekranı doldurmak için F’ye veya Tam ekran’a basın, çıkmak için Esc’ye basın.'],
    useCases: [
      { title: 'Ofis ve lobi ekranları', description: 'Resepsiyon TV’leri ve ekip alanları için sakin, olumlu bir döngü.' },
      { title: 'Sınıflar', description: 'Öğrenciler gelirken günün sözünü gösterin.' },
      { title: 'Spor salonları ve stüdyolar', description: 'Salonun öbür ucundan okunan kısa, etkili cümleler.' },
      { title: 'Ev masası', description: 'Çalışırken ikinci bir monitörü veya eski bir tableti işe yarar tutun.' },
    ],
    faqs: [
      { question: 'Sözler nereden geliyor?', answer: 'Seneca, Marcus Aurelius, Konfüçyüs, Benjamin Franklin ve Mark Twain gibi köklü yazarlardan ve atasözlerinden kısa cümlelerdir. Sayfaya gömülüdür, çalışırken hiçbir şey indirilmez.' },
      { question: 'Bir sözü ekranda tutabilir miyim?', answer: 'Evet. Duraklat’a (veya boşluğa) basın; söz siz devam edene veya bir oka basana kadar kalır.' },
      { question: 'Ekranı açık tutar mı?', answer: 'Tam ekranda, destekleyen tarayıcılarda uyanık tutma kilidi ekranın kapanmasını önler.' },
    ],
  },
  'fake-windows-11-update': update('Windows 11', 'Microsoft', {
    answer: 'Sahte Windows 11 güncelleme ekranı, dönen göstergeyle ve yavaşça yükselen yüzdeyle koyu “Güncellemeler üzerinde çalışılıyor” ekranını gösterir. Bilgisayarı güncelleniyormuş gibi göstermek için şaka veya film dekoru olarak tam ekran çalıştırın, dönmek için Esc’ye basın.',
    features: ['Windows 11 tarzı gösterge ve metin', 'Ayarlanabilir hız ve duraklatma', 'Gizli imleçle tam ekran', 'Çıkmak için Esc'],
    benefits: ['Gerçekçi ve zararsız şaka', 'Ekran kayıtları için temiz dekor', 'Ücretsiz'],
  }, { question: 'Windows 10 sürümünden farkı ne?', answer: 'Yeni sistemlerdeki daha koyu arka planı ve daha sade düzeni kullanır.' }),
  'fake-mac-update': update('macOS', 'Apple', {
    answer: 'Sahte Mac güncelleme ekranı, ilerleme çubuğu ve kalan süreyle siyah macOS güncelleme ekranını gösterir. Tam ekranda Mac güncelleme yüklüyormuş gibi görünür; zararsız bir şaka veya video dekoru için. Çıkmak için Esc’ye basın.',
    features: ['macOS tarzı ilerleme çubuğu ve kalan süre', 'Ayarlanabilir güncelleme hızı', 'Gizli imleçle tam ekran', 'Çıkmak için Esc'],
    benefits: ['Mac kullanıcıları için zararsız şaka', 'Videolar için temiz dekor', 'Ücretsiz'],
  }, { question: 'Gerçek Apple logosunu mu kullanıyor?', answer: 'Hayır. Marka kötüye kullanımını önlemek için tanıdık düzeni koruyan nötr, genel bir işaret kullanır.' }),
  'fake-android-update': update('Android', 'Google', {
    answer: 'Sahte Android güncelleme ekranı, ilerleme çubuğuyla süren bir sistem güncellemesi gösterir. Güncelleniyormuş gibi görünmesi için telefonda veya tablette tam ekran açın, şakayı açıklamak için kapat düğmesine dokunun.',
    features: ['Android tarzı güncelleme ekranı ve ilerleme', 'Ayarlanabilir hız', 'Telefon ve tabletlerde tam ekran', 'Çıkmak için dokunun'],
    benefits: ['Her telefonda çalışan şaka', 'Uygulama kurmak gerekmez', 'Ücretsiz'],
  }, { question: 'Telefonlarda çalışır mı?', answer: 'Evet. Çoğu Android tarayıcısında tam ekran adres çubuğunu gizler. iPhone Safari’de ise tarayıcı penceresini doldurur.' }),
  'fake-windows-xp-update': update('Windows XP', 'Microsoft', {
    answer: 'Sahte Windows XP güncelleme ekranı, 2000’lerin başındaki klasik mavi “Güncellemeler yükleniyor” ekranını ilerleme çubuğuyla yeniden yaratır. Nostaljik şakalar, retro videolar ve o döneme ait film setleri için kullanın. Çıkmak için Esc’ye basın.',
    features: ['Klasik XP dönemi görünümü', 'İlerleme çubuğu ve durum metni', 'Gizli imleçle tam ekran', 'Çıkmak için Esc'],
    benefits: ['Anında nostalji', 'Döneme uygun dekor', 'Ücretsiz'],
  }, { question: 'Neden bu kadar retro görünüyor?', answer: 'Nostaljik ve tanıdık bir görünüm için 2000’lerin başındaki pencere stilini taklit eder.' }),
  'fake-chrome-os-update': update('ChromeOS', 'Google', {
    answer: 'Sahte ChromeOS güncelleme ekranı, Chromebook tarzında süren bir güncelleme gösterir. Sistemin güncelleniyormuş gibi görünmesi için bir Chromebook’ta veya herhangi bir bilgisayarda tam ekran çalıştırın; zararsız bir şaka veya demo dekoru olarak. Çıkmak için Esc’ye basın.',
    features: ['ChromeOS tarzı güncelleme ekranı', 'Ayarlanabilir ilerleme hızı', 'Gizli imleçle tam ekran', 'Çıkmak için Esc'],
    benefits: ['Okul ve iş Chromebook’larında çalışır', 'Zararsız şaka', 'Ücretsiz'],
  }, { question: 'Chromebook’ta çalışır mı?', answer: 'Evet. Tam etki için tam ekran tuşuna veya Tam ekran düğmesine basın.' }),
  'fake-ubuntu-update': update('Ubuntu', 'Canonical', {
    answer: 'Sahte Ubuntu güncelleme ekranı, ilerleme satırlarıyla bir terminalde kayan Linux paket güncellemelerini gösterir. Gerçek bir sistem yükseltmesi gibi görünür; geliştiriciler için eğlenceli bir şaka ve Linux videoları için inandırıcı bir dekordur.',
    features: ['Kayan apt tarzı güncelleme çıktısı', 'Ubuntu tarzı terminal renkleri', 'Tam ekran', 'Çıkmak için Esc'],
    benefits: ['Geliştiricilere uygun şaka', 'Gerçekçi terminal dekoru', 'Ücretsiz'],
  }, { question: 'Kayıt satırları gerçek komutlar mı?', answer: 'Hayır. Gösteri için önceden yazılmış metinlerdir ve bilgisayarınızda hiçbir şey çalıştırılmaz.' }),
  'fake-windows-xp-boot': {
    glance: {
      answer: 'Sahte Windows XP açılış ekranı, siyah üzerinde hareket eden mavi yükleme çubuğuyla klasik başlangıç ekranını oynatır. Videolar, filmler ve şakalar için hızlı bir retro dekor, 2001 işletim sisteminin hayranları için de nostaljik bir ekran koruyucudur.',
      features: ['Animasyonlu yükleme çubuklu klasik açılış ekranı', 'İstediğiniz kadar döngüde çalışır', 'Gizli imleçle tam ekran', 'Çıkmak için Esc'],
      benefits: ['Tek tıkla retro dekor', 'Nostaljik ekran koruyucu', 'Ücretsiz'],
    },
    steps: ['Açılış ekranı hemen başlar; mavi bloklar yükleme çubuğunda kayar.', 'Ekranı doldurup tarayıcıyı gizlemesi için F’ye veya Tam ekran’a basın.', 'Çalışır bırakın: yükleme çubuğu istediğiniz kadar tekrarlar.', 'Çıkmak için Esc’ye basın.'],
    useCases: [
      { title: 'Nostalji', description: '2000’lerin başındaki bir bilgisayarın açılışını hatırlayın.' },
      { title: 'Retro dekor', description: 'Fotoğraf veya film için eski bir bilgisayarı hazırlayın.' },
      { title: 'Zararsız şakalar', description: 'Modern bir bilgisayarı XP açıyormuş gibi gösterin.' },
      { title: 'Yayın girişleri', description: 'Yayınlarınız için retro bir “başlatılıyor” girişi.' },
    ],
    faqs: [
      { question: 'Bu gerçek mi, zararlı mı?', answer: 'Hayır. Normal bir tarayıcı sekmesinde zararsız bir görsel simülasyondur. Cihazınızı değiştirmez ve bir şey yüklemez.' },
      brandFaq('Microsoft'),
      { question: 'Açılış sesini çalıyor mu?', answer: 'Hayır. Kulaklarınıza ve telif hakkına saygı gereği açılış sesi yoktur.' },
      EXIT,
    ],
  },
  'fake-zoom-meeting': call('Zoom Video Communications', {
    answer: 'Sahte Zoom toplantı ekranı, katılımcı ızgarası, araç çubuğu ve kendi kamera önizlemenizle Zoom tarzı bir görüntülü görüşme gösterir. Şakalar, film dekorları, ekran görüntüleri ve kamerada pratik için. Kamera görüntünüz cihazınızda kalır, asla kaydedilmez veya yüklenmez.',
    features: ['İsimli ve sessiz simgeli katılımcı ızgarası', 'Canlı kameranız, tam ekranda da', 'Toplantı zamanlayıcısı ve araç çubuğu', 'Düzenlenebilir toplantı başlığı'],
    benefits: ['Videolar için gerçekçi görüşme dekoru', 'Kamerada sunum pratiği yapın', 'Gizli: hiçbir şey cihazınızdan çıkmaz'],
  }, { question: 'Teams toplantı ekranından farkı ne?', answer: 'Bu ekran Zoom düzenini izler: kontroller altta olan bir kutucuk galerisi. Teams ekranı kontrolleri ve kırmızı Ayrıl düğmesini zamanlayıcılı bir üst çubuğa koyar.' }),
  'fake-teams-meeting': call('Microsoft', {
    answer: 'Sahte Microsoft Teams toplantı ekranı, katılımcı kutucukları, toplantı çubuğu ve kamera önizlemenizle Teams tarzı bir görüşme gösterir. Şakalar, dekorlar veya bir sunumu prova etmek için kullanın. Önizleme tarayıcıda kalır ve asla kaydedilmez.',
    features: ['Teams tarzı kutucuklar ve kontroller', 'Tam ekranda canlı kamera', 'Toplantı zamanlayıcısı', 'Düzenlenebilir toplantı başlığı'],
    benefits: ['İnandırıcı ofis dekoru', 'Görüşmeleri rahatça prova edin', 'Gizli ve ücretsiz'],
  }, { question: 'Toplantının adını değiştirebilir miyim?', answer: 'Evet. Ekranın altındaki başlık kutusuna yeni bir ad yazın. Hemen üst çubukta görünür ve hiçbir şey kaydedilmez veya gönderilmez.' }),
  'fake-google-meet': call('Google', {
    answer: 'Sahte Google Meet ekranı, katılımcı kutucukları, alttaki kontrol çubuğu ve kendi kamera önizlemenizle Meet tarzı bir görüntülü görüşme gösterir. Şakalar, videolar ve sunum pratiği için uygundur; kamera görüntünüz cihazınızdan hiç çıkmaz.',
    features: ['Meet tarzı kutucuklar ve kontrol çubuğu', 'Tam ekranda canlı kamera', 'Zamanlayıcı ve düzenlenebilir toplantı başlığı', 'Google girişi gerekmez'],
    benefits: ['Filmler ve eğitimler için gerçekçi dekor', 'Kamerada pratik yapın', 'Gizli ve ücretsiz'],
  }, { question: 'Toplantı kodu gerçek mi?', answer: 'Hayır. “abc-defg-hij” örnek bir metindir. Kimse katılamaz ve sayfa asla Google Meet’e veya başka bir hizmete bağlanmaz.' }),
  'fake-slack-huddle': call('Slack Technologies', {
    answer: 'Sahte Slack huddle ekranı, katılımcılar ve kontrollerle Slack tarzı bir sesli ve görüntülü huddle gösterir. Şaka, sunumlar için ekran görüntüsü dekoru veya film seti arka planı olarak kullanın; gerçek bir Slack çalışma alanına bağlı değildir.',
    features: ['Huddle tarzı katılımcı görünümü', 'Konuşma göstergeleri ve kontroller', 'Tam ekran', 'Düzenlenebilir başlık'],
    benefits: ['Uzaktan çalışma videoları için hızlı dekor', 'Zararsız şaka', 'Ücretsiz'],
  }),
  'fake-radar-screen': {
    glance: {
      answer: 'Sahte radar ekranı, plan konum göstergesi denen klasik dairesel radar ekranını; dönen tarama çizgisi, sönen hedefler ve menzil halkalarıyla gösterir. Okumalar ve isteğe bağlı ping sesi, onu filmler, kaçış odaları, oyunlar ve bilim kurgu şakaları için inandırıcı bir dekor yapar.',
      features: ['Art ışımalı dönen tarama', 'Hareketli hedefler ve menzil halkaları', 'Kerteriz ve menzil okumaları', 'İsteğe bağlı sonar tarzı ping'],
      benefits: ['Anında bilim kurgu veya askeri dekor', 'Kaçış odaları ve sahne dekorları için ideal', 'Ücretsiz ve çevrimdışı kullanılabilir'],
    },
    steps: ['Radar hemen taramaya başlar.', 'Bir renk (yeşil, kehribar veya mavi), tarama hızı ve hedef sayısı seçin.', 'İsterseniz pingi açın; yalnızca açtıktan sonra çalar.', 'Ekranı doldurmak için F’ye veya Tam ekran’a basın, çıkmak için Esc’ye basın.'],
    useCases: [
      { title: 'Film ve tiyatro dekoru', description: 'Gerçek ekipman olmadan inandırıcı bir kontrol odası ekranı.' },
      { title: 'Kaçış odaları ve oyunlar', description: 'Denizaltı, uzay veya casusluk temalarının havasını yaratın.' },
      { title: 'Partiler ve yayınlar', description: 'TV’de veya ikinci monitörde hareketli bir bilim kurgu arka planı.' },
      { title: 'Ekran koruyucu', description: 'Boştaki bir ekran için sakin, döngüsel bir animasyon.' },
    ],
    faqs: [
      { question: 'Gerçek radar veya uçak verisi gösteriyor mu?', answer: 'Hayır. Her hedef tarayıcınızda rastgele üretilir. Yalnızca eğlence ve dekor içindir.' },
      { question: 'Noktalar neden sönüyor?', answer: 'Klasik radar ekranları, ışın geçtikten sonra parlamaya devam edip sonra sönen fosfor kullanırdı. Sönme efekti bu art ışımayı taklit eder.' },
      { question: 'Nasıl çıkarım?', answer: 'Esc’ye basın ya da kapat düğmesini görmek için fareyi oynatın veya dokunun. Sekmeyi kapatmak da işe yarar.' },
    ],
  },
}
