import { NextResponse } from "next/server";

export async function GET() {
  const mockPerformers = [
    {
      id: 84911,
      name: "fake event name",
      visitors: 10,
      orders: 2,
      conversion: 20
    }
  ];

  return NextResponse.json({
    data: mockPerformers,
    pagination: {
      totalCount: 1,
      pageNum: 1,
      pageSize: 10,
      totalPages: 1
    }
  });
}
