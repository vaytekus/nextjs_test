'use client';
import Link from "next/link";
import { useState } from 'react';

import { UserItemProps } from '@/types';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";


export default function UserItem({ item }: { item: UserItemProps }) {
  const [isUpdateUserModalOpen, setIsUpdateUserModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(item.statusId?.toString() || "3");

  const updateUserData = () => {
    console.log('updateUserData')
  }

  return (
    <>
      <TableRow>
        <TableCell>
          <Link className="text-sky-500 hover:underline" href={`/events/userdetails?userId=${item.id}`}>{item.id}</Link>
        </TableCell>
        <TableCell className="max-w-[200px] whitespace-normal">{item.name}</TableCell>
        <TableCell>{item.surname}</TableCell>
        <TableCell>{item.email}</TableCell>
        <TableCell>{item.emailConfirmed ? 'Yes' : 'No'}</TableCell>
        <TableCell>{item.twoFactorEnabled ? 'Yes' : 'No'}</TableCell>
        <TableCell>
          {/* <a className="text-sky-500 hover:underline" onClick={() => }></a> */}
          <Button className="p-[7px] h-auto w-full" onClick={() => setIsUpdateUserModalOpen(true)}>Edit</Button>
          <Dialog open={isUpdateUserModalOpen} onOpenChange={setIsUpdateUserModalOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit user details</DialogTitle>
              </DialogHeader>
              <form>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" defaultValue={item.name} />

                    <Label htmlFor="surname">Surname</Label>
                    <Input id="surname" type="text" defaultValue={item.surname} />

                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />

                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="text" defaultValue={item.email} />

                    <Label htmlFor="status">Status</Label>
                    {/* defaultValue={item.statusId} */}
                    <Select 
                      value={selectedOption}
                      onValueChange={(value) => {
                        setSelectedOption(value);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">New</SelectItem>
                        <SelectItem value="2">Verified</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="block cursor-pointer bg-surface-transparent pl-0">
                      <Button variant="outline" onClick={() => updateUserData()}>Update</Button>
                      <Button variant="outline" onClick={() => setIsUpdateUserModalOpen(false)}>Cancel</Button>
                    </div>
                  </div>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </TableCell>
      </TableRow>
    </>
  );
}
