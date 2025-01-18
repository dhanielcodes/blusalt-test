import { Bell, Clock, Sidebar, Sun } from "lucide-react";
import React from "react";
import SearchInput from "@/app/components/SearchInput";

function TopBar() {
  return (
    <div className="p-6 flex justify-between items-center border-b border-[#F0ECEC] h-[9vh]">
      <div className="flex justify-between items-center w-full">
        <div className="font-ibm-plex-sans font-medium text-2xl">Dashboard</div>

        <div className="flex gap-6 items-center">
          <SearchInput />
          <Sun size={18} />
          <Clock size={18} />
          <Bell size={18} />
          <Sidebar size={18} />
        </div>
      </div>
    </div>
  );
}

TopBar.propTypes = {};

export default TopBar;
