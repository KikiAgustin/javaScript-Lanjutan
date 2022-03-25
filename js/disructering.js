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
const mhs = {
    nama: 'Kiki Agustin',
    email: 'kikiagustin62@gmail.com',
    alamat: 'Indonesia'
}
const { nama, ...values } = mhs;
console.log(values);