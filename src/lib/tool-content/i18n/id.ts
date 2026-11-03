import type { ToolTranslations } from './types'

export const id: ToolTranslations = {
  'white-screen': {
    glance: {
      answer:
        'Layar putih mengisi seluruh layar Anda dengan putih murni (#FFFFFF). Klik Layar penuh atau tekan F dan setiap piksel menampilkan warna yang sama, tanpa bilah atau gangguan. Pada kecerahan maksimum, ini adalah cahaya paling terang yang bisa dihasilkan layar Anda: untuk penerangan panggilan video dan foto, membersihkan monitor, menjiplak gambar, dan mencari piksel mati.',
      features: [
        'Putih murni #FFFFFF atau warna hex apa pun',
        'Layar penuh sekali klik dengan pengaturan kecerahan',
        'Suhu warna dari 2700 K (hangat) hingga 9300 K (sejuk)',
        'Unduh PNG gratis dari 720p hingga 8K',
      ],
      benefits: [
        'Cahaya lembut instan untuk panggilan, selfie, dan menjiplak',
        'Bisa di ponsel, laptop, monitor, dan Smart TV',
        'Tanpa aplikasi, tanpa daftar, tanpa instalasi',
      ],
    },
  },
  'black-screen': {
    glance: {
      answer:
        'Layar hitam membuat seluruh layar Anda hitam pekat (#000000) dengan sekali klik. Di layar OLED piksel mati sepenuhnya, jadi ini cara tercepat untuk menyembunyikan isi layar, memeriksa kebocoran cahaya, atau menghemat daya.',
      features: [
        'Hitam murni #000000 atau warna kustom apa pun',
        'Layar penuh sekali klik dengan pengaturan kecerahan',
        'Menjaga layar tetap menyala di mode layar penuh',
        'Unduh PNG gratis dari 720p hingga 8K',
      ],
      benefits: ['Menampakkan kebocoran cahaya, IPS glow, dan piksel macet', 'Menghemat daya di layar OLED', 'Gratis, tanpa instalasi'],
    },
  },
  'dead-pixel-test': {
    glance: {
      answer:
        'Tes piksel mati mengisi layar dengan warna solid secara bergantian agar piksel yang rusak terlihat jelas. Piksel mati tetap hitam di semua warna, piksel macet tetap menyala satu warna, dan piksel panas tetap putih. Pemeriksaan lengkap hanya sekitar satu menit di monitor, laptop, TV, atau ponsel apa pun.',
      features: [
        'Bidang layar penuh putih, hitam, merah, hijau, biru, dan abu-abu',
        'Ganti otomatis atau dengan tombol panah',
        'Untuk panel LCD, IPS, VA, OLED, dan mini-LED',
        'Tips membedakan piksel mati, macet, dan panas',
      ],
      benefits: [
        'Temukan cacat sebelum masa pengembalian habis',
        'Periksa monitor atau ponsel bekas sebelum membayar',
        'Gratis, privat, tanpa instalasi',
      ],
    },
    steps: [
      'Bersihkan layar dulu agar debu tidak dikira piksel rusak.',
      'Tekan F untuk layar penuh, lalu gunakan tombol panah, klik layar, atau aktifkan ganti otomatis.',
      'Amati seluruh panel dengan teliti di setiap warna. Kaca pembesar atau zoom kamera ponsel membantu.',
      'Titik gelap pada warna terang menandakan piksel mati; titik terang atau berwarna pada hitam menandakan piksel macet atau panas.',
    ],
    useCases: [
      { title: 'Monitor baru', description: 'Periksa monitor, laptop, atau TV baru dalam masa pengembalian.' },
      { title: 'Membeli bekas', description: 'Cek ponsel atau laptop bekas sebelum membayar.' },
      { title: 'Bukti garansi', description: 'Foto cacat pada warna solid untuk klaim garansi.' },
      { title: 'Pemeriksaan rutin', description: 'Pastikan secara berkala tidak ada cacat baru.' },
    ],
    faqs: [
      {
        question: 'Apa beda piksel mati dan piksel macet?',
        answer:
          'Piksel mati tetap gelap di semua warna. Piksel macet tetap menyala satu warna, seperti titik merah di atas hitam. Piksel panas tetap putih. Piksel macet kadang bisa pulih; piksel mati hampir tidak pernah.',
      },
      {
        question: 'Apakah alat ini bisa memperbaiki piksel mati?',
        answer:
          'Tidak. Tes ini hanya membantu melihat cacat. Mengganti warna dengan cepat kadang disarankan untuk piksel macet, tetapi hasilnya tidak dijamin dan piksel mati adalah kerusakan perangkat keras.',
      },
      {
        question: 'Bagaimana cara melaporkan piksel mati?',
        answer:
          'Foto cacat dengan jelas pada warna yang paling memperlihatkannya, catat posisinya, lalu hubungi produsen atau toko dengan bukti pembelian.',
      },
    ],
  },
  'screen-refresh-rate-test': {
    glance: {
      answer:
        'Tes refresh rate mengukur berapa kali per detik layar Anda menggambar ulang gambar, dalam hertz (Hz). Tes ini menghitung frame browser dan menampilkan 60, 75, 120, 144, 165, atau 240 Hz, sehingga Anda bisa memastikan monitor refresh tinggi benar-benar berjalan pada kecepatannya.',
      features: [
        'Pengukuran Hz langsung dengan nilai standar terdekat',
        'Waktu frame rata-rata, minimum, dan maksimum',
        'Ukur ulang setelah mengubah pengaturan',
        'Untuk monitor, laptop, ponsel, dan tablet',
      ],
      benefits: [
        'Pastikan monitor 144 atau 240 Hz tidak tertahan di 60 Hz',
        'Cek kabel, port, dan pengaturan Windows atau macOS',
        'Hasil dalam hitungan detik, tanpa unduhan',
      ],
    },
    steps: [
      'Buka halaman dan tunggu satu atau dua detik sampai angkanya stabil.',
      'Baca nilai Hz dan nilai standar terdekat.',
      'Jika monitor refresh tinggi menunjukkan 60 Hz, cek pengaturan tampilan dan kabel, lalu tes lagi.',
      'Tekan F atau ketuk dua kali untuk layar penuh, dan Esc untuk keluar.',
    ],
    useCases: [
      { title: 'Monitor baru', description: 'Pastikan monitor 144 atau 240 Hz benar-benar berjalan pada kecepatan itu.' },
      { title: 'Kabel dan port', description: 'Kabel atau port HDMI lama bisa membatasi di 60 Hz.' },
      { title: 'Laptop dengan baterai', description: 'Banyak laptop turun ke 60 Hz saat tidak dicolokkan.' },
      { title: 'Ponsel dan tablet', description: 'Lihat apakah mode adaptif 90/120 Hz aktif.' },
    ],
    faqs: [
      {
        question: 'Kenapa monitor 144 Hz saya menunjukkan 60 Hz?',
        answer:
          'Refresh rate diatur di pengaturan tampilan sistem, dan kabel harus mendukungnya (DisplayPort atau HDMI 2.0 ke atas). Pastikan juga jendela browser ada di monitor yang benar.',
      },
      {
        question: 'Kenapa angkanya berubah-ubah?',
        answer:
          'Tab yang sibuk, penghemat daya, dan refresh variabel (FreeSync, G-Sync, ProMotion) mengubah waktu frame. Pengukuran memakai median frame terakhir untuk meratakannya.',
      },
      {
        question: 'Apakah refresh rate sama dengan FPS?',
        answer:
          'Tidak. Refresh rate adalah seberapa sering layar diperbarui; FPS adalah berapa frame baru yang dihasilkan game atau video. Anda hanya melihat frame sebanyak yang diizinkan refresh rate.',
      },
    ],
  },
  'touch-screen-test': {
    glance: {
      answer:
        'Tes layar sentuh memeriksa apakah setiap bagian layar sentuh Anda merespons. Ketuk setiap kotak pada grid untuk menemukan zona mati, gambar garis untuk melihat putus atau lompatan, dan letakkan beberapa jari sekaligus untuk melihat berapa titik sentuh yang didukung ponsel atau tablet Anda.',
      features: [
        'Grid yang menandai setiap kotak yang disentuh, dengan cakupan %',
        'Mode gambar untuk menemukan celah, lompatan, dan sentuhan hantu',
        'Mode multi-sentuh yang menghitung jari sekaligus',
        'Bisa dengan jari, stylus, dan mouse',
      ],
      benefits: ['Temukan zona mati setelah jatuh atau ganti layar', 'Tes ponsel atau tablet bekas sebelum membeli', 'Tanpa instal aplikasi'],
    },
    steps: [
      'Pilih grid zona mati dan geser jari perlahan di setiap kotak sampai cakupan mencapai 100%.',
      'Kotak yang tidak terisi meski dicoba berkali-kali menandakan zona mati.',
      'Pindah ke mode Gambar dan tarik garis perlahan; putus atau lompatan berarti sentuhan terlewat.',
      'Gunakan Multi-sentuh dan letakkan beberapa jari untuk melihat berapa yang terdeteksi sekaligus.',
    ],
    useCases: [
      { title: 'Area tidak responsif', description: 'Temukan persis di mana ponsel atau tablet mengabaikan sentuhan.' },
      { title: 'Setelah servis', description: 'Cek digitizer baru sebelum mengambil perangkat.' },
      { title: 'Membeli bekas', description: 'Tes seluruh permukaan dalam satu menit.' },
      { title: 'Sentuhan hantu', description: 'Perhatikan titik sentuh yang muncul tanpa jari.' },
    ],
    faqs: [
      {
        question: 'Berapa titik sentuh yang seharusnya didukung layar saya?',
        answer: 'Kebanyakan ponsel dan tablet mendeteksi 5–10 jari. Halaman ini menampilkan angka dari browser Anda dan jumlah terbanyak yang terlihat sekaligus.',
      },
      {
        question: 'Apakah bisa dengan mouse atau stylus?',
        answer: 'Bisa. Mouse dan pena juga digambar, jadi Anda bisa menguji stylus dengan cara yang sama.',
      },
      {
        question: 'Apa penyebab zona mati?',
        answer: 'Kaca retak, kabel digitizer rusak, kelembapan, atau pelindung layar dengan gelembung udara. Lepas dulu pelindungnya lalu tes lagi.',
      },
    ],
  },
  'white-noise-generator': {
    glance: {
      answer:
        'Generator white noise memutar desis stabil yang berisi semua frekuensi yang bisa didengar dengan kekuatan sama. Suara merata ini menutupi suara orang, lalu lintas, dan bunyi mendadak, sehingga dipakai untuk fokus, belajar, menenangkan bayi, dan tidur. Pakai volume rendah dan timer saat tidur.',
      features: [
        'White, pink, dan brown noise dalam satu pemutar',
        'Filter nada dan volume dalam desibel',
        'Timer tidur dengan pelan-pelan mengecil',
        'Visual opsional: semut TV atau gelombang',
      ],
      benefits: ['Menutupi gangguan di kantor dan rumah', 'Membantu banyak orang lebih cepat tidur', 'Gratis, tanpa batas, tanpa aplikasi'],
    },
    steps: [
      'Tekan Mulai. Tidak ada suara sebelum Anda menekannya, dan dimulai pada volume sedang.',
      'Tombol White, Pink, dan Brown membuka setiap generator; volume, filter, dan visual tetap sama.',
      'Filter low-pass melembutkan desis, high-pass menghilangkan dengung; atur frekuensi batasnya.',
      'Pilih visual (gelombang, semut TV, atau layar gelap) dan timer tidur bila perlu.',
      'Tekan F atau Layar penuh untuk memenuhi layar, dan Esc untuk keluar.',
    ],
    useCases: [
      { title: 'Tidur', description: 'Tutupi suara lalu lintas, tetangga, dan dengkuran dengan suara stabil.' },
      { title: 'Fokus', description: 'Redam obrolan dan suara rumah saat bekerja atau belajar.' },
      { title: 'Bayi', description: 'Banyak orang tua menenangkan bayi dengan white noise pelan. Jaga tetap pelan dan jauh dari tempat tidur bayi.' },
      { title: 'Semut TV retro', description: 'Ubah visual ke semut TV untuk video, properti, atau pesta bertema.' },
    ],
    faqs: [
      {
        question: 'Apa itu white noise?',
        answer: 'White noise memiliki kekuatan yang sama di semua frekuensi. Di telinga terdengar seperti desis terang yang merata, seperti radio atau TV yang tidak menangkap siaran.',
      },
      {
        question: 'Apa fungsi filter low-pass dan high-pass?',
        answer:
          'Low-pass mempertahankan frekuensi di bawah batas sehingga suara lebih berat dan lembut. High-pass mempertahankan yang di atasnya, menghilangkan dengung, dan terdengar lebih ringan.',
      },
      {
        question: 'Apakah memakai kuota data?',
        answer: 'Tidak. Suara dibuat di perangkat Anda dengan Web Audio API, tidak ada streaming, dan tetap berjalan offline setelah dimuat.',
      },
      {
        question: 'Apakah aman menonton semut TV?',
        answer: 'Kedipan cepat bisa membuat tidak nyaman dan memicu epilepsi fotosensitif. Jika Anda sensitif, pakai visual gelombang atau layar gelap.',
      },
    ],
  },
  'fake-blue-screen-of-death': {
    glance: {
      answer:
        'Layar biru kematian palsu (BSOD) meniru layar error Windows: wajah sedih, “PC Anda mengalami masalah”, kode stop, dan penghitung progres. Ini hanya tampilan: tidak ada yang rusak dan Anda keluar dengan Esc. Pilih Windows 10, Windows 11, layar hitam baru, atau XP klasik.',
      features: ['Gaya Windows 10, 11, hitam, dan XP klasik', 'Kode stop asli seperti CRITICAL_PROCESS_DIED', 'Persentase naik dan blok mirip QR', 'Layar penuh dengan kursor tersembunyi'],
      benefits: ['Prank komputer paling meyakinkan', 'Properti realistis untuk video dan tutorial', 'Sepenuhnya aman'],
    },
    steps: [
      'Pilih gaya: Windows 10, Windows 11, layar hitam baru, atau XP/7 klasik.',
      'Pilih kode stop dan berapa lama penghitung mencapai 100%.',
      'Ketuk dua kali atau tekan F untuk layar penuh. Kursor segera tersembunyi.',
      'Tekan Esc, atau gerakkan mouse lalu klik tutup, untuk keluar.',
    ],
    useCases: [
      { title: 'Prank di kantor', description: 'Tampilkan di layar rekan kerja beberapa detik, lalu ungkap leluconnya.' },
      { title: 'Video dan siaran', description: 'Tunjukkan crash di kamera tanpa membuat komputer sungguhan crash.' },
      { title: 'Pelatihan IT', description: 'Tunjukkan seperti apa stop error dan arti kodenya.' },
      { title: 'Film dan teater', description: 'Layar crash yang meyakinkan untuk sebuah adegan, di perangkat apa pun.' },
    ],
    faqs: [
      {
        question: 'Apa itu layar biru kematian?',
        answer:
          'Itu adalah error layar penuh yang ditampilkan Windows saat menemui masalah yang tidak bisa dipulihkan, seperti driver rusak atau kesalahan memori. Windows menampilkan kode stop, menyimpan informasi crash, lalu memulai ulang.',
      },
      {
        question: 'Apa arti kode stop?',
        answer:
          'Setiap kode menyebut jenis kegagalan: CRITICAL_PROCESS_DIED berarti proses sistem berhenti, IRQL_NOT_LESS_OR_EQUAL biasanya menunjuk ke driver, dan MEMORY_MANAGEMENT sering ke RAM. Di sini semuanya hanya teks.',
      },
      {
        question: 'Apakah ini bisa merusak komputer saya?',
        answer: 'Tidak. Ini hanya gambar di tab browser. Tidak membuat Windows crash, tidak mengubah pengaturan, dan tidak menginstal apa pun.',
      },
      {
        question: 'Kenapa layar crash yang baru berwarna hitam?',
        answer: 'Pada 2025 Microsoft mengganti layar biru di Windows 11 dengan layar hitam yang lebih sederhana. Pilih “Hitam (baru)” untuk tampilan itu.',
      },
      {
        question: 'Apakah ini terkait Microsoft?',
        answer: 'Tidak. Ini tiruan independen untuk hiburan, tidak berafiliasi atau disponsori Microsoft.',
      },
    ],
  },
  'pomodoro-timer': {
    glance: {
      answer:
        'Timer Pomodoro membagi pekerjaan menjadi sesi fokus 25 menit dengan jeda 5 menit, dan jeda panjang setiap empat sesi. Metode yang dibuat Francesco Cirillo pada akhir 1980-an ini membantu memulai tugas, mencegah kelelahan, dan menghitung blok fokus yang selesai.',
      features: ['Siklus 25/5 dengan jeda panjang', 'Durasi bisa diatur dan mulai otomatis', 'Bunyi dan hitung mundur di tab browser', 'Penghitung sesi dan cincin progres'],
      benefits: ['Kalahkan kebiasaan menunda dengan target pendek', 'Jeda mengurangi kelelahan', 'Gratis, tanpa akun'],
    },
    steps: [
      'Tekan Mulai untuk memulai sesi fokus 25 menit.',
      'Ubah durasi fokus dan jeda bila perlu (misalnya 50/10).',
      'Saat fase selesai terdengar bunyi dan fase berikutnya dimulai; matikan mulai otomatis untuk memulai sendiri.',
      'Gunakan Lewati untuk maju atau Reset untuk mengulang. Spasi untuk mulai dan jeda.',
      'Tekan F atau Layar penuh untuk memenuhi layar, dan Esc untuk keluar.',
    ],
    useCases: [
      { title: 'Belajar', description: 'Bagi materi menjadi blok pendek dan fokus dengan jeda sungguhan.' },
      { title: 'Kerja mendalam', description: 'Lindungi 25 menit dari email dan chat.' },
      { title: 'Di kelas', description: 'Tampilkan timer di proyektor untuk kerja dan jeda berwaktu.' },
      { title: 'Membangun kebiasaan', description: 'Hitung sesi untuk melihat total waktu fokus Anda.' },
    ],
    faqs: [
      {
        question: 'Apa itu teknik Pomodoro?',
        answer:
          'Metode manajemen waktu dari akhir 1980-an: bekerja dalam blok fokus (biasanya 25 menit), jeda singkat setelah setiap blok, dan jeda panjang setiap empat blok.',
      },
      {
        question: 'Apakah timer tetap jalan di tab latar belakang?',
        answer: 'Ya. Timer menghitung dengan jam sebenarnya, jadi tetap akurat meski browser memperlambat tab tersembunyi, dan judul tab menampilkan sisa waktu.',
      },
      {
        question: 'Bisakah saya mengubah durasinya?',
        answer: 'Bisa. Atur fokus, jeda pendek, dan jeda panjang dalam menit, serta berapa sesi sebelum jeda panjang.',
      },
    ],
  },
}
