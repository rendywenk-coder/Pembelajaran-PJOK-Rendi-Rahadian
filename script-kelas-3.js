// ===========================================
// FILE: assets/js/script-kelas-3.js
// Deskripsi: Logika Materi, Kuis, & Download untuk KELAS 3
// Perbaikan: Penomoran Soal Otomatis (Tidak Ganda)
// ===========================================

console.log("Script PJOK Kelas 3 (Fixed Numbering) Berhasil Dimuat!");

// 1. DATABASE SOAL KELAS 3 (CLEAN - TANPA NOMOR DI DEPAN SOAL)
const dbSoal = {
    // MATERI A: KOMBINASI LOKOMOTOR
    'a': [
        {t:'pg', q:"Kombinasi gerak lari dan lompat terdapat pada olahraga?", o:["A. Lompat Jauh", "B. Renang", "C. Catur"], a:"A. Lompat Jauh"},
        {t:'pg', q:"Saat berlari kemudian melompat, tumpuan menggunakan?", o:["A. Satu kaki", "B. Dua tangan", "C. Kepala"], a:"A. Satu kaki"},
        {t:'pg', q:"Gerakan menirukan katak adalah kombinasi?", o:["A. Jalan dan lari", "B. Lompat dan loncat", "C. Duduk dan berdiri"], a:"B. Lompat dan loncat"},
        {t:'pg', q:"Jalan pelan kemudian lari cepat adalah kombinasi gerak?", o:["A. Manipulatif", "B. Lokomotor", "C. Nonlokomotor"], a:"B. Lokomotor"},
        {t:'pg', q:"Gerak mundur termasuk variasi gerak?", o:["A. Jalan", "B. Lompat", "C. Lempar"], a:"A. Jalan"},
        {t:'pg', q:"Kuda berlari menggunakan gerak?", o:["A. Merayap", "B. Congklang", "C. Terbang"], a:"B. Congklang"},
        {t:'pg', q:"Pandangan saat berlari kombinasi harus ke?", o:["A. Bawah", "B. Depan", "C. Belakang"], a:"B. Depan"},
        {t:'pg', q:"Gerakan engklek melatih kekuatan otot?", o:["A. Tangan", "B. Kaki", "C. Leher"], a:"B. Kaki"},
        {t:'pg', q:"Berlari zig-zag melatih?", o:["A. Kelincahan", "B. Kekuatan", "C. Keseimbangan"], a:"A. Kelincahan"},
        {t:'pg', q:"Sebelum melakukan gerakan kombinasi harus?", o:["A. Makan", "B. Tidur", "C. Pemanasan"], a:"C. Pemanasan"},
        {t:'es', q:"Apa itu kombinasi gerak lokomotor?"},
        {t:'es', q:"Sebutkan contoh kombinasi jalan dan lari!"},
        {t:'es', q:"Bagaimana cara melakukan lompat jauh?"},
        {t:'es', q:"Sebutkan hewan yang bergerak dengan melompat!"},
        {t:'es', q:"Apa manfaat lari pagi?"}
    ],

    // MATERI B: KOMBINASI NONLOKOMOTOR
    'b': [
        {t:'pg', q:"Menekuk lutut sambil memutar tangan adalah kombinasi gerak?", o:["A. Lokomotor", "B. Nonlokomotor", "C. Manipulatif"], a:"B. Nonlokomotor"},
        {t:'pg', q:"Pohon ditiup angin menirukan gerak?", o:["A. Meliuk", "B. Lompat", "C. Lari"], a:"A. Meliuk"},
        {t:'pg', q:"Gerak memutar lengan melatih otot?", o:["A. Kaki", "B. Bahu", "C. Perut"], a:"B. Bahu"},
        {t:'pg', q:"Sikap pesawat terbang mengkombinasikan berdiri dan?", o:["A. Merentangkan tangan", "B. Jongkok", "C. Lari"], a:"A. Merentangkan tangan"},
        {t:'pg', q:"Menekuk badan ke bawah (cium lutut) melatih?", o:["A. Kelenturan", "B. Kecepatan", "C. Kekuatan"], a:"A. Kelenturan"},
        {t:'pg', q:"Gerak nonlokomotor dilakukan di?", o:["A. Tempat", "B. Lapangan luas", "C. Kolam"], a:"A. Tempat"},
        {t:'pg', q:"Memutar pinggang berguna untuk melenturkan otot?", o:["A. Leher", "B. Pinggang", "C. Kaki"], a:"B. Pinggang"},
        {t:'pg', q:"Mengayun lengan bisa ke arah?", o:["A. Depan belakang", "B. Atas saja", "C. Bawah saja"], a:"A. Depan belakang"},
        {t:'pg', q:"Gerak menekuk siku melatih sendi?", o:["A. Siku", "B. Lutut", "C. Jari"], a:"A. Siku"},
        {t:'pg', q:"Pemanasan statis banyak menggunakan gerak?", o:["A. Lari", "B. Nonlokomotor", "C. Lompat"], a:"B. Nonlokomotor"},
        {t:'es', q:"Berikan contoh kombinasi gerak menekuk dan memutar!"},
        {t:'es', q:"Apa manfaat meliukkan badan?"},
        {t:'es', q:"Sebutkan anggota tubuh yang bisa ditekuk!"},
        {t:'es', q:"Bagaimana cara menirukan pohon ditiup angin?"},
        {t:'es', q:"Mengapa peregangan itu penting?"}
    ],

    // MATERI C: KOMBINASI MANIPULATIF
    'c': [
        {t:'pg', q:"Kombinasi lari dan menendang bola ada pada permainan?", o:["A. Basket", "B. Sepak bola", "C. Voli"], a:"B. Sepak bola"},
        {t:'pg', q:"Memantulkan bola sambil berjalan disebut?", o:["A. Dribbling", "B. Shooting", "C. Passing"], a:"A. Dribbling"},
        {t:'pg', q:"Menangkap bola melatih koordinasi?", o:["A. Mata dan tangan", "B. Kaki dan kepala", "C. Telinga dan mulut"], a:"A. Mata dan tangan"},
        {t:'pg', q:"Kasti adalah permainan bola?", o:["A. Besar", "B. Kecil", "C. Sedang"], a:"B. Kecil"},
        {t:'pg', q:"Alat pemukul kasti terbuat dari?", o:["A. Besi", "B. Kayu", "C. Plastik"], a:"B. Kayu"},
        {t:'pg', q:"Melempar bola ke keranjang (ring) adalah gerak?", o:["A. Basket", "B. Sepak bola", "C. Kasti"], a:"A. Basket"},
        {t:'pg', q:"Menendang bola ke gawang disebut?", o:["A. Shooting", "B. Dribbling", "C. Passing"], a:"A. Shooting"},
        {t:'pg', q:"Memukul bola kasti lalu berlari adalah kombinasi?", o:["A. Manipulatif dan Lokomotor", "B. Diam dan Lari", "C. Nonlokomotor"], a:"A. Manipulatif dan Lokomotor"},
        {t:'pg', q:"Bola voli dimainkan dengan?", o:["A. Ditendang", "B. Dipukul tangan", "C. Dilempar"], a:"B. Dipukul tangan"},
        {t:'pg', q:"Mengoper bola kepada teman disebut?", o:["A. Passing", "B. Shooting", "C. Dribbling"], a:"A. Passing"},
        {t:'es', q:"Sebutkan 3 gerak manipulatif dengan bola!"},
        {t:'es', q:"Apa itu dribbling dalam basket?"},
        {t:'es', q:"Bagaimana cara melempar bola kasti?"},
        {t:'es', q:"Sebutkan permainan yang menggunakan bola besar!"},
        {t:'es', q:"Apa tujuan menendang bola ke gawang?"}
    ],

    // MATERI D: KEBUGARAN JASMANI
    'd': [
        {t:'pg', q:"Kemampuan tubuh beraktivitas tanpa lelah berlebih disebut?", o:["A. Kebugaran jasmani", "B. Kesehatan", "C. Kekuatan"], a:"A. Kebugaran jasmani"},
        {t:'pg', q:"Lari pelan (jogging) melatih daya tahan?", o:["A. Jantung dan paru", "B. Otot tangan", "C. Leher"], a:"A. Jantung dan paru"},
        {t:'pg', q:"Lari bolak-balik memindahkan bola melatih?", o:["A. Kelincahan", "B. Kekuatan", "C. Keseimbangan"], a:"A. Kelincahan"},
        {t:'pg', q:"Push up melatih kekuatan otot?", o:["A. Kaki", "B. Lengan/Tangan", "C. Perut"], a:"B. Lengan/Tangan"},
        {t:'pg', q:"Sit up berguna mengencangkan otot?", o:["A. Perut", "B. Punggung", "C. Paha"], a:"A. Perut"},
        {t:'pg', q:"Sikap kayang melatih?", o:["A. Kelenturan", "B. Kecepatan", "C. Keseimbangan"], a:"A. Kelenturan"},
        {t:'pg', q:"Istirahat yang paling baik adalah?", o:["A. Duduk", "B. Tidur", "C. Makan"], a:"B. Tidur"},
        {t:'pg', q:"Latihan kebugaran sebaiknya dilakukan?", o:["A. Setiap hari/Rutin", "B. Setahun sekali", "C. Saat sakit"], a:"A. Setiap hari/Rutin"},
        {t:'pg', q:"Lompat tali melatih daya tahan dan kekuatan?", o:["A. Kaki", "B. Tangan", "C. Kepala"], a:"A. Kaki"},
        {t:'pg', q:"Setelah olahraga kita melakukan?", o:["A. Pemanasan", "B. Pendinginan", "C. Tidur"], a:"B. Pendinginan"},
        {t:'es', q:"Apa itu kebugaran jasmani?"},
        {t:'es', q:"Sebutkan latihan untuk melatih kelincahan!"},
        {t:'es', q:"Apa manfaat push up?"},
        {t:'es', q:"Mengapa kita perlu istirahat?"},
        {t:'es', q:"Bagaimana cara melatih kelenturan?"}
    ],

    // MATERI E: SENAM LANTAI
    'e': [
        {t:'pg', q:"Senam yang dilakukan di atas matras disebut?", o:["A. Senam irama", "B. Senam lantai", "C. Senam pagi"], a:"B. Senam lantai"},
        {t:'pg', q:"Alas untuk senam lantai adalah?", o:["A. Karpet", "B. Matras", "C. Kasur"], a:"B. Matras"},
        {t:'pg', q:"Sikap lilin mengangkat kedua kaki ke?", o:["A. Samping", "B. Atas", "C. Bawah"], a:"B. Atas"},
        {t:'pg', q:"Handstand adalah berdiri dengan?", o:["A. Kepala", "B. Tangan", "C. Siku"], a:"B. Tangan"},
        {t:'pg', q:"Gerak berguling ke depan disebut?", o:["A. Roll depan", "B. Roll belakang", "C. Meroda"], a:"A. Roll depan"},
        {t:'pg', q:"Sikap pesawat terbang melatih?", o:["A. Kekuatan", "B. Keseimbangan", "C. Kelenturan"], a:"B. Keseimbangan"},
        {t:'pg', q:"Saat berguling, dagu ditempelkan ke?", o:["A. Dada", "B. Lutut", "C. Matras"], a:"A. Dada"},
        {t:'pg', q:"Posisi awal guling depan bisa dari?", o:["A. Jongkok atau berdiri", "B. Tidur", "C. Duduk"], a:"A. Jongkok atau berdiri"},
        {t:'pg', q:"Gerak bertumpu menggunakan?", o:["A. Kekuatan otot", "B. Kelenturan", "C. Kecepatan"], a:"A. Kekuatan otot"},
        {t:'pg', q:"Kayang posisi badan melengkung seperti?", o:["A. Busur", "B. Lilin", "C. Pesawat"], a:"A. Busur"},
        {t:'es', q:"Apa alat pengaman senam lantai?"},
        {t:'es', q:"Bagaimana cara melakukan sikap lilin?"},
        {t:'es', q:"Sebutkan 3 gerak senam lantai!"},
        {t:'es', q:"Apa manfaat sikap pesawat terbang?"},
        {t:'es', q:"Mengapa dagu harus menempel dada saat roll depan?"}
    ],

    // MATERI F: SENAM IRAMA
    'f': [
        {t:'pg', q:"Senam irama disebut juga senam?", o:["A. Ritmik", "B. Lantai", "C. Ketangkasan"], a:"A. Ritmik"},
        {t:'pg', q:"Alat yang berbentuk lingkaran besar disebut?", o:["A. Simpai", "B. Pita", "C. Gada"], a:"A. Simpai"},
        {t:'pg', q:"Senam irama mengutamakan keserasian gerak dengan?", o:["A. Teman", "B. Musik/Irama", "C. Pelatih"], a:"B. Musik/Irama"},
        {t:'pg', q:"Gerakan mengayun pita membentuk pola?", o:["A. Kotak", "B. Spiral/Lingkaran", "C. Segitiga"], a:"B. Spiral/Lingkaran"},
        {t:'pg', q:"Melangkah mengikuti ketukan musik melatih?", o:["A. Kekuatan", "B. Irama", "C. Kecepatan"], a:"B. Irama"},
        {t:'pg', q:"Alat senam irama berupa tongkat dengan kain panjang disebut?", o:["A. Pita", "B. Gada", "C. Bola"], a:"A. Pita"},
        {t:'pg', q:"Simpai biasanya dimainkan dengan cara?", o:["A. Diputar di pinggang", "B. Ditendang", "C. Dilempar jauh"], a:"A. Diputar di pinggang"},
        {t:'pg', q:"Gerakan senam irama harus dilakukan dengan?", o:["A. Kaku", "B. Luwes/Indah", "C. Cepat"], a:"B. Luwes/Indah"},
        {t:'pg', q:"Musik untuk senam irama biasanya berirama?", o:["A. Sedih", "B. Gembira", "C. Marah"], a:"B. Gembira"},
        {t:'pg', q:"Sikap awal senam irama adalah?", o:["A. Tidur", "B. Berdiri tegak", "C. Jongkok"], a:"B. Berdiri tegak"},
        {t:'es', q:"Sebutkan 3 alat senam irama!"},
        {t:'es', q:"Apa itu simpai?"},
        {t:'es', q:"Bagaimana gerakan pita senam?"},
        {t:'es', q:"Apa yang mengiringi senam ritmik?"},
        {t:'es', q:"Mengapa gerakan harus sesuai musik?"}
    ],

    // MATERI G: RENANG
    'g': [
        {t:'pg', q:"Gerak meluncur badan harus?", o:["A. Lurus/Sejajar air", "B. Tegak lurus", "C. Meringkuk"], a:"A. Lurus/Sejajar air"},
        {t:'pg', q:"Mengambil napas renang dilakukan saat kepala?", o:["A. Di dalam air", "B. Di atas air", "C. Di dasar kolam"], a:"B. Di atas air"},
        {t:'pg', q:"Membuang napas renang dilakukan di?", o:["A. Dalam air", "B. Udara", "C. Tepi kolam"], a:"A. Dalam air"},
        {t:'pg', q:"Alat bantu untuk belajar mengapung adalah?", o:["A. Pelampung/Papan", "B. Batu", "C. Baju tebal"], a:"A. Pelampung/Papan"},
        {t:'pg', q:"Gerakan kaki renang gaya bebas adalah?", o:["A. Naik turun bergantian", "B. Diam", "C. Membuka menutup"], a:"A. Naik turun bergantian"},
        {t:'pg', q:"Sebelum berenang wajib melakukan?", o:["A. Makan berat", "B. Pemanasan", "C. Lari maraton"], a:"B. Pemanasan"},
        {t:'pg', q:"Di tepi kolam yang licin dilarang?", o:["A. Berjalan pelan", "B. Berlari", "C. Duduk"], a:"B. Berlari"},
        {t:'pg', q:"Pakaian renang sebaiknya berbahan?", o:["A. Katun tebal", "B. Licin/Ringan", "C. Jeans"], a:"B. Licin/Ringan"},
        {t:'pg', q:"Kacamata renang gunanya melindungi?", o:["A. Mata", "B. Hidung", "C. Telinga"], a:"A. Mata"},
        {t:'pg', q:"Meluncur diawali dengan tolakan?", o:["A. Tangan", "B. Kaki di dinding", "C. Kepala"], a:"B. Kaki di dinding"},
        {t:'es', q:"Apa itu meluncur?"},
        {t:'es', q:"Sebutkan alat bantu renang!"},
        {t:'es', q:"Bagaimana cara mengambil napas saat renang?"},
        {t:'es', q:"Mengapa tidak boleh berlarian di kolam?"},
        {t:'es', q:"Apa guna kacamata renang?"}
    ],

    // MATERI H: POLA HIDUP SEHAT
    'h': [
        {t:'pg', q:"Makanan bergizi mengandung?", o:["A. Penyedap rasa", "B. Karbohidrat, Protein, Vitamin", "C. Pewarna"], a:"B. Karbohidrat, Protein, Vitamin"},
        {t:'pg', q:"Nasi, roti, dan jagung adalah sumber?", o:["A. Karbohidrat", "B. Lemak", "C. Vitamin"], a:"A. Karbohidrat"},
        {t:'pg', q:"Tidur yang cukup sehari sekitar?", o:["A. 4 jam", "B. 8 jam", "C. 12 jam"], a:"B. 8 jam"},
        {t:'pg', q:"Kurang tidur menyebabkan tubuh?", o:["A. Segar", "B. Lemas/Lesu", "C. Kuat"], a:"B. Lemas/Lesu"},
        {t:'pg', q:"Mengisi waktu luang bisa dengan?", o:["A. Main game seharian", "B. Membaca buku", "C. Melamun"], a:"B. Membaca buku"},
        {t:'pg', q:"Jajanan sehat harus?", o:["A. Tertutup/Bersih", "B. Terbuka", "C. Berwarna mencolok"], a:"A. Tertutup/Bersih"},
        {t:'pg', q:"Buah dan sayur banyak mengandung?", o:["A. Lemak", "B. Vitamin dan Mineral", "C. Karbohidrat"], a:"B. Vitamin dan Mineral"},
        {t:'pg', q:"Protein berguna untuk?", o:["A. Pertumbuhan", "B. Sumber tenaga utama", "C. Cadangan makanan"], a:"A. Pertumbuhan"},
        {t:'pg', q:"Menjaga kebersihan lingkungan mencegah?", o:["A. Kesehatan", "B. Penyakit", "C. Kebugaran"], a:"B. Penyakit"},
        {t:'pg', q:"Sebelum makan kita harus?", o:["A. Cuci tangan", "B. Tidur", "C. Lari"], a:"A. Cuci tangan"},
        {t:'es', q:"Sebutkan zat gizi dalam makanan!"},
        {t:'es', q:"Mengapa kita perlu tidur cukup?"},
        {t:'es', q:"Contoh kegiatan mengisi waktu luang?"},
        {t:'es', q:"Ciri-ciri jajanan sehat?"},
        {t:'es', q:"Apa sumber protein?"}
    ],

    // UJIAN STS (SEMESTER 1)
    'sts': [
        {t:'pg', q:"Lari dan lompat adalah kombinasi gerak?", o:["A. Lokomotor", "B. Nonlokomotor", "C. Manipulatif"], a:"A. Lokomotor"},
        {t:'pg', q:"Menekuk lutut dan memutar tangan gerak?", o:["A. Lokomotor", "B. Nonlokomotor", "C. Manipulatif"], a:"B. Nonlokomotor"},
        {t:'pg', q:"Menggiring bola lalu menendang gerak?", o:["A. Lokomotor", "B. Nonlokomotor", "C. Manipulatif"], a:"C. Manipulatif"},
        {t:'pg', q:"Lari jogging melatih daya tahan?", o:["A. Jantung", "B. Tangan", "C. Mata"], a:"A. Jantung"},
        {t:'pg', q:"Shuttle run (lari bolak-balik) melatih?", o:["A. Kekuatan", "B. Kelincahan", "C. Keseimbangan"], a:"B. Kelincahan"},
        {t:'pg', q:"Kasti termasuk permainan bola?", o:["A. Kecil", "B. Besar", "C. Keranjang"], a:"A. Kecil"},
        {t:'pg', q:"Sepak bola dimainkan ... orang satu tim?", o:["A. 5", "B. 6", "C. 11"], a:"C. 11"},
        {t:'pg', q:"Sikap pesawat terbang melatih?", o:["A. Kekuatan", "B. Keseimbangan", "C. Kecepatan"], a:"B. Keseimbangan"},
        {t:'pg', q:"Sebelum olahraga wajib?", o:["A. Makan", "B. Pemanasan", "C. Minum es"], a:"B. Pemanasan"},
        {t:'pg', q:"Menangkap bola pandangan ke?", o:["A. Bawah", "B. Bola", "C. Belakang"], a:"B. Bola"},
        {t:'is', q:"Katak bergerak dengan...", a:"melompat"},
        {t:'is', q:"Push up melatih otot...", a:"lengan"},
        {t:'is', q:"Memutar pinggang melatih...", a:"kelenturan"},
        {t:'is', q:"Bola basket adalah bola...", a:"besar"},
        {t:'is', q:"Meliukkan badan termasuk gerak...", a:"nonlokomotor"},
        {t:'is', q:"Lari pelan disebut...", a:"jogging"},
        {t:'is', q:"Menendang bola ke arah...", a:"gawang"},
        {t:'is', q:"Alat pemukul kasti dari...", a:"kayu"},
        {t:'is', q:"Sit up melatih otot...", a:"perut"},
        {t:'is', q:"Agar tidak cedera harus...", a:"pemanasan"},
        {t:'es', q:"Sebutkan 3 gerak lokomotor!"},
        {t:'es', q:"Apa itu kelincahan?"},
        {t:'es', q:"Bagaimana cara menggiring bola?"},
        {t:'es', q:"Sebutkan latihan kekuatan!"},
        {t:'es', q:"Mengapa olahraga itu penting?"}
    ],

    // UJIAN SAS (SEMESTER 2)
    'sas': [
        {t:'pg', q:"Senam lantai dilakukan di?", o:["A. Lantai/Matras", "B. Air", "C. Pasir"], a:"A. Lantai/Matras"},
        {t:'pg', q:"Sikap lilin kaki lurus ke?", o:["A. Atas", "B. Bawah", "C. Samping"], a:"A. Atas"},
        {t:'pg', q:"Senam irama menggunakan alat?", o:["A. Simpai", "B. Batu", "C. Kayu"], a:"A. Simpai"},
        {t:'pg', q:"Gerak senam irama harus sesuai?", o:["A. Musik", "B. Teriakan", "C. Tangis"], a:"A. Musik"},
        {t:'pg', q:"Renang gaya dada disebut gaya?", o:["A. Katak", "B. Bebas", "C. Punggung"], a:"A. Katak"},
        {t:'pg', q:"Alat bantu mengapung?", o:["A. Pelampung", "B. Baju", "C. Sepatu"], a:"A. Pelampung"},
        {t:'pg', q:"Makanan pokok sumber tenaga?", o:["A. Karbohidrat", "B. Vitamin", "C. Mineral"], a:"A. Karbohidrat"},
        {t:'pg', q:"Tidur sehari minimal ... jam?", o:["A. 4", "B. 8", "C. 12"], a:"B. 8"},
        {t:'pg', q:"Handstand bertumpu pada?", o:["A. Kaki", "B. Tangan", "C. Kepala"], a:"B. Tangan"},
        {t:'pg', q:"Jajanan sehat harus?", o:["A. Bersih", "B. Kotor", "C. Terbuka"], a:"A. Bersih"},
        {t:'is', q:"Guling depan disebut...", a:"roll depan"},
        {t:'is', q:"Pita adalah alat senam...", a:"irama"},
        {t:'is', q:"Ambil napas renang lewat...", a:"mulut"},
        {t:'is', q:"Sayur mengandung...", a:"vitamin"},
        {t:'is', q:"Protein berguna untuk...", a:"pertumbuhan"},
        {t:'is', q:"Meluncur badan harus...", a:"lurus"},
        {t:'is', q:"Di kolam dilarang...", a:"lari"},
        {t:'is', q:"Simpai berbentuk...", a:"lingkaran"},
        {t:'is', q:"Sebelum makan cuci...", a:"tangan"},
        {t:'is', q:"Tidur adalah cara...", a:"istirahat"},
        {t:'es', q:"Sebutkan 3 gerak senam lantai!"},
        {t:'es', q:"Apa alat senam irama?"},
        {t:'es', q:"Bagaimana cara meluncur?"},
        {t:'es', q:"Sebutkan zat gizi makanan!"},
        {t:'es', q:"Apa manfaat istirahat?"}
    ]
};

