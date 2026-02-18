'use client';

// import { FormatDate } from "@/lib/formatDate";
// import { UserItemProps } from '@/types';
import { useState } from 'react';
import { PrivacyPolicyItemProps } from '@/types';
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import RichTextEditor from 'reactjs-tiptap-editor';
import { BaseKit } from 'reactjs-tiptap-editor';
import { Bold } from 'reactjs-tiptap-editor/bold';
import { BulletList } from 'reactjs-tiptap-editor/bulletlist';
import { OrderedList } from 'reactjs-tiptap-editor/orderedlist'; 
import { FontSize } from 'reactjs-tiptap-editor/fontsize';
import { Heading } from 'reactjs-tiptap-editor/heading'; 
import { Table } from 'reactjs-tiptap-editor/table'; 
import { Link } from 'reactjs-tiptap-editor/link'; 
import { Italic } from 'reactjs-tiptap-editor/italic'; 
import { TextUnderline } from 'reactjs-tiptap-editor/textunderline'; 
import { History } from 'reactjs-tiptap-editor/history';
import { Color } from 'reactjs-tiptap-editor/color';
import { TextAlign } from 'reactjs-tiptap-editor/textalign'; 
// import { BaseKit, Bold, BulletList, OrderedList, FontSize, Heading, Table, Link, Italic, TextUnderline, History, Color, TextAlign } from 'reactjs-tiptap-editor/extension-bundle'

// import { BaseKit } from 'reactjs-tiptap-editor/extension-bundle'; // for version 0.1.16 and lower

// Import CSS
import 'reactjs-tiptap-editor/style.css';
import './Tiptap.css'

const extensions = [
  BaseKit.configure({
    // Show placeholder
    placeholder: {  
      showOnlyCurrent: true, 
    },  

    // Character count
    characterCount: {  
      limit: 50_000,  
    },  
  }),
  History,
  Bold,
  Italic,
  TextUnderline,
  Link,
  FontSize,
  Heading,
  Table,
  BulletList,
  OrderedList,
  TextAlign,
  Color
];

export default function PrivacyPolicy({ 
  item, 
  countryArray 
}: {
  item: PrivacyPolicyItemProps; 
  countryArray: { name: string; id: number; }[]
}) {
  // const privacyData = item;
  const [isUpdatePrivacyModalOpen, setIsUpdatePrivacyModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(item.languageId !== undefined ? String(item.languageId) : undefined);
  const [content, setContent] = useState(item.contentHtml);

  const handleSelectChange = async (value: string) => {
    await setSelectedValue(value);
  };

  const onChangeContent = (value: string) => {
    setContent(value);
  };

  const saveChangesHandler = () => {
    console.log('save changes')
  };
  
  return (
    <>
      <TableRow>
        <TableCell>{item.id}</TableCell>
        <TableCell>{item.language?.name}</TableCell>
        <TableCell className="w-2/3 whitespace-normal block max-h-[150px] overflow-hidden mask-b-from-10% mask-b-to-100%">{item.contentHtml}</TableCell>
        <TableCell>
          <Button className="p-[5px] h-auto w-full" onClick={() => setIsUpdatePrivacyModalOpen(true)}>Edit</Button>
          <Dialog open={isUpdatePrivacyModalOpen} onOpenChange={setIsUpdatePrivacyModalOpen}>
            {/* <DialogContent className="min-w-full max-w-screen h-screen m-[10px]"> */}
            <DialogContent className="min-w-9/10 overflow-y-auto h-9/10">
              <DialogHeader>
                <DialogTitle>Edit privacy policy text</DialogTitle>
              </DialogHeader>

              <Select 
                onValueChange={handleSelectChange} 
                value={selectedValue !== undefined ? String(selectedValue) : undefined}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Choose country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Search Events by</SelectLabel>
                    {countryArray.map((country) => <SelectItem key={country.id} value={String(country.id)}>{country.name}</SelectItem>)}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* removeDefaultWrapper={false}
              disableBubble={true} */}
              <RichTextEditor
                output='html'
                hideToolbar={false}
                hideBubble={false}
                dense={true}
                maxHeight={'300px'}
                toolbar={{
                  // type: 'Scrollable'
                  // render: (props, toolbarItems, dom, containerDom) => {
                  //   return containerDom(dom)
                  // }
                }}
                content={content}
                onChangeContent={onChangeContent}
                extensions={extensions}
                contentClass={['editor-holder']}
              />

              <Button className="p-[7px] h-auto text-lg" onClick={() => saveChangesHandler()}>Save changes</Button>
            </DialogContent>
          </Dialog>
        </TableCell>
      </TableRow>
    </>
  );
}
