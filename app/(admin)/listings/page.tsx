import ListingsPageLoader from "@/components/listings/listingsPageLoader";

interface SlugPageProps {
  searchParams: Promise<{[key: string] : string | string[] | undefined}>
}

export default async function ListingsPage(props: SlugPageProps) {
  const { searchParams } = props;

  const awaitedSearchParams = await searchParams;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Listings</h2>
        <ListingsPageLoader pagingParams={awaitedSearchParams} />
      </div>
    </div>
  );
}