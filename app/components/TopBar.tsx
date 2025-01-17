import React from "react";

function TopBar() {
  return (
    <div className="p-6 flex justify-between items-center border-b border-[#F0ECEC] h-[9vh]">
      <div className="">
        <div className="font-[family-name:var(--font-plex-sans)] font-medium text-2xl">
          Dashboard
        </div>

        <div></div>
      </div>
    </div>
  );
}

TopBar.propTypes = {};

export default TopBar;