// ==========================================
// 2. FUNGSI LOGIKA (NAVIGASI, KUIS, DOWNLOAD)
// ==========================================

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
    // ISIAN
    let is = soal.filter(i => i.t === 'is');
    if(is.length > 0) {
        html += `<h4>II. ISIAN SINGKAT</h4>`;
        is.forEach((item, idx) => {
            html += `<div class="question-item"><p><strong>${idx+1}. ${item.q}</strong></p>
                     <input type="text" id="ans-${kode}-is-${idx}" class="input-isian" placeholder="Jawab..."></div>`;
        });
    }
    // ESSAY
    let es = soal.filter(i => i.t === 'es');
    if(es.length > 0) {
        html += `<h4>III. URAIAN</h4>`;
        es.forEach((item, idx) => {
            html += `<div class="question-item"><p><strong>${idx+1}. ${item.q}</strong></p>
                     <textarea class="input-essay" rows="2" placeholder="Tulis jawaban..."></textarea></div>`;
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
    const warna = nilai >= 75 ? "#2e7d32" : "#c62828";
    
    box.innerHTML = `<div style="border:2px dashed ${warna}; padding:10px; border-radius:5px; background:#fff;">
                        <h3 style="color:${warna}; margin:0;">NILAI: ${nilai.toFixed(0)}</h3>
                        <p>Benar ${benar} dari ${total} soal (PG & Isian)</p>
                     </div>`;
    box.style.display = 'block';
    box.scrollIntoView({behavior: "smooth"});
}

// DOWNLOAD WORD
function downloadSoal(kode) {
    const dataSoal = dbSoal[kode];
    if (!dataSoal) { alert("Soal belum tersedia!"); return; }

    let htmlContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Soal PJOK K3 ${kode}</title>
    <style>body{font-family:'Times New Roman';} .header{text-align:center;font-weight:bold;margin-bottom:20px;} li{margin-bottom:5px;}</style>
    </head><body>
    <div class="header">LATIHAN SOAL PJOK KELAS 3 SD<br>KODE MATERI: ${kode.toUpperCase()}</div>
    `;

    const pg = dataSoal.filter(x => x.t === 'pg');
    if (pg.length > 0) {
        htmlContent += `<h4>I. PILIHAN GANDA</h4><ol>`;
        pg.forEach(item => {
            htmlContent += `<li>${item.q}<ol type="a" style="margin-left:20px">`;
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
    link.download = `Soal_PJOK_K3_${kode.toUpperCase()}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}