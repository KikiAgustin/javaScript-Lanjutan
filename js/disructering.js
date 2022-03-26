// Destructuring Array

const perkenalan = ['Hallo', 'Nama', 'Saya', 'Kiki Agustin'];
// const [halo, satu, dua, tiga] = perkenalan;

// Skip Array
// const [halo, , , tiga] = perkenalan;
// console.log(tiga);


// Swap item
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// Retur value pada function
// function coba() {
//     return [1, 2];
// }
// const [a, b] = coba();
// console.log(b);


// Res Parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6, 7];
// console.log(values);




// Destructuring pada object
// const mhs = {
//     nama: 'Kiki Agustin',
//     email: 'kikiagustin62@gmail.com'
// }
// const { nama, email } = mhs;
// console.log(nama);


// Assigment tanpa deklarasi
// ({ nama, email } = { nama: 'Kiki Agustin', email: 'kikiagustin62@gmail.com' });
// console.log(email)


// Assign ke varibel baru
// const mhs = {
//     nama: 'Kiki Agustin',
//     email: 'kikiagustin62@gmail.com'
// }
// const { nama: a, email: b } = mhs;
// console.log(a);


// Memberikan default value
// const mhs = {
//     nama: 'Kiki Agustin',
//     email: 'kikiagustin62@gmail.com'
// }
// const { nama, email, alamat = 'Negeri wakanda' } = mhs;
// console.log(alamat);


// Assign varibel baru + Memberikan default value
// const mhs = {
//     nama: 'Kiki Agustin',
//     email: 'kikiagustin62@gmail.com'
// }
// const { nama: n, email: e, alamat: a = 'Negeri wakanda' } = mhs;
// console.log(a);


// Rest Parameter
// const mhs = {
//     nama: 'Kiki Agustin',
//     email: 'kikiagustin62@gmail.com',
//     alamat: 'Indonesia'
// }
// const { nama, ...values } = mhs;
// console.log(values);




// Latihan yang lebih advance
const perkalianPenjumlahan = function (a, b) {
    return [a + b, a * b];
}

// Dari awalnya seperti ini
// const jumlah = perkalianPenjumlahan(5, 6)[0];
// const kali = perkalianPenjumlahan(5, 6)[1];

// Bisa menjadi seperti ini
// const [jumlah, kali] = perkalianPenjumlahan(5, 6);
// console.log(jumlah)


// menggunakan object supaya tidak haru sesuai dengan properti
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         bagi: a / b,
//         kali: a * b
//     }

// }

// const { kali, tambah, kurang, bagi } = kalkulasi(4, 6);
// console.log(kali);


// Destructuring object
const mhs1 = {
    nama: 'Kiki Agustin',
    umur: 23,
    email: 'kikiagustin62@gmail.com',
    nilai: {
        tugas: 90,
        uas: 90,
        kehadiran: 100
    }
}

// tidak menggunakan Destructering
// function cetakMhs(mhs) {
//     return `Hallo Nama saya ${mhs.nama}, Umur saya adalah ${mhs.umur} Tahun`;
// }

// Menggunakan Destructuring
function cetakMhs({ nama, umur, nilai: { tugas, uas, kehadiran } }) {
    return `Hallo nama saya ${nama}, umur saya ${umur} tahun. Dan nilai uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));