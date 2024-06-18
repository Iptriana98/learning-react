// Functions in JavaScript
// ===============================

// Functions are blocks of code designed to perform a particular task.

// Function Declaration:
function greet(name) {
    return `Hello, ${name}!`;
}

// Calling a Function:
console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expression:
const add = function(a, b) {
    return a + b;
};

// Calling a Function Expression:
console.log(add(3, 5)); // Output: 8

// Arrow Function:
const multiply = (a, b) => {
    return a * b;
};

// Calling an Arrow Function:
console.log(multiply(4, 7)); // Output: 28

// Arrow Function with Implicit Return:
const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // Output: 6

// Function with Default Parameters:
function greetWithTime(name, timeOfDay = "day") {
    return `Good ${timeOfDay}, ${name}!`;
}

console.log(greetWithTime("Bob")); // Output: Good day, Bob!
console.log(greetWithTime("Bob", "morning")); // Output: Good morning, Bob!

// Function with Rest Parameters:
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

// Higher-Order Function:
function operate(a, b, operation) {
    return operation(a, b);
}

console.log(operate(6, 2, add)); // Output: 8
console.log(operate(6, 2, multiply)); // Output: 12

// Exercise:
// 1. Create a function named `divide` that takes two numbers and returns their division.
// 2. Create an arrow function named `modulus` that takes two numbers and returns the remainder of their division.
// 3. Create a higher-order function named `calculate` that takes two numbers and a callback function (operation) and returns the result of the callback function.
// 4. Use the `calculate` function to perform division and modulus operations.

// Your code here:


// ===============================================================
// More Information:
// For more information on Functions, visit:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
