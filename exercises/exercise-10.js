// Exercise 10
const people = ["Greg", "Mary", "Devon", "James"];

// Remove "Greg"
people.shift();
console.log(people);

// Remove "James"
people.pop();
console.log(people)

// Add "Matt" to the beginning
people.unshift("Matt");
console.log(people);

// Add your name to the end
people.push("Uyen");
console.log(people);

// Use slice - do not include "Matt" or "Mary"
const peopleCopy = people.slice(2);
console.log(peopleCopy);

// Index of "Mary"
const indexOfMary = people.indexOf("Mary");
console.log(indexOfMary);

// Index of "Foo", should return -1
const indexOfFoo = people.indexOf("Foo");
console.log(indexOfFoo);

// Redefine people variable, remove "Devon", add "Elizabeth" and "Artie" behind "Mary"
people.shift();     // remove "Matt"
people.pop();       // remove "Uyen"
people.unshift("Greg");
people.push("James");
people.splice(2,1);
people.splice(2, 0, "Elizabeth", "Artie");
console.log(people);

// Add "Bob" to end of each index of array
const withBob = [];
for (let i = 0; i < people.length; i++) {
    withBob.push(people[i].concat("Bob"));
}
console.log(withBob);