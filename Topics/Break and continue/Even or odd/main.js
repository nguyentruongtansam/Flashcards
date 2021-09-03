function checkEvenOrOdd(numbers) {
    // write your code here
    for (let i in numbers) {
        if (numbers[i] === 0) {
            break;
        } else {
            switch (numbers[i] % 2) {
                case 0:
                    console.log("even");
                    break;
                default:
                    console.log("odd");
                    break;
            }
        }
    }
}
