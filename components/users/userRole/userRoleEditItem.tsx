'use client';

import { UserRoleItem, RolesProps } from '@/types';
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

export default function UserRoleEditItem({item, roles}: {item: UserRoleItem, roles: RolesProps[]}) {
  const [isRoleDitable, setRoleDitable] = useState(false);

  const deleteUserRole = () => {
    console.log('delete user role', item);
  };

  return (
    <TableRow>
      <TableCell>{item?.roleId}</TableCell>
      <TableCell className={isRoleDitable ? 'bg-pink-500' : undefined}>
        {(roles.find((role) => role.id === item?.roleId)?.name) || null}
      </TableCell>
      <TableCell>
        <div className="flex justify-center">
          <Button className="mx-[3px]" onClick={() => deleteUserRole()}>Delete</Button>
          <Button className="mx-[3px]" onClick={() => setRoleDitable(!isRoleDitable)}>Edit</Button>
        </div>
      </TableCell>
    </TableRow>
  );
}
