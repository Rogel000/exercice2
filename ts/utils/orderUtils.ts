import { Order } from "../models/order";

export function createOrder(
  customer: Order["customer"],
  items: Order["items"]
): Order {
  return {
    id: customer.id,
    customer,
    items,
    status: "en attente",
  };
}


export function calculateTotal(order: Order, ): number {
  return order.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
}