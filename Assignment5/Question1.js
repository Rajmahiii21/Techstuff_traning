
/*
Question 1: Find the sum of the first 10 natural numbers
using different types of loops.
*/

// 1. Using for loop
let sumFor = 0;
for (let i = 1; i <= 10; i++) {
    sumFor += i;
}
console.log("Sum using for loop:", sumFor);

// 2. Using while loop
let sumWhile = 0;
let j = 1;
while (j <= 10) {
    sumWhile += j;
    j++;
}
console.log("Sum using while loop:", sumWhile);

// 3. Using do...while loop
let sumDoWhile = 0;
let k = 1;
do {
    sumDoWhile += k;
    k++;
} while (k <= 10);
console.log("Sum using do...while loop:", sumDoWhile);

