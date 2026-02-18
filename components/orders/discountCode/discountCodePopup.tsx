'use client';

import { FormatDate } from "@/lib/formatDate";
import { cn } from "@/lib/utils";
import { DiscountCodePopupProps } from '@/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Input  from "@/components/ui/custom-ui/input-validation";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Calendar } from "@/components/ui/calendar";

import { useState } from 'react';
import { useForm } from "react-hook-form";

const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // 72 symbols

type DiscountCodeFormFields = {
  id?: string;
  code?: string;
  value?: string;
  prefix?: string;
};

export default function DiscountCodePopup({className, item, type}: DiscountCodePopupProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger
  } = useForm<DiscountCodeFormFields>({
    defaultValues: {
      id: item?.id ? String(item.id) : undefined,
      code: item?.code,
      value: item?.value ? String(item.value) : undefined,
      prefix: item?.prefix
    },
    mode: "onChange"
  });

  const now = new Date();
  const followingDay = new Date(now.getTime() + 86400000); // + 1 day in ms
  followingDay.toLocaleDateString();

  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isDiscountCodeModalOpen, setIsDiscountCodeModalOpen] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string>('');
  const [selectedPatternOption, setSelectedPatternOption] = useState<string>('pattern1');
  const [selectedOption, setSelectedOption] = useState<string>('Unknown');

  const [date, setDate] = useState<Date | undefined>(new Date(item?.expDate || followingDay));

  const generated: string[] = [];

  const expDateTime = (date: Date) => {
    return FormatDate(date, "LL-dd-y H:mm");
  };

  const onChangeCalendar = (value: Date) => {
    console.log('updateDiscountCodeData', value);
    setDate(value);
    setCalendarOpen(false);
  }

  const pattern = (number: number, length: number, divider: string) => {
    const generatedArray = generateCodes(number, length, divider);
    setGeneratedCode(generatedArray.join('-'));
  }

  const generateCodes = (number: number, length: number, divider: string) => {
    for ( let i=0; i < number; i++ ) {
      generateCode(length);
    }

    setValue("code", generated.join(divider));
    trigger("code")

    return generated;
  }

  const generateCode = (length: number) => {
    let text = "";

    for ( let i=0; i < length; i++ ) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    if ( generated.indexOf(text) == -1 ) {
      generated.push(text);
    } else {
      generateCode(length);
    }
  }
  
  const generateDiscountCode = () => {
    setGeneratedCode('');

    switch(selectedPatternOption) {
      case 'pattern3':
        pattern(4,5,'');
        break;
      case 'pattern2':
        pattern(4,5,'');
        break;
      default:
        pattern(4,5,'-');
        break;
    }
  }

  const onSubmit = () => {
    console.log('onSubmit errors', errors)
  }

  return (
    <>
      <div className="mb-[4px]">
        <Button 
          className={cn("p-[7px] h-auto w-full", className)} 
          onClick={() => setIsDiscountCodeModalOpen(true)}
        >
          {type === 'edit' ? 'Edit' : 'Create new code'}
        </Button>
        <Dialog open={isDiscountCodeModalOpen} onOpenChange={setIsDiscountCodeModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{type === 'edit' ? 'Edit discount code details': 'Create new discount code'}</DialogTitle>
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
                      required: true
                    }}
                  />

                  { type === 'edit' ? (
                    <>
                      <Label htmlFor="code">Code</Label>
                      <Input 
                        type="text" 
                        name={"code"}
                        className={!!errors.code ? 'border-red-400' : ''}
                        register={register}
                        validationSchema={{
                          required: true
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <Label htmlFor="code">Code pattern</Label>
                      <div className="flex">
                        <Select 
                          value={selectedPatternOption}
                          onValueChange={(value) => {
                            setSelectedPatternOption(value);
                          }}
                        >
                          <SelectTrigger className="mr-[5px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pattern1">xxxx-xxxx-xxxx-xxxx-xxxx</SelectItem>
                            <SelectItem value="pattern2">xxxxxxxxxxxxxxxxxxxx</SelectItem>
                            <SelectItem value="pattern3">prefix-xxxxxxxxxxxxxxxxxxxx</SelectItem>
                          </SelectContent>
                        </Select>

                        <Button onClick={(e) => {
                          e.preventDefault();
                          generateDiscountCode()
                        }}>Generate</Button>
                      </div>
                      <Label htmlFor="code">Code</Label>
                      <div className="flex">
                        {selectedPatternOption === 'pattern3' && <Input 
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value)} 
                          id="prefix" 
                          type="text" 
                          name={"prefix"}
                          className={cn(
                            'w-[150px] mr-[10px]',
                            !!errors.prefix && 'border-red-400'
                          )}
                          register={register}
                          defaultValue={'prefix-'}
                          validationSchema={{
                            required: true
                          }} 
                        />}
                        <Input 
                          type="text" 
                          name={"code"}
                          className={!!errors.code ? 'border-red-400' : ''}
                          register={register}
                          defaultValue={generatedCode || ''}
                          validationSchema={{
                            required: true
                          }} 
                        />
                      </div>
                    </>
                  )}

                  <Label htmlFor="type">Type</Label>
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
                      <SelectItem value="Unknown">Unknown</SelectItem>
                      <SelectItem value="FixedAmount">FixedAmount</SelectItem>
                      <SelectItem value="Percentage">Percentage</SelectItem>
                    </SelectContent>
                  </Select>

                  <Label htmlFor="value">Value</Label>
                  <Input 
                    type="text" 
                    name={"value"}
                    className={!!errors.value ? 'border-red-400' : ''}
                    register={register}
                    defaultValue={item?.value ? String(item.value) : ''}
                    validationSchema={{
                      required: true
                    }} 
                  />

                  <Label htmlFor="">Expiration Date</Label>
                  <div className="relative">
                    <a 
                      href="#" 
                      className="flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      onClick={(event) => {
                        event.preventDefault();
                        setCalendarOpen(!isCalendarOpen);
                      }}
                    >{expDateTime(new Date(item?.expDate || followingDay))}</a  >

                    {isCalendarOpen && (
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(day) => day && onChangeCalendar(day)}
                        className="absolute t-[0px] bg-background rounded-md border"
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="block cursor-pointer bg-surface-transparent pl-0">
                    <Button className="mx-[5px]">{type === 'edit' ? 'Update' : 'Create'}</Button>
                    <Button className="mx-[5px]" onClick={() => setIsDiscountCodeModalOpen(false)}>Cancel</Button>
                  </div>
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
