console.log("Hello World");

// Variables and constants
const name = "Ibrahin";

let age = 25;
age = 26;

// output: Ibrahin 26.
console.log(name, age);

if (true) {
    // you can create name here because it isn't in the same scope 
    // this is called shadowing and it's not recommended
    let name = "Peter";
    
    // output: Peter
    console.log(name);

    // you can change age because it is in the same scope
    age = 30;

    // output: 30.
    console.log(age);
}

// output: Ibrahin 30. 
console.log(name, age);