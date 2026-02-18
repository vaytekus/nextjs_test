'use client';
import Link from "next/link";
import { PerformerProps, AllEventsProps, PagingData } from '@/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import useSWR from "swr";
import fetcher from "../../lib/fetcher";

import TablePagination from "./../ui/custom-ui/table-pagination";


export default function Performers({ pagingData }: { pagingData?: PagingData }) {
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

  const { data: swrData } = useSWR<AllEventsProps>(
    `/api/performers?pageNum=${currentPageIndex}&pageSize=${rowsPerPage}`,
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
      <h3>Performers</h3>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Link</TableHead>
              <TableHead>Visible</TableHead>
              <TableHead>Events</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {swrData && swrData.data?.map((item: PerformerProps) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell className="max-w-[200px] whitespace-normal">{item.name}</TableCell>
                <TableCell className="font-medium">
                  <a className="text-sky-500 hover:underline" href={`https://www.fake/event?id=${item.id}`} target="_blank">Link</a>
                </TableCell>
                <TableCell>{item.isVisible ? 'Yes' : 'No'}</TableCell>
                <TableCell>
                  <Link className="text-sky-500 hover:underline" href={`/events/eventdetails/${item.id}?filterType=PerformerId`}>{item.id}</Link>
                </TableCell>
                <TableCell>
                  <Button className="p-[7px] h-auto w-full">Details</Button>
                </TableCell>
              </TableRow>
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
  )
}
