const expenses = [
  { id: 1, category: "Groceries", amount: 50 },
  { id: 2, category: "Utilities", amount: 120 },
  { id: 3, category: "Transportation", amount: 80 },
  { id: 4, category: "Entertainment", amount: 40 },
  { id: 5, category: "Dining Out", amount: 60 },
];

// const doubledExpenses = [];console.log("using map method");
//step 1
const doubledExpenses = expenses.map((expense) => ({
  ...expense,
  amount: expense.amount * 2,
}));
console.log(doubledExpenses);
//step 2
const highExpenses = expenses.filter((expense) => expense.amount > 80);
console.log(highExpenses);
//step 3
const totalExpenses = expenses.reduce(
  (total, expense) => total + expense.amount,
  0
);
console.log({ highExpenses, totalExpenses });
//step 4
const slicedExpenses = expenses.slice(1, 4);
console.log("Sliced Expenses (Index 1 to 3):", slicedExpenses);
//step 5
//Step 6: Create a function called getExpenseCategories that returns an array of unique expense categories.
const getExpenseCategories = () => {
  const categoriesSet = new Set(expenses.map((expense) => expense.category));
  return Array.from(categoriesSet);
};
console.log("Unique Expense Categories:", getExpenseCategories());
