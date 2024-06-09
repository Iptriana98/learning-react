const person = {
    name: "Tony",
    lastName: "Stark",
    age: 45,
    address: {
        street: "Main St",
        zip: "1234",
        city: "New York",
        country: "USA",
        lat: 40.7128,
        lng: -74.006,
    }
};

// console.log(person);
console.table({person});

//clone the object person
const person2 = {...person};

person2.name = "Peter";
person2.lastName = "Parker";
person2.age = 25;

console.table({person, person2});