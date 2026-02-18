// import getUsersData from "../../lib/api/getUsersData";
// import Users from "./users";

// export default async function StaticContentLoader() {
//   const usersItems = await getUsersData();

//   console.log('usersItems', usersItems)

//   return (
//     <Users items={usersItems || []}></Users>
//   )
// }

// import getUsersData from "../../lib/api/getUsersData";
import Users from "./staticContent";

export default async function StaticContentLoader() {
  const isShowEvents = true;

  return (
    <div>
      {isShowEvents && <Users />}
    </div>
  )
}
