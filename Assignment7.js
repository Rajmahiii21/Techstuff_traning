
/*
Assignment 1:
Create a function that takes a number and prints all even numbers
up to that number.

Assignment 2:
Create a function that takes an array of employees and an age,
and returns employees whose age is less than the input age.

Assignment 3:
Create a function that takes an array of employees and an attribute,
and returns employees sorted by that attribute.
*/

// Employee array used for Assignments 2 and 3
const employees = [
    {
        name: "Raj",
        age: 22,
        email: "raj@example.com",
        salary: 30000
    },
    {
        name: "Amit",
        age: 45,
        email: "amit@example.com",
        salary: 50000
    },
    {
        name: "Priya",
        age: 32,
        email: "priya@example.com",
        salary: 40000
    },
    {
        name: "Neha",
        age: 28,
        email: "neha@example.com",
        salary: 35000
    }
];


// Assignment 1: Print all even numbers up to a given number

function printEvenNumbers(number) {
    for (let i = 2; i <= number; i += 2) {
        console.log(i);
    }
}

console.log("Assignment 1: Even Numbers");
printEvenNumbers(20);


// Assignment 2: Return employees younger than the given age

function getEmployeesByAge(employees, age) {
    return employees.filter(employee => employee.age < age);
}

console.log("Assignment 2: Employees younger than 35");
console.log(getEmployeesByAge(employees, 35));


// Assignment 3: Sort employees by the given attribute

function sortEmployees(employees, attribute) {
    return [...employees].sort((a, b) => {
        const valueA = a[attribute];
        const valueB = b[attribute];

        // Sort numbers in ascending order
        if (typeof valueA === "number" &&
            typeof valueB === "number") {
            return valueA - valueB;
        }

        // Sort strings alphabetically
        return String(valueA ?? "").localeCompare(
            String(valueB ?? ""),
            undefined,
            { sensitivity: "base", numeric: true }
        );
    });
}

console.log("Assignment 3: Employees sorted by age");
console.log(sortEmployees(employees, "age"));

console.log("Employees sorted by name");
console.log(sortEmployees(employees, "name"));

console.log("Employees sorted by salary");
console.log(sortEmployees(employees, "salary"));


const add = ( a,b)=> a+b;
console.log( add(2,3));

const arr = [14,3,2,4,5];
arr.sort((a, b) => a - b);
console.log(arr);
console.log(arr.includes(1));