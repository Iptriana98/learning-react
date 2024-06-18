// Template Strings in JavaScript
// ===============================

// Template Strings are a more convenient and readable way to work with strings.
// They were introduced in ES6 (ECMAScript 2015).

// Template Strings are defined using backticks (``) instead of single ('') or double ("") quotes.

// Basic example of Template Strings:
let name = "John";
let age = 25;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is John and I am 25 years old.

// Multi-line strings:
// With Template Strings, you can create multi-line strings without using special characters like \n.
let multiLineString = `This is a string
that spans across
multiple lines.`;
console.log(multiLineString);
// Output:
// This is a string
// that spans across
// multiple lines.

// Expressions inside Template Strings:
// You can include any valid expression inside a Template String using ${}.
let a = 5;
let b = 10;
let sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // Output: The sum of 5 and 10 is 15.

// Functions inside Template Strings:
// You can call functions inside a Template String.
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

let message = `Hello, ${capitalize(name)}!`;
console.log(message); // Output: Hello, John!

// Example of a more complex block of code with Template Strings:
let product = "laptop";
let price = 799.99;
let quantity = 2;
let total = `You have selected ${quantity} ${product}${quantity > 1 ? 's' : ''}.
The total price is $${(price * quantity).toFixed(2)}.`;

console.log(total);
// Output:
// You have selected 2 laptops.
// The total price is $1599.98.

// Exercise:
// 1. Declare a variable called `yourName` and assign your name to it.
// 2. Declare a variable called `yourHobby` and assign your favorite hobby to it.
// 3. Use a Template String to create a sentence that says "Hello, my name is [yourName] and I like [yourHobby]."
// 4. Print the sentence to the console.

// Your code here:


// ===============================================================
// More Information:
// For more information on Template Strings, visit:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
