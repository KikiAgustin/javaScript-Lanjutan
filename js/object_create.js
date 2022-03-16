
// Cara Pertama
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${nama} Selamat Makan `);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama} Selamat bermain! `);
//     },
//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Hallo ${this.nama} Selamat Tidur `);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);

//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let kiki = Mahasiswa("Kiki Agustin", 10);
// let mega = Mahasiswa("Mega Kusmayati", 10);


// Cara yang lebih efektif
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Hallo ${this.nama}, Selamat Makan`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Hallo ${this.nama}, Selamat bermain!`;
// }
// let kiki = new Mahasiswa("Kiki Agustin", 10)


// versi class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Hallo ${this.nama}, Selamat Makan`;
    }
    main(jam) {
        this.energi -= jam;
        return `Hallo ${this.nama}, Selamat bermain`;
    }
}

let kiki = new Mahasiswa("Kiki Agustin", 10);