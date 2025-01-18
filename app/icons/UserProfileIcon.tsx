import React from "react";
import Image from "next/image";

function UserProfileIcon() {
  return (
    <Image
      width={30}
      height={30}
      alt="profile"
      className="object-cover rounded-full"
      src="/icons/UserIcon.png"
    />
  );
}
export default UserProfileIcon;
