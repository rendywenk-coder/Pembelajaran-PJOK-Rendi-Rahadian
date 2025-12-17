// ===========================================
// FILE: assets/js/script-kelas-2.js
// Deskripsi: Logika Materi, Kuis, & Download untuk KELAS 2
// ===========================================

console.log("Script PJOK Kelas 2 Berhasil Dimuat!");

// 1. DATABASE SOAL
const dbSoal = {
    'a': [{t:'pg',q:"Jalan ke samping disebut?",o:["A. Geser","B. Maju","C. Mundur"],a:"A. Geser"}, {t:'pg',q:"Lari berbelok-belok?",o:["A. Zig-zag","B. Lurus","C. Mundur"],a:"A. Zig-zag"}, {t:'pg',q:"Melompat katak posisi awal?",o:["A. Jongkok","B. Berdiri","C. Tidur"],a:"A. Jongkok"}, {t:'pg',q:"Jalan mundur pandangan?",o:["A. Belakang/Samping","B. Depan","C. Atas"],a:"A. Belakang/Samping"}, {t:'pg',q:"Lari pelan disebut?",o:["A. Jogging","B. Sprint","C. Jalan"],a:"A. Jogging"}, {t:'pg',q:"Melompat tumpuan?",o:["A. Satu kaki","B. Dua kaki","C. Tangan"],a:"A. Satu kaki"}, {t:'pg',q:"Jalan di garis lurus latih?",o:["A. Keseimbangan","B. Kekuatan","C. Lari"],a:"A. Keseimbangan"}, {t:'pg',q:"Saat lari tangan?",o:["A. Diayun","B. Diam","C. Diangkat"],a:"A. Diayun"}, {t:'pg',q:"Kanguru bergerak?",o:["A. Lompat","B. Lari","C. Jalan"],a:"A. Lompat"}, {t:'pg',q:"Lari langkah panjang?",o:["A. Sprint","B. Jogging","C. Jalan"],a:"A. Sprint"}, {t:'es',q:"Sebutkan 3 variasi jalan!"}, {t:'es',q:"Apa itu lari zig-zag?"}],
    'b': [{t:'pg',q:"Meliuk latih otot?",o:["A. Pinggang","B. Kaki","C. Tangan"],a:"A. Pinggang"}, {t:'pg',q:"Menekuk lutut disebut?",o:["A. Jongkok","B. Berdiri","C. Lari"],a:"A. Jongkok"}, {t:'pg',q:"Gerak di tempat?",o:["A. Nonlokomotor","B. Lokomotor","C. Lari"],a:"A. Nonlokomotor"}, {t:'pg',q:"Pohon tertiup angin?",o:["A. Meliuk","B. Lompat","C. Jalan"],a:"A. Meliuk"}, {t:'pg',q:"Memutar lengan latih?",o:["A. Bahu","B. Kaki","C. Leher"],a:"A. Bahu"}, {t:'pg',q:"Cium lutut kaki?",o:["A. Lurus","B. Tekuk","C. Silang"],a:"A. Lurus"}, {t:'pg',q:"Mengayun kaki ke?",o:["A. Depan Belakang","B. Samping","C. Putar"],a:"A. Depan Belakang"}, {t:'pg',q:"Gerak kincir angin?",o:["A. Putaran lengan","B. Lari","C. Lompat"],a:"A. Putaran lengan"}, {t:'pg',q:"Menarik teman latih?",o:["A. Kekuatan","B. Cepat","C. Seimbang"],a:"A. Kekuatan"}, {t:'pg',q:"Pemanasan cegah?",o:["A. Cedera","B. Sakit","C. Lapar"],a:"A. Cedera"}, {t:'es',q:"Apa itu meliuk?"}, {t:'es',q:"Manfaat pemanasan?"}],
    'c': [{t:'pg',q:"Lempar melambung arah?",o:["A. Atas","B. Bawah","C. Datar"],a:"A. Atas"}, {t:'pg',q:"Menangkap bola pakai?",o:["A. Dua tangan","B. Satu tangan","C. Kaki"],a:"A. Dua tangan"}, {t:'pg',q:"Menendang bola ke?",o:["A. Gawang","B. Teman","C. Atas"],a:"A. Gawang"}, {t:'pg',q:"Menggiring basket pakai?",o:["A. Tangan","B. Kaki","C. Kepala"],a:"A. Tangan"}, {t:'pg',q:"Lemparan mendatar setinggi?",o:["A. Dada","B. Kepala","C. Kaki"],a:"A. Dada"}, {t:'pg',q:"Sepak bola bola?",o:["A. Besar","B. Kecil","C. Sedang"],a:"A. Besar"}, {t:'pg',q:"Kasti bola?",o:["A. Kecil","B. Besar","C. Keranjang"],a:"A. Kecil"}, {t:'pg',q:"Pandangan menangkap?",o:["A. Ke bola","B. Bawah","C. Belakang"],a:"A. Ke bola"}, {t:'pg',q:"Dribbling artinya?",o:["A. Menggiring","B. Menendang","C. Memukul"],a:"A. Menggiring"}, {t:'pg',q:"Memukul kasti pakai?",o:["A. Tongkat","B. Tangan","C. Kaki"],a:"A. Tongkat"}, {t:'es',q:"Sebutkan 3 lemparan!"}, {t:'es',q:"Cara menangkap bola?"}],
    'd': [{t:'pg',q:"Kucing tikus latih?",o:["A. Kelincahan","B. Kekuatan","C. Diam"],a:"A. Kelincahan"}, {t:'pg',q:"Estafet bola latih?",o:["A. Kerjasama","B. Sendiri","C. Lari"],a:"A. Kerjasama"}, {t:'pg',q:"Lompat tali alat?",o:["A. Tali","B. Bola","C. Tongkat"],a:"A. Tali"}, {t:'pg',q:"Bermain harus?",o:["A. Jujur","B. Curang","C. Marah"],a:"A. Jujur"}, {t:'pg',q:"Jika kalah tidak boleh?",o:["A. Marah","B. Senang","C. Lari"],a:"A. Marah"}, {t:'pg',q:"Menjala ikan main?",o:["A. Beregu","B. Sendiri","C. Pasangan"],a:"A. Beregu"}, {t:'pg',q:"Gobak sodor latih?",o:["A. Geser badan","B. Lompat","C. Guling"],a:"A. Geser badan"}, {t:'pg',q:"Engklek latih?",o:["A. Keseimbangan","B. Tangan","C. Mata"],a:"A. Keseimbangan"}, {t:'pg',q:"Bola tangan pakai?",o:["A. Tangan","B. Kaki","C. Kepala"],a:"A. Tangan"}, {t:'pg',q:"Sebelum main harus?",o:["A. Pemanasan","B. Makan","C. Tidur"],a:"A. Pemanasan"}, {t:'es',q:"Apa itu sportivitas?"}, {t:'es',q:"Manfaat bermain?"}],
    'e': [{t:'pg',q:"Push up latih?",o:["A. Lengan","B. Kaki","C. Leher"],a:"A. Lengan"}, {t:'pg',q:"Naik turun tangga?",o:["A. Kaki","B. Tangan","C. Perut"],a:"A. Kaki"}, {t:'pg',q:"Kapal terbang latih?",o:["A. Keseimbangan","B. Kekuatan","C. Lari"],a:"A. Keseimbangan"}, {t:'pg',q:"Lari muter latih?",o:["A. Daya tahan","B. Kekuatan","C. Lentur"],a:"A. Daya tahan"}, {t:'pg',q:"Sit up latih?",o:["A. Perut","B. Kaki","C. Tangan"],a:"A. Perut"}, {t:'pg',q:"Berdiri satu kaki?",o:["A. Statis","B. Dinamis","C. Lari"],a:"A. Statis"}, {t:'pg',q:"Jalan di titian?",o:["A. Dinamis","B. Statis","C. Diam"],a:"A. Dinamis"}, {t:'pg',q:"Cium lutut latih?",o:["A. Kelenturan","B. Kekuatan","C. Lari"],a:"A. Kelenturan"}, {t:'pg',q:"Kayang latih?",o:["A. Punggung","B. Kaki","C. Leher"],a:"A. Punggung"}, {t:'pg',q:"Agar bugar harus?",o:["A. Olahraga","B. Tidur","C. Makan"],a:"A. Olahraga"}, {t:'es',q:"Apa itu kebugaran?"}, {t:'es',q:"Latihan kekuatan?"}],
    'f': [{t:'pg',q:"Makanan pokok?",o:["A. Nasi","B. Permen","C. Es"],a:"A. Nasi"}, {t:'pg',q:"Lauk pauk ada?",o:["A. Protein","B. Air","C. Racun"],a:"A. Protein"}, {t:'pg',q:"Sayur buah ada?",o:["A. Vitamin","B. Lemak","C. Minyak"],a:"A. Vitamin"}, {t:'pg',q:"Minum air sehari?",o:["A. 8 gelas","B. 1 gelas","C. 20 gelas"],a:"A. 8 gelas"}, {t:'pg',q:"Tidur malam jam?",o:["A. 9 malam","B. 12 malam","C. 3 pagi"],a:"A. 9 malam"}, {t:'pg',q:"Baju kotor?",o:["A. Cuci","B. Pakai","C. Simpan"],a:"A. Cuci"}, {t:'pg',q:"Rumah bersih cegah?",o:["A. Penyakit","B. Tamu","C. Angin"],a:"A. Penyakit"}, {t:'pg',q:"Jajan sembarangan?",o:["A. Sakit perut","B. Sehat","C. Kuat"],a:"A. Sakit perut"}, {t:'pg',q:"Potong kuku?",o:["A. 1x seminggu","B. Tiap hari","C. Sebulan"],a:"A. 1x seminggu"}, {t:'pg',q:"Olahraga bikin?",o:["A. Sehat","B. Sakit","C. Lemes"],a:"A. Sehat"}, {t:'es',q:"4 sehat 5 sempurna?"}, {t:'es',q:"Akibat kurang tidur?"}],
    'g': [{t:'pg',q:"Senam irama pakai?",o:["A. Musik","B. Teriak","C. Tangis"],a:"A. Musik"}, {t:'pg',q:"Gerak senam ikut?",o:["A. Ketukan","B. Angin","C. Teman"],a:"A. Ketukan"}, {t:'pg',q:"Langkah ke depan?",o:["A. Maju","B. Mundur","C. Samping"],a:"A. Maju"}, {t:'pg',q:"Ayun lengan latih?",o:["A. Bahu","B. Kaki","C. Leher"],a:"A. Bahu"}, {t:'pg',q:"Senam irama latih?",o:["A. Kelenturan","B. Kekuatan","C. Lari"],a:"A. Kelenturan"}, {t:'pg',q:"Pendinginan tempo?",o:["A. Lambat","B. Cepat","C. Keras"],a:"A. Lambat"}, {t:'pg',q:"Pemanasan tempo?",o:["A. Sedang","B. Cepat","C. Diam"],a:"A. Sedang"}, {t:'pg',q:"Alat senam?",o:["A. Simpai","B. Raket","C. Bola"],a:"A. Simpai"}, {t:'pg',q:"Bergerak beregu?",o:["A. Kompak","B. Sendiri","C. Lari"],a:"A. Kompak"}, {t:'pg',q:"Sikap awal?",o:["A. Tegak","B. Duduk","C. Tidur"],a:"A. Tegak"}, {t:'es',q:"Apa itu senam irama?"}, {t:'es',q:"Alat senam irama?"}],
    'h': [{t:'pg',q:"Di kolam dilarang?",o:["A. Lari","B. Renang","C. Jalan"],a:"A. Lari"}, {t:'pg',q:"Sebelum renang?",o:["A. Pemanasan","B. Makan","C. Tidur"],a:"A. Pemanasan"}, {t:'pg',q:"Alat mengapung?",o:["A. Pelampung","B. Batu","C. Baju"],a:"A. Pelampung"}, {t:'pg',q:"Napas di air?",o:["A. Mulut","B. Hidung","C. Telinga"],a:"A. Mulut"}, {t:'pg',q:"Baju renang bahan?",o:["A. Licin","B. Jeans","C. Wol"],a:"A. Licin"}, {t:'pg',q:"Cuci tangan pakai?",o:["A. Sabun","B. Tanah","C. Oli"],a:"A. Sabun"}, {t:'pg',q:"Sikat gigi sehari?",o:["A. 2x","B. 1x","C. 5x"],a:"A. 2x"}, {t:'pg',q:"Sampah plastik ke?",o:["A. Tong Anorganik","B. Sungai","C. Jalan"],a:"A. Tong Anorganik"}, {t:'pg',q:"Tutup mulut saat?",o:["A. Batuk","B. Makan","C. Minum"],a:"A. Batuk"}, {t:'pg',q:"Lantai basah?",o:["A. Pel","B. Biarkan","C. Lompat"],a:"A. Pel"}, {t:'es',q:"Aturan di kolam?"}, {t:'es',q:"Cara sikat gigi?"}],
    'sts': [
        {t:'pg',q:"1. Jalan jinjit tumpuan?",o:["A. Ujung kaki","B. Tumit","C. Samping"],a:"A. Ujung kaki"}, {t:'pg',q:"2. Meliuk latih?",o:["A. Pinggang","B. Tangan","C. Kaki"],a:"A. Pinggang"}, {t:'pg',q:"3. Menangkap bola?",o:["A. Dua tangan","B. Satu tangan","C. Kaki"],a:"A. Dua tangan"}, {t:'pg',q:"4. Kucing tikus latih?",o:["A. Kelincahan","B. Kekuatan","C. Diam"],a:"A. Kelincahan"}, {t:'pg',q:"5. Lari zig-zag?",o:["A. Belok-belok","B. Lurus","C. Mundur"],a:"A. Belok-belok"}, {t:'pg',q:"6. Kapal terbang latih?",o:["A. Keseimbangan","B. Kekuatan","C. Lari"],a:"A. Keseimbangan"}, {t:'pg',q:"7. Memutar lengan?",o:["A. Bahu","B. Pinggang","C. Leher"],a:"A. Bahu"}, {t:'pg',q:"8. Menendang bola?",o:["A. Gawang","B. Atas","C. Belakang"],a:"A. Gawang"}, {t:'pg',q:"9. Estafet latih?",o:["A. Kerjasama","B. Kekuatan","C. Cepat"],a:"A. Kerjasama"}, {t:'pg',q:"10. Sebelum olahraga?",o:["A. Pemanasan","B. Makan","C. Tidur"],a:"A. Pemanasan"},
        {t:'is',q:"1. Lari pelan ...",a:"jogging"}, {t:'is',q:"2. Gerak di tempat ...",a:"nonlokomotor"}, {t:'is',q:"3. Pantul bola basket ...",a:"dribbling"}, {t:'is',q:"4. Lompat tali otot ...",a:"kaki"}, {t:'is',q:"5. Pohon tiup angin ...",a:"meliuk"}, {t:'is',q:"6. Kasti bola ...",a:"kecil"}, {t:'is',q:"7. Menendang pakai ...",a:"kaki"}, {t:'is',q:"8. Kapal terbang gaya ...",a:"pesawat"}, {t:'is',q:"9. Lompat katak ...",a:"jongkok"}, {t:'is',q:"10. Main harus ...",a:"sportif"},
        {t:'es',q:"1. Sebutkan 3 lokomotor!"}, {t:'es',q:"2. Apa itu manipulatif?"}, {t:'es',q:"3. Cara kapal terbang?"}, {t:'es',q:"4. Permainan bola kecil?"}, {t:'es',q:"5. Mengapa pemanasan?"}
    ],
    'sas': [
        {t:'pg',q:"1. Push up latih?",o:["A. Lengan","B. Kaki","C. Leher"],a:"A. Lengan"}, {t:'pg',q:"2. Makanan pokok?",o:["A. Nasi","B. Permen","C. Es"],a:"A. Nasi"}, {t:'pg',q:"3. Senam irama pakai?",o:["A. Musik","B. Peluit","C. Teriak"],a:"A. Musik"}, {t:'pg',q:"4. Alat renang?",o:["A. Pelampung","B. Batu","C. Kayu"],a:"A. Pelampung"}, {t:'pg',q:"5. Cium lutut latih?",o:["A. Kelenturan","B. Kekuatan","C. Lari"],a:"A. Kelenturan"}, {t:'pg',q:"6. Mandi sehari?",o:["A. 2x","B. 1x","C. 5x"],a:"A. 2x"}, {t:'pg',q:"7. Langkah senam?",o:["A. Irama","B. Cepat","C. Lambat"],a:"A. Irama"}, {t:'pg',q:"8. Di kolam dilarang?",o:["A. Lari","B. Renang","C. Jalan"],a:"A. Lari"}, {t:'pg',q:"9. Tidur malam?",o:["A. 8 jam","B. 2 jam","C. 12 jam"],a:"A. 8 jam"}, {t:'pg',q:"10. Buang sampah?",o:["A. Tempat sampah","B. Sungai","C. Jalan"],a:"A. Tempat sampah"},
        {t:'is',q:"1. Naik tangga otot ...",a:"kaki"}, {t:'is',q:"2. Cuci tangan sebelum ...",a:"makan"}, {t:'is',q:"3. Senam irama disebut ...",a:"ritmik"}, {t:'is',q:"4. Napas renang lewat ...",a:"mulut"}, {t:'is',q:"5. Sit up otot ...",a:"perut"}, {t:'is',q:"6. 4 sehat 5 ...",a:"sempurna"}, {t:'is',q:"7. Gerak senam harus ...",a:"kompak"}, {t:'is',q:"8. Kuku panjang ...",a:"potong"}, {t:'is',q:"9. Berdiri satu kaki ...",a:"keseimbangan"}, {t:'is',q:"10. Air genang sarang ...",a:"nyamuk"},
        {t:'es',q:"1. Latihan kekuatan?"}, {t:'es',q:"2. 4 sehat 5 sempurna?"}, {t:'es',q:"3. Alat senam irama?"}, {t:'es',q:"4. Aturan kolam renang?"}, {t:'es',q:"5. Cara jaga kebersihan?"}
    ]
};

