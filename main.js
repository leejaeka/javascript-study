console.log('Hello World')
console.error('This is an error')
console.warn('This is a warning')

// semicolons and colons are not necessary

// var, let, const
// var is global but don't really use anymore
// let - you can reassign values
// const - you cannot reassign values 
// const - you cannot 'const age;'

// example
//let age = 30;
//age = 31;
//console.log(age);

// String, Numbers, Boolean, null, undefined, Symbol

const name = 'Tony Jaekang Lee'; // String
const age = 30; // Numbers
const isCool = false; // boolean
const rating = 4.5; // There are no float type
const x = undefined;
const y = null;
let z;

//console.log(typeof rating)

//CONCATENATION
console.log('My name is' + name + 'and I am age' + age);
//Template String ` instead of '
const sen = `My name is ${name} and I am ${age}`;
console.log(sen);
// LENGTH, SUBSTRING, LOWER/UPPERCASE, SPLIT
console.log(`length of name: ${name.length}`)
console.log(`uppercase: ${name.toUpperCase()}`)
console.log(`Last name: ${name.substring(13)}`.toLowerCase())
console.log(name.split(' '))

//Arrays
const numbers = new Array(name)
const fruits = ['apples', 'banana', 'tomato']
fruits[2] = 'ayaya'

fruits.push('mangoes') // concatenate on to list
fruits.unshift('mang') // concatenate on to first
console.log(fruits)
console.log(Array.isArray(fruits))

// Class
const person = {
    firstName: 'Jaekang',
    lastName: 'Lee',
    age: 22,
    fruits: fruits,
    address: {
        street: '50 Charles St.',
        city: 'Toronto',
        state: 'ON'
    }
}
console.log(person.address.street)
const { firstName, lastName, address: { city } } = person;
console.log(city)

const todos = [
    {
        id: 1,
        text: 'Code1',
        isCompleted: true
    },
    {
        id: 1,
        text: 'Code2',
        isCompleted: false
    },
    {
        id: 1,
        text: 'Code3',
        isCompleted: false
    },
    {
        id: 1,
        text: 'Code3',
        isCompleted: false
    }
];
console.log(todos[1].text)
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// LOOPS
for (let i = 0; i <= 10; i++) {
    console.log('for LOOP');
}
let i = 20
while (i > 10) {
    i--;
}
// FOR EACH
todos.forEach(function (td) { console.log(td.text) });
//  MAP, FILTER
const todoText = todos.map(function (todo) { return todo.text; });
console.log(todoText)
const todoFilter = todos.filter(function (todo) {
    return todo.isCompleted === true;
})
console.log(todoFilter)

// IF ||, &&
const t = 10;
const s = '10';
if (t == s) { //
    console.log('t is s')
} else if (t > 10) {
    console.log('t is greater than 10')
}
if (t === s) {
    console.log('t is not 10')
} else {
    console.log('t is not s')
}

// TERNARY OPERATOR
// THEN (?) ELSE (:)
const a = 10;
const color = x > 10 ? 'red' : 'blue'; 
switch (color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
}

//FUNCTION
function adddd(num1, num2) {
    return num1 + num2;
};