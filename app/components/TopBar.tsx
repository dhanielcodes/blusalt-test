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

  const [data, setData] = useState("New Data");

  return (
    <div className="p-6 flex justify-between items-center border-b border-[#F0ECEC] h-[9vh]">
      <div className="flex justify-between items-center w-full">
        <div className="font-ibm-plex-sans font-medium text-2xl">Dashboard</div>

        {data}
        <div className="flex gap-6 items-center">
          <SearchInput />
          <Sun size={18} />
          <Clock size={18} />
          <Bell size={18} />

          <Sidebar
            onClick={() => {
              setData("Changed Data");
              console.log(data);
              toggleNavState && toggleNavState();
            }}
            size={18}
          />
        </div>
      </div>
    </div>
  );
}

TopBar.propTypes = {};

export default TopBar;
