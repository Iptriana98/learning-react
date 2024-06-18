// Arrays in JavaScript
// ===============================

// Arrays are used to store multiple values in a single variable.

// Creating an array:
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Accessing elements:
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Cherry

// Updating elements:
fruits[1] = "Blueberry";
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// Adding elements:
fruits.push("Dragonfruit");
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Dragonfruit"]

// Removing elements:
fruits.pop(); // Removes the last element
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// Adding elements to the beginning:
fruits.unshift("Elderberry");
console.log(fruits); // Output: ["Elderberry", "Apple", "Blueberry", "Cherry"]

// Removing the first element:
fruits.shift();
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// Finding the length of an array:
console.log(fruits.length); // Output: 3

// Looping through an array:
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach to loop through an array:
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Array methods:
// Joining all elements into a string:
let fruitString = fruits.join(", ");
console.log(fruitString); // Output: Apple, Blueberry, Cherry

// Finding the index of an element:
let index = fruits.indexOf("Blueberry");
console.log(index); // Output: 1

// Removing an element by index:
fruits.splice(index, 1); // Removes 1 element at index 1
console.log(fruits); // Output: ["Apple", "Cherry"]

// Copying an array:
let moreFruits = fruits.slice();
console.log(moreFruits); // Output: ["Apple", "Cherry"]

// Concatenating arrays:
let veggies = ["Carrot", "Broccoli"];
let food = fruits.concat(veggies);
console.log(food); // Output: ["Apple", "Cherry", "Carrot", "Broccoli"]

// Exercise:
// 1. Create an array called `numbers` with elements: 1, 2, 3, 4, 5.
// 2. Add the number 6 to the end of the array.
// 3. Remove the first element of the array.
// 4. Find the index of the number 3 and remove it from the array.
// 5. Print the updated array and its length.

// Your code here:


// ===============================================================
// More Information:
// For more information on Arrays, visit:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
