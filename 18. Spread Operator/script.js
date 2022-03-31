// Spread Operator
// Memecah iterables menjadi single element

// const mhs = ['Kiki Agustin', 'Mega Kusmayati', 'David Abdul Aziz'];
// console.log(...mhs);


// Mengagubungkan beberapa array
// const mhs = ['Kiki Agustin', 'Mega Kusmayati', 'David Abdul Aziz'];
// const dosen = ['Ade', 'Jajang', 'Saepulloh'];
// const orang = [...mhs, 'Salsa', ...dosen];
// console.log(orang);


// Meng-copy Array
// const mhs = ['Kiki Agustin', 'Mega Kusmayati', 'David Abdul Aziz'];
// const mhs1 = [...mhs];
// mhs1[0] = "Kiki aja";
// console.log(mhs);
// console.log(mhs1);


// Cara 1
// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// Cara 2
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);


// Studi kasus yang lain
const nama = document.querySelector('.nama');
const hurup = [...nama.textContent].map(h => `<span> ${h} </span>`).join('');
nama.innerHTML = hurup;