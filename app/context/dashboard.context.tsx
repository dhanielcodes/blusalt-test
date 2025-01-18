"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ContextType } from "@/app/types/NavDataTypes";

const DashboardContext = createContext<ContextType | null>(null);
interface ContextTypeInterface {
  children: React.ReactNode;
}

export const DashboardProvider = ({ children }: ContextTypeInterface) => {
  const [navState, setNavState] = useState<string>("web");

  const toggleNavState = () => {
    if (navState == "web") {
      setNavState("mobile");
    } else {
      setNavState("web");
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        setNavState,
        navState,
        toggleNavState,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
