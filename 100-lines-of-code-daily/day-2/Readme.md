// Day 2 Assignment: Advanced JavaScript Concepts

// Task 1: Object Manipulation

// You have an object representing a book. Your task is to perform various operations on this object.

// Step 1: Create an object representing a book
const book = {
title: "The JavaScript Ninja",
author: "John Doe",
pages: 300,
isAvailable: true,
publishYear: 2022,
};

// Step 2: Use object destructuring to extract title and author properties and log them.
const { title, author } = book;
console.log(`Book Title: ${title}, Author: ${author}`);

// Step 3: Add a new property 'genre' with the value 'Programming' to the book object.
book.genre = "Programming";

// Step 4: Create a function 'isBookAvailable' using arrow function syntax that returns whether the book is available or not.
const isBookAvailable = () => book.isAvailable ? "Available" : "Not Available";

// Step 5: Log the availability of the book using the 'isBookAvailable' function.
console.log(`Book Availability: ${isBookAvailable()}`);

// Task 2: Array Manipulation

// You have an array of numbers. Your task is to perform various operations on this array.

// Step 6: Create an array of numbers
const numbers = [10, 5, 8, 15, 7];

// Step 7: Use the 'map' method to create a new array where each number is squared.
const squaredNumbers = numbers.map(num => num \*\* 2);

// Step 8: Use the 'filter' method to create a new array with numbers greater than 8.
const numbersGreaterThanEight = numbers.filter(num => num > 8);

// Step 9: Use the 'reduce' method to calculate the sum of all numbers in the array.
const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);

// Step 10: Log the results of each step.
console.log('Original Numbers:', numbers);
console.log('Squared Numbers:', squaredNumbers);
console.log('Numbers > 8:', numbersGreaterThanEight);
console.log('Sum of Numbers:', sumOfNumbers);
