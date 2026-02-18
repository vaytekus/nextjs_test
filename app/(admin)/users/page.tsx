import UsersPageLoader from "@/components/users/usersPageLoader";

// export default function UsersPage() {
//   return (
//     <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//       <div className="space-y-6">
//         <h2 className="text-2xl font-bold tracking-tight">Users List</h2>
//         <UsersPageLoader />
//       </div>
//     </div>
//   );
// }

// import EventsPageLoader from "@/components/events/eventsPageLoader";

interface SlugPageProps {
  params: Promise<{
    slug: string[]
  }>;
  searchParams: Promise<{[key: string] : string | string[] | undefined}>
}

export default async function UsersPage(props: SlugPageProps) {
  const { searchParams } = props;

  // const awaitedParams = await params;
  const awaitedSearchParams = await searchParams;
  // console.log('1111event awaitedParams', awaitedParams)
  // console.log('1111event awaitedSearchParams', awaitedSearchParams)

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Users List</h2>
        <UsersPageLoader pagingParams={awaitedSearchParams} />
      </div>
    </div>
  );
}