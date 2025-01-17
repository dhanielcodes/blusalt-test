import "@/app/globals.css";
import Navbar from "@/app/components/Navbar";
import { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import TopBar from "@/app/components/TopBar";
import NotificationsTab from "@/app/components/NotificationsTab";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const plex = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${inter.variable} ${plex.variable} max-w-[1500px] mx-auto grid grid-cols-12 antialiased inter_font`}
    >
      <div className="col-span-2">
        <Navbar />
      </div>
      <div className="col-span-10">
        <div>
          <TopBar />
        </div>
        <div className="grid grid-cols-10">
          <div className="p-6 pr-2 col-span-7 h-[91vh] overflow-hidden overflow-y-scroll">
            {children}
          </div>
          <div className="p-6 pl-2 col-span-3">
            <NotificationsTab />
          </div>
        </div>
      </div>
    </div>
  );
}
