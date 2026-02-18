import { NextResponse } from "next/server";

export async function GET() {
  const mockEvents = [
    {
      id: 393486,
      stock: 4,
      sold: 0,
      link: "/fake-link",
      performerName: "fake event name",
      description: "fake info",
      dateTimeUTC: "2025-03-20T20:00:00",
      venueName: "fake map name",
      city: "fake city",
    }
  ];

  return NextResponse.json({
    data: mockEvents,
    pagination: {
      totalCount: 1,
      pageNum: 1,
      pageSize: 10,
      totalPages: 1
    }
  });
}
