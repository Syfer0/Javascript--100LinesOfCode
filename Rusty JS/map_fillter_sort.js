const data = {
  store: {
    name: "Tech Haven",
    location: "Mumbai, India",
    categories: ["Laptops", "Mobiles", "Accessories"],
    products: [
      {
        id: 101,
        name: "MacBook Pro",
        brand: "Apple",
        price: 180000,
        stock: 10,
        ratings: [5, 4, 5, 4, 5],
        details: {
          processor: "M2 Chip",
          ram: "16GB",
          storage: "512GB SSD",
        },
      },
      {
        id: 102,
        name: "Samsung Galaxy S23",
        brand: "Samsung",
        price: 75000,
        stock: 25,
        ratings: [4, 4, 3, 5, 4],
        details: {
          processor: "Snapdragon 8 Gen 2",
          ram: "8GB",
          storage: "256GB",
        },
      },
      {
        id: 103,
        name: "Sony WH-1000XM5",
        brand: "Sony",
        price: 30000,
        stock: 5,
        ratings: [5, 5, 5, 4, 5],
        details: {
          type: "Wireless",
          battery_life: "30 hours",
          noise_cancellation: true,
        },
      },
      {
        id: 104,
        name: "Logitech MX Master 3",
        brand: "Logitech",
        price: 10000,
        stock: 15,
        ratings: [4, 5, 4, 4, 3],
        details: {
          type: "Wireless Mouse",
          dpi: "4000",
          connectivity: "Bluetooth & USB",
        },
      },
    ],
    employees: [
      {
        id: 201,
        name: "Arjun Mehta",
        role: "Manager",
        salary: 80000,
        experience: 7,
      },
      {
        id: 202,
        name: "Riya Sharma",
        role: "Sales Executive",
        salary: 45000,
        experience: 3,
      },
      {
        id: 203,
        name: "Vikas Singh",
        role: "Technician",
        salary: 50000,
        experience: 5,
      },
    ],
  },
};
const ProductName = data.store.products.map((products) => products.name);
console.log(ProductName);
const EmployeesFitter = data.store.employees.map((employees) => ({
  Name: employees.name,
  Role: employees.role,
}));
console.log(EmployeesFitter);
const stockValue = data.store.products.map((product) => ({
  productName: product.name,
  stockValue: product.price / product.stock,
}));
console.log(stockValue);
const FilterProducts = data.store.products.filter(
  (product) => product.price < 50000
);
console.log(FilterProducts);
const SortProducts = data.store.products.sort((a, b) => a.id - b.id);
console.log(SortProducts);
const EmployeExp = data.store.employees
  .filter((employees) => employees.experience <= 5)
  .map((employee) => employee.name);

console.log(EmployeExp);
const checkStock = data.store.products
  .filter((product) => product.stock > 0) // Keep only products in stock
  .map((product) => product.name); // Extract only the names

console.log(checkStock);
