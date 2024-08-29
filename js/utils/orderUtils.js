export function createOrder(customer, items) {
    return {
        id: customer.id,
        customer,
        items,
        status: "en attente",
    };
}
export function calculateTotal(order) {
    return order.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
}
