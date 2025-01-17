import React from "react";

function Card({ bgColor }: { bgColor?: string }) {
  return (
    <div
      className={`${
        bgColor ? `${bgColor}` : "bg-[#E3F5FF]"
      } rounded-[20px] p-5`}
    >
      <div>
        <div className="text-[12px]">Requests</div>
        <div className="text-[18px] font-medium mt-4">7,800</div>
      </div>
    </div>
  );
}

Card.propTypes = {};

export default Card;
