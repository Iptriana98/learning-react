// Literal Objects in JavaScript
// ===============================

// Literal Objects provide a convenient way to create and manage objects in JavaScript.

// Basic example of a Literal Object:
let person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 30
person.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// Adding properties and methods to an object:
person.email = "alice@example.com";
person.sayGoodbye = function() {
    console.log(`Goodbye from ${this.name}!`);
};

console.log(person.email); // Output: alice@example.com
person.sayGoodbye(); // Output: Goodbye from Alice!

// Accessing properties using dot notation and bracket notation:
console.log(person.name); // Output: Alice
console.log(person['age']); // Output: 30

// Updating properties:
person.age = 31;
console.log(person.age); // Output: 31

// Deleting properties:
delete person.email;
console.log(person.email); // Output: undefined

// Nested Objects:
let company = {
    name: "Tech Corp",
    location: "New York",
    employees: {
        total: 100,
        departments: ["Engineering", "Sales", "HR"]
    }
};

console.log(company.name); // Output: Tech Corp
console.log(company.employees.total); // Output: 100
console.log(company.employees.departments[1]); // Output: Sales

// Example of a more complex object:
let library = {
    name: "City Library",
    books: [
        { title: "1984", author: "George Orwell" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" }
    ],
    findBook: function(bookTitle) {
        return this.books.find(book => book.title === bookTitle);
    }
};

let book = library.findBook("1984");
console.log(book); // Output: { title: '1984', author: 'George Orwell' }

// Objects destructuring:
let { name, location } = company;
console.log(name); // Output: Tech Corp
console.log(location); // Output: New York

const { name: companyName, location: companyLocation } = company;
console.log(companyName); // Output: Tech Corp

// Objects desctructuring in functions:
function greet({ name, age }) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet({ name: "Alice", age: 30 }); // Output: Hello, my name is Alice and I am 30 years old.

// Objects desctructuring in functions with default values:
function greetWithDefault({ name = "John", age = 30 }) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greetWithDefault({ name: "Alice" }); // Output: Hello, my name is Alice and I am 30 years old.

// ===============================================================
// Exercise:
// 1. Declare a variable called `car` and create a Literal Object with properties: `brand`, `model`, and `year`.
// 2. Add a method called `getDetails` that returns a string with the car details.
// 3. Update the `year` property.
// 4. Delete the `model` property.
// 5. Print the details of the car using the `getDetails` method.

// Your code here:


// ===============================================================
// More Information:
// For more information on Literal Objects, visit:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
