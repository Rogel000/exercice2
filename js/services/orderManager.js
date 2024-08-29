export class OrderManager {
    constructor() {
        this.orders = [];
    }
    addOrder(order) {
        this.orders.push(order);
    }
    getOrderById(id) {
        return this.orders.find((order) => order.id === id);
    }
    updateOrderStatus(id, status) {
        const order = this.getOrderById(id);
        if (order) {
            order.status = status;
        }
    }
    listOrdersByStatus(status) {
        return this.orders.filter((order) => order.status === status);
    }
    removeOrder(id) {
        this.orders = this.orders.filter((order) => order.id !== id);
    }
}
