"use client"; // if you use app dir, don't forget this line

import CharTitle from "@/app/components/CharTitle";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export function TrafficByWebsiteChart() {
  const labels = [
    "Google",
    "YouTube",
    "Instagram",
    "Pinterest",
    "Facebook",
    "Twitter",
  ];
  return (
    <div className="bg-[#F7F9FB] rounded-[20px] p-5 h-full">
      <CharTitle title="Traffic by Website" />
      <Labels labels={labels} data={[1, 4, 5, 6, 8, 8]} />
    </div>
  );
}

const Labels = ({
  labels,
  data,
}: {
  labels: Array<string>;
  data: Array<number>;
}) => {
  return (
    <div className="w-full mt-5 space-y-6">
      {labels?.map((item, index) => {
        return (
          <div
            key={index}
            className="flex w-full items-center justify-between text-sm "
          >
            <div>{item}</div>

            <div>{data[index]}</div>
          </div>
        );
      })}
    </div>
  );
};
