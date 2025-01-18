import "@/app/globals.css";
import Navbar from "@/app/components/Navbar";
import NavbarMobile from "@/app/components/NavbarMobile";
import TopBar from "@/app/components/TopBar";
import NotificationsTab from "@/app/components/NotificationsTab";
import useScreenSize from "@/app/libs/useScreenSize";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { width } = useScreenSize();
  return (
    <div
      style={{
        width: `${width}px`,
      }}
      className={`max-w-[1440px] mx-auto grid md:grid-cols-[240px_1fr] grid-cols-[100px_1fr] antialiased font-inter`}
    >
      <div className="w-full hidden md:block">
        <Navbar />
      </div>
      <div className="w-full block md:hidden">
        <NavbarMobile />
      </div>
      <div className="w-full">
        <div>
          <TopBar />
        </div>
        <div className="grid lg:grid-cols-[1fr_300px] w-full">
          <div className="p-6 pr-2 w-full h-[91vh] overflow-hidden overflow-y-scroll">
            {children}
          </div>
          <div className="lg:block hidden w-full p-6 pl-2 ">
            <NotificationsTab />
          </div>
        </div>
      </div>
    </div>
  );
}
