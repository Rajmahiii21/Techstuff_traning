
/*
Assignment 2: JavaScript Variables and Objects

Tasks:
1. Declare all variables without initializing them and print their values.
2. Assign null to all variables and print their values again.
3. Create an employeeDetails object with all the above variables as keys
   and null as their values, then print the object.
*/

// Step 1: Declare variables without initializing them

let name;
let email;
let age;
let address;
let phoneNumber;
let gender;
let isMarried;

// Print the initial values
console.log(" Initial Values ");
console.log("Name:", name);
console.log("Email:", email);
console.log("Age:", age);
console.log("Address:", address);
console.log("Phone Number:", phoneNumber);
console.log("Gender:", gender);
console.log("Are you married?", isMarried);

// Step 2: Assign null to all variables

name = null;
email = null;
age = null;
address = null;
phoneNumber = null;
gender = null;
isMarried = null;

// Print the values after assigning null
console.log(" Values After Assigning Null ");
console.log("Name:", name);
console.log("Email:", email);
console.log("Age:", age);
console.log("Address:", address);
console.log("Phone Number:", phoneNumber);
console.log("Gender:", gender);
console.log("Are you married?", isMarried);

// Step 3: Create employeeDetails object

const employeeDetails = {
    name: null,
    email: null,
    age: null,
    address: null,
    phoneNumber: null,
    gender: null,
    isMarried: null
};

// Print the employeeDetails object
console.log(" Employee Details Object ");
console.log(employeeDetails);
