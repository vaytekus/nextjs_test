'use client';

import { UserRolesProps, RolesProps } from '@/types';
import { TableCell, TableRow } from "@/components/ui/table";

import UserRoleEdit from "./userRoleEdit";

export default function UserRoleItem({item, roles}: {item: UserRolesProps, roles: RolesProps[]}) {

  return (
    <>
      <TableRow>
        <TableCell>{item?.id}</TableCell>
        <TableCell>{item?.name}</TableCell>
        <TableCell>{item?.email}</TableCell>
        <TableCell>
          <UserRoleEdit item={item} roles={roles} />
        </TableCell>
      </TableRow>
    </>
  );
}
