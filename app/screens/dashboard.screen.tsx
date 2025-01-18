import { MarketingAndSeoChart } from "@/app/charts/MarketingAndSeo.Chart";
import { ReportsGeneratedChart } from "@/app/charts/ReportsGenerated.Chart";
import { TotalUsersChart } from "@/app/charts/TotalUsers.Chart";
import { TrafficByLocationChart } from "@/app/charts/TrafficByLocation.Chart";
import { TrafficByWebsiteChart } from "@/app/charts/TrafficByWebsite.Chart";
import Card from "@/app/components/Card";
import DashboardLayout from "@/app/layouts/DashboardLayout";
import Image from "next/image";
import useScreenSize from "@/app/libs/useScreenSize";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DashboardScreen() {
  const { width } = useScreenSize();
  const sWidth = (width * 2) / 2.8;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <DashboardLayout>
      <motion.div
        animate={{
          opacity: loading ? 0 : 1,
          transform: loading ? "translateY(10%)" : "translateY(0%)",
          type: "spring",
        }}
        className="grid gap-4 w-full"
      >
        <div
          style={{
            width: width < 1024 ? sWidth + "px" : "100%",
          }}
          className="grid lg2:grid-cols-4 lg:grid-cols-2 gap-4  w-full"
        >
          <Card count={7265} title="Requests" spike="up" spikePercentage={20} />
          <Card
            count={3671}
            title="KYC"
            bgColor="bg-[#E5ECF6]"
            spike="down"
            spikePercentage={-10}
          />
          <Card count={156} title="Tasks" spike="up" spikePercentage={36} />
          <Card
            count={2318}
            title="Customers"
            bgColor="bg-[#E5ECF6]"
            spike="down"
            spikePercentage={-4}
          />
        </div>
        <div className="grid lg2:grid-cols-4 gap-4 w-full">
          <div className="col-span-3 w-full">
            <TotalUsersChart />
          </div>
          <div className="lg2:col-span-1 col-span-3 w-full">
            <TrafficByWebsiteChart />
          </div>
        </div>
        <div className="grid lg2:grid-cols-4 gap-4 w-full">
          <div className="col-span-2  w-full">
            <ReportsGeneratedChart />
          </div>
          <div className="col-span-2 w-full">
            <TrafficByLocationChart />
          </div>
        </div>
        <MarketingAndSeoChart />
      </motion.div>
    </DashboardLayout>
  );
}
