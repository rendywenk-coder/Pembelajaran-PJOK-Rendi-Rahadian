// ===========================================
// FILE: assets/js/script-kelas-4.js
// Deskripsi: Logika Materi, Kuis, & Download untuk KELAS 4
// Perbaikan: Penomoran Soal Otomatis (Tidak Ganda)
// ===========================================

console.log("Script PJOK Kelas 4 (Fixed Numbering) Berhasil Dimuat!");

// 1. DATABASE SOAL KELAS 4 (CLEAN - TANPA NOMOR DI DEPAN SOAL)
const dbSoal = {
    // MATERI A: BOLA BESAR
    'a': [
        {t:'pg', q:"Menendang bola dengan punggung kaki biasanya untuk?", o:["A. Mengoper dekat","B. Shooting keras","C. Menahan bola","D. Menyundul"], a:"B. Shooting keras"},
        {t:'pg', q:"Passing bawah adalah teknik dasar permainan?", o:["A. Basket","B. Voli","C. Kasti","D. Sepak Bola"], a:"B. Voli"},
        {t:'pg', q:"Memantul-mantulkan bola basket disebut?", o:["A. Dribbling","B. Shooting","C. Pivot","D. Passing"], a:"A. Dribbling"},
        {t:'pg', q:"Jumlah pemain sepak bola satu tim adalah?", o:["A. 6","B. 11","C. 5","D. 12"], a:"B. 11"},
        {t:'pg', q:"Gerak manipulatif dalam voli adalah?", o:["A. Lari","B. Lompat","C. Passing","D. Diam"], a:"C. Passing"},
        {t:'pg', q:"Menangkap bola basket sebaiknya dengan?", o:["A. Satu tangan","B. Dua tangan","C. Ujung jari","D. Kaki"], a:"B. Dua tangan"},
        {t:'pg', q:"Menghentikan bola dalam sepak bola disebut?", o:["A. Shooting","B. Controlling","C. Dribbling","D. Heading"], a:"B. Controlling"},
        {t:'pg', q:"Bola voli adalah permainan bola?", o:["A. Kecil","B. Besar","C. Sedang","D. Keranjang"], a:"B. Besar"},
        {t:'pg', q:"Tujuan utama sepak bola adalah?", o:["A. Mencetak gol","B. Lari","C. Berkelahi","D. Memegang bola"], a:"A. Mencetak gol"},
        {t:'pg', q:"Induk organisasi sepak bola Indonesia?", o:["A. PBSI","B. PSSI","C. IPSI","D. PERBASI"], a:"B. PSSI"},
        {t:'pg', q:"Menendang bola jarak pendek menggunakan?", o:["A. Kaki bagian dalam","B. Punggung kaki","C. Tumit","D. Lutut"], a:"A. Kaki bagian dalam"},
        {t:'pg', q:"Gerak lokomotor dalam sepak bola?", o:["A. Menendang","B. Berlari","C. Menyundul","D. Menangkap"], a:"B. Berlari"},
        {t:'pg', q:"Servis voli dilakukan dari?", o:["A. Depan net","B. Garis belakang","C. Tengah lapangan","D. Samping"], a:"B. Garis belakang"},
        {t:'pg', q:"Pencetak poin dalam basket dengan cara?", o:["A. Menendang ke gawang","B. Memukul bola","C. Memasukkan bola ke ring","D. Lari"], a:"C. Memasukkan bola ke ring"},
        {t:'pg', q:"Durasi permainan sepak bola?", o:["A. 2x45 menit","B. 2x20 menit","C. 1 jam","D. Bebas"], a:"A. 2x45 menit"},
        {t:'es', q:"Sebutkan 3 teknik dasar sepak bola!"}, 
        {t:'es', q:"Jelaskan cara melakukan passing bawah!"}, 
        {t:'es', q:"Apa itu dribbling dalam basket?"}, 
        {t:'es', q:"Sebutkan permainan bola besar!"}, 
        {t:'es', q:"Apa tugas kiper?"}
    ],

    // MATERI B: BOLA KECIL (KASTI)
    'b': [
        {t:'pg', q:"Kasti termasuk permainan bola?", o:["A. Besar","B. Kecil","C. Keranjang","D. Tangan"], a:"B. Kecil"},
        {t:'pg', q:"Alat pemukul kasti terbuat dari?", o:["A. Besi","B. Kayu","C. Plastik","D. Karet"], a:"B. Kayu"},
        {t:'pg', q:"Melempar bola menyusur tanah, badan harus?", o:["A. Tegak","B. Membungkuk","C. Melompat","D. Tidur"], a:"B. Membungkuk"},
        {t:'pg', q:"Menangkap bola melambung, pandangan ke?", o:["A. Bawah","B. Arah bola","C. Belakang","D. Samping"], a:"B. Arah bola"},
        {t:'pg', q:"Setelah memukul bola, pemain harus?", o:["A. Diam","B. Lari ke tiang hinggap","C. Duduk","D. Pulang"], a:"B. Lari ke tiang hinggap"},
        {t:'pg', q:"Jumlah tiang hinggap dalam kasti ada?", o:["A. 1","B. 2","C. 3","D. 4"], a:"B. 2"},
        {t:'pg', q:"Gerak lokomotor dalam kasti adalah?", o:["A. Memukul","B. Lari","C. Menangkap","D. Melempar"], a:"B. Lari"},
        {t:'pg', q:"Permainan kasti dimainkan secara?", o:["A. Individu","B. Berpasangan","C. Beregu","D. Sendiri"], a:"C. Beregu"},
        {t:'pg', q:"Jika terkena lemparan bola lawan, maka?", o:["A. Menang","B. Mati/Ganti jaga","C. Dapat poin","D. Kalah"], a:"B. Mati/Ganti jaga"},
        {t:'pg', q:"Lemparan melambung digunakan untuk operan?", o:["A. Jauh","B. Dekat","C. Tanah","D. Samping"], a:"A. Jauh"},
        {t:'pg', q:"Jumlah pemain kasti satu regu?", o:["A. 6","B. 11","C. 12","D. 5"], a:"C. 12"},
        {t:'pg', q:"Cara mematikan lawan kasti?", o:["A. Disentuh","B. Dilempar bola","C. Didorong","D. Ditendang"], a:"B. Dilempar bola"},
        {t:'pg', q:"Nilai jika memukul dan lari sampai finish selamat?", o:["A. 1","B. 2","C. 0","D. 3"], a:"B. 2"},
        {t:'pg', q:"Tempat untuk memukul bola disebut?", o:["A. Ruang bebas","B. Ruang pemukul","C. Ruang tunggu","D. Base"], a:"B. Ruang pemukul"},
        {t:'pg', q:"Lama permainan kasti?", o:["A. 2x20-30 menit","B. 2x45 menit","C. 1 jam","D. Bebas"], a:"A. 2x20-30 menit"},
        {t:'es', q:"Sebutkan 3 teknik melempar bola!"}, 
        {t:'es', q:"Bagaimana cara memegang tongkat kasti?"}, 
        {t:'es', q:"Apa itu tiang hinggap?"}, 
        {t:'es', q:"Apa tugas regu penjaga?"}, 
        {t:'es', q:"Bagaimana cara mematikan lawan?"}
    ],

    // MATERI C: ATLETIK
    'c': [
        {t:'pg', q:"Lari pendek disebut juga?", o:["A. Marathon","B. Sprint","C. Jogging","D. Jalan"], a:"B. Sprint"},
        {t:'pg', q:"Start untuk lari pendek adalah start?", o:["A. Berdiri","B. Melayang","C. Jongkok","D. Guling"], a:"C. Jongkok"},
        {t:'pg', q:"Dalam jalan cepat, kaki harus selalu?", o:["A. Lari","B. Melayang","C. Kontak tanah","D. Lompat"], a:"C. Kontak tanah"},
        {t:'pg', q:"Gerakan lompat jauh diawali dengan?", o:["A. Jalan","B. Awalan lari","C. Diam","D. Jongkok"], a:"B. Awalan lari"},
        {t:'pg', q:"Tolakan lompat jauh menggunakan?", o:["A. Dua kaki","B. Satu kaki terkuat","C. Tangan","D. Tumit"], a:"B. Satu kaki terkuat"},
        {t:'pg', q:"Mendarat lompat jauh menggunakan?", o:["A. Satu kaki","B. Dua kaki","C. Pantat","D. Tangan"], a:"B. Dua kaki"},
        {t:'pg', q:"Lempar turbo adalah dasar olahraga?", o:["A. Tolak peluru","B. Lempar lembing","C. Cakram","D. Martil"], a:"B. Lempar lembing"},
        {t:'pg', q:"Lari estafet menggunakan alat?", o:["A. Bola","B. Tongkat","C. Simpai","D. Tali"], a:"B. Tongkat"},
        {t:'pg', q:"Aba-aba start jongkok adalah?", o:["A. Siap, Ya","B. Bersedia, Siap, Ya","C. Mulai","D. Satu Dua Tiga"], a:"B. Bersedia, Siap, Ya"},
        {t:'pg', q:"Tempat pendaratan lompat jauh berisi?", o:["A. Air","B. Matras","C. Pasir","D. Rumput"], a:"C. Pasir"},
        {t:'pg', q:"Posisi badan saat lari cepat?", o:["A. Tegak","B. Condong depan","C. Bungkuk","D. Miring"], a:"B. Condong depan"},
        {t:'pg', q:"Induk atletik Indonesia?", o:["A. PSSI","B. PASI","C. PBSI","D. PERBASI"], a:"B. PASI"},
        {t:'pg', q:"Jarak lari sprint SD biasanya?", o:["A. 1000m","B. 40-60m","C. 5km","D. 10km"], a:"B. 40-60m"},
        {t:'pg', q:"Gerak mendarat lompat jauh harus?", o:["A. Kaku","B. Mengeper","C. Jatuh","D. Lurus"], a:"B. Mengeper"},
        {t:'pg', q:"Estafet adalah lari?", o:["A. Sendiri","B. Sambung","C. Santai","D. Mundur"], a:"B. Sambung"},
        {t:'es', q:"Apa bedanya jalan dan lari?"}, 
        {t:'es', q:"Sebutkan 3 macam start lari!"}, 
        {t:'es', q:"Bagaimana cara mendarat lompat jauh?"}, 
        {t:'es', q:"Apa itu lari sprint?"}, 
        {t:'es', q:"Sebutkan nomor lari dalam atletik!"}
    ],

    // MATERI D: SILAT
    'd': [
        {t:'pg', q:"Pencak silat adalah bela diri asli?", o:["A. Jepang","B. Korea","C. Indonesia","D. Cina"], a:"C. Indonesia"},
        {t:'pg', q:"Posisi kaki menapak kuat disebut?", o:["A. Kuda-kuda","B. Elakan","C. Hindaran","D. Pasang"], a:"A. Kuda-kuda"},
        {t:'pg', q:"Gerakan menahan serangan disebut?", o:["A. Pukulan","B. Tangkisan","C. Tendangan","D. Elakan"], a:"B. Tangkisan"},
        {t:'pg', q:"Serangan menggunakan kaki disebut?", o:["A. Pukulan","B. Tendangan","C. Tangkisan","D. Kuncian"], a:"B. Tendangan"},
        {t:'pg', q:"Arah langkah pencak silat ada?", o:["A. 4","B. 8 (Mata angin)","C. 2","D. 6"], a:"B. 8 (Mata angin)"},
        {t:'pg', q:"Pukulan depan sasarannya adalah?", o:["A. Kaki","B. Dada/Ulu hati","C. Kepala","D. Tangan"], a:"B. Dada/Ulu hati"},
        {t:'pg', q:"Induk organisasi silat Indonesia?", o:["A. PSSI","B. PBSI","C. IPSI","D. KONI"], a:"C. IPSI"},
        {t:'pg', q:"Sikap pasang adalah sikap?", o:["A. Siap tempur","B. Istirahat","C. Tidur","D. Hormat"], a:"A. Siap tempur"},
        {t:'pg', q:"Menghindari serangan tanpa kontak disebut?", o:["A. Elakan","B. Tangkisan","C. Pukulan","D. Tendangan"], a:"A. Elakan"},
        {t:'pg', q:"Bela diri mengajarkan sikap?", o:["A. Sombong","B. Disiplin","C. Penakut","D. Pamer"], a:"B. Disiplin"},
        {t:'pg', q:"Warna pakaian silat biasanya?", o:["A. Putih","B. Hitam","C. Merah","D. Biru"], a:"B. Hitam"},
        {t:'pg', q:"Tendangan lurus menggunakan?", o:["A. Lutut","B. Ujung kaki","C. Tumit","D. Paha"], a:"B. Ujung kaki"},
        {t:'pg', q:"Pukulan bandul arahnya?", o:["A. Atas ke bawah","B. Bawah ke atas","C. Samping","D. Lurus"], a:"B. Bawah ke atas"},
        {t:'pg', q:"Tangkisan atas melindungi?", o:["A. Kaki","B. Kepala","C. Perut","D. Dada"], a:"B. Kepala"},
        {t:'pg', q:"Gelanggang silat beralaskan?", o:["A. Pasir","B. Matras","C. Rumput","D. Keramik"], a:"B. Matras"},
        {t:'es', q:"Apa itu kuda-kuda?"}, 
        {t:'es', q:"Sebutkan 2 jenis pukulan!"}, 
        {t:'es', q:"Apa fungsi tangkisan?"}, 
        {t:'es', q:"Sebutkan warna baju silat!"}, 
        {t:'es', q:"Mengapa kita belajar silat?"}
    ],

    // MATERI E: KEBUGARAN
    'e': [
        {t:'pg', q:"Push up melatih otot?", o:["A. Kaki","B. Perut","C. Lengan","D. Leher"], a:"C. Lengan"},
        {t:'pg', q:"Sit up melatih otot?", o:["A. Perut","B. Punggung","C. Tangan","D. Kaki"], a:"A. Perut"},
        {t:'pg', q:"Lari jogging melatih?", o:["A. Kekuatan","B. Daya tahan","C. Kelenturan","D. Kecepatan"], a:"B. Daya tahan"},
        {t:'pg', q:"Lari bolak-balik melatih?", o:["A. Kelincahan","B. Keseimbangan","C. Kekuatan","D. Power"], a:"A. Kelincahan"},
        {t:'pg', q:"Mencium lutut melatih?", o:["A. Kekuatan","B. Kelenturan","C. Kecepatan","D. Keseimbangan"], a:"B. Kelenturan"},
        {t:'pg', q:"Squat jump melatih otot?", o:["A. Tangan","B. Leher","C. Kaki","D. Perut"], a:"C. Kaki"},
        {t:'pg', q:"Sikap lilin melatih?", o:["A. Keseimbangan","B. Kecepatan","C. Kelincahan","D. Kekuatan"], a:"A. Keseimbangan"},
        {t:'pg', q:"Agar tidak mudah lelah perlu?", o:["A. Daya tahan","B. Kecepatan","C. Kelenturan","D. Kekuatan"], a:"A. Daya tahan"},
        {t:'pg', q:"Pull up melatih?", o:["A. Bahu/Lengan","B. Kaki","C. Leher","D. Perut"], a:"A. Bahu/Lengan"},
        {t:'pg', q:"Tes kebugaran untuk mengukur?", o:["A. Kepintaran","B. Kesehatan fisik","C. Kekayaan","D. Keberanian"], a:"B. Kesehatan fisik"},
        {t:'pg', q:"Back up melatih otot?", o:["A. Perut","B. Punggung","C. Kaki","D. Tangan"], a:"B. Punggung"},
        {t:'pg', q:"Naik turun bangku melatih?", o:["A. Otot tangan","B. Otot kaki","C. Leher","D. Kepala"], a:"B. Otot kaki"},
        {t:'pg', q:"Istirahat terbaik adalah?", o:["A. Duduk","B. Tidur","C. Makan","D. Main"], a:"B. Tidur"},
        {t:'pg', q:"Agar tidak cedera wajib?", o:["A. Makan","B. Pemanasan","C. Minum","D. Lari"], a:"B. Pemanasan"},
        {t:'pg', q:"Lari cepat 40m melatih?", o:["A. Daya tahan","B. Kecepatan","C. Kekuatan","D. Keseimbangan"], a:"B. Kecepatan"},
        {t:'es', q:"Apa itu kebugaran jasmani?"}, 
        {t:'es', q:"Sebutkan latihan kekuatan!"}, 
        {t:'es', q:"Cara melatih kelenturan?"}, 
        {t:'es', q:"Manfaat lari pagi?"}, 
        {t:'es', q:"Apa arti kelincahan?"}
    ],

    // MATERI F: SENAM LANTAI
    'f': [
        {t:'pg', q:"Senam lantai dilakukan di atas?", o:["A. Kasur","B. Matras","C. Rumput","D. Lantai"], a:"B. Matras"},
        {t:'pg', q:"Guling depan tumpuan pada?", o:["A. Kepala","B. Tengkuk","C. Dahi","D. Tangan"], a:"B. Tengkuk"},
        {t:'pg', q:"Sikap lilin kaki lurus ke?", o:["A. Samping","B. Bawah","C. Atas","D. Depan"], a:"C. Atas"},
        {t:'pg', q:"Handstand berdiri dengan?", o:["A. Kepala","B. Tangan","C. Siku","D. Kaki"], a:"B. Tangan"},
        {t:'pg', q:"Kayang badan melengkung seperti?", o:["A. Busur","B. Lilin","C. Pesawat","D. Bola"], a:"A. Busur"},
        {t:'pg', q:"Sebelum senam wajib?", o:["A. Makan","B. Pemanasan","C. Tidur","D. Minum"], a:"B. Pemanasan"},
        {t:'pg', q:"Dagu saat roll depan menempel di?", o:["A. Lutut","B. Dada","C. Matras","D. Tangan"], a:"B. Dada"},
        {t:'pg', q:"Gerak meroda memutar ke?", o:["A. Depan","B. Belakang","C. Samping","D. Bawah"], a:"C. Samping"},
        {t:'pg', q:"Sikap pesawat terbang melatih?", o:["A. Kekuatan","B. Keseimbangan","C. Kelincahan","D. Kecepatan"], a:"B. Keseimbangan"},
        {t:'pg', q:"Headstand bertumpu pada?", o:["A. Tangan","B. Kepala & Tangan","C. Kaki","D. Punggung"], a:"B. Kepala & Tangan"},
        {t:'pg', q:"Guling belakang arahnya?", o:["A. Maju","B. Mundur","C. Samping","D. Atas"], a:"B. Mundur"},
        {t:'pg', q:"Posisi awal guling depan?", o:["A. Jongkok","B. Tidur","C. Duduk","D. Lari"], a:"A. Jongkok"},
        {t:'pg', q:"Lompat kangkang melewati?", o:["A. Tali","B. Peti lompat","C. Gawang","D. Lubang"], a:"B. Peti lompat"},
        {t:'pg', q:"Saat kayang tumpuan pada?", o:["A. Kaki saja","B. Tangan & Kaki","C. Kepala","D. Punggung"], a:"B. Tangan & Kaki"},
        {t:'pg', q:"Sikap lilin pinggang ditopang?", o:["A. Tembok","B. Tangan","C. Teman","D. Kaki"], a:"B. Tangan"},
        {t:'es', q:"Sebutkan 3 gerak senam lantai!"}, 
        {t:'es', q:"Cara guling depan?"}, 
        {t:'es', q:"Fungsi matras?"}, 
        {t:'es', q:"Cara sikap lilin?"}, 
        {t:'es', q:"Kesalahan saat guling depan?"}
    ],

    // MATERI G: SENAM IRAMA
    'g': [
        {t:'pg', q:"Senam irama diiringi oleh?", o:["A. Musik/Lagu","B. Peluit","C. Tepukan","D. Teriakan"], a:"A. Musik/Lagu"},
        {t:'pg', q:"Gerak langkah harus sesuai?", o:["A. Keinginan","B. Ketukan/Irama","C. Teman","D. Guru"], a:"B. Ketukan/Irama"},
        {t:'pg', q:"SKJ singkatan dari?", o:["A. Senam Kaki Jantung","B. Senam Kebugaran Jasmani","C. Senam Kuat","D. Senam Keliling"], a:"B. Senam Kebugaran Jasmani"},
        {t:'pg', q:"Pendinginan dilakukan saat?", o:["A. Sebelum","B. Saat","C. Setelah senam","D. Tidur"], a:"C. Setelah senam"},
        {t:'pg', q:"Ayunan lengan bisa ke?", o:["A. Depan belakang","B. Samping","C. Semua benar","D. Bawah"], a:"C. Semua benar"},
        {t:'pg', q:"Sikap awal senam irama?", o:["A. Jongkok","B. Berdiri tegak","C. Duduk","D. Tidur"], a:"B. Berdiri tegak"},
        {t:'pg', q:"Gerakan inti temponya?", o:["A. Lambat","B. Sedang/Cepat","C. Sangat lambat","D. Diam"], a:"B. Sedang/Cepat"},
        {t:'pg', q:"Senam irama mengutamakan?", o:["A. Kekuatan","B. Keindahan & Keserasian","C. Kecepatan","D. Ketinggian"], a:"B. Keindahan & Keserasian"},
        {t:'pg', q:"Jalan di tempat mengangkat?", o:["A. Tangan","B. Lutut","C. Kepala","D. Kaki"], a:"B. Lutut"},
        {t:'pg', q:"Senam membuat tubuh?", o:["A. Sakit","B. Bugar & Sehat","C. Lemas","D. Lelah"], a:"B. Bugar & Sehat"},
        {t:'pg', q:"Alat senam irama?", o:["A. Bola besi","B. Simpai/Pita","C. Raket","D. Bet"], a:"B. Simpai/Pita"},
        {t:'pg', q:"Gerak langkah rapat?", o:["A. Bijtrekpas","B. Loopas","C. Galoppas","D. Marching"], a:"A. Bijtrekpas"},
        {t:'pg', q:"Pemanasan berguna untuk?", o:["A. Menaikkan suhu tubuh","B. Mendinginkan","C. Istirahat","D. Makan"], a:"A. Menaikkan suhu tubuh"},
        {t:'pg', q:"Senam irama tanpa alat disebut?", o:["A. Ritmik bebas","B. Artistik","C. Alat","D. Lantai"], a:"A. Ritmik bebas"},
        {t:'pg', q:"Musik senam harus?", o:["A. Sedih","B. Semangat","C. Pelan","D. Membosankan"], a:"B. Semangat"},
        {t:'es', q:"Apa itu senam irama?"}, 
        {t:'es', q:"Apa yang mengiringi senam?"}, 
        {t:'es', q:"Sebutkan tahapan senam!"}, 
        {t:'es', q:"Contoh gerak tangan?"}, 
        {t:'es', q:"Manfaat senam irama?"}
    ],

    // MATERI H: RENANG & P3K
    'h': [
        {t:'pg', q:"Renang gaya bebas posisi badan?", o:["A. Telentang","B. Telungkup","C. Miring","D. Tegak"], a:"B. Telungkup"},
        {t:'pg', q:"Luka memar disebabkan oleh?", o:["A. Benda tajam","B. Benturan","C. Api","D. Air"], a:"B. Benturan"},
        {t:'pg', q:"Luka iris disebabkan oleh?", o:["A. Pisau/Silet","B. Pukulan","C. Api","D. Tumpul"], a:"A. Pisau/Silet"},
        {t:'pg', q:"Pertolongan memar dikompres?", o:["A. Air panas","B. Es/Air dingin","C. Minyak","D. Odol"], a:"B. Es/Air dingin"},
        {t:'pg', q:"Luka lecet biasanya karena?", o:["A. Gesekan","B. Terbakar","C. Teriris","D. Pukul"], a:"A. Gesekan"},
        {t:'pg', q:"Renang melatih otot?", o:["A. Kaki","B. Tangan","C. Seluruh tubuh","D. Leher"], a:"C. Seluruh tubuh"},
        {t:'pg', q:"Napas gaya bebas menoleh ke?", o:["A. Atas","B. Samping","C. Bawah","D. Depan"], a:"B. Samping"},
        {t:'pg', q:"Betadine obat untuk luka?", o:["A. Memar","B. Terbuka/Lecet","C. Bakar","D. Patah"], a:"B. Terbuka/Lecet"},
        {t:'pg', q:"P3K singkatan dari?", o:["A. Pertolongan Pertama Pada Kecelakaan","B. Pertolongan Penyakit","C. Perawatan","D. Pengobatan"], a:"A. Pertolongan Pertama Pada Kecelakaan"},
        {t:'pg', q:"Luka bakar ringan disiram?", o:["A. Air mengalir","B. Kecap","C. Pasta gigi","D. Minyak"], a:"A. Air mengalir"},
        {t:'pg', q:"Alat bantu renang?", o:["A. Batu","B. Pelampung","C. Sepatu","D. Baju"], a:"B. Pelampung"},
        {t:'pg', q:"Di kolam dilarang?", o:["A. Berenang","B. Lari-lari","C. Meluncur","D. Pemanasan"], a:"B. Lari-lari"},
        {t:'pg', q:"Kacamata renang lindungi?", o:["A. Hidung","B. Mata","C. Telinga","D. Rambut"], a:"B. Mata"},
        {t:'pg', q:"Mimisan darah dari?", o:["A. Mulut","B. Hidung","C. Telinga","D. Mata"], a:"B. Hidung"},
        {t:'pg', q:"Jika teman pingsan bawa ke?", o:["A. Kantin","B. UKS/Teduh","C. Lapangan","D. Kelas"], a:"B. UKS/Teduh"},
        {t:'es', q:"Apa itu P3K?"}, 
        {t:'es', q:"Cara tangani memar?"}, 
        {t:'es', q:"Sebutkan gaya renang!"}, 
        {t:'es', q:"Penyebab luka iris?"}, 
        {t:'es', q:"Pantangan luka bakar?"}
    ],

    // STS (SEMESTER 1)
    'sts': [
        {t:'pg', q:"Passing bawah ada di permainan?", o:["A. Voli","B. Basket","C. Kasti","D. Sepak Bola"], a:"A. Voli"},
        {t:'pg', q:"Menendang bola gerak?", o:["A. Manipulatif","B. Lokomotor","C. Non","D. Diam"], a:"A. Manipulatif"},
        {t:'pg', q:"Alat kasti adalah?", o:["A. Raket","B. Tongkat","C. Bet","D. Stick"], a:"B. Tongkat"},
        {t:'pg', q:"Start lari pendek?", o:["A. Jongkok","B. Berdiri","C. Melayang","D. Guling"], a:"A. Jongkok"},
        {t:'pg', q:"Pencak silat dari?", o:["A. Jepang","B. Cina","C. Indonesia","D. Korea"], a:"C. Indonesia"},
        {t:'pg', q:"Kuda-kuda adalah gerak?", o:["A. Serangan","B. Posisi kaki","C. Tangkisan","D. Pukulan"], a:"B. Posisi kaki"},
        {t:'pg', q:"Lari estafet pakai?", o:["A. Tongkat","B. Bola","C. Tali","D. Simpai"], a:"A. Tongkat"},
        {t:'pg', q:"Jumlah pemain bola?", o:["A. 11","B. 6","C. 5","D. 12"], a:"A. 11"},
        {t:'pg', q:"Menangkap bola pandangan ke?", o:["A. Bawah","B. Bola","C. Atas","D. Samping"], a:"B. Bola"},
        {t:'pg', q:"Induk silat Indonesia?", o:["A. PSSI","B. IPSI","C. PBSI","D. PASI"], a:"B. IPSI"},
        {t:'pg', q:"Dribbling dalam basket menggunakan?", o:["A. Satu tangan","B. Dua tangan","C. Kaki","D. Kepala"], a:"A. Satu tangan"},
        {t:'pg', q:"Tempat hinggap dalam kasti disebut?", o:["A. Gawang","B. Base/Tiang","C. Ring","D. Net"], a:"B. Base/Tiang"},
        {t:'pg', q:"Lari pelan disebut juga?", o:["A. Sprint","B. Jogging","C. Dash","D. Race"], a:"B. Jogging"},
        {t:'pg', q:"Posisi kaki menapak kuat dalam silat disebut?", o:["A. Kuda-kuda","B. Pasang","C. Elakan","D. Pukulan"], a:"A. Kuda-kuda"},
        {t:'pg', q:"Lompat jauh mendarat di?", o:["A. Air","B. Matras","C. Pasir","D. Rumput"], a:"C. Pasir"},
        {t:'is', q:"Menendang bola ke gawang disebut...", a:"shooting"}, 
        {t:'is', q:"Jumlah pemain kasti satu regu adalah...", a:"12"}, 
        {t:'is', q:"Start jongkok digunakan untuk lari jarak...", a:"pendek"}, 
        {t:'is', q:"Induk organisasi bola voli adalah...", a:"pbvsi"}, 
        {t:'is', q:"Menirukan katak bergerak dengan cara...", a:"lompat"}, 
        {t:'is', q:"Pukulan depan dalam silat sasarannya...", a:"dada"}, 
        {t:'is', q:"Menggiring bola basket dengan memantulkan ke...", a:"lantai"}, 
        {t:'is', q:"Pemain yang boleh memegang bola di sepak bola...", a:"kiper"}, 
        {t:'is', q:"Nilai jika berhasil lari sendiri di kasti...", a:"2"}, 
        {t:'is', q:"Sebelum olahraga melakukan...", a:"pemanasan"},
        {t:'es', q:"Sebutkan 3 teknik dasar sepak bola!"}, 
        {t:'es', q:"Apa itu start jongkok?"}, 
        {t:'es', q:"Sebutkan gerak dasar silat!"}, 
        {t:'es', q:"Apa tugas regu penjaga kasti?"}, 
        {t:'es', q:"Apa manfaat olahraga?"}
    ],

    // SAS (SEMESTER 2)
    'sas': [
        {t:'pg', q:"Push up berguna melatih kekuatan otot?", o:["A. Kaki","B. Perut","C. Lengan","D. Leher"], a:"C. Lengan"},
        {t:'pg', q:"Guling depan tumpuannya adalah?", o:["A. Kepala","B. Tengkuk","C. Dahi","D. Tangan"], a:"B. Tengkuk"},
        {t:'pg', q:"Senam irama diiringi oleh?", o:["A. Musik","B. Peluit","C. Teriakan","D. Tangisan"], a:"A. Musik"},
        {t:'pg', q:"Posisi badan renang gaya bebas?", o:["A. Telentang","B. Telungkup","C. Miring","D. Tegak"], a:"B. Telungkup"},
        {t:'pg', q:"Luka memar dikompres dengan?", o:["A. Air panas","B. Es","C. Minyak","D. Odol"], a:"B. Es"},
        {t:'pg', q:"Sit up melatih otot?", o:["A. Perut","B. Kaki","C. Tangan","D. Punggung"], a:"A. Perut"},
        {t:'pg', q:"Matras adalah alas untuk?", o:["A. Lari","B. Senam Lantai","C. Renang","D. Silat"], a:"B. Senam Lantai"},
        {t:'pg', q:"SKJ adalah senam?", o:["A. Kebugaran Jasmani","B. Kekuatan","C. Kecepatan","D. Kaki Jantung"], a:"A. Kebugaran Jasmani"},
        {t:'pg', q:"Luka iris biasanya karena?", o:["A. Benda tumpul","B. Benda tajam","C. Api","D. Air"], a:"B. Benda tajam"},
        {t:'pg', q:"Sikap lilin kaki lurus ke?", o:["A. Atas","B. Bawah","C. Samping","D. Depan"], a:"A. Atas"},
        {t:'pg', q:"Lari bolak-balik melatih?", o:["A. Kekuatan","B. Kelincahan","C. Keseimbangan","D. Kecepatan"], a:"B. Kelincahan"},
        {t:'pg', q:"Handstand bertumpu pada?", o:["A. Kaki","B. Tangan","C. Kepala","D. Sikut"], a:"B. Tangan"},
        {t:'pg', q:"Alat bantu mengapung adalah?", o:["A. Batu","B. Pelampung","C. Sepatu","D. Baju"], a:"B. Pelampung"},
        {t:'pg', q:"P3K singkatan dari?", o:["A. Pertolongan Pertama Pada Kecelakaan","B. Penanganan Penyakit","C. Perawatan Kecelakaan","D. Pengobatan"], a:"A. Pertolongan Pertama Pada Kecelakaan"},
        {t:'pg', q:"Kayang melatih kelenturan?", o:["A. Kaki","B. Punggung","C. Leher","D. Jari"], a:"B. Punggung"},
        {t:'is', q:"Shuttle run melatih...", a:"kelincahan"}, 
        {t:'is', q:"Handstand bertumpu pada...", a:"tangan"}, 
        {t:'is', q:"Kepanjangan P3K adalah...", a:"pertolongan pertama pada kecelakaan"}, 
        {t:'is', q:"Luka bakar ringan disiram...", a:"air mengalir"}, 
        {t:'is', q:"Kayang posisi badan...", a:"membusur"}, 
        {t:'is', q:"Senam irama mengutamakan...", a:"keserasian"}, 
        {t:'is', q:"Renang melatih kekuatan...", a:"seluruh tubuh"}, 
        {t:'is', q:"Obat merah untuk luka...", a:"lecet"}, 
        {t:'is', q:"Pendinginan dilakukan setelah...", a:"olahraga"}, 
        {t:'is', q:"Squat jump melatih otot...", a:"kaki"},
        {t:'es', q:"Apa itu kebugaran jasmani?"}, 
        {t:'es', q:"Bagaimana cara guling depan?"}, 
        {t:'es', q:"Bagaimana penanganan luka memar?"}, 
        {t:'es', q:"Sebutkan 2 gaya renang!"}, 
        {t:'es', q:"Sebutkan tahapan senam irama!"}
    ]
};

