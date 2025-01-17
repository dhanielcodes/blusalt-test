import Image, { ImageProps } from "next/image";
import React from "react";

function AvatarIcon({ showChainLine = true }: { showChainLine?: boolean }) {
  return (
    <div className="relative">
      <Image
        width={30}
        height={30}
        alt="av"
        className="object-cover rounded-full"
        src="/icons/AvatarIcon.png"
      />
      {showChainLine && (
        <svg
          width="1"
          height="19"
          viewBox="0 0 1 19"
          className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5V17.75C1 18.0261 0.776142 18.25 0.5 18.25C0.223858 18.25 0 18.0261 0 17.75V0.5Z"
            fill="#1C1C1C"
            fill-opacity="0.1"
          />
        </svg>
      )}
    </div>
  );
}

AvatarIcon.propTypes = {};

export default AvatarIcon;
