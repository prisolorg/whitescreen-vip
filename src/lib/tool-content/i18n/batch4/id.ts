import type { LocalizedToolContent, ToolTranslations } from '../types'
import type { ToolFaq } from '../../types'

const EXIT: ToolFaq = { question: 'Bagaimana keluar dari layar palsu?', answer: 'Tekan Esc, atau gerakkan mouse atau ketuk layar untuk memunculkan tombol tutup. Menutup tab juga bisa.' }
const brandFaq = (brand: string): ToolFaq => ({ question: `Apakah ini terkait ${brand}?`, answer: `Tidak. Ini tiruan independen untuk hiburan, tidak berafiliasi, didukung, atau disponsori oleh ${brand}. Nama produk milik pemiliknya masing-masing.` })

function update(name: string, brand: string, glance: LocalizedToolContent['glance'], extra: ToolFaq): LocalizedToolContent {
  return {
    glance,
    steps: [
      'Atur dengan slider kecepatan seberapa cepat persentase naik.',
      'Klik Layar penuh atau tekan F agar simulasi memenuhi layar dan menyembunyikan browser.',
      'Tinggalkan dan biarkan progres berjalan. Tekan Jeda agar update tampak macet.',
      'Tekan Esc untuk keluar dan mengungkap leluconnya.',
    ],
    useCases: [
      { title: 'Prank kantor yang aman', description: 'Buat rekan kerja mengira perangkatnya sedang update, lalu beri tahu yang sebenarnya.' },
      { title: 'Istirahat sejenak', description: 'Tampak sibuk saat meninggalkan meja.' },
      { title: 'Properti film dan video', description: `Tampilkan update ${name} yang meyakinkan di lokasi syuting.` },
      { title: 'Nostalgia', description: 'Lihat lagi layar sistem klasik untuk bersenang-senang.' },
    ],
    faqs: [
      { question: 'Apakah ini update sungguhan atau berbahaya?', answer: 'Bukan. Ini simulasi visual yang aman di tab browser biasa. Tidak mengubah perangkat, tidak menginstal apa pun, dan tidak meminta data. Tekan Esc untuk keluar kapan saja.' },
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
      'Ubah judul rapat yang tampil di bagian atas.',
      'Jika mau, nyalakan pratinjau kamera: tetap di perangkat Anda dan tidak pernah direkam atau dikirim.',
      'Tekan F atau Layar penuh untuk panggilan layar penuh yang meyakinkan.',
      'Tekan Esc untuk keluar kapan saja.',
    ],
    useCases: [
      { title: 'Properti video', description: 'Rekam adegan rapat tanpa panggilan sungguhan.' },
      { title: 'Mockup antarmuka', description: 'Gunakan tata letak panggilan di presentasi atau tutorial.' },
      { title: 'Lelucon aman', description: 'Pura-pura “sedang rapat” untuk bercanda.' },
      { title: 'Latihan', description: 'Latih tampilan Anda di kamera sebelum panggilan sungguhan.' },
    ],
    faqs: [
      { question: 'Apakah ini panggilan sungguhan atau berbahaya?', answer: 'Bukan. Ini simulasi visual yang aman di tab browser biasa. Tidak terhubung ke layanan apa pun, tidak menginstal apa pun, dan tidak meminta data.' },
      brandFaq(brand),
      { question: 'Apakah memakai kamera atau mikrofon saya?', answer: 'Hanya jika Anda menyalakan pratinjau kamera. Video tetap di perangkat Anda dan tidak pernah direkam atau diunggah. Mikrofon tidak pernah dipakai.' },
      EXIT,
      ...(extra ? [extra] : []),
    ],
  }
}

