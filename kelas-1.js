// ===========================================
// FILE: script-kelas-1.js
// FUNGSIONALITAS: Menampilkan konten materi, kuis, dan ujian (STS & SAS)
// LOKASI BARU: assets/js/script-kelas-1.js
// ===========================================

// --- DATA SOAL KUIS PER MATERI (LENGKAP A sampai H) ---
const quizData = {
    'a': [ // Gerakan Dasar Lokomotor
        { question: "1. Gerakan yang membuat kita berpindah tempat disebut gerak...", options: ["Non-Lokomotor", "Lokomotor", "Manipulatif", "Statik"], correctAnswer: "Lokomotor" },
        { question: "2. Ketika kita berlari, kedua kaki kita akan melewati fase...", options: ["Diam", "Melayang", "Berdiri", "Jongkok"], correctAnswer: "Melayang" },
        { question: "3. Manakah yang termasuk contoh gerak Lokomotor?", options: ["Mengayun lengan", "Berjalan", "Memutar pinggang", "Menangkap bola"], correctAnswer: "Berjalan" },
        { question: "4. Berjingkat adalah gerakan Lokomotor yang bertumpu pada satu...", options: ["Tangan", "Kepala", "Kaki", "Lutut"], correctAnswer: "Kaki" },
        { question: "5. Perbedaan antara melompat dan meloncat adalah, melompat menggunakan...", options: ["Satu kaki saat tolak", "Dua kaki saat mendarat", "Satu tangan", "Anggota tubuh"], correctAnswer: "Satu kaki saat tolak" },
        { question: "6. Gerakan berpindah yang paling lambat di antara berikut adalah...", options: ["Berlari", "Merayap", "Melompat", "Berjalan"], correctAnswer: "Merayap" },
        { question: "7. Tujuan utama melatih gerak lokomotor adalah melatih...", options: ["Keseimbangan", "Kekuatan", "Ketangkasan berpindah", "Kelenturan"], correctAnswer: "Ketangkasan berpindah" },
        { question: "8. Jika Anda ingin cepat sampai ke pintu kelas, Anda harus...", options: ["Berjalan mundur", "Merayap", "Berlari", "Berjalan jinjit"], correctAnswer: "Berlari" },
        { question: "9. Gerakan gabungan melangkah dan melayang yang dilakukan cepat disebut...", options: ["Berjalan", "Berlari", "Melompat", "Mengguling"], correctAnswer: "Berlari" },
        { question: "10. Saat berjalan, anggota tubuh yang bergerak silih berganti adalah...", options: ["Hidung dan telinga", "Tangan dan kaki", "Bahu dan pinggang", "Rambut dan baju"], correctAnswer: "Tangan dan kaki" },
    ],
    'b': [ // Gerakan Dasar Nonlokomotor
        { question: "1. Gerakan yang dilakukan di tempat yang sama tanpa terjadi perpindahan posisi disebut gerak...", options: ["Lokomotor", "Non-Lokomotor", "Manipulatif", "Statik"], correctAnswer: "Non-Lokomotor" },
        { question: "2. Ketika kita melakukan pemanasan dengan menggelengkan kepala, gerakan ini termasuk pola gerak...", options: ["Lokomotor", "Non-Lokomotor", "Manipulatif", "Kombinasi"], correctAnswer: "Non-Lokomotor" },
        { question: "3. Manakah yang merupakan contoh gerak Non-Lokomotor?", options: ["Mengayun lengan", "Berlari", "Menendang bola", "Berjalan"], correctAnswer: "Mengayun lengan" },
        { question: "4. Gerakan Non-Lokomotor yang bertujuan meregangkan otot paha adalah...", options: ["Memutar badan", "Mengangkat kaki ke depan", "Melompat di tempat", "Merayap"], correctAnswer: "Mengangkat kaki ke depan" },
        { question: "5. Gerakan membungkuk paling baik untuk melatih kelenturan di bagian...", options: ["Lengan", "Tangan", "Pinggang dan punggung", "Pergelangan kaki"], correctAnswer: "Pinggang dan punggung" },
        { question: "6. Kita melakukan gerak Non-Lokomotor saat...", options: ["Berjalan-jalan", "Berdiri tegak", "Memindahkan kursi", "Bermain petak umpet"], correctAnswer: "Berdiri tegak" },
        { question: "7. Gerakan menggerakkan bahu ke depan dan ke belakang disebut...", options: ["Melompat", "Menyentil", "Menekuk", "Memutar"], correctAnswer: "Memutar" },
        { question: "8. Sikap lilin adalah contoh gerak Non-Lokomotor yang melatih...", options: ["Kecepatan", "Daya tahan", "Keseimbangan dan kekuatan otot perut", "Kelincahan"], correctAnswer: "Keseimbangan dan kekuatan otot perut" },
        { question: "9. Gerakan menekuk lutut kemudian berdiri tegak termasuk pola gerak...", options: ["Lokomotor", "Non-Lokomotor", "Manipulatif", "Senam"], correctAnswer: "Non-Lokomotor" },
        { question: "10. Gerakan apakah yang paling umum dilakukan saat pendinginan?", options: ["Berlari kencang", "Gerak Lokomotor", "Gerak Non-Lokomotor (peregangan)", "Melempar benda"], correctAnswer: "Gerak Non-Lokomotor (peregangan)" },
    ],
    'c': [ // Gerakan Dasar Manipulatif
        { question: "1. Gerakan yang melibatkan benda atau objek di luar tubuh disebut gerak...", options: ["Lokomotor", "Non-Lokomotor", "Manipulatif", "Statik"], correctAnswer: "Manipulatif" },
        { question: "2. Gerakan memukul kok dalam bulutangkis adalah contoh gerak...", options: ["Lokomotor", "Non-Lokomotor", "Manipulatif", "Melayang"], correctAnswer: "Manipulatif" },
        { question: "3. Manakah yang termasuk contoh gerak Manipulatif?", options: ["Berjalan", "Memutar kepala", "Menangkap bola", "Berdiri satu kaki"], correctAnswer: "Menangkap bola" },
        { question: "4. Saat menangkap bola, indra yang paling penting adalah tangan dan...", options: ["Kaki", "Telinga", "Mata", "Hidung"], correctAnswer: "Mata" },
        { question: "5. Gerakan manipulatif dapat dilakukan dengan anggota tubuh yaitu tangan dan...", options: ["Lutut", "Kaki", "Bahu", "Pinggang"], correctAnswer: "Kaki" },
        { question: "6. Gerakan yang dilakukan saat bermain kelereng adalah...", options: ["Menendang", "Menyepak", "Menyentil", "Berlari"], correctAnswer: "Menyentil" },
        { question: "7. Memantulkan bola ke lantai berulang kali disebut...", options: ["Melempar", "Menangkap", "Menggiring (Dribbling)", "Menendang"], correctAnswer: "Menggiring (Dribbling)" },
        { question: "8. Gerakan Manipulatif sangat penting untuk melatih...", options: ["Ketahanan otot", "Koordinasi dan ketepatan", "Kelenturan", "Keseimbangan statis"], correctAnswer: "Koordinasi dan ketepatan" },
        { question: "9. Jika bola dilempar ke atas, gerakan yang harus kita lakukan adalah...", options: ["Menendang", "Menangkap", "Membungkuk", "Berlari"], correctAnswer: "Menangkap" },
        { question: "10. Dalam permainan sepak bola, gerakan yang paling sering menggunakan kaki adalah...", options: ["Melempar", "Menangkap", "Menendang", "Mengayun"], correctAnswer: "Menendang" },
    ],
    'd': [ // Senam Lantai Sederhana
        { question: "1. Aktivitas senam lantai sederhana dilakukan di atas...", options: ["Lantai keramik", "Matras", "Rumput", "Papan kayu"], correctAnswer: "Matras" },
        { question: "2. Sikap kapal terbang berfungsi utama untuk melatih...", options: ["Kecepatan lari", "Keseimbangan", "Kekuatan tangan", "Kelincahan"], correctAnswer: "Keseimbangan" },
        { question: "3. Salah satu cara melatih keseimbangan adalah dengan berdiri menggunakan...", options: ["Dua kaki sambil melompat", "Satu kaki dan ditahan", "Tangan", "Kepala"], correctAnswer: "Satu kaki dan ditahan" },
        { question: "4. Tujuan melakukan pemanasan sebelum senam lantai adalah...", options: ["Agar cepat lelah", "Agar otot kaku", "Mencegah cedera", "Membuat badan dingin"], correctAnswer: "Mencegah cedera" },
        { question: "5. Gerakan yang melatih kelenturan tubuh adalah...", options: ["Berlari cepat", "Membungkukkan badan", "Menendang bola", "Berjingkat"], correctAnswer: "Membungkukkan badan" },
        { question: "6. Saat melakukan sikap kapal terbang, kedua tangan harus...", options: ["Ditaruh di pinggang", "Diluruskan ke samping", "Diangkat ke atas", "Dilipat di dada"], correctAnswer: "Diluruskan ke samping" },
        { question: "7. Gerakan jalan ke belakang melatih koordinasi dan...", options: ["Kekuatan maksimum", "Kecepatan", "Keseimbangan dinamis", "Kelenturan"], correctAnswer: "Keseimbangan dinamis" },
        { question: "8. Jika terjatuh saat senam, kita harus...", options: ["Menangis", "Tertawa", "Berdiri lagi dan mencoba", "Langsung pulang"], correctAnswer: "Berdiri lagi dan mencoba" },
        { question: "9. Salah satu manfaat senam lantai adalah membuat tubuh menjadi...", options: ["Kaku", "Sakit", "Bugar dan lentur", "Lelah"], correctAnswer: "Bugar dan lentur" },
        { question: "10. Gerakan apakah yang paling sulit bagi pemula di senam lantai?", options: ["Jalan di tempat", "Berlari santai", "Guling depan sederhana", "Berdiri dua kaki"], correctAnswer: "Guling depan sederhana" },
    ],
    'e': [ // Keseimbangan Statis dan Dinamis
        { question: "1. Keseimbangan Statis adalah keseimbangan yang dipertahankan saat tubuh dalam posisi...", options: ["Bergerak", "Diam", "Melompat", "Tersentuh"], correctAnswer: "Diam" },
        { question: "2. Berjalan di atas garis lurus adalah contoh keseimbangan...", options: ["Statis", "Dinamis", "Kuat", "Pasif"], correctAnswer: "Dinamis" },
        { question: "3. Manakah yang merupakan contoh keseimbangan statis?", options: ["Lari bolak-balik", "Sikap kapal terbang", "Melempar bola", "Berjalan jinjit"], correctAnswer: "Sikap kapal terbang" },
        { question: "4. Keseimbangan Dinamis berarti kita menjaga posisi tubuh sambil...", options: ["Beristirahat", "Tidur", "Berpindah atau bergerak", "Berhenti"], correctAnswer: "Berpindah atau bergerak" },
        { question: "5. Tujuan melatih keseimbangan adalah agar tubuh tidak mudah...", options: ["Lapar", "Jatuh", "Lelah", "Ngantuk"], correctAnswer: "Jatuh" },
        { question: "6. Berdiri dengan satu kaki selama 10 detik termasuk latihan keseimbangan...", options: ["Dinamis", "Statis", "Kuat", "Cepat"], correctAnswer: "Statis" },
        { question: "7. Berjalan di papan titian yang sempit melatih keseimbangan...", options: ["Statis", "Dinamis", "Tidur", "Lentur"], correctAnswer: "Dinamis" },
        { question: "8. Saat melakukan keseimbangan statis, otot harus...", options: ["Rileks", "Tegang", "Lemas", "Mengantuk"], correctAnswer: "Tegang" },
        { question: "9. Gerakan berputar di tempat sambil mengangkat satu kaki melatih keseimbangan...", options: ["Statis", "Dinamis", "Tidur", "Lentur"], correctAnswer: "Dinamis" },
        { question: "10. Keseimbangan sangat penting untuk semua aktivitas gerak kita, termasuk saat...", options: ["Tertidur", "Berjalan kaki", "Makan permen", "Menulis"], correctAnswer: "Berjalan kaki" },
    ],
    'f': [ // Pola Hidup Sehat
        { question: "1. Pola hidup sehat adalah kebiasaan untuk menjaga tubuh agar...", options: ["Sakit", "Lemas", "Bugar dan kuat", "Lapar"], correctAnswer: "Bugar dan kuat" },
        { question: "2. Makanan yang mengandung vitamin dan mineral paling banyak terdapat pada...", options: ["Permen dan cokelat", "Buah dan sayur", "Nasi dan mie", "Daging goreng"], correctAnswer: "Buah dan sayur" },
        { question: "3. Selain makan bergizi, pola hidup sehat juga harus didukung dengan...", options: ["Tidur larut malam", "Minum banyak soda", "Istirahat yang cukup", "Bermain game seharian"], correctAnswer: "Istirahat yang cukup" },
        { question: "4. Minuman yang paling menyehatkan bagi tubuh adalah...", options: ["Air putih", "Minuman manis", "Soda", "Kopi"], correctAnswer: "Air putih" },
        { question: "5. Berapa lama idealnya anak SD tidur setiap malam?", options: ["2 jam", "5 jam", "9-11 jam", "15 jam"], correctAnswer: "9-11 jam" },
        { question: "6. Salah satu manfaat rutin berolahraga adalah...", options: ["Badan terasa berat", "Mudah sakit", "Otot menjadi kuat", "Cepat lelah"], correctAnswer: "Otot menjadi kuat" },
        { question: "7. Jika kita sering kurang tidur, tubuh akan terasa...", options: ["Sangat kuat", "Segar", "Lemas dan mudah sakit", "Lapar"], correctAnswer: "Lemas dan mudah sakit" },
        { question: "8. Makanan yang memberi kita energi untuk bergerak dan belajar adalah...", options: ["Karbohidrat (Nasi/Roti)", "Protein", "Vitamin", "Gula"], correctAnswer: "Karbohidrat (Nasi/Roti)" },
        { question: "9. Kapan waktu terbaik untuk makan sarapan?", options: ["Siang hari", "Setelah bermain", "Pagi hari sebelum sekolah", "Malam hari"], correctAnswer: "Pagi hari sebelum sekolah" },
        { question: "10. Jika kita sakit, sebaiknya kita...", options: ["Tetap sekolah", "Minum obat dan istirahat", "Bermain di luar", "Tidur larut malam"], correctAnswer: "Minum obat dan istirahat" },
    ],
    'g': [ // Menjaga Kebersihan Diri
        { question: "1. Kebersihan diri adalah usaha untuk menjaga kebersihan...", options: ["Rumah", "Lingkungan", "Tubuh kita sendiri", "Sekolah"], correctAnswer: "Tubuh kita sendiri" },
        { question: "2. Kita harus mencuci tangan menggunakan...", options: ["Air saja", "Sabun dan air mengalir", "Air ludah", "Baju"], correctAnswer: "Sabun dan air mengalir" },
        { question: "3. Kapan waktu yang paling penting untuk mencuci tangan?", options: ["Sebelum tidur", "Sebelum makan dan setelah dari toilet", "Saat menonton TV", "Setiap satu jam"], correctAnswer: "Sebelum makan dan setelah dari toilet" },
        { question: "4. Agar gigi kita sehat dan tidak berlubang, kita harus...", options: ["Makan permen banyak", "Gosok gigi teratur", "Tidak gosok gigi", "Minum soda"], correctAnswer: "Gosok gigi teratur" },
        { question: "5. Kita sebaiknya mandi minimal berapa kali dalam sehari?", options: ["Satu kali", "Minimal dua kali", "Tiga kali", "Seminggu sekali"], correctAnswer: "Minimal dua kali" },
        { question: "6. Rambut harus dikeramas agar terhindar dari...", options: ["Kaki", "Kutu", "Otot", "Tangan"], correctAnswer: "Kutu" },
        { question: "7. Kuku jari tangan dan kaki sebaiknya dipotong secara...", options: ["Setiap hari", "Rutin dan pendek", "Setahun sekali", "Saat sudah panjang saja"], correctAnswer: "Rutin dan pendek" },
        { question: "8. Selain kuman, menjaga kebersihan diri juga mencegah timbulnya...", options: ["Cita-cita", "Bau badan", "Kekuatan", "Nilai bagus"], correctAnswer: "Bau badan" },
        { question: "9. Setelah selesai berolahraga, kita harus segera...", options: ["Langsung tidur", "Minum es", "Mandi dan ganti baju", "Makan permen"], correctAnswer: "Mandi dan ganti baju" },
        { question: "10. Baju yang sudah dipakai seharian harus...", options: ["Dipakai lagi", "Disimpan di lemari", "Dicampur dengan baju bersih", "Dicuci segera"], correctAnswer: "Dicuci segera" },
    ],
    'h': [ // Kebersihan Lingkungan Sekolah
        { question: "1. Kebersihan lingkungan sekolah adalah tanggung jawab...", options: ["Guru saja", "Kepala sekolah saja", "Semua warga sekolah", "Petugas kebersihan saja"], correctAnswer: "Semua warga sekolah" },
        { question: "2. Jika Anda melihat sampah di lantai kelas, sebaiknya Anda...", options: ["Mendiamkannya", "Membuang di tempat sampah", "Menendangnya ke kolong meja", "Menyuruh teman"], correctAnswer: "Membuang di tempat sampah" },
        { question: "3. Melakukan piket kelas bertujuan untuk menjaga kebersihan...", options: ["Toilet", "Kamar tidur", "Ruang kelas", "Dapur"], correctAnswer: "Ruang kelas" },
        { question: "4. Tempat untuk menampung sampah sementara adalah...", options: ["Laci meja", "Tas sekolah", "Tempat sampah", "Kolam ikan"], correctAnswer: "Tempat sampah" },
        { question: "5. Lingkungan sekolah yang bersih membuat kita merasa...", options: ["Tidak nyaman", "Mudah sakit", "Tenang dan nyaman untuk belajar", "Lelah"], correctAnswer: "Tenang dan nyaman untuk belajar" },
        { question: "6. Jika ada genangan air di halaman sekolah, harus segera dibersihkan untuk menghindari sarang...", options: ["Kucing", "Nyamuk", "Burung", "Lebah"], correctAnswer: "Nyamuk" },
        { question: "7. Selain di kelas, kebersihan yang harus dijaga di sekolah adalah...", options: ["Dinding", "Toilet dan halaman", "Jendela", "Langit-langit"], correctAnswer: "Toilet dan halaman" },
        { question: "8. Alat yang digunakan untuk membersihkan lantai dari debu adalah...", options: ["Pensil", "Buku", "Sapu", "Bola"], correctAnswer: "Sapu" },
        { question: "9. Setelah menggunakan toilet sekolah, kita wajib...", options: ["Lari", "Mencuci tangan", "Langsung makan", "Membuka jendela"], correctAnswer: "Mencuci tangan" },
        { question: "10. Pohon dan tanaman di sekolah harus...", options: ["Dibiarkan layu", "Dirusak", "Dirawat dan disiram", "Dipindahkan ke rumah"], correctAnswer: "Dirawat dan disiram" },
    ]
};

