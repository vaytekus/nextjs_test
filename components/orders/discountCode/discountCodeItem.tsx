'use client';
import { FormatDate } from "@/lib/formatDate";
import { DiscountCodeProps } from '@/types';
import { TableCell, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog";
import { Button } from "@/components/ui/button";

import { useState } from 'react';

import DiscountCodePopup from './discountCodePopup';

export default function DiscountCodeItem({ item }: { item: DiscountCodeProps }) {
  const [isDeleteCodeModalOpen, setIsDeleteCodeModalOpen] = useState(false);

  const expDateTime = (date: Date) => {
    return FormatDate(date, "LL-dd-y H:mm");
  };

  const deleteDiscountCode = () => {
    console.log('delete discount code', item);
    setIsDeleteCodeModalOpen(false);
  };

  const handleDeleteDicountCode = () => {
    console.log('handleDeleteDicountCode', item);
    if(item.isActive) {
      setIsDeleteCodeModalOpen(true);
      return;
    }

    deleteDiscountCode();
  };

  return (
    <>
      <TableRow>
        <TableCell>{item.id}</TableCell>
        <TableCell className="max-w-[200px] whitespace-normal">{item.code}</TableCell>
        <TableCell>{item.type}</TableCell>
        <TableCell>{item.value}</TableCell>
        <TableCell>{item.isActive ? 'Yes' : 'No'}</TableCell>
        <TableCell>{expDateTime(new Date(item.expDate))}</TableCell>
        <TableCell>
          <DiscountCodePopup item={item} type={'edit'} />
          <div>
            <Button className="p-[7px] h-auto w-full" onClick={() => handleDeleteDicountCode()}>Delete</Button>
            <Dialog open={isDeleteCodeModalOpen} onOpenChange={setIsDeleteCodeModalOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-center">Are you sure? Discount code still valid.</DialogTitle>
                </DialogHeader>
                <div className="flex justify-center">
                  <Button className="mx-[10px]" onClick={() => deleteDiscountCode()}>Delete</Button>
                  <Button className="mx-[10px]" onClick={() => setIsDeleteCodeModalOpen(false)}>Cancel</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
}
