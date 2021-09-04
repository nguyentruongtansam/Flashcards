// async function rockBand(band) {
//     return new Promise((resolve, reject) => {
//         if (band === 'Linkin Park') {
//             resolve('Chester, we miss you!');
//         } else {
//             reject('No matter the band we miss him anyway!');
//         }
//     });
// }

async function rockBand(band) {
    if (band === 'Linkin Park') {
        return Promise.resolve('Chester, we miss you!');
    } else {
        return Promise.reject('No matter the band we miss him anyway!');
    }
}
