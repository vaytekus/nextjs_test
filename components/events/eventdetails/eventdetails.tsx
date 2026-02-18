'use client';
import { useCallback, useEffect, useState } from 'react';
// import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import { EventsDetailsItemProp, EventDetailsProp, ListingsDetailsProp, OrdersDetailsProp, AllEventDetailsProps } from '@/types';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
// import EventDetailsItem from "./eventdetailsItem";

// import { EventsDetailsItemProp, ListingsDetailsProp, AvailableSeats, OrdersDetailsProp } from '@/types';
import { FormatDate } from "@/lib/formatDate";

import useSWR from "swr";
import fetcher from "../../../lib/fetcher";

const FilterEventItems = [
  {
    name: "PerformerId",
    value: "PerformerId"
  },
  {
    name: "PerformerName",
    value: "PerformerName"
  },
  {
    name: "LocationId",
    value: "LocationId"
  },
  {
    name: "LocationName",
    value: "LocationName"
  },
  {
    name: "EventId",
    value: "EventId"
  },
  {
    name: "EventName",
    value: "EventName"
  },
  {
    name: "ExternalEventId",
    value: "ExternalEventId"
  },
  {
    name: "EventStatus",
    value: "EventStatus"
  }
];


const EventsDetailsMockData = {
  "eventListings": {
    "totalCount": 2,
    "listings": [
      {
        "id": "879820-37084",
        "eventId": 384392,
        "sellerId": 9860,
        "ticketType": "Seated",
        "isETicketConfirmed": true,
        "row": "11",
        "sellType": "AvoidLeavingOneTicket",
        "faceValue": 75,
        "ticketPrice": 110.05,
        "numberOfTickets": 1,
        "numberOfTicketsAreSold": 0,
        "ticketIds": [
            28391395
        ],
        "currencyId": 1,
        "eventTsmId": null,
        "creationTime": "2025-03-19T17:11:15.4175578Z",
        "seller": {
          "id": 9860,
          "email": "fake@example.com",
          "userName": "fake user",
          "name": "fake seller",
          "surname": "",
          "fullName": "fake seller ",
          "userPicUrl": "https://img.logo.com/fake.jpg",
          "phoneNumberConfirmed": true,
          "emailConfirmed": true,
          "stripeAccountId": null
        },
        "event": {
          "id": 384392,
          "name": "fake event",
          "comment": null,
          "status": 0,
          "startDateTime": "2025-03-21T20:00:00",
          "categoryName": "fake category",
          "categoryUrl": "fake-category",
          "venueId": 26770,
          "categoryId": 108573,
          "coronaTestRequired": false,
          "metaData": {
              "soldTicketsCount": 0,
              "wantedTicketsCount": 0,
              "availableTicketsCount": 2,
              "availableDealsCount": 2,
              "invalidListingsCount": 0,
              "visitedUsersCount": 0
          },
          "category": {
            "id": 108573,
            "name": "fake category",
            "parentCategoryId": 1,
            "description": null,
            "imageComment": null,
            "imageUrl": "https://img.logo.com/fake.jpg",
            "link": "/categories?id=108573",
            "defaultImageUrlIfImageCommentDoesNotExist": "https://img.logo.com/fake.jpg"
          },
          "venue": {
              "id": 26770,
              "name": "fake venue",
              "altNames": "fake venue",
              "description": null,
              "streamId": "12aef7cd-843a-4c3d-adb2-4e9ebb52de98",
              "isEnabled": false,
              "stateProvince": null,
              "metroArea": null,
              "postCode": "1017PL",
              "address1": "Marnixstraat 402",
              "address2": null,
              "latitude": 52.36436956,
              "longitude": 4.8808702,
              "country": {
                  "id": 26,
                  "name": "Nederland",
                  "nativeName": "Nederland",
                  "altNames": "[\"NL\",\"Holland\",\"Nederland\",\"Netherlands\"]",
                  "codeAlpha2": "NL",
                  "codeAlpha3": "NLD",
                  "codeNumeric": "528",
                  "population": 17019800,
                  "longitude": "",
                  "latitute": null,
                  "capital": "Amsterdam",
                  "region": "Europe",
                  "subRegion": "Western Europe",
                  "flagUrl": "https://stgtestnecdn.azureedge.net/frontend-app-static/country-flag-icons/1x1/NL.svg",
                  "callingCodes": "31",
                  "currencies": "EUR",
                  "languages": "nl",
                  "translations": "{\"de\":\"Niederlande\",\"es\":\"Países Bajos\",\"fr\":\"Pays-Bas\",\"ja\":\"オランダ\",\"it\":\"Paesi Bassi\",\"br\":\"Holanda\",\"pt\":\"Países Baixos\"}",
                  "timeZones": "UTC-04:00,UTC+01:00",
                  "borders": "BEL,DEU",
                  "topLevelDomain": ".nl",
                  "area": "41850.0",
                  "regionalBlocks": "System.Collections.Generic.List`1[System.Object]",
                  "gini": "30.9",
                  "ccFips": "NL",
                  "visibleForSiteSettings": true,
                  "isActive": true
              },
              "city": {
                  "id": 2094710,
                  "name": "Amsterdam",
                  "imageUrl": null,
                  "country": null
              },
              "regionId": 7,
              "subRegionId": 27
          },
          "eventHalls": [
            {
              "eventId": 384392,
              "hallId": 200,
              "mapStatus": 0,
              "isActive": false
            }
          ],
          "eventExternalSourceMappings": []
        },
        "sellerListingId": 0,
        "dataSourceId": 1,
        "stgListingId": 605698,
        "tickets": [],
        "score": {
          "isSet": true,
          "sectionScore": 0,
          "rowScore": 4,
          "seatScore": 0,
          "dealScore": 0,
          "priceScore": 5
        },
        "status": "Active",
        "section": "ZAAL",
        "seatNumbers": null,
        "soldSeatNumbers": null,
        "availableSeatNumbers": "14",
        "updateDate": "0001-01-01T00:00:00",
        "remarks": null,
        "orderSeats": [],
        "listingComments": [],
        "categoryName": null,
        "categoryId": null
      },
      {
        "id": "879823-33416",
        "eventId": 384392,
        "sellerId": 9860,
        "ticketType": "Seated",
        "isETicketConfirmed": true,
        "row": "11",
        "sellType": "AvoidLeavingOneTicket",
        "faceValue": 75,
        "ticketPrice": 109.4,
        "numberOfTickets": 1,
        "numberOfTicketsAreSold": 0,
        "ticketIds": [
            28391405
        ],
        "currencyId": 1,
        "eventTsmId": null,
        "creationTime": "2025-03-19T17:11:15.4175733Z",
        "seller": {
          "id": 9860,
          "email": "info@topticketshop.nl",
          "userName": "info@topticketshop.nl",
          "name": "test",
          "surname": "",
          "fullName": "test ",
          "userPicUrl": "https://stgprod.azureedge.net/frontend-app-static/img/test.logo-m.jpg",
          "phoneNumberConfirmed": true,
          "emailConfirmed": true,
          "stripeAccountId": null
        },
        "event": {
          "id": 384392,
          "name": "Elisabeth",
          "comment": null,
          "status": 0,
          "startDateTime": "2025-03-21T20:00:00",
          "categoryName": "Elisabeth",
          "categoryUrl": "elisabeth",
          "venueId": 26770,
          "categoryId": 108573,
          "coronaTestRequired": false,
          "metaData": {
            "soldTicketsCount": 0,
            "wantedTicketsCount": 0,
            "availableTicketsCount": 2,
            "availableDealsCount": 2,
            "invalidListingsCount": 0,
            "visitedUsersCount": 0
          },
          "category": {
              "id": 108573,
              "name": "Elisabeth",
              "parentCategoryId": 1,
              "description": null,
              "imageComment": null,
              "imageUrl": "https://res.cloudinary.com/test/image/upload/v1712883695/j1eizrwcbefsuqevks8a.jpg",
              "link": "/categories?id=108573",
              "defaultImageUrlIfImageCommentDoesNotExist": "https://res.cloudinary.com/test/image/upload/v1650988106/qlgpj3ifkhcltnvpdgha.jpg"
          },
          "venue": {
            "id": 26770,
            "name": "Delamar",
            "altNames": "Delamar",
            "description": null,
            "streamId": "12aef7cd-843a-4c3d-adb2-4e9ebb52de98",
            "isEnabled": false,
            "stateProvince": null,
            "metroArea": null,
            "postCode": "1017PL",
            "address1": "Marnixstraat 402",
            "address2": null,
            "latitude": 52.36436956,
            "longitude": 4.8808702,
            "country": {
              "id": 26,
              "name": "Nederland",
              "nativeName": "Nederland",
              "altNames": "[\"NL\",\"Holland\",\"Nederland\",\"Netherlands\"]",
              "codeAlpha2": "NL",
              "codeAlpha3": "NLD",
              "codeNumeric": "528",
              "population": 17019800,
              "longitude": "",
              "latitute": null,
              "capital": "Amsterdam",
              "region": "Europe",
              "subRegion": "Western Europe",
              "flagUrl": "https://stgtestnecdn.azureedge.net/frontend-app-static/country-flag-icons/1x1/NL.svg",
              "callingCodes": "31",
              "currencies": "EUR",
              "languages": "nl",
              "translations": "{\"de\":\"Niederlande\",\"es\":\"Países Bajos\",\"fr\":\"Pays-Bas\",\"ja\":\"オランダ\",\"it\":\"Paesi Bassi\",\"br\":\"Holanda\",\"pt\":\"Países Baixos\"}",
              "timeZones": "UTC-04:00,UTC+01:00",
              "borders": "BEL,DEU",
              "topLevelDomain": ".nl",
              "area": "41850.0",
              "regionalBlocks": "System.Collections.Generic.List`1[System.Object]",
              "gini": "30.9",
              "ccFips": "NL",
              "visibleForSiteSettings": true,
              "isActive": true
            },
            "city": {
              "id": 2094710,
              "name": "Amsterdam",
              "imageUrl": null,
              "country": null
            },
            "regionId": 7,
            "subRegionId": 27
          },
          "eventHalls": [
            {
              "eventId": 384392,
              "hallId": 200,
              "mapStatus": 0,
              "isActive": false
            }
          ],
          "eventExternalSourceMappings": []
        },
        "sellerListingId": 0,
        "dataSourceId": 1,
        "stgListingId": 605699,
        "tickets": [],
        "score": {
          "isSet": true,
          "sectionScore": 0,
          "rowScore": 4,
          "seatScore": 0,
          "dealScore": 0,
          "priceScore": 10
        },
        "status": "Active",
        "section": "ZAAL",
        "seatNumbers": null,
        "soldSeatNumbers": null,
        "availableSeatNumbers": "13",
        "updateDate": "0001-01-01T00:00:00",
        "remarks": null,
        "orderSeats": [],
        "listingComments": [],
        "categoryName": null,
        "categoryId": null
      }
    ]
  },
  "eventOrders": {
    "orders": [
      {
        "id": 200937,
        "eventId": 384392,
        "listingId": "605699",
        "externalListingId": "879823-33416",
        "paymentMethod": null,
        "currencyId": 1,
        "currency": {
          "id": 1,
          "code": "EUR",
          "imageUrl": null,
          "name": "Euro",
          "conversionRate": "0.00",
          "symbol": "€",
          "symbolUrl": null,
          "visibleForSiteSettings": true,
          "isActive": true
        },
        "stripePaymentMethodId": null,
        "row": "11",
        "section": "ZAAL",
        "seller": "fake seller",
        "buyer": "fake buyer",
        "soldSeats": null,
        "ticketId": null,
        "profit": 8.25,
        "source": null,
        "buyerId": 1376,
        "sellerId": 9860,
        "createDate": "2025-02-19T12:28:13.532804",
        "stripePaymentIntentId": "pi_fake",
        "buyerPicUrl": "https://img.logo.com/fake.jpg",
        "sellerPicUrl": "https://img.logo.com/fake.jpg",
        "availableSeats": "13",
        "referrer": null,
        "totalAmount": 109.4
      }
    ]
  },
  "invalidListings": {
    "items": [
        {
            "id": "869773-55792",
            "eventId": 391179,
            "sellerId": 9860,
            "ticketType": "Seated",
            "ticketContentType": "None",
            "isETicketConfirmed": true,
            "row": "6",
            "sellType": "AvoidLeavingOneTicket",
            "faceValue": 34,
            "ticketPrice": 60.3,
            "sellerServiceFeeValuePerTicket": 2.79,
            "sellerServiceFeeInPercents": 5,
            "numberOfTickets": 2,
            "numberOfReservedTickets": 0,
            "numberOfTicketsAreSold": 0,
            "ticketIds": [],
            "currencyId": 1,
            "creationTime": "2025-04-07T09:11:16.2654883Z",
            "seller": {
                "id": 9860,
                "email": "info@topticketshop.nl",
                "userName": "info@topticketshop.nl",
                "name": "test",
                "surname": "",
                "fullName": "test ",
                "userPicUrl": "https://stgprod.azureedge.net/frontend-app-static/img/test.logo-m.jpg",
                "phoneNumberConfirmed": true,
                "emailConfirmed": true,
                "stripeAccountId": null
            },
            "event": {
                "id": 391179,
                "name": "Wat als",
                "comment": "Claudia de Breij – Paul J.H. Groeneveld (wikimedia commons)",
                "status": 0,
                "startDateTime": "2025-04-10T20:15:00",
                "categoryName": "Claudia De Breij",
                "categoryUrl": "claudia-de-breij",
                "venueId": 26721,
                "categoryId": 37242,
                "coronaTestRequired": false,
                "metaData": {
                    "soldTicketsCount": 0,
                    "wantedTicketsCount": 0,
                    "availableTicketsCount": 0,
                    "availableDealsCount": 0,
                    "invalidListingsCount": 0,
                    "visitedUsersCount": 0
                },
                "category": {
                    "id": 37242,
                    "name": "Claudia De Breij",
                    "parentCategoryId": 25390,
                    "description": null,
                    "imageComment": null,
                    "imageUrl": "https://res.cloudinary.com/test/image/upload/v1656517916/rb7e2jammjrjwp5v9pbp.jpg",
                    "link": "/categories?id=37242",
                    "defaultImageUrlIfImageCommentDoesNotExist": "https://res.cloudinary.com/test/image/upload/v1650988108/oog8zii60cjm8v4ixg7i.jpg"
                },
                "venue": {
                    "id": 26721,
                    "name": "Schouwburg Het Park",
                    "altNames": "Schouwburg Het Park",
                    "description": null,
                    "streamId": "34bb5303-cb00-427f-81d8-591382c8f8ad",
                    "isEnabled": false,
                    "stateProvince": null,
                    "metroArea": null,
                    "postCode": "1621LE",
                    "address1": "Westerdijk 4",
                    "address2": null,
                    "latitude": 52.64164652,
                    "longitude": 5.05125912,
                    "country": {
                        "id": 26,
                        "name": "Nederland",
                        "nativeName": "Nederland",
                        "altNames": "[\"NL\",\"Holland\",\"Nederland\",\"Netherlands\"]",
                        "codeAlpha2": "NL",
                        "codeAlpha3": "NLD",
                        "codeNumeric": "528",
                        "population": 17019800,
                        "longitude": "",
                        "latitute": null,
                        "capital": "Amsterdam",
                        "region": "Europe",
                        "subRegion": "Western Europe",
                        "flagUrl": "https://stgtestnecdn.azureedge.net/frontend-app-static/country-flag-icons/1x1/NL.svg",
                        "callingCodes": "31",
                        "currencies": "EUR",
                        "languages": "nl",
                        "translations": "{\"de\":\"Niederlande\",\"es\":\"Países Bajos\",\"fr\":\"Pays-Bas\",\"ja\":\"オランダ\",\"it\":\"Paesi Bassi\",\"br\":\"Holanda\",\"pt\":\"Países Baixos\"}",
                        "timeZones": "UTC-04:00,UTC+01:00",
                        "borders": "BEL,DEU",
                        "topLevelDomain": ".nl",
                        "area": "41850.0",
                        "regionalBlocks": "System.Collections.Generic.List`1[System.Object]",
                        "gini": "30.9",
                        "ccFips": "NL",
                        "visibleForSiteSettings": true,
                        "isActive": true
                    },
                    "city": {
                        "id": 2086756,
                        "name": "Hoorn",
                        "imageUrl": null,
                        "country": null
                    },
                    "regionId": 7,
                    "subRegionId": 27
                },
                "eventHalls": [
                    {
                        "eventId": 391179,
                        "hallId": 153,
                        "mapStatus": 0,
                        "isActive": false
                    },
                    {
                        "eventId": 391179,
                        "hallId": 132,
                        "mapStatus": 0,
                        "isActive": true
                    }
                ],
                "eventExternalSourceMappings": []
            },
            "sellerListingId": 0,
            "dataSourceId": 1,
            "externalDataSource": "Topticketshop",
            "stgListingId": 524631,
            "tickets": null,
            "status": "Active",
            "section": "ZAAL",
            "errorDescription": "Listing seat does not exist and type is seated.",
            "errorType": "InvalidRow"
        }
    ]
  }
}

