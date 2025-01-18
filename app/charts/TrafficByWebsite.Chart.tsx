"use client"; // if you use app dir, don't forget this line

import CharTitle from "@/app/components/CharTitle";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import useScreenSize from "@/app/libs/useScreenSize";

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
  const { width } = useScreenSize();

  return (
    <div className="bg-[#F7F9FB] rounded-[20px] p-5 h-full w-full">
      <CharTitle title="Traffic by Website" />
      <Labels labels={labels} data={[1, 4, 5, 2, 3, 4]} />
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
          <div key={index} className="flex w-full items-center text-sm ">
            <div className="w-1/2">{item}</div>

            <div className="flex w-1/2 space-x-1 ">
              {Array(data[index])
                .fill(undefined)
                ?.map(() => {
                  return (
                    <svg
                      width="10"
                      height="3"
                      viewBox="0 0 10 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 1.16667C0 0.522334 0.522334 0 1.16667 0H8.54762C9.19195 0 9.71429 0.522334 9.71429 1.16667C9.71429 1.811 9.19195 2.33333 8.54762 2.33333H1.16667C0.522333 2.33333 0 1.811 0 1.16667Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
