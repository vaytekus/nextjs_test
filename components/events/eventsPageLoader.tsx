import Events from "./events";
import { PagingData } from "@/types";

export default async function EventsPageLoader({ pagingParams }: { pagingParams?: PagingData }) {
  const awaitedSearchParams = await pagingParams;
  const isShowEvents = true;
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
      {isShowEvents && <Events pagingData={awaitedSearchParams} />}
    </div>
  )
}
