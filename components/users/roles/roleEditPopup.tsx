'use client';

import { cn } from "@/lib/utils";
import { UserRolesProps } from '@/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog";
import Input  from "@/components/ui/custom-ui/input-validation";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useState } from 'react';
import { useForm } from "react-hook-form";

export default function RoleEditPopup({item, type, className}: {item?: UserRolesProps, type?: string, className?: string}) {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields }
  } = useForm({
    defaultValues: {
      id: item?.id,
      name: item?.name,
    },
    mode: "onChange"
  });

  const [isRoleEditModalOpen, setIsRoleEditModalOpen] = useState(false);

  console.log('type', type)

  const updateRoleEditData = () => {
    console.log('updateRoleEditData', errors)
    console.log('updateRoleEditData', dirtyFields)
  }
  
  const onSubmit = () => {
    console.log('onSubmit errors', errors)
  }

  return (
    <>
      {/* <div className="mb-[4px]"> */}
        <Button 
          className={cn("p-[7px] h-auto w-full max-w-[100px]", className)} 
          onClick={() => setIsRoleEditModalOpen(true)}
        >{type === 'edit' ? 'Update' : 'Create new role'}</Button>
        <Dialog open={isRoleEditModalOpen} onOpenChange={setIsRoleEditModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{type === 'edit' ? 'Edit' : 'Create new role'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="id">Id</Label>
                  <Input 
                    type="text" 
                    name={"id"}
                    className={!!errors.id ? 'border-red-400' : ''}
                    register={register}
                    validationSchema={{
                      required: true,
                      maxLength: 10
                    }}
                  />

                  <Label htmlFor="name">Name</Label>
                  <Input 
                    type="text" 
                    name={"name"}
                    className={!!errors.name ? 'border-red-400' : ''}
                    register={register} 
                    validationSchema={{
                      required: true,
                      maxLength: 32
                    }}
                  />
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="block cursor-pointer bg-surface-transparent pl-0">
                    <Button 
                      className="mx-[5px]" 
                      onClick={() => updateRoleEditData()}
                      disabled={!!errors.id || !!errors.name}
                    >{type === 'edit' ? 'Update' : 'Create'}</Button>
                    <Button className="mx-[5px]" onClick={() => setIsRoleEditModalOpen(false)}>Cancel</Button>
                  </div>
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      {/* </div> */}
    </>
  );
}
