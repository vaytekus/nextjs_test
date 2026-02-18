import UserRole from "@/components/users/userRole/usersRole";
import userRolesData from "./userRoles.json";
const { userRoles, roles } = userRolesData;

export default function UserRolePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">User Role</h2>
        <UserRole userRoles={ userRoles } roles={roles} />
      </div>
    </div>
  );
}