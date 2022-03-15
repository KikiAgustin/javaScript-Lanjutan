// Object Literal

// let mahasiswa1 = {
//     nama: "Kiki Agustin",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hala ${this.nama} Selamat makan `);
//     }
// }

// let mahasiswa1 = {
//     nama: "Kiki Agustin",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hala ${this.nama} Selamat makan `);
//     }
// }


// function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama} Selamat Makan `);
//     },

//         mahasiswa.main = function (jam) {
//             this.energi -= jam;
//             console.log(`Hallo ${this.nama} Selamat Main `);
//         }

//     return mahasiswa;
// }

// let kiki = Mahasiswa("Kiki Agustin", 10);
// let mega = Mahasiswa("Mega Kusmayati", 10);



// constructor function
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Hallo ${this.nama} Selamat Makan `);
    },

        this.main = function (jam) {
            this.energi -= jam;
            console.log(`Hallo ${this.nama} Selamat Main `);
        }

}

let kiki = new Mahasiswa("Kiki Agustin", 10)

