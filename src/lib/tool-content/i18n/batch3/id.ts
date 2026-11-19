import type { ToolTranslations } from '../types'

export const id: ToolTranslations = {
  'screen-uniformity-test': {
    glance: {
      answer:
        'Tes keseragaman layar menampilkan bidang gelap dan abu-abu layar penuh agar Anda bisa melihat apakah kecerahan dan warna merata di seluruh panel. Tes ini menampakkan kebocoran cahaya di tepi, clouding pada layar LCD dan IPS, IPS glow, vignetting, dan efek layar kotor pada TV besar.',
      features: ['Bidang hitam, abu-abu gelap, dan abu-abu sedang', 'Tingkat kecerahan untuk melihat clouding di ruang gelap', 'Panduan membedakan IPS glow dan kebocoran cahaya', 'Layar penuh tanpa bilah browser'],
      benefits: ['Temukan cacat panel yang ditanggung garansi', 'Bandingkan dua monitor atau unit pengganti dengan adil', 'Sekitar dua menit di ruangan gelap'],
    },
    steps: [
      'Redupkan lampu ruangan dan biarkan layar hangat beberapa menit.',
      'Tekan F untuk layar penuh dan mulai dari abu-abu paling gelap untuk mencari kebocoran di tepi.',
      'Pindah ke abu-abu yang lebih terang dan cari noda, pita, atau sudut yang lebih gelap.',
      'Aktifkan grid untuk membandingkan area tertentu di layar.',
    ],
    useCases: [
      { title: 'Kebocoran cahaya', description: 'Bidang hampir hitam menampakkan cahaya yang bocor dari tepi panel LCD.' },
      { title: 'Efek layar kotor', description: 'Abu-abu sedang menampakkan pita vertikal atau noda di TV saat kamera bergerak.' },
      { title: 'Vignetting', description: 'Bandingkan sudut dengan bagian tengah untuk melihat tepi yang lebih gelap.' },
      { title: 'Lotre panel', description: 'Bandingkan dua unit model yang sama sebelum memilih satu.' },
    ],
    faqs: [
      { question: 'Kenapa layar saya tampak tidak rata di warna abu-abu?', answer: 'Tidak ada panel yang benar-benar seragam. Perbedaan kecil itu normal; noda besar, pita kuat, atau sudut terang bisa dilaporkan jika perangkat masih baru.' },
      { question: 'Apakah harus tes di ruangan gelap?', answer: 'Ya. Cahaya sekitar menyembunyikan kebocoran dan clouding halus, jadi ruangan redup membuat tes jauh lebih jelas.' },
      { question: 'Apakah kamera menampilkan apa yang saya lihat?', answer: 'Kamera ponsel sering melebih-lebihkan kebocoran dan clouding. Nilai dengan mata sendiri dan pakai foto hanya sebagai acuan kasar.' },
    ],
  },
  stopwatch: {
    glance: {
      answer:
        'Stopwatch online mengukur waktu dari mulai sampai berhenti, hingga seperseratus detik, dengan angka besar layar penuh. Catat lap untuk lari, renang, latihan, dan eksperimen; waktunya tetap akurat karena diukur dengan jam perangkat Anda.',
      features: ['Mulai, berhenti, lap, dan reset', 'Presisi seperseratus detik', 'Daftar lap dengan waktu antara', 'Spasi dan pintasan keyboard'],
      benefits: ['Tampilan besar untuk gym dan kelas', 'Waktu lap yang akurat', 'Gratis, bisa offline'],
    },
    steps: [
      'Tekan Mulai atau spasi untuk mulai menghitung.',
      'Tekan Lap atau L untuk mencatat waktu antara sementara stopwatch terus berjalan.',
      'Spasi untuk jeda, R untuk reset.',
      'Tekan F untuk layar penuh dan Esc untuk keluar.',
    ],
    useCases: [
      { title: 'Olahraga dan lari', description: 'Catat waktu lap dan interval.' },
      { title: 'Pidato', description: 'Hitung waktu presentasi dan latihan dengan tepat.' },
      { title: 'Permainan dan kuis', description: 'Atur waktu ronde di kelas atau malam permainan.' },
      { title: 'Lab dan dapur', description: 'Ukur reaksi dan waktu seduh.' },
    ],
    faqs: [
      { question: 'Seberapa akurat stopwatch ini?', answer: 'Stopwatch memakai jam resolusi tinggi browser dan menampilkan seperseratus detik. Refresh layar bisa menunda tampilan beberapa milidetik.' },
      { question: 'Apakah lap saya disimpan?', answer: 'Lap tetap ada di halaman sampai Anda reset atau menutupnya. Anda bisa menyalinnya ke clipboard.' },
      { question: 'Apakah bisa offline?', answer: 'Bisa. Setelah halaman dimuat, stopwatch berjalan tanpa koneksi.' },
    ],
  },
  'matrix-screensaver': {
    glance: {
      answer:
        'Screensaver Matrix menampilkan kolom karakter hijau yang berjatuhan, “hujan digital” yang terkenal lewat film The Matrix (1999). Screensaver ini berjalan di browser dalam layar penuh, dan Anda bisa mengubah warna, kecepatan, dan ukuran karakter untuk meja kerja, TV, atau latar siaran.',
      features: ['Katakana, angka, dan simbol berjatuhan', 'Atur warna, kecepatan, dan ukuran karakter', 'Layar penuh dengan kursor tersembunyi', 'Mulus di layar refresh tinggi'],
      benefits: ['Tampilan ikonik untuk layar diam dan siaran', 'Tanpa instal screensaver di Windows atau macOS', 'Gratis'],
    },
    steps: [
      'Hujan langsung mulai di pratinjau.',
      'Atur kecepatan, kepadatan, dan ukuran huruf, atau pilih warna lain.',
      'Pilih karakter katakana, biner, atau gaya cyber.',
      'Tekan F atau Layar penuh untuk memenuhi layar, dan Esc untuk keluar.',
    ],
    useCases: [
      { title: 'Screensaver', description: 'Biarkan berjalan di monitor yang sedang tidak dipakai.' },
      { title: 'Suasana teknologi', description: 'Visual latar untuk siaran, kantor, atau acara.' },
      { title: 'Latar video', description: 'Rekam latar “cyber” untuk video Anda.' },
      { title: 'Pesta kostum', description: 'Ciptakan suasana malam bertema fiksi ilmiah.' },
    ],
    faqs: [
      { question: 'Karakter apa yang dipakai hujan Matrix?', answer: 'Efek aslinya memakai katakana setengah lebar yang dicerminkan, dicampur angka. Di sini Anda bisa memilih gaya itu, biner, atau karakter cyber.' },
      { question: 'Bisakah dijadikan screensaver sungguhan?', answer: 'Browser tidak bisa menginstal screensaver sistem, tetapi Anda bisa membukanya layar penuh saat meninggalkan meja. Wake lock menjaga layar tetap menyala.' },
      { question: 'Apakah membuat komputer lambat?', answer: 'Ringan. Di perangkat lama, turunkan kepadatan agar animasi lebih mulus.' },
    ],
  },
  'dvd-screensaver': {
    glance: {
      answer:
        'Screensaver DVD adalah logo memantul klasik dari pemutar DVD: melayang di layar, berganti warna setiap menabrak tepi, dan sesekali masuk tepat ke sudut. Versi ini menghitung tabrakan sudut dan memungkinkan Anda mengubah kecepatan serta ukuran logo.',
      features: ['Berganti warna di setiap pantulan', 'Penghitung sudut dengan perayaan', 'Atur kecepatan dan ukuran logo', 'Layar penuh di layar apa pun'],
      benefits: ['Nostalgia dan anehnya memuaskan', 'Latar yang seru untuk siaran dan ruang tunggu', 'Gratis'],
    },
    steps: [
      'Logo langsung mulai memantul.',
      'Atur kecepatan dan ukuran logo dengan slider.',
      'Pantau penghitung sudut: setiap sudut yang tepat dirayakan.',
      'Tekan F atau Layar penuh untuk memenuhi layar, dan Esc untuk keluar.',
    ],
    useCases: [
      { title: 'Nostalgia', description: 'Nikmati lagi klasik ruang tunggu.' },
      { title: 'Layar diam', description: 'Screensaver lucu untuk TV atau monitor kantor.' },
      { title: 'Jeda siaran', description: 'Penonton suka menunggu logo kena sudut.' },
      { title: 'Nonton bareng', description: 'Taruhan dengan teman kapan logo kena sudut.' },
    ],
    faqs: [
      { question: 'Apakah logo benar-benar kena sudut?', answer: 'Ya. Kapan dan seberapa sering tergantung ukuran layar, ukuran logo, dan kecepatan. Penghitung mencatat setiap tabrakan sudut yang tepat.' },
      { question: 'Apakah ini logo DVD resmi?', answer: 'Bukan. Ini lencana umum dengan gaya serupa dan tidak terkait dengan DVD Format/Logo Licensing Corporation.' },
      { question: 'Kenapa logo berganti warna?', answer: 'Seperti screensaver klasiknya, logo memilih warna baru setiap menyentuh tepi dan tidak pernah mengulang warna yang sama dua kali berturut-turut.' },
    ],
  },
  'fake-windows-10-update': {
    glance: {
      answer:
        'Layar update Windows 10 palsu meniru layar biru “Sedang mengerjakan pembaruan” dengan titik berputar dan persentase yang naik perlahan. Dalam layar penuh, PC tampak sedang update: prank klasik yang tidak berbahaya. Tekan Esc untuk keluar.',
      features: ['Titik berputar dan persentase yang naik', 'Kecepatan update bisa diatur', 'Layar penuh dengan kursor tersembunyi', 'Keluar kapan saja dengan Esc'],
      benefits: ['Prank kantor yang meyakinkan dan aman', 'Properti untuk video dan tutorial', 'Tidak ada yang diinstal atau diubah'],
    },
    steps: [
      'Atur dengan slider kecepatan seberapa cepat persentase naik.',
      'Klik Layar penuh atau tekan F agar simulasi memenuhi layar dan menyembunyikan browser.',
      'Tinggalkan dan biarkan progres berjalan. Tekan Jeda agar update tampak macet.',
      'Tekan Esc untuk keluar dan mengungkap leluconnya.',
    ],
    useCases: [
      { title: 'Prank kantor yang aman', description: 'Buat rekan kerja mengira PC-nya sedang update, lalu beri tahu yang sebenarnya.' },
      { title: 'Istirahat sejenak', description: 'Tampak sibuk saat meninggalkan meja.' },
      { title: 'Properti film dan video', description: 'Tampilkan update Windows 10 yang meyakinkan di lokasi syuting.' },
      { title: 'Nostalgia', description: 'Lihat lagi layar sistem klasik untuk bersenang-senang.' },
    ],
    faqs: [
      { question: 'Apakah ini update sungguhan atau berbahaya?', answer: 'Bukan. Ini simulasi visual yang aman di tab browser biasa. Tidak mengubah perangkat, tidak menginstal apa pun, dan tidak meminta data. Tekan Esc untuk keluar kapan saja.' },
      { question: 'Apakah ini terkait Microsoft?', answer: 'Tidak. Ini tiruan independen untuk hiburan, tidak berafiliasi atau disponsori Microsoft.' },
      { question: 'Bisakah saya mengatur kecepatannya?', answer: 'Bisa. Slider kecepatan mengatur seberapa cepat persentase naik, dan Jeda menahannya agar update tampak macet.' },
      { question: 'Bagaimana keluar dari layar palsu?', answer: 'Tekan Esc, atau gerakkan mouse atau ketuk layar untuk memunculkan tombol tutup. Menutup tab juga bisa.' },
    ],
  },
  'ring-light': {
    glance: {
      answer:
        'Ring light online menampilkan cincin terang di layar yang menerangi wajah Anda secara merata dari depan, seperti ring light fotografer. Atur ukuran, ketebalan, kehangatan, dan kecerahan cincin, lalu jadikan layar penuh untuk selfie, panggilan video, rias wajah, atau foto produk.',
      features: ['Ukuran dan ketebalan cincin bisa diatur', 'Suhu warna dari hangat hingga sejuk', 'Pengaturan kecerahan dan layar penuh', 'Bisa di ponsel, tablet, dan laptop'],
      benefits: ['Cahaya merata tanpa bayangan, gratis', 'Pantulan cahaya di mata seperti ring light asli', 'Layar cadangan apa pun jadi lampu'],
    },
    steps: [
      'Buka halaman di layar di depan Anda (laptop, monitor, atau tablet) dan naikkan kecerahannya.',
      'Atur ukuran dan ketebalan cincin; cincin lebih tebal memberi lebih banyak cahaya.',
      'Pilih suhu warna atau warna untuk tampilan kreatif.',
      'Tekan F atau Layar penuh untuk memenuhi layar, dan Esc untuk keluar.',
    ],
    useCases: [
      { title: 'Panggilan video', description: 'Cahaya merata dan menawan di wajah tanpa membeli ring light.' },
      { title: 'Selfie dan potret', description: 'Dapatkan pantulan bulat klasik di mata.' },
      { title: 'Rias wajah', description: 'Lihat wajah dengan jelas di bawah cahaya hangat atau mirip siang hari.' },
      { title: 'Siaran langsung', description: 'Cahaya utama yang lembut dari monitor atau tablet cadangan.' },
    ],
    faqs: [
      { question: 'Apakah layar seterang ring light asli?', answer: 'Tidak. Ring light LED asli jauh lebih terang. Ring light layar paling bagus di ruangan redup, dengan kecerahan maksimal dan dekat wajah.' },
      { question: 'Kenapa cincin, bukan seluruh layar?', answer: 'Cincin menerangi dari semua sisi, mengurangi bayangan di bawah hidung dan mata, dan membuat pantulan bulat di mata. Aktifkan opsi isi bagian tengah jika butuh semua cahaya.' },
      { question: 'Suhu warna mana yang paling bagus?', answer: 'Sekitar 4500–5500 K terlihat alami untuk kebanyakan warna kulit. Lebih hangat (3000 K) di malam hari, lebih sejuk (6500 K) agar serasi dengan cahaya siang.' },
    ],
  },
}
