// Template Literals / Template String
// const nama = "Kiki Agustin";
// const umur = 12;
// console.log(`Hallo nama saya ${nama}, Umur saya ${umur} `);


// Embeded Expression
// console.log(`${1 + 1}`);
// console.log(` ${alert('Hello Wa')} `);
// const x = 11;
// console.log(` ${(x % 2 == 0) ? 'Genap' : 'Ganjil'} `);


// HTML Fragment
// 1. Contoh 1
// const mhs = {
//     nama: 'Kiki Agustin',
//     nim: '20110150',
//     umur: 23,
// }

// const el = `
// <div class="mhs">
// <h2 class="span">${mhs.nama}</h2>
// <p class="ident">${mhs.nim}</p>
// </div>
// `;

// console.log(el);
// document.body.innerHTML = el;


// Contoh 2 loooping
// const mhs = [
//     {
//         nama: 'Kiki Agustin',
//         email: 'kikiagustin62@gmail.com'
//     },
//     {
//         nama: 'Mega Kusmayati',
//         email: 'megakusmayati@gmail.com'
//     },
//     {
//         nama: 'David Abdul Aziz',
//         email: 'david@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
// ${mhs.map(mhs => `
//     <ul class="list">
//     <li class="mh">${mhs.nama}</li>
//     <li class="mh">${mhs.email}</li>
//     </ul>
// `).join(' ')}
// </div>`;


// 3. Condition
// const lagu = {
//     judul: "kau adalah",
//     penyanyi: 'Dadang',
//     feat: 'Darius'
// }

// const el = `<div class="lagu">
// <ul class="lg">
// <li class="list">${lagu.judul}</li>
// <li class="list">${lagu.penyanyi} ${lagu.feat ? `(${lagu.feat})` : ''}   </li>
// </ul>
// </div>`;


// 4. nested
// Html bersarang

const mhs = {
    nama: 'Kiki Agustin',
    semester: 9,
    mataKuliah: [
        'Sistem Informasi',
        'Akuntansi',
        'Pemograman beorientasi object'
    ]
}

function cetakMataKuliah(mataKuliah) {
    return `
    <ol class="list">
    ${mataKuliah.map(mk => `<li class="list">${mk}</li>`).join('')}
    </ol>`
}

const el = `<div class="mhs">
<h4 class="nama">${mhs.nama}</h4>
<p class="semester">Semeter ${mhs.semester}</p>
<h4 class="matakuliah">Mata Kuliah</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;