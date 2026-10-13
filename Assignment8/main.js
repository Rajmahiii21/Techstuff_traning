/*
Assignment 8:
1. Import employee data from a JSON file.
2. Find employees whose names contain "am".
3. Display employees whose salary is above 500000.
4. Print salary in Lac with one decimal place.
*/
const employees = require("./employees.json");

function getEmployees(name, salary) {
    return employees.filter(function(employee) {
        return employee.name.toLowerCase().includes(name.toLowerCase())
            && employee.salary > salary;
    });
}



const result = getEmployees("am", 500000);

result.forEach(function(employee) {
    console.log("ID:", employee.id);
    console.log("Name:", employee.name);
    console.log("Salary:", (employee.salary / 100000).toFixed(1) + " Lac");
    console.log("--------------------");
});