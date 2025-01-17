import React from "react";

function CharTitle({
  title,
  weight = "bold",
}: {
  title: string;
  weight?: string;
}) {
  return <div className={`inter_font text-[14px] font-${weight}`}>{title}</div>;
}

CharTitle.propTypes = {};

export default CharTitle;