export default function EventDetails({ id, searchParams }: EventDetailsProp) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchNextParams = useSearchParams();
  console.log('EventDetails external id', id, searchParams);
  // const filterInput = useRef(null);
  const filterType = searchParams?.filterType;
  const filterId = searchParams?.filterValue;

  const [selectedValue, setSelectedValue] = useState<string | undefined>(searchParams?.filterType || '');
  const [selectedId, setSelectedId] = useState<string | undefined>(searchParams?.filterValue || '');

  const [mounted, setMounted] = useState(false);

  const [isEventDetailsPopupOpen, setToggleEventDetailsPopupOpen] = useState(false);

  const { data: swrData } = useSWR<AllEventDetailsProps>(mounted ? `/api/events/eventdetails/?filterValue=${filterId}&filterType=${filterType}` : null, fetcher,
    {
      dedupingInterval: Infinity,
      keepPreviousData: true,
      onErrorRetry: () => {
        // if (key.indexOf('/api/events') !== -1) redirect("/login");
      }
    }
  );

  console.log('swrData', swrData)
  const updateQueryParam = useCallback(() => {
    // const params = new URLSearchParams(searchParams);
    const params = new URLSearchParams(searchNextParams.toString());
    // console.log('filterInput', filterInput, filterInput.current.value)
    console.log('selectedValue', selectedValue)
    console.log('selectedId', selectedId)
    // '382719'
    params.set('filterType', selectedValue?.toString() || '');
    params.set('filterValue', selectedId?.toString() || '');
    replace(`${pathname}?${params.toString()}`);

    console.log('pathname', pathname)
    console.log('searchNextParams', params)
  }, [replace, pathname, searchNextParams, selectedValue, selectedId]);

  useEffect(() => {
    console.log('useEffect', selectedValue, selectedId)
    if(selectedValue && selectedId) {
      setMounted(true);
      updateQueryParam();
    }
  }, [searchParams, updateQueryParam, selectedValue, selectedId]);

  const eventsDateFormat = (date: Date) => {
    return FormatDate(date, "LL-dd-y H:mm");
  };

  const handleSetId = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    await setSelectedId(event.target.value);
    // updateQueryParam();
  };

  const handleSelectChange = async (value: string) => {
    await setSelectedValue(value);
    // updateQueryParam();
  };

  const handleFiltering = () => {
    updateQueryParam();
    // setSelectedId(event.target.value);
  };

  const setIsEventDetailsOpen = (flag: boolean) => {
    // updateQueryParam();
    // setSelectedId(event.target.value);
    setToggleEventDetailsPopupOpen(flag);
  };

  return (
    <>
      <strong className="block mb-[10px]">Filter events</strong>
      <form className="flex">
        <div className="mr-[10px]">
          <Select onValueChange={handleSelectChange} defaultValue={selectedValue}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose filter type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Search Events by</SelectLabel>
                {FilterEventItems.map((item) => <SelectItem key={item.value} value={item.value}>{item.name}</SelectItem>)}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Input 
          className="max-w-[320px] mr-[10px]" 
          type="text" 
          id="filter-input" 
          name="filter" 
          value={selectedId} 
          onChange={(ev) => handleSetId(ev)}
        />

        <Button onClick={(e) => {
          e.preventDefault();
          handleFiltering();
        }} type="submit">Search</Button>
      </form>
      {/* {(selectedValue && selectedId && swrData) &&  */}
      {(selectedValue && selectedId) && 
        <div>
          <Separator orientation="horizontal" />

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
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {swrData && swrData.data && swrData.data.map((item: EventsDetailsItemProp) => (
                  // <EventDetailsItem key={item.id} item={item} mockData={EventsMockData}></EventDetailsItem>
                  <TableRow  key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell className="bg-lime-400">{item.stock}</TableCell>
                    <TableCell className="bg-yellow-500">{item.sold}</TableCell>
                    <TableCell className="whitespace-normal">{eventsDateFormat(new Date(item.startDateTime))}</TableCell>
                    <TableCell className="whitespace-normal">
                      <a className="text-sky-500 hover:underline" href={`#`} target="_blank">{item.venueName}</a>
                    </TableCell>
                    <TableCell className="whitespace-normal">
                      <a className="text-sky-500 hover:underline" href={`#`} target="_blank">{item.performerName}</a>
                    </TableCell>
                    <TableCell><a className="text-sky-500 hover:underline" href={item.link} target="_blank">Click</a></TableCell>
                    <TableCell><a className="text-sky-500 hover:underline" href={`#`} target="_blank">{item.city}</a></TableCell>
                    {/* <TableCell><a className="text-sky-500 hover:underline" onClick={() => setIsEventDetailsOpen(true)}>Details</a></TableCell> */}
                    <TableCell>
                      <Button className="p-[7px] h-auto w-full" onClick={() => setIsEventDetailsOpen(true)}>Details</Button>
                    </TableCell>
                  </TableRow>
                ))}
                {isEventDetailsPopupOpen && (
                  <>
                    {/* orders row */}
                    <TableRow>
                      <TableCell className="p-[3px]" colSpan={9}>
                        <div className="px-[3px] rounded-[5px] bg-gray-50 mb-[5px]">
                          <strong>Orders</strong>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="h-auto py-[3px] px-[0]">ID</TableHead>
                                <TableHead className="h-auto py-[3px] px-[0]">Date</TableHead>
                                <TableHead className="h-auto py-[3px] px-[0]">Payment</TableHead>
                                <TableHead className="h-auto py-[3px] px-[0]">Section</TableHead>
                                <TableHead className="h-auto py-[3px] px-[0]">Row</TableHead>
                                <TableHead className="h-auto py-[3px] px-[0]">Seats</TableHead>
                                <TableHead className="h-auto py-[3px] px-[0]">Seller</TableHead>
                                <TableHead className="h-auto py-[3px] px-[0]">Buyer</TableHead>
                                <TableHead className="h-auto py-[3px] px-[0]">Total</TableHead>
                                <TableHead className="h-auto py-[3px] px-[0]">Profit</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {EventsDetailsMockData.eventOrders.orders.map((order: OrdersDetailsProp) => (
                                <TableRow key={order.id}>
                                  <TableCell className="p-[2px]">
                                    <a className="text-white hover:underline bg-green-500" href={`#`} target="_blank">{order.id}</a>
                                  </TableCell>
                                  <TableCell className="whitespace-normal">{eventsDateFormat(new Date(order.createDate || ''))}</TableCell>
              
                                  <TableCell className="p-[2px]">ideal</TableCell>
                                  <TableCell className="p-[2px] whitespace-normal">{order.section}</TableCell>
                                  <TableCell className="p-[2px]">{order.row}</TableCell>
                                  <TableCell className="p-[2px]">
                                    {order.availableSeats && order.availableSeats.split(',').map((seat: string) => (
                                      <a className="inline-block bg-green-300 text-sky-800 hover:underline p-[2px] mr-[2px] last:mr-[0px] border border-indigo-600" key={order.id + seat} href="#" target="_blank">{seat}</a>
                                    ))}
                                  </TableCell>
                                  <TableCell className="p-[2px]">
                                    <a className="text-sky-500 hover:underline" href={`#`} target="_blank">{order.seller}</a>
                                  </TableCell>
                                  <TableCell className="p-[2px]">
                                    <a className="text-sky-500 hover:underline" href={`#`} target="_blank">{order.buyer}</a>
                                  </TableCell>
                                  <TableCell className="p-[2px]">{order.currency?.symbol}{order.totalAmount}</TableCell>
                                  <TableCell className="p-[2px]">{order.currency?.symbol}{order.profit}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </TableCell>
                    </TableRow>
                    {/* listing row */}
                    {EventsDetailsMockData.eventListings.totalCount > 0 && (
                      <TableRow>
                        <TableCell className="p-[3px]" colSpan={9}>
                          <div className="px-[3px] rounded-[5px] bg-gray-50 mb-[5px]">
                            <strong>Listings</strong>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="h-auto py-[3px] px-[0]">ID</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[0]">Seller</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[0]">Section</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[0]">Row</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[0]">Seats</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[0]">FaceValue</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[0]">TicketPrice</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[0]">Status</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[0]">DealScore</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {EventsDetailsMockData.eventListings.listings.map((listing: ListingsDetailsProp) => (
                                  <TableRow key={listing.id}>
                                    <TableCell className="p-[2px]">
                                      <a className="text-white hover:underline bg-green-500" href={`#`} target="_blank">{listing.id}</a>
                                    </TableCell>
                                    <TableCell className="p-[2px]"><a className="text-sky-500 hover:underline" href={"#"} target="_blank">{listing.seller?.name}</a></TableCell>
                                    <TableCell className="p-[2px] whitespace-normal">{listing.section}</TableCell>
                                    <TableCell className="p-[2px]">{listing.row}</TableCell>
                                    <TableCell className="p-[2px]">
                                      {listing.availableSeatNumbers && listing.availableSeatNumbers.split(',').map((seat: string) => (
                                        <a className="inline-block bg-green-300 text-sky-800 hover:underline p-[2px] mr-[2px] last:mr-[0px] border border-indigo-600" key={listing.id + seat} href="#" target="_blank">{seat}</a>
                                      ))}
                                    </TableCell>
                                    <TableCell className="p-[2px]">{listing.faceValue}</TableCell>
                                    <TableCell className="p-[2px]">{listing.ticketPrice}</TableCell>
                                    {/* <TableCell className="p-[2px]">{listingStatus(listing.status)}</TableCell> */}
                                    <TableCell className="p-[2px]">{listing.status}</TableCell>
                                    <TableCell className="p-[2px]">{listing.score?.dealScore}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                    {/* invalid listing row */}
                    {EventsDetailsMockData.invalidListings.items.length > 0 && (
                      <TableRow>
                        <TableCell className="p-[3px]" colSpan={9}>
                          <div className="px-[3px] rounded-[5px] bg-gray-50 mb-[5px]">
                            <strong>Invalid Listings</strong>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="h-auto py-[3px] px-[3px]">ID</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[3px] min-w-[50px] text-ellipsis" title='ErrorDescription'>ErrorDescription</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[3px]" title='ErrorType'>ErrorType</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[3px]" title='Status'>Status</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[3px]" title='FaceValue'>FaceValue</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[3px]" title='TicketPrice'>TicketPrice</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[3px] truncate max-w-[80px]" title='TicketType'>TicketType</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[3px]" title='SellType'>SellType</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[3px]" title='SellerId'>SellerId</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[3px] truncate max-w-[70px]" title='TicketsSold'>TicketsSold</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[3px] truncate max-w-[70px]" title='ReservedTickets'>ReservedTickets</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[3px] truncate max-w-[70px]" title='NumberOfTickets'>NumberOfTickets</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[3px] truncate max-w-[70px]" title='SellerListingId'>SellerListingId</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[3px]" title='Section'>Section</TableHead>
                                  <TableHead className="h-auto py-[3px] px-[3px]" title='Row'>Row</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {EventsDetailsMockData.invalidListings.items.map((listing: ListingsDetailsProp) => (
                                  <TableRow key={listing.id}>
                                    <TableCell className="p-[2px]">
                                      <a className="text-white hover:underline bg-rose-600" href={`#`} target="_blank">{listing.id}</a>
                                    </TableCell>
                                    <TableCell className="p-[2px] whitespace-normal truncate">{listing.errorDescription}</TableCell>
                                    <TableCell className="p-[2px] whitespace-normal truncate">{listing.errorType}</TableCell>
                                    <TableCell className="p-[2px] truncate">{listing.status}</TableCell>
                                    <TableCell className="p-[2px]">{listing.faceValue}</TableCell>
                                    <TableCell className="p-[2px]">{listing.ticketPrice}</TableCell>
                                    <TableCell className="p-[2px] truncate max-w-[60px]">{listing.ticketType}</TableCell>
                                    <TableCell className="p-[2px] truncate max-w-[60px]" title={listing.sellType}>{listing.sellType}</TableCell>
                                    <TableCell className="p-[2px]">{listing.sellerId}</TableCell>
                                    <TableCell className="p-[2px]">{listing.numberOfTicketsAreSold}</TableCell>
                                    <TableCell className="p-[2px]">{listing.numberOfReservedTickets}</TableCell>
                                    <TableCell className="p-[2px]">{listing.numberOfTickets}</TableCell>
                                    <TableCell className="p-[2px]">{listing.sellerListingId}</TableCell>
                                    <TableCell className="p-[2px]">{listing.section}</TableCell>
                                    <TableCell className="p-[2px]">{listing.row}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      }
    </>
  );
}
