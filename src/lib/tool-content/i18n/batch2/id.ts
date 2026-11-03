import type { ToolTranslations } from '../types'

export const id: ToolTranslations = {
  'monitor-test': {
    glance: {
      answer:
        'Tes monitor adalah serangkaian pola uji layar penuh untuk memeriksa seberapa baik layar Anda menampilkan warna, kontras, ketajaman, dan gamma. Telusuri gradasi, level hitam dan putih, ketajaman teks, serta pola geometri untuk menemukan masalah atau mengatur gambar dengan tepat.',
      features: ['Pola gradasi, gamma, kontras, dan ketajaman', 'Tingkatan level hitam dan putih', 'Cek geometri dan kejelasan teks', 'Pintasan keyboard untuk semua pola'],
      benefits: ['Atur kecerahan, kontras, dan ketajaman dengan benar', 'Cek monitor baru atau bekas dalam hitungan menit', 'Berjalan di browser apa pun, termasuk di TV'],
    },
    steps: [
      'Atur monitor ke resolusi bawaannya dan kembalikan zoom browser (Ctrl/Cmd + 0).',
      'Tekan F untuk layar penuh, lalu ganti pola dengan tombol atau tombol panah.',
      'Cari garis-garis pada gradasi, garis lurus pada grid, serta ketajaman atau moiré pada pola halus.',
      'Atur kecerahan, kontras, dan ketajaman monitor sambil melihat setiap pola.',
    ],
    useCases: [
      { title: 'Pengaturan awal', description: 'Atur kecerahan, kontras, dan ketajaman setelah membuka kotak monitor.' },
      { title: 'Cek banding', description: 'Gradasi halus menampakkan patahan warna akibat kedalaman warna rendah.' },
      { title: 'Geometri dan skala', description: 'Grid menunjukkan gambar yang melar, terpotong, atau buram.' },
      { title: 'Kabel dan input', description: 'Pola halus menunjukkan apakah kabel atau adaptor melembutkan gambar.' },
    ],
    faqs: [
      { question: 'Apakah tes monitor online sebaik alat kalibrasi?', answer: 'Tidak. Pola membantu menilai dan mengatur dengan mata, tetapi kalibrasi warna yang akurat butuh kolorimeter.' },
      {
        question: 'Kenapa pola halus berkedip atau menampilkan moiré?',
        answer: 'Zoom browser, skala sistem, atau resolusi non-bawaan mengubah ukuran pola 1 piksel. Gunakan zoom 100% dan resolusi bawaan.',
      },
      { question: 'Seperti apa seharusnya pola gamma?', answer: 'Dari jauh, area bergaris dan area polos seharusnya tampak sama terang. Perbedaan besar berarti gamma Anda jauh dari standar 2,2.' },
    ],
  },
  'screen-resolution-test': {
    glance: {
      answer:
        'Tes resolusi layar menampilkan resolusi layar Anda dalam piksel, beserta viewport browser, rasio piksel perangkat, dan kedalaman warna. Resolusi fisik adalah ukuran CSS dikali rasio piksel, jadi laptop 1920 × 1080 dengan skala 125% melaporkan 1536 × 864 piksel CSS.',
      features: ['Resolusi layar, jendela, dan fisik', 'Rasio piksel dan skala', 'Kedalaman warna dan orientasi', 'Diperbarui saat ukuran diubah atau perangkat diputar'],
      benefits: ['Pastikan Anda benar-benar memakai 1080p, 1440p, atau 4K', 'Cek skala Windows atau macOS', 'Instan, tanpa instalasi'],
    },
    steps: [
      'Buka halaman di layar yang ingin dicek: angkanya diperbarui langsung.',
      'Ubah ukuran jendela atau putar perangkat untuk melihat nilainya berubah.',
      'Tekan F untuk layar penuh agar melihat viewport penuh.',
      'Lihat pola 1 piksel: pada resolusi bawaan dan zoom 100% pola itu tampak abu-abu halus dan rata.',
    ],
    useCases: [
      { title: 'Mengetahui resolusi', description: 'Cepat temukan resolusi untuk memilih wallpaper atau pengaturan game.' },
      { title: 'Desain responsif', description: 'Developer bisa mengecek viewport dan rasio piksel di perangkat asli.' },
      { title: 'Masalah skala', description: 'Pastikan apakah skala sistem mengubah resolusi efektif.' },
      { title: 'Permintaan bantuan', description: 'Bagikan data layar yang akurat saat melaporkan bug situs.' },
    ],
    faqs: [
      {
        question: 'Kenapa ukuran layar lebih kecil dari resolusi monitor saya?',
        answer: 'Browser memakai piksel CSS. Dengan skala 150%, layar selebar 3840 piksel melaporkan 2560. Kalikan dengan rasio piksel untuk mendapat piksel fisik.',
      },
      { question: 'Apa itu rasio piksel perangkat?', answer: 'Jumlah piksel fisik per piksel CSS. Nilai 2 berarti layar berkepadatan tinggi, seperti Retina.' },
      { question: 'Apakah zoom browser mengubah nilainya?', answer: 'Ya. Zoom mengubah viewport dan rasio piksel. Kembalikan ke 100% untuk angka yang akurat.' },
    ],
  },
  'brown-noise-generator': {
    glance: {
      answer:
        'Generator brown noise memutar suara dalam dan bergemuruh yang kekuatannya turun tajam di frekuensi tinggi, seperti air terjun atau angin kencang. Lebih lembut dari white noise, sehingga banyak orang memilihnya untuk tidur, fokus bagi penderita ADHD, dan menutupi suara rendah seperti lalu lintas atau dengkuran.',
      features: ['Brown noise (Brownian) asli, dibuat langsung', 'Filter low-pass dan high-pass untuk nada', 'Pengaturan volume dan timer tidur', 'Pindah ke white atau pink noise sekali klik'],
      benefits: ['Suara lembut dan berat untuk sesi panjang', 'Populer untuk fokus dan kerja mendalam', 'Gratis, bisa offline setelah dimuat'],
    },
    steps: [
      'Tekan Mulai. Tidak ada suara sebelum Anda menekannya.',
      'Atur volume; brown noise terdengar lebih pelan dari white noise di level yang sama, jadi naikkan perlahan.',
      'Filter low-pass membuat gemuruh lebih dalam, high-pass menghilangkan bas terdalam di speaker kecil.',
      'Pilih timer tidur dan visual bila perlu.',
      'Tekan F atau Layar penuh untuk memenuhi layar, dan Esc untuk keluar.',
    ],
    useCases: [
      { title: 'Fokus mendalam', description: 'Banyak orang, termasuk penderita ADHD, merasa brown noise membantu mereka berkonsentrasi.' },
      { title: 'Tidur', description: 'Nadanya yang rendah dan lembut nyaman diputar berjam-jam.' },
      { title: 'Menutupi suara rendah', description: 'Menutupi gemuruh lalu lintas, langkah kaki, dan dengung AC.' },
      { title: 'Bersantai', description: 'Padukan dengan layar gelap di malam hari.' },
    ],
    faqs: [
      {
        question: 'Apa bedanya dengan white noise dan pink noise?',
        answer: 'Brown noise cepat kehilangan kekuatan saat frekuensi naik (sekitar 6 dB per oktaf), jadi paling berat dari ketiganya. Pink noise di tengah, white noise paling terang.',
      },
      { question: 'Kenapa disebut brown noise?', answer: 'Dinamai dari gerak Brown, gerakan acak partikel, bukan dari warna cokelat. Disebut juga red noise.' },
      { question: 'Kenapa hampir tidak terdengar di ponsel saya?', answer: 'Speaker kecil tidak bisa memutar bas dalam. Pakai headphone atau speaker lebih besar, atau aktifkan high-pass dan naikkan sedikit volume.' },
    ],
  },
  'pink-noise-generator': {
    glance: {
      answer:
        'Generator pink noise memutar suara yang kekuatannya turun merata di setiap oktaf, sehingga terdengar seimbang dan lebih lembut dari white noise, seperti hujan yang stabil. Dipakai untuk tidur, relaksasi, dan belajar, dan teknisi audio memakai pink noise untuk mengecek keseimbangan speaker.',
      features: ['Pink noise asli dibuat di browser Anda', 'Filter nada, volume dalam desibel, dan timer tidur', 'Gelombang atau spektrum langsung', 'Kontrol keyboard: spasi untuk putar atau jeda'],
      benefits: ['Suara alami seperti hujan, mudah untuk tidur', 'Sinyal acuan untuk mengecek speaker', 'Gratis dan sedikit iklan'],
    },
    steps: [
      'Tekan Mulai. Audio tidak pernah berbunyi sendiri.',
      'Atur volume dalam desibel.',
      'Gunakan filter low-pass atau high-pass dan slider batas untuk menyetel nada.',
      'Pilih timer tidur dan visual bila perlu.',
      'Tekan F atau Layar penuh untuk memenuhi layar, dan Esc untuk keluar.',
    ],
    useCases: [
      { title: 'Tidur', description: 'Alternatif populer yang tidak setajam white noise untuk semalaman.' },
      { title: 'Belajar', description: 'Suara latar yang seimbang untuk membaca lama.' },
      { title: 'Cek speaker', description: 'Pink noise adalah sinyal standar untuk mendengar keseimbangan speaker.' },
      { title: 'Ruang tenang', description: 'Suara latar lembut untuk ruang tunggu dan studio.' },
    ],
    faqs: [
      { question: 'Apa itu pink noise?', answer: 'Pink noise memiliki energi yang sama di setiap oktaf, jadi setiap langkah ke nada tinggi sedikit lebih pelan dibanding white noise. Terdengar lebih alami, seperti hujan.' },
      { question: 'Apakah pink noise baik untuk tidur?', answer: 'Banyak orang merasa rileks, dan beberapa studi kecil menunjukkan bisa mendukung tidur nyenyak, tetapi hasilnya berbeda pada tiap orang.' },
      { question: 'Bisakah dipakai untuk menguji speaker?', answer: 'Bisa untuk cek dengar cepat. Untuk mengukur ruangan dengan akurat, gunakan software pengukuran dan mikrofon terkalibrasi.' },
    ],
  },
  'broken-screen': {
    glance: {
      answer:
        'Prank layar retak memenuhi layar Anda dengan gambar kaca pecah yang realistis: titik benturan, retakan yang menyebar, dan bila mau noda tinta LCD, lengkap dengan suara kaca. Tinggalkan di ponsel atau komputer teman, lalu ungkap leluconnya dengan tombol tutup atau Esc.',
      features: ['Retakan kaca realistis, berbeda setiap kali', 'Ketuk atau klik untuk menambah benturan', 'Efek kerusakan LCD dan suara retak', 'Latar: wallpaper, layar kunci, atau hitam'],
      benefits: ['Prank klasik yang aman dan tampak nyata', 'Bisa di ponsel, tablet, dan PC', 'Tanpa aplikasi, tidak ada yang berubah di perangkat'],
    },
    steps: [
      'Pilih latar: wallpaper, layar kunci ponsel, atau hitam.',
      'Ketuk atau klik di mana saja untuk meretakkan kaca di titik itu. Setiap ketukan menambah benturan.',
      'Biarkan suara retak menyala agar lebih nyata, atau matikan.',
      'Tekan F atau Layar penuh untuk memenuhi layar, dan Esc untuk keluar.',
    ],
    useCases: [
      { title: 'Prank yang aman', description: 'Kejutan singkat untuk teman, lalu ungkap leluconnya.' },
      { title: 'Properti video', description: 'Tampilkan ponsel atau monitor pecah di film pendek tanpa merusak apa pun.' },
      { title: 'April Mop', description: 'Lelucon kantor klasik yang sepenuhnya bisa dibatalkan.' },
      { title: 'Referensi desain', description: 'Pelajari cara retakan menyebar untuk ilustrasi dan efek visual.' },
    ],
    faqs: [
      { question: 'Apakah ini bisa merusak layar saya?', answer: 'Tidak. Ini hanya gambar di browser. Tekan Esc, ketuk Hapus, atau tutup tab untuk menghilangkannya.' },
      {
        question: 'Kenapa terlihat seperti kaca asli?',
        answer: 'Benturan nyata meninggalkan pusat yang hancur, retakan panjang memancar, dan cincin retakan pendek di antaranya. Efek ini menggambar ketiganya, dengan kilau dan bayangan di tiap retakan.',
      },
      { question: 'Bagaimana prank dengan bertanggung jawab?', answer: 'Buat singkat, pilih orang yang akan tertawa, jangan pernah untuk mendapat uang atau data, dan segera ungkap leluconnya.' },
    ],
  },
  'countdown-timer': {
    glance: {
      answer:
        'Timer hitung mundur menghitung dari waktu yang Anda pilih sampai nol dengan angka besar layar penuh, lalu memberi tanda dengan kedipan lembut dan bunyi opsional. Atur jam, menit, dan detik untuk kelas, ujian, rapat, presentasi, olahraga, atau memasak, dan baca dari seberang ruangan.',
      features: ['Angka besar layar penuh', 'Jam, menit, dan detik dengan preset', 'Kedipan layar dan bunyi opsional saat nol', 'Tetap akurat di tab latar belakang'],
      benefits: ['Menjaga rapat dan kelas tepat waktu', 'Terbaca dari belakang ruangan', 'Gratis, tanpa aplikasi'],
    },
    steps: [
      'Pilih preset seperti 1, 5, atau 25 menit, atau ketik jam, menit, dan detik.',
      'Tekan Mulai atau spasi. Tekan spasi lagi untuk jeda, atau R untuk reset.',
      'Nyalakan bunyi jika mau: bawaannya mati.',
      'Tekan F untuk layar penuh agar seluruh ruangan bisa melihat. Tekan Esc untuk keluar.',
    ],
    useCases: [
      { title: 'Di kelas', description: 'Atur waktu ujian, kegiatan, dan istirahat di proyektor.' },
      { title: 'Presentasi', description: 'Jaga pembicara tetap tepat waktu dengan timer yang terlihat.' },
      { title: 'Pomodoro', description: 'Sesi fokus 25 menit dengan jeda singkat.' },
      { title: 'Olahraga dan memasak', description: 'Timer besar yang terbaca dari jauh.' },
    ],
    faqs: [
      { question: 'Apakah timer tetap jalan di tab latar belakang?', answer: 'Ya. Timer berdasarkan jam sebenarnya, jadi tetap akurat meski browser memperlambat tab latar belakang.' },
      { question: 'Apakah timer berbunyi?', answer: 'Hanya jika Anda menyalakan bunyi. Jika tidak, layar berkedip lembut saat waktu habis.' },
      { question: 'Berapa durasi maksimalnya?', answer: 'Hingga 99 jam, 59 menit, dan 59 detik.' },
    ],
  },
}
