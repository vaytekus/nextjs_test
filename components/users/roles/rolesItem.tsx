'use client';

import { UserRolesProps } from '@/types';
import { TableCell, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog";

import { Button } from "@/components/ui/button";
import { useState } from 'react';

import RoleEditPopup from "./roleEditPopup";

export default function RolesItem({item}: {item: UserRolesProps}) {
  const [isDeleteRoleModalOpen, setIsDeleteRoleModalOpen] = useState(false);

  const deleteDiscountCode = () => {
    console.log('delete discount code', item);
    setIsDeleteRoleModalOpen(false);
  };

  const handleDeleteDicountCode = () => {
    console.log('handleDeleteDicountCode', item);
    deleteDiscountCode();
  };

  return (
    <>
      <TableRow>
        <TableCell>{item?.id}</TableCell>
        <TableCell>{item?.name}</TableCell>
        <TableCell>
          <RoleEditPopup item={item} type={'edit'} />
          <Button className="p-[7px] h-auto w-full max-w-[100px]" onClick={() => handleDeleteDicountCode()}>Delete</Button>
          <Dialog open={isDeleteRoleModalOpen} onOpenChange={setIsDeleteRoleModalOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">Are you sure?</DialogTitle>
              </DialogHeader>
              <div className="flex justify-center">
                <Button className="mx-[10px]" onClick={() => deleteDiscountCode()}>Delete</Button>
                <Button className="mx-[10px]" onClick={() => setIsDeleteRoleModalOpen(false)}>Cancel</Button>
              </div>
            </DialogContent>
          </Dialog>
        </TableCell>
      </TableRow>
    </>
  );
}
