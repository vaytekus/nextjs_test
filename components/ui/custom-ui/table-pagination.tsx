import { useEffect, useState } from 'react';

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";

  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Input } from "@/components/ui/input";

  interface PagingParamsProps {
    pageNum?: number | null;
    pageSize?: number | null;
    totalPages?: number | null;
    onDataUpdate: (args: { currentPageIndex: number; rowsPerPage: number | null }) => void;
  }

  export default function TablePagination({pageNum, pageSize, totalPages, onDataUpdate}: PagingParamsProps) {
    const [currentPageIndex, setPageIndex] = useState<number>((pageNum ?? 1) * 1 || 1);
    const [rowsPerPage, setRowsPerPage] = useState<number>(pageSize ?? 10);
  
    useEffect(()=> {
      onDataUpdate({currentPageIndex, rowsPerPage})
    }, [currentPageIndex, rowsPerPage, onDataUpdate]);
  
    const handleChangePaging = ((direction: number) => {
      const newIndex = currentPageIndex + (1 * direction);
      setPageIndex(direction < 0 ? Math.max(0, newIndex) : Math.min(100, newIndex));
    });
  
    const handleSelectChange = (value: string) => {
      setRowsPerPage(Number(value));
    };
  
    const handlePageNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
      const pageIndex = e.target.value ? Number(e.target.value) : 1;
      setPageIndex(pageIndex);
    };
    
    return (
      <>
        <div className="flex items-center">
          <div className="whitespace-nowrap flex items-center">
            <span className="inline-block pr-[5px]">Page</span>
            <Input
              placeholder="Search..."
              defaultValue={currentPageIndex}
              onChange={handlePageNumber}
              className="w-[60px]"
              type="number"
              min="1"
              max={totalPages ?? 10}
            />
            <span className="inline-block pl-[5px]">of {totalPages}</span>
          </div>
  
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className={
                    currentPageIndex === 1 ? "pointer-events-none opacity-50" : undefined
                  }
                  onClick={(event) => {
                    event.preventDefault();
                    handleChangePaging(-1);
                  }} />
              </PaginationItem>
  
              <PaginationItem>
                <PaginationNext
                  className={
                    currentPageIndex === 100 ? "pointer-events-none opacity-50" : undefined
                  }
                  onClick={(event) => {
                    event.preventDefault();
                    handleChangePaging(1);
                  }} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
  
          <div className="whitespace-nowrap flex items-center">
            <span className="inline-block pr-[5px]">Rows per page</span>
            {/* <div> */}
              <Select onValueChange={handleSelectChange} defaultValue={pageSize?.toString()}>
                <SelectTrigger className="w-[80px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="w-[80px] min-w-[80px]">
                  <SelectGroup>
                    <SelectItem key="5" value="5">5</SelectItem>
                    <SelectItem key="10" value="10">10</SelectItem>
                    <SelectItem key="20" value="20">20</SelectItem>
                    <SelectItem key="30" value="30">30</SelectItem>
                    <SelectItem key="40" value="40">40</SelectItem>
                    <SelectItem key="50" value="50">50</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            {/* </div> */}
          </div>
        </div>
      </>
    );
  }
