
/*
Assignment:
1. Return an array of employees after a random delay
   between 1 and 2 seconds using a Promise.
2. Create another Promise-based function to sort
   employees by name.
3. Chain both Promises.
*/

const employees = [
    { id: 1, name: "Raj", age: 22, salary: 300000 },
    { id: 2, name: "Amit", age: 25, salary: 500000 },
    { id: 3, name: "Priya", age: 28, salary: 400000 },
    { id: 4, name: "Neha", age: 24, salary: 450000 }
];

// Function to return employees after a random delay
function getEmployees() {
    return new Promise(function(resolve, reject) {
        let time = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(function() {
            resolve(employees);
        }, time);
    });
}

// Function to sort employees by name using Promise
function sortEmployees(employees) {
    return new Promise(function(resolve, reject) {
        let sortedEmployees = employees.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });

        resolve(sortedEmployees);
    });
}

// Promise chaining
getEmployees()
    .then(function(employees) {
        console.log("Employees received:");
        console.log(employees);

        return sortEmployees(employees);
    })
    .then(function(sortedEmployees) {
        console.log("Employees sorted by name:");
        console.log(sortedEmployees);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });
