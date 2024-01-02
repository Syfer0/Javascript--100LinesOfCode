```markdown
# Day 4 Assignment: JavaScript Concepts (100 lines)

## Task 1: Sum of Even Numbers

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvens = numbers.reduce((acc, num) => (num % 2 === 0 ? acc + num : acc), 0);

console.log("Sum of even numbers:", sumOfEvens);
```

## Task 2: Exponentiation Function

```javascript
const calculateExponent = (base, exponent) => base ** exponent;

console.log("Result of exponentiation:", calculateExponent(2, 3));
```

## Task 3: Object Destructuring

```javascript
const book = { title: "JavaScript Mastery", author: "John Doe", pages: 200 };

const { title: bookTitle, author: bookAuthor, pages: bookPages } = book;

console.log("Book Details:", bookTitle, bookAuthor, bookPages);
```

## Task 4: Prime Checker

```javascript
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log("Is 13 prime?", isPrime(13));
```

## Task 5: Squared Numbers

```javascript
const squaredNumbers = numbers.map((num) => num ** 2);

console.log("Squared Numbers:", squaredNumbers);
```

## Task 6: Fetch Data from API (Promise)

```javascript
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
```

## Task 7: Template Literals

```javascript
const name = "John";
const age = 30;

console.log(`My name is ${name} and I am ${age} years old.`);
```

## Task 8: Error Handling with try-catch

```javascript
const throwErrorFunction = () => {
  throw new Error("This is a custom error.");
};

try {
  throwErrorFunction();
} catch (error) {
  console.error("Caught an error:", error.message);
}
```
