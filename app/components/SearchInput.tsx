import { Search } from "lucide-react";
import React from "react";

function SearchInput() {
  return (
    <div className="w-[200px] rounded-xl bg-[#1C1C1C0D] px-[12px] py-[6px] flex items-center gap-2">
      <Search size={18} color="#1C1C1C33" />{" "}
      <input
        className="w-full appearance-none rounded-xl outline-none border-none bg-transparent text-base placeholder:text-[#a4acb9] placeholder:text-base"
        type={"text"}
        placeholder={"Search                ⌘/"}
      />{" "}
    </div>
  );
}

export default SearchInput;
