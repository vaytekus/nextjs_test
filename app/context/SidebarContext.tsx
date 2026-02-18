"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface SidebarContextType {
  activeItemName: string | null;
  setSidebarActiveName: (name: string) => void;
  removeSidebarActiveName: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({
  children
}:{
  children: React.ReactNode
}) {
  const [activeItemName, setActiveItemName] = useState<string | null>(null);
  const path = usePathname();

  useEffect(() => {
    const activeName = path.split('/').filter((el) => el !== '')[0];
    setActiveItemName(activeName);
  }, [path]);

  const setSidebarActiveName = (name: string) => setActiveItemName(name ? name : null);
  const removeSidebarActiveName = () => setActiveItemName(null);

  return (
    <SidebarContext.Provider
      value={{ activeItemName, setSidebarActiveName, removeSidebarActiveName }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  const context = useContext(SidebarContext);

  if(!context) {
    throw new Error('Sidebar context error');
  }

  return context;
}