// 2. FUNGSI LOGIKA (NAVIGASI, KUIS, DOWNLOAD)
function bukaHalaman(id, btn) {
    document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    const target = document.getElementById('view-' + id);
    if(target) {
        target.classList.add('active');
        // Reset animasi
        target.style.opacity = '0';
        setTimeout(() => target.style.opacity = '1', 50);
    }
    if(btn) btn.classList.add('active');
}

function tampilSoal(kode) {
    const wadah = document.getElementById('quiz-' + kode);
    if(wadah.style.display === 'block') { wadah.style.display = 'none'; return; }
    
    const soal = dbSoal[kode];
    let html = ``;
    let pg = soal.filter(i => i.t === 'pg');
    if(pg.length > 0) {
        html += `<h4>I. PILIHAN GANDA</h4>`;
        pg.forEach((item, idx) => {
            html += `<div class="question-item"><p>${idx+1}. ${item.q}</p>`;
            item.o.forEach(opsi => {
                html += `<label style="display:block;cursor:pointer;margin-bottom:5px;"><input type="radio" name="ans-${kode}-${idx}" value="${opsi}"> ${opsi}</label>`;
            });
            html += `</div>`;
        });
    }
    let is = soal.filter(i => i.t === 'is');
    if(is.length > 0) {
        html += `<h4>II. ISIAN</h4>`;
        is.forEach((item, idx) => html += `<p>${idx+1}. ${item.q}</p><input class="input-isian" type="text"><br>`);
    }
    let es = soal.filter(i => i.t === 'es');
    if(es.length > 0) {
        html += `<h4>III. URAIAN</h4>`;
        es.forEach((item, idx) => html += `<p>${idx+1}. ${item.q}</p><textarea class="input-essay" rows="2"></textarea><br>`);
    }

    html += `<button class="action-btn btn-ujian" onclick="hitungNilai('${kode}')" style="margin-top:10px;">CEK NILAI PG</button><div id="hasil-${kode}" class="score-box"></div>`;
    wadah.innerHTML = html;
    wadah.style.display = 'block';
}

function hitungNilai(kode) {
    const soal = dbSoal[kode];
    let pg = soal.filter(i => i.t === 'pg');
    let benar = 0;
    pg.forEach((item, idx) => {
        const pilih = document.querySelector(`input[name="ans-${kode}-${idx}"]:checked`);
        if(pilih && pilih.value === item.a) benar++;
    });
    const nilai = (benar / pg.length) * 100;
    const box = document.getElementById(`hasil-${kode}`);
    box.innerHTML = `Nilai PG: ${nilai.toFixed(0)} <br> Benar ${benar} dari ${pg.length}`;
    box.style.display = 'block';
    box.scrollIntoView({behavior: "smooth"});
}

function downloadSoal(kode) {
    const data = dbSoal[kode];
    let text = `SOAL PJOK KELAS 2 - KODE ${kode.toUpperCase()}\n\n`;
    data.forEach((item, i) => {
        text += `${i+1}. ${item.q}\n`;
        if(item.t === 'pg') item.o.forEach(opt => text += `   ${opt}\n`);
        text += `\n`;
    });
    const blob = new Blob([text], {type: "text/plain"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `Soal_K2_${kode}.txt`;
    a.click();
}