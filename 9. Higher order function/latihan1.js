// Ambil semua elemen video dan ubah menjadi array
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Seleksi javaScript Lanjutan dengan filter
let jslanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // Ambil masing-masing durasi
    .map(item => item.dataset.duration)

    // Ubah menjadi detik
    .map(waktu => {
        // 10:30 -> [10, 30] menggunakan split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

    // Jumlah semua detik
    .reduce((total, detik) => total + detik);

// Ubah format menjadi jam, menit dan detik
const jam = Math.floor(jslanjut / 3600);
jslanjut = Math.floor(jslanjut - jam * 3600);
const menit = Math.floor(jslanjut / 60);
const detik = Math.floor(jslanjut - menit * 60);

// Masukan kedala DOM

let total = document.querySelector('.total-durasi');
total.textContent = `${jam} jam ${menit} Menit ${detik} Detik`;

let jmlvideo = document.querySelector('.jumlah-video');

const jumljslanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

jmlvideo.innerHTML = jumljslanjut;

console.log(jumljslanjut);