const name = "Ibrahin";
const lastName = "Perez";

// const fullName = name + " " + lastName;

const fullName = `${name} ${lastName}`;

const paragraph = `
${name}
${lastName}
${1+1}
`;

console.log(fullName)

console.log(paragraph)

//functions

function greet(name) {
    return `Hello ${name}`;
}

console.log(greet(`Ibrahin ${lastName}`))