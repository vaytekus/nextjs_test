import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
      {
        id: 384392,
        stock: 5,
        sold: 1,
        startDateTime: "2025-03-21T20:00:00",
        venueName: "fake map name",
        performerName: "fake event name",
        link: "/fake-link",
        city: "fake city",
      }
    ],
    eventOrders: {
      orders: [
        {
          id: 1,
          createDate: "2025-02-19T12:28:13",
          section: "fake section",
          row: "fake row",
          availableSeats: "1,2,3",
          seller: "fake",
          buyer: "fake buyer",
          totalAmount: 100,
          profit: 10,
          currency: { symbol: "€" }
        }
      ]
    },
    eventListings: {
      totalCount: 1,
      listings: [
        {
          id: "fake-listing-1",
          seller: { name: "fake" },
          section: "fake section",
          row: "fake row",
          availableSeatNumbers: "1,2",
          faceValue: 50,
          ticketPrice: 60,
          status: "Active"
        }
      ]
    }
  });
}
