import { LucideIcon } from "lucide-react";

export type SidebarMenuItemDataDto = {
  title: string;
  url: string;
}

export type SidebarMenuDataDto = {
  title: string;
  icon: LucideIcon;
  value: string;
  items?: Array<SidebarMenuItemDataDto>
}

export type EventItemProps = {
  id?: number;
  name?: string;
  status?: string;
  venue?: { name?: string };
  category?: { id?: number; name?: string };
  updateDate?: string;
};

export type AllEventsProps = {
  data?: EventItemProps[];
  pagination?: {
    currentPage?: number;
    nextPage?: number;
    prevPage?: number;
    totalPages?: number;
    totalRecords?: number;
  };
};

export type AllEventDetailsProps = {
  data?: EventsDetailsItemProp[];
  pagination?: {
    currentPage?: number;
    nextPage?: number;
    prevPage?: number;
    totalPages?: number;
    totalRecords?: number;
  };
};

export type AllUsersProps = {
  data?: UserItemProps[];
  pagination?: {
    currentPage?: number;
    nextPage?: number;
    prevPage?: number;
    totalPages?: number;
    totalRecords?: number;
  };
};

export type EventProps = {
  items: EventItemProps[];
  size?: number;
  num?: number;
};

export type UserAuthTypes = {
  email: string;
  password: string;
};

export type EventsDetailsItemProp = {
  id?: number;
  stock?: number;
  sold?: number;
  link?: string;
  performerName?: string;
  description?: string | null;
  dateTimeUTC?: string;
  venueName?: string;
  city?: string;
  cityId?: number;
  mockData?: unknown;
  startDateTime: string;
};

export type AvailableSeats = {
  seatId?: number;
  name?: number;
}

export type ListingsDetailsProp = {
  id?: string;
  sellerName?: string;
  sellerId?: number;
  seller?: { name?: string };
  section?: string;
  row?: string;
  seats?: AvailableSeats[];
  availableSeatNumbers?: string;
  faceValue?: number;
  ticketPrice?: number;
  status?: string | number;
  score?: { dealScore?: number };
  dealScore?: number;
  errorDescription?: string;
  errorType?: string;
  ticketType?: string;
  sellType?: string;
  numberOfTicketsAreSold?: number;
  numberOfReservedTickets?: number;
  numberOfTickets?: number;
  sellerListingId?: string | number;
}

export type OrdersDetailsProp = {
  id?: number | string;
  createDate?: string;
  section?: string;
  row?: string;
  availableSeats?: string;
  seller?: string;
  buyer?: string;
  totalAmount?: number | string;
  profit?: number | string;
  currency?: { symbol?: string } | null;
}

export type PerformerProps = {
  altNames?: string;
  comment?: null;
  createDate?: string;
  createdBy?: null;
  dataImportHistoryId?: null;
  dealsCount?: number;
  defaultImageUrlIfImageCommentDoesNotExist?: string;
  description?: string;
  id?: number;
  imageCopyright?: string;
  imageSourceUrl?: null
  imageUrl?: string;
  isDeleted?: boolean;
  isDraft?: boolean;
  isManuallyAdjustedImage?: boolean;
  isPerformer?: true
  isVisible?: boolean;
  name?: string;
  orderId?: number;
  originalImageUrl?: string;
  parentCategoryId?: number;
  streamId?: string;
  updateDate?: string;
  updatedBy?: number;
  url?: null
  visitedUsersCount?: number;
}

export type EventDetailsProp = {
  id?: any;
  searchParams?: any;
}

export type PagingDataProps = {
  num?: string;
  size?: string;
}

export type PagingData = {
  pageNum?: number | string | null;
  pageSize?: number | string | null;
}

export type pagingParamsProps = {
  pagingData?: PagingData;
}

export type UserItemProps = {
  id?: string;
  name?: string;
  surname?: string;
  email?: string;
  emailConfirmed?: boolean;
  twoFactorEnabled?: boolean;
  statusId?: number;
}

export type ListingItemProps = {
  id: number;
  section: string;
  row: string | null;
  faceValue: number;
  ticketPrice: number;
  status: string;
  event: {
    name: string;
    startDateTime: string;
    venueId: number;
  };
}

export type PrivacyPolicyItemProps = {
  contentHtml: string;
  languageId: number;
  id: number;
  createDate: string;
  updateDate: string;
  createdBy?: number | null;
  updatedBy?: number | null;
  streamId: string;
  language: {
    name: string;
    nativeName: string;
    streamId: string;
  };
}

export type PrivacyPolicyProps = {
  data: PrivacyPolicyItemProps[];
}

export type DiscountCodeProps = {
  id: number;
  code: string;
  type: string;
  value: number;
  isActive: boolean;
  expDate: string;
  prefix?: string;
}

export type DiscountCodePopupProps = {
  item?: DiscountCodeProps;
  type: 'create' | 'edit';
  className?: string;
}

export type RolesProps = {
  id?: number;
  createDate?: string;
  updateDate?: string;
  createdBy?: number | null;
  updatedBy?: number | null;
  name?: string;
  normalizedName?: string;
  concurrencyStamp?: string;
}

export type UserRoleItem = {
  id: number;
  userId: number;
  roleId: number;
};

export type UserRolesProps = {
  id?: number;
  createDate?: string;
  updateDate?: string;
  createdBy?: number | null;
  updatedBy?: number | null;
  name?: string;
  email?: string;
  normalizedName?: string;
  concurrencyStamp?: string;
  userRoles?: UserRoleItem[];
}