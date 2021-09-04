function takeLastN(array, n) {
    // change it
    let subArray = array.slice(-n);
    subArray.forEach(function (value) {
        console.log(value);
    });
}
