
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    static filterByAge(employees, age) {
        return employees.filter(function(employee) {
            return employee.age < age;
        });
    }

    static sortEmployees(employees, attribute) {
        return employees.sort(function(a, b) {
            if (typeof a[attribute] === "string") {
                return a[attribute].localeCompare(b[attribute]);
            }

            return a[attribute] - b[attribute];
        });
    }
}

module.exports = Employee;
