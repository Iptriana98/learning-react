// Loops in JavaScript
// ===============================

// Loops are used to execute a block of code repeatedly.

// 1. For Loop:
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. While Loop:
console.log("\nWhile Loop:");
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// 3. Do-While Loop:
console.log("\nDo-While Loop:");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// 4. For-In Loop (for Objects):
console.log("\nFor-In Loop:");
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 5. For-Of Loop (for Iterables):
console.log("\nFor-Of Loop:");
const fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

// Exercise:
// 1. Create a function named `printNumbers` that takes a number as input and prints all numbers from 1 to that number using a for loop.
// 2. Create an array of your favorite foods and use a for-of loop to print each food item.

// Your code here:


// ===============================================================
// More Information:
// For more information on Loops, visit:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