// --- DATA SOAL UJIAN (STS dan SAS) ---
const examData = {
    // UJIAN STS: Semester 1 (Materi A, B, C, D: Lokomotor, Nonlokomotor, Manipulatif, Senam Lantai)
    'sts': {
        pg: [ 
            { question: "1. Gerakan yang menyebabkan perpindahan tempat dari satu titik ke titik lainnya disebut gerak...", options: ["Non-Lokomotor", "Lokomotor", "Manipulatif", "Statik"], correctAnswer: "Lokomotor" },
            { question: "2. Ketika berdiri dengan satu kaki dan menahannya selama beberapa detik, pola gerak yang dilatih adalah...", options: ["Lokomotor", "Non-Lokomotor", "Manipulatif", "Keseimbangan"], correctAnswer: "Non-Lokomotor" },
            { question: "3. Gerakan menendang bola termasuk pola gerak dasar...", options: ["Lokomotor", "Non-Lokomotor", "Manipulatif", "Kombinasi"], correctAnswer: "Manipulatif" },
            { question: "4. Tolakan menggunakan dua kaki dan mendarat menggunakan dua kaki disebut...", options: ["Meloncat", "Melangkah", "Melompat", "Berjingkat"], correctAnswer: "Melompat" },
            { question: "5. Manfaat utama senam lantai sederhana adalah melatih...", options: ["Kekuatan maksimum", "Akurasi melempar", "Keseimbangan dan kelenturan", "Kecepatan lari"], correctAnswer: "Keseimbangan dan kelenturan" },
            { question: "6. Gerakan memutar pinggang tanpa memindahkan kaki adalah contoh gerak...", options: ["Lokomotor", "Manipulatif", "Non-Lokomotor", "Ayunan"], correctAnswer: "Non-Lokomotor" },
            { question: "7. Gerak dasar yang sangat membutuhkan koordinasi antara tangan dan mata adalah gerak...", options: ["Lokomotor", "Manipulatif", "Non-Lokomotor", "Keseimbangan"], correctAnswer: "Manipulatif" },
            { question: "8. Perbedaan utama antara berjalan dan berlari terletak pada fase...", options: ["Gerakan tangan", "Fase melayang", "Gerakan kepala", "Posisi badan"], correctAnswer: "Fase melayang" },
            { question: "9. Sikap kapal terbang adalah gerakan yang sangat baik untuk melatih keseimbangan...", options: ["Dinamis", "Statis", "Kuat", "Lincah"], correctAnswer: "Statis" },
            { question: "10. Manakah yang *bukan* merupakan contoh gerak manipulatif?", options: ["Menangkap bola", "Melempar bola", "Mengayun tangan", "Menendang bola"], correctAnswer: "Mengayun tangan" },
            { question: "11. Pola gerakan dasar yang melibatkan penggunaan objek atau alat di luar tubuh disebut...", options: ["Lokomotor", "Non-Lokomotor", "Manipulatif", "Senam"], correctAnswer: "Manipulatif" },
            { question: "12. Tujuan dari pendinginan setelah berolahraga adalah...", options: ["Membuat otot tegang", "Mengembalikan denyut jantung normal", "Meningkatkan kecepatan", "Meningkatkan suhu tubuh"], correctAnswer: "Mengembalikan denyut jantung normal" },
            { question: "13. Gerakan merayap atau berguling di lantai termasuk pola gerak...", options: ["Non-Lokomotor", "Manipulatif", "Lokomotor", "Statis"], correctAnswer: "Lokomotor" },
            { question: "14. Senam lantai sebaiknya dilakukan di atas...", options: ["Lantai keramik", "Matras", "Rumput kasar", "Aspal"], correctAnswer: "Matras" },
            { question: "15. Saat melakukan gerakan non-lokomotor (peregangan), kita harus menjaga kaki agar...", options: ["Berpindah cepat", "Tetap di tempat", "Diangkat tinggi", "Dilipat"], correctAnswer: "Tetap di tempat" }
        ],
        isian: [ 
            { question: "1. Gerakan berpindah tempat dari satu titik ke titik lain disebut gerak...", correctAnswer: "lokomotor" },
            { question: "2. Gerakan mengayun lengan dan membungkuk termasuk pola gerak...", correctAnswer: "nonlokomotor" },
            { question: "3. Ketika melempar dan menangkap bola, indra yang paling berperan adalah tangan dan...", correctAnswer: "mata" },
            { question: "4. Gerakan berjingkat melatih kekuatan otot...", correctAnswer: "kaki" },
            { question: "5. Aktivitas fisik yang bertujuan melatih keseimbangan dan kelenturan tubuh di atas matras disebut...", correctAnswer: "senam lantai" },
            { question: "6. Gerakan menendang bola ke gawang adalah contoh gerak...", correctAnswer: "manipulatif" },
            { question: "7. Sikap tubuh yang benar saat melakukan gerakan berjalan adalah...", correctAnswer: "tegakk" },
            { question: "8. Sikap kapal terbang adalah contoh keseimbangan...", correctAnswer: "statis" },
            { question: "9. Dalam permainan lompat tali, gerakan yang dominan adalah...", correctAnswer: "melompat" },
            { question: "10. Gerakan menarik dan mendorong benda termasuk pola gerak...", correctAnswer: "nonlokomotor" }
        ],
        esai: [ 
            "1. Jelaskan perbedaan mendasar antara gerak Lokomotor dan Non-Lokomotor, berikan masing-masing 2 contoh!",
            "2. Sebutkan 3 contoh gerakan manipulatif yang bisa dilakukan menggunakan bola!",
            "3. Apa manfaat utama melatih keseimbangan statis bagi tubuh?",
            "4. Jelaskan mengapa pemanasan wajib dilakukan sebelum memulai senam lantai!",
            "5. Gambarkan dan jelaskan secara singkat bagaimana cara melakukan gerakan berlari yang baik dan benar!",
        ]
    },
    
    // UJIAN SAS: Semester 2 (Materi E, F, G, H: Keseimbangan, Pola Hidup Sehat, Kebersihan Diri & Lingkungan)
    'sas': {
        pg: [ 
            { question: "1. Keseimbangan yang dipertahankan ketika tubuh dalam posisi **diam** disebut keseimbangan...", options: ["Dinamis", "Aktif", "Statis", "Pasif"], correctAnswer: "Statis" },
            { question: "2. Berapa kali minimal kita harus menggosok gigi dalam sehari?", options: ["Satu kali", "Minimal dua kali", "Tiga kali", "Hanya jika gigi sakit"], correctAnswer: "Minimal dua kali" },
            { question: "3. Lari mengubah arah secara tiba-tiba melatih...", options: ["Keseimbangan statis", "Keseimbangan dinamis dan kelincahan", "Kekuatan lengan", "Daya tahan napas"], correctAnswer: "Keseimbangan dinamis dan kelincahan" },
            { question: "4. Sumber energi utama bagi tubuh berasal dari makanan yang mengandung...", options: ["Vitamin", "Air", "Karbohidrat", "Serat"], correctAnswer: "Karbohidrat" },
            { question: "5. Kebersihan diri (Personal Hygiene) bertujuan untuk mencegah...", options: ["Kekuatan", "Penyakit akibat kuman", "Kecepatan", "Kelenturan"], correctAnswer: "Penyakit akibat kuman" },
            { question: "6. Manakah yang termasuk kegiatan yang mendukung pola hidup sehat?", options: ["Tidur larut malam", "Jarang mencuci tangan", "Makan buah dan sayur", "Tidak berolahraga"], correctAnswer: "Makan buah dan sayur" },
            { question: "7. Membuang sampah di tempatnya adalah bagian dari PHSB yang berkaitan dengan...", options: ["Kebersihan diri", "Kebersihan lingkungan", "Kekuatan tangan", "Kelenturan tubuh"], correctAnswer: "Kebersihan lingkungan" },
            { question: "8. Pentingnya minum air putih yang cukup adalah untuk mencegah...", options: ["Kelelahan", "Dehidrasi (kekurangan cairan)", "Kelaparan", "Kekurangan vitamin A"], correctAnswer: "Dehidrasi (kekurangan cairan)" },
            { question: "9. Berjalan di atas garis lurus adalah contoh dari keseimbangan...", options: ["Statis", "Dinamis", "Kuat", "Pasif"], correctAnswer: "Dinamis" },
            { question: "10. Kapan waktu yang paling tepat untuk mencuci tangan dengan sabun?", options: ["Setelah bangun tidur saja", "Sebelum makan dan setelah dari toilet", "Saat sedang menonton TV", "Hanya sebelum tidur"], correctAnswer: "Sebelum makan dan setelah dari toilet" },
            { question: "11. Kebiasaan yang baik setelah berolahraga adalah...", options: ["Langsung tidur tanpa mandi", "Mandi dan mengganti pakaian kotor", "Menggunakan pakaian yang sama keesokan harinya", "Tidak mencuci sepatu"], correctAnswer: "Mandi dan mengganti pakaian kotor" },
            { question: "12. Pola hidup sehat yang baik sangat dipengaruhi oleh konsumsi makanan...", options: ["Instan", "Cepat saji", "Gizi seimbang", "Manis berlebihan"], correctAnswer: "Gizi seimbang" },
            { question: "13. Jika melihat sampah di lantai kelas, apa yang harus Anda lakukan?", options: ["Mendiamkannya", "Meminta teman membuangnya", "Mengambil dan membuangnya di tempat sampah", "Menendangnya ke bawah meja"], correctAnswer: "Mengambil dan membuangnya di tempat sampah" },
            { question: "14. Sikap tubuh yang benar saat mempertahankan keseimbangan adalah...", options: ["Membungkuk", "Tegang", "Tegak dan fokus", "Miring"], correctAnswer: "Tegak dan fokus" },
            { question: "15. Apa yang harus dilakukan jika kita batuk atau bersin di kelas?", options: ["Menutup dengan tangan tanpa dicuci", "Menutup dengan mulut", "Menutup dengan siku atau tisu", "Batuk sekeras mungkin"], correctAnswer: "Menutup dengan siku atau tisu" }
        ],
        isian: [ 
            { question: "1. Keseimbangan yang dipertahankan saat tubuh sedang bergerak disebut keseimbangan...", correctAnswer: "dinamis" },
            { question: "2. Makanan yang mengandung protein sangat dibutuhkan tubuh untuk memperbaiki dan membangun...", correctAnswer: "jaringan" },
            { question: "3. Berjalan jinjit adalah contoh latihan keseimbangan...", correctAnswer: "dinamis" },
            { question: "4. Jangka waktu tidur yang ideal untuk anak SD adalah antara 9 sampai...", correctAnswer: "11 jam" },
            { question: "5. Kebersihan diri di rumah yang harus dijaga setiap hari adalah dengan mandi dan gosok...", correctAnswer: "gigi" },
            { question: "6. Selain olahraga, pola hidup sehat juga meliputi gizi seimbang dan istirahat yang...", correctAnswer: "cukup" },
            { question: "7. Piket kelas dan membersihkan papan tulis adalah upaya menjaga kebersihan...", correctAnswer: "lingkungan sekolah" },
            { question: "8. Kuku harus dipotong secara rutin agar terhindar dari...", correctAnswer: "kuman" },
            { question: "9. Sikap kapal terbang adalah contoh latihan keseimbangan...", correctAnswer: "statis" },
            { question: "10. Sampah harus dibuang berdasarkan jenisnya, yaitu organik dan...", correctAnswer: "nonorganik" }
        ],
        esai: [ 
            "1. Jelaskan perbedaan antara keseimbangan statis dan keseimbangan dinamis, berikan masing-masing 1 contoh!",
            "2. Sebutkan 3 cara yang harus dilakukan untuk menjaga pola hidup sehat sehari-hari!",
            "3. Mengapa penting bagi kita untuk mencuci tangan sebelum makan?",
            "4. Sebutkan 2 contoh kegiatan menjaga kebersihan lingkungan di sekolah!",
            "5. Jelaskan apa yang terjadi pada tubuh jika kita sering kurang tidur!",
        ]
    }
};


