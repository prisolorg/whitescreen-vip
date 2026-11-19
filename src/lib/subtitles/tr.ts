import type { LocalizedSubtitles } from './types'

/** Turkish subtitles: one actionable line under each H1 (see src/lib/subtitles.ts for the English set). Siz-form, like the Turkish UI. */
export const tr: LocalizedSubtitles = {
  tools: {
    // Renkli ekranlar (ana sayfa da beyaz ekrandır)
    'white-screen': 'Işık, temizlik veya ölü piksel kontrolü için ekranınızı parlak beyaz yapın.',
    'black-screen': 'Sıkışmış pikselleri ve ışık sızmasını bulmak ya da ekranı karartmak için saf siyaha geçin.',
    'red-screen': 'Kırmızı alt pikselleri kontrol etmek veya ortam ışığı için ekranı kırmızıyla doldurun.',
    'green-screen': 'Parlak yeşil ekranı chroma key fonu veya piksel kontrolü olarak kullanın.',
    'blue-screen': 'Chroma key veya mavi alt piksel kontrolü için ekranı maviyle doldurun.',
    'yellow-screen': 'Sıcak ışık veya kırmızı-yeşil piksel kontrolü için ekranınızı sarı yapın.',
    'orange-screen': 'Odanızı sıcak turuncu ışıkla doldurun ya da fotoğraf fonu olarak kullanın.',
    'pink-screen': 'Selfie, görüşme veya ortam ışığı için yüzünüzü yumuşak pembeyle aydınlatın.',
    'purple-screen': 'Oda atmosferi veya yayın fonu için mor bir parıltı oluşturun.',
    'cyan-screen': 'Yeşil ve mavi alt pikselleri aynı anda kontrol etmek için camgöbeği gösterin.',
    'magenta-screen': 'Kırmızı ve mavi alt pikselleri kontrol etmek ve renk tonlarını görmek için macenta gösterin.',
    'gray-screen': 'Bulutlanma, şeritlenme ve kirli ekran etkisini görmek için nötr gri gösterin.',

    // Ekran testleri
    'dead-pixel-test': 'Ölü, sıkışmış veya sıcak pikselleri bulmak için 9 renk arasında geçiş yapın.',
    'screen-uniformity-test': 'Bulutlanma, vinyet ve ışık sızması için eşit gri alanları kontrol edin.',
    'monitor-test': 'Renk, gama ve keskinliği kontrol etmek için 7 test deseni arasında geçiş yapın.',
    'oled-gray-test': 'OLED şeritlenmesini ve murayı görmek için siyaha yakın gri tonlarda gezinin.',
    'oled-burn-in-test': 'OLED’de yanma ve görüntü tutulmasını görmek için düz renkleri döndürün.',
    'screen-burn-in-test': 'Hayalet görüntüleri kontrol edin, ardından tutulmayı temizlemek için düzelticiyi çalıştırın.',
    'touch-screen-test': 'Ölü bölgeleri bulmak ve çoklu dokunma noktalarını saymak için ızgarayı kaydırın.',
    'screen-refresh-rate-test': 'Sayfa açılır açılmaz yenileme hızınızı Hz olarak görün.',
    'monitor-ghosting-test': 'Gölgelenmeyi ve overdrive’ı değerlendirmek için izler görünene kadar hızı artırın.',
    'frame-rate-test': '15, 24, 30 ve 60 FPS’i ekranınızın en yüksek hızıyla yan yana karşılaştırın.',
    'screen-color-test': 'Renk tonunu ve şeritlenmeyi kontrol etmek için renk çubukları ve RGB geçişlerinde gezinin.',
    'screen-resolution-test': 'Ekran çözünürlüğünüzü ve piksel oranınızı tıklamadan anında görün.',

    // Efektler ve ses
    'no-signal-screen': 'Renk çubukları, seken kutu veya mavi seçin, ardından TV’de tam ekrana geçin.',
    'white-noise-generator': 'Sabit beyaz gürültüyü başlatın ve gece için uyku zamanlayıcısı ayarlayın.',
    'brown-noise-generator': 'Odaklanmak veya uyumak için derin kahverengi gürültüyü uyku zamanlayıcısıyla başlatın.',
    'pink-noise-generator': 'Yağmur gibi pembe gürültüyü başlatın, filtre ve ses düzeyiyle şekillendirin.',
    'broken-screen': 'Camı kırmak için herhangi bir yere dokunun, ardından cihazı uzatın.',
    'hacker-typer': 'Herhangi bir tuşa basın ve film tarzı hacker kodunun belirişini izleyin.',
    'hacked-screen': 'Kırmızı veya yeşil seçin, tam ekrana geçin ve bir arkadaşınızın bulmasına bırakın.',
    'visual-noise': 'Ekranı mono, renkli veya tonlu hareketli piksel greniyle doldurun.',
    'color-cycle': 'Ekranınızın tüm renkler arasında süzülmesine izin verin ya da renkleri kendiniz değiştirin.',
    'gradient-screen': 'Hareketli tam ekran bir renk geçişi için renkleri ve açıyı seçin.',

    // Aydınlatma
    'zoom-lighting': 'Bir sonraki görüntülü görüşmeniz için ekranınızı yumuşak bir ana ışığa dönüştürün.',
    'ring-light': 'Yüzünüzü parlayan bir ekran halkasıyla aydınlatın; boyutu ve sıcaklığı ayarlayın.',

    // Ekran koruyucular
    'matrix-screensaver': 'Düşen dijital yağmuru başlatın; hızını, rengini ve karakterlerini ayarlayın.',
    'flip-clock-screensaver': 'Boştaki her ekranı büyük, canlı bir yaprak saate dönüştürün.',
    'dvd-screensaver': 'DVD logosunun sekişini izleyin ve kusursuz köşe isabetini bekleyin.',
    'motivational-quote-screensaver': 'Boştaki bir ekranda büyük yazıyla dönen motivasyon sözleri gösterin.',

    // Zamanlayıcılar ve araçlar
    'countdown-timer': 'Hazır bir süre seçin veya kendi sürenizi ayarlayın, ardından Başlat’a basın.',
    'pomodoro-timer': '25 dakikalık odak için Başlat’a basın, ardından 5 dakika mola verin.',
    stopwatch: 'Süre ölçmeye başlamak için boşluk tuşuna, tur kaydetmek için L tuşuna basın.',

    // Sahte ekranlar
    'fake-windows-10-update': 'Bir arkadaşınızı kandırmak için sahte Windows 10 güncellemesiyle tam ekrana geçin.',
    'fake-windows-11-update': 'Şaka olarak koyu Windows 11 güncelleme ekranını tam ekranda gösterin.',
    'fake-blue-screen-of-death': 'Sahte bir çökme ekranıyla tam ekrana geçin, sonra şakayı açıklayın.',
    'fake-mac-update': 'İnce ilerleme çubuklu sahte bir macOS güncellemesini tam ekranda gösterin.',
    'fake-android-update': 'Sahte bir Android sistem güncellemesi göstermek için telefonda açın.',
    'fake-windows-xp-update': 'Sahte bir Windows XP kurulum ekranıyla 2000’leri geri getirin.',
    'fake-windows-xp-boot': 'Klasik Windows XP açılış ekranını tam ekranda oynatın.',
    'fake-chrome-os-update': 'Değişen durum adımlarıyla sahte bir Chromebook güncelleme ekranı gösterin.',
    'fake-ubuntu-update': 'Bir terminal yükseltmesinde sahte Ubuntu paket kayıtlarının akışını izleyin.',
    'fake-zoom-meeting': 'Şaka veya video dekoru için sahte, Zoom tarzı bir görüşme ekranı kurun.',
    'fake-teams-meeting': 'Katılımcı kutucuklu, Teams tarzı bir toplantı ekranı gösterin.',
    'fake-google-meet': 'Kutucuklu ve konuşan kişi çerçeveli, Meet tarzı bir görüşme gösterin.',
    'fake-slack-huddle': 'Konuşma halkaları ve canlı sayaçla Slack tarzı bir huddle gösterin.',
    'fake-radar-screen': 'Dekor veya fon için sinyalli, bilim kurgu tarzı bir radar taraması çalıştırın.',
  },
  backgrounds: {
    'white-background': 'Saf beyaz bir arka planı 4K, telefon veya özel boyutta indirin.',
    'black-background': 'Gerçek siyah bir arka planı her boyutta PNG veya CSS olarak alın.',
    'orange-background': 'Telefonunuz veya masaüstünüz için sıcak turuncu bir arka plan indirin.',
    'gradient-background': 'Bu yumuşak renk geçişini PNG olarak indirin veya CSS olarak kopyalayın.',
    'neon-background': 'Bu neon parıltıyı 4K duvar kâğıdı veya telefon arka planı olarak kaydedin.',
    'red-background': 'Her boyutta canlı kırmızı bir arka plan indirin veya CSS’i kopyalayın.',
    'yellow-background': 'Sunumlar, telefonlar veya masaüstü için parlak sarı bir arka plan indirin.',
    'blue-background': 'Temiz mavi bir arka planı 4K veya telefon boyutunda PNG olarak indirin.',
    'green-screen-background': 'Bu yeşil ekranı chroma key olarak tam ekranda gösterin veya indirin.',
    'virtual-office': 'Bir sonraki görüntülü görüşmeniz için sanal ofis arka planı indirin.',
    'graph-paper': 'Kareli kâğıt ızgarasını PNG olarak indirin veya CSS olarak kopyalayın.',
    'pink-background': 'Telefonunuz, masaüstünüz veya hikâyeleriniz için pembe bir arka plan indirin.',
    'light-pink-background': 'İhtiyacınız olan her boyutta yumuşak açık pembe bir arka plan indirin.',
    'green-background': 'Ferah yeşil bir arka planı PNG olarak indirin veya CSS’i kopyalayın.',
    'purple-background': 'Telefonunuz veya masaüstünüz için zengin mor bir arka plan indirin.',
    'dark-background': 'Göz yormayan koyu bir arka planı her boyutta indirin.',
    'gold-background': 'Davetiyeler, sunumlar veya telefonlar için altın geçişli bir arka plan indirin.',
    'aesthetic-background': 'Telefonunuz veya masaüstünüz için yumuşak, estetik bir arka plan indirin.',
    'beige-background': 'Sıcak bej bir arka planı PNG olarak indirin veya CSS’i kopyalayın.',
    'pastel-background': 'Telefonlar, sunumlar veya paylaşımlar için pastel geçişli bir arka plan indirin.',
  },
}
