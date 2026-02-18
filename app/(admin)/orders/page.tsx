"use client"

import { OrderTable, Order } from "@/components/orders/order-table";

import data from "./order.json";
const orders = data.orders;

export default function OrdersPage() {
  const tableData = orders.map(order => order.order) as unknown as Order[];
  
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Orders list</h2>
        <OrderTable orders={tableData} />
      </div>
    </div>
  );
}