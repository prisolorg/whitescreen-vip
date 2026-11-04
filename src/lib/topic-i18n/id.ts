import type { TopicTranslation } from './types'

export const id: TopicTranslation = {
  hubs: {
    '/color-screens': {
      intro:
        'Layar warna mengisi seluruh layar Anda dengan satu warna solid. Pilih warna, tekan F untuk layar penuh, dan setiap piksel menampilkan persis warna itu. Layar warna dipakai untuk mencari piksel mati dan macet, sebagai cahaya lembut, latar chroma key, dan layar tenang tanpa gangguan.',
      details: [
        {
          heading: 'Warna mana yang sebaiknya dipakai?',
          text: 'Putih untuk penerangan dan membersihkan layar, hitam untuk menyembunyikan layar atau mengecek kebocoran cahaya, serta merah, hijau, dan biru murni untuk menguji tiap subpiksel. Abu-abu menampakkan kecerahan yang tidak rata, sedangkan oranye atau merah muda yang hangat cocok untuk lampu tidur atau cahaya selfie.',
        },
        {
          heading: 'Nilai warna yang tepat',
          text: 'Setiap layar warna memakai nilai hex yang tepat (misalnya #FF0000 untuk merah) agar tes bisa diandalkan. Anda tetap bisa mengetik kode hex apa pun dan mengunduh warna apa pun sebagai PNG hingga 8K.',
        },
      ],
      faqs: [
        { question: 'Bagaimana membuat seluruh layar satu warna?', answer: 'Buka halaman warna lalu tekan F atau klik Layar penuh. Browser menyembunyikan bilahnya dan hanya warna yang tampil. Tekan Esc untuk keluar.' },
        { question: 'Apakah bisa di ponsel dan TV?', answer: 'Bisa. Layar warna berjalan di browser modern apa pun, termasuk Android, iPhone, Smart TV, dan konsol game. Di Safari iPhone, warna memenuhi jendela browser.' },
        { question: 'Bisakah saya mengunduh gambar warna solid?', answer: 'Bisa. Setiap halaman warna punya PNG gratis warna tersebut, dan panel unduhan membuat ukuran apa pun dari 720p sampai 8K.' },
      ],
    },
    '/screen-tests': {
      intro:
        'Tes layar adalah pola dan pengukuran layar penuh yang menunjukkan seberapa baik layar Anda bekerja. Gunakan untuk mencari piksel mati, mengukur refresh rate asli dalam Hz, melihat ghosting, kebocoran cahaya, dan burn-in, mengecek zona mati layar sentuh, serta menilai warna, semuanya di browser tanpa instalasi.',
      details: [
        {
          heading: 'Tes mana yang pertama?',
          text: 'Untuk layar baru atau bekas, mulailah dengan tes piksel mati dan tes keseragaman: keduanya menemukan cacat yang paling sering ditanggung retur atau garansi. Gamer sebaiknya menambah tes refresh rate dan ghosting, pemilik ponsel dan tablet tes layar sentuh, dan pemilik OLED tes burn-in.',
        },
        {
          heading: 'Seberapa akurat tes di browser?',
          text: 'Pola memakai nilai piksel yang tepat dan waktunya berasal dari jam frame browser, jadi hasilnya sesuai dengan yang benar-benar ditampilkan layar. Tes ini tidak menggantikan kolorimeter untuk kalibrasi profesional.',
        },
      ],
      faqs: [
        { question: 'Bagaimana cara mengecek masalah pada monitor saya?', answer: 'Bersihkan layar, lalu jalankan tes piksel mati, tes keseragaman di ruangan gelap, dan tes refresh rate. Totalnya sekitar lima menit.' },
        { question: 'Apakah tes ini bisa di TV dan ponsel?', answer: 'Bisa. Buka halaman di browser perangkat dan aktifkan layar penuh. Tes layar sentuh dibuat untuk ponsel dan tablet.' },
        { question: 'Apakah tes layar gratis?', answer: 'Ya. Semua tes gratis, tanpa daftar, dan berjalan sepenuhnya di perangkat Anda.' },
      ],
    },
    '/screensavers': {
      intro:
        'Screensaver online berjalan di browser, bukan diinstal di komputer. Buka satu, jadikan layar penuh, dan screensaver berjalan di perangkat apa pun: PC, Mac, Chromebook, Smart TV, atau tablet lama di meja. Pilih hujan digital ala Matrix, logo DVD yang memantul, jam flip retro, atau kutipan motivasi.',
      details: [
        {
          heading: 'Kenapa memakai screensaver di browser?',
          text: 'Bisa dipakai di perangkat tanpa pengaturan screensaver seperti Smart TV dan Chromebook, tidak perlu instalasi, dan menjaga layar tetap menyala selama berjalan, cocok untuk lobi, meja kerja, dan siaran langsung.',
        },
      ],
      faqs: [
        { question: 'Apakah screensaver online mencegah komputer tidur?', answer: 'Dalam layar penuh, browser yang mendukung menjaga layar tetap menyala dengan Screen Wake Lock API, jadi screensaver terus berjalan sampai Anda keluar.' },
        { question: 'Bisakah dipakai di Smart TV?', answer: 'Bisa. Buka halaman di browser TV lalu tekan tombol layar penuh.' },
      ],
    },
    '/prank-screens': {
      intro:
        'Layar prank adalah layar palsu yang realistis dan aman di browser: layar update Windows, macOS, ChromeOS, dan Android, layar biru kematian, layar diretas, dan rapat video palsu. Buka satu, jadikan layar penuh, lalu tekan Esc saat lelucon selesai. Tidak ada yang diinstal atau diubah.',
      details: [
        {
          heading: 'Prank dengan bertanggung jawab',
          text: 'Buat singkat dan ungkap leluconnya. Jangan pernah memakai update atau error palsu untuk menakuti orang agar membayar atau memberi akses ke perangkat: itu penipuan, bukan prank.',
        },
        {
          heading: 'Juga untuk properti',
          text: 'Pembuat film, streamer, guru, dan escape room memakai layar ini sebagai properti yang meyakinkan, karena tampak nyata di kamera tanpa menyentuh sistem sungguhan.',
        },
      ],
      faqs: [
        { question: 'Apakah layar prank aman?', answer: 'Aman. Semuanya gambar dan animasi di tab browser. Tidak bisa menginstal apa pun, membaca file, atau mengubah pengaturan.' },
        { question: 'Bagaimana keluar dari layar prank?', answer: 'Tekan Esc, atau gerakkan mouse atau ketuk layar untuk memunculkan tombol tutup. Menutup tab juga bisa.' },
      ],
    },
    '/visual-effects': {
      intro:
        'Efek visual mengubah layar Anda menjadi lebih dari sekadar gambar: generator noise dengan semut TV, ring light atau lampu panggilan video, layar retak, terminal hacker, noise animasi, gradasi, dan siklus warna. Semuanya berjalan layar penuh di browser, di ponsel, komputer, dan TV.',
      details: [
        {
          heading: 'Cahaya, suara, dan hiburan di satu tempat',
          text: 'Gunakan ring light dan lampu Zoom untuk menerangi wajah, generator noise untuk fokus atau tidur, serta layar retak dan Hacker Typer untuk prank dan video.',
        },
      ],
      faqs: [
        { question: 'Apakah efek berkedip aman?', answer: 'Kedipan cepat bisa memicu kejang pada penderita epilepsi fotosensitif. Turunkan kecepatan atau pilih efek yang tenang jika Anda sensitif.' },
        { question: 'Apakah generator noise memakai kuota?', answer: 'Tidak. Suaranya dibuat di perangkat Anda, jadi tidak ada streaming.' },
      ],
    },
    '/online-timers': {
      intro:
        'Timer online menampilkan angka besar layar penuh yang bisa dibaca dari seberang ruangan. Gunakan hitung mundur untuk kelas, rapat, dan ujian, timer Pomodoro untuk kerja dalam blok 25 menit, dan stopwatch dengan lap untuk olahraga dan lomba. Semuanya tetap akurat bahkan di tab latar belakang.',
      details: [
        {
          heading: 'Akurat di latar belakang',
          text: 'Setiap timer menghitung dengan jam perangkat, bukan menghitung detak, jadi tetap tepat saat browser memperlambat tab tersembunyi, dan judul tab menampilkan sisa waktu.',
        },
      ],
      faqs: [
        { question: 'Apakah timer berbunyi jika tab ada di latar belakang?', answer: 'Ya, selama tab tetap terbuka. Bunyi diputar saat waktu habis, jika diaktifkan.' },
        { question: 'Bisakah timer ditampilkan di proyektor atau TV?', answer: 'Bisa. Buka di browser lalu tekan F untuk layar penuh.' },
      ],
    },
  },
  colorAnswer: {
    template: '{subject} mengisi seluruh layar Anda dengan {word} murni ({hex}). Klik Layar penuh atau tekan F dan setiap piksel menampilkan warna yang sama, tanpa bilah atau gangguan. {tail}',
    features: ['{word} murni {hex} atau warna hex apa pun', 'Layar penuh sekali klik dengan pengaturan kecerahan', 'Unduh PNG gratis dari 720p hingga 8K'],
    benefits: ['Langsung bisa di ponsel, laptop, monitor, dan Smart TV', 'Tanpa aplikasi, tanpa daftar, tanpa instalasi'],
  },
  colors: {
    red: { subject: 'Layar merah', word: 'merah', tail: 'Hanya subpiksel merah yang menyala, jadi subpiksel hijau atau biru yang mati atau macet mudah terlihat. Juga bisa jadi lampu tidur merah yang menjaga penglihatan malam.', feature: 'Tombol panah berganti antara merah, hijau, dan biru', benefit: 'Menemukan subpiksel hijau atau biru macet dalam hitungan detik' },
    green: { subject: 'Layar hijau', word: 'hijau', tail: 'Kreator memakainya sebagai latar chroma key cepat, dan karena hanya subpiksel hijau yang menyala, subpiksel merah atau biru yang rusak terlihat saat tes piksel.', feature: 'Hijau chroma terang untuk OBS, Premiere, atau CapCut', benefit: 'Green screen gratis saat tidak punya kain hijau' },
    blue: { subject: 'Layar biru', word: 'biru', tail: 'Hanya subpiksel biru yang menyala untuk tes piksel, sekaligus bisa jadi latar chroma biru atau cahaya sejuk dan tenang untuk foto.', feature: 'Biru murni untuk tes subpiksel dan chroma biru', benefit: 'Mengecek kanal biru dan menampakkan piksel macet' },
    yellow: { subject: 'Layar kuning', word: 'kuning', tail: 'Kuning menyalakan subpiksel merah dan hijau bersamaan, jadi subpiksel biru yang mati atau area dengan rona aneh terlihat jelas. Juga cahaya hangat dan ceria untuk foto.', feature: 'Kuning tepat dengan merah dan hijau penuh', benefit: 'Menemukan subpiksel biru mati dan rona tidak rata' },
    orange: { subject: 'Layar oranye', word: 'oranye', tail: 'Nadanya yang hangat memiliki lebih sedikit cahaya biru dibanding putih, jadi banyak orang memakainya sebagai lampu tidur lembut, suasana senja, atau cahaya pengisi hangat untuk video.', feature: 'Pengaturan kecerahan untuk lampu tidur hangat yang redup', benefit: 'Cahaya hangat dengan jauh lebih sedikit biru dari layar putih' },
    pink: { subject: 'Layar merah muda', word: 'merah muda', tail: 'Merah muda terang memberi cahaya lembut yang menawan untuk selfie dan rias wajah, serta menciptakan suasana untuk pesta, siaran, dan kamar.', feature: 'Merah muda terang bawaan, dengan nuansa lebih muda atau tua', benefit: 'Cahaya lembut dan menawan untuk selfie dan rias wajah' },
    purple: { subject: 'Layar ungu', word: 'ungu', tail: 'Ungu memadukan cahaya merah dan biru: lampu suasana yang mencolok untuk siaran, setup gaming, dan pesta, sekaligus cara cepat memastikan kanal hijau benar-benar mati.', feature: 'Ungu cerah dengan nuansa lavender hingga violet', benefit: 'Lampu suasana instan untuk siaran dan pesta' },
    cyan: { subject: 'Layar cyan', word: 'cyan', tail: 'Cyan menyalakan hijau dan biru bersamaan, jadi subpiksel merah yang macet atau kanal yang hilang mudah terlihat. Juga cahaya aksen yang sejuk dan tajam.', feature: 'Cyan murni untuk mengecek kanal hijau dan biru', benefit: 'Menampakkan subpiksel merah rusak dan rona warna' },
    magenta: { subject: 'Layar magenta', word: 'magenta', tail: 'Magenta menyalakan merah dan biru dengan hijau tetap mati, jadi subpiksel hijau yang macet dan rona kehijauan langsung terlihat saat tes layar.', feature: 'Magenta murni untuk kanal merah dan biru', benefit: 'Menampakkan subpiksel hijau macet dan rona kehijauan' },
    gray: { subject: 'Layar abu-abu', word: 'abu-abu', tail: 'Abu-abu sedang adalah cara standar untuk melihat efek layar kotor, clouding, vignetting, dan banding warna yang tersembunyi oleh warna terang.', feature: 'Ganti antara abu-abu terang, sedang, dan gelap', benefit: 'Menampakkan masalah keseragaman dan efek layar kotor' },
  },
}
