import Performers from "./performers";
import { PagingData } from "@/types";

export default async function PerformersPageLoader({ pagingParams }: { pagingParams?: PagingData }) {
  const awaitedSearchParams = await pagingParams;
  const isShowEvents = true;

  return (
    <div>
      {isShowEvents && <Performers pagingData={awaitedSearchParams} />}
    </div>
  )
}
