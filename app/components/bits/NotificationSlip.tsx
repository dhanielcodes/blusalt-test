import React from "react";

interface Props {
  message?: string;
  time?: string;
  icon?: React.ReactNode;
}

function NotificationSlip({
  message = "You fixed a bug",
  time = "Just now",
  icon,
}: Props) {
  return (
    <div className="flex gap-2 mb-8">
      {icon}{" "}
      <div>
        <div className="text-sm text-[#1C1C1C]">{message}</div>
        <div className="text-xs text-[#1C1C1C66]">{time}</div>
      </div>
    </div>
  );
}

NotificationSlip.propTypes = {};

export default NotificationSlip;
