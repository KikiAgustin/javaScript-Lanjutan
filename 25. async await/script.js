function cobaAsync() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai');
            }, waktu);
        } else {
            reject('kelamaan woi');
        }

    });
}

async function cobaAja() {
    try {

        const coba = await cobaAsync();
        console.log(coba);
    } catch (err) {
        console.log(err);
    }
}

cobaAja();