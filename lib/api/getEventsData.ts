import { auth } from "@/auth";
import { PagingDataProps } from '../../types/types';

type EventDetailsDataProps = {
  num?: string;
  size?: string;
  filterType?: string;
  filterValue?: string;
}

export async function getEventsData(data: PagingDataProps) {
  const pagingData = data;
  console.log('Calling event function');
  const session = await auth();

  if (!session || !session.user) {
    throw new Error('No session or user found');
  }

  try {
    const token = session.user.bearer || "";
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Events?pageNum=${pagingData?.num || 1}&pageSize=${pagingData?.size || 10}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });

    if (!res.ok) {
      console.log('Failed to fetch data:', res.statusText);
      throw new Error('Failed to fetch data');
      // redirect("/login");
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

type FilterTypeModelDto = {
  filterType?: string;
  filterValue?: string | null;
};

function getFilterType(data: FilterTypeModelDto) {
  switch(data.filterType) {
    case 'EventId': 
      return `filter=id eq ${data.filterValue}`;
      // return `filter=id eq 382719`;
    break;
    case 'EventStatus': 
      return `filter=status eq '${data.filterValue}'`;
    break;
    case 'EventName': 
      return `filter=name eq '${data.filterValue}'`;
    break;
    case 'LocationId': 
      return `filter=venue Id eq '${data.filterValue}'`;
    break;
  }
}

export async function getEventDetailsData(data: EventDetailsDataProps) {
  const pagingData = data;
  console.log('Calling event details function');
  console.log('pagingData', pagingData);
  console.log('pagingData', pagingData.filterValue);
  const session = await auth();

  if (!session || !session.user) {
    throw new Error('No session or user found');
  }

  // status, id, name, locationId (venue Id)

  const filterType = await getFilterType(pagingData);

  console.log('filterType', filterType)
  const url = `${process.env.NEXT_PUBLIC_API_URL}/events/findEvents?${filterType}&pageNum=1&pageSize=10`;

  try {
    const token = session.user.bearer || "";
    console.log('request url', url);
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const data = await res.json();
    console.log('data', data)
    return data;
  } catch (error) {
    throw error;
  }
}
