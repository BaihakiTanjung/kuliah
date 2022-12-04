// Variable

const variableConst = "Hello World";
let variableLet = "Hello World";

// Concat
const concat = `${variableConst} ${variableLet}`;

// Conditional
if (variableConst === variableLet) {
  console.log("They are equal");
}

// Short conditional
variableConst === variableLet
  ? console.log("They are equal")
  : console.log("They are not equal");

// Loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// function
function myFunction() {
  console.log("Hello World");
}

// array
const myArray = [1, 2, 3, 4, 5];

// object
const myObject = {
  name: "John",
  age: 30,
  city: "New York",
};

// desctructuring
const { name, age, city } = myObject;

// spread
const myArray2 = [...myArray, 6, 7, 8, 9, 10];

// modules
import { myFunction } from "./task-9.js";
