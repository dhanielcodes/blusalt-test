import "@/app/globals.css";
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import TopBar from "@/app/components/TopBar";
import NotificationsTab from "@/app/components/NotificationsTab";
import { useContext, useState } from "react";
import DashboardContext from "@/app/context/dashboard.context";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { navState }: any = useContext(DashboardContext);
  return (
    <div
      className={`max-w-[1440px] mx-auto grid ${
        navState === "web" ? "grid-cols-[240px_1fr]" : "grid-cols-[100px_1fr]"
      } antialiased font-inter`}
    >
      <div className="">
        {navState === "web" ? <Navbar /> : <NavbarMobile />}
      </div>
      <div className="">
        <div>
          <TopBar />
        </div>
        <div className="grid grid-cols-[1fr_300px]">
          <div className="p-6 pr-2  h-[91vh] overflow-hidden overflow-y-scroll">
            {children}
          </div>
          <div className="p-6 pl-2 ">
            <NotificationsTab />
          </div>
        </div>
      </div>
    </div>
  );
}