export const id: ToolTranslations = {
  'oled-gray-test': {
    glance: {
      answer: 'Tes abu-abu OLED menampilkan abu-abu sangat gelap mendekati hitam, area tempat panel OLED paling sering bermasalah. Tes ini menampakkan banding dekat hitam, mura (bercak), garis vertikal, dan bayangan tidak rata yang tersembunyi oleh konten terang di TV, monitor, dan ponsel OLED.',
      features: ['Abu-abu hampir hitam dari 1% sampai 20%, plus gradasi', 'Bidang layar penuh tanpa lapisan', 'Pindah manual untuk membandingkan dengan tenang', 'Bisa di ponsel, TV, dan monitor OLED'],
      benefits: ['Cek OLED baru dalam masa pengembalian', 'Temukan banding sebelum kalibrasi', 'Gratis dan cepat'],
    },
    steps: ['Matikan lampu dan atur layar ke kecerahan biasa.', 'Tekan F untuk layar penuh dan mulai dari tingkat 5%.', 'Turun ke 1–3% untuk melihat di mana panel mulai menelan hitam atau berbercak.', 'Coba gradasi abu-abu untuk mencari loncatan antartingkat yang terlihat.'],
    useCases: [
      { title: 'Keseragaman dekat hitam', description: 'Abu-abu sangat gelap menampakkan bercak dan garis vertikal di panel OLED.' },
      { title: 'Hitam tertelan', description: 'Lihat apakah tingkat paling gelap masih terlihat atau menyatu dengan hitam.' },
      { title: 'Kedip di kecerahan rendah', description: 'Beberapa panel berkedip pada abu-abu dan kecerahan sangat rendah.' },
      { title: 'Membandingkan perangkat', description: 'Bandingkan dua ponsel atau TV berdampingan dengan pengaturan sama.' },
    ],
    faqs: [
      { question: 'Kenapa abu-abu hampir hitam tampak berbercak di OLED?', answer: 'Setiap piksel OLED dikendalikan sendiri, dan perbedaan kecil terlihat saat cahaya sangat rendah. Sedikit ketidakrataan itu normal di semua OLED.' },
      { question: 'Apakah tes ini berguna untuk LCD?', answer: 'Ya, tetapi di LCD masalah dekat hitam biasanya tampak sebagai kebocoran cahaya atau clouding. Untuk itu gunakan tes keseragaman.' },
      { question: 'Kenapa saya tidak bisa melihat tingkat 1%?', answer: 'Banyak layar dan mode gambar menelan nuansa paling gelap. Naikkan sedikit kecerahan atau coba mode gambar lain.' },
    ],
  },
  'oled-burn-in-test': {
    glance: {
      answer: 'Tes burn-in OLED menampilkan warna solid layar penuh agar logo pudar, bilah status, tombol navigasi, atau HUD game akibat keausan piksel yang tidak rata terlihat. Burn-in bersifat permanen; retensi gambar bersifat sementara dan hilang. Keduanya paling mudah terlihat pada abu-abu, merah, dan biru.',
      features: ['Bidang abu-abu, merah, hijau, biru, dan putih', 'Tombol panah untuk ganti warna cepat', 'Tips membedakan burn-in dan retensi', 'Untuk ponsel, TV, dan monitor OLED'],
      benefits: ['Cek ponsel atau TV OLED bekas sebelum membeli', 'Tangkap retensi sejak dini', 'Tanpa aplikasi atau unduhan'],
    },
    steps: ['Tekan F untuk layar penuh dan mulai dengan abu-abu sedang, lalu coba merah, hijau, biru, dan putih.', 'Cari bentuk samar seperti taskbar, logo, keyboard, atau logo saluran TV.', 'Gunakan ganti otomatis jika mencari retensi sementara.', 'Jika bentuk hilang dalam beberapa menit, itu retensi sementara, bukan burn-in.'],
    useCases: [
      { title: 'Membeli OLED bekas', description: 'Cek ponsel atau TV bekas dari bayangan hantu sebelum membeli.' },
      { title: 'HUD game', description: 'Cari bar nyawa atau minimap setelah bermain lama.' },
      { title: 'Retensi atau burn-in', description: 'Membantu membedakan retensi sementara dari burn-in permanen.' },
      { title: 'Klaim garansi', description: 'Foto burn-in pada warna solid untuk layanan purnajual.' },
    ],
    faqs: [
      { question: 'Apakah alat ini bisa memperbaiki burn-in?', answer: 'Tidak. Burn-in permanen adalah keausan piksel yang tidak rata dan tidak bisa dibalik oleh situs web. Gunakan fitur penyegaran piksel bawaan layar dan ikuti petunjuk produsen.' },
      { question: 'Apa beda retensi gambar dan burn-in?', answer: 'Retensi bersifat sementara dan hilang setelah menampilkan konten lain. Burn-in permanen dan tetap terlihat pada warna solid.' },
      { question: 'Warna apa yang paling jelas menampakkan burn-in?', answer: 'Abu-abu sedang dan merah biasanya paling jelas, tetapi cek semua warna karena keausan berbeda per subpiksel.' },
    ],
  },
  'screen-burn-in-test': {
    glance: {
      answer: 'Tes burn-in layar memungkinkan Anda memeriksa layar apa pun dari bayangan hantu, lalu menjalankan perbaikan yang mengalirkan warna dan noise di layar. Retensi sementara sering hilang setelah 10–30 menit perbaikan; burn-in permanen akibat piksel aus tidak bisa diperbaiki dengan software.',
      features: ['Mode cek dengan warna solid dan tombol panah', 'Mode perbaikan: sapuan, siklus warna, dan noise', 'Timer yang menghentikan perbaikan otomatis', 'Untuk layar OLED, plasma, dan LCD'],
      benefits: ['Hapus retensi sementara tanpa aplikasi', 'Ketahui apakah itu retensi atau burn-in', 'Gratis dan aman untuk layar'],
    },
    steps: ['Naikkan kecerahan dan jadikan layar penuh di ruangan redup.', 'Di mode cek, gunakan panah atau tombol untuk menelusuri setiap warna. Abu-abu 50% paling jelas menampakkan burn-in.', 'Jika terlihat bentuk, pindah ke mode perbaikan, pilih sapuan putih (atau pola berkedip jika tidak mengganggu) dan jalankan 10–30 menit.', 'Cek lagi setelahnya. Bentuk yang tetap ada setelah beberapa kali biasanya burn-in permanen.'],
    useCases: [
      { title: 'Membeli layar bekas', description: 'Temukan logo atau taskbar yang terbakar sebelum membayar.' },
      { title: 'Setelah pemakaian statis', description: 'Cek monitor yang lama menampilkan dasbor, ticker, atau game.' },
      { title: 'Menghapus retensi', description: 'Jalankan perbaikan saat bayangan hantu tertinggal.' },
      { title: 'Klaim garansi', description: 'Foto burn-in pada bidang abu-abu untuk layanan purnajual.' },
    ],
    faqs: [
      { question: 'Apa beda retensi gambar dan burn-in?', answer: 'Retensi bersifat sementara dan hilang setelah beberapa menit atau jam konten beragam. Burn-in adalah keausan piksel permanen.' },
      { question: 'Apakah perbaikan ini bisa memulihkan burn-in?', answer: 'Membantu retensi sementara. Burn-in permanen pada OLED adalah keausan tidak rata yang tidak bisa dibatalkan pola apa pun; penyegaran piksel bawaan TV atau monitor adalah pilihan terbaik.' },
      { question: 'Warna apa yang paling jelas menampakkan burn-in?', answer: 'Abu-abu sedang atau gelap biasanya paling jelas, diikuti merah, hijau, dan biru.' },
    ],
  },
  'monitor-ghosting-test': {
    glance: {
      answer: 'Tes ghosting monitor menggerakkan objek di layar agar Anda bisa melihat jejak yang ditinggalkan respons piksel yang lambat. Salinan samar di belakang objek adalah ghosting; halo terang atau terbalik adalah overshoot karena overdrive berlebihan. Gunakan untuk memilih pengaturan overdrive terbaik.',
      features: ['Tiga jalur bergerak dengan kecepatan yang bisa diatur', 'Latar terang dan gelap untuk transisi berbeda', 'Grid acuan untuk menilai panjang jejak', 'Mengikuti refresh rate asli layar Anda'],
      benefits: ['Pilih mode overdrive yang tepat untuk gaming', 'Bandingkan monitor sebelum membeli atau mengembalikan', 'Alternatif gratis untuk tes berbasis kamera'],
    },
    steps: ['Atur monitor ke refresh rate tertinggi dan jadikan layar penuh.', 'Ikuti target dengan mata. Cari jejak di belakangnya dan halo di tepinya.', 'Ubah kecepatan, lalu coba setiap pengaturan overdrive atau waktu respons di menu monitor.', 'Jeda untuk melihat bingkai diam; target sendiri harus tajam.'],
    useCases: [
      { title: 'Menyetel overdrive', description: 'Pilih pengaturan dengan jejak terpendek tanpa ghosting terbalik.' },
      { title: 'Jejak hitam pada VA', description: 'Jalur gelap menampakkan jejak ungu kehitaman yang umum di panel VA.' },
      { title: 'Membandingkan monitor', description: 'Gunakan kecepatan sama di dua layar berdampingan.' },
      { title: 'Cek pembelian baru', description: 'Pastikan gerakan terlihat sesuai iklan.' },
    ],
    faqs: [
      { question: 'Apa itu ghosting monitor?', answer: 'Jejak samar di belakang objek bergerak, karena piksel tidak berganti warna cukup cepat sebelum bingkai berikutnya.' },
      { question: 'Apa itu ghosting terbalik?', answer: 'Halo terang atau berwarna di sekitar objek bergerak, karena overdrive mendorong piksel melewati targetnya. Turunkan pengaturan overdrive untuk mengatasinya.' },
      { question: 'Kenapa target tampak buram meski tanpa ghosting?', answer: 'Itu buram sample-and-hold: mata mengikuti objek sementara tiap bingkai diam. Refresh rate lebih tinggi atau mode backlight strobing menguranginya.' },
    ],
  },
  'frame-rate-test': {
    glance: {
      answer: 'Tes frame rate menampilkan gerakan yang sama pada frame per detik berbeda secara berdampingan: 15, 24, 30, 60, dan maksimum layar Anda. Perbedaan antara gerakan patah-patah dan mulus jadi terlihat, sekaligus menjelaskan kenapa film 24 FPS dan game 60 FPS terasa begitu berbeda.',
      features: ['Lima jalur di 15, 24, 30, 60 FPS dan maksimum', 'Kecepatan bisa diatur untuk mempertegas atau melembutkan gerak', 'Menampilkan refresh rate maksimum terukur', 'Jeda dan layar penuh'],
      benefits: ['Lihat manfaat monitor refresh tinggi', 'Jelaskan FPS ke murid atau penonton', 'Berjalan di browser modern apa pun'],
    },
    steps: ['Amati setiap jalur; semuanya bergerak dengan kecepatan sama.', 'Naikkan kecepatan agar patah-patah lebih terlihat.', 'Bandingkan jalur 60 FPS dengan jalur maksimum di layar refresh tinggi.', 'Tekan F atau ketuk dua kali untuk layar penuh, dan Esc untuk keluar.'],
    useCases: [
      { title: 'Pengaturan game', description: 'Putuskan apakah FPS lebih tinggi sepadan dengan grafis lebih rendah.' },
      { title: 'Produksi video', description: 'Pahami kenapa film memakai 24 FPS dan olahraga 50 atau 60.' },
      { title: 'Menunjukkan ke teman', description: 'Akhiri debat “mata tidak bisa melihat lebih dari 30 FPS”.' },
      { title: 'Membeli layar', description: 'Lihat manfaat layar 120 atau 144 Hz.' },
    ],
    faqs: [
      { question: 'Kenapa jalur maksimum tampak seperti 60 FPS?', answer: 'Layar Anda menampilkan paling banyak satu bingkai per refresh. Di layar 60 Hz, jalur 60 FPS dan maksimum terlihat sama.' },
      { question: 'Kenapa 24 FPS patah-patah di sini tapi mulus di film?', answer: 'Kamera film merekam motion blur di setiap bingkai yang menghaluskan gerakan. Tes ini memakai bingkai tajam, jadi setiap langkah terlihat.' },
      { question: 'Berapa frame rate yang saya butuhkan untuk game?', answer: 'Minimal 60 FPS terasa mulus untuk kebanyakan game; pemain kompetitif menargetkan frame rate setara monitor 144 Hz atau lebih.' },
    ],
  },
  'screen-color-test': {
    glance: {
      answer: 'Tes warna layar menampilkan bilah warna, gradasi RGB, dan pola saturasi agar Anda bisa menilai seberapa akurat layar menampilkan warna. Cari banding pada gradasi, highlight terpotong, nuansa yang hilang, dan rona warna untuk memutuskan perlu tidaknya mengubah pengaturan gambar.',
      features: ['Bilah warna gaya SMPTE', 'Gradasi merah, hijau, biru, dan abu-abu', 'Pola saturasi dan warna kulit', 'Layar penuh dengan kontrol keyboard'],
      benefits: ['Temukan banding dan rona dengan cepat', 'Bandingkan mode gambar', 'Gratis, tanpa alat kalibrasi'],
    },
    steps: ['Gunakan mode gambar bawaan atau yang sudah dikalibrasi.', 'Tekan F untuk layar penuh dan ganti pola dengan tombol atau panah.', 'Pada gradasi, cari transisi halus tanpa tangga atau potongan di ujung terang.', 'Bandingkan pola yang sama di layar lain.'],
    useCases: [
      { title: 'Mendeteksi rona', description: 'Abu-abu dan putih harus tampak netral, tanpa rona merah muda atau hijau.' },
      { title: 'Cek potongan highlight', description: 'Lihat apakah tingkat paling terang tiap kanal tetap bisa dibedakan.' },
      { title: 'Cek banding', description: 'Gradasi menampakkan tangga dari panel 6-bit atau pemrosesan berat.' },
      { title: 'Perbandingan berdampingan', description: 'Bandingkan laptop dan monitor eksternal.' },
    ],
    faqs: [
      { question: 'Bisakah saya mengalibrasi monitor dengan ini?', answer: 'Anda bisa menyetel kasar dengan mata, tetapi kalibrasi sejati butuh kolorimeter dan software kalibrasi.' },
      { question: 'Kenapa gradasi saya menampakkan tangga?', answer: 'Biasanya panel atau pemrosesannya punya kedalaman warna terbatas. Mode malam dan beberapa preset gambar juga bisa menyebabkan banding.' },
      { question: 'Kenapa warna berbeda di ponsel dan monitor?', answer: 'Layar berbeda dalam gamut, titik putih, dan pemrosesan. Sebagian juga otomatis menyesuaikan warna dengan cahaya sekitar.' },
    ],
  },
  'no-signal-screen': {
    glance: {
      answer: 'Layar “Tidak ada sinyal” menampilkan pesan TV atau monitor yang tidak menerima input dari HDMI atau kabel. Dalam layar penuh dengan bilah warna dan kotak pesan yang bergeser, layar ini jadi prank yang meyakinkan, properti film, atau tampilan sementara untuk layar cadangan.',
      features: ['Bilah warna klasik atau latar biru', 'Kotak “Tidak ada sinyal” yang bergeser seperti di TV sungguhan', 'Nada uji 1 kHz opsional dan nama input yang bisa diubah', 'Layar penuh dengan kursor tersembunyi'],
      benefits: ['Prank mudah dan aman', 'Properti untuk film, escape room, dan lokasi syuting', 'Bisa di Smart TV lewat browser'],
    },
    steps: ['Pilih gaya: bilah warna klasik, layar hitam dengan pesan memantul, atau layar input biru.', 'Ubah pesan dan nama input, misalnya “HDMI 1”.', 'Nyalakan nada uji 1 kHz bila perlu: awalnya senyap dan baru berbunyi setelah diklik.', 'Tekan F atau Layar penuh untuk memenuhi layar, dan Esc untuk keluar.'],
    useCases: [
      { title: 'Properti film dan foto', description: 'Dandani lokasi syuting dengan TV yang tampak dicabut.' },
      { title: 'Jeda siaran', description: 'Pakai kartu “tidak ada sinyal” saat istirahat siaran.' },
      { title: 'Estetika retro', description: 'Tambahkan nuansa siaran jadul pada video atau presentasi.' },
      { title: 'Prank aman', description: 'Buat layar tampak terputus, lalu ungkap setelahnya.' },
    ],
    faqs: [
      { question: 'Apa nama bilah warna itu?', answer: 'Itu bilah warna SMPTE, pola uji siaran untuk mengalibrasi warna dan kecerahan TV dan peralatan video.' },
      { question: 'Apakah monitor saya benar-benar kehilangan sinyal?', answer: 'Tidak. Ini halaman web yang hanya tampak seperti layar tanpa sinyal. Layar Anda tetap berfungsi normal.' },
      { question: 'Bagaimana cara keluar?', answer: 'Tekan Esc, atau gerakkan mouse lalu klik tombol tutup di sudut.' },
    ],
  },
  'hacker-typer': {
    glance: {
      answer: 'Hacker Typer mengubah ketikan acak menjadi kode realistis di layar, sehingga siapa pun tampak seperti hacker film. Tekan tombol apa saja dan baris kode yang tampak asli muncul; picu pesan “Access Granted” atau “Access Denied” untuk melengkapi adegan prank, video, atau sekadar bercanda.',
      features: ['Kode asli muncul saat Anda mengetik asal', 'Pesan akses diterima dan ditolak', 'Kecepatan ketik dan warna teks bisa diatur', 'Tampilan terminal layar penuh'],
      benefits: ['Adegan hacker instan untuk video dan prank', 'Cara seru mengenalkan kode ke anak', 'Gratis, tanpa instalasi'],
    },
    steps: ['Klik terminal lalu ketik apa saja, atau ketuk layar di ponsel.', 'Ubah kecepatan untuk mengatur berapa karakter yang muncul per tombol.', 'Tekan Alt tiga kali untuk “ACCESS GRANTED” atau Caps Lock tiga kali untuk “ACCESS DENIED”.', 'Gunakan tombol Layar penuh atau F11 untuk efek penuh, dan Esc untuk keluar.'],
    useCases: [
      { title: 'Membuat kagum teman', description: 'Tampak jenius sambil mengetik asal.' },
      { title: 'Film dan siaran', description: 'Rekaman “hacking” yang meyakinkan untuk video.' },
      { title: 'Seru di kelas', description: 'Cara menyenangkan memancing minat pada pemrograman.' },
      { title: 'Latar pesta', description: 'Jalankan di layar cadangan pada acara bertema teknologi.' },
    ],
    faqs: [
      { question: 'Apakah Hacker Typer benar-benar meretas sesuatu?', answer: 'Tidak. Ia hanya menampilkan teks siap pakai yang aman. Tidak menjalankan perintah, mengakses jaringan, atau menyentuh file Anda.' },
      { question: 'Kenapa tombol F tidak membuka layar penuh di sini?', answer: 'Di alat ini setiap tombol mengetik kode, jadi gunakan tombol layar penuh.' },
      { question: 'Apakah bisa di ponsel?', answer: 'Bisa. Ketuk terminal berulang kali untuk memunculkan lebih banyak kode.' },
    ],
  },
  'hacked-screen': {
    glance: {
      answer: 'Simulator layar diretas menampilkan peringatan palsu “sistem Anda telah diretas” dengan teks glitch, log yang bergulir, bilah progres, dan hitung mundur. Ini prank yang aman: tidak ada yang diakses atau diubah, dan saat hitung mundur selesai sebuah pesan mengungkap bahwa itu hanya lelucon.',
      features: ['Gaya peringatan merah dan terminal hijau', 'Judul, log, dan hitung mundur bisa diubah', 'Sirene opsional', 'Diakhiri pesan jelas “cuma bercanda”'],
      benefits: ['Prank aman yang tampak dramatis', 'Properti untuk film, siaran, dan escape room', 'Berjalan offline sepenuhnya di browser'],
    },
    steps: ['Pilih gaya (peringatan merah atau terminal hijau) dan teks yang ditampilkan.', 'Nyalakan atau matikan sirene opsional; baru berbunyi setelah Anda memulai.', 'Jadikan layar penuh dan tinggalkan perangkat untuk ditemukan teman Anda.', 'Tekan Esc atau gerakkan mouse untuk memunculkan tombol tutup.'],
    useCases: [
      { title: 'Prank', description: 'Kejutan singkat untuk teman yang nanti akan tertawa.' },
      { title: 'Film dan escape room', description: 'Layar properti “Anda telah diretas” yang meyakinkan.' },
      { title: 'Edukasi keamanan', description: 'Tunjukkan rupa scareware agar orang belajar mengabaikannya.' },
      { title: 'Siaran dan video', description: 'Selingan dramatis atau momen reaksi.' },
    ],
    faqs: [
      { question: 'Apakah ini benar-benar meretas atau merusak perangkat saya?', answer: 'Tidak. Ini teks dan animasi di tab browser biasa. Tidak menjalankan perintah, membaca file, atau terhubung ke apa pun.' },
      { question: 'Apa yang harus dilakukan jika situs sungguhan bilang saya diretas?', answer: 'Tutup tabnya. Alat keamanan asli tidak pernah meminta Anda menelepon nomor atau membayar untuk membuka perangkat; pop-up seperti itu adalah penipuan.' },
      { question: 'Bagaimana cara keluar?', answer: 'Tekan Esc, atau gerakkan mouse atau ketuk untuk memunculkan tombol tutup. Menutup tab juga bisa.' },
    ],
  },
  'zoom-lighting': {
    glance: {
      answer: 'Lampu Zoom mengubah layar Anda menjadi sumber cahaya lembut untuk panggilan video. Pilih suhu warna dari hangat (sekitar 2700 K) hingga siang hari (6500 K), atur kecerahan, lalu penuhi layar atau gunakan bingkai cahaya di sekitar jendela Zoom, Google Meet, atau Microsoft Teams.',
      features: ['Slider suhu warna dalam Kelvin dengan preset', 'Layar penuh atau bingkai di sekitar panggilan', 'Kecerahan dan warna kustom', 'Bisa di monitor kedua atau tablet'],
      benefits: ['Wajah lebih terang dan merata tanpa membeli lampu', 'Cahaya hangat yang menawan untuk kulit', 'Gratis dan instan'],
    },
    steps: ['Buka halaman ini di monitor kedua, atau di samping jendela panggilan di satu layar.', 'Atur suhu warna dan kecerahan. Naikkan kecerahan layar untuk cahaya lebih banyak.', 'Pilih cahaya penuh untuk kecerahan maksimal, atau bingkai untuk menyisakan jendela gelap di tengah bagi panggilan.', 'Tekan F atau Layar penuh untuk memenuhi layar, dan Esc untuk keluar.'],
    useCases: [
      { title: 'Panggilan video', description: 'Terangi dan ratakan cahaya di wajah di ruangan redup.' },
      { title: 'Siaran langsung', description: 'Cahaya utama lembut dari monitor atau tablet cadangan.' },
      { title: 'Selfie', description: 'Gunakan laptop atau tablet sebagai sumber cahaya cepat dan merata.' },
      { title: 'Rias wajah', description: 'Cek riasan di bawah cahaya hangat sore atau mirip siang hari.' },
    ],
    faqs: [
      { question: 'Suhu warna mana yang sebaiknya dipakai?', answer: 'Sesuaikan dengan ruangan. Sekitar 3000 K cocok untuk ruangan berlampu di malam hari, 4000–4500 K netral, dan 5500–6500 K sesuai cahaya siang dari jendela.' },
      { question: 'Apakah ini mengubah kamera saya?', answer: 'Tidak. Ini hanya menerangi wajah. Anda tetap bisa memakai pengaturan cahaya rendah di aplikasi rapat.' },
      { question: 'Apakah layar jadi lebih terang dari biasanya?', answer: 'Tidak. Ini memakai kecerahan Anda saat ini; naikkan kecerahan layar untuk cahaya lebih banyak.' },
    ],
  },
  'visual-noise': {
    glance: {
      answer: 'Noise visual memenuhi layar dengan pola animasi yang mengalir halus: kabut lembut, plasma berwarna, dan butiran halus. Dipakai sebagai latar video dan siaran, acuan tekstur desain, dan visual menenangkan untuk bersantai.',
      features: ['Gaya kabut, plasma, dan butiran halus', 'Skala, kecepatan, dan palet warna', 'Jeda untuk membekukan bingkai', 'Mulai terjeda jika Anda memilih gerakan dikurangi'],
      benefits: ['Latar bergerak yang tenang untuk video dan siaran', 'Acuan tekstur untuk desain', 'Gratis dan ringan'],
    },
    steps: ['Pilih gaya seperti kabut, plasma, atau butiran halus.', 'Atur skala, kecepatan, dan palet warna.', 'Jeda animasi untuk membekukan bingkai yang Anda suka.', 'Tekan F atau Layar penuh untuk memenuhi layar, dan Esc untuk keluar.'],
    useCases: [
      { title: 'Visual suasana', description: 'Gerakan lembut di TV atau monitor sebagai latar.' },
      { title: 'Tekstur desain', description: 'Acuan untuk tekstur butiran dan gradasi.' },
      { title: 'Latar VJ', description: 'Visual generatif sederhana untuk acara.' },
      { title: 'Relaksasi', description: 'Kabut lambat untuk bersantai.' },
    ],
    faqs: [
      { question: 'Apakah sama dengan semut TV?', answer: 'Tidak. Semut TV acak per piksel dan per bingkai. Pola ini memakai noise halus yang mengalir pelan.' },
      { question: 'Apakah boros baterai?', answer: 'Berjalan di kartu grafis. Turunkan kecepatan atau jeda untuk menghemat daya di laptop.' },
      { question: 'Apakah mengikuti preferensi gerakan dikurangi?', answer: 'Ya. Jika sistem Anda memilih gerakan dikurangi, animasi mulai dalam keadaan terjeda.' },
    ],
  },
  'color-cycle': {
    glance: {
      answer: 'Layar berganti warna memudarkan layar Anda dengan halus melewati warna pelangi. Atur kecepatan dan kecerahan untuk lampu pesta, cahaya suasana, bersantai, atau cek cepat apakah layar menampilkan setiap nuansa dengan mulus tanpa banding.',
      features: ['Pelangi halus atau mode bertahap', 'Pengaturan kecepatan dan kecerahan', 'Layar penuh dengan kursor tersembunyi', 'Mengikuti preferensi gerakan dikurangi'],
      benefits: ['Lampu pesta atau suasana instan', 'Mengecek transisi warna yang mulus', 'Gratis di perangkat apa pun'],
    },
    steps: ['Pilih pelangi halus atau siklus bertahap antarwarna.', 'Atur kecepatan dengan slider.', 'Tekan spasi untuk jeda dan lanjut.', 'Tekan F atau Layar penuh untuk memenuhi layar, dan Esc untuk keluar.'],
    useCases: [
      { title: 'Cahaya suasana', description: 'Cahaya yang berganti pelan untuk pesta atau bersantai.' },
      { title: 'Piksel macet', description: 'Ganti warna cepat kadang disarankan untuk piksel macet, tanpa jaminan.' },
      { title: 'Suasana siaran', description: 'Cahaya latar yang berganti di belakang Anda di kamera.' },
      { title: 'Lampu tidur anak', description: 'Cahaya lembut yang berganti pelan dengan kecerahan rendah.' },
    ],
    faqs: [
      { question: 'Apakah siklus warna bisa memperbaiki piksel macet?', answer: 'Kadang ganti warna cepat membantu subpiksel macet merespons lagi, tetapi tidak dijamin dan tidak bisa memperbaiki piksel mati.' },
      { question: 'Apakah siklus cepat aman?', answer: 'Kedipan cepat bisa memengaruhi penderita epilepsi fotosensitif. Kecepatan dibatasi, mulai pelan, dan preferensi gerakan dikurangi dihormati.' },
      { question: 'Bisakah berhenti di warna yang saya suka?', answer: 'Bisa. Tekan spasi atau tombol jeda.' },
    ],
  },
  'gradient-screen': {
    glance: {
      answer: 'Layar gradasi memenuhi layar dengan perpaduan halus antara warna pilihan Anda. Atur warna, sudut, dan jenisnya, gunakan sebagai cahaya suasana atau wallpaper, cek banding pada layar, dan unduh gradasi sebagai gambar.',
      features: ['Gradasi linear dan radial', 'Warna dan sudut apa pun', 'Unduh PNG resolusi tinggi', 'Layar penuh'],
      benefits: ['Wallpaper kustom dalam hitungan detik', 'Tes banding yang bagus untuk monitor', 'Gratis, tanpa aplikasi desain'],
    },
    steps: ['Pilih preset atau warna Anda sendiri.', 'Ganti antara linear dan radial, lalu atur sudutnya.', 'Aktifkan animasi untuk gradasi yang bergeser pelan.', 'Tekan F untuk layar penuh, atau unduh gradasi sebagai PNG.'],
    useCases: [
      { title: 'Wallpaper', description: 'Buat wallpaper gradasi kustom di resolusi apa pun.' },
      { title: 'Cahaya suasana', description: 'Cahaya dua warna yang lembut lebih nyaman di mata daripada warna solid.' },
      { title: 'Tes banding', description: 'Gradasi halus menampakkan banding di panel berkedalaman rendah.' },
      { title: 'Latar', description: 'Latar cepat untuk presentasi dan video.' },
    ],
    faqs: [
      { question: 'Kenapa gradasi saya bergaris?', answer: 'Itu banding, karena kedalaman warna panel terbatas atau kompresi gambar. Itu batas layar, bukan cacat gradasinya.' },
      { question: 'Bisakah saya mengunduhnya?', answer: 'Bisa. Pilih resolusi dan unduh PNG yang dibuat di browser Anda.' },
      { question: 'Bisakah memakai tiga warna?', answer: 'Bisa. Aktifkan warna tengah untuk menambah titik warna ketiga.' },
    ],
  },
  'flip-clock-screensaver': {
    glance: {
      answer: 'Screensaver jam flip menampilkan waktu dengan digit besar yang membalik setiap menit, seperti jam weker retro. Pilih format 12 atau 24 jam, tampilkan detik dan tanggal, lalu jalankan layar penuh di monitor cadangan, tablet, atau TV.',
      features: ['Digit flip beranimasi', 'Format 12 dan 24 jam dengan detik dan tanggal', 'Tema terang dan gelap', 'Menjaga layar menyala dalam layar penuh'],
      benefits: ['Mengubah tablet lama jadi jam meja', 'Waktu besar yang terbaca dari seberang ruangan', 'Gratis, tanpa aplikasi'],
    },
    steps: ['Waktu lokal Anda muncul otomatis.', 'Ganti format 12/24 jam, detik, dan tanggal. Setiap digit membalik seperti jam flip sungguhan.', 'Pilih tema yang cocok dengan ruangan Anda.', 'Tekan F atau Layar penuh untuk memenuhi layar, dan Esc untuk keluar.'],
    useCases: [
      { title: 'Jam meja', description: 'Ubah tablet atau monitor cadangan menjadi jam meja atau samping tempat tidur.' },
      { title: 'Presentasi', description: 'Tampilkan waktu dengan jelas saat acara dan jeda.' },
      { title: 'Sesi fokus', description: 'Jam yang tenang dan minimal di depan mata saat bekerja.' },
      { title: 'Siaran langsung', description: 'Latar “segera dimulai” yang bergaya.' },
    ],
    faqs: [
      { question: 'Dari mana waktunya?', answer: 'Dari jam dan zona waktu perangkat Anda, jadi tetap berjalan offline setelah dimuat.' },
      { question: 'Apakah layar tetap menyala?', answer: 'Dalam layar penuh di browser yang mendukung, wake lock menjaga layar tetap menyala.' },
      { question: 'Bisakah animasi flip dimatikan?', answer: 'Bisa. Jika sistem Anda memilih gerakan dikurangi, digit berganti tanpa membalik.' },
    ],
  },
  'motivational-quote-screensaver': {
    glance: {
      answer: 'Screensaver kutipan motivasi menampilkan kutipan inspiratif baru setiap beberapa detik dengan huruf besar yang mudah dibaca, plus jam opsional. Cocok untuk lobi kantor, kelas, gym, dan layar di rumah yang dilirik orang sepanjang hari.',
      features: ['Kutipan dari Seneca, Marcus Aurelius, Emerson, dan lainnya', 'Kecepatan, latar, dan urutan acak', 'Jam opsional', 'Layar penuh tanpa mati'],
      benefits: ['Tampilan positif untuk ruang bersama', 'Tanpa pengaturan di Smart TV', 'Gratis'],
    },
    steps: ['Kutipan acak langsung muncul.', 'Pilih latar dan berapa detik tiap kutipan tampil.', 'Gunakan panah atau tombol ← → untuk berpindah kutipan; spasi untuk jeda.', 'Tekan F atau Layar penuh untuk memenuhi layar, dan Esc untuk keluar.'],
    useCases: [
      { title: 'Kantor dan lobi', description: 'Putaran yang tenang dan positif untuk TV resepsionis dan area tim.' },
      { title: 'Ruang kelas', description: 'Tampilkan kata mutiara hari ini saat murid datang.' },
      { title: 'Gym dan studio', description: 'Kalimat pendek dan bertenaga yang terbaca dari seberang ruangan.' },
      { title: 'Meja di rumah', description: 'Manfaatkan monitor kedua atau tablet lama saat bekerja.' },
    ],
    faqs: [
      { question: 'Dari mana kutipan-kutipannya?', answer: 'Itu kalimat pendek dari penulis dan peribahasa ternama, seperti Seneca, Marcus Aurelius, Konfusius, Benjamin Franklin, dan Mark Twain. Semuanya ada di halaman, jadi tidak ada yang diunduh saat berjalan.' },
      { question: 'Bisakah satu kutipan tetap di layar?', answer: 'Bisa. Tekan Jeda (atau spasi) dan kutipan tetap tampil sampai Anda lanjut atau menekan panah.' },
      { question: 'Apakah layar tetap menyala?', answer: 'Dalam layar penuh di browser yang mendukung, wake lock mencegah layar mati.' },
    ],
  },
  'fake-windows-11-update': update('Windows 11', 'Microsoft', {
    answer: 'Layar update Windows 11 palsu menampilkan layar gelap “Sedang mengerjakan pembaruan” dengan spinner dan persentase yang naik perlahan. Jalankan layar penuh agar komputer tampak sibuk update, sebagai prank atau properti film, lalu tekan Esc untuk kembali.',
    features: ['Spinner dan teks gaya Windows 11', 'Kecepatan bisa diatur dan jeda', 'Layar penuh dengan kursor tersembunyi', 'Esc untuk keluar'],
    benefits: ['Prank realistis dan aman', 'Properti bersih untuk rekaman layar', 'Gratis'],
  }, { question: 'Apa bedanya dengan versi Windows 10?', answer: 'Versi ini memakai latar lebih gelap dan tata letak lebih sederhana seperti sistem baru.' }),
  'fake-mac-update': update('macOS', 'Apple', {
    answer: 'Layar update Mac palsu menampilkan layar update macOS hitam dengan bilah progres dan sisa waktu. Dalam layar penuh, Mac tampak sedang memasang update, untuk prank yang aman atau properti video. Tekan Esc untuk keluar.',
    features: ['Bilah progres dan sisa waktu gaya macOS', 'Kecepatan update bisa diatur', 'Layar penuh dengan kursor tersembunyi', 'Esc untuk keluar'],
    benefits: ['Prank aman untuk pengguna Mac', 'Properti bersih untuk video', 'Gratis'],
  }, { question: 'Apakah memakai logo Apple asli?', answer: 'Tidak. Memakai tanda umum yang netral untuk menghindari penyalahgunaan merek, sambil mempertahankan tata letak yang dikenal.' }),
  'fake-android-update': update('Android', 'Google', {
    answer: 'Layar update Android palsu menampilkan update sistem yang sedang berjalan dengan bilah progres. Buka dalam layar penuh di ponsel atau tablet agar tampak sedang update, lalu ketuk tombol tutup untuk mengungkap prank.',
    features: ['Layar update dan progres gaya Android', 'Kecepatan bisa diatur', 'Layar penuh di ponsel dan tablet', 'Ketuk untuk keluar'],
    benefits: ['Prank yang bisa di ponsel apa pun', 'Tanpa instal aplikasi', 'Gratis'],
  }, { question: 'Apakah bisa di ponsel?', answer: 'Bisa. Di kebanyakan browser Android, layar penuh menyembunyikan bilah alamat. Di Safari iPhone, layar memenuhi jendela browser.' }),
  'fake-windows-xp-update': update('Windows XP', 'Microsoft', {
    answer: 'Layar update Windows XP palsu menghadirkan kembali layar biru klasik “Menginstal pembaruan” dari awal 2000-an lengkap dengan bilah progresnya. Gunakan untuk prank nostalgia, video retro, dan syuting berlatar era itu. Tekan Esc untuk keluar.',
    features: ['Tampilan klasik era XP', 'Bilah progres dan teks status', 'Layar penuh dengan kursor tersembunyi', 'Esc untuk keluar'],
    benefits: ['Nostalgia instan', 'Properti sesuai zaman', 'Gratis'],
  }, { question: 'Kenapa tampilannya sangat retro?', answer: 'Meniru gaya dialog awal 2000-an untuk tampilan nostalgia yang mudah dikenali.' }),
  'fake-chrome-os-update': update('ChromeOS', 'Google', {
    answer: 'Layar update ChromeOS palsu menampilkan update bergaya Chromebook yang sedang berjalan. Jalankan layar penuh di Chromebook atau komputer apa pun agar sistem tampak sedang update, sebagai prank aman atau properti demo, lalu tekan Esc untuk keluar.',
    features: ['Layar update gaya ChromeOS', 'Kecepatan progres bisa diatur', 'Layar penuh dengan kursor tersembunyi', 'Esc untuk keluar'],
    benefits: ['Bisa di Chromebook sekolah dan kantor', 'Prank aman', 'Gratis'],
  }, { question: 'Apakah bisa di Chromebook?', answer: 'Bisa. Tekan tombol layar penuh atau tombol Layar penuh untuk efek lengkap.' }),
  'fake-ubuntu-update': update('Ubuntu', 'Canonical', {
    answer: 'Layar update Ubuntu palsu menampilkan update paket Linux yang bergulir di terminal dengan baris progres. Tampak seperti upgrade sistem sungguhan, jadi cocok untuk prank developer dan properti meyakinkan untuk video tentang Linux.',
    features: ['Output update gaya apt yang bergulir', 'Warna terminal gaya Ubuntu', 'Layar penuh', 'Esc untuk keluar'],
    benefits: ['Prank untuk developer', 'Properti terminal yang realistis', 'Gratis'],
  }, { question: 'Apakah baris log itu perintah sungguhan?', answer: 'Bukan. Itu teks siap pakai untuk tampilan dan tidak ada yang dijalankan di komputer Anda.' }),
  'fake-windows-xp-boot': {
    glance: {
      answer: 'Layar booting Windows XP palsu memutar layar startup klasik dengan bilah loading biru yang bergerak di atas hitam. Properti retro cepat untuk video, film, dan prank, sekaligus screensaver nostalgia bagi penggemar sistem tahun 2001 itu.',
      features: ['Layar booting klasik dengan bilah loading beranimasi', 'Berulang selama yang Anda mau', 'Layar penuh dengan kursor tersembunyi', 'Esc untuk keluar'],
      benefits: ['Properti retro sekali klik', 'Screensaver nostalgia', 'Gratis'],
    },
    steps: ['Layar booting langsung mulai, dengan blok biru bergeser di bilah loading.', 'Tekan F atau Layar penuh agar memenuhi layar dan menyembunyikan browser.', 'Biarkan berjalan: bilah loading berulang selama yang Anda mau.', 'Tekan Esc untuk keluar.'],
    useCases: [
      { title: 'Nostalgia', description: 'Kenang saat PC awal 2000-an menyala.' },
      { title: 'Properti retro', description: 'Tata komputer jadul untuk foto atau film.' },
      { title: 'Prank aman', description: 'Buat PC modern tampak sedang booting XP.' },
      { title: 'Intro siaran', description: 'Intro retro “sedang memulai” untuk siaran Anda.' },
    ],
    faqs: [
      { question: 'Apakah ini sungguhan atau berbahaya?', answer: 'Bukan. Ini simulasi visual yang aman di tab browser biasa. Tidak mengubah perangkat dan tidak menginstal apa pun.' },
      brandFaq('Microsoft'),
      { question: 'Apakah ada suara startup?', answer: 'Tidak. Demi kenyamanan telinga dan hak cipta, tidak ada suara startup.' },
      EXIT,
    ],
  },
  'fake-zoom-meeting': call('Zoom Video Communications', {
    answer: 'Layar rapat Zoom palsu menampilkan panggilan video bergaya Zoom dengan grid peserta, toolbar, dan pratinjau kamera Anda sendiri. Untuk prank, properti film, tangkapan layar, dan latihan di depan kamera. Gambar kamera tetap di perangkat Anda dan tidak pernah direkam atau diunggah.',
    features: ['Grid peserta dengan nama dan ikon mute', 'Kamera langsung Anda, juga di layar penuh', 'Timer rapat dan toolbar', 'Judul rapat bisa diubah'],
    benefits: ['Properti panggilan realistis untuk video', 'Latihan presentasi di depan kamera', 'Privat: tidak ada yang keluar dari perangkat'],
  }, { question: 'Apa bedanya dengan layar rapat Teams?', answer: 'Layar ini mengikuti tata letak Zoom: galeri kotak peserta dengan kontrol di bawah. Layar Teams meletakkan kontrol dan tombol Keluar merah di bilah atas dengan timer rapat.' }),
  'fake-teams-meeting': call('Microsoft', {
    answer: 'Layar rapat Microsoft Teams palsu menampilkan panggilan bergaya Teams dengan kotak peserta, bilah rapat, dan pratinjau kamera Anda. Gunakan untuk prank, properti film, atau latihan presentasi. Pratinjau tetap di browser dan tidak pernah direkam.',
    features: ['Kotak dan kontrol gaya Teams', 'Kamera langsung di layar penuh', 'Timer rapat', 'Judul rapat bisa diubah'],
    benefits: ['Properti kantor yang meyakinkan', 'Latihan panggilan dengan tenang', 'Privat dan gratis'],
  }, { question: 'Bisakah saya mengubah nama rapat?', answer: 'Bisa. Ketik nama baru di kolom judul di bawah layar. Nama langsung muncul di bilah atas, dan tidak ada yang disimpan atau dikirim.' }),
  'fake-google-meet': call('Google', {
    answer: 'Layar Google Meet palsu menampilkan panggilan video bergaya Meet dengan kotak peserta, bilah kontrol bawah, dan pratinjau kamera Anda sendiri. Cocok untuk prank, video, dan latihan presentasi, dan gambar kamera Anda tidak pernah meninggalkan perangkat.',
    features: ['Kotak dan bilah kontrol gaya Meet', 'Kamera langsung di layar penuh', 'Timer dan judul rapat yang bisa diubah', 'Tanpa login Google'],
    benefits: ['Properti realistis untuk film dan tutorial', 'Latihan di depan kamera', 'Privat dan gratis'],
  }, { question: 'Apakah kode rapatnya asli?', answer: 'Bukan. “abc-defg-hij” hanya teks contoh. Tidak ada yang bisa bergabung, dan halaman tidak pernah terhubung ke Google Meet atau layanan lain.' }),
  'fake-slack-huddle': call('Slack Technologies', {
    answer: 'Layar huddle Slack palsu menampilkan huddle audio dan video bergaya Slack dengan peserta dan kontrol. Gunakan sebagai prank, properti tangkapan layar untuk presentasi, atau latar syuting, tanpa terhubung ke workspace Slack sungguhan.',
    features: ['Tampilan peserta gaya huddle', 'Indikator bicara dan kontrol', 'Layar penuh', 'Judul bisa diubah'],
    benefits: ['Properti cepat untuk video kerja jarak jauh', 'Prank aman', 'Gratis'],
  }),
  'fake-radar-screen': {
    glance: {
      answer: 'Layar radar palsu menampilkan tampilan radar bundar klasik, disebut plan position indicator, dengan garis sapuan yang berputar, kontak yang memudar, dan cincin jarak. Pembacaan data dan ping opsional menjadikannya properti meyakinkan untuk film, escape room, game, dan prank fiksi ilmiah.',
      features: ['Sapuan berputar dengan jejak cahaya', 'Kontak bergerak dan cincin jarak', 'Pembacaan arah dan jarak', 'Ping gaya sonar opsional'],
      benefits: ['Properti fiksi ilmiah atau militer instan', 'Cocok untuk escape room dan panggung', 'Gratis dan bisa offline'],
    },
    steps: ['Radar langsung mulai menyapu.', 'Pilih warna (hijau, kuning amber, atau biru), kecepatan sapuan, dan jumlah kontak.', 'Nyalakan ping bila mau; baru berbunyi setelah diaktifkan.', 'Tekan F atau Layar penuh untuk memenuhi layar, dan Esc untuk keluar.'],
    useCases: [
      { title: 'Properti film dan teater', description: 'Layar ruang kendali yang meyakinkan tanpa peralatan asli.' },
      { title: 'Escape room dan game', description: 'Bangun suasana kapal selam, luar angkasa, atau mata-mata.' },
      { title: 'Pesta dan siaran', description: 'Latar fiksi ilmiah bergerak di TV atau monitor kedua.' },
      { title: 'Screensaver', description: 'Animasi tenang yang berulang untuk layar diam.' },
    ],
    faqs: [
      { question: 'Apakah ini menampilkan data radar atau pesawat sungguhan?', answer: 'Tidak. Setiap kontak dibuat acak di browser Anda. Hanya untuk hiburan dan properti.' },
      { question: 'Kenapa titik-titiknya memudar?', answer: 'Layar radar klasik memakai fosfor yang tetap berpendar setelah sinar lewat lalu meredup. Efek memudar meniru pendar itu.' },
      { question: 'Bagaimana cara keluar?', answer: 'Tekan Esc, atau gerakkan mouse atau ketuk untuk memunculkan tombol tutup. Menutup tab juga bisa.' },
    ],
  },
}
