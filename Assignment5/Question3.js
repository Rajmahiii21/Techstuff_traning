
/*
Question 3: Print all keys and values of employeeDetails
using different types of loops.
*/

const employeeDetails = {
    name: null,
    email: null,
    age: null,
    address: null,
    phoneNumber: null,
    gender: null,
    isMarried: null
};



// 3. Using for loop
console.log("Using for loop:");
const keys = Object.keys(employeeDetails);

for (let i = 0; i < keys.length; i++) {
    console.log(keys[i] + ":", employeeDetails[keys[i]]);
}

// 4. Using while loop
console.log("Using while loop:");
let i = 0;

while (i < keys.length) {
    console.log(keys[i] + ":", employeeDetails[keys[i]]);
    i++;
}

// 5. Using do...while loop
console.log("Using do...while loop:");
let j = 0;

if (keys.length > 0) {
    do {
        console.log(keys[j] + ":", employeeDetails[keys[j]]);
        j++;
    } while (j < keys.length);
}

