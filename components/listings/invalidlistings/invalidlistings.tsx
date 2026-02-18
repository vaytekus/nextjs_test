'use client';
import Link from "next/link";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const InvalidListingsMockData = {
  "@odata.context": "https://admin.fake/odata/$metadata#EventMetaData(event(id,name,startDateTime,categoryId,venueId,category(id,name),venue(id,name)))",
  "@odata.count": 20,
  "value": [
      {
          "soldTicketsCount": 0,
          "wantedTicketsCount": 0,
          "ticketsCount": 0,
          "dealsCount": 0,
          "invalidListingsCount": 3,
          "zeroDealScoreListingsCount": 0,
          "visitedUsersCount": 0,
          "id": 301518,
          "createDate": "2024-04-09T01:00:35.6372899+02:00",
          "updateDate": "2025-04-08T12:46:11.882458+02:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "69f0294e-9729-4971-a014-094b0fa701c9",
          "event": {
              "name": "fake event",
              "startDateTime": "2025-04-11T20:15:00+02:00",
              "categoryId": 108366,
              "venueId": 26805,
              "id": 382719,
              "category": {
                  "name": "fake performer",
                  "id": 108366
              },
              "venue": {
                  "name": "fake venue",
                  "id": 26805
              }
          }
      },
      {
          "soldTicketsCount": 0,
          "wantedTicketsCount": 0,
          "ticketsCount": 0,
          "dealsCount": 0,
          "invalidListingsCount": 4,
          "zeroDealScoreListingsCount": 0,
          "visitedUsersCount": 0,
          "id": 302879,
          "createDate": "2024-04-24T01:00:58.2059632+02:00",
          "updateDate": "2025-04-08T12:46:17.0390883+02:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "0e44b153-32fd-4264-a542-d580b780586d",
          "event": {
              "name": "fake event",
              "startDateTime": "2025-04-10T20:15:00+02:00",
              "categoryId": 108366,
              "venueId": 26805,
              "id": 384080,
              "category": {
                  "name": "fake performer",
                  "id": 108366
              },
              "venue": {
                  "name": "fake venue",
                  "id": 26805
              }
          }
      },
      {
          "soldTicketsCount": 0,
          "wantedTicketsCount": 0,
          "ticketsCount": 0,
          "dealsCount": 0,
          "invalidListingsCount": 2,
          "zeroDealScoreListingsCount": 0,
          "visitedUsersCount": 0,
          "id": 302881,
          "createDate": "2024-04-24T01:00:58.257119+02:00",
          "updateDate": "2025-04-08T12:46:18.1373357+02:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "9558174e-df44-46e1-93be-3feed50235ea",
          "event": {
              "name": "fake event",
              "startDateTime": "2025-04-13T20:00:00+02:00",
              "categoryId": 108366,
              "venueId": 26791,
              "id": 384082,
              "category": {
                  "name": "fake performer",
                  "id": 108366
              },
              "venue": {
                  "name": "fake venue",
                  "id": 26791
              }
          }
      },
      {
          "soldTicketsCount": 0,
          "wantedTicketsCount": 0,
          "ticketsCount": 0,
          "dealsCount": 0,
          "invalidListingsCount": 2,
          "zeroDealScoreListingsCount": 0,
          "visitedUsersCount": 0,
          "id": 303378,
          "createDate": "2024-05-01T01:00:56.7247108+02:00",
          "updateDate": "2025-03-13T02:16:17.8408597+01:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "24757d8b-0de6-45ab-9e9f-cb18c5468afe",
          "event": {
              "name": "fake event",
              "startDateTime": "2025-06-19T20:00:00+02:00",
              "categoryId": 37283,
              "venueId": 26889,
              "id": 384579,
              "category": {
                  "name": "fake performer",
                  "id": 37283
              },
              "venue": {
                  "name": "fake venue",
                  "id": 26889
              }
          }
      },
      {
          "soldTicketsCount": 0,
          "wantedTicketsCount": 0,
          "ticketsCount": 0,
          "dealsCount": 999,
          "invalidListingsCount": 1,
          "zeroDealScoreListingsCount": 0,
          "visitedUsersCount": 999,
          "id": 304867,
          "createDate": "2024-05-23T01:00:38.4308117+02:00",
          "updateDate": "2025-04-08T12:46:13.6216334+02:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "30d5736c-c4f9-4030-8195-179c0221c256",
          "event": {
              "name": "fake event",
              "startDateTime": "2025-05-28T20:15:00+02:00",
              "categoryId": 37245,
              "venueId": 26761,
              "id": 386068,
              "category": {
                  "name": "fake performer",
                  "id": 37245
              },
              "venue": {
                  "name": "fake venue",
                  "id": 26761
              }
          }
      },
      {
          "soldTicketsCount": 0,
          "wantedTicketsCount": 0,
          "ticketsCount": 0,
          "dealsCount": 0,
          "invalidListingsCount": 2,
          "zeroDealScoreListingsCount": 0,
          "visitedUsersCount": 0,
          "id": 307012,
          "createDate": "2024-06-05T01:02:17.6031306+02:00",
          "updateDate": "2025-02-22T22:30:00.0957553+01:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "c57a6bc3-178f-4e7f-8bd9-f308f46de00f",
          "event": {
              "name": "fake event",
              "startDateTime": "2025-05-27T20:00:00+02:00",
              "categoryId": 38189,
              "venueId": 26712,
              "id": 388213,
              "category": {
                  "name": "fake performer",
                  "id": 38189
              },
              "venue": {
                  "name": "fake venue",
                  "id": 26712
              }
          }
      },
      {
          "soldTicketsCount": 0,
          "wantedTicketsCount": 0,
          "ticketsCount": 0,
          "dealsCount": 0,
          "invalidListingsCount": 1,
          "zeroDealScoreListingsCount": 0,
          "visitedUsersCount": 0,
          "id": 307023,
          "createDate": "2024-06-05T01:02:19.4468055+02:00",
          "updateDate": "2025-04-08T12:46:12.464409+02:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "15c32950-d522-40c9-a0fb-10656cf3c0e5",
          "event": {
              "name": "fake event",
              "startDateTime": "2025-06-12T20:00:00+02:00",
              "categoryId": 37283,
              "venueId": 26712,
              "id": 388224,
              "category": {
                  "name": "fake performer",
                  "id": 37283
              },
              "venue": {
                  "name": "fake venue",
                  "id": 26712
              }
          }
      },
      {
          "soldTicketsCount": 0,
          "wantedTicketsCount": 0,
          "ticketsCount": 0,
          "dealsCount": 0,
          "invalidListingsCount": 2,
          "zeroDealScoreListingsCount": 0,
          "visitedUsersCount": 0,
          "id": 307502,
          "createDate": "2024-06-06T01:00:55.2906823+02:00",
          "updateDate": "2025-04-08T12:46:13.9159187+02:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "16bc1eab-f663-48d7-97a1-fcd2cd602b2f",
          "event": {
              "name": "fake event",
              "startDateTime": "2025-04-24T20:15:00+02:00",
              "categoryId": 37245,
              "venueId": 26734,
              "id": 388703,
              "category": {
                  "name": "fake performer",
                  "id": 37245
              },
              "venue": {
                  "name": "fake venue",
                  "id": 26734
              }
          }
      },
      {
          "soldTicketsCount": 0,
          "wantedTicketsCount": 0,
          "ticketsCount": 0,
          "dealsCount": 0,
          "invalidListingsCount": 3,
          "zeroDealScoreListingsCount": 0,
          "visitedUsersCount": 0,
          "id": 308426,
          "createDate": "2024-06-13T01:00:50.5523522+02:00",
          "updateDate": "2025-04-08T12:46:18.3341731+02:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "9934d826-5f23-485b-93d0-02ef148e7fd1",
          "event": {
              "name": "fake event",
              "startDateTime": "2025-06-04T20:00:00+02:00",
              "categoryId": 37245,
              "venueId": 26826,
              "id": 389627,
              "category": {
                  "name": "fake performer",
                  "id": 37245
              },
              "venue": {
                  "name": "fake venue",
                  "id": 26826
              }
          }
      },
      {
          "soldTicketsCount": 0,
          "wantedTicketsCount": 0,
          "ticketsCount": 0,
          "dealsCount": 0,
          "invalidListingsCount": 1,
          "zeroDealScoreListingsCount": 0,
          "visitedUsersCount": 0,
          "id": 308427,
          "createDate": "2024-06-13T01:00:50.5855426+02:00",
          "updateDate": "2025-04-08T12:46:17.4717268+02:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "5b9d5d57-5993-4a6e-afc3-926cabc9fb2e",
          "event": {
              "name": "de Schouten Schoenen aan",
              "startDateTime": "2025-06-05T20:00:00+02:00",
              "categoryId": 37245,
              "venueId": 26826,
              "id": 389628,
              "category": {
                  "name": "Tineke Schouten",
                  "id": 37245
              },
              "venue": {
                  "name": "Stadsschouwburg Utrecht",
                  "id": 26826
              }
          }
      },
      {
          "soldTicketsCount": 0,
          "wantedTicketsCount": 0,
          "ticketsCount": 0,
          "dealsCount": 0,
          "invalidListingsCount": 6,
          "zeroDealScoreListingsCount": 0,
          "visitedUsersCount": 0,
          "id": 308526,
          "createDate": "2024-06-13T01:00:54.7658382+02:00",
          "updateDate": "2025-02-23T04:21:59.6302785+01:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "553e0e4c-cbe3-4f49-a233-773c761d30b3",
          "event": {
              "name": "fake event",
              "startDateTime": "2025-06-13T20:00:00+02:00",
              "categoryId": 37283,
              "venueId": 26749,
              "id": 389727,
              "category": {
                  "name": "fake performer",
                  "id": 37283
              },
              "venue": {
                  "name": "fake venue",
                  "id": 26749
              }
          }
      },
      {
          "soldTicketsCount": 0,
          "wantedTicketsCount": 0,
          "ticketsCount": 0,
          "dealsCount": 0,
          "invalidListingsCount": 1,
          "zeroDealScoreListingsCount": 0,
          "visitedUsersCount": 0,
          "id": 309127,
          "createDate": "2024-06-19T01:00:45.5931259+02:00",
          "updateDate": "2025-04-08T12:46:18.4991666+02:00",
          "createdBy": null,
          "updatedBy": null,
          "streamId": "e06c98f1-2894-4aab-87db-fad5e9c0e19b",
          "event": {
              "name": "fake event",
              "startDateTime": "2025-11-19T20:00:00+01:00",
              "categoryId": 105304,
              "venueId": 26770,
              "id": 390328,
              "category": {
                  "name": "fake performer",
                  "id": 105304
              },
              "venue": {
                  "name": "fake venue",
                  "id": 26770
              }
          }
      }
  ]
}

