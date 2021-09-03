let sum = 0;
let countSum = (a) => sum += a;

for (i = 1; i <= 100; i++) {
    countSum(i);
}

console.log(sum);
