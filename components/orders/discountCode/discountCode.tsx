'use client';

import { DiscountCodeProps } from '@/types';
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";


import DiscountCodePopup from './discountCodePopup';
import DiscountCodeItem from "./discountCodeItem";



const DisctountCodesMockData = {
  "items": [
    {
      "id": 8485,
      "code": "fake-code-1",
      "type": "FixedAmount",
      "value": 1,
      "isActive": false,
      "expDate": "2020-03-03T19:10:39.8777298+01:00"
    },
    {
      "id": 8486,
      "code": "fake-code-2",
      "type": "Percentage",
      "value": 3,
      "isActive": true,
      "expDate": "2026-03-03T19:10:39.8777298+01:00"
    }
  ]
}

export default function DiscountCode() {


  return (
    <>
      {/* <FormProvider {...methods}> */}
        <DiscountCodePopup type={'create'} className={"w-auto mb-[20px]"} />
      {/* </FormProvider> */}
      {/* <Button className="px-[3px] py-[1px] h-auto w-full" onClick={() => setIsDiscountCodeModalOpen(true)}>Create new discount code</Button> */}
      <div className="rounded-md border mb-[10px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Active</TableHead>
              <TableHead>Expiration Date</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {DisctountCodesMockData?.items.map((item: DiscountCodeProps) => (
              <DiscountCodeItem key={item.id} item={item}/>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* {(LisingsMockData?.items.length > 10 && swrData !== undefined) && 
        <TablePagination 
          pageNum={currentPageIndex} 
          pageSize={rowsPerPage} 
          totalPages={swrData?.pagination.totalPages || 0} 
          onDataUpdate={handleDataUpdate} 
        />
      } */}
    </>
  );
}
