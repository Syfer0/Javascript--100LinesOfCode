Here’s a complex JSON dataset containing nested objects, arrays, and different data types for you to practice JavaScript methods like map, filter, reduce, sort, and object manipulation.

📌 Complex JSON Data (E-commerce Example)
json
Copy
Edit
{
"store": {
"name": "Tech Haven",
"location": "Mumbai, India",
"categories": ["Laptops", "Mobiles", "Accessories"],
"products": [
{
"id": 101,
"name": "MacBook Pro",
"brand": "Apple",
"price": 180000,
"stock": 10,
"ratings": [5, 4, 5, 4, 5],
"details": {
"processor": "M2 Chip",
"ram": "16GB",
"storage": "512GB SSD"
}
},
{
"id": 102,
"name": "Samsung Galaxy S23",
"brand": "Samsung",
"price": 75000,
"stock": 25,
"ratings": [4, 4, 3, 5, 4],
"details": {
"processor": "Snapdragon 8 Gen 2",
"ram": "8GB",
"storage": "256GB"
}
},
{
"id": 103,
"name": "Sony WH-1000XM5",
"brand": "Sony",
"price": 30000,
"stock": 5,
"ratings": [5, 5, 5, 4, 5],
"details": {
"type": "Wireless",
"battery_life": "30 hours",
"noise_cancellation": true
}
},
{
"id": 104,
"name": "Logitech MX Master 3",
"brand": "Logitech",
"price": 10000,
"stock": 15,
"ratings": [4, 5, 4, 4, 3],
"details": {
"type": "Wireless Mouse",
"dpi": "4000",
"connectivity": "Bluetooth & USB"
}
}
],
"employees": [
{
"id": 201,
"name": "Arjun Mehta",
"role": "Manager",
"salary": 80000,
"experience": 7
},
{
"id": 202,
"name": "Riya Sharma",
"role": "Sales Executive",
"salary": 45000,
"experience": 3
},
{
"id": 203,
"name": "Vikas Singh",
"role": "Technician",
"salary": 50000,
"experience": 5
}
]
}
}
🛠 Suggested Practice Challenges
📌 Basic Operations:
✅ Extract all product names.
✅ Get all employees' names and roles.
✅ Calculate the average rating of each product.
✅ Find total stock value (price \* stock) for each product.

📌 Intermediate Operations:
✅ Filter out products that are below ₹50,000.
✅ Sort products by price in descending order.
✅ Get employees who have more than 5 years of experience.
✅ Check if all products have ratings greater than 3.

📌 Advanced Challenges:
✅ Find the most expensive product in the store.
✅ Create a new array of products with an "inStock" property (true if stock > 0).
✅ Calculate the total revenue if all products were sold.
✅ Group employees by roles (e.g., { Manager: [], Sales Executive: [] }).
