// conditions.js

// ## Conditional Statements in JavaScript

// ### Introduction
// Conditional statements are used to perform different actions based on different conditions. 
// The primary conditional statements in JavaScript are `if`, `else`, `else if`, and the ternary operator (`? :`).

// ### Examples

// 1. Simple if statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}

// 2. if-else statement
let temperature = 25;
if (temperature > 30) {
    console.log("It's a hot day.");
} else {
    console.log("It's a cool day.");
}

// 3. if-else if-else statement
let day = "Monday";
if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
} else if (day === "Friday") {
    console.log("It's almost the weekend!");
} else {
    console.log("It's a weekday.");
}

// 4. Ternary operator
let isRaining = true;
let message = isRaining ? "Don't forget your umbrella!" : "You don't need an umbrella.";
console.log(message);

// 5. Switch statement
let fruit = "Apple";
switch (fruit) {
    case "Banana":
        console.log("It's a Banana.");
        break;
    case "Apple":
        console.log("It's an Apple.");
        break;
    case "Orange":
        console.log("It's an Orange.");
        break;
    default:
        console.log("Unknown fruit.");
}

// ### Exercises

// 1. **Temperature Check**
// Write a program to check if the temperature is above or below freezing point.
let temperatureInCelsius = -5;
if (temperatureInCelsius < 0) {
    console.log("Below freezing point.");
} else {
    console.log("Above freezing point.");
}

// 2. **Grade Calculator**
// Write a program to assign grades based on marks scored. Assume marks are between 0 and 100.
let marks = 85;
let grade;
if (marks >= 90) {
    grade = "A";
} else if (marks >= 80) {
    grade = "B";
} else if (marks >= 70) {
    grade = "C";
} else if (marks >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log(`The grade for ${marks} marks is ${grade}.`);

// 3. **Traffic Light Simulation**
// Write a program to simulate a traffic light system. Use a switch statement to determine the action based on the light color.
let trafficLight = "Green";
switch (trafficLight) {
    case "Red":
        console.log("Stop!");
        break;
    case "Yellow":
        console.log("Get ready!");
        break;
    case "Green":
        console.log("Go!");
        break;
    default:
        console.log("Invalid traffic light color.");
}

// 4. **Age Verification**
// Write a program to check if a person is a teenager (13-19 years old).
let personAge = 15;
if (personAge >= 13 && personAge <= 19) {
    console.log("You are a teenager.");
} else {
    console.log("You are not a teenager.");
}

// 5. **Discount Calculator**
// Write a program to apply discounts based on the purchase amount.
let purchaseAmount = 120;
let discount;
if (purchaseAmount >= 100) {
    discount = 0.2; // 20% discount
} else if (purchaseAmount >= 50) {
    discount = 0.1; // 10% discount
} else {
    discount = 0; // No discount
}
let finalAmount = purchaseAmount - (purchaseAmount * discount);
console.log(`The final amount after discount is $${finalAmount.toFixed(2)}.`);

