import type { GuideTranslation } from './types'

export const id: Record<string, GuideTranslation> = {
  'dead-pixel-test': {
    slug: 'tes-piksel-mati',
    navLabel: 'Tes piksel mati',
    title: 'Tes piksel mati: cara menemukan piksel mati, macet, dan panas di layar apa pun',
    metaTitle: 'Tes piksel mati: temukan piksel mati dan macet',
    metaDescription:
      'Pelajari cara melakukan tes piksel mati di Windows, Mac, iPhone, dan Android. Temukan piksel mati, macet, dan panas dengan warna primer layar penuh, langkah demi langkah.',
    readingTime: '6 menit baca',
    category: 'Diagnosis layar',
    intro:
      'Setiap panel modern—LCD, IPS, VA, atau OLED—terdiri dari jutaan subpiksel merah, hijau, dan biru yang sangat kecil dan dikendalikan oleh mikrotransistor. Saat sebuah transistor rusak atau macet, muncul cacat yang mengganggu saat membaca, mengedit foto, dan bermain game. Menguji layar dengan warna primer layar penuh adalah cara tercepat dan paling andal untuk menemukan cacat piksel selama masa pengembalian atau sebelum garansi habis.',
    toolLabel: 'Buka tes piksel mati',
    toolDescription: 'Ganti layar merah, hijau, biru, hitam, dan putih dalam layar penuh untuk menemukan kelainan.',
    sections: [
      {
        title: 'Piksel mati, macet, dan panas: cara membedakannya',
        content: [
          'Tidak semua cacat piksel terlihat atau berperilaku sama. Mengetahui jenisnya membantu Anda menilai apakah siklus perangkat lunak bisa melepaskannya atau panel perlu diganti lewat garansi.',
          'Piksel mati terjadi ketika transistor pengendalinya mati total. Pada layar LCD berlampu latar, piksel ini terlihat sebagai titik hitam permanen, apa pun warna di sekitarnya.',
          'Piksel macet terjadi ketika satu atau dua subpiksel (merah, hijau, atau biru) terus menyala sementara yang lain berfungsi normal. Piksel ini terlihat sebagai titik berwarna terang yang diam di atas latar gelap atau kontras.',
          'Piksel panas terjadi ketika ketiga subpiksel menyala penuh bersamaan, sehingga muncul titik putih permanen yang sangat mencolok di atas warna hitam dan konten gelap.',
        ],
        tips: [
          'Piksel mati adalah titik hitam yang terlihat di layar putih, merah, hijau, atau biru.',
          'Piksel macet adalah titik berwarna (merah, hijau, atau biru) yang terlihat di latar gelap.',
          'Piksel panas tampak sebagai titik putih permanen di latar gelap.',
        ],
      },
      {
        title: 'Langkah pertama yang penting: bersihkan dulu sebelum mendiagnosis',
        content: [
          'Banyak sekali "piksel mati" yang ternyata hanya debu mikroskopis, percikan bersin yang mengering, atau cipratan minyak kecil yang menempel di kaca.',
          'Sebelum menyimpulkan ada cacat perangkat keras, lap layar yang dimatikan dengan lembut memakai kain mikrofiber optik yang bersih dan kering. Jangan pernah mengerik dengan kuku karena bisa menggores filter polarisasi antisilau secara permanen.',
        ],
      },
      {
        title: 'Panduan tes langkah demi langkah untuk semua perangkat',
        content: ['Ikuti langkah berikut untuk menguji monitor, laptop, tablet, dan ponsel secara menyeluruh.'],
        steps: [
          'Buka tes piksel mati WhiteScreen.vip dan masuk ke layar penuh untuk menghilangkan bilah alamat, taskbar, dan elemen lain.',
          'Periksa layar putih lebih dulu: pindai panel perlahan dari kiri atas ke kanan bawah untuk mencari titik hitam yang diam (piksel mati).',
          'Ganti ke hitam: cari titik putih terang (piksel panas) atau titik berwarna (piksel macet).',
          'Ganti ke merah, hijau, dan biru murni: setiap warna primer menguji satu kanal subpiksel. Subpiksel yang rusak akan tampak sebagai titik lebih gelap atau berwarna lain.',
          'Di Windows atau macOS: atur kecerahan ke 80–100% dan lihat layar tegak lurus dari depan agar tidak terjadi difraksi optik.',
          'Di iPhone atau Android: pastikan tidak ada tepi peramban yang tersisa, atau simpan warna tes ke galeri dan buka dalam layar penuh.',
        ],
      },
      {
        title: 'Batas tes di peramban dan fakta tentang garansi',
        content: [
          'Alat tes berbasis peramban memberi diagnosis visual yang langsung dan akurat karena menyalakan setiap piksel pada saturasi 100% tanpa artefak kompresi video.',
          'Namun waspadalah terhadap situs yang mengklaim warna berkedip atau video berulang bisa memperbaiki piksel mati permanen. Latihan subpiksel yang cepat kadang bisa melepaskan transistor yang lambat, tetapi sirkuit yang putus atau transistor yang terbakar tidak bisa diperbaiki dengan perangkat lunak.',
          'Periksa klasifikasi cacat piksel dari produsen (ISO 9241-307 / ISO 13406-2). Sebagian besar garansi monitor mensyaratkan 3 sampai 5 subpiksel mati, atau setidaknya satu piksel mati di area tengah, sebelum memberi penggantian gratis.',
        ],
        checklist: [
          'Cocokkan jumlah cacat dengan kebijakan garansi produsen dalam masa pengembalian 14–30 hari.',
          'Ambil foto makro cacat dengan kamera ponsel sebagai bukti untuk layanan pelanggan.',
          'Tanyakan apakah toko menawarkan jaminan "nol piksel mati" pada masa awal pembelian.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Apakah tes di peramban bisa memperbaiki piksel mati?',
        answer:
          'Tidak. Jika transistor rusak atau terbakar, perangkat lunak tidak bisa memperbaikinya. Alat berkedip cepat kadang bisa melepaskan subpiksel macet, tetapi piksel mati permanen memerlukan penggantian panel.',
      },
      {
        question: 'Mengapa piksel macet kadang hilang sendiri?',
        answer:
          'Pada panel kristal cair, piksel macet sering disebabkan ketidakseimbangan muatan listrik atau tekanan fisik ringan. Saat layar menghangat atau mendingin, pemuaian dan siklus tegangan kadang mengembalikan orientasi kristal cair ke normal.',
      },
      {
        question: 'Bagaimana membedakan debu di layar dengan piksel mati?',
        answer:
          'Ubah sudut pandang dengan menggeser kepala sekitar 15 cm ke kiri atau kanan. Karena kaca memiliki ketebalan, debu di permukaan sedikit bergeser terhadap lapisan cahaya di bawahnya (efek paralaks), sedangkan piksel mati tetap terkunci di kisi piksel.',
      },
    ],
  },
  'screen-color-test': {
    slug: 'uji-warna-layar',
    navLabel: 'Uji warna layar',
    title: 'Uji warna layar: cara menilai akurasi dan keseimbangan warna monitor',
    metaTitle: 'Uji warna layar: cek akurasi dan keseimbangan',
    metaDescription:
      'Uji monitor Anda untuk rona warna, banding, pergeseran gamma, dan keseimbangan kontras. Panduan uji warna langkah demi langkah untuk PC, Mac, dan ponsel.',
    readingTime: '6 menit baca',
    category: 'Kalibrasi layar',
    intro:
      'Baik Anda mengedit foto, mengolah warna video, mendesain situs, atau menyamakan dua monitor di satu meja, reproduksi warna yang akurat sangat penting. Rona warna halus, kurva gamma yang tidak rata, dan banding bisa mendistorsi pekerjaan tanpa Anda sadari. Uji warna sistematis dengan bidang referensi layar penuh membantu menemukan rona, pergeseran titik putih, dan saturasi yang terpotong tanpa alat mahal.',
    toolLabel: 'Buka uji warna layar',
    toolDescription: 'Uji abu-abu netral, warna primer, dan keseimbangan saturasi di seluruh layar.',
    sections: [
      {
        title: 'Mengapa uji warna visual penting sebelum kalibrasi',
        content: [
          'Banyak monitor dikirim dari pabrik dengan rona biru berlebihan, hijau yang terlalu jenuh, dan hitam yang tertekan agar tampak mencolok di toko, bukan agar akurat.',
          'Sebelum membeli kolorimeter, uji visual terstruktur membantu mengetahui apakah layar Anda punya rona menyeluruh (misalnya hijau atau magenta di nada tengah), hitam yang tertekan, atau perubahan warna besar menurut sudut pandang.',
        ],
        tips: [
          'Biarkan monitor menyala minimal 30 menit sebelum menilai warna; suhu lampu latar berubah selama pemanasan.',
          'Matikan lampu ruangan yang memantulkan cahaya berwarna ke kaca layar.',
        ],
      },
      {
        title: 'Prosedur uji warna langkah demi langkah',
        content: ['Ikuti langkah verifikasi ini di Windows, macOS, dan meja kerja dengan beberapa monitor.'],
        steps: [
          'Matikan filter warna perangkat lunak: Night light di Windows, True Tone dan Night Shift di macOS, serta mode nyaman mata di ponsel.',
          'Buka uji warna WhiteScreen.vip dalam layar penuh dan pilih abu-abu netral 50%.',
          'Nilai abu-abunya: abu-abu netral murni tidak boleh tampak kemerahan, kehijauan, atau kebiruan. Rona apa pun menandakan titik putih bergeser.',
          'Ganti ke merah, hijau, dan biru: pastikan warna tampak seragam dari sudut ke sudut, tanpa menggelap atau berubah rona di tepi.',
          'Periksa warna sekunder (sian, magenta, kuning): warna ini memakai beberapa kanal sekaligus dan memperlihatkan ketidakseimbangan.',
          'Periksa beberapa monitor: seret jendela peramban melewati batas dua layar untuk melihat perbedaan titik putih.',
        ],
      },
      {
        title: 'Mendeteksi banding warna dan batas kedalaman bit',
        content: [
          'Layar 8-bit standar menampilkan 16,7 juta warna, sedangkan panel 10-bit modern (8-bit + FRC atau 10-bit asli) lebih dari 1 miliar gradasi. Jika monitor atau driver menangani gradasi dengan buruk, gradien halus berubah menjadi undakan yang terlihat (banding).',
          'Amati transisi gradien di halaman uji monitor kami. Jika tampak berundak atau ada lingkaran warna palsu, pastikan panel kontrol kartu grafis (NVIDIA, AMD Radeon, atau Intel) memakai rentang RGB penuh (0–255), bukan rentang video terbatas (16–235).',
        ],
        checklist: [
          'Atur Output Dynamic Range ke "Penuh" (0–255) di pengaturan GPU.',
          'Pilih mode sRGB atau D65 di menu monitor (OSD) untuk akurasi web standar.',
          'Samakan refresh rate dan kedalaman warna pada pengaturan dua monitor.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Mengapa layar putih saya tampak sedikit kuning dibanding ponsel?',
        answer:
          'Ponsel sering memakai titik putih dingin 7000–7500 K, sehingga monitor yang dikalibrasi ke 6500 K (D65) terlihat hangat atau kekuningan di sebelahnya. D65 adalah suhu warna standar untuk web dan video.',
      },
      {
        question: 'Apa beda mode warna sRGB dan DCI-P3?',
        answer:
          'sRGB adalah ruang warna standar untuk konten web dan pekerjaan kantor. DCI-P3 mencakup spektrum sekitar 25% lebih luas dan dipakai untuk sinema HDR serta layar ponsel modern. Untuk pekerjaan web, mengunci monitor ke sRGB mencegah warna terlalu jenuh.',
      },
    ],
  },
  'screen-uniformity-test': {
    slug: 'uji-keseragaman-layar',
    navLabel: 'Keseragaman layar',
    title: 'Uji keseragaman layar: cara memeriksa kebocoran cahaya, IPS glow, dan clouding',
    metaTitle: 'Uji keseragaman: kebocoran cahaya dan IPS glow',
    metaDescription:
      'Periksa monitor Anda untuk kebocoran cahaya, IPS glow, clouding, vinyet, dan efek layar kotor (DSE) dengan layar uji abu-abu dan hitam.',
    readingTime: '6 menit baca',
    category: 'Diagnosis layar',
    intro:
      'Tidak ada layar datar yang menyebarkan kecerahan dengan sempurna di seluruh permukaannya. Namun kebocoran cahaya yang parah, IPS glow berlebihan, sudut yang gelap, atau "efek layar kotor" (DSE) yang belang bisa merusak adegan film gelap dan menimbulkan bayangan mengganggu saat membuka situs berlatar terang. Uji keseragaman yang terstruktur dengan pencahayaan terkendali membantu menemukan cacat panel dan memastikan apakah masih dalam toleransi pabrik.',
    toolLabel: 'Buka uji keseragaman',
    toolDescription: 'Periksa bidang abu-abu gelap 5%, abu-abu 50%, hitam, dan putih dengan kisi opsional.',
    sections: [
      {
        title: 'Kebocoran cahaya, IPS glow, dan clouding: perbedaan pentingnya',
        content: [
          'Sebelum mengembalikan monitor, penting untuk membedakan cacat produksi yang nyata dari karakteristik bawaan teknologi panel.',
          'Kebocoran cahaya (backlight bleed) adalah cacat perakitan: panel terjepit atau tidak duduk dengan benar di bingkai sehingga cahaya LED keluar dari tepi. Tampak sebagai sorotan kekuningan atau putih yang diam di tepi dan tidak berubah dari mana pun Anda melihat.',
          'IPS glow adalah sifat optik alami semua panel IPS. Karena kristal IPS tidak bisa sepenuhnya menahan cahaya dari samping, muncul kilau samar keemasan atau keperakan di sudut saat dilihat dari dekat. Jika Anda menggeser kepala atau mundur setengah meter, kilau ini bergeser dan berkurang.',
          'Clouding dan efek layar kotor (DSE) menggambarkan sebaran lampu latar yang tidak rata, sehingga muncul awan abu-abu belang saat menggeser gambar di bidang polos, seperti lapangan sepak bola atau langit di game.',
        ],
        tips: [
          'Kebocoran cahaya tetap di tempat dan kecerahan yang sama dari sudut mana pun.',
          'IPS glow berubah intensitas dan posisi saat Anda menggerakkan kepala ke kiri dan kanan.',
          'Efek layar kotor (DSE) paling mudah terlihat di layar abu-abu polos 20% atau 50%.',
        ],
      },
      {
        title: 'Cara menyiapkan lingkungan uji dengan benar',
        content: [
          'Menguji di kantor yang terang membuat kebocoran cahaya tersamar, sedangkan foto ponsel di ruang gelap dengan mode malam melebih-lebihkan glow sepuluh kali lipat.',
        ],
        steps: [
          'Redupkan lampu ruangan ke tingkat nyaman seperti malam hari (tidak gelap total).',
          'Matikan Dynamic Contrast, Black Equalizer, atau Local Dimming di menu monitor.',
          'Atur kecerahan ke tingkat kerja biasa Anda (sekitar 120–150 nit, biasanya 30–50% di menu).',
          'Buka layar hitam WhiteScreen.vip dalam layar penuh dan duduk pada jarak normal (minimal sepanjang lengan).',
          'Perhatikan sudut-sudutnya: jika ada berkas cahaya dari tepi yang tidak berubah saat kepala digerakkan, itu kebocoran cahaya.',
          'Beralih ke layar abu-abu 5% dan 50% kami untuk mencari efek layar kotor dan vinyet dari tengah ke tepi.',
        ],
      },
      {
        title: 'Cara praktis mengurangi masalah keseragaman',
        content: [
          'Jika layar Anda punya kebocoran cahaya atau IPS glow ringan yang tidak perlu dikembalikan, beberapa penyesuaian sederhana bisa sangat membantu.',
        ],
        checklist: [
          'Pasang bias lighting (lampu strip LED 6500 K di belakang monitor). Mata menyesuaikan diri dan warna hitam tampak jauh lebih pekat.',
          'Turunkan kecerahan: 100% di ruangan gelap memperjelas semua kekurangan lampu latar.',
          'Periksa sekrup dudukan VESA: sekrup yang terlalu kencang bisa membengkokkan rangka dan memicu kebocoran akibat tekanan.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Apakah kebocoran cahaya ditanggung garansi?',
        answer:
          'Produsen menganggap kebocoran ringan dan IPS glow sebagai variasi normal. Kebocoran parah yang menimbulkan bercak putih jelas saat bekerja biasa di siang hari umumnya bisa diganti lewat garansi.',
      },
      {
        question: 'Apakah layar OLED mengalami kebocoran cahaya?',
        answer:
          'Tidak. Subpiksel OLED memancarkan cahayanya sendiri dan tidak memakai lampu latar. Piksel hitam mati sepenuhnya, sehingga kontrasnya tak terbatas tanpa kebocoran cahaya maupun IPS glow.',
      },
    ],
  },
  'clean-laptop-screen': {
    slug: 'cara-membersihkan-layar-laptop',
    navLabel: 'Membersihkan layar laptop',
    title: 'Cara membersihkan layar laptop dengan aman tanpa goresan atau noda',
    metaTitle: 'Cara membersihkan layar laptop dengan aman',
    metaDescription:
      'Panduan aman langkah demi langkah untuk membersihkan layar laptop atau MacBook dengan pemeriksaan layar putih, kain mikrofiber, dan tanpa bahan kimia keras.',
    readingTime: '5 menit baca',
    category: 'Perawatan & kebersihan',
    intro:
      'Layar laptop, MacBook, dan monitor modern memiliki lapisan antisilau, film polarisasi, dan lapisan oleofobik yang sangat halus. Pembersih kaca rumah tangga, tisu dapur, atau tekanan berlebih bisa mengelupas lapisan ini secara permanen atau merusak kristal cair. Dengan layar putih layar penuh sebagai lampu pemeriksaan, Anda bisa melihat setiap noda, debu, dan bekas keyboard sebelum membersihkan dengan teknik yang benar.',
    warning:
      'PETUNJUK KESELAMATAN: selalu matikan dan cabut laptop atau monitor dari listrik sebelum memakai kain atau cairan. Jangan pernah menyemprotkan air atau cairan pembersih langsung ke layar, engsel, atau tepi. Cairan yang merembes ke tepi bawah bisa merusak lampu latar secara permanen.',
    toolLabel: 'Buka layar putih untuk pemeriksaan',
    toolDescription: 'Pakai cahaya putih layar penuh untuk melihat debu, sidik jari, dan noda sebelum membersihkan.',
    sections: [
      {
        title: 'Mengapa layar putih adalah alat pemeriksaan terbaik',
        content: [
          'Saat layar mati atau menampilkan latar gelap, minyak jari, bekas tombol keyboard, dan debu halus menyatu dengan warna hitam panel.',
          'Membuka WhiteScreen.vip dalam layar penuh menerangi panel dengan cahaya merata dan kontras tinggi. Debu dan noda minyak tampak sebagai siluet gelap di latar terang, sehingga Anda tahu persis bagian mana yang perlu dibersihkan.',
        ],
      },
      {
        title: 'Langkah membersihkan layar laptop dengan aman',
        content: ['Ikuti langkah yang disetujui produsen ini untuk layar laptop doff, layar glossy, dan layar Retina MacBook.'],
        steps: [
          'Periksa layar dengan WhiteScreen.vip dalam layar penuh dan kecerahan 100% untuk memetakan kotoran, minyak dari keyboard, dan bekas tetesan kering.',
          'Matikan laptop sepenuhnya dan lepaskan charger serta semua kabel USB. Tunggu 5 menit sampai layar dingin (pada layar hangat, kelembapan langsung menguap dan meninggalkan noda).',
          'Gunakan kain mikrofiber optik yang bersih dan rapat (seperti untuk kacamata dan lensa kamera). Jangan pernah memakai tisu dapur, tisu wajah, atau kaus.',
          'Usap layar dengan lembut memakai gerakan memutar atau mendatar yang saling menimpa. Biarkan serat kain mengangkat debu tanpa menekan panel.',
          'Untuk sidik jari berminyak yang membandel: basahi satu sudut kain dengan sedikit air suling. Kain harus hanya lembap, jangan sampai menetes.',
          'Usap noda dengan sudut yang lembap, lalu segera keringkan dengan bagian kain yang kering.',
          'Tunggu 3 menit sampai sisa kelembapan menguap sebelum menutup laptop atau menyalakannya.',
        ],
      },
      {
        title: 'Kesalahan umum yang merusak layar',
        content: ['Banyak trik membersihkan yang populer di internet justru merusak layar modern secara permanen.'],
        checklist: [
          'Jangan memakai pembersih kaca rumah tangga: amonia dan cuka mengikis lapisan antisilau.',
          'Jangan memakai aseton, penghapus kuteks, atau tiner: pelarut langsung merusak lapisan plastik dan bingkai.',
          'Jangan menyemprotkan cairan langsung ke layar: tetesan turun ke tepi bawah, tempat kabel fleksibel layar berada.',
          'Jangan memakai tisu dapur atau serbet: serat selulosa menimbulkan goresan mikro permanen.',
          'Jangan menekan keras dengan jari: tekanan berlebih meninggalkan bercak putih permanen di panel LCD.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Bolehkah memakai alkohol isopropil 70% di layar MacBook?',
        answer:
          'Apple mengizinkan tisu alkohol isopropil 70% untuk bagian luar dan permukaan kaca pada beberapa MacBook, dengan usapan lembut. Untuk perawatan sehari-hari, air suling pada kain mikrofiber jauh lebih aman dan tidak berisiko melarutkan lapisan antisilau.',
      },
      {
        question: 'Mengapa air suling, bukan air keran?',
        answer:
          'Air keran mengandung mineral terlarut seperti kalsium, magnesium, dan klorin. Saat menguap, air keran meninggalkan noda kapur yang bisa menggores film optik ketika diusap.',
      },
    ],
  },
  'oled-burn-in-prevention': {
    slug: 'mencegah-burn-in-oled',
    navLabel: 'Burn-in OLED',
    title: 'Mencegah burn-in OLED: cara menguji, mencegah, dan melindungi layar OLED',
    metaTitle: 'Panduan mencegah dan menguji burn-in OLED',
    metaDescription:
      'Pahami beda burn-in OLED dan retensi gambar sementara. Uji monitor atau TV OLED dengan layar warna dan ikuti tips praktis untuk memperpanjang umurnya.',
    readingTime: '7 menit baca',
    category: 'Perawatan layar',
    intro:
      'Monitor OLED dan QD-OLED menawarkan kontras tak tertandingi, hitam pekat, dan waktu respons hampir instan. Namun karena setiap subpiksel adalah dioda organik yang perlahan aus seiring cahaya yang dipancarkan, elemen yang diam (taskbar Windows, bilah alamat, HUD game) bisa menyebabkan keausan tidak merata seiring waktu. Memahami cara burn-in terbentuk, cara mengujinya, dan cara mengatur sistem akan melindungi investasi Anda bertahun-tahun.',
    warning:
      'PERINGATAN JUJUR: waspadai alat yang menyesatkan. Tidak ada perangkat lunak, warna berkedip, atau video yang bisa membalikkan burn-in OLED permanen. Begitu subpiksel organik kehilangan kecerahannya, kerusakannya permanen. Alat kami membantu mendiagnosis dan mencegahnya sebelum tidak bisa dipulihkan.',
    toolLabel: 'Buka uji burn-in OLED',
    toolDescription: 'Ganti bidang merah, magenta, sian, dan abu-abu gelap untuk melihat bayangan samar elemen yang diam.',
    sections: [
      {
        title: 'Retensi gambar sementara vs burn-in permanen',
        content: [
          'Sangat penting memahami beda antara retensi gambar sementara dan burn-in permanen.',
          'Retensi gambar sementara adalah fenomena listrik: muatan sisa tertinggal di lapisan transistor setelah gambar kontras tinggi ditampilkan selama 15–30 menit. Bayangan samar jendela terlihat beberapa menit lalu hilang sendiri atau saat siklus penyegaran piksel otomatis.',
          'Burn-in permanen adalah keausan subpiksel yang menumpuk dan tidak merata. Jika subpiksel merah atau biru di area taskbar menyala maksimal selama ribuan jam, cahayanya jadi lebih lemah dari piksel di sekitarnya dan meninggalkan siluet gelap permanen yang terlihat di layar warna polos.',
        ],
        tips: [
          'Retensi sementara hilang dalam beberapa menit atau setelah penyegaran piksel singkat 5 menit.',
          'Burn-in permanen terlihat di layar merah, magenta, dan abu-abu 5% dan tidak pernah hilang.',
        ],
      },
      {
        title: 'Cara menguji layar OLED untuk burn-in',
        content: ['Ikuti langkah diagnosis ini dengan layar warna layar penuh kami untuk menemukan tanda awal keausan.'],
        steps: [
          'Buka WhiteScreen.vip dalam layar penuh untuk menghilangkan header peramban dan taskbar.',
          'Pilih merah polos: subpiksel merah aus lebih cepat daripada hijau. Periksa dengan teliti area taskbar, bilah alamat, dan sudut HUD untuk mencari bayangan gelap.',
          'Pilih magenta dan sian polos: warna campuran memperlihatkan perbedaan keausan antarkanal.',
          'Pilih abu-abu gelap 5% dan abu-abu 10%: abu-abu yang hampir hitam memperlihatkan pita vertikal dan keausan tidak merata yang tidak tampak di putih murni.',
          'Lihat dari jarak normal: jika ada garis tegas ikon desktop atau toolbar aplikasi, panel sudah mengalami burn-in permanen.',
        ],
      },
      {
        title: 'Panduan penting untuk mencegah burn-in OLED',
        content: [
          'Monitor OLED modern sudah dilengkapi perlindungan otomatis, tetapi kebiasaan sederhana di sistem operasi adalah pertahanan terbaik dari keausan dini.',
        ],
        checklist: [
          'Aktifkan "Sembunyikan taskbar secara otomatis" di Windows (atau sembunyikan Dock di macOS).',
          'Gunakan Mode Gelap di Windows, macOS, dan peramban: piksel hitam OLED tidak memakai daya dan tidak aus.',
          'Atur layar tidur setelah 3–5 menit tidak aktif agar desktop yang diam tidak terus menyala saat Anda pergi.',
          'Gunakan screensaver layar penuh seperti jam flip atau layar hitam kami saat meninggalkan meja.',
          'Jangan langsung mencabut monitor OLED setelah dimatikan; dalam mode siaga, monitor menjalankan siklus pembersihan piksel otomatis.',
          'Aktifkan fitur perlindungan panel di menu monitor: Pixel Shift, pembatas kecerahan logo, dan manajemen suhu.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Apakah latihan piksel berkedip bisa memperbaiki burn-in OLED?',
        answer:
          'Tidak. Layar berkedip tidak memulihkan material organik yang aus. Justru pola berkedip agresif pada kecerahan maksimal menambah beban panas yang tidak perlu pada panel.',
      },
      {
        question: 'Seberapa sering harus menjalankan penyegaran piksel mendalam?',
        answer:
          'Hanya saat diminta produsen (biasanya setiap 500 sampai 1.500 jam pemakaian) atau jika retensi gambar parah tidak hilang. Menjalankannya terlalu sering mempercepat keausan panel.',
      },
    ],
  },
  'monitor-test': {
    slug: 'uji-monitor',
    navLabel: 'Uji monitor',
    title: 'Panduan lengkap uji monitor: memeriksa cacat, warna, dan kecepatan layar baru',
    metaTitle: 'Panduan menguji monitor baru langkah demi langkah',
    metaDescription:
      'Panduan lengkap menguji monitor baru atau bekas: piksel mati, ketajaman, gamma, kontras, kebocoran cahaya, dan waktu respons.',
    readingTime: '6 menit baca',
    category: 'Diagnosis layar',
    intro:
      'Membuka kotak monitor baru memang menyenangkan, tetapi cacat pabrik seperti subpiksel mati, kebocoran cahaya berlebihan, warna tidak seragam, atau gamma yang salah sering lolos dari kontrol kualitas. Karena kebanyakan toko memberi masa pengembalian 14–30 hari, menjalankan tes menyeluruh 15 menit begitu monitor tiba adalah cara terbaik memastikan panel Anda sempurna.',
    toolLabel: 'Buka uji monitor lengkap',
    toolDescription: 'Pola uji lengkap: gradien, grafik gamma, kisi ketajaman, dan bar warna.',
    sections: [
      {
        title: 'Daftar periksa 6 langkah untuk monitor baru',
        content: ['Sebelum membuang kardus atau mendaftarkan garansi, jalankan evaluasi panel 6 tahap ini.'],
        steps: [
          '1. Fisik dan kabel: pastikan kabel DisplayPort atau HDMI mendukung resolusi asli, refresh rate (misalnya 144–240 Hz), dan warna 10-bit monitor.',
          '2. Piksel mati: buka layar putih, hitam, merah, hijau, dan biru dalam layar penuh lalu periksa setiap kuadran untuk subpiksel macet atau mati.',
          '3. Keseragaman dan kebocoran cahaya: di ruangan redup, periksa layar hitam untuk kebocoran di tepi dan layar abu-abu 50% untuk efek layar kotor.',
          '4. Gamma dan kontras: lihat pola gradasi abu-abu kami untuk memastikan langkah hampir hitam (1–5%) dan hampir putih (95–99%) tetap terlihat jelas.',
          '5. Ketajaman dan skala: periksa garis hitam-putih selang-seling 1 piksel untuk memastikan teks tajam tanpa pinggiran warna atau moiré.',
          '6. Kejernihan gerak dan ghosting: jalankan pola gerak untuk memeriksa waktu respons dan atur Overdrive agar tidak muncul ghosting terbalik.',
        ],
      },
      {
        title: 'Apa yang normal untuk tiap jenis panel',
        content: [
          'Mengenal teknologi panel mencegah Anda mengembalikan monitor karena karakteristik yang merupakan kompromi desain biasa.',
          'Panel IPS: unggul dalam akurasi warna dan sudut pandang lebar (178°). Kompromi normal: kontras lebih rendah (1.000:1) dan IPS glow ringan dari samping.',
          'Panel VA: kontras tinggi (3.000:1 sampai 5.000:1) dan hitam pekat. Kompromi normal: jejak gelap pada adegan cepat dan sudut pandang lebih sempit.',
          'Panel OLED / QD-OLED: kontras tak terbatas, hitam sejati, dan respons 0,03 ms. Kompromi normal: kemungkinan retensi gambar dan kecerahan layar penuh yang lebih rendah.',
          'Panel TN: layar esports lama dengan refresh rate tinggi. Kompromi normal: warna pucat dan perubahan warna vertikal besar saat dilihat sedikit dari atas atau bawah.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Sebaiknya menguji monitor dengan HDR aktif atau tidak?',
        answer:
          'Lakukan uji dasar warna dan keseragaman dengan HDR Windows dimatikan, karena HDR bisa menimbulkan kesalahan tone mapping pada layar tanpa local dimming. Setelah SDR dipastikan baik, aktifkan HDR untuk memeriksa kecerahan puncak dan zona dimming.',
      },
      {
        question: 'Apa itu Overdrive dan bagaimana mengaturnya?',
        answer:
          'Overdrive memberi tegangan ekstra pada subpiksel untuk mempercepat transisi dan mengurangi blur gerak. Jika terlalu tinggi, muncul "ghosting terbalik" (lingkaran terang di belakang objek bergerak). Pengaturan "Normal" atau "Fast" biasanya terbaik; "Extreme" hampir selalu berlebihan.',
      },
    ],
  },
  'white-screen-for-video-calls-and-zoom': {
    slug: 'layar-putih-untuk-panggilan-video',
    navLabel: 'Lampu untuk Zoom',
    title: 'Cara memakai layar putih sebagai cahaya lembut untuk panggilan video dan Zoom',
    metaTitle: 'Layar putih sebagai cahaya lembut untuk video call',
    metaDescription:
      'Ubah monitor atau laptop menjadi cahaya terang yang menawan, pengganti ring light, untuk Zoom, Google Meet, dan konferensi video tanpa membeli alat.',
    readingTime: '5 menit baca',
    category: 'Pencahayaan & visual',
    intro:
      'Video webcam yang bagus jauh lebih bergantung pada pencahayaan daripada kamera 4K yang mahal. Saat cahaya redup, sensor menaikkan penguatan digital (ISO) sehingga muncul noise dan bintik. Dengan membuka WhiteScreen.vip di monitor kedua atau di samping jendela panggilan, layar Anda langsung menjadi kotak cahaya besar yang lembut.',
    toolLabel: 'Buka lampu panggilan video',
    toolDescription: 'Cahaya putih lembut yang bisa diatur dari hangat ke dingin, khusus untuk menerangi webcam.',
    sections: [
      {
        title: 'Mengapa layar besar lebih baik dari ring light kecil',
        content: [
          'Dalam fotografi, makin besar sumber cahaya dibanding wajah, makin lembut dan menawan bayangannya. Ring light 25 cm menimbulkan pantulan keras di kacamata dan bayangan tajam di wajah.',
          'Monitor 24 atau 27 inci yang menampilkan layar putih menjadi sumber cahaya luas yang menerangi area mata, melembutkan kulit, dan menghasilkan pantulan alami di mata.',
        ],
      },
      {
        title: 'Cara menempatkan layar putih sebagai lampu',
        content: ['Dapatkan pencahayaan wajah yang lebih menawan dengan penyesuaian berikut.'],
        steps: [
          'Dengan dua monitor: tampilkan layar putih di monitor tepat di belakang atau di samping webcam.',
          'Dengan satu monitor: bagi layar dua. Letakkan Zoom atau Teams di satu sisi dan WhiteScreen.vip di sisi lain.',
          'Atur suhu warna: gunakan putih hangat (sekitar 5000–5500 K) untuk warna kulit yang menawan, atau putih siang (6500 K) jika ruangan mendapat sinar matahari.',
          'Atur kecerahan: 70–90% agar mata tidak menyipit.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Apakah membiarkan layar putih terbuka saat rapat panjang merusak monitor?',
        answer:
          'Pada panel LCD/LED, layar putih tidak menimbulkan kerusakan dan hampir tidak menambah keausan. Pada OLED, jaga kecerahan sedang (50–70%) untuk mengurangi panas.',
      },
    ],
  },
  'fullscreen-white-screen-for-drawing-and-tracing': {
    slug: 'layar-putih-untuk-menjiplak-dan-menggambar',
    navLabel: 'Menggambar & menjiplak',
    title: 'Cara memakai tablet atau monitor sebagai lightbox digital untuk menjiplak dan menggambar',
    metaTitle: 'Tablet atau monitor sebagai lightbox untuk menjiplak',
    metaDescription:
      'Pelajari cara mengubah iPad, tablet Android, atau laptop menjadi meja cahaya digital yang terang untuk menjiplak sketsa, kaligrafi, dan negatif film.',
    readingTime: '5 menit baca',
    category: 'Pencahayaan & visual',
    intro:
      'Meja cahaya dan kotak jiplak tradisional bisa berharga mahal dan memakan tempat di meja. Jika Anda sudah punya iPad, tablet Android, atau laptop, perangkat itu bisa diubah menjadi lightbox digital yang sangat terang dan bebas kedip dengan satu klik.',
    toolLabel: 'Buka layar putih sebagai lightbox',
    toolDescription: 'Cahaya putih layar penuh yang ideal untuk menjiplak di kertas, membuat stensil, dan melihat negatif.',
    sections: [
      {
        title: 'Cara menyiapkan menjiplak langkah demi langkah',
        content: ['Ikuti tips ini agar bisa menjiplak tanpa memicu sentuhan tak sengaja di layar sentuh.'],
        steps: [
          'Buka WhiteScreen.vip dalam layar penuh dan atur kecerahan perangkat ke 100%.',
          'Kunci sentuhan: di iPad, aktifkan Akses Terpandu (Pengaturan > Aksesibilitas > Akses Terpandu) agar layar tidak merespons sentuhan saat menggambar.',
          'Di Android: gunakan Sematkan layar atau aplikasi pengunci untuk mencegah sentuhan tidak sengaja.',
          'Letakkan gambar acuan di layar, lalu taruh selembar kertas kalkir atau kertas sketsa tipis (di bawah 90 gsm) di atasnya.',
          'Gunakan pensil lunak (2B sampai 4B) atau pena fineliner dengan tekanan ringan untuk menelusuri garis dengan mudah.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Apakah menggambar dengan pensil di atas layar bisa merusak kaca?',
        answer:
          'Kaca tablet (seperti Gorilla Glass) jauh lebih keras daripada grafit pensil dan tidak tergores dalam pemakaian normal. Namun hindari tekanan keras dan pastikan tidak ada pasir atau kotoran di bawah kertas.',
      },
    ],
  },
  'best-monitor-settings-for-eye-strain': {
    slug: 'pengaturan-monitor-untuk-mata-lelah',
    navLabel: 'Pengaturan untuk mata lelah',
    title: 'Pengaturan monitor terbaik untuk mata lelah, sakit kepala, dan membaca di malam hari',
    metaTitle: 'Pengaturan monitor terbaik untuk mata lelah',
    metaDescription:
      'Atur kecerahan, kontras, suhu warna, dan pencahayaan ruangan untuk menghilangkan kelelahan mata digital dan computer vision syndrome.',
    readingTime: '6 menit baca',
    category: 'Perawatan layar',
    intro:
      'Menatap monitor yang terlalu terang dan salah diatur selama 8 sampai 10 jam sehari menyebabkan computer vision syndrome: mata kering, pandangan kabur, sakit kepala tegang, dan leher kaku. Menyesuaikan kecerahan layar dengan cahaya ruangan adalah perbaikan ergonomis paling berdampak yang bisa Anda lakukan.',
    toolLabel: 'Buka layar putih',
    toolDescription: 'Bandingkan kecerahan layar dengan kertas di bawah cahaya ruangan untuk menemukan kecerahan yang nyaman.',
    sections: [
      {
        title: 'Penyesuaian monitor utama untuk kenyamanan mata',
        content: ['Terapkan ergonomi visual berbasis riset ini untuk langsung mengurangi kelelahan mata.'],
        steps: [
          'Samakan dengan kertas putih: pegang selembar kertas putih di samping monitor dan atur kecerahan sampai jendela putih layar penuh sama terangnya dengan kertas.',
          'Suhu warna: turunkan dari biru dingin 7500 K ke nada hangat 5000–6500 K.',
          'Hindari kedip PWM: pastikan monitor berlabel "Flicker-Free" (peredupan arus searah, bukan modulasi lebar pulsa frekuensi rendah).',
          'Ikuti aturan 20-20-20: setiap 20 menit, lihat benda sejauh 6 meter selama minimal 20 detik untuk mengendurkan otot mata.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Apakah mode gelap lebih baik untuk mencegah mata lelah daripada mode terang?',
        answer:
          'Di ruangan redup, mode gelap mengurangi total cahaya sehingga membantu mengurangi silau. Namun untuk membaca teks panjang di ruangan terang, teks hitam di latar putih yang lembut memberi kontras lebih tinggi dan membaca lebih cepat.',
      },
    ],
  },
  'common-monitor-display-problems-diagnostics': {
    slug: 'masalah-umum-monitor',
    navLabel: 'Diagnosis layar',
    title: 'Masalah umum monitor: cara mendiagnosis dan mengatasi gangguan layar',
    metaTitle: 'Masalah umum monitor dan cara mendiagnosisnya',
    metaDescription:
      'Panduan diagnosis masalah umum monitor: layar berkedip, banding warna, ghosting, piksel macet, dan teks buram, dengan langkah perbaikan cepat.',
    readingTime: '6 menit baca',
    category: 'Diagnosis layar',
    intro:
      'Dari kedipan mikro yang misterius sampai teks buram atau rona warna tiba-tiba, gangguan layar bisa berasal dari bug driver, kabel bermasalah, refresh rate yang salah, atau kerusakan panel. Panduan ini membantu Anda menemukan sumber setiap kelainan secara sistematis.',
    toolLabel: 'Buka uji monitor',
    toolDescription: 'Jalankan pola diagnosis untuk memisahkan cacat perangkat keras dari masalah kabel atau driver.',
    sections: [
      {
        title: 'Prosedur diagnosis gangguan layar',
        content: ['Ikuti urutan ini setiap kali layar menunjukkan kelainan visual.'],
        steps: [
          'Periksa kabel: kabel HDMI atau DisplayPort yang longgar atau tidak bersertifikat menyebabkan layar mati sesaat, percikan hijau, dan kedipan.',
          'Periksa resolusi asli dan refresh rate: menjalankan layar 4K pada 1080p tanpa penskalaan bulat membuat teks buram.',
          'Uji dengan perangkat lain: sambungkan laptop atau konsol ke input yang sama untuk mengetahui apakah masalah berasal dari GPU PC atau panel monitor.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Mengapa monitor saya kadang menjadi hitam selama 2 detik?',
        answer:
          'Layar mati singkat 1–2 detik hampir selalu disebabkan negosiasi ulang bandwidth kompresi DSC, gangguan elektromagnetik (misalnya kulkas atau kipas di dekatnya yang menyala), atau kabel HDMI/DP berkualitas rendah yang gagal pada refresh rate tinggi.',
      },
    ],
  },
}
