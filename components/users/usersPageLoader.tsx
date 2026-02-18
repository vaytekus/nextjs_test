// import getUsersData from "../../lib/api/getUsersData";
// import Users from "./users";

// export default async function UsersPageLoader() {
//   const usersItems = await getUsersData();

//   console.log('usersItems', usersItems)

//   return (
//     <Users items={usersItems || []}></Users>
//   )
// }

// import getUsersData from "../../lib/api/getUsersData";
import Users from "./users";
import { PagingData } from "@/types";

export default async function UsersPageLoader({ pagingParams }: { pagingParams?: PagingData }) {
  const awaitedSearchParams = await pagingParams;
  const isShowEvents = true;

  return (
    <div>
      {isShowEvents && <Users pagingData={awaitedSearchParams} />}
    </div>
  )
}
