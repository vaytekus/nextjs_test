// import getEventsData from "../../lib/api/getEventsData";
// import { getEventDetailsData } from "../../lib/api/getEventsData";
import Listings from "./listings";
import { PagingData } from "@/types";

export default async function ListingsPageLoader({ pagingParams }: { pagingParams?: PagingData }) {
  const awaitedSearchParams = await pagingParams;
  const isShowListings = true;
  // const eventData = await getEventsData({
  //   num: pagingParams?.pagingParams?.pageNum || '1', 
  //   size: pagingParams?.pagingParams?.pageSize || '10'
  // });
  // const eventData = await pagingParams({

  // const filterType: string = url.searchParams.get("filterType");
  // const filterValue: string = url.searchParams.get("filterValue");
  // console.log('awaitedSearchParams', awaitedSearchParams)

  // const eventDetailsData = await getEventDetailsData();

  return (
    <div>
      {isShowListings && <Listings pagingData={awaitedSearchParams} />}
    </div>
  )
}
