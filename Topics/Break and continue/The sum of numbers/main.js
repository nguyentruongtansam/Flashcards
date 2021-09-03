function sum(numbers) {
    // write your code here
    let sumOfNumbers = 0;
    for (let i in numbers) {
        if (numbers[i] === 0) {
            break;
        }
        sumOfNumbers += numbers[i];
    }
    return sumOfNumbers;
}
