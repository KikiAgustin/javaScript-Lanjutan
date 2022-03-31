// Kalo menggunakan var, harus membuat scope yang seperti ini supaya variabel i hanya bisa diakses didalam scope nya

// (function () {
//     for (var i = 0; i < 10; i++) {
//         console.log(`Hitungan dari ${i}`);
//     }
// }())
// console.log(i)


// sedangkan menggunakan let, cukup sepeti ini saja
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i)