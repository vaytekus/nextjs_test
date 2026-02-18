import { auth } from "@/auth";
import { PagingDataProps } from '../../types/types';

export async function getUsersData(data: PagingDataProps) {
  const pagingData = data;
  console.log('Calling event function');
  const session = await auth();

  if (!session || !session.user) {
    throw new Error('No session or user found');
  }

  try {
    const token = session.user.bearer || "";
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users?pageNum=${pagingData?.num || 1}&pageSize=${pagingData?.size || 10}`, {
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