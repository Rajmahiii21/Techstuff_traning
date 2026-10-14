/*
Assignment:
1.  - Create a function that returns array of employees
 from a random time from 1 to 2 seconds using async await.
*/

const empployess = [
    {id: 1, name: "Raj", age: 22, salary: 300000},
    {id: 2, name: "Amit", age: 25, salary: 500000},
    {id: 3, name: "Priya", age: 28, salary: 400000},
    {id: 4, name: "Neha", age: 24, salary: 450000}
]

function getEmployees() {
    let time  = Math.floor(Math.random() * 1000) + 1000;

    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            resolve(empployess);
        }, time);
    });

}

async function fetchEmployes(){
    let getEmployee =  await getEmployees();
    console.log(getEmployee);
    console.log("Employees fetched successfully");
}

fetchEmployes();