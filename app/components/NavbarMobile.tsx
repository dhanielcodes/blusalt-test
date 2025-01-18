import React from "react";
import NavItem from "@/app/components/bits/NavItem";
import { NavDataInterface } from "@/app/types/NavDataTypes";
import { NavData, NavData2, NavData3, NavData4 } from "@/app/libs/NavData";
import LogoMain from "@/app/icons/LogoMain";

function NavbarMobile() {
  return (
    <div className="p-6 border-r border-[#F0ECEC] h-screen overflow-hidden overflow-y-scroll">
      <div className="w-full flex items-center justify-center">
        <LogoMain />
      </div>
      <div className="mt-10 border-b border-[#F0ECEC]">
        {NavData.map((item: NavDataInterface, index: number) => {
          return <NavItem key={index} {...item} showName={false} />;
        })}
      </div>
      <div className="mt-4 border-b border-[#F0ECEC]">
        {NavData2.map((item: NavDataInterface, index: number) => {
          return <NavItem key={index} {...item} showName={false} />;
        })}
      </div>
      <div className="mt-4 border-b border-[#F0ECEC]">
        {NavData3.map((item: NavDataInterface, index: number) => {
          return <NavItem key={index} {...item} showName={false} />;
        })}
      </div>
      <div className="mt-4 ">
        {NavData4.map((item: NavDataInterface, index: number) => {
          return <NavItem key={index} {...item} showName={false} />;
        })}
      </div>
    </div>
  );
}

NavbarMobile.propTypes = {};

export default NavbarMobile;
