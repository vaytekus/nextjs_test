import { auth } from "@/auth";
import MapsTable from "@/components/maps/maps-table";

const mockData = [
  {
    id: 4470,
    name: "fake map name",
    type: "Helicopter",
    sourceType: "3D",
    status: "Publish",
    createdBy: "Admin user",
    createdAt: "2024-12-06 12:37",
    updatedBy: "Admin user",
    updatedAt: "2024-12-06 12:37",
  },
  {
    id: 4469,
    name: "fake map name",
    type: "Helicopter",
    sourceType: "3D",
    status: "Publish",
    createdBy: "Admin user",
    createdAt: "2024-05-16 13:22",
    updatedBy: "Admin user",
    updatedAt: "2024-05-16 13:22",
  },
  {
    id: 4458,
    name: "fake map name",
    type: "Helicopter",
    sourceType: "2D",
    status: "Publish",
    createdBy: "Admin user",
    createdAt: "2024-03-07 15:15",
    updatedBy: "Admin user",
    updatedAt: "2024-03-07 15:15",
  },
  {
    id: 4456,
    name: "fake map name",
    type: "Helicopter",
    sourceType: "2D",
    status: "Publish",
    createdBy: "Admin user",
    createdAt: "2024-02-28 13:53",
    updatedBy: "Admin user",
    updatedAt: "2024-02-28 13:53",
  },
  {
    id: 4455,
    name: "fake map name",
    type: "Helicopter",
    sourceType: "2D",
    status: "Publish",
    createdBy: "Admin user",
    createdAt: "2024-02-26 13:22",
    updatedBy: "Admin user",
    updatedAt: "2024-05-16 13:19",
  },
  {
    id: 4454,
    name: "fake map name",
    type: "Helicopter",
    sourceType: "3D",
    status: "Publish",
    createdBy: "Admin user",
    createdAt: "2024-01-05 16:03",
    updatedBy: "Admin user",
    updatedAt: "2024-01-05 16:20",
  }, 
  {
    id: 4453,
    name: "fake map name",
    type: "Helicopter",
    sourceType: "3D",
    status: "Publish",
    createdBy: "Admin user",
    createdAt: "2023-12-05 16:03",
    updatedBy: "Admin user",
    updatedAt: "2023-12-05 16:18",
  },
]

export default async function MapsPage() {
  await auth();
  
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Maps management</h2>
        <MapsTable data={mockData} />
      </div>
    </div>
  );
}