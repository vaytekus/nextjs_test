import InvalidListings from "@/components/listings/invalidlistings/invalidlistings";

export default function InvalidListingsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Invalid Listings</h2>
        <InvalidListings />
      </div>
    </div>
  );
}