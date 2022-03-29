// EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Kiki Agustin';

// creation pahe pada global context
// nama var = undifined
// nama function = fn()
// hoisting
// window = global object
// this = window



// execution phase
// console.log(sayHello);

// var nama = 'Kiki Agustin';
// var umur = 23;

// function sayHello() {
//     return `Hallo nama saya ${nama}, umur saya ${umur} `;
// }


// Contoh studi kasus 1
// var nama = 'Kiki Agustin';
// var username = '@kikiagustiiin';

// function cetakURL(username) {
//     var instagramURL = 'https//instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username))


// contoh studi kasus 2
// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();


// contoh studi kasus 3
function satu() {
    var nama = 'Kiki Agustin';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Mega Kusmayati';
satu();
dua();
console.log(nama);


