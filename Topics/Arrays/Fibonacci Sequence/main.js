fibonacciSequence = [/*0, 1, 1, 2, 3, 5, 8*/];

fibonacciSequence.push(0);
fibonacciSequence.push(1);
fibonacciSequence.push(fibonacciSequence[0] + fibonacciSequence[1]);
fibonacciSequence.push(fibonacciSequence[1] + fibonacciSequence[2]);
fibonacciSequence.push(fibonacciSequence[2] + fibonacciSequence[3]);
fibonacciSequence.push(fibonacciSequence[3] + fibonacciSequence[4]);
fibonacciSequence.push(fibonacciSequence[4] + fibonacciSequence[5]);

console.log(fibonacciSequence[0]);
console.log(fibonacciSequence[1]);
console.log(fibonacciSequence[2]);
console.log(fibonacciSequence[3]);
console.log(fibonacciSequence[4]);
console.log(fibonacciSequence[5]);
console.log(fibonacciSequence[6]);
