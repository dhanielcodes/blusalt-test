import "@/app/globals.css";
import Navbar from "@/app/components/Navbar";
import TopBar from "@/app/components/TopBar";
import NotificationsTab from "@/app/components/NotificationsTab";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`max-w-[1440px] mx-auto grid grid-cols-12 antialiased font-inter`}
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
