'use client';

import { UserItemProps, AllUsersProps, PagingData } from '@/types';
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import useSWR from "swr";
import fetcher from "../../lib/fetcher";

import TablePagination from "./../ui/custom-ui/table-pagination";
import UserItem from "./usersItems";

export default function Users({ pagingData }: { pagingData?: PagingData }) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageNum = Number(pagingData?.pageNum ?? 1);
  const pageSize = Number(pagingData?.pageSize ?? 10);
  const [currentPageIndex, setPageIndex] = useState<number>(pageNum || 1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(pageSize);

  useEffect(()=> {
    const params = new URLSearchParams(searchParams.toString());
    const currentIndex = params.get('pageNum') || '1';
    setPageIndex(parseInt(currentIndex, 10));
  }, [searchParams]);

  const updateQueryParam = ((index: number, pageRow: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('pageNum', index.toString());
    params.set('pageSize', pageRow.toString());
    replace(`${pathname}?${params.toString()}`);
  });

  const { data: swrData } = useSWR<AllUsersProps>(
    `/api/users?pageNum=${currentPageIndex}&pageSize=${rowsPerPage}`,
    fetcher,
    {
      dedupingInterval: Infinity,
      keepPreviousData: true,
      onErrorRetry: () => {
        console.log("login redirect");
      }
    }
  );

  const handleDataUpdate = (data: { currentPageIndex: number; rowsPerPage: number | null }) => {
    const pageIndex = data.currentPageIndex;
    const pageRow = data.rowsPerPage ?? rowsPerPage; // Fallback to current rowsPerPage if null
    if (currentPageIndex !== pageIndex) setPageIndex(pageIndex);
    if (rowsPerPage !== pageRow) setRowsPerPage(pageRow);

    updateQueryParam(pageIndex, pageRow);
  };
  
  return (
    <>
      <h3 className="text-xl font-semibold mb-4">Users</h3>
      <div className="rounded-md border mb-[10px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Surname</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Email confirmation</TableHead>
              <TableHead>2-factor</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {swrData && swrData.data?.map((item: UserItemProps) => (
              <UserItem key={item.id} item={item}></UserItem>
            ))}
          </TableBody>
        </Table>
      </div>

      {swrData?.pagination?.totalPages && swrData.pagination.totalPages > 10 && 
        <TablePagination 
          pageNum={currentPageIndex} 
          pageSize={rowsPerPage} 
          totalPages={swrData.pagination.totalPages} 
          onDataUpdate={handleDataUpdate} 
        />
      }
    </>
  );
}
