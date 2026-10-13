
const Employee = require("./Employee");

const employees = [
    new Employee("Raj", 22, 300000),
    new Employee("Amit", 45, 600000),
    new Employee("Priya", 32, 450000),
    new Employee("Neha", 28, 500000)
];

// Filter employees whose age is less than 35
console.log("Employees younger than 35:");
console.log(Employee.filterByAge(employees, 35));

// Sort employees by age
console.log("Employees sorted by age:");
console.log(Employee.sortEmployees([...employees], "age"));

// Sort employees by name
console.log("Employees sorted by name:");
console.log(Employee.sortEmployees([...employees], "name"));

// Sort employees by salary
console.log("Employees sorted by salary:");
console.log(Employee.sortEmployees([...employees], "salary"));
