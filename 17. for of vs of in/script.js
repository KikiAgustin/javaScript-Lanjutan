// const mhs = ['Kiki Agustin', 'Mega Kusmayati', 'David Abdul Azizi'];

// Menggunakan for biasa
// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }


// Mengunakan forEach
// mhs.forEach(m => console.log(m));


// Menggunakan For of
// for (const m of mhs) {
//     console.log(m);
// }

// For of bisa digunakan untuk looping sring
// const nama = 'Kiki Agustin';
// for (const n of nama) {
//     console.log(n);
// }


// Parameter lebih dari 1
// forEach
// mhs.forEach((m, i) => {
//     console.log(`Hallo nama saya ${m}, saya mahasiswa ke ${i + 1} `);
// })

// For Of
// for (const [i, m] of mhs.entries()) {
//     console.log(`Hallo nama saya ${m}, saya mahasiswa ke ${i + 1} `);
// }


// Nodelist
// const liNama = document.querySelectorAll('.nama');

// menggunakan foreach
// liNama.forEach(n => console.log(n.innerHTML));

// Menggunakan for of
// for (const n of liNama) {
//     console.log(n.textContent);
// }



// Argument
// function jumlahAngka() {
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1, 2, 3, 4, 5));


// For in
const mhs = {
    nama: 'Kiki Agustin',
    umur: 23,
    email: 'kikiagustin62@gmail.com'
}

// mencetak objectnya
// for (m in mhs) {
//     console.log(m);
// }

// Mencetak isi objectnya
for (m in mhs) {
    console.log(mhs[m]);
}