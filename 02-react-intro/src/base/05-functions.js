// Functions in JavaScript

function greet(name) {
    return `Hello ${name}`;
}   

console.log(greet("Ibrahin"))

const greet2 = function(name) {
    return `Hello ${name}`;
}

console.log(greet2("Ibrahin"))

const greet3 = (name) => {
    return `Hello ${name}`;
}

console.log(greet3("Ibrahin"))

const getUser = (name) => ({
    uid: 'ABC123',
    username: name
})

console.log(getUser('Ibrahin'))