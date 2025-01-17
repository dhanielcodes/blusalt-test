import { MarketingAndSeoChart } from "@/app/charts/MarketingAndSeo.Chart";
import { ReportsGeneratedChart } from "@/app/charts/ReportsGenerated.Chart";
import { TotalUsersChart } from "@/app/charts/TotalUsers.Chart";
import { TrafficByLocationChart } from "@/app/charts/TrafficByLocation.Chart";
import { TrafficByWebsiteChart } from "@/app/charts/TrafficByWebsite.Chart";
import Card from "@/app/components/Card";
import DashboardLayout from "@/app/layouts/DashboardLayout";
import Image from "next/image";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid gap-4">
        <div className="grid grid-cols-4 gap-4">
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
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <TotalUsersChart />
          </div>
          <div className="col-span-1">
            <TrafficByWebsiteChart />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <ReportsGeneratedChart />
          </div>
          <div className="col-span-2">
            <TrafficByLocationChart />
          </div>
        </div>
        <MarketingAndSeoChart />
      </div>
    </DashboardLayout>
  );
}
