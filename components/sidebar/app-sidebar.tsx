"use client"

import * as React from "react"
import {
  Bot,
  Map,
  Drum,
  Ticket,
  CalendarSearch,
  SquareTerminal,
  UsersRound,
  Cuboid
} from "lucide-react"

import SidebarMenu from './sidebar-menu';
import { NavUser } from "@/components/sidebar/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: 'Home',
      icon: SquareTerminal,
      value: 'home',
      items: [
        {
          title: 'Dashboard',
          url: '/'
        }
      ]
    },
    {
      title: 'Order Management',
      icon: Bot,
      value: 'orders',
      items: [
        {
          title: 'Orders',
          url: '/orders'
        },
        {
          title: 'Discount Code',
          url: '/orders/discountCode'
        },
        {
          title: 'Refferer Code',
          url: '/orders/reffererCode'
        }
      ]
    },
    {
      title: 'Event Management',
      icon: CalendarSearch,
      value: 'events',
      items: [
        {
          title: 'Events',
          url: '/events'
        },
        {
          title: 'Event Details',
          url: '/events/eventdetails'
        }
      ]
    },
    {
      title: 'Maps Management',
      icon: Map,
      value: 'maps',
      items: [
        {
          title: 'Maps list',
          url: '/maps'
        }
      ]
    },
    {
      title: 'Performers',
      icon: Drum,
      value: 'performers',
      items: [
        {
          title: 'Performers list',
          url: '/performers'
        }
      ]
    },
    {
      title: 'Listing Management',
      icon: Ticket,
      value: 'listings',
      items: [
        {
          title: 'Listings',
          url: '/listings'
        },
        {
          title: 'Invalid Listings',
          url: '/listings/invalidlistings'
        }
      ]
    },
    {
      title: 'User Management',
      icon: UsersRound,
      value: 'users',
      items: [
        {
          title: 'Users',
          url: '/users'
        },
        {
          title: 'Roles',
          url: '/users/roles'
        },
        {
          title: 'User Role',
          url: '/users/userRole'
        }
      ]
    },
    {
      title: 'Static Content',
      icon: Cuboid,
      value: 'staticContent',
      items: [
        {
          title: 'Privacy Policy',
          url: '/staticContent/privacyPolicy'
        }
      ]
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex h-16 justify-center gap-2 ">
        StageGo Admin
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu items={data.navMain}></SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
