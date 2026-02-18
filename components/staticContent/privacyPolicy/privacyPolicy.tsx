'use client';

import { PrivacyPolicyItemProps } from '@/types';
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PrivacyPolicyItem from "./privacyPolicyItem";

export default function PrivacyPolicy({ 
  data, 
  countryArray 
}: {
  data: PrivacyPolicyItemProps[]; 
  countryArray: { name: string; id: number; }[]
}) {
  return (
    <>
      <h3>Privacy Policy</h3>
      <div className="rounded-md border mb-[10px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Language</TableHead>
              <TableHead className='w-2/3'>Content</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data && data.map((item: PrivacyPolicyItemProps) => (
              <PrivacyPolicyItem key={item.id} item={item} countryArray={countryArray}></PrivacyPolicyItem>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
