import { NextResponse } from "next/server";

export async function GET() {
  const mockUsers = [
    {
      id: 1,
      email: "fake.user1@example.com",
      name: "fake user",
      surname: "fake text",
      fullName: "fake user fake text",
      statusId: 2,
    },
    {
      id: 2,
      email: "fake.user2@example.com",
      name: "fake user",
      surname: "fake text",
      fullName: "fake user fake text",
      statusId: 3,
    }
  ];

  return NextResponse.json({
    data: mockUsers,
    pagination: {
      totalCount: 2,
      pageNum: 1,
      pageSize: 10,
      totalPages: 1
    }
  });
}
