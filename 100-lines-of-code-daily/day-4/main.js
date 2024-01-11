// ## Task 1: Sum of Even Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SumofEven = numbers.reduce(
  (acc, num) => (num % 2 === 0 ? acc + num : acc),
  0
);
console.log(SumofEven);
// Task 2: Exponentiation Function
const calculateExponent = (base, exponent) => base ** exponent;

console.log("Result of exponentiation:", calculateExponent(2, 3));

// Task 3: Object Destructuring
const book = { title: "JavaScript Mastery", author: "John Doe", pages: 200 };
const { title: myBookTitle, author: bookAuthor, pages: bookpages } = book;
console.log("Book Details:", myBookTitle, bookAuthor, bookpages);
// Task 4: Prime Checker
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log("Is 13 prime?", isPrime(13));
// Task 5: Squared Numbers
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(squaredNumbers);

console.log("Squared Numbers:", squaredNumbers);
// Task 6: Fetch Data from API (Promise)
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "John", value: 30 };
      resolve(data);
    }, 2000);
  });
};
fetchData()
  .then((result) => console.log("Fetched Data:", result))
  .catch((error) => console.error("Error fetching data:", error));

// Task 7: Template Literals
// `` using this know as templete literal
const name = "John";
const age = 30;

console.log(`My name is ${name} and I am ${age} years old.`);
// Task 8: Error Handling with try-catch
const throwErrorFunction = () => {
  throw new Error("This is a custom error.");
};

try {
  throwErrorFunction();
} catch (error) {
  console.error("Caught an error:", error.message);
}
