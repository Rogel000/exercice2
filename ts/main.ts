import { Product } from "./models/product.js";
import { Customer } from "./models/customers.js";
import { OrderManager } from "./services/orderManager.js";
import { createOrder, calculateTotal } from "./utils/orderUtils.js";

const customer1: Customer = {
  id: "cust1",
  name: "John Doe",
  email: "john.doe@example.com",
};
const product1: Product = {
  id: "prod1",
  name: "Laptop",
  price: 1000,
  stock: 10,
};
const product2: Product = { id: "prod2", name: "Mouse", price: 50, stock: 100 };
const customer2: Customer = {
  id: "cust2",
  name: "Jane Smith",
  email: "jane.smith@example.com",
};

const orderManager = new OrderManager();

const order1 = createOrder(customer1, [
  { product: product1, quantity: 1 },
  { product: product2, quantity: 2 },
]);
orderManager.addOrder(order1);
const order2 = createOrder(customer2, [
  { product: product1, quantity: 2 },
  { product: product2, quantity: 3 },
]);
orderManager.addOrder(order2);

console.log("Total for order1:", calculateTotal(order1));
console.log("Total for order1:", calculateTotal(order2));

orderManager.updateOrderStatus(order1.id, "expédiée");
console.log("Updated Order1:", orderManager.getOrderById(order1.id));
orderManager.updateOrderStatus(order2.id, "expédiée");
console.log("Updated Order1:", orderManager.getOrderById(order1.id));

console.log(
  "All orders expédiées:",
  orderManager.listOrdersByStatus("expédiée")
);

orderManager.removeOrder(order2.id);

console.log(
  "All orders after removing order2:",
  orderManager.listOrdersByStatus("expédiée")
);
