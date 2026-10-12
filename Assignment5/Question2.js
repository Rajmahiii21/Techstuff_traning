
/*
Question 2: Print the first 10 Fibonacci numbers
using different types of loops.
*/

// 1. Using for loop
let a = 0;
let b = 1;
let fibonacciFor = [];

for (let i = 0; i < 10; i++) {
    fibonacciFor.push(a);
    let next = a + b;
    a = b;
    b = next;
}
console.log("Using for loop:", fibonacciFor.join(", "));

// 2. Using while loop
let c = 0;
let d = 1;
let count = 0;
let fibonacciWhile = [];

while (count < 10) {
    fibonacciWhile.push(c);
    let next = c + d;
    c = d;
    d = next;
    count++;
}
console.log("Using while loop:", fibonacciWhile.join(", "));

// 3. Using do...while loop
let e = 0;
let f = 1;
let counter = 0;
let fibonacciDoWhile = [];

do {
    fibonacciDoWhile.push(e);
    let next = e + f;
    e = f;
    f = next;
    counter++;
} while (counter < 10);

console.log("Using do...while loop:", fibonacciDoWhile.join(", "));


