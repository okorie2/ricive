import Image from "next/image";
import React from "react";
import search from "public/assets/svgs/search.svg";

const Search = () => {
  return (
    <div>
      {" "}
      <div className="search-box border border-solid border-faded-gray flex items-center gap-[4%] text-lighter-gray  rounded-lg pl-2 mb-[7%] shadow-search-shadow">
        <div className="">
          <Image src={search} alt="search" className="object-cover" />
        </div>
        <div className="w-full  ">
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent p-[1%] h-10 w-full rounded-lg "
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Search;
