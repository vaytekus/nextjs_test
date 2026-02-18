'use client';

import { UserRolesProps, RolesProps } from '@/types';
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import UserRoleItem from "./usersRoleItem";

export default function Roles({userRoles, roles}: {userRoles: UserRolesProps[], roles: RolesProps[]}) {
  return (
    <>
      {/* <RoleEditPopup type={'create'} className={"w-auto mb-[20px] block min-w-[100px] max-w-auto"} /> */}
      <div className="rounded-md border mb-[10px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userRoles?.map((item: UserRolesProps) => (
              <UserRoleItem key={item.id} item={item} roles={roles}/>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
