"use client"

import { Search } from "lucide-react"
import { Badge } from "../ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useState } from "react"
import { Input } from "../ui/input"
import { FormatDate } from "@/lib/formatDate";

enum OrderStatus {
  "New",
  "Pending",
  "Success",
  "Canceled",
  "Refused",
  "Failed",
  "Refunded",
  "RefundRequested",
}

enum OrderStatusColor {
  Green = "bg-green-500",
  Orange = "bg-orange-500",
  Red = "bg-red-500",
  Gray = "bg-gray-500",
}

const OrderStatusColorMap: Record<OrderStatus, OrderStatusColor> = {
  [OrderStatus.New]: OrderStatusColor.Orange,
  [OrderStatus.Pending]: OrderStatusColor.Orange,
  [OrderStatus.Success]: OrderStatusColor.Green,
  [OrderStatus.Canceled]: OrderStatusColor.Red,
  [OrderStatus.Refused]: OrderStatusColor.Red,
  [OrderStatus.Failed]: OrderStatusColor.Red,
  [OrderStatus.Refunded]: OrderStatusColor.Gray,
  [OrderStatus.RefundRequested]: OrderStatusColor.Gray,
}

// TODO: add actual types from the old admin system
export interface Order {
  id: string | number
  status: OrderStatus
  orderStatusString: string
  paymentMethod: string
  totalAmount: string | number
  createDate: string
  event: {
    name: string
    startDateTime: string
    category: {
      name: string
    }
    venue: {
      name: string
      city: {
        name: string
      }
      country: {
        codeAlpha2: string
      }
    }
  }
  buyer: {
    fullName: string
  }
  seller: {
    fullName: string
  }
  ticketAssignments: {
    ticket: {
      seat: string
    }
  }[]
  availableSeatNumbers?: string
  listing: {
    id: string | number
    externalId: string
  }
}

export function OrderTable({ orders }: { orders: Order[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const eventDate = (date: Date | string) => {
    return FormatDate(date, "LL.dd.y");
  }
  
  const eventTime = (date: Date | string) => {
    return FormatDate(date, "HH:mm");
  }

  const filteredData = orders.filter((item) =>
    Object.values(item).some((value: unknown) => 
      value != null && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    ),
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[16px]"></TableHead>
              <TableHead className="w-[75px]">Order ID</TableHead>
              <TableHead className="w-[75px]">Order date</TableHead>
              <TableHead className="w-[50px]">Status</TableHead>
              <TableHead className="w-[50px]">Method</TableHead>
              <TableHead className="w-[250px]">Event</TableHead>
              <TableHead className="w-[150px]">Event info</TableHead>
              <TableHead className="w-[150px]">Buyer / Seller</TableHead>
              <TableHead className="">Tickets</TableHead>
              <TableHead className="">Listing info</TableHead>
              <TableHead className="text-right">Total amount</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredData.map((order) => (
              <TableRow key={order.id}>
                <TableCell className={`${OrderStatusColorMap[order.status as OrderStatus] || 'bg-gray-100'}`}></TableCell>
                <TableCell className="font-bold">{order.id}</TableCell>
                <TableCell>
                  <div className="grid gap-1">
                  <span>{eventDate(order.createDate)}</span>
                  <span>{eventTime(order.createDate)}</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{order.orderStatusString}</TableCell>
                <TableCell className="font-medium">{order.paymentMethod}</TableCell>
                <TableCell>
                  <div className="grid gap-1">
                    <span>{order.event.category.name}</span>
                    <span>{order.event.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="grid gap-1">
                    <span>{order.event.venue.name}, {order.event.venue.city.name}, {order.event.venue.country.codeAlpha2}</span>
                    <span>{eventDate(order.event.startDateTime)}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span><span className="font-semibold">Buyer:</span> {order.buyer.fullName}</span>
                    <span><span className="font-semibold">Seller:</span> {order.seller.fullName}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="grid gap-1">
                    {order.ticketAssignments?.length > 0 &&
                      <Badge variant="default" className="font-bold bg-orange-500">
                        {order.ticketAssignments.map((ticket) => ticket.ticket.seat).join(", ")}
                      </Badge>
                    }
                    {order.availableSeatNumbers &&
                      <Badge variant="default" className="font-bold bg-green-500">
                        {order.availableSeatNumbers}
                      </Badge>
                    }
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span><span className="font-semibold">Id:</span> {order.listing.id}</span>
                    <span><span className="font-semibold">External id:</span> {order.listing.externalId}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">€{order.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>

  )
}
