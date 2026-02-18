import { getEventDetailsData } from "../../../../lib/api/getEventsData";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = await new URL(request.url);
  const filterType: string = url.searchParams.get("filterType") || '';
  const filterValue: string = url.searchParams.get("filterValue") || '';
  const response = await getEventDetailsData({ filterType, filterValue });

  NextResponse.next().cookies.set(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  // if (response.error || !response.data) {
  if (response.error) {
    return new NextResponse(JSON.stringify({ error: response.error }), {
      status: 502,
    });
  }

  return new NextResponse(JSON.stringify(response), { status: 200 });
}
