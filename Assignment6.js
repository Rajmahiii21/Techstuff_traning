
/*
Assignment:
Take an array of employee objects and print
those employees whose age is less than 50.
*/

const employees = [
    {
        name: "Raj",
        email: "raj@example.com",
        age: 22,
        address: "Indore"
    },
    {
        name: "Amit",
        email: "amit@example.com",
        age: 45,
        address: "Bhopal"

    },
    {
        name: "Priya",
        email: "priya@example.com",
        age: 52,
        address: "Mumbai"
    },
    {
        name: "Neha",
        email: "neha@example.com",
        age: 30,
        address: "Pune"
    }
];

// Print employees whose age is less than 50
for (const employee of employees) {
    if (employee.age < 50) {
        console.log(employee);
    }
}
