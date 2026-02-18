'use client';

import { cn } from "@/lib/utils";
import { UserRolesProps, RolesProps, UserRoleItem } from '@/types';
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog";

import { Button } from "@/components/ui/button";
import { useState } from 'react';

import UserRoleEditItem from "./userRoleEditItem";

export default function UserRoleEdit({item, roles}: {item: UserRolesProps, roles: RolesProps[]}) {
  const [isUserRoleEditModalOpen, setIsUserRoleEditModalOpen] = useState(false);
  const [isDeleteUserRoleModalOpen, setIsDeleteUserRoleModalOpen] = useState(false);

  const deleteDiscountCode = () => {
    console.log('delete discount code', item);
    setIsUserRoleEditModalOpen(false);
  };

  const handleDeleteDicountCode = () => {
    console.log('handleDeleteDicountCode', item);
    deleteDiscountCode();
  };

  const deleteUserRole = () => {
    console.log('delete user role', item);
    setIsDeleteUserRoleModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <Button 
          className={cn("p-[7px] h-auto w-full max-w-[100px] mr-[5px]")} 
          onClick={() => setIsUserRoleEditModalOpen(true)}
        >Edit</Button>
        <Dialog open={isUserRoleEditModalOpen} onOpenChange={setIsUserRoleEditModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center">Edit user roles</DialogTitle>
            </DialogHeader>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Role Id</TableHead>
                  <TableHead>Role Name</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {item?.userRoles?.map((nestedItem: UserRoleItem) => (
                  <UserRoleEditItem key={nestedItem.id} item={nestedItem} roles={roles}/>
                ))}
              </TableBody>
            </Table>
          </DialogContent>
        </Dialog>

        <Button className="p-[7px] h-auto w-full max-w-[100px] ml-[5px]" onClick={() => handleDeleteDicountCode()}>Delete</Button>
        <Dialog open={isDeleteUserRoleModalOpen} onOpenChange={setIsDeleteUserRoleModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center">Are you sure?</DialogTitle>
            </DialogHeader>
            <div className="flex justify-center">
              <Button className="mx-[10px]" onClick={() => deleteUserRole()}>Delete</Button>
              <Button className="mx-[10px]" onClick={() => setIsDeleteUserRoleModalOpen(false)}>Cancel</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
