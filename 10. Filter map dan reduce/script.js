const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// menggunakan for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }

// }
// console.log(newAngka);


// menggunakan filter
// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// })
// console.log(newAngka)


// Menggunakan arraw function
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);


// Maps
// mengkali 2 array angka
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);


// Reduce
// Menjumlahkan nilai array
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((angkaMulai, angkaSelanjutya) => angkaMulai + angkaSelanjutya);
// console.log(newAngka);


// Method Chaining atau menggabungka beberapa function
const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((acc, cur) => acc + cur);
console.log(hasil);
