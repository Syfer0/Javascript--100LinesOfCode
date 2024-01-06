// # Day 2 Assignment: Advanced JavaScript Concepts

// ## Task 1: Object Manipulation

// ### Step 1: Create an object representing a book

const book = {
  title: "The JavaScript Ninja",
  author: "John Doe",
  pages: 300,
  isAvailable: true,
  publishYear: 2022,
};
//Step 2: Use object destructuring to extract title and author properties and log them.
const { author, title, pages } = book;
console.log(
  `hey, my name is ${author} and my book is ${title} is contain ${pages}`
);
// Step 3: Add a new property 'genre' with the value 'Programming' to the book object.
book.genre = "programmming";
console.log(book);
// Step 4: Create a function 'isBookAvailable' using arrow function syntax that returns whether the book is available or not.
const isBookAvailable = () =>
  book.isAvailable ? "available" : "Not available";

// Call the function and log the result
console.log(`Is the book Available? ${isBookAvailable()}`);
// Step 5: Log the availability of the book using the 'isBookAvailable' function.
// ## Task 2: Array Manipulation

// ### Step 6: Create an array of numbers

// ```javascript
const numbers = [10, 5, 8, 15, 7];
// ### Step 7: Use the 'map' method to create a new array where each number is squared.
const newArr = numbers.map((num) => num ** 2); // () => this call back is fuction so what you need return or call back for simple operation
console.log(newArr);
// Step 8: Use the 'filter' method to create a new array with numbers greater than 8.
const greaterThan8 = numbers.filter((num) => num > 8);
console.log(greaterThan8);
// ### Step 9: Use the 'reduce' method to calculate the sum of all numbers in the array
const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
console.log(sumOfNumbers);
