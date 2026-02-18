import { SidebarMenuDataDto } from '@/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SidebarMenuItems from "./sidebar-menu-items";
import { useSidebarContext } from "@context/SidebarContext";
import { useEffect, useState } from 'react';

type sidebarProps = {
  items: SidebarMenuDataDto[];
};

const SidebarMenu = ({items}: sidebarProps) => {
  const { activeItemName } = useSidebarContext();
  const [ value, setValue] = useState<string>('');

  useEffect(() => {
    setValue(activeItemName ? activeItemName : 'home');
  }, [activeItemName])

  return (
    <Accordion type="single" collapsible value={value} onValueChange={(value) => setValue(value)}>
      {items.map(item => (
        <AccordionItem key={item.value} value={item.value} className='border-transparent px-[10px]'>
          <AccordionTrigger className='p-2 font-[400] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:no-underline'>
            <span className='flex items-center'>{item.icon && <span className="inline-block pr-[5px]"><item.icon /></span>}{item.title}</span>
          </AccordionTrigger>
          <AccordionContent>
            <SidebarMenuItems items={item.items ?? []}></SidebarMenuItems>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default SidebarMenu;