// --- FUNGSI UTAMA ---

/**
 * Mengganti konten yang ditampilkan di area utama dan mengaktifkan tombol navigasi
 * @param {string} contentId ID dari section konten yang ingin ditampilkan (misal: 'materi-k1-a', 'ujian-sts-k1')
 * @param {HTMLElement} clickedButton Elemen tombol navigasi yang baru diklik (this)
 */
function showContent(contentId, clickedButton) {
    // 1. Sembunyikan semua konten materi dan ujian
    const sections = document.querySelectorAll('.materi-section');
    sections.forEach(section => {
        section.classList.add('hidden-content');
        section.classList.remove('active-content');
    });

    // 2. Tampilkan konten yang dipilih
    const activeSection = document.getElementById(contentId);
    if (activeSection) {
        activeSection.classList.remove('hidden-content');
        activeSection.classList.add('active-content');

        // 3. Jika konten yang dipilih adalah UJIAN (STS atau SAS), generate soalnya
        if (contentId === 'ujian-sts-k1') {
            generateExam('sts');
        } else if (contentId === 'ujian-sas-k1') {
            generateExam('sas');
        }
    }

    // 4. Update status 'active' pada tombol navigasi
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}


// --- FUNGSI UNTUK KUIS PER MATERI ---

/**
 * Menampilkan atau menyembunyikan area kuis per materi
 * @param {string} materiCode Kode materi ('a', 'b', 'c', dst.)
 */
