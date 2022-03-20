// Function expresion
// let tampilNama = function (nama) {
//     alert(`Hallo Nama Saya ${nama}`)
// }
// tampilNama('Kiki Agustin');

// Arrow Function Satu parameter
// const tampilNama = (nama) => {
//     alert(`Hallo Selamat datang ${nama}`);
// }
// tampilNama('Kiki Agustin');

// Implisit Return, haru satu parameter
// const tampilNama = nama => alert(`Hallo ${nama}`);
// tampilNama('Kiki Agustin');


// Kalo tidak ada parameter bisa lebih ringkas
// const tampilNama = () => `Hello Word`;
// console.log(tampilNama());


// Arrow Functon dua parameter
// const tampilNama = (nama, waktu) => {
//     alert(`Hallo ${nama} Selamat ${waktu}`);
// }
// tampilNama('Kiki Agustin', 'Malam');


// contoh kasus lain mengembalikan array
// const namaMahasiswa = ['Kiki Agustin', 'Mega Kusmayati', 'David Abdul Aziz'];
// let jumlahNama = namaMahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahNama)

// menggunakan arrow fuction
const mahasiswa = ['Kiki Agustin', 'Mega Kusmayati', 'David Abdul Ajid'];

// let jumlahNama = mahasiswa.map(nama => nama.length);
// console.log(jumlahNama)

// mengembalikan object
let jumlahNama = mahasiswa.map(nama => ({
    nama,
    jmlHurup: nama.length
}))
console.table(jumlahNama);
