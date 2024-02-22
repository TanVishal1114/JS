//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Tanvi",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log("Number:",typeof score);
console.log("Declare in decimal",typeof scoreValue);
console.log("Boolen",typeof isLoggedIn);
console.log("null", typeof outsideTemp);
console.log("Undefine",typeof userEmail);
console.log("Symbol",typeof id);
console.log("BigInt",typeof bigNumber);
console.log("Symbol",typeof anotherId);
console.log("Array", typeof heros);
console.log("Object",typeof myObj);
console.log("Function",typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++
//stack(primitive) and heap(Non primitive)

let user_email="user@google.com"
let newUserEmail=user_email
newUserEmail="newuser@gmail.com"
console.log(user_email);

let user={
    email:"test@gmail.com",
    age:22
}
user.email="test1@gmail.com";
console.log(user.email);