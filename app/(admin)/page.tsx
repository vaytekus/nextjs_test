import Dashboard from "@/components/dashboard/dashboard";

export default async function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <Dashboard />
      </div>
    </div>
  );
}