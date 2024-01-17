//Task: Print Numbers using For Loop
const printNumbers = (limit) => {
  for (let i = 1; i <= limit; i++) {
    console.log(i);
  }
};

// Call the function with a limit of 5 to test
console.log("Numbers up to 5:");
printNumbers(5);
printNumbers(5);
//Task 2: Calculate Sum using For Loop
const calculateSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Call the function with n as 3 to test
console.log("Sum of numbers up to 3:", calculateSum(5));
//Task 3: Print Star Tree Pattern
const printStarTree = (height) => {
  for (let i = 1; i <= height; i++) {
    const spaces = " ".repeat(height - i);
    const stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
};
printStarTree(10);
//Task 4: Count Vowels using For Loop
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
console.log("Number of vowels in 'Hello':", countVowels("Hello How are you "));
//Task 5: Reverse String using For Loop
const reverseString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

// Call the function with a string to test
console.log("Reversed 'JavaScript':", reverseString("JavaScript"));
