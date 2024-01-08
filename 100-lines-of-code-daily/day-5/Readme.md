# Day 5 Assignment: For Loop and Star Tree

## Task 1: Print Numbers using For Loop

Create a function named `printNumbers` that takes a parameter `limit` and prints numbers from 1 to the specified limit using a for loop.

```javascript
const printNumbers = (limit) => {
  for (let i = 1; i <= limit; i++) {
    console.log(i);
  }
};

// Call the function with a limit of 5 to test
console.log("Numbers up to 5:");
printNumbers(5);
```

## Task 2: Calculate Sum using For Loop

Write a function named `calculateSum` that takes a parameter `n` and calculates the sum of numbers from 1 to 'n' using a for loop.

```javascript
const calculateSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Call the function with n as 3 to test
console.log("Sum of numbers up to 3:", calculateSum(3));
```

## Task 3: Print Star Tree Pattern

Create a function named `printStarTree` that takes a parameter `height` and prints a star tree pattern.

```javascript
const printStarTree = (height) => {
  for (let i = 1; i <= height; i++) {
    const spaces = " ".repeat(height - i);
    const stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
};

// Call the function with height as 4 to test
console.log("Star Tree for height 4:");
printStarTree(4);
```

## Task 4: Count Vowels using For Loop

Write a function named `countVowels` that takes a string and counts the number of vowels using a for loop.

```javascript
const countVowels = (str) => {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};

// Call the function with a string to test
console.log("Number of vowels in 'Hello':", countVowels("Hello"));
```

## Task 5: Reverse String using For Loop

Implement a function named `reverseString` that reverses a given string using a for loop.

```javascript
const reverseString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

// Call the function with a string to test
console.log("Reversed 'JavaScript':", reverseString("JavaScript"));
```
