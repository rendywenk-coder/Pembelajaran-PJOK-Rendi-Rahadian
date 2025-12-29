// ===========================================
// FILE: assets/js/script-kelas-5.js
// Deskripsi: Logika Materi, Kuis, & Download untuk KELAS 5
// Perbaikan: Penomoran Soal Otomatis (Tidak Ganda)
// ===========================================

console.log("Script PJOK Kelas 5 (Fixed Numbering) Berhasil Dimuat!");

// 1. DATABASE SOAL KELAS 5 (CLEAN - TANPA NOMOR DI DEPAN SOAL)
const dbSoal = {
    // MATERI A: GERAK DASAR
    'a': [
        {t:'pg', q:"Gerakan berpindah tempat disebut?", o:["A. Nonlokomotor","B. Lokomotor","C. Manipulatif","D. Statis"], a:"B. Lokomotor"},
        {t:'pg', q:"Contoh gerak nonlokomotor adalah?", o:["A. Lari","B. Jalan","C. Membungkuk","D. Lompat"], a:"C. Membungkuk"},
        {t:'pg', q:"Gerak manipulatif menggunakan?", o:["A. Kaki saja","B. Tangan saja","C. Alat/Benda","D. Kepala"], a:"C. Alat/Benda"},
        {t:'pg', q:"Lari zig-zag melatih?", o:["A. Kekuatan","B. Kelincahan","C. Keseimbangan","D. Kecepatan"], a:"B. Kelincahan"},
        {t:'pg', q:"Mengayun lengan termasuk gerak?", o:["A. Lokomotor","B. Nonlokomotor","C. Manipulatif","D. Dinamis"], a:"B. Nonlokomotor"},
        {t:'pg', q:"Menangkap bola adalah gerak?", o:["A. Lokomotor","B. Nonlokomotor","C. Manipulatif","D. Pasif"], a:"C. Manipulatif"},
        {t:'pg', q:"Kombinasi lari dan lompat terdapat pada?", o:["A. Tolak peluru","B. Lompat jauh","C. Jalan cepat","D. Renang"], a:"B. Lompat jauh"},
        {t:'pg', q:"Memutar pinggang berguna untuk?", o:["A. Kekuatan","B. Kelenturan","C. Kecepatan","D. Daya tahan"], a:"B. Kelenturan"},
        {t:'pg', q:"Berjalan jinjit melatih?", o:["A. Otot leher","B. Keseimbangan","C. Otot tangan","D. Otot perut"], a:"B. Keseimbangan"},
        {t:'pg', q:"Posisi badan saat lari cepat?", o:["A. Tegak","B. Bungkuk","C. Condong depan","D. Miring"], a:"C. Condong depan"},
        {t:'pg', q:"Gerakan menekuk lutut disebut?", o:["A. Squat","B. Jump","C. Run","D. Sit"], a:"A. Squat"},
        {t:'pg', q:"Melempar bola ke keranjang adalah kombinasi?", o:["A. Jalan & Lari","B. Manipulatif & Nonloko","C. Diam","D. Tidur"], a:"B. Manipulatif & Nonloko"},
        {t:'pg', q:"Sikap kapal terbang bertumpu pada?", o:["A. Satu kaki","B. Dua kaki","C. Tangan","D. Kepala"], a:"A. Satu kaki"},
        {t:'pg', q:"Gerak melompat tumpuan menggunakan?", o:["A. Dua kaki","B. Satu kaki","C. Tangan","D. Lutut"], a:"B. Satu kaki"},
        {t:'pg', q:"Jalan di tempat termasuk gerak?", o:["A. Lokomotor","B. Nonlokomotor","C. Manipulatif","D. Campuran"], a:"B. Nonlokomotor"},
        {t:'pg', q:"Gerak menirukan katak?", o:["A. Lari","B. Jalan","C. Meloncat","D. Guling"], a:"C. Meloncat"},
        {t:'pg', q:"Menendang bola ke gawang disebut?", o:["A. Passing","B. Shooting","C. Dribbling","D. Heading"], a:"B. Shooting"},
        {t:'pg', q:"Pemanasan dilakukan sebelum?", o:["A. Makan","B. Tidur","C. Olahraga","D. Belajar"], a:"C. Olahraga"},
        {t:'pg', q:"Pendinginan dilakukan agar?", o:["A. Otot rileks","B. Otot tegang","C. Lelah","D. Sakit"], a:"A. Otot rileks"},
        {t:'pg', q:"Berjalan mundur arahnya ke?", o:["A. Depan","B. Samping","C. Belakang","D. Atas"], a:"C. Belakang"},
        {t:'es', q:"Jelaskan perbedaan lokomotor dan nonlokomotor!"},
        {t:'es', q:"Sebutkan 3 contoh gerak manipulatif!"},
        {t:'es', q:"Apa manfaat pemanasan?"},
        {t:'es', q:"Bagaimana cara melakukan lari zig-zag?"},
        {t:'es', q:"Sebutkan kombinasi gerak dalam sepak bola!"}
    ],

    // MATERI B: PERMAINAN BOLA
    'b': [
        {t:'pg', q:"Jumlah pemain sepak bola?", o:["A. 5","B. 6","C. 11","D. 12"], a:"C. 11"},
        {t:'pg', q:"Gerak memukul bola voli dari bawah?", o:["A. Smash","B. Servis bawah","C. Blok","D. Passing atas"], a:"B. Servis bawah"},
        {t:'pg', q:"Induk organisasi basket Indonesia?", o:["A. PSSI","B. PBVSI","C. PERBASI","D. PASI"], a:"C. PERBASI"},
        {t:'pg', q:"Menggiring bola dalam sepak bola disebut?", o:["A. Dribbling","B. Shooting","C. Passing","D. Heading"], a:"A. Dribbling"},
        {t:'pg', q:"Alat pemukul kasti terbuat dari?", o:["A. Besi","B. Kayu","C. Plastik","D. Karet"], a:"B. Kayu"},
        {t:'pg', q:"Chest pass adalah operan setinggi?", o:["A. Kepala","B. Dada","C. Lutut","D. Tanah"], a:"B. Dada"},
        {t:'pg', q:"Kiper adalah pemain yang menjaga?", o:["A. Gawang","B. Ring","C. Net","D. Tiang"], a:"A. Gawang"},
        {t:'pg', q:"Jumlah pemain voli satu regu?", o:["A. 5","B. 6","C. 11","D. 12"], a:"B. 6"},
        {t:'pg', q:"Menangkap bola lambung pandangan ke?", o:["A. Bawah","B. Samping","C. Atas/Bola","D. Belakang"], a:"C. Atas/Bola"},
        {t:'pg', q:"Rounders mirip dengan permainan?", o:["A. Voli","B. Basket","C. Kasti","D. Sepak bola"], a:"C. Kasti"},
        {t:'pg', q:"Passing bawah voli perkenaan di?", o:["A. Jari","B. Telapak","C. Lengan bawah","D. Sikut"], a:"C. Lengan bawah"},
        {t:'pg', q:"Lay-up shoot ada di permainan?", o:["A. Sepak bola","B. Basket","C. Voli","D. Kasti"], a:"B. Basket"},
        {t:'pg', q:"Menyundul bola menggunakan?", o:["A. Muka","B. Dahi/Kepala","C. Tangan","D. Dada"], a:"B. Dahi/Kepala"},
        {t:'pg', q:"Durasi sepak bola adalah?", o:["A. 2x45 menit","B. 2x20 menit","C. 1 jam","D. 30 menit"], a:"A. 2x45 menit"},
        {t:'pg', q:"Tempat hinggap kasti disebut?", o:["A. Gawang","B. Base/Tiang","C. Ring","D. Net"], a:"B. Base/Tiang"},
        {t:'pg', q:"Memantulkan bola basket disebut?", o:["A. Dribble","B. Smash","C. Blok","D. Servis"], a:"A. Dribble"},
        {t:'pg', q:"Poin penalti sepak bola jaraknya?", o:["A. 5 meter","B. 11 meter","C. 20 meter","D. 2 meter"], a:"B. 11 meter"},
        {t:'pg', q:"Bola voli dimainkan dengan?", o:["A. Kaki","B. Tangan","C. Raket","D. Bet"], a:"B. Tangan"},
        {t:'pg', q:"Nilai lari sendiri di kasti?", o:["A. 1","B. 2","C. 3","D. 4"], a:"B. 2"},
        {t:'pg', q:"Induk sepak bola dunia?", o:["A. FIFA","B. FIBA","C. FIVB","D. FINA"], a:"A. FIFA"},
        {t:'es', q:"Sebutkan teknik dasar voli!"}, {t:'es', q:"Apa tugas kiper?"}, {t:'es', q:"Cara melakukan chest pass?"}, {t:'es', q:"Peralatan permainan kasti?"}, {t:'es', q:"Apa itu offside?"}
    ],

    // MATERI C: KEBUGARAN
    'c': [
        {t:'pg', q:"Kemampuan tubuh beraktivitas lama tanpa lelah?", o:["A. Kekuatan","B. Kebugaran","C. Kecepatan","D. Kelenturan"], a:"B. Kebugaran"},
        {t:'pg', q:"Lari 12 menit melatih?", o:["A. Jantung/Paru","B. Tangan","C. Kaki","D. Leher"], a:"A. Jantung/Paru"},
        {t:'pg', q:"Push up melatih otot?", o:["A. Perut","B. Lengan","C. Kaki","D. Punggung"], a:"B. Lengan"},
        {t:'pg', q:"Sit up melatih otot?", o:["A. Perut","B. Lengan","C. Kaki","D. Leher"], a:"A. Perut"},
        {t:'pg', q:"Back up melatih otot?", o:["A. Perut","B. Punggung","C. Kaki","D. Tangan"], a:"B. Punggung"},
        {t:'pg', q:"Squat jump melatih?", o:["A. Kaki","B. Tangan","C. Kepala","D. Jari"], a:"A. Kaki"},
        {t:'pg', q:"Cium lutut melatih?", o:["A. Kekuatan","B. Kelenturan","C. Kecepatan","D. Keseimbangan"], a:"B. Kelenturan"},
        {t:'pg', q:"Lari bolak-balik (shuttle run) melatih?", o:["A. Kelincahan","B. Kekuatan","C. Daya tahan","D. Power"], a:"A. Kelincahan"},
        {t:'pg', q:"Naik turun tangga melatih?", o:["A. Tangan","B. Kaki & Jantung","C. Leher","D. Mata"], a:"B. Kaki & Jantung"},
        {t:'pg', q:"Sikap lilin melatih?", o:["A. Keseimbangan","B. Kekuatan","C. Kelenturan","D. Kecepatan"], a:"A. Keseimbangan"},
        {t:'pg', q:"Pull up (gantung) melatih otot?", o:["A. Kaki","B. Bahu/Lengan","C. Perut","D. Betis"], a:"B. Bahu/Lengan"},
        {t:'pg', q:"Interval training adalah?", o:["A. Lari terus","B. Lari cepat-lambat","C. Tidur","D. Duduk"], a:"B. Lari cepat-lambat"},
        {t:'pg', q:"Tes kebugaran jasmani disebut?", o:["A. TKJI","B. SKJ","C. P3K","D. UKS"], a:"A. TKJI"},
        {t:'pg', q:"Istirahat terbaik?", o:["A. Duduk","B. Tidur","C. Makan","D. Main"], a:"B. Tidur"},
        {t:'pg', q:"Minum air mencegah?", o:["A. Dehidrasi","B. Lapar","C. Kenyang","D. Kantuk"], a:"A. Dehidrasi"},
        {t:'pg', q:"Olahraga sebaiknya dilakukan?", o:["A. Setahun sekali","B. Teratur","C. Saat ingat","D. Jarang"], a:"B. Teratur"},
        {t:'pg', q:"Denyut nadi dihitung di?", o:["A. Pergelangan tangan","B. Lutut","C. Punggung","D. Hidung"], a:"A. Pergelangan tangan"},
        {t:'pg', q:"Kayang melatih kelenturan?", o:["A. Kaki","B. Punggung","C. Tangan","D. Leher"], a:"B. Punggung"},
        {t:'pg', q:"Lari 40 meter melatih?", o:["A. Daya tahan","B. Kecepatan","C. Kekuatan","D. Kelenturan"], a:"B. Kecepatan"},
        {t:'pg', q:"Lompat tali melatih?", o:["A. Daya tahan & kaki","B. Tangan","C. Perut","D. Punggung"], a:"A. Daya tahan & kaki"},
        {t:'es', q:"Apa itu kebugaran jasmani?"}, {t:'es', q:"Sebutkan 3 latihan kekuatan!"}, {t:'es', q:"Apa itu kelincahan?"}, {t:'es', q:"Cara melakukan sit up?"}, {t:'es', q:"Mengapa perlu pendinginan?"}
    ],

    // MATERI D: POLA HIDUP SEHAT
    'd': [
        {t:'pg', q:"Makanan sehat adalah?", o:["A. Mahal","B. Enak","C. Bergizi & Bersih","D. Impor"], a:"C. Bergizi & Bersih"},
        {t:'pg', q:"4 Sehat 5 Sempurna penyempurnanya?", o:["A. Nasi","B. Lauk","C. Susu","D. Buah"], a:"C. Susu"},
        {t:'pg', q:"Tidur anak usia SD sebaiknya?", o:["A. 4 jam","B. 8-9 jam","C. 12 jam","D. 2 jam"], a:"B. 8-9 jam"},
        {t:'pg', q:"Penyakit menular contohnya?", o:["A. Patah tulang","B. Flu/Influenza","C. Jantung","D. Diabetes"], a:"B. Flu/Influenza"},
        {t:'pg', q:"Jentik nyamuk menyebabkan?", o:["A. DBD","B. Tipes","C. Batuk","D. Panu"], a:"A. DBD"},
        {t:'pg', q:"Zat adiktif pada rokok?", o:["A. Kafein","B. Nikotin","C. Protein","D. Vitamin"], a:"B. Nikotin"},
        {t:'pg', q:"Merokok merusak organ?", o:["A. Hati","B. Paru-paru","C. Ginjal","D. Mata"], a:"B. Paru-paru"},
        {t:'pg', q:"Narkoba singkatan dari?", o:["A. Narkotika & Obat Berbahaya","B. Nasi Rames Kopi","C. Negara Aman","D. Nama Kota"], a:"A. Narkotika & Obat Berbahaya"},
        {t:'pg', q:"Makanan mengandung karbohidrat?", o:["A. Ikan","B. Nasi/Roti","C. Bayam","D. Jeruk"], a:"B. Nasi/Roti"},
        {t:'pg', q:"Vitamin C banyak pada?", o:["A. Daging","B. Jeruk","C. Nasi","D. Susu"], a:"B. Jeruk"},
        {t:'pg', q:"Cuci tangan pakai?", o:["A. Air saja","B. Sabun & Air mengalir","C. Tisu","D. Lap kotor"], a:"B. Sabun & Air mengalir"},
        {t:'pg', q:"Memotong kuku sebaiknya?", o:["A. Seminggu sekali","B. Sebulan sekali","C. Setahun sekali","D. Tidak pernah"], a:"A. Seminggu sekali"},
        {t:'pg', q:"Sampah plastik dibuang ke?", o:["A. Sungai","B. Jalan","C. Tong Anorganik","D. Kebun"], a:"C. Tong Anorganik"},
        {t:'pg', q:"UKS singkatan dari?", o:["A. Unit Kesehatan Sekolah","B. Usaha Kesehatan Sekolah","C. Upaya Kesehatan Siswa","D. Unit Kerja Siswa"], a:"B. Usaha Kesehatan Sekolah"},
        {t:'pg', q:"P3K adalah pertolongan?", o:["A. Terakhir","B. Pertama","C. Kedua","D. Ketiga"], a:"B. Pertama"},
        {t:'pg', q:"Luka lecet diobati dengan?", o:["A. Air panas","B. Betadine/Obat merah","C. Pasta gigi","D. Minyak"], a:"B. Betadine/Obat merah"},
        {t:'pg', q:"Mandi sehari minimal?", o:["A. 1x","B. 2x","C. 3x","D. 4x"], a:"B. 2x"},
        {t:'pg', q:"Menjaga kebersihan pangkal?", o:["A. Kaya","B. Kesehatan","C. Pintar","D. Hemat"], a:"B. Kesehatan"},
        {t:'pg', q:"Nyamuk Aedes Aegypti gigit saat?", o:["A. Malam","B. Siang/Pagi","C. Subuh","D. Maghrib"], a:"B. Siang/Pagi"},
        {t:'pg', q:"Cara mencegah DBD adalah?", o:["A. 3M Plus","B. 4 Sehat","C. Olahraga","D. Tidur"], a:"A. 3M Plus"},
        {t:'es', q:"Sebutkan zat gizi makanan!"}, {t:'es', q:"Bahaya merokok?"}, {t:'es', q:"Cara cuci tangan benar?"}, {t:'es', q:"Apa itu 3M Plus?"}, {t:'es', q:"Sebutkan penyakit menular!"}
    ],

    // MATERI E: GERAK RITMIK
    'e': [
        {t:'pg', q:"Senam irama disebut?", o:["A. Artistik","B. Ritmik","C. Akrobatik","D. Lantai"], a:"B. Ritmik"},
        {t:'pg', q:"Senam irama diiringi?", o:["A. Musik","B. Angin","C. Hujan","D. Sepi"], a:"A. Musik"},
        {t:'pg', q:"Gerak inti senam ritmik adalah?", o:["A. Langkah & Ayunan","B. Guling","C. Lari","D. Tendang"], a:"A. Langkah & Ayunan"},
        {t:'pg', q:"SKJ singkatan?", o:["A. Senam Kaki Jantung","B. Senam Kebugaran Jasmani","C. Senam Kuat","D. Senam Keliling"], a:"B. Senam Kebugaran Jasmani"},
        {t:'pg', q:"Langkah rapat dalam senam?", o:["A. Bijtrekpas","B. Loopas","C. Galoppas","D. Kruispas"], a:"A. Bijtrekpas"},
        {t:'pg', q:"Ayunan lengan melatih?", o:["A. Kaki","B. Bahu","C. Perut","D. Leher"], a:"B. Bahu"},
        {t:'pg', q:"Senam irama mengutamakan?", o:["A. Kekuatan","B. Keserasian/Keindahan","C. Kecepatan","D. Ketinggian"], a:"B. Keserasian/Keindahan"},
        {t:'pg', q:"Tahapan senam: Pemanasan, Inti, dan?", o:["A. Pendinginan","B. Persiapan","C. Penutupan","D. Lari"], a:"A. Pendinginan"},
        {t:'pg', q:"Musik senam pemanasan temponya?", o:["A. Cepat","B. Sedang","C. Lambat","D. Sangat cepat"], a:"B. Sedang"},
        {t:'pg', q:"Musik pendinginan temponya?", o:["A. Keras","B. Lambat/Rileks","C. Menghentak","D. Cepat"], a:"B. Lambat/Rileks"},
        {t:'pg', q:"Jalan di tempat lutut diangkat?", o:["A. Rendah","B. Rata-rata air","C. Tinggi","D. Tidak diangkat"], a:"B. Rata-rata air"},
        {t:'pg', q:"Ayunan satu lengan ke?", o:["A. Depan belakang","B. Bawah","C. Diam","D. Samping"], a:"A. Depan belakang"},
        {t:'pg', q:"Sikap awal senam?", o:["A. Berdiri tegak","B. Jongkok","C. Duduk","D. Tidur"], a:"A. Berdiri tegak"},
        {t:'pg', q:"Senam tanpa alat disebut?", o:["A. Ritmik bebas","B. Alat","C. Lantai","D. Ketangkasan"], a:"A. Ritmik bebas"},
        {t:'pg', q:"Gerak senam beregu harus?", o:["A. Sendiri","B. Kompak","C. Beda-beda","D. Cepat"], a:"B. Kompak"},
        {t:'pg', q:"Ayunan dua lengan silang di?", o:["A. Belakang","B. Depan dada","C. Atas","D. Bawah"], a:"B. Depan dada"},
        {t:'pg', q:"Langkah biasa disebut?", o:["A. Loopas","B. Bijtrekpas","C. Galoppas","D. Huppel"], a:"A. Loopas"},
        {t:'pg', q:"Pemanasan menaikkan?", o:["A. Berat badan","B. Suhu tubuh","C. Tinggi badan","D. Nafsu makan"], a:"B. Suhu tubuh"},
        {t:'pg', q:"Pendinginan menurunkan?", o:["A. Detak jantung","B. Berat badan","C. Semangat","D. Tinggi"], a:"A. Detak jantung"},
        {t:'pg', q:"Senam irama membuat hati?", o:["A. Sedih","B. Gembira","C. Marah","D. Takut"], a:"B. Gembira"},
        {t:'es', q:"Tiga tahap senam?"}, {t:'es', q:"Manfaat senam irama?"}, {t:'es', q:"Sebutkan gerak langkah!"}, {t:'es', q:"Apa itu keserasian?"}, {t:'es', q:"Alat senam irama?"}
    ],

    // MATERI F: ATLETIK DASAR
    'f': [
        {t:'pg', q:"Lari jarak pendek disebut?", o:["A. Jogging","B. Sprint","C. Marathon","D. Jalan"], a:"B. Sprint"},
        {t:'pg', q:"Start lari jarak pendek?", o:["A. Berdiri","B. Melayang","C. Jongkok","D. Duduk"], a:"C. Jongkok"},
        {t:'pg', q:"Lompat jauh tumpuan?", o:["A. Dua kaki","B. Satu kaki terkuat","C. Tangan","D. Pantat"], a:"B. Satu kaki terkuat"},
        {t:'pg', q:"Induk atletik Indonesia?", o:["A. PSSI","B. PASI","C. PBSI","D. IPSI"], a:"B. PASI"},
        {t:'pg', q:"Aba-aba start jongkok?", o:["A. Siap, Ya","B. Bersedia, Siap, Ya","C. Satu Dua Tiga","D. Mulai"], a:"B. Bersedia, Siap, Ya"},
        {t:'pg', q:"Mendarat lompat jauh pakai?", o:["A. Satu kaki","B. Dua kaki ngeper","C. Tangan","D. Punggung"], a:"B. Dua kaki ngeper"},
        {t:'pg', q:"Lempar turbo dasar dari?", o:["A. Lempar lembing","B. Tolak peluru","C. Cakram","D. Martil"], a:"A. Lempar lembing"},
        {t:'pg', q:"Lari estafet menggunakan?", o:["A. Bola","B. Tongkat","C. Tali","D. Simpai"], a:"B. Tongkat"},
        {t:'pg', q:"Jalan cepat kaki harus?", o:["A. Melayang","B. Kontak tanah terus","C. Lari","D. Lompat"], a:"B. Kontak tanah terus"},
        {t:'pg', q:"Lompat tinggi gaya?", o:["A. Gunting","B. Batu","C. Dada","D. Punggung"], a:"A. Gunting"},
        {t:'pg', q:"Lari pelan disebut?", o:["A. Sprint","B. Jogging","C. Dash","D. Race"], a:"B. Jogging"},
        {t:'pg', q:"Start lari jarak jauh?", o:["A. Jongkok","B. Berdiri","C. Melayang","D. Duduk"], a:"B. Berdiri"},
        {t:'pg', q:"Start lari estafet pelari 2?", o:["A. Jongkok","B. Melayang","C. Berdiri","D. Tidur"], a:"B. Melayang"},
        {t:'pg', q:"Pendaratan lompat jauh di?", o:["A. Matras","B. Bak pasir","C. Air","D. Rumput"], a:"B. Bak pasir"},
        {t:'pg', q:"Awalan lompat jauh?", o:["A. Jalan","B. Lari cepat","C. Lompat","D. Diam"], a:"B. Lari cepat"},
        {t:'pg', q:"Tolak peluru alatnya?", o:["A. Bola besi","B. Lembing","C. Cakram","D. Tongkat"], a:"A. Bola besi"},
        {t:'pg', q:"Atletik adalah induk?", o:["A. Semua cabang olahraga","B. Sepak bola","C. Renang","D. Senam"], a:"A. Semua cabang olahraga"},
        {t:'pg', q:"Saat lari cepat tangan?", o:["A. Diam","B. Diayun kuat","C. Di pinggang","D. Lurus ke atas"], a:"B. Diayun kuat"},
        {t:'pg', q:"Posisi badan lari cepat?", o:["A. Tegak","B. Condong depan","C. Bungkuk","D. Miring"], a:"B. Condong depan"},
        {t:'pg', q:"Garis akhir lari disebut?", o:["A. Start","B. Finish","C. Base","D. Gawang"], a:"B. Finish"},
        {t:'es', q:"Sebutkan nomor lari!"}, {t:'es', q:"Tahapan lompat jauh?"}, {t:'es', q:"Cara start jongkok?"}, {t:'es', q:"Apa itu atletik?"}, {t:'es', q:"Alat lari estafet?"}
    ],

    // MATERI G: TRADISIONAL
    'g': [
        {t:'pg', q:"Gobak sodor melatih?", o:["A. Kekuatan","B. Kelincahan/Kerjasama","C. Keseimbangan","D. Otot"], a:"B. Kelincahan/Kerjasama"},
        {t:'pg', q:"Engklek dimainkan dengan?", o:["A. Dua kaki","B. Satu kaki","C. Tangan","D. Kepala"], a:"B. Satu kaki"},
        {t:'pg', q:"Egrang melatih?", o:["A. Keseimbangan","B. Kecepatan","C. Kekuatan","D. Kelenturan"], a:"A. Keseimbangan"},
        {t:'pg', q:"Bentengan adalah permainan?", o:["A. Individu","B. Beregu","C. Sendiri","D. Pasangan"], a:"B. Beregu"},
        {t:'pg', q:"Alat main engklek?", o:["A. Bola","B. Gacuk/Pecahan genteng","C. Tali","D. Tongkat"], a:"B. Gacuk/Pecahan genteng"},
        {t:'pg', q:"Bakiak dimainkan oleh?", o:["A. 1 orang","B. 3 orang bareng","C. Sendiri","D. Lawan"], a:"B. 3 orang bareng"},
        {t:'pg', q:"Permainan tradisional berasal dari?", o:["A. Luar negeri","B. Daerah/Budaya","C. Pabrik","D. Toko"], a:"B. Daerah/Budaya"},
        {t:'pg', q:"Nilai dalam permainan tradisional?", o:["A. Curang","B. Kerjasama & Jujur","C. Marah","D. Sombong"], a:"B. Kerjasama & Jujur"},
        {t:'pg', q:"Lompat tali karet melatih?", o:["A. Otot kaki","B. Tangan","C. Leher","D. Perut"], a:"A. Otot kaki"},
        {t:'pg', q:"Ular naga panjangnya?", o:["A. Bukan kepalang","B. Pendek","C. Sedikit","D. Kecil"], a:"A. Bukan kepalang"},
        {t:'pg', q:"Gobak sodor butuh lapangan?", o:["A. Lingkaran","B. Persegi panjang","C. Segitiga","D. Sempit"], a:"B. Persegi panjang"},
        {t:'pg', q:"Permainan gasing diputar pakai?", o:["A. Tali","B. Tangan","C. Kaki","D. Mesin"], a:"A. Tali"},
        {t:'pg', q:"Balap karung gerakannya?", o:["A. Lari","B. Meloncat","C. Jalan","D. Guling"], a:"B. Meloncat"},
        {t:'pg', q:"Tarik tambang melatih?", o:["A. Kekuatan","B. Kecepatan","C. Kelenturan","D. Keseimbangan"], a:"A. Kekuatan"},
        {t:'pg', q:"Petak umpet ada yang jadi?", o:["A. Kucing","B. Penjaga","C. Wasit","D. Raja"], a:"B. Penjaga"},
        {t:'pg', q:"Congklak dimainkan?", o:["A. Berdiri","B. Duduk","C. Lari","D. Tidur"], a:"B. Duduk"},
        {t:'pg', q:"Layang-layang butuh?", o:["A. Air","B. Angin","C. Api","D. Tanah"], a:"B. Angin"},
        {t:'pg', q:"Bola bekel pakai bola?", o:["A. Besar","B. Kecil karet","C. Besi","D. Plastik"], a:"B. Kecil karet"},
        {t:'pg', q:"Rangku alu pakai alat?", o:["A. Besi","B. Bambu","C. Karet","D. Tali"], a:"B. Bambu"},
        {t:'pg', q:"Manfaat permainan tradisional?", o:["A. Lelah","B. Sehat & Senang","C. Bosan","D. Sakit"], a:"B. Sehat & Senang"},
        {t:'es', q:"Sebutkan 3 permainan tradisional!"}, {t:'es', q:"Cara main engklek?"}, {t:'es', q:"Nilai gobak sodor?"}, {t:'es', q:"Apa itu egrang?"}, {t:'es', q:"Manfaat main bakiak?"}
    ],

    // MATERI H: KEAMANAN & KESELAMATAN
    'h': [
        {t:'pg', q:"Pemanasan mencegah?", o:["A. Sakit","B. Cedera/Kram","C. Lapar","D. Haus"], a:"B. Cedera/Kram"},
        {t:'pg', q:"Di kolam renang dilarang?", o:["A. Renang","B. Lari-lari","C. Pemanasan","D. Pakai baju renang"], a:"B. Lari-lari"},
        {t:'pg', q:"Jika teman pingsan bawa ke?", o:["A. Kantin","B. UKS","C. Lapangan","D. Kelas"], a:"B. UKS"},
        {t:'pg', q:"Luka memar dikompres?", o:["A. Air panas","B. Es","C. Minyak","D. Odol"], a:"B. Es"},
        {t:'pg', q:"P3K singkatan?", o:["A. Pertolongan Pertama Pada Kecelakaan","B. Pertolongan Penyakit","C. Perawatan","D. Pengobatan"], a:"A. Pertolongan Pertama Pada Kecelakaan"},
        {t:'pg', q:"Luka lecet dibersihkan dengan?", o:["A. Tanah","B. Air bersih/Antiseptik","C. Ludah","D. Daun"], a:"B. Air bersih/Antiseptik"},
        {t:'pg', q:"Mimisan adalah darah dari?", o:["A. Mulut","B. Hidung","C. Telinga","D. Mata"], a:"B. Hidung"},
        {t:'pg', q:"Jika mimisan posisi kepala?", o:["A. Menunduk sedikit","B. Tengadah","C. Miring","D. Putar"], a:"A. Menunduk sedikit"},
        {t:'pg', q:"Kram sering terjadi pada?", o:["A. Rambut","B. Otot kaki","C. Kuku","D. Gigi"], a:"B. Otot kaki"},
        {t:'pg', q:"Alat bantu renang?", o:["A. Batu","B. Pelampung","C. Besi","D. Sepatu"], a:"B. Pelampung"},
        {t:'pg', q:"Matras senam untuk?", o:["A. Hiasan","B. Keamanan","C. Pemberat","D. Rintangan"], a:"B. Keamanan"},
        {t:'pg', q:"Sepatu olahraga agar?", o:["A. Kaki lecet","B. Kaki aman","C. Berat","D. Panas"], a:"B. Kaki aman"},
        {t:'pg', q:"Minum air saat olahraga untuk?", o:["A. Kenyang","B. Ganti cairan","C. Kembung","D. Muntah"], a:"B. Ganti cairan"},
        {t:'pg', q:"Jika lelah sebaiknya?", o:["A. Lari terus","B. Istirahat","C. Makan besar","D. Teriak"], a:"B. Istirahat"},
        {t:'pg', q:"Memar berwarna?", o:["A. Putih","B. Biru/Ungu","C. Kuning","D. Hijau"], a:"B. Biru/Ungu"},
        {t:'pg', q:"Luka tusuk disebabkan?", o:["A. Tumpul","B. Benda tajam/paku","C. Api","D. Air"], a:"B. Benda tajam/paku"},
        {t:'pg', q:"Obat merah untuk?", o:["A. Sakit perut","B. Luka luar","C. Sakit kepala","D. Demam"], a:"B. Luka luar"},
        {t:'pg', q:"Menolong teman harus?", o:["A. Ikhlas/Cepat","B. Minta uang","C. Lambat","D. Takut"], a:"A. Ikhlas/Cepat"},
        {t:'pg', q:"Rambu bahaya warna?", o:["A. Hijau","B. Merah","C. Biru","D. Putih"], a:"B. Merah"},
        {t:'pg', q:"Berenang di tempat?", o:["A. Dalam sekali","B. Dangkal/Aman","C. Deras","D. Berbatu"], a:"B. Dangkal/Aman"},
        {t:'es', q:"Apa itu P3K?"}, {t:'es', q:"Cara atasi mimisan?"}, {t:'es', q:"Bahaya di kolam renang?"}, {t:'es', q:"Cara atasi memar?"}, {t:'es', q:"Mengapa harus pemanasan?"}
    ],

    // MATERI I: LINGKUNGAN
    'i': [
        {t:'pg', q:"Sampah plastik jenis?", o:["A. Organik","B. Anorganik","C. B3","D. Basah"], a:"B. Anorganik"},
        {t:'pg', q:"Daun kering jenis?", o:["A. Anorganik","B. Organik","C. Plastik","D. Kaca"], a:"B. Organik"},
        {t:'pg', q:"Nyamuk DBD suka air?", o:["A. Mengalir","B. Menggenang bersih","C. Kotor","D. Laut"], a:"B. Menggenang bersih"},
        {t:'pg', q:"3M Plus untuk cegah?", o:["A. Flu","B. DBD","C. Diare","D. Panu"], a:"B. DBD"},
        {t:'pg', q:"Ventilasi untuk?", o:["A. Nyamuk","B. Pertukaran udara","C. Hiasan","D. Air"], a:"B. Pertukaran udara"},
        {t:'pg', q:"Air bersih ciri-cirinya?", o:["A. Berwarna","B. Tidak berbau/berwarna","C. Manis","D. Keruh"], a:"B. Tidak berbau/berwarna"},
        {t:'pg', q:"Sampah dibuang di?", o:["A. Sungai","B. Tempat sampah","C. Jalan","D. Selokan"], a:"B. Tempat sampah"},
        {t:'pg', q:"Cuci tangan pakai?", o:["A. Air saja","B. Sabun & air","C. Tisu","D. Lap kotor"], a:"B. Sabun & air"},
        {t:'pg', q:"Penyakit karena air kotor?", o:["A. Diare/Gatal","B. Patah tulang","C. Jantung","D. Diabetes"], a:"A. Diare/Gatal"},
        {t:'pg', q:"Reboisasi adalah?", o:["A. Tebang pohon","B. Tanam pohon kembali","C. Bakar hutan","D. Buang sampah"], a:"B. Tanam pohon kembali"},
        {t:'pg', q:"Toilet harus?", o:["A. Kotor","B. Bersih & wangi","C. Rusak","D. Gelap"], a:"B. Bersih & wangi"},
        {t:'pg', q:"Merokok mencemari?", o:["A. Air","B. Udara","C. Tanah","D. Suara"], a:"B. Udara"},
        {t:'pg', q:"Sampah B3 contohnya?", o:["A. Daun","B. Baterai/Obat","C. Kertas","D. Plastik"], a:"B. Baterai/Obat"},
        {t:'pg', q:"Kerja bakti wujud?", o:["A. Gotong royong","B. Pamer","C. Sendiri","D. Lomba"], a:"A. Gotong royong"},
        {t:'pg', q:"Jendela dibuka agar?", o:["A. Debu masuk","B. Sinar matahari masuk","C. Gelap","D. Panas"], a:"B. Sinar matahari masuk"},
        {t:'pg', q:"Selokan macet bikin?", o:["A. Indah","B. Banjir","C. Bersih","D. Sejuk"], a:"B. Banjir"},
        {t:'pg', q:"Sekolah sehat itu?", o:["A. Banyak sampah","B. Bersih & Hijau","C. Gersang","D. Kotor"], a:"B. Bersih & Hijau"},
        {t:'pg', q:"Makanan kantin harus?", o:["A. Terbuka","B. Tertutup/Bersih","C. Dikerubuti lalat","D. Kadaluarsa"], a:"B. Tertutup/Bersih"},
        {t:'pg', q:"Menjaga kebersihan tugas?", o:["A. Penjaga","B. Semua warga","C. Guru","D. Siswa saja"], a:"B. Semua warga"},
        {t:'pg', q:"Daur ulang artinya?", o:["A. Membuang","B. Mengolah kembali","C. Membakar","D. Menumpuk"], a:"B. Mengolah kembali"},
        {t:'es', q:"Apa itu sampah organik?"}, {t:'es', q:"Cara cegah DBD?"}, {t:'es', q:"Ciri air bersih?"}, {t:'es', q:"Manfaat ventilasi?"}, {t:'es', q:"Apa itu 3R?"}
    ],

    // STS (25 PG, 10 ISIAN, 5 ESSAY)
    'sts': [
        {t:'pg', q:"Gerak berpindah tempat?", o:["A. Lokomotor","B. Non","C. Mani","D. Diam"], a:"A. Lokomotor"},
        {t:'pg', q:"Jumlah pemain bola?", o:["A. 11","B. 6","C. 5","D. 12"], a:"A. 11"},
        {t:'pg', q:"Push up latih?", o:["A. Lengan","B. Kaki","C. Leher","D. Perut"], a:"A. Lengan"},
        {t:'pg', q:"Makanan sehat?", o:["A. 4S 5S","B. Mie","C. Es","D. Gorengan"], a:"A. 4S 5S"},
        {t:'pg', q:"Lari zig-zag latih?", o:["A. Kelincahan","B. Kuat","C. Cepat","D. Lentur"], a:"A. Kelincahan"},
        {t:'pg', q:"Kasti pemukul dari?", o:["A. Kayu","B. Besi","C. Karet","D. Plastik"], a:"A. Kayu"},
        {t:'pg', q:"Start lari pendek?", o:["A. Jongkok","B. Berdiri","C. Melayang","D. Duduk"], a:"A. Jongkok"},
        {t:'pg', q:"Istirahat terbaik?", o:["A. Tidur","B. Main","C. Makan","D. Duduk"], a:"A. Tidur"},
        {t:'pg', q:"Induk bola voli?", o:["A. PBVSI","B. PSSI","C. PERBASI","D. PASI"], a:"A. PBVSI"},
        {t:'pg', q:"Menangkap bola pandangan?", o:["A. Bola","B. Bawah","C. Atas","D. Samping"], a:"A. Bola"},
        {t:'pg', q:"Nyamuk DBD?", o:["A. Aedes","B. Malaria","C. Cikungunya","D. Biasa"], a:"A. Aedes"},
        {t:'pg', q:"Sit up latih?", o:["A. Perut","B. Kaki","C. Tangan","D. Leher"], a:"A. Perut"},
        {t:'pg', q:"Lari 12 menit?", o:["A. Daya tahan","B. Cepat","C. Kuat","D. Lentur"], a:"A. Daya tahan"},
        {t:'pg', q:"Memutar pinggang?", o:["A. Kelenturan","B. Kuat","C. Cepat","D. Seimbang"], a:"A. Kelenturan"},
        {t:'pg', q:"Zat rokok candu?", o:["A. Nikotin","B. Tar","C. Vitamin","D. Protein"], a:"A. Nikotin"},
        {t:'pg', q:"Passing bawah?", o:["A. Lengan","B. Jari","C. Kepala","D. Kaki"], a:"A. Lengan"},
        {t:'pg', q:"Menendang gawang?", o:["A. Shooting","B. Passing","C. Dribble","D. Head"], a:"A. Shooting"},
        {t:'pg', q:"Lompat jauh tumpuan?", o:["A. Satu kaki","B. Dua kaki","C. Tangan","D. Lutut"], a:"A. Satu kaki"},
        {t:'pg', q:"Menirukan katak?", o:["A. Loncat","B. Lari","C. Jalan","D. Guling"], a:"A. Loncat"},
        {t:'pg', q:"Sikap kapal terbang?", o:["A. Keseimbangan","B. Kekuatan","C. Lari","D. Lompat"], a:"A. Keseimbangan"},
        {t:'pg', q:"Penyakit air kotor?", o:["A. Gatal","B. Patah","C. Jantung","D. Pusing"], a:"A. Gatal"},
        {t:'pg', q:"Tidur sehari?", o:["A. 8 jam","B. 4 jam","C. 2 jam","D. 12 jam"], a:"A. 8 jam"},
        {t:'pg', q:"Lari estafet alat?", o:["A. Tongkat","B. Bola","C. Tali","D. Simpai"], a:"A. Tongkat"},
        {t:'pg', q:"Matras untuk?", o:["A. Senam","B. Renang","C. Lari","D. Silat"], a:"A. Senam"},
        {t:'pg', q:"Air bersih?", o:["A. Tidak berbau","B. Keruh","C. Manis","D. Berwarna"], a:"A. Tidak berbau"},
        {t:'is', q:"Gerak di tempat ...", a:"nonlokomotor"},
        {t:'is', q:"Sepak bola main ... orang", a:"11"},
        {t:'is', q:"Alas senam ...", a:"matras"},
        {t:'is', q:"Lari pelan ...", a:"jogging"},
        {t:'is', q:"Induk atletik ...", a:"pasi"},
        {t:'is', q:"Pukulan awal voli ...", a:"servis"},
        {t:'is', q:"Nyamuk suka air ...", a:"menggenang"},
        {t:'is', q:"Push up otot ...", a:"lengan"},
        {t:'is', q:"Kasti bola ...", a:"kecil"},
        {t:'is', q:"Menendang bola ke gawang ...", a:"shooting"},
        {t:'es', q:"Apa itu lokomotor?"}, {t:'es', q:"Teknik sepak bola?"}, {t:'es', q:"Manfaat pemanasan?"}, {t:'es', q:"Cara cegah DBD?"}, {t:'es', q:"Apa itu kebugaran?"}
    ],

    // SAS (25 PG, 10 ISIAN, 5 ESSAY)
    'sas': [
        {t:'pg', q:"Senam irama pakai?", o:["A. Musik","B. Peluit","C. Diam","D. Teriak"], a:"A. Musik"},
        {t:'pg', q:"Renang gaya bebas?", o:["A. Crawl","B. Dada","C. Punggung","D. Kupu"], a:"A. Crawl"},
        {t:'pg', q:"Gobak sodor main?", o:["A. Beregu","B. Sendiri","C. Pasangan","D. Individu"], a:"A. Beregu"},
        {t:'pg', q:"P3K singkatan?", o:["A. Pertolongan Pertama","B. Pertolongan Penyakit","C. Pengobatan","D. Perawatan"], a:"A. Pertolongan Pertama"},
        {t:'pg', q:"Sampah plastik?", o:["A. Anorganik","B. Organik","C. Basah","D. Pupuk"], a:"A. Anorganik"},
        {t:'pg', q:"SKJ adalah?", o:["A. Senam Kebugaran","B. Senam Kekuatan","C. Senam Kaki","D. Senam Keliling"], a:"A. Senam Kebugaran"},
        {t:'pg', q:"Lompat jauh tumpuan?", o:["A. 1 kaki","B. 2 kaki","C. Tangan","D. Pantat"], a:"A. 1 kaki"},
        {t:'pg', q:"Langkah kaki senam?", o:["A. Irama","B. Cepat","C. Lambat","D. Kaku"], a:"A. Irama"},
        {t:'pg', q:"Luka lecet obatnya?", o:["A. Betadine","B. Air panas","C. Odol","D. Minyak"], a:"A. Betadine"},
        {t:'pg', q:"Egrang melatih?", o:["A. Keseimbangan","B. Kekuatan","C. Lari","D. Renang"], a:"A. Keseimbangan"},
        {t:'pg', q:"Napas renang bebas?", o:["A. Samping","B. Depan","C. Bawah","D. Atas"], a:"A. Samping"},
        {t:'pg', q:"Di kolam dilarang?", o:["A. Lari","B. Renang","C. Pemanasan","D. Meluncur"], a:"A. Lari"},
        {t:'pg', q:"Baju kotor?", o:["A. Cuci","B. Pakai","C. Buang","D. Simpan"], a:"A. Cuci"},
        {t:'pg', q:"Ventilasi untuk?", o:["A. Udara","B. Nyamuk","C. Air","D. Hiasan"], a:"A. Udara"},
        {t:'pg', q:"Lompat tali alat?", o:["A. Tali","B. Tongkat","C. Bola","D. Karet"], a:"A. Tali"},
        {t:'pg', q:"Kaki renang bebas?", o:["A. Naik turun","B. Diam","C. Rapat","D. Buka"], a:"A. Naik turun"},
        {t:'pg', q:"Memar dikompres?", o:["A. Es","B. Air panas","C. Minyak","D. Odol"], a:"A. Es"},
        {t:'pg', q:"Ayunan lengan?", o:["A. Bahu","B. Kaki","C. Leher","D. Perut"], a:"A. Bahu"},
        {t:'pg', q:"Air bersih?", o:["A. Tidak berbau","B. Kuning","C. Manis","D. Asin"], a:"A. Tidak berbau"},
        {t:'pg', q:"Sampah daun?", o:["A. Organik","B. Plastik","C. Kaca","D. Besi"], a:"A. Organik"},
        {t:'pg', q:"Cuci tangan?", o:["A. Sabun","B. Air saja","C. Tisu","D. Lap"], a:"A. Sabun"},
        {t:'pg', q:"Makanan pokok?", o:["A. Nasi","B. Lauk","C. Susu","D. Buah"], a:"A. Nasi"},
        {t:'pg', q:"Pendinginan?", o:["A. Rileks","B. Tegang","C. Lari","D. Lompat"], a:"A. Rileks"},
        {t:'pg', q:"Guling depan?", o:["A. Roll depan","B. Roll belakang","C. Meroda","D. Kayang"], a:"A. Roll depan"},
        {t:'pg', q:"Sikap lilin kaki?", o:["A. Atas","B. Bawah","C. Samping","D. Depan"], a:"A. Atas"},
        {t:'is', q:"Sampah daun ...", a:"organik"},
        {t:'is', q:"Renang posisi telungkup ...", a:"gaya bebas"},
        {t:'is', q:"Memar dikompres ...", a:"es"},
        {t:'is', q:"Engklek main pakai ...", a:"satu kaki"},
        {t:'is', q:"Ayunan lengan latih otot ...", a:"bahu"},
        {t:'is', q:"Air bersih tidak ...", a:"berbau"},
        {t:'is', q:"Sebelum renang ...", a:"pemanasan"},
        {t:'is', q:"Alat bantu renang ...", a:"pelampung"},
        {t:'is', q:"Guling depan tumpuan ...", a:"tengkuk"},
        {t:'is', q:"Senam ritmik utamakan ...", a:"keserasian"},
        {t:'es', q:"Apa itu senam irama?"}, {t:'es', q:"Cara renang gaya bebas?"}, {t:'es', q:"Manfaat permainan tradisional?"}, {t:'es', q:"Isi kotak P3K?"}, {t:'es', q:"Beda sampah organik anorganik?"}
    ]
};