function toggleQuiz(materiCode) {
    const quizArea = document.getElementById(`quiz-area-${materiCode}`);
    const quizForm = document.getElementById(`quiz-form-${materiCode}`);
    const quizResult = document.getElementById(`quiz-result-${materiCode}`);

    if (quizArea.classList.contains('hidden-content')) {
        // Tampilkan area kuis
        quizArea.classList.remove('hidden-content');
        // Kosongkan hasil sebelumnya
        quizResult.style.display = 'none';
        quizResult.innerHTML = '';
        // Generate soal kuis (jika data kuis tersedia)
        if (quizData[materiCode] && quizData[materiCode].length > 0) {
            generateQuiz(materiCode);
        } else {
            // Pesan jika kuis belum dibuat/tidak ada
            quizForm.innerHTML = `<p>Maaf, data kuis untuk materi ${materiCode.toUpperCase()} belum tersedia saat ini.</p>`;
        }
    } else {
        // Sembunyikan area kuis
        quizArea.classList.add('hidden-content');
    }
}

/**
 * Membuat soal kuis Pilihan Ganda sederhana (dari data kuisData)
 * @param {string} materiCode Kode materi ('a', 'b', 'c', dst.)
 */
function generateQuiz(materiCode) {
    const form = document.getElementById(`quiz-form-${materiCode}`);
    form.innerHTML = '';

    const questions = quizData[materiCode];
    if (!questions || questions.length === 0) return;

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-block');
        
        // Menggunakan nomor dari data kuis (q.question sudah ada nomor)
        questionDiv.innerHTML = `<p><strong>${q.question}</strong></p>`; 

        q.options.forEach((option, optIndex) => {
            const id = `q${materiCode}${index}o${optIndex}`;
            questionDiv.innerHTML += `
                <input type="radio" id="${id}" name="quiz${materiCode}q${index}" value="${option}">
                <label for="${id}">${option}</label><br>
            `;
        });
        form.appendChild(questionDiv);
    });
}

