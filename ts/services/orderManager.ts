import { Order } from "../models/order";

export class OrderManager {
  private orders: Order[] = [];

  addOrder(order: Order): void {
    this.orders.push(order);
  }
  getOrderById(id: string): Order | undefined {
    return this.orders.find((order) => order.id === id) ;
  }
  updateOrderStatus(id: string, status: "en attente" | "expédiée" | "livrée"): void {
    const order = this.getOrderById(id);
    if (order) {
      order.status = status;
    }
  }
  listOrdersByStatus(status: "en attente" | "expédiée" | "livrée"): Order[] {
    return this.orders.filter((order) => order.status === status);
  }
  removeOrder(id: string): void {
    this.orders = this.orders.filter((order) => order.id!== id);
  }
}