// ============================================
// 2. FUNGSI LOGIKA (NAVIGASI, KUIS, DOWNLOAD)
// ============================================

// A. GANTI HALAMAN
function bukaHalaman(id, btn) {
    document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    document.getElementById('view-' + id).classList.add('active');
    if(btn) btn.classList.add('active');
}

// B. TAMPILKAN SOAL DI WEB
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

// C. HITUNG NILAI
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
    const warna = nilai >= 75 ? "#3949ab" : "#c62828";
    
    box.innerHTML = `<div style="border:2px dashed ${warna}; padding:10px; border-radius:5px; background:#fff;">
                        <h3 style="color:${warna}; margin:0;">NILAI: ${nilai.toFixed(0)}</h3>
                        <p>Benar ${benar} dari ${total} soal (PG & Isian)</p>
                     </div>`;
    box.style.display = 'block';
    box.scrollIntoView({behavior: "smooth"});
}

// D. DOWNLOAD WORD
function downloadSoal(kode) {
    const dataSoal = dbSoal[kode];
    if (!dataSoal) { alert("Soal belum tersedia!"); return; }

    let htmlContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Soal PJOK K5 ${kode}</title>
    <style>body{font-family:'Times New Roman';} .header{text-align:center;font-weight:bold;margin-bottom:20px;} li{margin-bottom:5px;}</style>
    </head><body>
    <div class="header">LATIHAN SOAL PJOK KELAS 5 SD<br>KODE MATERI: ${kode.toUpperCase()}</div>
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
    link.download = `Soal_PJOK_K5_${kode.toUpperCase()}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}