// Day 3 Assignment: Arrow Functions and Array Manipulation

// You have an array of user objects representing their names and ages.
// Your task is to perform various operations on this array using arrow functions and the map method.

// Step 1: Create an array of user objects
const users = [
{ name: "John", age: 25 },
{ name: "Alice", age: 30 },
{ name: "Bob", age: 22 },
{ name: "Eve", age: 28 },
];

// Step 2: Use the 'map' method to create a new array where each user's name is capitalized.
const capitalizedNames = users.map(user => ({
name: user.name.charAt(0).toUpperCase() + user.name.slice(1),
age: user.age
}));

// Step 3: Use the 'map' method to create a new array where each user's age is increased by 2.
const increasedAges = users.map(user => ({
name: user.name,
age: user.age + 2
}));

// Step 4: Use the 'map' method to create a new array with a message for each user.
// The message should be in the format: "Hello, {name}! You are {age} years old."
const userMessages = users.map(user => `Hello, ${user.name}! You are ${user.age} years old.`);

// Step 5: Print the results of each step.
console.log("Original Users:", users);
console.log("Capitalized Names:", capitalizedNames);
console.log("Increased Ages:", increasedAges);
console.log("User Messages:", userMessages);