// ===========================================
// 2. FUNGSI LOGIKA (NAVIGASI, KUIS, DOWNLOAD)
// ===========================================

// GANTI HALAMAN
function bukaHalaman(id, btn) {
    document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    document.getElementById('view-' + id).classList.add('active');
    if(btn) btn.classList.add('active');
}

// TAMPILKAN SOAL DI WEB
function tampilSoal(kode) {
    const wadah = document.getElementById('quiz-' + kode);
    if(wadah.style.display === 'block') { wadah.style.display = 'none'; return; }
    
    const soal = dbSoal[kode];
    let html = ``;
    
    // PG
    let pg = soal.filter(i => i.t === 'pg');
    if(pg.length > 0) {
        html += `<h4>I. PILIHAN GANDA</h4>`;
        pg.forEach((item, idx) => {
            html += `<div class="question-item"><p><strong>${idx+1}. ${item.q}</strong></p>`;
            item.o.forEach(opsi => {
                html += `<label style="display:block; cursor:pointer; margin-bottom:5px;">
                            <input type="radio" name="ans-${kode}-pg-${idx}" value="${opsi}"> ${opsi}
                         </label>`;
            });
            html += `</div>`;
        });
    }
    // Isian
    let is = soal.filter(i => i.t === 'is');
    if(is.length > 0) {
        html += `<h4>II. ISIAN SINGKAT</h4>`;
        is.forEach((item, idx) => {
            html += `<div class="question-item"><p><strong>${idx+1}. ${item.q}</strong></p>
                     <input type="text" id="ans-${kode}-is-${idx}" class="input-isian" placeholder="Jawab..."></div>`;
        });
    }
    // Essay
    let es = soal.filter(i => i.t === 'es');
    if(es.length > 0) {
        html += `<h4>III. URAIAN (Kerjakan di buku)</h4>`;
        es.forEach((item, idx) => {
            html += `<div class="question-item"><p><strong>${idx+1}. ${item.q}</strong></p>
                     <textarea class="input-essay" rows="2"></textarea></div>`;
        });
    }

    html += `<button class="action-btn" onclick="hitungNilai('${kode}')" style="margin-top:20px;">CEK NILAI</button>
             <div id="hasil-${kode}" class="score-box"></div>`;
    
    wadah.innerHTML = html;
    wadah.style.display = 'block';
}

