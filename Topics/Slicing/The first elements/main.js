function takeFirstN(array, n) {
    // change it
    let subArray = array.slice(0, n);
    subArray.forEach(function(value) {
        console.log(value);
    });
}
