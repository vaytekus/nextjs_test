'use client';

import { RolesProps } from '@/types';
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import RolesItem from "./rolesItem";
import RoleEditPopup from "./roleEditPopup";


export default function Roles({roles}: {roles: RolesProps[]}) {
  return (
    <>
      <RoleEditPopup type={'create'} className={"w-auto mb-[20px] block min-w-[100px] max-w-auto"} />
      <div className="rounded-md border mb-[10px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles?.map((item: RolesProps) => (
              <RolesItem key={item.id} item={item}/>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
