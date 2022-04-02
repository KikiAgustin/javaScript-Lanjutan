// Belajar Callback

// Syncronus Callback
// function halo(nama) {
//     alert(`Hallo ${nama}`);
// }

// function masukanNama(callback) {
//     const nama = prompt('Silahkan masukan nama anda');
//     callback(nama);
// }
// // masukanNama(halo);
// masukanNama(nama => alert(`Hallo ${nama} `));




// const mhs = [
//     {
//         nama: 'Kiki Agustin',
//         nrp: '20110150',
//         email: 'kikiagustin62@gmail.com',
//         jurusan: 'Teknik Informatika',
//         idDosenWali: 1
//     },
//     {
//         nama: 'Mega Kusmayati',
//         nrp: '20110151',
//         email: 'megakusmayati@gmail.com',
//         jurusan: 'Teknik Informatika',
//         idDosenWali: 2
//     },
//     {
//         nama: 'David Abdul Aziz',
//         nrp: '20110152',
//         email: 'davidabdul@gmail.com',
//         jurusan: 'Teknik Informatika',
//         idDosenWali: 1
//     }
// ];

// mhs.forEach(m => console.log(m.nama));


// Asynchronus Callback

// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', result => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));
//     // console.log(JSON.parse(result));
// }, () => {

// });
// console.log('Selesai');


// Menggunakan jquery
console.log('Mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});