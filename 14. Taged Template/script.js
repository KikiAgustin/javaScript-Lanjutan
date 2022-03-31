// const nama = 'Kiki agustin';
// const umur = '20';


// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((stk, i) => {
//     //     result += `${stk}${values[i] || ''} `;
//     // });
//     // return result;

//     // menggunakan reduce
//     return strings.reduce((result, stk, i) => `${result}${stk}${values[i] || ''}`, '');
// }

// const str = coba`Hallo nama saya ${nama}, saya umur ${umur} `;
// console.log(str);




const nama = 'Kiki agustin';
const umur = '20';
const email = 'kikiagustin62@gmail.com';


function higlight(strings, ...values) {
    return strings.reduce((result, stk, i) => `${result}${stk}<span class="hl" >${values[i] || ''} </span> `, '');
}

const str = higlight`Hallo nama saya ${nama}, saya umur ${umur} dan email saya : ${email} `;
// console.log(str)
document.body.innerHTML = str;