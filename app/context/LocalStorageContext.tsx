"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getWithExpiry, setWithExpiry} from '../../lib/utils';

interface LocalStorageContextType {
  accessToken: string | null;
  setToken: (token: string) => void;
  getToken: () => string | null;
  removeToken: () => void;
}

const LocalStorageContext = createContext<LocalStorageContextType | undefined>(undefined);

export function LocalStorageProvider({
  children
}:{
  children: React.ReactNode
}) {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if(token) setAccessToken(token);
  }, []);

  const setToken = (token: string) => {
    if(token) {
      setWithExpiry('accessToken', token, new Date().getTime() + 3600000);
      setAccessToken(token);
    } else {
      localStorage.removeItem('accessToken');
      setAccessToken(null);
    }
  }

  const getToken = () => {
    if(typeof window !== 'undefined') {
      return getWithExpiry('accessToken');
    }

    return null;
  }

  const removeToken = () => {
    localStorage.removeItem('accessToken');
    setAccessToken(null);
  }

  return (
    <LocalStorageContext.Provider
      value={{ accessToken, setToken, getToken, removeToken }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
}

export function useLocalStorage() {
  const context = useContext(LocalStorageContext);

  if(!context) {
    throw new Error('localStorage context error');
  }

  return context;
}