export default function InvalidListings() {
  const handleListingDetails = (id: number) => {
    console.log('handleListingDetails', id);
  };

  const handleRevalidate = (id: number) => {
    console.log('handleRevalidate', id);
  };

  return (
      <>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>EventId</TableHead>
                <TableHead>Performer</TableHead>
                <TableHead className="truncate max-w-[70px]" title="Venue">Venue</TableHead>
                <TableHead className="truncate max-w-[70px]" title="InvalidListingsCount">InvalidListingsCount</TableHead>
                <TableHead className="truncate max-w-[70px]" title="TicketsCount">TicketsCount</TableHead>
                <TableHead className="truncate max-w-[70px]" title="DealsCount">DealsCount</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {InvalidListingsMockData.value.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>
                    <Link className="text-sky-500 hover:underline cursor-pointer" href={`/events/eventdetails/${item.event.id}?filterType=EventId`}>{item.event.id}</Link>
                  </TableCell>
                  <TableCell>
                    <Link className="text-sky-500 hover:underline cursor-pointer" href={`/performers`}>{item.event.category.name}</Link>
                  </TableCell>
                  <TableCell>
                    <Link className="text-sky-500 hover:underline" href={`/venue`}>{item.event.venue.name}</Link>
                  </TableCell>
                  <TableCell>{item.invalidListingsCount}</TableCell>
                  <TableCell>{item.ticketsCount}</TableCell>
                  <TableCell>{item.dealsCount}</TableCell>
                  <TableCell>
                    <div className="mb-[4px]">
                      <Button className="p-[7px] h-auto w-full" onClick={() => handleListingDetails(item.id)}>Details</Button>
                    </div>
                    <div>
                      <Button className="p-[7px] h-auto w-full" onClick={() => handleRevalidate(item.id)}>Revalidate</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </>
    );
}
