import Roles from "@/components/users/roles/roles";
import { value } from "./roles.json";

export default function RolesPage() {
  console.log('value', value)
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Roles</h2>
        <Roles roles={ value } />
      </div>
    </div>
  );
}