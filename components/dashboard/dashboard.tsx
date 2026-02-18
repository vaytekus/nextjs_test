'use client';

import * as React from "react"
import Link from "next/link";

import { CalendarIcon } from "lucide-react";
import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { FormatDate } from "@/lib/formatDate";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const StatisticMockData = [
  {
    title: "Visitors/Conv",
    items: [
      {
        name: "Total Visitors:",
        value: 39
      },
      {
        name: "From Google:",
        value: 0
      },
      {
        name: "Conv:",
        value: 0
      },
      {
        name: "Conv (Google):",
        value: 0
      }
    ]
  },
  {
    title: "Registered Users",
    items: [
      {
        name: "Total:",
        value: 1223
      },
      {
        name: "Today",
        value: 0
      }
    ]
  },
  {
    title: "Listings/Tickets",
    items: [
      {
        name: "Total:",
        value: "3975/43181"
      },
      {
        name: "Invalid",
        value: 1124
      }
    ]
  },
  {
    title: "Orders",
    items: [
      {
        name: "Total:",
        value: 347
      },
      {
        name: "Today",
        value: 0
      }
    ]
  }
]

const ConversionPerPerformerMockData = [
  {
    id: 84911,
    name: "fake performer",
    visitors: 2,
    orders: 0,
    conversion: 0
  },
  {
    id: 108093,
    name: "fake performer",
    visitors: 1,
    orders: 0,
    conversion: 0
  }
]

const UpcomingEventsMockData = [
  {
      id: 393486,
      stock: 4,
      sold: 0,
      link: "/fake-link",
      performerName: "fake performer",
      description: null,
      dateTimeUTC: "2025-03-20T20:00:00",
      venueName: "fake venue",
      city: "fake city",
      cityId: 1
  },
  {
      id: 395398,
      stock: 2,
      sold: 0,
      link: "/fake-link",
      performerName: "fake performer",
      description: null,
      dateTimeUTC: "2025-03-27T20:00:00",
      venueName: "fake venue",
      city: "fake city",
      cityId: 1
  },
  {
      id: 382960,
      stock: 8,
      sold: 0,
      link: "/fake-link",
      performerName: "fake performer",
      description: null,
      dateTimeUTC: "2025-04-04T20:15:00",
      venueName: "fake venue",
      city: "fake city"
  },
  {
      id: 382377,
      stock: 6,
      sold: 0,
      link: "/fake-link",
      performerName: "fake performer",
      description: null,
      dateTimeUTC: "2025-04-06T14:30:00",
      venueName: "fake venue",
      city: "fake city"
  }
]

export default function Dashboard() {
  const [date, setDate] = React.useState<DateRange | undefined>();
  const [calendarOpen, setCalendarOpen] = React.useState(false);

  const datePickerDateFormat = (date: Date) => {
    return FormatDate(date, "LLL dd, y");
  }

  const upcomingEventsDateFormat = (date: Date) => {
    return FormatDate(date, "LL-dd-y H:mm");
  }

  return (
    <>
      <div className="gap-2">
        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon />
              {date?.from ? (
                date.to ? (
                  <>
                    {datePickerDateFormat(date.from)} - {datePickerDateFormat(date.to)}
                  </>
                ) : (
                  datePickerDateFormat(date.from)
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
            <div className="p-[10px]">
              <Button onClick={()=>setCalendarOpen(false)}>Close</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <Separator orientation="horizontal" />
      {/* main statistic */}
      <div className="w-full flex justify-between justify-items-stretch basis-full">
        {StatisticMockData.map((item, index) => (
          <div key={item.title} className={cn('w-1/4 mx-[5px] first:ml-[0px] flex', 
            index === 0 && "first:ml-[0px]", index === StatisticMockData.length-1 && "last:mr-[0px]"
          )}>
            <div className="w-full p-[10px] border rounded-xl items-stretch">
              <h3 className="text-[14px] font-medium mb-[10px]">{item.title}</h3>
              <ul className="text-[12px]">
              {item.items.map((subItem)=> (
                <li key={subItem.name + '-' +subItem.value}>
                  <span>{subItem.name}</span> <strong>{subItem.value}</strong>
                </li>
              ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Separator orientation="horizontal" />
      {/* conversion per performers */}
      <h3>Conversion per performers</h3>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Performer</TableHead>
              <TableHead>Visitors</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Conversion</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ConversionPerPerformerMockData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  <a className="text-sky-500 hover:underline" href={`https://www.fake/performer?id=${item.id}`} target="_blank">
                    {item.name}
                  </a>
                </TableCell>
                <TableCell>{item.visitors}</TableCell>
                <TableCell>{item.orders}</TableCell>
                <TableCell>{item.conversion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Separator orientation="horizontal" />
      {/* upcoming events */}
      <h3>Upcoming events</h3>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Sold</TableHead>
              <TableHead>Date Time</TableHead>
              <TableHead>Venue</TableHead>
              <TableHead>Performer</TableHead>
              <TableHead>Url</TableHead>
              <TableHead>City</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {UpcomingEventsMockData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Link className="text-sky-500 hover:underline" href={`/events/eventdetails/?filterType=EventId&filterValue=${item.id}`}>{item.id}</Link>
                </TableCell>
                <TableCell className="bg-lime-400">{item.stock}</TableCell>
                <TableCell className="bg-yellow-500">{item.sold}</TableCell>

                <TableCell>{upcomingEventsDateFormat(new Date(item.dateTimeUTC))}</TableCell>

                <TableCell>
                  <a className="text-sky-500 hover:underline" href={`#`} target="_blank">{item.venueName}</a>
                </TableCell>
                <TableCell>
                  <a className="text-sky-500 hover:underline" href={`#`} target="_blank">{item.performerName}</a>
                </TableCell>
                <TableCell><a className="text-sky-500 hover:underline" href={item.link} target="_blank">Link</a></TableCell>
                <TableCell><a className="text-sky-500 hover:underline" href={`#`} target="_blank">{item.city}</a></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Separator orientation="horizontal" />
      {/* Top artists */}
    </>
  )
}
