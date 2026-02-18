import Link from "next/link";
import { SidebarMenuItemDataDto } from '@/types';

type sidebarItemsProps = {
  items: SidebarMenuItemDataDto[];
};

const SidebarMenu = ({items}: sidebarItemsProps) => {
  return (
    <ul className="border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5">
      {items.map((item, index) => (
        <li className="px-[5px] py-[2px] hover:text-black/50 hover:underline cursor-pointer" key={`${item.title}-${index}`}>
          <Link className="block" href={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarMenu;
