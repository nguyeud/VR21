// Exercise 7

// Primitives
let firstName = "Uyen";

console.log("Hi, my name is " + firstName + ".");
console.log("My name is a type of " + typeof (firstName) + ".");
console.log("My name is a number: " + Number(firstName));

let ageStr = "26";
let ageNum = Number.parseInt(ageStr);

console.log("I am " + ageStr + " years old. This is using age as a string.");
console.log("My age is a number: " + Number.isInteger(ageStr));
console.log("I am " + ageNum + " years old. This is using age as a number after parsing it from a string.");
console.log("My age is a number: " + Number.isInteger(ageNum));

// Numeric Operators
let a = 4;
let b = 6;
let c = "4";

console.log("a: " + a + ", b: " + b + ", c: " + c);
console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a * b = " + (a * b));
console.log("a / b = " + (a / b));
console.log("a % b = " + (a % b));

// Variables
let cat;
console.log("Before initialization: " + cat);

cat = "Soba";
console.log("After initialization: " + cat);

// Strings
console.log("Variable cat has " + cat.length + " characters.");
console.log("Splice: " + cat.slice(2));
console.log("Variable cat includes b: " + cat.includes("b"));
console.log("The index of char b is: " + cat.indexOf("b"));
console.log("If char b is replaced in cat, then it becomes: " + cat.replace("b", "v"));
console.log("This is using template literals: " + `My name is ${firstName}. I am ${ageStr}.`);

// Boolean Logic
console.log(a == b);
console.log(a > b);
console.log(a < b);

console.log(a == c);
console.log(a === c);
console.log(a != c);
console.log(a !== c);