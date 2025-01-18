"use client";
import { Bell, Clock, Sidebar, Sun } from "lucide-react";
import React, { useContext, useState } from "react";
import SearchInput from "@/app/components/SearchInput";
import DashboardContext from "../context/dashboard.context";
import { ContextType } from "@/app/types/NavDataTypes";

function TopBar() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("DashboardContext is null");
  }
  const { toggleNavState }: ContextType = context;

  return (
    <div className="p-6 w-full flex justify-between items-center border-b border-[#F0ECEC] md:h-[9vh]">
      <div className="flex md:flex-row flex-col-reverse gap-4 justify-between md:items-center w-full">
        <div className="font-ibm-plex-sans font-medium text-2xl">Dashboard</div>
        <div className="flex gap-6 items-center">
          <SearchInput />
          <div className="md:flex gap-6 items-center hidden">
            <Sun size={18} />
            <Clock size={18} />
            <Bell size={18} />

            <Sidebar
              onClick={() => {
                toggleNavState && toggleNavState();
              }}
              size={18}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

TopBar.propTypes = {};

export default TopBar;
