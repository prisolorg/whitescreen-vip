import type { LanguageGuides } from './types'
import { DvdScreensaverGuideId } from '@/components/home/i18n/id/dvd-screensaver-guide'
import { BrokenScreenGuideId } from '@/components/home/i18n/id/broken-screen-guide'
import { FakeZoomMeetingGuideId } from '@/components/home/i18n/id/fake-zoom-meeting-guide'
import { FakeWindowsUpdateGuideId } from '@/components/home/i18n/id/fake-windows-update-guide'
import { FakeWindows11UpdateGuideId } from '@/components/home/i18n/id/fake-windows-11-update-guide'
import { FakeBsodGuideId } from '@/components/home/i18n/id/fake-bsod-guide'
import { FakeMacUpdateGuideId } from '@/components/home/i18n/id/fake-mac-update-guide'
import { PomodoroTimerGuideId } from '@/components/home/i18n/id/pomodoro-timer-guide'
import { FlipClockGuideId } from '@/components/home/i18n/id/flip-clock-guide'
import { ZoomLightingGuideId } from '@/components/home/i18n/id/zoom-lighting-guide'
import { CountdownTimerGuideId } from '@/components/home/i18n/id/countdown-timer-guide'
import { RingLightGuideId } from '@/components/home/i18n/id/ring-light-guide'
import { StopwatchGuideId } from '@/components/home/i18n/id/stopwatch-guide'
import { RefreshRateGuideId } from '@/components/home/i18n/id/refresh-rate-guide'
import { DeadPixelGuideId } from '@/components/home/i18n/id/dead-pixel-guide'
import { TouchScreenGuideId } from '@/components/home/i18n/id/touch-screen-guide'
import { MonitorGhostingGuideId } from '@/components/home/i18n/id/monitor-ghosting-guide'
import { MonitorTestGuideId } from '@/components/home/i18n/id/monitor-test-guide'
import { ScreenBurnInGuideId } from '@/components/home/i18n/id/screen-burn-in-guide'
import { ScreenResolutionGuideId } from '@/components/home/i18n/id/screen-resolution-guide'
import { ScreenColorGuideId } from '@/components/home/i18n/id/screen-color-guide'
import { FrameRateGuideId } from '@/components/home/i18n/id/frame-rate-guide'
import { OledGrayGuideId } from '@/components/home/i18n/id/oled-gray-guide'
import { HackedScreenGuideId } from '@/components/home/i18n/id/hacked-screen-guide'
import { NoSignalGuideId } from '@/components/home/i18n/id/no-signal-guide'
import { WhiteScreenGuideId } from '@/components/home/i18n/id/white-screen-guide'
import { BlackScreenGuideId } from '@/components/home/i18n/id/black-screen-guide'
import { RedScreenGuideId } from '@/components/home/i18n/id/red-screen-guide'
import { GreenScreenGuideId } from '@/components/home/i18n/id/green-screen-guide'
import { BlueScreenGuideId } from '@/components/home/i18n/id/blue-screen-guide'
import { YellowScreenGuideId } from '@/components/home/i18n/id/yellow-screen-guide'
import { PinkScreenGuideId } from '@/components/home/i18n/id/pink-screen-guide'

