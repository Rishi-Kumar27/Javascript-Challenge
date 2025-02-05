// Primitive

// 7 Types : Strings, Number,Boolean, null, undefined, Symbol,
//  BigInt 

const score = 100
const ScoreValue = 100.3

const isLogged = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3364365325378643n


// Reference(Non-primitive)

// Array, Object, Function

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name : "rishi",
    age  : 19,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);