// HITUNG NILAI
function hitungNilai(kode) {
    const soal = dbSoal[kode];
    let pg = soal.filter(i => i.t === 'pg');
    let is = soal.filter(i => i.t === 'is');
    let benar = 0;
    let total = pg.length + is.length;

    pg.forEach((item, idx) => {
        const pilih = document.querySelector(`input[name="ans-${kode}-pg-${idx}"]:checked`);
        if(pilih && pilih.value === item.a) benar++;
    });

    is.forEach((item, idx) => {
        const jawab = document.getElementById(`ans-${kode}-is-${idx}`).value.trim().toLowerCase();
        if(jawab && jawab.includes(item.a.toLowerCase())) benar++;
    });

    const nilai = total > 0 ? (benar / total) * 100 : 0;
    const box = document.getElementById(`hasil-${kode}`);
    const warna = nilai >= 75 ? "#ef6c00" : "#c62828";
    
    box.innerHTML = `<div style="border:2px dashed ${warna}; padding:10px; border-radius:5px; background:#fff;">
                        <h3 style="color:${warna}; margin:0;">NILAI: ${nilai.toFixed(0)}</h3>
                        <p>Benar ${benar} dari ${total} soal (PG & Isian)</p>
                     </div>`;
    box.style.display = 'block';
    box.scrollIntoView({behavior: "smooth"});
}

