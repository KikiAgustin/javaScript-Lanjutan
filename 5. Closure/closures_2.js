// function init() {
//     // let nama = 'Kiki Agustin';

//     function tampilNama(nama) {
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let panggilNama = init();
// panggilNama('Kiki Agustin');


// function init() {
//     // let nama = 'Kiki Agustin';

//     return function (nama) {
//         console.log(nama);
//     }

// }
// let panggilNama = init();
// panggilNama('Kiki Agustin');



// vectory function
// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Hallo ${nama} Selamat ${waktu} semoga harimu bahagia`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// console.log(selamatMalam('kiki'));


let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());