import React from "react";
import Logo from "@/app/icons/Logo";
import NavItem from "@/app/components/bits/NavItem";
import { NavDataInterface } from "@/app/types/NavDataTypes";
import { NavData, NavData2, NavData3, NavData4 } from "@/app/libs/NavData";

function Navbar() {
  return (
    <div className="p-6  border-r border-[#F0ECEC] h-screen overflow-hidden overflow-y-scroll">
      <div className="w-full">
        <Logo />
      </div>
      <div className="mt-10 px-4 pb-4 border-b border-[#F0ECEC]">
        {NavData.map((item: NavDataInterface, index: number) => {
          return <NavItem key={index} {...item} />;
        })}
      </div>
      <div className="mt-4 px-4 pb-4 border-b border-[#F0ECEC]">
        {NavData2.map((item: NavDataInterface, index: number) => {
          return <NavItem key={index} {...item} />;
        })}
      </div>
      <div className="mt-4 px-4 pb-4 border-b border-[#F0ECEC]">
        {NavData3.map((item: NavDataInterface, index: number) => {
          return <NavItem key={index} {...item} />;
        })}
      </div>
      <div className="mt-4 px-4 pb-4">
        {NavData4.map((item: NavDataInterface, index: number) => {
          return <NavItem key={index} {...item} />;
        })}
      </div>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
