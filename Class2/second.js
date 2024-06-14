//Variable and their scopes
//var is a global scope
//cont and let is a block scope

//Array
let array = [1, 2, 3, 4, 5];
console.log(typeof array);

//objet
const objectt = {
  name: "object1",
  age: 22,
  contact: "02312",
};
console.log(objectt);
console.log(objectt.name);

//Array of objects
let Students = [
  {
    name: "Aqdas Ali",
    age: 22,
    program: "BSCS",
    email: "aqdasali9999@gmail.com",
  },
  {
    name: "Hammad",
    age: 30,
    program: "BSCS",
    email: "hammadshigri99@gmail.com",
  },
];

console.log(Students);

//Primitive : String, number, boolean, undefined, null
//non primitive :objects, arrays, and functions
//Hoisting