// DOWNLOAD SOAL WORD
function downloadSoal(kode) {
    const dataSoal = dbSoal[kode];
    if (!dataSoal) { alert("Soal belum tersedia!"); return; }

    let htmlContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Soal PJOK K4 ${kode}</title>
    <style>body{font-family:'Times New Roman';} .header{text-align:center;font-weight:bold;margin-bottom:20px;} li{margin-bottom:5px;}</style>
    </head><body>
    <div class="header">LATIHAN SOAL PJOK KELAS 4 SD<br>KODE MATERI: ${kode.toUpperCase()}</div>
    `;

    const pg = dataSoal.filter(x => x.t === 'pg');
    if (pg.length > 0) {
        htmlContent += `<h4>I. PILIHAN GANDA</h4><ol>`;
        pg.forEach(item => {
            htmlContent += `<li>${item.q}<ol type="a">`;
            item.o.forEach(opt => htmlContent += `<li>${opt}</li>`);
            htmlContent += `</ol></li>`;
        });
        htmlContent += `</ol>`;
    }

    const is = dataSoal.filter(x => x.t === 'is');
    if (is.length > 0) {
        htmlContent += `<h4>II. ISIAN</h4><ol>`;
        is.forEach(item => htmlContent += `<li>${item.q} ....................</li>`);
        htmlContent += `</ol>`;
    }

    const es = dataSoal.filter(x => x.t === 'es');
    if (es.length > 0) {
        htmlContent += `<h4>III. URAIAN</h4><ol>`;
        es.forEach(item => htmlContent += `<li>${item.q}<br><br>Jawaban: .......................................</li>`);
        htmlContent += `</ol>`;
    }

    htmlContent += `</body></html>`;
    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Soal_PJOK_K4_${kode.toUpperCase()}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}