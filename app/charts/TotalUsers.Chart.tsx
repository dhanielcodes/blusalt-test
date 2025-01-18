"use client"; // if you use app dir, don't forget this line

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import CharTitle from "@/app/components/CharTitle";
import PinLabel from "@/app/components/bits/PinLabel";
import { KFormatter } from "@/lib/utils";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import useScreenSize from "@/app/libs/useScreenSize";

export function TotalUsersChart() {
  const option: ApexOptions = {
    colors: ["#A8C5DA", "#1C1C1C"],

    chart: {
      height: 420,
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    yaxis: {
      min: 0,
      max: 40000,
      tickAmount: 3,
      labels: {
        formatter: function (value: any) {
          return KFormatter(value).toString();
        },
        style: {
          colors: "#1C1C1C66",
          fontSize: "12px",
        },
      },
    },
    stroke: {
      curve: "smooth",
      width: 1,
      dashArray: [5, 0],
    },
    legend: {
      show: false,
      fontSize: "60px",
      fontFamily: `Inter', sans-serif`,
    },
    labels: ["June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    /*    xaxis: {
          labels: {
            formatter: function (value) {
              return moment(value).format("dddd");
            },
          },
        }, */

    dataLabels: {
      enabled: false,
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.3, // Reduce gradient intensity
        opacityFrom: 0.3, // Lower starting opacity
        opacityTo: 0.1, // Lower ending opacity
        stops: [0, 40, 50], // Define gradient stops
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: "#1C1C1C66", // Custom color for Y-axis labels
          fontSize: "12px", // Optional: Customize font size
        },
      },
    },
    grid: {
      show: false,
    },
  };

  const series = [
    {
      name: "Previous Week",
      data: [10000, 20000, 30000, 20000, 10000, 20000, 20000],
    },
    {
      name: "Current Week",
      data: [20000, 10000, 20000, 30000, 20000, 30000, 10000],
    },
  ];
  const { width } = useScreenSize();

  return (
    <div
      style={{
        width: width < 1024 ? (width * 2) / 2.8 : "100%",
      }}
      className="bg-[#F7F9FB] rounded-[20px] pb-2 pt-4 pr-4 pl-3"
    >
      <div className="pt-3 pl-3 flex items-center space-x-4">
        <div className="flex gap-4">
          <CharTitle title="Total Users" />
          <CharTitle title="Total Projects" weight="light" />
          <CharTitle title="Operating Status" weight="light" />
        </div>
        <svg
          width="2"
          height="18"
          viewBox="0 0 2 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.78409 0.536932V17.2812H0.789773V0.536932H1.78409Z"
            fill="#1C1C1C"
            fill-opacity="0.2"
          />
        </svg>
        <div className="flex gap-4">
          <PinLabel title="This year" color="#1C1C1C" />
          <PinLabel title="Last year" color="#A8C5DA" />
        </div>
      </div>
      <ApexChart
        options={option}
        type="area"
        series={series}
        width="100%"
        height="250"
      />
    </div>
  );
}
