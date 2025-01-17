import "@/app/globals.css";
import Navbar from "@/app/components/Navbar";
import { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import TopBar from "@/app/components/TopBar";

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
      className={`${inter.variable} ${plex.variable} grid grid-cols-12 antialiased font-[family-name:var(--font-inter)]`}
    >
      <div className="col-span-2">
        <Navbar />
      </div>
      <div className="col-span-10">
        <div>
          <TopBar />
        </div>
        <div className="grid grid-cols-10">
          <div className="p-6 pr-2 col-span-7">{children}</div>
          <div className="p-6 pl-2 col-span-3">
            <div className=" bg-[#FFF8F8] rounded-2xl p-8 ">Trans</div>
          </div>
        </div>
      </div>
    </div>
  );
}
