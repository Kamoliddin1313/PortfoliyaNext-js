"use client";

import { SearchIcon } from "@/assets/icons/Icons";
import { useState } from "react";
import Tab1 from "./marketPlaceTabs/Tab1";
import Tab2 from "./marketPlaceTabs/Tab2";

function Page() {
  const [tab, setTab] = useState(1);

  return (
    <div>
      <div className="px-[115px] max-w-[1280px] mx-auto py-20 sm:py-10 lg:px-[72px] sm:px-[30px]">
        <h1 className="text-51px font-work-sans font-semibold lg:text-38px sm:text-28px text-color-white">
          Browse Marketplace
        </h1>

        <p className="mt-2.5 text-22px font-work-sans text-color-white lg:text-16px">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>

        <form className="relative mt-[30px]">
          <input
            type="text"
            placeholder="Search your favourite NFTs"
            className="w-full bg-transparent  px-5 py-[19px] pr-[70px] border-[1px] rounded-[20px] text-color-info border-color-grey outline-0"
          />
          <SearchIcon className="absolute right-5	top-5" />
        </form>
      </div>

      <div className="h-[1px] bg-color-grey"></div>

      <div className="px-[115px] max-w-[1280px] mx-auto flex gap-5 items-center justify-between lg:px-[72px] sm:px-[30px]">
        <button
          onClick={() => setTab(1)}
          className={`flex items-center mt-2.5 w-full
           justify-center gap-4 h-[60px] border-color-info
            ${tab === 1 && `border-b-[2px] text-color-white`}`}
        >
          <span
            className={`text-22px lg:text-16px 
          font-work-sans font-semibold text-color-info 
          ${tab === 1 && `text-color-white`}`}
          >
            NFTs
          </span>
          <span className="py-[5px] px-2.5 bg-color-info sm:hidden text-color-white rounded-[20px] text-16px font-space-mono">
            302
          </span>
        </button>

        <button
          onClick={() => setTab(2)}
          className={`flex items-center mt-2.5 w-full
           justify-center gap-4 h-[60px] border-color-info
            ${tab === 2 && `border-b-[2px]`}`}
        >
          <span
            className={`text-22px lg:text-16px 
          font-work-sans font-semibold text-color-info 
          ${tab === 2 && `text-color-white`}`}
          >
            Collections
          </span>
          <span className="py-[5px] px-2.5 bg-color-info sm:hidden text-color-white rounded-[20px] text-16px font-space-mono">
            67
          </span>
        </button>
      </div>

      <div className="bg-color-grey">
        {tab === 1 && <Tab1 />}
        {tab === 2 && <Tab2 />}
      </div>
    </div>
  );
}

export default Page;
