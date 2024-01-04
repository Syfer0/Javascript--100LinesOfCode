````markdown
# "Before beginning the exercise, carefully copy and paste all the provided steps into your coding environment. Challenge yourself to complete the code without referring to the solution. If you encounter difficulties during the coding process, feel free to consult the solution for guidance."

# Array Manipulation Challenge

## Challenge Description

You have been given an array of objects representing expenses. Each object has the following structure:

```javascript
{ id: number, category: string, amount: number }
```
````

Your task is to perform various operations on this array using array methods.

## Steps

### Step 1: Create an array of expense objects

```javascript
const expenses = [
  { id: 1, category: "Groceries", amount: 50 },
  { id: 2, category: "Utilities", amount: 120 },
  { id: 3, category: "Transportation", amount: 80 },
  { id: 4, category: "Entertainment", amount: 40 },
  { id: 5, category: "Dining Out", amount: 60 },
];
```

### Step 2: Use the map method to create a new array with the amounts doubled.

```javascript
const doubledExpenses = expenses.map((expense) => ({
  ...expense,
  amount: expense.amount * 2,
}));
```

### Step 3: Use the filter method to create a new array with expenses greater than or equal to $80.

```javascript
const highExpenses = expenses.filter((expense) => expense.amount >= 80);
```

### Step 4: Use the reduce method to calculate the total amount of all expenses.

```javascript
const totalExpenses = expenses.reduce(
  (total, expense) => total + expense.amount,
  0
);
```

### Step 5: Use the slice method to get the expenses from index 1 to 3 (inclusive).

```javascript
const slicedExpenses = expenses.slice(1, 4);
```

### Step 6: Create a function called `getExpenseCategories` that returns an array of unique expense categories.

```javascript
const getExpenseCategories = () => {
  const categoriesSet = new Set(expenses.map((expense) => expense.category));
  return Array.from(categoriesSet);
};
```

### Step 7: Print the results of each step

```javascript
console.log("Original Expenses:", expenses);
console.log("Doubled Expenses:", doubledExpenses);
console.log("High Expenses (>= $80):", highExpenses);
console.log("Total Expenses:", totalExpenses);
console.log("Sliced Expenses (Index 1 to 3):", slicedExpenses);
console.log("Unique Expense Categories:", getExpenseCategories());
```