/**
 * Memeriksa jawaban kuis per materi
 * @param {string} materiCode Kode materi ('a', 'b', 'c', dst.)
 */
function submitQuiz(materiCode) {
    const form = document.getElementById(`quiz-form-${materiCode}`);
    const resultDiv = document.getElementById(`quiz-result-${materiCode}`);
    const questions = quizData[materiCode];

    if (!questions || questions.length === 0) {
        resultDiv.innerHTML = '<p>Tidak ada soal untuk dinilai.</p>';
        resultDiv.style.display = 'block';
        return;
    }

    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = form.querySelector(`input[name="quiz${materiCode}q${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.correctAnswer) {
            score++;
        }
    });

    const totalQuestions = questions.length;
    const finalScore = (score / totalQuestions) * 100;

    resultDiv.innerHTML = `
        <h3>🎉 Hasil Kuis Anda</h3>
        <p>Jawaban Benar: <strong>${score}</strong> dari ${totalQuestions} soal.</p>
        <p>Nilai Anda: <strong>${finalScore.toFixed(0)}</strong></p>
        <p>Anda disarankan untuk mengulang materi jika nilai di bawah 75.</p>
    `;
    resultDiv.style.display = 'block';
}


// --- FUNGSI UNTUK UJIAN GABUNGAN (STS & SAS) ---

/**
 * Membuat soal Ujian Gabungan (STS atau SAS)
 * @param {string} examCode Kode ujian ('sts' atau 'sas')
 */
function generateExam(examCode) {
    const form = document.getElementById(`exam-form-${examCode}`);
    form.innerHTML = '';
    const exam = examData[examCode];
    if (!exam) return;

    // A. Pilihan Ganda (PG)
    let pgHTML = '<h3>A. Pilihan Ganda (PG)</h3>';
    exam.pg.forEach((q, index) => {
        const questionNumber = index + 1;
        // Mengambil teks pertanyaan tanpa nomor yang sudah ada di data
        const questionText = q.question.substring(q.question.indexOf('.') + 1).trim(); 
        pgHTML += `<div class="question-block">
            <p><strong>${questionNumber}. ${questionText}</strong></p>`;
        q.options.forEach((option, optIndex) => {
            const id = `exam${examCode}pg${index}o${optIndex}`;
            pgHTML += `
                <input type="radio" id="${id}" name="exam${examCode}pg${index}" value="${option}">
                <label for="${id}">${option}</label><br>
            `;
        });
        pgHTML += '</div>';
    });
    form.innerHTML += pgHTML;

    // B. Isian Singkat
    let isianHTML = '<h3>B. Isian Singkat</h3>';
    exam.isian.forEach((q, index) => {
        const questionNumber = index + 1;
        const questionText = q.question.substring(q.question.indexOf('.') + 1).trim();
        isianHTML += `<div class="question-block">
            <p><strong>${questionNumber}. ${questionText}</strong></p>
            <input type="text" name="exam${examCode}isian${index}" style="width: 80%; padding: 8px; border-radius: 5px;" placeholder="Tulis jawaban Anda...">
        </div>`;
    });
    form.innerHTML += isianHTML;

    // C. Esai (Hanya untuk dinilai guru, tidak dinilai otomatis)
    let esaiHTML = '<h3>C. Esai</h3>';
    exam.esai.forEach((q, index) => {
        const questionNumber = index + 1;
        const questionText = q.substring(q.indexOf('.') + 1).trim();
        esaiHTML += `<div class="question-block">
            <p><strong>${questionNumber}. ${questionText}</strong></p>
            <textarea name="exam${examCode}esai${index}" rows="4" style="width: 98%; padding: 8px; border-radius: 5px;"></textarea>
        </div>`;
    });
    form.innerHTML += esaiHTML;
}

/**
 * Memeriksa jawaban Ujian (Hanya PG dan Isian)
 * @param {string} examCode Kode ujian ('sts' atau 'sas')
 */
function submitExam(examCode) {
    const form = document.getElementById(`exam-form-${examCode}`);
    const resultDiv = document.getElementById(`exam-result-${examCode}`);
    const exam = examData[examCode];
    let scorePG = 0;
    let scoreIsian = 0;

    // Cek PG
    exam.pg.forEach((q, index) => {
        const selectedOption = form.querySelector(`input[name="exam${examCode}pg${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.correctAnswer) {
            scorePG++;
        }
    });

    // Cek Isian
    exam.isian.forEach((q, index) => {
        const input = form.querySelector(`input[name="exam${examCode}isian${index}"]`);
        if (input) {
            // Normalisasi jawaban: lowercase dan trim
            const userAnswer = input.value.toLowerCase().trim();
            // Normalisasi jawaban yang benar
            const correctAnswer = q.correctAnswer.toLowerCase().trim();
            if (userAnswer === correctAnswer) {
                scoreIsian++;
            }
        }
    });

    // Perhitungan Skor (Anggap PG = 4 poin, Isian = 6 poin)
    const totalPG = exam.pg.length;
    const totalIsian = exam.isian.length;
    const maxScore = (totalPG * 4) + (totalIsian * 6);
    const attainedScore = (scorePG * 4) + (scoreIsian * 6);

    resultDiv.innerHTML = `
        <h3>🏅 Hasil Ujian Anda (Otomatis)</h3>
        <p>Bagian Pilihan Ganda (Bobot 4 poin/soal):</p>
        <ul>
            <li>Benar: <strong>${scorePG}</strong> dari ${totalPG} soal.</li>
            <li>Skor PG: <strong>${scorePG * 4}</strong> poin.</li>
        </ul>
        <p>Bagian Isian Singkat (Bobot 6 poin/soal):</p>
        <ul>
            <li>Benar: <strong>${scoreIsian}</strong> dari ${totalIsian} soal.</li>
            <li>Skor Isian: <strong>${scoreIsian * 6}</strong> poin.</li>
        </ul>
        <hr>
        <h4>Total Nilai Sementara: <strong>${attainedScore}</strong> dari ${maxScore}</h4>
        <p>Nilai Akhir akan diumumkan oleh Guru setelah menilai bagian Esai.</p>
    `;
    resultDiv.style.display = 'block';
}

// Panggil showContent() untuk inisialisasi konten saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Pastikan konten 'materi-k1-a' aktif saat pertama kali load
    // dan tombol navigasi A aktif
    showContent('materi-k1-a', document.querySelector('.sidebar-nav .nav-btn:first-of-type'));
});