import React from "react";
import Logo from "@/app/icons/Logo";
import NavItem from "@/app/components/bits/NavItem";
import { NavDataInterface } from "@/app/types/NavDataTypes";
import { NavData, NavData2 } from "@/app/libs/NavData";

function Navbar() {
  return (
    <div className="p-6  border-r border-[#F0ECEC] h-screen">
      <div className="w-full">
        <Logo />
      </div>
      <div className="mt-10 px-4 pb-4 border-b border-[#F0ECEC]">
        {NavData.map((item: NavDataInterface) => {
          return <NavItem {...item} />;
        })}
      </div>
      <div className="mt-4 px-4 pb-4 border-b border-[#F0ECEC]">
        {NavData2.map((item: NavDataInterface) => {
          return <NavItem {...item} />;
        })}
      </div>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
