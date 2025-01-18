"use client";
import React from "react";
import SpikeUp from "@/app/icons/bitIcons/SpikeUp";
import SpikeDown from "@/app/icons/bitIcons/SpikeDown";
import { CFormatter } from "@/lib/utils";

import AnimatedNumbers from "react-animated-numbers";

function Card({
  title,
  count,
  bgColor,
  spike,
  spikePercentage,
}: {
  title: string;
  count: number;
  bgColor?: string;
  spike: string;
  spikePercentage: number;
}) {
  return (
    <div
      className={`${
        bgColor ? `${bgColor}` : "bg-[#E3F5FF]"
      } rounded-[20px] p-5`}
    >
      <div>
        <div className="text-[12px]">{title}</div>
        <div className="flex justify-between items-center mt-4">
          <div>
            {/*  {CFormatter(count)} */}
            <AnimatedNumbers
              includeComma
              className="text-[20px] font-inter font-medium"
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={count}
              fontStyle={{
                fontSize: 20,
              }}
            />
          </div>
          <div className="flex gap-1 items-center">
            <div className="text-[12px]">{spikePercentage}%</div>
            {spike === "up" ? <SpikeUp /> : <SpikeDown />}
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {};

export default Card;
