const users = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 22 },
  { name: "Eve", age: 28 },
];
//step 1
const names = users.map((user) => user.name);
console.log(names);
// Step 2: Use the 'map' method to create a new array where each user's name is capitalized.
const capitalized = users.map((user) => ({
  name: user.name.charAt(0).toUpperCase() + user.name.slice(1),
  age: user.age,
}));
console.log(capitalized);
// Step 3: Use the 'map' method to create a new array where each user's age is increased by 2.
const increasedAge = users.map((user) => ({
  name: user.name,
  age: user.age + 2,
}));
console.log(increasedAge);
//Step 4: Use the 'map' method to create a new array with a message for each user.
const messages = users.map((user) => `hello ${user.name}`);
console.log(messages);
const capitalizedNames = users.map((user) => ({
  name: user.name.toUpperCase(),
  age: user.age,
}));
console.log(capitalizedNames);
