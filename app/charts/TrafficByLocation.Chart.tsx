"use client"; // if you use app dir, don't forget this line

import CharTitle from "@/app/components/CharTitle";
import { ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import PinLabel from "@/app/components/bits/PinLabel";
import useScreenSize from "@/app/libs/useScreenSize";

ChartJS.register(ArcElement, Tooltip, Legend);

export function TrafficByLocationChart() {
  const data = {
    labels: ["Nigeria", "Ghana", "Kenya", "Benin Republic"],
    datasets: [
      {
        data: [50, 20, 15, 10],
        backgroundColor: ["#1C1C1C", "#B1E3FF", "#A1E3CB", "#A8C5DA"], // Segment colors
        borderRadius: 6,
        borderWidth: 2, // Border width
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    cutout: "50%",
    responsive: false,
    maintainAspectRatio: false,

    // maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "right",
        // onClick: null,
      },
    },
  };

  const doughnutLabel = {
    id: "doughnutLabel",
    afterDatasetsDraw: () => {},
  };

  const { width } = useScreenSize();

  return (
    <div
      style={{
        width: width < 1024 ? (width * 2) / 2.8 : "100%",
      }}
      className="bg-[#F7F9FB] rounded-[20px] p-5 h-full"
    >
      <CharTitle title="Traffic by Location" />
      <div className="grid md:grid-cols-2 gap-4 h-full">
        <div className="grid place-items-center">
          <Doughnut
            data={data}
            options={options}
            plugins={[doughnutLabel]}
            width={140}
            height={140}
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <Labels
            labels={data.labels}
            data={data.datasets[0].data}
            colors={data.datasets[0].backgroundColor}
          />
        </div>
      </div>
    </div>
  );
}

const Labels = ({
  labels,
  data,
  colors,
}: {
  labels: Array<string>;
  data: Array<number>;
  colors: Array<string>;
}) => {
  return (
    <div className="w-full space-y-4">
      {labels?.map((item, index) => {
        return (
          <div
            key={index}
            className="flex w-full items-center justify-between text-sm "
          >
            <PinLabel title={item} color={colors[index]} />
            <div>{data[index]}</div>
          </div>
        );
      })}
    </div>
  );
};
