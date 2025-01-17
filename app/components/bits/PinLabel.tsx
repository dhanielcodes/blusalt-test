import React from "react";

const PinLabel = ({ title, color }: { title: string; color: string }) => {
  return (
    <div className="flex items-center">
      <svg
        className="w-2 h-2 mr-1 rounded-full"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="15.5585" height="16.7553" rx="2.39362" fill={color} />
      </svg>
      <div className="text-[12px]">{title}</div>
    </div>
  );
};

export default PinLabel;
