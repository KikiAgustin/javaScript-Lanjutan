// Cara ngambil api dengan fetch

// fetch('http://www.omdbapi.com/?apikey=31ffb5af&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));


// Promise
// Promise adalah object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronus dimasa yang akan datang
// janji ( terpenuhi / ingkar janji )
// kala di javasCript
// states ( fulfilled / rejected / pending )
// callback ( resolve / reject / finally )
// aksi ( then / catch )

// Contoh 1
// let ditepati = false;

// const jaji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji ditepati');
//     } else {
//         reject('Janji tidak ditepati');
//     }
// });

// jaji1
//     .then(response => console.log(`OK ${response}`))
//     .catch(response => console.log(`NOT OK ${response}`));


// Contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Janji ditepai');
//         }, 2000)
//     } else {
//         setTimeout(() => {
//             resolve('Janji tidak ditepati');
//         }, 2000)
//     }
// });

// console.log('Mulai')
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('Selasai menunggu'))
//     .then(response => console.log(response))
//     .catch(response => console.log(response));
// console.log('Selesai');




// Promise.all

const flm = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            nama: 'Kiki Agustin',
            flm: 'avengers'
        }]);
    }, 2000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            derajat: '46',
            kondisi: 'cerah berawan'
        }]);
    }, 500);
});

// flm.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// menggunakan promise.all

Promise.all([flm, cuaca])
    // .then(response => console.log(response));
    // menghasilkan dua array langsung
    .then(response => {
        const [flm, cuaca] = response;
        console.log(flm);
        console.log(cuaca);
    })