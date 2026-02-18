import StaticContentLoader from "@/components/staticContent/staticContentPageLoader";

export default function StaticContentPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Static Content</h2>
        <StaticContentLoader />
      </div>
    </div>
  );
}
