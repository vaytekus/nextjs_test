'use client';
import Link from "next/link";
import { FormatDate } from "@/lib/formatDate";
import { AllEventsProps, EventItemProps, PagingData } from '@/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import useSWR from "swr";
import fetcher from "../../lib/fetcher";

import TablePagination from "./../ui/custom-ui/table-pagination";

export default function Events({ pagingData }: { pagingData?: PagingData }) {
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

  const eventDateTime = (date: Date) => {
    return FormatDate(date, "LL-dd-y H:mm");
  };

  const updateQueryParam = ((index: number, pageRow: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('pageNum', index.toString());
    params.set('pageSize', pageRow.toString());
    replace(`${pathname}?${params.toString()}`);
  });

  const { data: swrData } = useSWR<AllEventsProps>(
    `/api/events?pageNum=${currentPageIndex}&pageSize=${rowsPerPage}`,
    fetcher,
    {
      dedupingInterval: Infinity,
      keepPreviousData: true,
      onErrorRetry: () => {
        console.log("login redirect");
        // if (key.indexOf('/api/events') !== -1) redirect("/login");
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
      <h3>Events</h3>
      <div className="rounded-md border mb-[10px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Venue</TableHead>
              <TableHead>Performer</TableHead>
              <TableHead>Date Time</TableHead>
              <TableHead>Url</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {swrData && swrData.data && swrData.data.map((item: EventItemProps) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Link className="text-sky-500 hover:underline" href={`/events/eventdetails?filterType=EventId&filterValue=${item.id}`}>{item.id}</Link>
                </TableCell>
                <TableCell className="max-w-[200px] whitespace-normal">{item.name}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.venue?.name}</TableCell>
                <TableCell className="max-w-[200px] whitespace-normal">
                  <Link className="text-sky-500 hover:underline" href={`/performers/performerdetails/${item.category?.id}`}>{item.category?.name}</Link>
                </TableCell>
                <TableCell>{eventDateTime(new Date(item.updateDate || ''))}</TableCell>
                <TableCell className="font-medium">
                  <a className="text-sky-500 hover:underline" href={`https://www.fake/event?id=${item.id}`} target="_blank">Link</a>
                </TableCell>
                <TableCell>
                  {/* <Link className="text-sky-500 hover:underline" href={`/events/eventdetails/${item.id}?filterType=EventId`}>Details</Link> */}
                  <Link className="text-sky-500 hover:underline" href={`/events/eventdetails?filterType=EventId&filterValue=${item.id}`}>Details</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {swrData && swrData.pagination && swrData.pagination.totalPages && swrData.pagination.totalPages > 10 && 
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
