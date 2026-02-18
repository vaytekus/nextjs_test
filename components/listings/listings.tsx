'use client';
import { FormatDate } from "@/lib/formatDate";
import { ListingItemProps } from '@/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const LisingsMockData = {
  // "@odata.context": "https://admin.fake/odata/$metadata#Listings(currency(id,symbol),event(name,startDateTime,venueId),splitType(id,name))",
  "count": 61673,
  "items": [
      {
          "isValidated": false,
          "skipValidation": false,
          "validationDateTimeUtc": null,
          "eventId": 84346,
          "sellerId": 1,
          "status": "New",
          "ticketType": "Seated",
          "sellType": "AvoidLeavingOneTicket",
          "numberOfTickets": 2,
          "numberOfTicketsAreSold": 0,
          "verifiedBy": null,
          "eventTsmId": null,
          "dataSource": "TICKET_MASTER",
          "externalId": "570385-18706",
          "remarks": null,
          "instantDownload": true,
          "expectedTicketDeliveryDate": null,
          "rowVersion": "AAAAAAA5414=",
          "isDeleted": false,
          "splitTypeId": null,
          "section": "BALKON E",
          "row": "9",
          "faceValue": 39,
          "ticketPrice": 68,
          "sellerServiceFeeValue": 0,
          "sellerServiceFeeInPercents": 0,
          "currencyId": 1,
          "id": 125765,
          "createDate": "2020-03-03T19:10:39.8777298+01:00",
          "updateDate": "2020-03-03T19:10:39.8777298+01:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "6fbcf6fb-7d96-434e-ac9e-de1287a75a61",
          "currency": {
              "symbol": "€",
              "id": 1
          },
          "event": {
              "name": "fake event",
              "startDateTime": "2021-06-16T19:30:00+02:00",
              "venueId": 26735
          },
          "splitType": null
      },
      {
          "isValidated": false,
          "skipValidation": false,
          "validationDateTimeUtc": null,
          "eventId": 84147,
          "sellerId": 1,
          "status": "New",
          "ticketType": "Seated",
          "sellType": "AvoidLeavingOneTicket",
          "numberOfTickets": 2,
          "numberOfTicketsAreSold": 0,
          "verifiedBy": null,
          "eventTsmId": null,
          "dataSource": "TICKET_MASTER",
          "externalId": "583019-12967",
          "remarks": null,
          "instantDownload": true,
          "expectedTicketDeliveryDate": null,
          "rowVersion": "AAAAAAA5418=",
          "isDeleted": false,
          "splitTypeId": null,
          "section": "1E BALKON",
          "row": "15",
          "faceValue": 55,
          "ticketPrice": 80.6,
          "sellerServiceFeeValue": 0,
          "sellerServiceFeeInPercents": 0,
          "currencyId": 1,
          "id": 125768,
          "createDate": "2020-03-11T17:55:24.0254266+01:00",
          "updateDate": "2020-03-11T17:55:24.0254266+01:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "eca9eafe-3900-4a6d-92cc-290053719de1",
          "currency": {
              "symbol": "€",
              "id": 1
          },
          "event": {
              "name": "fake event",
              "startDateTime": "2020-04-04T15:00:00+02:00",
              "venueId": 26749
          },
          "splitType": null
      },
      {
          "isValidated": false,
          "skipValidation": false,
          "validationDateTimeUtc": null,
          "eventId": 85954,
          "sellerId": 9860,
          "status": "New",
          "ticketType": "Seated",
          "sellType": "AvoidLeavingOneTicket",
          "numberOfTickets": 3,
          "numberOfTicketsAreSold": 0,
          "verifiedBy": null,
          "eventTsmId": null,
          "dataSource": "TICKET_MASTER",
          "externalId": "517601-16733",
          "remarks": null,
          "instantDownload": true,
          "expectedTicketDeliveryDate": null,
          "rowVersion": "AAAAAAA542A=",
          "isDeleted": false,
          "splitTypeId": null,
          "section": "benedenzaal",
          "row": "6",
          "faceValue": 20,
          "ticketPrice": 26.3,
          "sellerServiceFeeValue": 0,
          "sellerServiceFeeInPercents": 0,
          "currencyId": 1,
          "id": 125769,
          "createDate": "2020-05-01T20:13:59.315487+02:00",
          "updateDate": "2020-05-01T20:13:59.315487+02:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "b8ff90cc-e3b5-4238-8913-d230daa80941",
          "currency": {
              "symbol": "€",
              "id": 1
          },
          "event": {
              "name": "fake event",
              "startDateTime": "2020-10-28T20:00:00+01:00",
              "venueId": 26737
          },
          "splitType": null
      },
      {
          "isValidated": false,
          "skipValidation": false,
          "validationDateTimeUtc": null,
          "eventId": 85954,
          "sellerId": 9860,
          "status": "New",
          "ticketType": "Seated",
          "sellType": "AvoidLeavingOneTicket",
          "numberOfTickets": 2,
          "numberOfTicketsAreSold": 0,
          "verifiedBy": null,
          "eventTsmId": null,
          "dataSource": "TICKET_MASTER",
          "externalId": "517597-57055",
          "remarks": null,
          "instantDownload": true,
          "expectedTicketDeliveryDate": null,
          "rowVersion": "AAAAAAA542E=",
          "isDeleted": false,
          "splitTypeId": null,
          "section": "benedenzaal",
          "row": "5",
          "faceValue": 20,
          "ticketPrice": 28.5,
          "sellerServiceFeeValue": 0,
          "sellerServiceFeeInPercents": 0,
          "currencyId": 1,
          "id": 125770,
          "createDate": "2020-05-01T20:19:11.1454534+02:00",
          "updateDate": "2020-05-01T20:19:11.1454534+02:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "7fab4c4c-86b2-46d4-b0c6-0bcd3726e14f",
          "currency": {
              "symbol": "€",
              "id": 1
          },
          "event": {
              "name": "fake event",
              "startDateTime": "2020-10-28T20:00:00+01:00",
              "venueId": 26737
          },
          "splitType": null
      },
      {
          "isValidated": false,
          "skipValidation": false,
          "validationDateTimeUtc": null,
          "eventId": 85954,
          "sellerId": 9860,
          "status": "New",
          "ticketType": "Seated",
          "sellType": "AvoidLeavingOneTicket",
          "numberOfTickets": 3,
          "numberOfTicketsAreSold": 0,
          "verifiedBy": null,
          "eventTsmId": null,
          "dataSource": "TICKET_MASTER",
          "externalId": "517566-10535",
          "remarks": null,
          "instantDownload": true,
          "expectedTicketDeliveryDate": null,
          "rowVersion": "AAAAAAA542I=",
          "isDeleted": false,
          "splitTypeId": null,
          "section": "benedenzaal",
          "row": "7",
          "faceValue": 20,
          "ticketPrice": 28.3,
          "sellerServiceFeeValue": 0,
          "sellerServiceFeeInPercents": 0,
          "currencyId": 1,
          "id": 125771,
          "createDate": "2020-05-01T20:28:32.7203811+02:00",
          "updateDate": "2020-05-01T20:28:32.7203811+02:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "4caf8dcf-18de-4822-9971-80f1f886958a",
          "currency": {
              "symbol": "€",
              "id": 1
          },
          "event": {
              "name": "Nederlands Hoop",
              "startDateTime": "2020-10-28T20:00:00+01:00",
              "venueId": 26737
          },
          "splitType": null
      },
      {
          "isValidated": false,
          "skipValidation": false,
          "validationDateTimeUtc": null,
          "eventId": 95402,
          "sellerId": 24,
          "status": "VerificationFailed",
          "ticketType": "Standing",
          "sellType": "AvoidLeavingOneTicket",
          "numberOfTickets": 2,
          "numberOfTicketsAreSold": 0,
          "verifiedBy": null,
          "eventTsmId": null,
          "dataSource": "test",
          "externalId": null,
          "remarks": null,
          "instantDownload": true,
          "expectedTicketDeliveryDate": null,
          "rowVersion": "AAAAAABFQ3I=",
          "isDeleted": false,
          "splitTypeId": null,
          "section": "Unknown",
          "row": null,
          "faceValue": 10,
          "ticketPrice": 20,
          "sellerServiceFeeValue": 0,
          "sellerServiceFeeInPercents": 0,
          "currencyId": 1,
          "id": 125772,
          "createDate": "2020-05-04T12:27:59.6208841+02:00",
          "updateDate": "2020-05-04T12:29:08.0734488+02:00",
          "createdBy": 24,
          "updatedBy": null,
          "streamId": "0f7085c1-ded3-43c2-8183-d4eb9c6ddd37",
          "currency": {
              "symbol": "€",
              "id": 1
          },
          "event": {
              "name": "fake event",
              "startDateTime": "2020-05-04T19:30:00+02:00",
              "venueId": 26799
          },
          "splitType": null
      },
      {
          "isValidated": false,
          "skipValidation": false,
          "validationDateTimeUtc": null,
          "eventId": 95579,
          "sellerId": 9860,
          "status": "Reserved",
          "ticketType": "Seated",
          "sellType": "AvoidLeavingOneTicket",
          "numberOfTickets": 6,
          "numberOfTicketsAreSold": 0,
          "verifiedBy": null,
          "eventTsmId": null,
          "dataSource": "TICKET_MASTER",
          "externalId": "568567-21053",
          "remarks": null,
          "instantDownload": true,
          "expectedTicketDeliveryDate": null,
          "rowVersion": "AAAAAAA542Q=",
          "isDeleted": false,
          "splitTypeId": null,
          "section": "ca",
          "row": "8",
          "faceValue": 45,
          "ticketPrice": 75.5,
          "sellerServiceFeeValue": 0,
          "sellerServiceFeeInPercents": 0,
          "currencyId": 1,
          "id": 125773,
          "createDate": "2020-05-12T08:54:43.3215593+02:00",
          "updateDate": "2020-05-12T08:54:43.3215593+02:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "c119b070-522d-4f28-8e68-7f6e6b72d0a8",
          "currency": {
              "symbol": "€",
              "id": 1
          },
          "event": {
              "name": "fake event",
              "startDateTime": "2022-06-03T20:00:00+02:00",
              "venueId": 26789
          },
          "splitType": null
      },
      {
          "isValidated": false,
          "skipValidation": false,
          "validationDateTimeUtc": null,
          "eventId": 90618,
          "sellerId": 9860,
          "status": "Reserved",
          "ticketType": "Seated",
          "sellType": "AvoidLeavingOneTicket",
          "numberOfTickets": 4,
          "numberOfTicketsAreSold": 0,
          "verifiedBy": null,
          "eventTsmId": null,
          "dataSource": "TICKET_MASTER",
          "externalId": "573351-47722",
          "remarks": null,
          "instantDownload": true,
          "expectedTicketDeliveryDate": null,
          "rowVersion": "AAAAAAA542U=",
          "isDeleted": false,
          "splitTypeId": null,
          "section": "zaalbeneden rechts",
          "row": "9",
          "faceValue": 21,
          "ticketPrice": 42,
          "sellerServiceFeeValue": 0,
          "sellerServiceFeeInPercents": 0,
          "currencyId": 1,
          "id": 125774,
          "createDate": "2020-05-12T19:53:13.0242001+02:00",
          "updateDate": "2020-05-12T19:53:13.0242001+02:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "79e39573-67fb-4e92-85dc-111fc7eeed27",
          "currency": {
              "symbol": "€",
              "id": 1
          },
          "event": {
              "name": "fake event",
              "startDateTime": "2020-09-09T19:00:00+02:00",
              "venueId": 26753
          },
          "splitType": null
      },
      {
          "isValidated": false,
          "skipValidation": false,
          "validationDateTimeUtc": null,
          "eventId": 93174,
          "sellerId": 9860,
          "status": "Reserved",
          "ticketType": "Standing",
          "sellType": "AvoidLeavingOneTicket",
          "numberOfTickets": 0,
          "numberOfTicketsAreSold": 0,
          "verifiedBy": null,
          "eventTsmId": null,
          "dataSource": "TICKET_MASTER",
          "externalId": "537970-82952",
          "remarks": null,
          "instantDownload": true,
          "expectedTicketDeliveryDate": null,
          "rowVersion": "AAAAAAA542Y=",
          "isDeleted": false,
          "splitTypeId": null,
          "section": "vrije staanplaatsen",
          "row": "0",
          "faceValue": 39,
          "ticketPrice": 56.5,
          "sellerServiceFeeValue": 0,
          "sellerServiceFeeInPercents": 0,
          "currencyId": 1,
          "id": 125775,
          "createDate": "2020-05-13T15:40:31.0506551+02:00",
          "updateDate": "2020-05-13T15:40:31.0506551+02:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "8052c86c-c95b-4609-8daf-69ab12f5fc55",
          "currency": {
              "symbol": "€",
              "id": 1
          },
          "event": {
              "name": "fake event",
              "startDateTime": "2021-10-25T21:30:00+02:00",
              "venueId": 26794
          },
          "splitType": null
      },
      {
          "isValidated": false,
          "skipValidation": false,
          "validationDateTimeUtc": null,
          "eventId": 82894,
          "sellerId": 24,
          "status": "VerificationFailed",
          "ticketType": "Seated",
          "sellType": "AvoidLeavingOneTicket",
          "numberOfTickets": 1,
          "numberOfTicketsAreSold": 0,
          "verifiedBy": null,
          "eventTsmId": null,
          "dataSource": "test",
          "externalId": null,
          "remarks": null,
          "instantDownload": true,
          "expectedTicketDeliveryDate": null,
          "rowVersion": "AAAAAABFQ3M=",
          "isDeleted": false,
          "splitTypeId": null,
          "section": "Unknown",
          "row": null,
          "faceValue": 39,
          "ticketPrice": 78,
          "sellerServiceFeeValue": 0,
          "sellerServiceFeeInPercents": 0,
          "currencyId": 1,
          "id": 125776,
          "createDate": "2020-05-15T11:00:10.1994563+02:00",
          "updateDate": "2020-05-15T11:00:10.7166507+02:00",
          "createdBy": 24,
          "updatedBy": null,
          "streamId": "03e24532-9b36-47c6-abc9-6cd369dd2912",
          "currency": {
              "symbol": "€",
              "id": 1
          },
          "event": {
              "name": "fake event",
              "startDateTime": "2020-05-15T20:15:00+02:00",
              "venueId": 26948
          },
          "splitType": null
      },
      {
          "isValidated": false,
          "skipValidation": false,
          "validationDateTimeUtc": null,
          "eventId": 87321,
          "sellerId": 24,
          "status": "VerificationFailed",
          "ticketType": "Seated",
          "sellType": "AvoidLeavingOneTicket",
          "numberOfTickets": 1,
          "numberOfTicketsAreSold": 0,
          "verifiedBy": null,
          "eventTsmId": null,
          "dataSource": "test",
          "externalId": null,
          "remarks": null,
          "instantDownload": true,
          "expectedTicketDeliveryDate": null,
          "rowVersion": "AAAAAABFQ3Q=",
          "isDeleted": true,
          "splitTypeId": null,
          "section": "Unknown",
          "row": null,
          "faceValue": 39,
          "ticketPrice": 78,
          "sellerServiceFeeValue": 0,
          "sellerServiceFeeInPercents": 0,
          "currencyId": 1,
          "id": 125777,
          "createDate": "2020-05-18T09:38:01.348307+02:00",
          "updateDate": "2020-05-18T09:38:46.4435471+02:00",
          "createdBy": 24,
          "updatedBy": null,
          "streamId": "92cd938c-66a6-4496-ac4d-81ace2f4a32d",
          "currency": {
              "symbol": "€",
              "id": 1
          },
          "event": {
              "name": "fake event",
              "startDateTime": "2020-05-18T20:00:00+02:00",
              "venueId": 26718
          },
          "splitType": null
      },
      {
          "isValidated": false,
          "skipValidation": false,
          "validationDateTimeUtc": null,
          "eventId": 96496,
          "sellerId": 24,
          "status": "VerificationFailed",
          "ticketType": "Standing",
          "sellType": "AvoidLeavingOneTicket",
          "numberOfTickets": 4,
          "numberOfTicketsAreSold": 0,
          "verifiedBy": null,
          "eventTsmId": null,
          "dataSource": "test",
          "externalId": null,
          "remarks": null,
          "instantDownload": true,
          "expectedTicketDeliveryDate": null,
          "rowVersion": "AAAAAABFQ3U=",
          "isDeleted": false,
          "splitTypeId": null,
          "section": "Unknown",
          "row": null,
          "faceValue": 39.5,
          "ticketPrice": 79,
          "sellerServiceFeeValue": 0,
          "sellerServiceFeeInPercents": 0,
          "currencyId": 1,
          "id": 125780,
          "createDate": "2020-05-18T14:49:32.5912705+02:00",
          "updateDate": "2020-05-18T14:49:32.8778079+02:00",
          "createdBy": 24,
          "updatedBy": null,
          "streamId": "fb80f730-8bea-47fc-bf4b-3356b1d59451",
          "currency": {
              "symbol": "€",
              "id": 1
          },
          "event": {
              "name": "fake event",
              "startDateTime": "2020-05-18T21:00:00+02:00",
              "venueId": 26799
          },
          "splitType": null
      }
  ]
}
import { PagingData } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Listings({ pagingData }: { pagingData?: PagingData }) {
  const searchParams = useSearchParams();

  const pageNum = Number(pagingData?.pageNum ?? 1);
  const [, setPageIndex] = useState<number>(pageNum);

  useEffect(()=> {
    const params = new URLSearchParams(searchParams.toString());
    const currentIndex = params.get('pageNum') || '1';
    setPageIndex(parseInt(currentIndex, 10));
  }, [searchParams]);


  const eventDateTime = (date: Date) => {
    return FormatDate(date, "LL-dd-y H:mm");
  };

  const handleActivate = (id: number) => {
    console.log('handleActivate', id);
  };

  const handleDeactivate = (id: number) => {
    console.log('handleDeactivate', id);
  };

  return (
    <>
      <h3>Listings</h3>
      <div className="rounded-md border mb-[10px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Section</TableHead>
              <TableHead>Row</TableHead>
              <TableHead>Face Value</TableHead>
              <TableHead>Ticket Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {LisingsMockData?.items.map((item: ListingItemProps) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell className="max-w-[200px] whitespace-normal">
                  <div>{item.event.name}</div> 
                  <div>{eventDateTime(new Date(item.event.startDateTime))}</div>
                </TableCell>
                <TableCell>{item.section}</TableCell>
                <TableCell>{item.row}</TableCell>
                <TableCell>{item.faceValue}</TableCell>
                <TableCell>{item.ticketPrice}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  <div className="mb-[4px]">
                    <Button className="p-[7px] h-auto w-full" onClick={() => handleActivate(item.id)}>Activate</Button>
                  </div>
                  <div>
                    <Button className="p-[7px] h-auto w-full" onClick={() => handleDeactivate(item.id)}>Deactivate</Button>
                  </div>
                </TableCell>
              </TableRow>
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
