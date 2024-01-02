// Day 4 Assignment: JavaScript Concepts (100 lines)

// Task 1: Create an array of numbers and write a function to find the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvens = numbers.reduce((acc, num) => (num % 2 === 0 ? acc + num : acc), 0);

console.log("Sum of even numbers:", sumOfEvens);

// Task 2: Write a function that takes two parameters, a base, and an exponent, and calculates the result.

const calculateExponent = (base, exponent) => base \*\* exponent;

console.log("Result of exponentiation:", calculateExponent(2, 3));

// Task 3: Create an object representing a book and use object destructuring to extract its properties.

const book = { title: "JavaScript Mastery", author: "John Doe", pages: 200 };

const { title: bookTitle, author: bookAuthor, pages: bookPages } = book;

console.log("Book Details:", bookTitle, bookAuthor, bookPages);

// Task 4: Implement an arrow function that checks if a given number is prime.

const isPrime = (num) => {
if (num <= 1) return false;
for (let i = 2; i <= Math.sqrt(num); i++) {
if (num % i === 0) return false;
}
return true;
};

console.log("Is 13 prime?", isPrime(13));

// Task 5: Use the map() function to create a new array with squared values of the original array.

const squaredNumbers = numbers.map((num) => num \*\* 2);

console.log("Squared Numbers:", squaredNumbers);

// Task 6: Write a function that simulates fetching data from an API using Promises.

const fetchData = () => {
return new Promise((resolve, reject) => {
setTimeout(() => {
const data = { name: "Sample Data", value: 42 };
resolve(data);
}, 2000);
});
};

fetchData()
.then((result) => console.log("Fetched Data:", result))
.catch((error) => console.error("Error fetching data:", error));

// Task 7: Demonstrate the use of template literals for string interpolation.

const name = "John";
const age = 30;

console.log(`My name is ${name} and I am ${age} years old.`);

// Task 8: Implement a function that throws an error and handle it using try-catch.

const throwErrorFunction = () => {
throw new Error("This is a custom error.");
};

try {
throwErrorFunction();
} catch (error) {
console.error("Caught an error:", error.message);
}