/** Indonesian (Anda-form, Indonesian UI button names, Indonesian search terms). */
export const id: LanguageGuides = {
  tools: {
    'dvd-screensaver': {
      Guide: DvdScreensaverGuideId,
      faqs: [
        { question: 'Apakah ini logo DVD resmi?', answer: 'Bukan. Screensaver DVD menggambar logo bergaya DVD di browser Anda dan tidak berafiliasi dengan DVD Format/Logo Licensing Corporation, pemilik logo DVD Video.' },
        { question: 'Mengapa logo screensaver DVD berganti warna?', answer: 'Seperti screensaver pemutar DVD klasik, logo memilih warna baru setiap kali menyentuh tepi, dan tidak pernah memakai warna yang sama dua kali berturut-turut.' },
        { question: 'Bisakah screensaver DVD dipakai sebagai screensaver asli di Windows atau Mac?', answer: 'Alat ini berjalan di browser, bukan dipasang sebagai screensaver sistem. Buka dalam layar penuh saat komputer tidak dipakai; pengaturan screensaver dan tidur sistem Anda tetap berlaku.' },
      ],
    },
    'broken-screen': {
      Guide: BrokenScreenGuideId,
      faqs: [
        { question: 'Bisakah prank layar retak merusak layar saya?', answer: 'Tidak. Ini hanya gambar yang digambar di browser Anda. Tekan Esc atau tutup tab dan layar kembali normal.' },
        { question: 'Apakah prank layar retak berfungsi di Chromebook?', answer: 'Ya. Alat ini berjalan di browser modern apa pun, termasuk Chromebook, komputer Windows dan Mac, HP, tablet, dan browser smart TV. Tidak ada yang dipasang.' },
        { question: 'Bagaimana memakai prank layar retak secara bertanggung jawab?', answer: 'Jangan terlalu lama, pilih orang yang akan tertawa, jangan pernah memakainya untuk mendapatkan uang atau informasi, dan segera ungkapkan leluconnya.' },
      ],
    },
    'fake-zoom-meeting': {
      Guide: FakeZoomMeetingGuideId,
      faqs: [
        { question: 'Apakah rapat Zoom palsu ini terhubung ke Zoom?', answer: 'Tidak. Ini simulasi bergaya Zoom yang independen dan tidak berafiliasi dengan Zoom Video Communications. Tidak ada yang bisa bergabung, dan tidak ada yang dikirim ke mana pun.' },
        { question: 'Apakah rapat Zoom palsu memakai kamera saya?', answer: 'Hanya jika Anda menyalakan Aktifkan pratinjau kamera. Video Anda muncul di kotak Anda sendiri dan tidak pernah keluar dari perangkat; tidak ada yang direkam atau diunggah. Mikrofon tidak pernah dipakai.' },
        { question: 'Apakah rapat Zoom palsu punya suara?', answer: 'Tidak, rapatnya tanpa suara. Untuk video rapat palsu, tambahkan suara atau obrolan di editor video Anda.' },
      ],
    },
    'fake-windows-10-update': {
      Guide: FakeWindowsUpdateGuideId,
      faqs: [
        { question: 'Bisakah layar update Windows palsu merusak komputer saya?', answer: 'Tidak. Ini hanya halaman di browser Anda. Tidak ada yang dipasang atau diubah, dan menekan Esc atau menutup tab akan mengakhirinya.' },
        { question: 'Bisakah update Windows palsu dibuat terlihat macet?', answer: 'Bisa. Tekan Jeda dan persentase berhenti di tempatnya. Buka Lainnya untuk mengubah seberapa cepat persentase naik.' },
        { question: 'Apakah update Windows palsu berfungsi di Mac atau Chromebook?', answer: 'Ya. Alat ini berjalan di browser modern apa pun, jadi Anda juga bisa menampilkan update Windows palsu di Mac, Chromebook, atau tablet.' },
      ],
    },
    'fake-windows-11-update': {
      Guide: FakeWindows11UpdateGuideId,
      faqs: [
        { question: 'Apakah update Windows 11 palsu ini asli?', answer: 'Tidak. Ini halaman di browser Anda yang terlihat seperti layar update Windows 11. Tidak ada yang dipasang, dan Esc atau menutup tab akan mengakhirinya.' },
        { question: 'Berapa lama update Windows 11 palsu berlangsung?', answer: 'Tidak pernah selesai: persentase mulai lagi setelah 100%. Gunakan Jeda untuk menahannya di satu angka, atau buka Lainnya untuk mengubah kecepatan.' },
        { question: 'Bisakah update Windows 11 palsu dijalankan di Mac atau Chromebook?', answer: 'Ya. Alat ini berjalan di browser modern apa pun, jadi layar update Windows 11 juga berfungsi di Mac, Chromebook, tablet, dan HP.' },
      ],
    },
    'fake-blue-screen-of-death': {
      Guide: FakeBsodGuideId,
      faqs: [
        { question: 'Bisakah layar biru kematian palsu merusak komputer saya?', answer: 'Tidak. Ini gambar di browser Anda. Komputer tetap berjalan normal, dan menekan Esc atau menutup tab akan mengakhirinya.' },
        { question: 'Mengapa layar biru kematian sekarang berwarna hitam?', answer: 'Rilis Windows 11 terbaru menampilkan layar crash berwarna hitam, bukan biru. Pilih Hitam (baru) di menu Gaya untuk tampilan itu.' },
        { question: 'Bisakah kode stop di layar biru kematian diubah?', answer: 'Bisa. Buka Lainnya dan pilih kode stop, misalnya CRITICAL_PROCESS_DIED atau MEMORY_MANAGEMENT. Kode langsung berubah di layar.' },
      ],
    },
    'fake-mac-update': {
      Guide: FakeMacUpdateGuideId,
      faqs: [
        { question: 'Apakah update Mac palsu ini dibuat oleh Apple?', answer: 'Bukan. Ini simulasi independen dari layar update bergaya macOS dan tidak berafiliasi dengan Apple. Tidak ada yang dipasang atau diubah di Mac Anda.' },
        { question: 'Bisakah update Mac palsu dibuat berjam-jam?', answer: 'Atur Durasi pembaruan ke 120 menit di menu Lainnya. Saat bilah penuh, layar dimulai ulang dan update mulai lagi, jadi bisa berjalan selama yang Anda mau.' },
      ],
    },
    'pomodoro-timer': {
      Guide: PomodoroTimerGuideId,
      faqs: [
        { question: 'Apa itu timer Pomodoro?', answer: 'Timer Pomodoro membagi pekerjaan menjadi blok fokus, biasanya 25 menit, dengan jeda singkat setelah setiap blok dan jeda lebih panjang setelah empat blok. Timer ini mengikuti Teknik Pomodoro karya Francesco Cirillo.' },
        { question: 'Berapa lama satu pomodoro?', answer: 'Secara tradisional 25 menit fokus diikuti jeda 5 menit. Anda bisa mengubah keduanya, misalnya menjadi 50 dan 10 menit, di menu Lainnya.' },
        { question: 'Apakah timer Pomodoro berfungsi di HP?', answer: 'Ya. Buka di browser HP dan tekan Mulai. Biarkan tab tetap terbuka agar Anda mendengar bunyi saat sebuah fase berakhir.' },
        { question: 'Apakah timer Pomodoro ini gratis?', answer: 'Ya. Sepenuhnya gratis, tanpa daftar, tanpa aplikasi, dan tanpa iklan di dalam timernya.' },
      ],
    },
    'flip-clock-screensaver': {
      Guide: FlipClockGuideId,
      faqs: [
        { question: 'Apakah jam flip membuat layar tetap menyala?', answer: 'Ya, dalam layar penuh. Browser yang mendukung membiarkan layar tetap menyala selama dalam layar penuh, jadi jam ini bisa berjalan seharian sebagai jam meja.' },
        { question: 'Bisakah jam menampilkan format 12 jam?', answer: 'Bisa. Matikan Format 24 jam dan jam beralih ke format 12 jam dengan label AM atau PM.' },
        { question: 'Bisakah dipakai sebagai screensaver di Windows atau Mac?', answer: 'Jam ini berjalan di browser, bukan dipasang sebagai screensaver sistem. Buka dalam layar penuh di layar cadangan atau saat komputer tidak dipakai.' },
      ],
    },
    'zoom-lighting': {
      Guide: ZoomLightingGuideId,
      faqs: [
        { question: 'Bisakah pencahayaan ini dipakai di laptop yang sama dengan panggilan saya?', answer: 'Hasil terbaik didapat di layar kedua, tablet, atau HP yang diletakkan di belakang webcam, agar panggilan tetap terlihat. Di satu laptop saja, cahaya layar penuh akan menutupi jendela Zoom Anda.' },
        { question: 'Suhu warna apa yang terbaik untuk pencahayaan Zoom?', answer: 'Netral (4500 K) cocok untuk sebagian besar ruangan. Pilih Siang hari (6500 K) agar sesuai dengan cahaya jendela, atau Hangat (3000 K) untuk tampilan malam yang lebih lembut.' },
        { question: 'Apakah gratis?', answer: 'Ya. Gratis di browser apa pun, tanpa aplikasi atau daftar, dan berfungsi dengan Zoom, Teams, Google Meet, dan video call lainnya.' },
      ],
    },
    'countdown-timer': {
      Guide: CountdownTimerGuideId,
      faqs: [
        { question: 'Berapa lama waktu yang bisa dihitung mundur?', answer: 'Durasi apa pun hingga 99 jam, 59 menit, dan 59 detik. Pilih 1, 5, 10, 15, 25, 45, atau 60 menit dari menu Pengatur waktu, atau klik jam, menit, dan detik di layar lalu ketik waktu Anda sendiri, kemudian tekan Mulai.' },
        { question: 'Apakah ada bunyi saat waktu habis?', answer: 'Ya. Bunyi terdengar dan layar berkedip merah saat waktu habis. Matikan bunyi di menu Lainnya untuk hitung mundur tanpa suara.' },
        { question: 'Bisakah penghitung waktu mundur menghitung ke tanggal tertentu?', answer: 'Bisa. Pilih Hitung mundur ke tanggal di menu Pengatur waktu, pilih tanggal dan waktu, tambahkan nama acara jika mau, lalu tekan Mulai. Alat ini menampilkan sisa hari, jam, menit, dan detik, dan mengingat hitung mundur Anda di browser ini saat Anda kembali.' },
      ],
    },
    'ring-light': {
      Guide: RingLightGuideId,
      faqs: [
        { question: 'Bisakah layar menggantikan ring light sungguhan?', answer: 'Untuk video call, selfie, dan makeup, layar yang terang bekerja dengan sangat baik. Lampu LED sungguhan lebih terang dan lebih cocok untuk merekam di ruangan gelap atau dari jauh.' },
        { question: 'Apakah berfungsi di HP?', answer: 'Ya. Buka di HP atau tablet, naikkan kecerahan, dan ketuk dua kali untuk layar penuh, lalu arahkan layar ke wajah Anda.' },
        { question: 'Warna apa yang terbaik untuk makeup?', answer: 'Putih dengan kecerahan penuh, agar warna terlihat asli. Buka Lainnya untuk membuat putihnya lebih hangat atau lebih sejuk sesuai ruangan Anda.' },
      ],
    },
    stopwatch: {
      Guide: StopwatchGuideId,
      faqs: [
        { question: 'Seberapa akurat stopwatch ini?', answer: 'Stopwatch memakai jam presisi tinggi browser Anda dan menampilkan waktu hingga seperseratus detik. Jika tab berpindah ke latar belakang, waktunya tetap benar saat Anda kembali.' },
        { question: 'Apa saja pintasan keyboard-nya?', answer: 'Spasi untuk mulai dan jeda, L untuk mencatat lap, dan R untuk kembali ke nol.' },
        { question: 'Bisakah lap saya disimpan?', answer: 'Bisa. Tekan Salin lap untuk menyalin setiap lap beserta waktu antara dan total, lalu tempel ke spreadsheet, catatan, atau pesan.' },
      ],
    },
    'screen-refresh-rate-test': {
      Guide: RefreshRateGuideId,
      faqs: [
        { question: 'Seberapa akurat tes refresh rate ini?', answer: 'Sangat mendekati untuk sebagian besar layar. Tes ini mengukur ratusan frame dan membulatkan ke nilai umum terdekat. Tab yang sibuk, mode hemat baterai, atau komputer lambat bisa membuat hasilnya lebih rendah, jadi tutup aplikasi lain dan tekan Ukur lagi.' },
        { question: 'Mengapa monitor 144 Hz saya menunjukkan 60 Hz?', answer: 'Layar kemungkinan diatur ke 60 Hz. Pilih refresh rate yang lebih tinggi di pengaturan tampilan dan gunakan kabel serta port yang mendukungnya, seperti DisplayPort atau kabel HDMI berkecepatan tinggi.' },
        { question: 'Apakah tes refresh rate berfungsi di HP?', answer: 'Ya. Buka di browser HP. Matikan mode hemat daya terlebih dahulu, karena mode itu sering membatasi layar ke 60 Hz.' },
      ],
    },
    'dead-pixel-test': {
      Guide: DeadPixelGuideId,
      faqs: [
        { question: 'Berapa lama tes piksel mati berlangsung?', answer: 'Sekitar satu menit. Ganti semua 9 warna dalam layar penuh dan amati seluruh layar pada setiap warna.' },
        { question: 'Apakah satu piksel mati itu normal?', answer: 'Bisa terjadi, dan banyak produsen baru mengganti layar setelah jumlah piksel rusak tertentu. Cek kebijakan garansi monitor, laptop, atau HP Anda.' },
        { question: 'Apa bedanya piksel mati dan piksel macet?', answer: 'Piksel mati tidak pernah menyala dan terlihat hitam. Piksel macet tertahan di satu warna, seperti merah, hijau, atau biru, dan kadang bisa diperbaiki dengan warna yang berkedip di atasnya.' },
      ],
    },
    'touch-screen-test': {
      Guide: TouchScreenGuideId,
      faqs: [
        { question: 'Bagaimana cara tes layar sentuh untuk titik mati?', answer: 'Pilih Grid zona mati dan usap setiap kotak. Kotak yang tetap gelap setelah disentuh adalah titik mati.' },
        { question: 'Apakah tes layar sentuh berfungsi di iPhone?', answer: 'Ya. Tes ini berjalan di Safari dan browser iPhone lainnya, juga di HP Android, tablet, dan laptop layar sentuh.' },
        { question: 'Berapa titik sentuh yang seharusnya didukung HP saya?', answer: 'Sebagian besar HP dan tablet membaca 5 sampai 10 sekaligus. Gunakan Multi-sentuh dan perhatikan angka Maks. untuk melihat berapa yang didukung perangkat Anda.' },
      ],
    },
    'monitor-ghosting-test': {
      Guide: MonitorGhostingGuideId,
      faqs: [
        { question: 'Apakah setiap monitor mengalami sedikit ghosting?', answer: 'Sebagian besar monitor LCD menunjukkan sedikit ghosting pada kecepatan tinggi. Ini jadi masalah jika jejaknya panjang pada kecepatan normal atau muncul halo terang. Atur overdrive lalu jalankan tes ghosting monitor lagi.' },
        { question: 'Apakah ghosting sama dengan input lag?', answer: 'Tidak. Ghosting adalah jejak visual dari piksel yang lambat; input lag adalah jeda antara mouse atau controller dan layar. Tes ini hanya menunjukkan ghosting.' },
        { question: 'Apakah ini tes anti-ghosting untuk keyboard?', answer: 'Bukan. Anti-ghosting keyboard berkaitan dengan membaca banyak tombol yang ditekan bersamaan. Tes ghosting monitor ini memeriksa jejak gerakan di layar Anda.' },
      ],
    },
    'monitor-test': {
      Guide: MonitorTestGuideId,
      faqs: [
        { question: 'Apakah uji monitor ini gratis dan online?', answer: 'Ya. Uji ini berjalan di browser pada monitor, laptop, TV, atau HP apa pun, tanpa unduhan atau daftar.' },
        { question: 'Bagaimana cara menguji monitor baru?', answer: 'Jalankan pola uji monitor dalam layar penuh pada resolusi bawaan, lalu tes piksel mati dan uji keseragaman. Waktu terbaik melakukannya adalah selagi monitor masih bisa dikembalikan.' },
        { question: 'Bisakah uji monitor mengkalibrasi layar saya?', answer: 'Uji ini membantu Anda mengatur kecerahan, kontras, dan gamma dengan mata. Kalibrasi yang akurat membutuhkan kolorimeter perangkat keras atau alat kalibrasi sistem Anda.' },
      ],
    },
    'screen-burn-in-test': {
      Guide: ScreenBurnInGuideId,
      faqs: [
        { question: 'Berapa lama sampai layar mengalami burn-in?', answer: 'Biasanya ratusan atau ribuan jam menampilkan gambar statis yang sama, sering pada kecerahan tinggi. Retensi gambar pada LCD bisa muncul setelah beberapa jam tetapi memudar.' },
        { question: 'Berapa lama perbaikan burn-in sebaiknya dijalankan?', answer: 'Mulai dengan 10 sampai 30 menit, lalu jalankan tes burn-in layar lagi. Ulangi beberapa kali; jika tidak ada perubahan, burn-in kemungkinan permanen.' },
        { question: 'Apakah tes burn-in layar berfungsi di HP?', answer: 'Ya. Buka di browser HP, naikkan kecerahan, dan ketuk dua kali untuk layar penuh. Untuk HP OLED dan AMOLED, coba juga uji burn-in OLED.' },
      ],
    },
    'screen-resolution-test': {
      Guide: ScreenResolutionGuideId,
      faqs: [
        { question: 'Mengapa resolusi layar saya lebih rendah dari resolusi monitor?', answer: 'Karena penskalaan tampilan. Dengan penskalaan 150%, monitor 2560 × 1440 melaporkan 1707 × 960 ke browser. Nilai Piksel fisik mengalikannya dengan rasio piksel untuk menunjukkan jumlah yang sebenarnya.' },
        { question: 'Apakah uji resolusi layar akurat?', answer: 'Uji ini menunjukkan persis apa yang dilaporkan browser Anda. Biarkan zoom di 100% agar jumlah piksel fisik sesuai dengan layar Anda.' },
        { question: 'Berapa seharusnya resolusi saya?', answer: 'Resolusi bawaan monitor Anda, yang bertanda Recommended di pengaturan tampilan Windows. Resolusi lain bisa terlihat buram.' },
      ],
    },
    'screen-color-test': {
      Guide: ScreenColorGuideId,
      faqs: [
        { question: 'Apakah uji warna layar ini gratis?', answer: 'Ya. Uji ini berjalan di browser pada monitor, laptop, TV, atau HP apa pun, tanpa unduhan atau daftar.' },
        { question: 'Mengapa warna terlihat berbeda di HP dan monitor saya?', answer: 'Layar berbeda dalam jenis panel, mode warna, dan kalibrasi. Jalankan uji warna layar di keduanya dengan mode malam mati dan bandingkan Gradasi RGB.' },
        { question: 'Bisakah tes warna memperbaiki warna layar saya?', answer: 'Tidak, tes ini hanya menunjukkan masalah. Perbaiki semburat dengan suhu warna atau mode gambar layar, atau alat kalibrasi sistem Anda.' },
      ],
    },
    'frame-rate-test': {
      Guide: FrameRateGuideId,
      faqs: [
        { question: 'Mengapa tes FPS menunjukkan 60 di monitor 144 Hz saya?', answer: 'Monitor kemungkinan diatur ke 60 Hz, kabel tidak mendukung lebih, atau laptop sedang menghemat daya. Cek pengaturan tampilan dan jalankan tes FPS lagi.' },
        { question: 'Bisakah mata manusia melihat lebih dari 60 FPS?', answer: 'Bisa. Kebanyakan orang merasakan gerakan yang lebih mulus pada 120 FPS ke atas. Bandingkan jalur 60 FPS dengan jalur maks. di layar dengan refresh rate tinggi.' },
        { question: 'Apakah tes FPS berfungsi di HP?', answer: 'Ya. Buka di browser HP dan ketuk dua kali untuk layar penuh. HP dengan layar 90 atau 120 Hz menampilkan jalur maks. yang lebih mulus.' },
      ],
    },
    'oled-gray-test': {
      Guide: OledGrayGuideId,
      faqs: [
        { question: 'Apakah sedikit mura normal pada OLED?', answer: 'Ya. Bercak samar pada bidang 1% sampai 5% itu umum. Ini hanya menjadi masalah jika Anda melihatnya saat menonton film dan bermain game biasa.' },
        { question: 'Apakah uji abu-abu OLED berfungsi di layar LCD?', answer: 'Ya, tetapi LCD justru menunjukkan pendaran dan kebocoran lampu latar pada abu-abu gelap. Untuk layar tersebut, uji keseragaman layar lebih cocok.' },
        { question: 'Kecerahan berapa yang sebaiknya dipakai?', answer: 'Kecerahan sedang di ruangan gelap. Kecerahan yang sangat tinggi bisa menyembunyikan masalah warna hampir hitam, dan yang sangat rendah bisa melebih-lebihkannya.' },
      ],
    },
    'hacked-screen': {
      Guide: HackedScreenGuideId,
      faqs: [
        { question: 'Apakah prank layar diretas aman?', answer: 'Ya. Ini halaman web yang hanya menampilkan animasi. Tidak memasang apa pun dan tidak menyentuh file, webcam, atau jaringan.' },
        { question: 'Bagaimana cara menutup layar diretas?', answer: 'Tekan Esc untuk keluar dari layar penuh, lalu tutup tab.' },
        { question: 'Apakah berfungsi di HP?', answer: 'Ya. Buka di browser HP dan ketuk dua kali untuk layar penuh. Sirene perlu ketukan dulu, karena HP memblokir suara sampai Anda berinteraksi.' },
      ],
    },
    'no-signal-screen': {
      Guide: NoSignalGuideId,
      faqs: [
        { question: 'Bagaimana cara menampilkan layar tanpa sinyal di TV saya?', answer: 'Buka halaman ini di browser TV, atau cast atau sambungkan laptop, lalu tekan F atau ketuk Layar Penuh.' },
        { question: 'Bisakah teks TIDAK ADA SINYAL diubah?', answer: 'Bisa. Buka Lainnya untuk mengetik Pesan Anda sendiri (hingga 24 karakter) dan Nama input, seperti HDMI 2 atau AV.' },
        { question: 'Apa bunyi bip pada bilah warna TV?', answer: 'Nada uji 1 kHz yang stabil, yang diputar stasiun TV bersama bilah warna untuk menyelaraskan level audio. Nyalakan dengan tombol nada 1 kHz.' },
      ],
    },
  },
  colors: {
    white: {
      Guide: WhiteScreenGuideId,
      faqs: [
        { question: 'Bagaimana cara membuat layar saya putih sepenuhnya?', answer: 'Buka WhiteScreen.vip, pilih putih, dan aktifkan mode layar penuh jika didukung browser Anda.' },
        { question: 'Apakah layar putih berfungsi di HP saya?', answer: 'Ya. Anda bisa membuka alat ini di browser HP yang kompatibel. Perilaku layar penuh yang tersedia tergantung pada perangkat dan browser Anda.' },
        { question: 'Bisakah layar putih mendeteksi piksel mati?', answer: 'Latar putih bisa menampakkan piksel gelap, sedangkan latar hitam dan warna primer membantu menampakkan cacat piksel lain yang terlihat. Ini pemeriksaan visual, bukan diagnosis perangkat keras yang lengkap.' },
        { question: 'Mengapa layar saya terus mati?', answer: 'Timer tidur perangkat, pengaturan hemat baterai, atau batasan browser bisa mematikan layar. Cek pengaturan daya Anda dan gunakan fitur Biarkan layar tetap menyala jika situs dan browser mendukungnya.' },
        { question: 'Apakah layar putih terang aman untuk layar OLED?', answer: 'Hindari membiarkan gambar statis yang terang di layar OLED dalam waktu lama. Ikuti rekomendasi produsen soal kecerahan dan pemakaian layar. Tidak ada fitur browser yang bisa menjamin burn-in tidak akan terjadi.' },
        { question: 'Apakah WhiteScreen.vip gratis?', answer: 'WhiteScreen.vip sepenuhnya gratis dipakai online di browser Anda. Semua warna layar, tes, dan fitur unduh gambar bisa diakses tanpa registrasi, pembuatan akun, atau pemasangan software.' },
        { question: 'Apa bedanya layar putih kosong dan layar putih murni?', answer: 'Di sini keduanya sama: layar yang diisi putih murni (#FFFFFF) dan tidak ada yang lain. Pilih Hangat atau turunkan kecerahan jika Anda ingin tampilan off-white yang lebih lembut.' },
        { question: 'Bisakah layar putih dipakai untuk menjiplak?', answer: 'Bisa. Tablet atau monitor dengan kecerahan penuh berfungsi sebagai lightbox sederhana. Rekatkan kertas Anda dan jiplak dengan lembut tanpa menekan layar terlalu keras.' },
        { question: 'Apakah layar putih membantu membersihkan monitor?', answer: 'Layar putih membuat debu, sidik jari, dan noda mudah terlihat. Matikan layar sebelum mengelapnya, lalu buka layar putih lagi untuk mencari noda yang terlewat.' },
      ],
    },
    black: {
      Guide: BlackScreenGuideId,
      faqs: [
        { question: 'Apakah layar hitam menghemat baterai?', answer: 'Di HP, tablet, dan laptop OLED, ya: piksel hitam dimatikan. Di layar LCD lampu latar tetap menyala, jadi penghematannya sangat kecil. Menurunkan kecerahan lebih menghemat daya di LCD.' },
        { question: 'Apakah layar hitam membuat komputer saya tetap menyala?', answer: 'Ya, selama halaman terbuka dan Biarkan layar tetap menyala aktif, di browser yang mendukungnya. Pengaturan tidur normal Anda kembali saat halaman ditutup atau opsinya dimatikan.' },
        { question: 'Apakah layar hitam sama dengan mematikan monitor?', answer: 'Tidak. Monitor tetap menyala dan komputer tetap berjalan; layar hanya menampilkan hitam murni. Di OLED layar tampak mati karena pikselnya gelap, sedangkan LCD tetap menyalakan lampu latarnya.' },
        { question: 'Bisakah saya memasang layar utama atau layar kunci hitam di HP?', answer: 'Bisa. Pilih Ponsel di menu Unduh, atau ketik ukuran pas HP Anda di Ukuran khusus, lalu pasang sebagai wallpaper layar utama atau layar kunci.' },
        { question: 'Bagaimana cara membuat video layar hitam?', answer: 'Unduh PNG hitam 1080p atau 4K dan letakkan di timeline editor video Anda, lalu rentangkan sesuai durasi yang dibutuhkan.' },
        { question: 'Mana yang lebih baik untuk membersihkan monitor, hitam atau putih?', answer: 'Hitam menampakkan sidik jari, goresan, dan noda dengan jelas, terutama dengan cahaya dari samping. Untuk debu, [layar putih](/) lebih cocok. Matikan layar sebelum mengelapnya.' },
      ],
    },
    red: {
      Guide: RedScreenGuideId,
      faqs: [
        { question: 'Bisakah layar merah dipakai di iPhone atau HP Android?', answer: 'Bisa. Buka halaman ini di browser HP, ketuk ikon layar penuh, dan nyalakan Biarkan layar tetap menyala. Turunkan penggeser Kecerahan untuk lampu tidur yang redup.' },
        { question: 'Mengapa layar merah saya terlihat oranye?', answer: 'Biasanya mode warna layar atau filter malam yang hangat (Night Shift, Night Light) menggesernya. Matikan fitur tersebut dan gunakan mode standar atau sRGB, lalu cek lagi.' },
        { question: 'Bisakah layar merah dipakai sebagai safelight kamar gelap?', answer: 'Tidak. Merahnya tidak tersaring cukup sempit dan terlalu terang untuk film atau kertas foto. Gunakan safelight yang sesuai untuk bahan yang peka cahaya.' },
      ],
    },
    green: {
      Guide: GreenScreenGuideId,
      faqs: [
        { question: 'Apa itu green screen of death?', answer: 'Itu versi hijau dari layar biru kematian Windows, yang muncul saat build Windows Insider Preview crash. Konsol Xbox juga bisa tertahan di layar loading hijau. Ingin menampilkannya untuk iseng? Coba [layar biru kematian palsu](/fake-blue-screen-of-death).' },
        { question: 'Bisakah layar hijau dipakai di HP?', answer: 'Bisa, untuk benda kecil dan close-up. Buka halaman ini, naikkan kecerahan, masuk ke layar penuh, dan nyalakan Biarkan layar tetap menyala. Untuk apa pun yang lebih besar dari HP, gunakan kain hijau atau latar di editor Anda.' },
        { question: 'Apakah situs layar hijau ini menghapus latar belakang saya?', answer: 'Tidak. Halaman ini menampilkan hijau solid dan memungkinkan Anda mengunduh gambar hijau. Penghapusan latar dilakukan di aplikasi video atau streaming Anda, seperti OBS, CapCut, Zoom, atau Teams.' },
      ],
    },
    blue: {
      Guide: BlueScreenGuideId,
      faqs: [
        { question: 'Apakah layar biru ini sama dengan layar biru kematian Windows?', answer: 'Bukan. Ini layar warna biru polos untuk pencahayaan, pengujian, dan editing. Tidak menampilkan error dan tidak memengaruhi komputer Anda. Mencari layar error untuk prank? Coba [layar biru kematian palsu](/fake-blue-screen-of-death).' },
        { question: 'Bisakah layar biru dipakai di laptop, PC, atau HP?', answer: 'Bisa. Layar ini berjalan di browser modern apa pun. Ketuk dua kali untuk layar penuh, nyalakan Biarkan layar tetap menyala, dan gunakan penggeser Kecerahan untuk mengatur nuansanya.' },
        { question: 'Mengapa layar biru murni terlihat sangat gelap?', answer: 'Mata kita paling tidak peka terhadap biru, jadi biru murni tampak jauh lebih gelap daripada hijau atau merah pada kecerahan yang sama. Itu normal dan bukan kerusakan.' },
      ],
    },
    yellow: {
      Guide: YellowScreenGuideId,
      faqs: [
        { question: 'Apakah layar kuning lebih nyaman untuk mata?', answer: 'Kuning tidak mengandung cahaya biru, yang bagi banyak orang terasa lebih santai di malam hari. Kuning dengan kecerahan penuh tetap terang, jadi turunkan penggeser Kecerahan untuk cahaya hangat yang lebih lembut.' },
        { question: 'Bisakah layar kuning dibuat lebih hangat atau lebih lembut?', answer: 'Bisa. Pilih Hangat untuk kuning keemasan dan turunkan penggeser Kecerahan untuk cahaya yang lebih redup dan lembut.' },
        { question: 'Bisakah saya mengunduh gambar layar kuning?', answer: 'Bisa. Gunakan Unduh di bawah pratinjau untuk menyimpan PNG kuning dalam 1080p, 2K, 4K, atau ukuran HP, atau ukuran kustom hingga 8K.' },
      ],
    },
    pink: {
      Guide: PinkScreenGuideId,
      faqs: [
        { question: 'Apa kode warna pink ini?', answer: 'Kodenya #FF69B4 (RGB 255, 105, 180), yang sering disebut hot pink. Pilih Hangat untuk pink koral, Sejuk untuk pink mawar, atau turunkan penggeser Kecerahan untuk pink yang lebih tua.' },
        { question: 'Bisakah layar merah muda menyala selama 10 jam?', answer: 'Bisa. Nyalakan Biarkan layar tetap menyala dan layar tetap menyala selama halaman terbuka, di browser yang mendukungnya. Colokkan laptop atau HP ke listrik untuk sesi yang panjang.' },
        { question: 'Mengapa layar merah muda saya terlihat ungu?', answer: 'Layar Anda menonjolkan biru terlalu kuat. Pilih Hangat di bawah pratinjau, atau ubah layar ke suhu warna yang lebih hangat atau mode sRGB.' },
      ],
    },
  },
  glanceHeadings: {
    'white-screen': 'Apa itu layar putih?',
    'black-screen': 'Apa itu layar hitam?',
    'red-screen': 'Apa itu layar merah?',
    'green-screen': 'Apa itu layar hijau (green screen)?',
    'blue-screen': 'Apa itu layar biru?',
    'yellow-screen': 'Apa itu layar kuning?',
    'pink-screen': 'Apa itu layar merah muda?',
    'dvd-screensaver': 'Apa itu screensaver logo DVD?',
    'broken-screen': 'Apa itu efek layar retak?',
    'fake-zoom-meeting': 'Apa itu layar rapat Zoom palsu?',
    'fake-windows-10-update': 'Apa itu pembaruan palsu Windows 10?',
    'fake-windows-11-update': 'Apa itu pembaruan palsu Windows 11?',
    'fake-blue-screen-of-death': 'Apa itu layar biru kematian palsu?',
    'fake-mac-update': 'Apa itu pembaruan palsu Mac?',
    'pomodoro-timer': 'Apa itu timer Pomodoro?',
    'flip-clock-screensaver': 'Apa itu screensaver jam flip?',
    'zoom-lighting': 'Apa itu pencahayaan panggilan video?',
    'countdown-timer': 'Apa itu penghitung waktu mundur?',
    'ring-light': 'Apa itu ring light online?',
    stopwatch: 'Apa itu stopwatch layar penuh?',
    'screen-refresh-rate-test': 'Apa itu tes refresh rate layar?',
    'dead-pixel-test': 'Apa itu tes piksel mati?',
    'touch-screen-test': 'Apa itu tes layar sentuh?',
    'monitor-ghosting-test': 'Apa itu tes ghosting monitor?',
    'monitor-test': 'Apa itu uji monitor lengkap?',
    'screen-burn-in-test': 'Apa itu tes burn-in layar?',
    'screen-resolution-test': 'Apa itu uji resolusi layar?',
    'screen-color-test': 'Apa itu uji warna layar monitor?',
    'frame-rate-test': 'Apa itu tes frame rate?',
    'oled-gray-test': 'Apa itu uji abu-abu OLED?',
    'hacked-screen': 'Apa itu simulator layar diretas?',
    'no-signal-screen': 'Apa itu layar tanpa sinyal?',
  },
}
