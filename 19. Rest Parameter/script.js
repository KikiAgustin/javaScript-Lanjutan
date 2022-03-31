// Rest Parameter

// function myfunc(...myArg) {
//     // return myArg;
//     return [...arguments];
// }

// console.log(myfunc(1, 2, 3, 4, 5));

// let total = 0;
// function jumlahkan(...angka) {

//     // for (const a of angka) {
//     //     total += a;
//     // }

//     // return total;

//     return angka.reduce((a, b) => a + b);

// }

// console.log(jumlahkan(1, 2, 3, 4, 5));


// Array Destructering
// const mahasiswa = ['Kiki Agustin', 'Mega Kusmayati', 'David Abdul Aziz', 'Iswa'];
// const [ketua, wakil, ...anggota] = mahasiswa;
// console.log(ketua);


// Object Destructuring
// const myTeam = {
//     pm: 'Kiki Agustin',
//     frontend: 'Mega',
//     beckend: 'Kusmayati',
//     ui: 'David',
//     ux: 'Abdul',
//     devops: 'Aziz'
// }

// const { pm, ...team } = myTeam;
// console.log(team)


// Filtering
function filtering(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filtering('string', 1, 2, 3, 'Kiki Agustin', false, 'Mega Kusmayati', false, 'David', true));