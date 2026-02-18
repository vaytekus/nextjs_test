import EventDetails from "@/components/events/eventdetails/eventdetails";
// import { getEventDetailsData } from "../../../../../lib/api/getEventsData";

interface SlugPageProps {
  params: Promise<{
    slug: string[]
  }>;
  searchParams: Promise<{[key: string] : string | string[] | undefined}>
}

export default async function EventDetailsIdPage(props: SlugPageProps) {
  const { params, searchParams } = props;

  const awaitedParams = await params;
  const awaitedSearchParams = await searchParams;
  console.log('awaitedParams', awaitedParams)
  console.log('awaitedSearchParams', awaitedSearchParams)

  // const eventDetailsData = await getEventDetailsData({ filterType: awaitedSearchParams.filterType, filterValue: awaitedParams?.id });

  // console.log('eventDetailsData', eventDetailsData)

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Event Details</h2>
        <EventDetails id={awaitedParams} searchParams={awaitedSearchParams} />
      </div>
    </div>
  );
}