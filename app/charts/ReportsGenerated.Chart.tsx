"use client"; // if you use app dir, don't forget this line

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import CharTitle from "@/app/components/CharTitle";
import { KFormatter } from "@/lib/utils";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function ReportsGeneratedChart() {
  const option: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["#95A4FC", "#BAEDBD", "#1C1C1C", "#B1E3FF", "#A8C5DA", "#A1E3CB"],
    plotOptions: {
      bar: {
        columnWidth: "50%",
        borderRadius: 8,
        distributed: true,
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
    },
    legend: {
      show: false,
      fontSize: "60px",
      fontFamily: `Inter', sans-serif`,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: "#1C1C1C66",
          fontSize: "12px",
        },
      },
    },
    grid: {
      show: false,
    },
  };

  const series = [
    {
      name: "Month",
      data: [10000, 20000, 30000, 20000, 30000, 10000],
    },
  ];

  return (
    <div className="bg-[#F7F9FB] rounded-[20px] pb-1 pt-3 pr-3 pl-2">
      <div className="pt-3 pl-3">
        <CharTitle title="Reports Generated" />
      </div>
      <ApexChart
        options={option}
        type="bar"
        series={series}
        width="100%"
        height="220"
      />
    </div>
  );
}
