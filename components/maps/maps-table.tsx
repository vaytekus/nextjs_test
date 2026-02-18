"use client"

import { useState } from "react"
import { Download, Eye, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
export interface MapItem {
  id: number;
  name: string;
  type: string;
  sourceType: string;
  status: string;
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
}

export default function MapsTable({ data }: { data: MapItem[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) => 
      value != null && value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    ),
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "publish":
        return "bg-green-100 text-green-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  const [isAddNewMapModalOpen, setIsAddNewMapModalOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
        <Button variant="outline" onClick={() => setIsAddNewMapModalOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add new map
        </Button>
        <Dialog open={isAddNewMapModalOpen} onOpenChange={setIsAddNewMapModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add new map</DialogTitle>
            </DialogHeader>
            <form>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="file">File</Label>
                  <Input id="file" type="file" />
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Map name" />
                  <Label htmlFor="type">Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="helicopter">Helicopter</SelectItem>
                      <SelectItem value="podium">Podium</SelectItem>
                    </SelectContent> 
                  </Select>
                  <Label htmlFor="source">Source</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2d">2D</SelectItem>
                      <SelectItem value="3d">3D</SelectItem>
                    </SelectContent> 
                  </Select>
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="initial">Initial</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="onreview">On review</SelectItem>
                      <SelectItem value="onhold">On hold</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit">Add map</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-md border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created By</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Updated By</TableHead>
              <TableHead>Updated At</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.sourceType}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(item.status)}`}
                  >
                    {item.status}
                  </span>
                </TableCell>
                <TableCell>{item.createdBy}</TableCell>
                <TableCell>{formatDate(item.createdAt)}</TableCell>
                <TableCell>{item.updatedBy}</TableCell>
                <TableCell>{formatDate(item.updatedAt)}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
