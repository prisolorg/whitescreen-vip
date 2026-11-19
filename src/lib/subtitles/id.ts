import type { LocalizedSubtitles } from './types'

/** Indonesian subtitles: one actionable line under each H1 (see src/lib/subtitles/en.ts for the English set). */
export const id: LocalizedSubtitles = {
  tools: {
    // Layar warna (termasuk halaman utama, yaitu layar putih)
    'white-screen': 'Jadikan layar Anda putih terang untuk penerangan, membersihkan, atau cek piksel mati.',
    'black-screen': 'Tampilkan hitam pekat untuk mencari piksel macet, kebocoran cahaya, atau menggelapkan layar.',
    'red-screen': 'Penuhi layar dengan merah untuk cek subpiksel merah atau sebagai lampu suasana.',
    'green-screen': 'Gunakan layar hijau terang sebagai latar chroma key atau untuk cek piksel.',
    'blue-screen': 'Penuhi layar dengan biru untuk chroma key atau cek subpiksel biru.',
    'yellow-screen': 'Jadikan layar kuning untuk cahaya hangat atau cek piksel merah dan hijau.',
    'orange-screen': 'Terangi ruangan dengan cahaya oranye hangat, atau pakai sebagai latar foto.',
    'pink-screen': 'Sinari wajah Anda dengan pink lembut untuk selfie, video call, atau suasana.',
    'purple-screen': 'Nyalakan cahaya ungu untuk suasana ruangan atau latar streaming.',
    'cyan-screen': 'Tampilkan sian untuk cek subpiksel hijau dan biru sekaligus.',
    'magenta-screen': 'Tampilkan magenta untuk cek subpiksel merah dan biru serta melihat semburat warna.',
    'gray-screen': 'Tampilkan abu-abu netral untuk melihat clouding, banding, dan efek layar kotor.',

    // Tes layar
    'dead-pixel-test': 'Ketuk untuk berganti 9 warna dan temukan piksel mati, macet, atau panas.',
    'screen-uniformity-test': 'Cek bidang abu-abu rata untuk melihat clouding, vignetting, dan kebocoran cahaya latar.',
    'monitor-test': 'Telusuri 7 pola uji untuk cek warna, gamma, dan ketajaman.',
    'oled-gray-test': 'Telusuri abu-abu hampir hitam untuk melihat banding dan mura pada OLED.',
    'oled-burn-in-test': 'Ganti warna solid untuk melihat burn-in dan retensi gambar pada OLED.',
    'screen-burn-in-test': 'Cek gambar bayangan, lalu jalankan perbaikan untuk menghilangkan retensi.',
    'touch-screen-test': 'Usap grid untuk menemukan zona mati dan hitung titik multi-sentuh.',
    'screen-refresh-rate-test': 'Lihat refresh rate layar Anda dalam Hz begitu halaman terbuka.',
    'monitor-ghosting-test': 'Naikkan kecepatan sampai jejak muncul untuk menilai ghosting dan overdrive.',
    'frame-rate-test': 'Bandingkan 15, 24, 30, dan 60 FPS dengan maksimum layar Anda secara berdampingan.',
    'screen-color-test': 'Telusuri bilah warna dan gradasi RGB untuk cek semburat dan banding.',
    'screen-resolution-test': 'Lihat resolusi layar dan rasio piksel Anda seketika, tanpa klik.',

    // Efek dan suara
    'no-signal-screen': 'Pilih bilah warna, memantul, atau biru, lalu tampilkan layar penuh di TV.',
    'white-noise-generator': 'Putar white noise yang stabil dan atur timer tidur untuk malam hari.',
    'brown-noise-generator': 'Putar brown noise yang dalam untuk fokus atau tidur, dengan timer tidur.',
    'pink-noise-generator': 'Putar pink noise seperti hujan dan atur dengan filter dan volume.',
    'broken-screen': 'Ketuk di mana saja untuk meretakkan kaca, lalu serahkan perangkatnya.',
    'hacker-typer': 'Tekan tombol apa saja dan lihat kode hacker ala film muncul.',
    'hacked-screen': 'Pilih merah atau hijau, masuk ke layar penuh, dan biarkan teman menemukannya.',
    'visual-noise': 'Penuhi layar dengan butiran piksel animasi dalam mono, warna, atau tint.',
    'color-cycle': 'Biarkan layar berganti melewati semua warna, atau ganti sendiri satu per satu.',
    'gradient-screen': 'Pilih warna dan sudut untuk membuat gradien layar penuh yang bergerak.',

    // Pencahayaan
    'zoom-lighting': 'Jadikan layar Anda lampu utama yang lembut untuk video call berikutnya.',
    'ring-light': 'Sinari wajah dengan cincin cahaya di layar; atur ukuran dan kehangatannya.',

    // Screensaver
    'matrix-screensaver': 'Jalankan hujan kode digital dan atur kecepatan, warna, serta karakternya.',
    'flip-clock-screensaver': 'Ubah layar cadangan mana pun menjadi jam flip besar yang berjalan.',
    'dvd-screensaver': 'Lihat logo DVD memantul dan tunggu saat logo tepat kena sudut.',
    'motivational-quote-screensaver': 'Tampilkan kutipan motivasi bergantian dengan huruf besar di layar cadangan.',

    // Timer dan utilitas
    'countdown-timer': 'Pilih preset atau atur waktu sendiri, lalu tekan Mulai.',
    'pomodoro-timer': 'Tekan Mulai untuk fokus 25 menit, lalu ambil jeda 5 menit.',
    stopwatch: 'Tekan Spasi untuk mulai menghitung dan L untuk mencatat lap.',

    // Layar palsu
    'fake-windows-10-update': 'Tampilkan update Windows 10 palsu dalam layar penuh untuk mengerjai teman.',
    'fake-windows-11-update': 'Tampilkan layar update Windows 11 yang gelap dalam layar penuh sebagai prank.',
    'fake-blue-screen-of-death': 'Tampilkan layar crash palsu dalam layar penuh, lalu ungkapkan leluconnya.',
    'fake-mac-update': 'Tampilkan update macOS palsu dengan bilah kemajuan tipis dalam layar penuh.',
    'fake-android-update': 'Buka di HP untuk menampilkan update sistem Android palsu.',
    'fake-windows-xp-update': 'Kembali ke era 2000-an dengan layar instalasi Windows XP palsu.',
    'fake-windows-xp-boot': 'Putar layar booting Windows XP klasik dalam layar penuh.',
    'fake-chrome-os-update': 'Tampilkan layar update Chromebook palsu dengan langkah status yang berganti.',
    'fake-ubuntu-update': 'Lihat log paket Ubuntu palsu bergulir di upgrade terminal.',
    'fake-zoom-meeting': 'Siapkan layar panggilan bergaya Zoom palsu untuk prank atau properti video.',
    'fake-teams-meeting': 'Tampilkan layar rapat bergaya Teams dengan kotak peserta.',
    'fake-google-meet': 'Tampilkan panggilan bergaya Meet dengan kotak peserta dan garis pembicara.',
    'fake-slack-huddle': 'Tampilkan huddle bergaya Slack dengan cincin pembicara dan timer langsung.',
    'fake-radar-screen': 'Jalankan sapuan radar fiksi ilmiah dengan titik sinyal untuk properti atau latar.',
  },
  backgrounds: {
    'white-background': 'Unduh latar belakang putih murni dalam 4K, ukuran HP, atau ukuran kustom.',
    'black-background': 'Dapatkan latar belakang hitam pekat sebagai PNG atau CSS, dalam ukuran apa pun.',
    'orange-background': 'Unduh latar belakang oranye hangat untuk HP atau desktop Anda.',
    'gradient-background': 'Unduh gradien halus ini sebagai PNG, atau salin sebagai CSS.',
    'neon-background': 'Simpan cahaya neon ini sebagai wallpaper 4K atau latar HP.',
    'red-background': 'Unduh latar belakang merah tegas dalam ukuran apa pun, atau salin CSS-nya.',
    'yellow-background': 'Unduh latar belakang kuning cerah untuk slide, HP, atau desktop.',
    'blue-background': 'Unduh latar belakang biru bersih sebagai PNG dalam 4K atau ukuran HP.',
    'green-screen-background': 'Tampilkan green screen ini dalam layar penuh sebagai chroma key, atau unduh.',
    'virtual-office': 'Unduh latar kantor virtual untuk video call berikutnya.',
    'graph-paper': 'Unduh kisi kertas grafik sebagai PNG, atau salin sebagai CSS.',
    'pink-background': 'Unduh latar belakang pink untuk HP, desktop, atau stories Anda.',
    'light-pink-background': 'Unduh latar belakang pink muda yang lembut dalam ukuran apa pun.',
    'green-background': 'Unduh latar belakang hijau segar sebagai PNG, atau salin CSS-nya.',
    'purple-background': 'Unduh latar belakang ungu pekat untuk HP atau desktop Anda.',
    'dark-background': 'Unduh latar belakang gelap yang nyaman di mata, dalam ukuran apa pun.',
    'gold-background': 'Unduh latar gradien emas untuk undangan, slide, atau HP.',
    'aesthetic-background': 'Unduh latar estetik yang lembut untuk HP atau desktop Anda.',
    'beige-background': 'Unduh latar belakang krem hangat sebagai PNG, atau salin CSS-nya.',
    'pastel-background': 'Unduh latar gradien pastel untuk HP, slide, atau postingan.',
  },
}
