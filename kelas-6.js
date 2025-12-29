// ===========================================
// FILE: assets/js/script-kelas-6.js
// Deskripsi: Logika Materi, Kuis, & Download untuk KELAS 6
// Perbaikan: Penomoran Soal Otomatis (Tidak Ganda)
// ===========================================

console.log("Script PJOK Kelas 6 (Fixed Numbering) Berhasil Dimuat!");

// 1. DATABASE SOAL KELAS 6 (CLEAN - TANPA NOMOR DI DEPAN SOAL)
const dbSoal = {
    // MATERI A: BOLA BESAR
    'a': [
        {t:'pg', q:"Variasi menendang bola ke gawang disebut?", o:["A. Passing","B. Shooting","C. Dribbling","D. Heading"], a:"B. Shooting"},
        {t:'pg', q:"Kombinasi lari dan menyundul bola dilakukan saat?", o:["A. Bola menyusur tanah","B. Bola melambung","C. Bola diam","D. Bola mati"], a:"B. Bola melambung"},
        {t:'pg', q:"Passing atas voli perkenaan pada?", o:["A. Telapak tangan","B. Kepalan tangan","C. Ujung jari-jari","D. Lengan bawah"], a:"C. Ujung jari-jari"},
        {t:'pg', q:"Kombinasi passing bawah dan atas dilakukan secara?", o:["A. Sendiri","B. Berpasangan/Kelompok","C. Diam","D. Duduk"], a:"B. Berpasangan/Kelompok"},
        {t:'pg', q:"Menggiring bola basket dilanjutkan lay-up disebut?", o:["A. Jump shoot","B. Pivot","C. Lay-up shoot","D. Rebound"], a:"C. Lay-up shoot"},
        {t:'pg', q:"Mengontrol bola dalam sepak bola bisa menggunakan?", o:["A. Tangan","B. Dada dan Paha","C. Punggung","D. Sikut"], a:"B. Dada dan Paha"},
        {t:'pg', q:"Servis atas bola voli dipukul saat bola?", o:["A. Dipegang","B. Dilambungkan","C. Di tanah","D. Dipantulkan"], a:"B. Dilambungkan"},
        {t:'pg', q:"Pivot dalam basket berguna untuk?", o:["A. Menembak","B. Melindungi bola","C. Mengoper","D. Berlari"], a:"B. Melindungi bola"},
        {t:'pg', q:"Induk organisasi bola voli dunia?", o:["A. FIFA","B. FIBA","C. FIVB","D. IBF"], a:"C. FIVB"},
        {t:'pg', q:"Menendang bola dengan kaki bagian luar menghasilkan bola?", o:["A. Lurus kencang","B. Melengkung/Efek","C. Lambung tinggi","D. Diam"], a:"B. Melengkung/Efek"},
        {t:'pg', q:"Jumlah pemain basket satu tim?", o:["A. 5","B. 6","C. 11","D. 12"], a:"A. 5"},
        {t:'pg', q:"Gerakan smash bola voli adalah pukulan?", o:["A. Pelan","B. Melambung","C. Menukik keras","D. Datar"], a:"C. Menukik keras"},
        {t:'pg', q:"Latihan menendang ke gawang melatih?", o:["A. Kekuatan","B. Akurasi/Ketepatan","C. Daya tahan","D. Kelenturan"], a:"B. Akurasi/Ketepatan"},
        {t:'pg', q:"Posisi jari saat passing atas?", o:["A. Mengepal","B. Rapat","C. Terbuka cekung","D. Lurus kaku"], a:"C. Terbuka cekung"},
        {t:'pg', q:"Dribbling basket bola dipantulkan setinggi?", o:["A. Kepala","B. Pinggang","C. Lutut","D. Dada"], a:"B. Pinggang"},
        {t:'pg', q:"Gerakan tipuan dalam sepak bola disebut?", o:["A. Feinting","B. Shooting","C. Tackling","D. Heading"], a:"A. Feinting"},
        {t:'pg', q:"Libero dalam voli bertugas sebagai?", o:["A. Penyerang","B. Pemain bertahan","C. Server","D. Tosser"], a:"B. Pemain bertahan"},
        {t:'pg', q:"Durasi basket per kuarter (FIBA)?", o:["A. 10 menit","B. 12 menit","C. 15 menit","D. 20 menit"], a:"A. 10 menit"},
        {t:'pg', q:"Offside adalah istilah dalam?", o:["A. Voli","B. Basket","C. Sepak bola","D. Kasti"], a:"C. Sepak bola"},
        {t:'pg', q:"Ukuran lapangan sepak bola standar?", o:["A. 100-110 m","B. 50-60 m","C. 20-30 m","D. 200 m"], a:"A. 100-110 m"},
        {t:'es', q:"Sebutkan 3 variasi menendang bola!"}, 
        {t:'es', q:"Cara melakukan passing atas voli?"}, 
        {t:'es', q:"Apa itu lay-up dalam basket?"}, 
        {t:'es', q:"Tugas tosser dalam voli?"}, 
        {t:'es', q:"Sebutkan posisi pemain sepak bola!"}
    ],

    // MATERI B: BOLA KECIL
    'b': [
        {t:'pg', q:"Permainan rounders mirip dengan?", o:["A. Voli","B. Kasti","C. Basket","D. Sepak bola"], a:"B. Kasti"},
        {t:'pg', q:"Lapangan rounders berbentuk?", o:["A. Persegi panjang","B. Segi lima","C. Lingkaran","D. Segitiga"], a:"B. Segi lima"},
        {t:'pg', q:"Melempar bola untuk mematikan lawan arahnya?", o:["A. Melambung","B. Menyusur tanah","C. Mendatar ke tubuh","D. Ke atas"], a:"C. Mendatar ke tubuh"},
        {t:'pg', q:"Menangkap bola lambung posisi tangan?", o:["A. Di samping","B. Membentuk corong","C. Di bawah","D. Mengepal"], a:"B. Membentuk corong"},
        {t:'pg', q:"Alat pemukul rounders terbuat dari?", o:["A. Besi","B. Plastik","C. Kayu","D. Karet"], a:"C. Kayu"},
        {t:'pg', q:"Setelah memukul bola, pemain lari ke?", o:["A. Base/Tiang","B. Gawang","C. Net","D. Bebas"], a:"A. Base/Tiang"},
        {t:'pg', q:"Jumlah base dalam rounders?", o:["A. 3","B. 4","C. 5","D. 6"], a:"C. 5"},
        {t:'pg', q:"Lemparan pitcher (pelambung) harus?", o:["A. Sangat cepat","B. Sesuai permintaan pemukul","C. Melenceng","D. Mengenai badan"], a:"B. Sesuai permintaan pemukul"},
        {t:'pg', q:"Gerak lokomotor kasti/rounders?", o:["A. Melempar","B. Memukul","C. Berlari","D. Menangkap"], a:"C. Berlari"},
        {t:'pg', q:"Pukulan tanpa ayunan disebut?", o:["A. Swing","B. Bunt","C. Smash","D. Drive"], a:"B. Bunt"},
        {t:'pg', q:"Pemain yang bertugas menangkap bola di belakang pemukul?", o:["A. Pitcher","B. Catcher","C. Striker","D. Keeper"], a:"B. Catcher"},
        {t:'pg', q:"Nilai home run dalam rounders?", o:["A. 1","B. 2","C. 5","D. 6"], a:"D. 6"},
        {t:'pg', q:"Lemparan menyusur tanah badan harus?", o:["A. Tegak","B. Miring","C. Membungkuk","D. Lompat"], a:"C. Membungkuk"},
        {t:'pg', q:"Mematikan lawan dengan cara?", o:["A. Menyentuhkan bola (tik)","B. Menendang","C. Mendorong","D. Menghadang"], a:"A. Menyentuhkan bola (tik)"},
        {t:'pg', q:"Tenis meja dimainkan di?", o:["A. Lantai","B. Meja","C. Lapangan rumput","D. Pasir"], a:"B. Meja"},
        {t:'pg', q:"Alat pukul tenis meja?", o:["A. Raket","B. Stick","C. Bet","D. Tongkat"], a:"C. Bet"},
        {t:'pg', q:"Pukulan awal tenis meja?", o:["A. Smash","B. Blok","C. Servis","D. Chop"], a:"C. Servis"},
        {t:'pg', q:"Induk tenis meja Indonesia?", o:["A. PTMSI","B. PBSI","C. PSSI","D. PELTI"], a:"A. PTMSI"},
        {t:'pg', q:"Bola kasti terbuat dari?", o:["A. Plastik keras","B. Karet berisi sabut","C. Besi","D. Kayu"], a:"B. Karet berisi sabut"},
        {t:'pg', q:"Lama permainan kasti?", o:["A. 2x30 menit","B. 1 jam","C. Bebas","D. 2x45 menit"], a:"A. 2x30 menit"},
        {t:'es', q:"Perbedaan kasti dan rounders?"}, {t:'es', q:"Cara menangkap bola lambung?"}, {t:'es', q:"Apa tugas pitcher?"}, {t:'es', q:"Sebutkan alat rounders!"}, {t:'es', q:"Cara mematikan lawan rounders?"}
    ],

    // MATERI C: ATLETIK
    'c': [
        {t:'pg', q:"Lari estafet adalah lari?", o:["A. Jarak jauh","B. Sambung/Beregu","C. Sendiri","D. Santai"], a:"B. Sambung/Beregu"},
        {t:'pg', q:"Jumlah pelari estafet?", o:["A. 2 orang","B. 3 orang","C. 4 orang","D. 5 orang"], a:"C. 4 orang"},
        {t:'pg', q:"Alat yang diberikan saat estafet?", o:["A. Bola","B. Tongkat","C. Bendera","D. Tali"], a:"B. Tongkat"},
        {t:'pg', q:"Perpindahan tongkat dilakukan di?", o:["A. Sembarang tempat","B. Zona wissel","C. Garis start","D. Garis finish"], a:"B. Zona wissel"},
        {t:'pg', q:"Panjang zona wissel?", o:["A. 10 m","B. 20 m","C. 30 m","D. 40 m"], a:"B. 20 m"},
        {t:'pg', q:"Cara memberi tongkat dari atas disebut?", o:["A. Visual","B. Non-visual","C. Downsweep","D. Upsweep"], a:"C. Downsweep"},
        {t:'pg', q:"Awalan lompat jauh adalah?", o:["A. Jalan","B. Lari secepatnya","C. Lompat-lompat","D. Diam"], a:"B. Lari secepatnya"},
        {t:'pg', q:"Tolakan lompat jauh menggunakan?", o:["A. Dua kaki","B. Satu kaki terkuat","C. Tumit","D. Ujung jari"], a:"B. Satu kaki terkuat"},
        {t:'pg', q:"Sikap badan di udara lompat jauh gaya jongkok?", o:["A. Lurus","B. Menekuk lutut","C. Melenting","D. Miring"], a:"B. Menekuk lutut"},
        {t:'pg', q:"Mendarat yang benar menggunakan?", o:["A. Satu kaki","B. Pantat","C. Dua kaki mengeper","D. Tangan"], a:"C. Dua kaki mengeper"},
        {t:'pg', q:"Lempar turbo melatih?", o:["A. Otot kaki","B. Otot lengan & bahu","C. Leher","D. Perut"], a:"B. Otot lengan & bahu"},
        {t:'pg', q:"Awalan lempar turbo?", o:["A. Lari langkah silang","B. Lompat","C. Jalan santai","D. Diam"], a:"A. Lari langkah silang"},
        {t:'pg', q:"Arah lemparan turbo?", o:["A. Ke bawah","B. Mendatar","C. Melambung jauh","D. Ke belakang"], a:"C. Melambung jauh"},
        {t:'pg', q:"Start pelari pertama estafet?", o:["A. Melayang","B. Berdiri","C. Jongkok","D. Duduk"], a:"C. Jongkok"},
        {t:'pg', q:"Start pelari 2, 3, 4 estafet?", o:["A. Jongkok","B. Melayang","C. Berdiri","D. Guling"], a:"B. Melayang"},
        {t:'pg', q:"Jarak lari estafet resmi?", o:["A. 4x100 m","B. 4x50 m","C. 4x200 m","D. 4x1000 m"], a:"A. 4x100 m"},
        {t:'pg', q:"Diskualifikasi estafet jika?", o:["A. Lari cepat","B. Tongkat jatuh/Keluar jalur","C. Oper tongkat","D. Juara 1"], a:"B. Tongkat jatuh/Keluar jalur"},
        {t:'pg', q:"Lompat jauh gaya menggantung disebut?", o:["A. Ortodok","B. Schnepper","C. Hang style","D. Walking in the air"], a:"C. Hang style"},
        {t:'pg', q:"Sudut tolakan lompat jauh?", o:["A. 90 derajat","B. 45 derajat","C. 10 derajat","D. 180 derajat"], a:"B. 45 derajat"},
        {t:'pg', q:"Induk atletik dunia?", o:["A. FIFA","B. IAAF","C. FIBA","D. PASI"], a:"B. IAAF"},
        {t:'es', q:"Sebutkan tahapan lompat jauh!"}, {t:'es', q:"Cara memberi tongkat estafet?"}, {t:'es', q:"Apa itu zona wissel?"}, {t:'es', q:"Kesalahan saat lompat jauh?"}, {t:'es', q:"Teknik lempar turbo?"}
    ],

    // MATERI D: BELADIRI
    'd': [
        {t:'pg', q:"Arah langkah pencak silat?", o:["A. 4 arah","B. 8 penjuru mata angin","C. Lurus","D. Bebas"], a:"B. 8 penjuru mata angin"},
        {t:'pg', q:"Pola langkah seperti huruf U disebut?", o:["A. Ladam","B. Zig-zag","C. Segitiga","D. Lurus"], a:"A. Ladam"},
        {t:'pg', q:"Variasi kuda-kuda depan berat badan di?", o:["A. Kaki belakang","B. Kaki depan","C. Tengah","D. Samping"], a:"B. Kaki depan"},
        {t:'pg', q:"Pukulan dari samping ke arah badan?", o:["A. Lurus","B. Bandul","C. Melingkar","D. Tegak"], a:"C. Melingkar"},
        {t:'pg', q:"Tangkisan untuk serangan dari atas?", o:["A. Tangkisan bawah","B. Tangkisan atas","C. Tangkisan luar","D. Tangkisan dalam"], a:"B. Tangkisan atas"},
        {t:'pg', q:"Tendangan menggunakan punggung kaki?", o:["A. Sabit","B. T","C. Lurus","D. Belakang"], a:"A. Sabit"},
        {t:'pg', q:"Elakan adalah usaha pembelaan dengan?", o:["A. Kontak fisik","B. Memindahkan tubuh","C. Memukul balik","D. Diam"], a:"B. Memindahkan tubuh"},
        {t:'pg', q:"Sasaran pukulan lurus?", o:["A. Kaki","B. Ulu hati/Dada","C. Kepala","D. Paha"], a:"B. Ulu hati/Dada"},
        {t:'pg', q:"Sikap pasang terbuka artinya?", o:["A. Melindungi tubuh","B. Memancing lawan","C. Menyerah","D. Istirahat"], a:"B. Memancing lawan"},
        {t:'pg', q:"Kuda-kuda silang kaki posisi?", o:["A. Sejajar","B. Menyilang","C. Lurus","D. Diangkat"], a:"B. Menyilang"},
        {t:'pg', q:"Sapuan adalah serangan menjatuhkan lawan pada?", o:["A. Kepala","B. Badan","C. Kaki","D. Tangan"], a:"C. Kaki"},
        {t:'pg', q:"Tangkisan dalam menahan serangan dari?", o:["A. Luar ke dalam","B. Dalam ke luar","C. Atas","D. Bawah"], a:"A. Luar ke dalam"},
        {t:'pg', q:"Induk silat?", o:["A. PSSI","B. IPSI","C. PRSI","D. PBSI"], a:"B. IPSI"},
        {t:'pg', q:"Pukulan sangkol/bandul arahnya?", o:["A. Lurus","B. Bawah ke atas","C. Samping","D. Atas ke bawah"], a:"B. Bawah ke atas"},
        {t:'pg', q:"Tendangan T menggunakan?", o:["A. Ujung kaki","B. Telapak/Samping kaki","C. Lutut","D. Punggung kaki"], a:"B. Telapak/Samping kaki"},
        {t:'pg', q:"Hindaran hadap memindahkan kaki ke?", o:["A. Belakang","B. Samping","C. Depan","D. Tempat"], a:"A. Belakang"},
        {t:'pg', q:"Variasi gerak nonlokomotor silat?", o:["A. Langkah","B. Kuda-kuda & Pukulan","C. Lari","D. Lompat"], a:"B. Kuda-kuda & Pukulan"},
        {t:'pg', q:"Kunci keberhasilan bela diri?", o:["A. Emosi","B. Tenang & Waspada","C. Marah","D. Takut"], a:"B. Tenang & Waspada"},
        {t:'pg', q:"Gelanggang silat alasnya?", o:["A. Pasir","B. Matras","C. Rumput","D. Keramik"], a:"B. Matras"},
        {t:'pg', q:"Warna sudut pesilat?", o:["A. Merah & Biru","B. Hitam & Putih","C. Kuning & Hijau","D. Ungu & Orange"], a:"A. Merah & Biru"},
        {t:'es', q:"Sebutkan 3 pola langkah!"}, {t:'es', q:"Apa beda tangkisan dan elakan?"}, {t:'es', q:"Cara melakukan tendangan T?"}, {t:'es', q:"Sasaran pukulan bandul?"}, {t:'es', q:"Nilai luhur pencak silat?"}
    ],

    // MATERI E: KEBUGARAN
    'e': [
        {t:'pg', q:"Circuit training artinya?", o:["A. Lari terus","B. Latihan sirkuit/pos","C. Senam","D. Renang"], a:"B. Latihan sirkuit/pos"},
        {t:'pg', q:"Pos 1 biasanya melatih?", o:["A. Kecepatan","B. Kekuatan (Push up)","C. Daya tahan","D. Kelenturan"], a:"B. Kekuatan (Push up)"},
        {t:'pg', q:"Shuttle run melatih?", o:["A. Kelincahan","B. Kekuatan","C. Keseimbangan","D. Power"], a:"A. Kelincahan"},
        {t:'pg', q:"Lompat tali melatih?", o:["A. Daya tahan jantung","B. Leher","C. Jari","D. Perut"], a:"A. Daya tahan jantung"},
        {t:'pg', q:"Squat thrust adalah kombinasi?", o:["A. Lari lompat","B. Jongkok, lempar kaki, berdiri","C. Guling","D. Kayang"], a:"B. Jongkok, lempar kaki, berdiri"},
        {t:'pg', q:"Lari lintas alam (cross country) melatih?", o:["A. Kecepatan","B. Daya tahan jantung","C. Kelenturan","D. Reaksi"], a:"B. Daya tahan jantung"},
        {t:'pg', q:"Interval training adalah lari dengan?", o:["A. Santai","B. Selingan istirahat/variasi","C. Cepat terus","D. Jalan"], a:"B. Selingan istirahat/variasi"},
        {t:'pg', q:"Denyut nadi maksimal (DNM) rumus?", o:["A. 200-umur","B. 220-umur","C. 100+umur","D. 150-umur"], a:"B. 220-umur"},
        {t:'pg', q:"Menghitung nadi normal di?", o:["A. Leher/Pergelangan tangan","B. Perut","C. Kaki","D. Punggung"], a:"A. Leher/Pergelangan tangan"},
        {t:'pg', q:"Peregangan statis dilakukan?", o:["A. Bergerak","B. Diam menahan","C. Melompat","D. Lari"], a:"B. Diam menahan"},
        {t:'pg', q:"Lari zig-zag melatih?", o:["A. Kekuatan","B. Kelincahan","C. Power","D. Daya tahan"], a:"B. Kelincahan"},
        {t:'pg', q:"Naik turun bangku melatih?", o:["A. Otot tangan","B. Otot kaki & jantung","C. Leher","D. Punggung"], a:"B. Otot kaki & jantung"},
        {t:'pg', q:"Back up melatih?", o:["A. Otot punggung","B. Perut","C. Kaki","D. Tangan"], a:"A. Otot punggung"},
        {t:'pg', q:"Istirahat antar pos sirkuit?", o:["A. 1 jam","B. 15-30 detik","C. 10 menit","D. Tidak ada"], a:"B. 15-30 detik"},
        {t:'pg', q:"Agar tidak cedera wajib?", o:["A. Makan","B. Pemanasan","C. Tidur","D. Minum"], a:"B. Pemanasan"},
        {t:'pg', q:"Gerobak dorong melatih?", o:["A. Kaki","B. Tangan & Bahu","C. Leher","D. Kepala"], a:"B. Tangan & Bahu"},
        {t:'pg', q:"Plank melatih otot?", o:["A. Inti/Perut","B. Kaki","C. Leher","D. Jari"], a:"A. Inti/Perut"},
        {t:'pg', q:"Tes baring duduk disebut?", o:["A. Push up","B. Sit up","C. Pull up","D. Squat"], a:"B. Sit up"},
        {t:'pg', q:"Daya tahan paru-paru dilatih dengan?", o:["A. Angkat beban","B. Aerobik/Jogging","C. Sprint","D. Tidur"], a:"B. Aerobik/Jogging"},
        {t:'pg', q:"Sehat artinya?", o:["A. Bebas penyakit","B. Kaya","C. Kuat","D. Pintar"], a:"A. Bebas penyakit"},
        {t:'es', q:"Apa itu circuit training?"}, {t:'es', q:"Sebutkan 3 pos latihan sirkuit!"}, {t:'es', q:"Manfaat lari bolak-balik?"}, {t:'es', q:"Cara hitung denyut nadi?"}, {t:'es', q:"Apa itu daya tahan?"}
    ],

    // MATERI F: SENAM LANTAI
    'f': [
        {t:'pg', q:"Rangkaian gerak senam adalah?", o:["A. Satu gerakan","B. Gabungan beberapa gerakan","C. Diam","D. Lari"], a:"B. Gabungan beberapa gerakan"},
        {t:'pg', q:"Guling depan dilanjut guling belakang disebut?", o:["A. Rangkaian guling","B. Meroda","C. Salto","D. Kayang"], a:"A. Rangkaian guling"},
        {t:'pg', q:"Guling lenting lecutan kaki ke?", o:["A. Belakang","B. Depan atas","C. Samping","D. Bawah"], a:"B. Depan atas"},
        {t:'pg', q:"Tumpuan guling lenting?", o:["A. Kepala","B. Tengkuk & Tangan","C. Kaki","D. Dahi"], a:"B. Tengkuk & Tangan"},
        {t:'pg', q:"Sikap akhir guling lenting?", o:["A. Jongkok","B. Berdiri tegak","C. Tidur","D. Duduk"], a:"B. Berdiri tegak"},
        {t:'pg', q:"Meroda memutar tubuh ke?", o:["A. Depan","B. Samping","C. Belakang","D. Bawah"], a:"B. Samping"},
        {t:'pg', q:"Handstand tumpuan?", o:["A. Kaki","B. Tangan","C. Kepala","D. Sikut"], a:"B. Tangan"},
        {t:'pg', q:"Sikap lilin pinggang ditopang?", o:["A. Tembok","B. Tangan","C. Teman","D. Kaki"], a:"B. Tangan"},
        {t:'pg', q:"Rangkaian meroda dan guling depan?", o:["A. Berputar lalu berguling","B. Lari lalu diam","C. Loncat","D. Kayang"], a:"A. Berputar lalu berguling"},
        {t:'pg', q:"Lompat kangkang melewati?", o:["A. Tali","B. Peti lompat/Teman","C. Gawang","D. Matras"], a:"B. Peti lompat/Teman"},
        {t:'pg', q:"Sikap kaki lompat kangkang?", o:["A. Rapat","B. Dibuka lebar","C. Ditekuk","D. Lurus"], a:"B. Dibuka lebar"},
        {t:'pg', q:"Matras berfungsi?", o:["A. Hiasan","B. Mencegah cedera","C. Pemberat","D. Rintangan"], a:"B. Mencegah cedera"},
        {t:'pg', q:"Bantuan guling depan memegang?", o:["A. Tangan","B. Tengkuk/Panggul","C. Kaki","D. Kepala"], a:"B. Tengkuk/Panggul"},
        {t:'pg', q:"Pemanasan senam fokus pada?", o:["A. Kaki saja","B. Kelenturan & Persendian","C. Lari","D. Lompat"], a:"B. Kelenturan & Persendian"},
        {t:'pg', q:"Lompat harimau mirip dengan?", o:["A. Guling belakang","B. Guling depan (ada loncatan)","C. Meroda","D. Kayang"], a:"B. Guling depan (ada loncatan)"},
        {t:'pg', q:"Salto adalah guling di?", o:["A. Matras","B. Udara","C. Air","D. Pasir"], a:"B. Udara"},
        {t:'pg', q:"Keseimbangan sangat perlu saat?", o:["A. Guling","B. Handstand/Lilin","C. Lari","D. Tidur"], a:"B. Handstand/Lilin"},
        {t:'pg', q:"Sikap kayang badan seperti?", o:["A. Lilin","B. Busur","C. Pesawat","D. Bola"], a:"B. Busur"},
        {t:'pg', q:"Guling belakang arah?", o:["A. Maju","B. Mundur","C. Samping","D. Atas"], a:"B. Mundur"},
        {t:'pg', q:"Senam lantai melatih?", o:["A. Kelenturan & Keberanian","B. Ketakutan","C. Kekakuan","D. Kebosanan"], a:"A. Kelenturan & Keberanian"},
        {t:'es', q:"Apa itu guling lenting?"}, {t:'es', q:"Cara lompat kangkang?"}, {t:'es', q:"Rangkaian gerakan artinya?"}, {t:'es', q:"Kesalahan guling lenting?"}, {t:'es', q:"Manfaat senam lantai?"}
    ],

    // MATERI G: SENAM IRAMA
    'g': [
        {t:'pg', q:"Senam ritmik beregu harus?", o:["A. Sendiri","B. Kompak/Serasi","C. Cepat","D. Lambat"], a:"B. Kompak/Serasi"},
        {t:'pg', q:"Langkah ganti disebut?", o:["A. Looppas","B. Wisselpas","C. Bijtrekpas","D. Galoppas"], a:"B. Wisselpas"},
        {t:'pg', q:"Langkah lingkar disebut?", o:["A. Huppel","B. Draipas","C. Kruis","D. Loop"], a:"B. Draipas"},
        {t:'pg', q:"Ayunan satu lengan melingkar di?", o:["A. Atas kepala","B. Bawah","C. Depan","D. Belakang"], a:"A. Atas kepala"},
        {t:'pg', q:"Gerakan memompa ayunan ke?", o:["A. Samping","B. Bawah atas","C. Depan belakang","D. Putar"], a:"B. Bawah atas"},
        {t:'pg', q:"Koreografi adalah?", o:["A. Alat senam","B. Susunan gerakan","C. Musik","D. Pakaian"], a:"B. Susunan gerakan"},
        {t:'pg', q:"Formasi barisan senam bisa?", o:["A. Lingkaran/V","B. Acak","C. Berantakan","D. Jauh-jauh"], a:"A. Lingkaran/V"},
        {t:'pg', q:"Irama musik 4/4 hitungannya?", o:["A. 1-2","B. 1-2-3-4","C. 1-2-3","D. 1"], a:"B. 1-2-3-4"},
        {t:'pg', q:"Langkah keseimbangan?", o:["A. Balanspas","B. Loopas","C. By trek","D. Galop"], a:"A. Balanspas"},
        {t:'pg', q:"Ayunan silang depan dada?", o:["A. Satu lengan","B. Dua lengan","C. Kaki","D. Kepala"], a:"B. Dua lengan"},
        {t:'pg', q:"Unsur kontinuitas artinya?", o:["A. Terputus","B. Menyambung/Terus-menerus","C. Berhenti","D. Kaku"], a:"B. Menyambung/Terus-menerus"},
        {t:'pg', q:"Senam irama tanpa alat?", o:["A. Ritmik bebas","B. Alat","C. Lantai","D. Ketangkasan"], a:"A. Ritmik bebas"},
        {t:'pg', q:"Simpai diputar di?", o:["A. Pinggang/Tangan","B. Kaki","C. Kepala","D. Hidung"], a:"A. Pinggang/Tangan"},
        {t:'pg', q:"Musik senam kreasi daerah pakai?", o:["A. Lagu barat","B. Lagu daerah","C. Dangdut","D. Rock"], a:"B. Lagu daerah"},
        {t:'pg', q:"Pemanasan gerakan kepala?", o:["A. Tengok/Patah","B. Lari","C. Lompat","D. Guling"], a:"A. Tengok/Patah"},
        {t:'pg', q:"Gerak inti dilakukan dengan?", o:["A. Semangat/Power","B. Lemas","C. Pelan","D. Tidur"], a:"A. Semangat/Power"},
        {t:'pg', q:"Pendinginan gerakan?", o:["A. Tarik napas/Rileks","B. Lari","C. Loncat","D. Teriak"], a:"A. Tarik napas/Rileks"},
        {t:'pg', q:"Variasi langkah ke samping?", o:["A. Galoppas/Zijpas","B. Loopas","C. Lingkar","D. Maju"], a:"A. Galoppas/Zijpas"},
        {t:'pg', q:"Menilai senam dari?", o:["A. Baju","B. Kekompakan & Teknik","C. Sepatu","D. Suara"], a:"B. Kekompakan & Teknik"},
        {t:'pg', q:"Senam menyehatkan?", o:["A. Pikiran & Tubuh","B. Dompet","C. Tas","D. Rumah"], a:"A. Pikiran & Tubuh"},
        {t:'es', q:"Apa itu wisselpas?"}, {t:'es', q:"Sebutkan variasi ayunan lengan!"}, {t:'es', q:"Apa itu koreografi?"}, {t:'es', q:"Manfaat senam beregu?"}, {t:'es', q:"Syarat senam yang baik?"}
    ],

    // MATERI H: RENANG & P3K
    'h': [
        {t:'pg', q:"Renang gaya punggung wajah?", o:["A. Masuk air","B. Menghadap atas","C. Miring","D. Bawah"], a:"B. Menghadap atas"},
        {t:'pg', q:"Start gaya punggung di?", o:["A. Atas balok","B. Dalam air","C. Papan loncat","D. Pinggir"], a:"B. Dalam air"},
        {t:'pg', q:"Gerakan kaki gaya punggung?", o:["A. Naik turun (sumber paha)","B. Membuka","C. Diam","D. Putar"], a:"A. Naik turun (sumber paha)"},
        {t:'pg', q:"Tangan gaya punggung?", o:["A. Kayuh ke depan","B. Kayuh ke belakang bergantian","C. Diam","D. Rapat"], a:"B. Kayuh ke belakang bergantian"},
        {t:'pg', q:"Napas gaya punggung?", o:["A. Bebas/Kapan saja","B. Dalam air","C. Tahan","D. Susah"], a:"A. Bebas/Kapan saja"},
        {t:'pg', q:"Penyelamatan di air pakai?", o:["A. Ban/Pelampung","B. Batu","C. Baju","D. Tali rafia"], a:"A. Ban/Pelampung"},
        {t:'pg', q:"Teknik lempar ban?", o:["A. Ke kepala korban","B. Dekat korban","C. Jauh sekali","D. Ke tepi"], a:"B. Dekat korban"},
        {t:'pg', q:"Jika kram di air?", o:["A. Panik","B. Tenang & Mengapung","C. Menyelam","D. Lari"], a:"B. Tenang & Mengapung"},
        {t:'pg', q:"Dasar P3K kram otot?", o:["A. Pijat/Luruskan","B. Pukul","C. Siram air panas","D. Ikat"], a:"A. Pijat/Luruskan"},
        {t:'pg', q:"Luka lecet di air?", o:["A. Bersihkan & Plester","B. Biarkan","C. Gosok pasir","D. Siram sirup"], a:"A. Bersihkan & Plester"},
        {t:'pg', q:"Posisi tubuh gaya punggung?", o:["A. Streamline (Lurus)","B. Bengkok","C. Miring","D. Tegak"], a:"A. Streamline (Lurus)"},
        {t:'pg', q:"Masuknya tangan ke air gaya punggung?", o:["A. Jari kelingking dulu","B. Jempol","C. Sikut","D. Telapak"], a:"A. Jari kelingking dulu"},
        {t:'pg', q:"Induk renang dunia?", o:["A. FINA","B. FIFA","C. FIBA","D. IBF"], a:"A. FINA"},
        {t:'pg', q:"Renang melatih sistem?", o:["A. Pernapasan","B. Pencernaan","C. Penglihatan","D. Pendengaran"], a:"A. Pernapasan"},
        {t:'pg', q:"Bahaya di kolam?", o:["A. Tenggelam/Terpleset","B. Kehujanan","C. Kepanasan","D. Haus"], a:"A. Tenggelam/Terpleset"},
        {t:'pg', q:"Rambu merah di kolam?", o:["A. Aman","B. Bahaya/Dalam","C. Dangkal","D. Tempat makan"], a:"B. Bahaya/Dalam"},
        {t:'pg', q:"Menolong orang panik?", o:["A. Dari belakang","B. Dari depan","C. Ikut panik","D. Tinggalkan"], a:"A. Dari belakang"},
        {t:'pg', q:"Gaya punggung disebut?", o:["A. Back stroke","B. Crawl","C. Breast stroke","D. Butterfly"], a:"A. Back stroke"},
        {t:'pg', q:"Meluncur gaya punggung?", o:["A. Dorong dinding, tangan lurus","B. Jalan","C. Lompat","D. Diam"], a:"A. Dorong dinding, tangan lurus"},
        {t:'pg', q:"Etika di kolam?", o:["A. Meludah","B. Jaga kebersihan","C. Buang sampah","D. Dorong teman"], a:"B. Jaga kebersihan"},
        {t:'es', q:"Posisi start gaya punggung?"}, {t:'es', q:"Kesalahan gaya punggung?"}, {t:'es', q:"Cara tolong teman tenggelam?"}, {t:'es', q:"Tanda bahaya di kolam?"}, {t:'es', q:"Penanganan kram?"}
    ],

    // MATERI I: KESEHATAN
    'i': [
        {t:'pg', q:"Alat reproduksi harus?", o:["A. Bersih & Kering","B. Lembap","C. Kotor","D. Basah"], a:"A. Bersih & Kering"},
        {t:'pg', q:"Cebok yang benar?", o:["A. Depan ke belakang","B. Belakang ke depan","C. Acak","D. Samping"], a:"A. Depan ke belakang"},
        {t:'pg', q:"Ganti celana dalam?", o:["A. 2x sehari","B. 1 minggu","C. 2 hari","D. Jarang"], a:"A. 2x sehari"},
        {t:'pg', q:"Bahan CD yang baik?", o:["A. Katun (menyerap)","B. Plastik","C. Jeans","D. Karet"], a:"A. Katun (menyerap)"},
        {t:'pg', q:"Penyakit akibat jamur?", o:["A. Gatal-gatal","B. Flu","C. Batuk","D. Pusing"], a:"A. Gatal-gatal"},
        {t:'pg', q:"Pubertas ditandai?", o:["A. Perubahan fisik/hormon","B. Makin kecil","C. Sakit","D. Diam"], a:"A. Perubahan fisik/hormon"},
        {t:'pg', q:"Menstruasi pada?", o:["A. Perempuan","B. Laki-laki","C. Bayi","D. Semua"], a:"A. Perempuan"},
        {t:'pg', q:"Mimpi basah pada?", o:["A. Laki-laki","B. Perempuan","C. Balita","D. Nenek"], a:"A. Laki-laki"},
        {t:'pg', q:"Handuk harus?", o:["A. Sendiri & Bersih","B. Bergantian","C. Kotor","D. Basah"], a:"A. Sendiri & Bersih"},
        {t:'pg', q:"Jika gatal area vital?", o:["A. Periksa dokter","B. Garuk keras","C. Biarkan","D. Beri balsem"], a:"A. Periksa dokter"},
        {t:'pg', q:"Cuci tangan sebelum?", o:["A. Sentuh area vital","B. Tidur","C. Lari","D. Main"], a:"A. Sentuh area vital"},
        {t:'pg', q:"Rambut kemaluan?", o:["A. Dicukur rapi","B. Dibiarkan kotor","C. Dicabut","D. Diwarnai"], a:"A. Dicukur rapi"},
        {t:'pg', q:"Celana ketat?", o:["A. Tidak sehat","B. Bagus","C. Keren","D. Nyaman"], a:"A. Tidak sehat"},
        {t:'pg', q:"Keringat bikin?", o:["A. Bakteri/Jamur","B. Wangi","C. Sehat","D. Bersih"], a:"A. Bakteri/Jamur"},
        {t:'pg', q:"Pembalut wanita ganti?", o:["A. 3-4 jam sekali","B. 1 hari","C. 2 hari","D. Tidak ganti"], a:"A. 3-4 jam sekali"},
        {t:'pg', q:"Sunat/Khitan untuk?", o:["A. Kebersihan/Kesehatan","B. Sakit","C. Main","D. Gaya"], a:"A. Kebersihan/Kesehatan"},
        {t:'pg', q:"Toilet umum harus?", o:["A. Disiram bersih","B. Dibiarkan","C. Kotor","D. Rusak"], a:"A. Disiram bersih"},
        {t:'pg', q:"Menjaga diri dari?", o:["A. Pelecehan","B. Teman","C. Guru","D. Orang tua"], a:"A. Pelecehan"},
        {t:'pg', q:"Bagian pribadi tidak boleh?", o:["A. Disentuh orang lain","B. Dijaga","C. Dibersihkan","D. Dilindungi"], a:"A. Disentuh orang lain"},
        {t:'pg', q:"Kebersihan pangkal?", o:["A. Kesehatan","B. Kaya","C. Pintar","D. Hemat"], a:"A. Kesehatan"},
        {t:'es', q:"Cara cebok benar?"}, {t:'es', q:"Mengapa ganti CD?"}, {t:'es', q:"Ciri pubertas?"}, {t:'es', q:"Cara jaga kebersihan saat haid?"}, {t:'es', q:"Akibat celana ketat?"}
    ],

    // STS (25 PG, 10 Isian, 5 Essay)
    'sts': [
        {t:'pg', q:"Lay up shoot basket?", o:["A. Tembakan melayang","B. Jauh","C. Diam","D. Operan"], a:"A. Tembakan melayang"},
        {t:'pg', q:"Rounders tempat hinggap?", o:["A. 5","B. 4","C. 3","D. 2"], a:"A. 5"},
        {t:'pg', q:"Lari estafet tongkat?", o:["A. Diberikan","B. Dilempar","C. Dibawa pulang","D. Ditinggal"], a:"A. Diberikan"},
        {t:'pg', q:"Pukulan silat?", o:["A. Depan/Bandul","B. Atas","C. Bawah","D. Belakang"], a:"A. Depan/Bandul"},
        {t:'pg', q:"Passing atas voli?", o:["A. Jari-jari","B. Kepalan","C. Sikut","D. Telapak"], a:"A. Jari-jari"},
        {t:'pg', q:"Kasti main di?", o:["A. Lapangan","B. Kelas","C. Kolam","D. Jalan"], a:"A. Lapangan"},
        {t:'pg', q:"Lompat jauh gaya?", o:["A. Jongkok/Gantung","B. Bebas","C. Dada","D. Punggung"], a:"A. Jongkok/Gantung"},
        {t:'pg', q:"Elakan silat?", o:["A. Pindah tubuh","B. Tangkis","C. Pukul","D. Tendang"], a:"A. Pindah tubuh"},
        {t:'pg', q:"Shooting sepak bola?", o:["A. Keras ke gawang","B. Pelan","C. Ke teman","D. Ke atas"], a:"A. Keras ke gawang"},
        {t:'pg', q:"Menangkap bola lambung?", o:["A. Corong ke atas","B. Bawah","C. Samping","D. Belakang"], a:"A. Corong ke atas"},
        {t:'pg', q:"Lempar turbo awalan?", o:["A. Lari silang","B. Diam","C. Jalan","D. Lompat"], a:"A. Lari silang"},
        {t:'pg', q:"Tendangan T pakai?", o:["A. Telapak/Samping","B. Ujung","C. Tumit","D. Lutut"], a:"A. Telapak/Samping"},
        {t:'pg', q:"Jumlah pemain voli?", o:["A. 6","B. 5","C. 11","D. 12"], a:"A. 6"},
        {t:'pg', q:"Nilai lari sendiri kasti?", o:["A. 2","B. 1","C. 0","D. 3"], a:"A. 2"},
        {t:'pg', q:"Zona wissel panjang?", o:["A. 20 m","B. 10 m","C. 30 m","D. 40 m"], a:"A. 20 m"},
        {t:'pg', q:"Tangkisan luar arah?", o:["A. Ke luar","B. Ke dalam","C. Atas","D. Bawah"], a:"A. Ke luar"},
        {t:'pg', q:"Induk basket?", o:["A. PERBASI","B. PSSI","C. PBVSI","D. PASI"], a:"A. PERBASI"},
        {t:'pg', q:"Bunt pukulan?", o:["A. Tanpa ayunan","B. Keras","C. Jauh","D. Tinggi"], a:"A. Tanpa ayunan"},
        {t:'pg', q:"Mendarat lompat jauh?", o:["A. Dua kaki","B. Satu kaki","C. Pantat","D. Tangan"], a:"A. Dua kaki"},
        {t:'pg', q:"Pola langkah silat?", o:["A. Zig-zag/Ladam","B. Lari","C. Lompat","D. Guling"], a:"A. Zig-zag/Ladam"},
        {t:'pg', q:"Dribble basket?", o:["A. Pantul lantai","B. Tendang","C. Lempar","D. Pukul"], a:"A. Pantul lantai"},
        {t:'pg', q:"Pitcher pelempar?", o:["A. Rounders","B. Voli","C. Basket","D. Bola"], a:"A. Rounders"},
        {t:'pg', q:"Start estafet pelari 1?", o:["A. Jongkok","B. Berdiri","C. Melayang","D. Duduk"], a:"A. Jongkok"},
        {t:'pg', q:"Sikap pasang?", o:["A. Siap tempur","B. Istirahat","C. Tidur","D. Hormat"], a:"A. Siap tempur"},
        {t:'pg', q:"Offside bola?", o:["A. Pelanggaran","B. Gol","C. Bagus","D. Hadiah"], a:"A. Pelanggaran"},
        {t:'is', q:"Induk voli dunia ...", a:"fivb"},
        {t:'is', q:"Lemparan menyusur tanah badan ...", a:"bungkuk"},
        {t:'is', q:"Estafet lari ...", a:"sambung"},
        {t:'is', q:"Pukulan silat tangan ...", a:"mengepal"},
        {t:'is', q:"Pivot basket poros ...", a:"satu kaki"},
        {t:'is', q:"Pemukul kasti dari ...", a:"kayu"},
        {t:'is', q:"Tolakan lompat jauh ...", a:"satu kaki"},
        {t:'is', q:"Gelanggang silat alas ...", a:"matras"},
        {t:'is', q:"Chest pass setinggi ...", a:"dada"},
        {t:'is', q:"Catcher menangkap ...", a:"bola"},
        {t:'es', q:"Teknik dasar basket?"}, {t:'es', q:"Cara estafet?"}, {t:'es', q:"Sebutkan pukulan silat!"}, {t:'es', q:"Perbedaan kasti rounders?"}, {t:'es', q:"Tahapan lompat jauh?"}
    ],

    // SAS (25 PG, 10 ISIAN, 5 ESSAY)
    'sas': [
        {t:'pg', q:"Circuit training latih?", o:["A. Kebugaran","B. Makan","C. Tidur","D. Diam"], a:"A. Kebugaran"},
        {t:'pg', q:"Guling lenting tumpuan?", o:["A. Tengkuk/Tangan","B. Kepala","C. Kaki","D. Perut"], a:"A. Tengkuk/Tangan"},
        {t:'pg', q:"Variasi langkah irama?", o:["A. Rapat/Biasa","B. Lari","C. Lompat","D. Diam"], a:"A. Rapat/Biasa"},
        {t:'pg', q:"Gaya punggung napas?", o:["A. Bebas","B. Dalam air","C. Susah","D. Tahan"], a:"A. Bebas"},
        {t:'pg', q:"Pubertas masa?", o:["A. Peralihan","B. Tua","C. Bayi","D. Anak"], a:"A. Peralihan"},
        {t:'pg', q:"Shuttle run latih?", o:["A. Kelincahan","B. Kekuatan","C. Power","D. Lentur"], a:"A. Kelincahan"},
        {t:'pg', q:"Meroda gerak ke?", o:["A. Samping","B. Depan","C. Belakang","D. Atas"], a:"A. Samping"},
        {t:'pg', q:"Ayunan lengan irama?", o:["A. Depan belakang","B. Kaku","C. Diam","D. Lipat"], a:"A. Depan belakang"},
        {t:'pg', q:"Tolong teman tenggelam?", o:["A. Lempar ban","B. Terjun langsung","C. Diam","D. Foto"], a:"A. Lempar ban"},
        {t:'pg', q:"Cebok dari?", o:["A. Depan belakang","B. Belakang depan","C. Samping","D. Acak"], a:"A. Depan belakang"},
        {t:'pg', q:"Sit up otot?", o:["A. Perut","B. Kaki","C. Tangan","D. Leher"], a:"A. Perut"},
        {t:'pg', q:"Sikap lilin latih?", o:["A. Keseimbangan","B. Kekuatan","C. Lari","D. Lompat"], a:"A. Keseimbangan"},
        {t:'pg', q:"Kekompakan penting di?", o:["A. Senam beregu","B. Individu","C. Tidur","D. Makan"], a:"A. Senam beregu"},
        {t:'pg', q:"Kram di air harus?", o:["A. Tenang/Apung","B. Panik","C. Menyelam","D. Teriak"], a:"A. Tenang/Apung"},
        {t:'pg', q:"Celana dalam ganti?", o:["A. 2x sehari","B. 1 minggu","C. Jarang","D. 1 bulan"], a:"A. 2x sehari"},
        {t:'pg', q:"Push up otot?", o:["A. Lengan","B. Kaki","C. Leher","D. Punggung"], a:"A. Lengan"},
        {t:'pg', q:"Rangkaian senam?", o:["A. Gabungan gerak","B. Satu gerak","C. Diam","D. Pisah"], a:"A. Gabungan gerak"},
        {t:'pg', q:"Pendinginan tempo?", o:["A. Lambat","B. Cepat","C. Keras","D. Hentak"], a:"A. Lambat"},
        {t:'pg', q:"Memar kompres?", o:["A. Es","B. Panas","C. Minyak","D. Odol"], a:"A. Es"},
        {t:'pg', q:"Penyakit kelamin cegah?", o:["A. Kebersihan","B. Kotor","C. Lembap","D. Garuk"], a:"A. Kebersihan"},
        {t:'pg', q:"Squat jump otot?", o:["A. Kaki","B. Tangan","C. Perut","D. Leher"], a:"A. Kaki"},
        {t:'pg', q:"Guling belakang arah?", o:["A. Mundur","B. Maju","C. Samping","D. Atas"], a:"A. Mundur"},
        {t:'pg', q:"SKJ senam?", o:["A. Kebugaran","B. Lantai","C. Alat","D. Artistik"], a:"A. Kebugaran"},
        {t:'pg', q:"Kacamata renang?", o:["A. Lindungi mata","B. Gaya","C. Hiasan","D. Pemberat"], a:"A. Lindungi mata"},
        {t:'pg', q:"Handuk pakai?", o:["A. Sendiri","B. Bersama","C. Gantian","D. Umum"], a:"A. Sendiri"},
        {t:'is', q:"Lari 12 menit melatih ...", a:"daya tahan"},
        {t:'is', q:"Alas senam lantai ...", a:"matras"},
        {t:'is', q:"Renang gaya punggung pandangan ...", a:"atas"},
        {t:'is', q:"Membersihkan alat vital dari depan ke ...", a:"belakang"},
        {t:'is', q:"Squat jump melatih otot ...", a:"kaki"},
        {t:'is', q:"Sikap lilin kaki lurus ke ...", a:"atas"},
        {t:'is', q:"SKJ singkatan dari ...", a:"senam kebugaran jasmani"},
        {t:'is', q:"Pakaian dalam sebaiknya bahan ...", a:"katun"},
        {t:'is', q:"Sebelum renang harus ...", a:"pemanasan"},
        {t:'is', q:"Ayunan lengan melatih otot ...", a:"bahu"},
        {t:'es', q:"Apa itu sirkuit training?"}, {t:'es', q:"Cara guling belakang?"}, {t:'es', q:"Manfaat senam irama?"}, {t:'es', q:"Teknik renang punggung?"}, {t:'es', q:"Cara jaga kesehatan reproduksi?"}
    ]
};

// ===========================================
// 2. FUNGSI LOGIKA (NAVIGASI, KUIS, DOWNLOAD)
// ===========================================

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
    const warna = nilai >= 75 ? "#b71c1c" : "#d32f2f";
    
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
    <head><meta charset='utf-8'><title>Soal PJOK K6 ${kode}</title>
    <style>body{font-family:'Times New Roman';} .header{text-align:center;font-weight:bold;margin-bottom:20px;} li{margin-bottom:5px;}</style>
    </head><body>
    <div class="header">LATIHAN SOAL PJOK KELAS 6 SD<br>KODE MATERI: ${kode.toUpperCase()}</div>
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
    link.download = `Soal_PJOK_K6_${kode.toUpperCase()}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}