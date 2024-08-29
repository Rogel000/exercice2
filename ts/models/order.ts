import { Customer } from "./customers";
import { OrderItem } from "./orderItem";

export interface Order {
  id: string;
  customer: Customer;
  items: OrderItem[];
  status: "en attente" | "expédiée" | "livrée";
}
