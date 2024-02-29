"use client";

import { useState } from "react";
import RankingsTab1 from "./RankingsTab1";
import RankingsTab2 from "./RankingsTab2";
import RankingsTab3 from "./RankingsTab3";
import RankingsTab4 from "./RankingsTab4";

function Page() {
  const [tab, setTab] = useState(1);

  return (
    <div className="py-20 mx-auto max-w-[1280px] lg:py-10 px-[115px] w-full lg:px-[72px] sm:px-[30px] sm:pt-[30px]">
      <h1 className="text-51px font-work-sans font-semibold sm:text-28px lg:text-38px text-color-white">
        Top Creators
      </h1>

      <p className="mt-5 text-22px font-work-sans sm:mt-2.5 text-color-white lg:text-16px">
        Check out top ranking NFT artists on the NFT Marketplace.
      </p>

      <div className="flex gap-5 mt-20 mb-10 sm:hidden lg:mt-10 items-center justify-between">
        <button
          onClick={() => setTab(1)}
          className={`flex items-center mt-2.5 lg:mt-0 
          w-full justify-center gap-4 h-[60px] border-color-info 
          ${tab === 1 && `border-b-[2px]`}`}
        >
          <span
            className={`text-22px lg:text-16px font-work-sans
           font-semibold text-color-info ${tab === 1 && `text-color-white`}`}
          >
            Today
          </span>
        </button>

        <button
          onClick={() => setTab(2)}
          className={`flex items-center mt-2.5 lg:mt-0 
          w-full justify-center gap-4 h-[60px] border-color-info 
          ${tab === 2 && `border-b-[2px]`}`}
        >
          <span
            className={`text-22px lg:text-16px font-work-sans
           font-semibold text-color-info ${tab === 2 && `text-color-white`}`}
          >
            This Week
          </span>
        </button>

        <button
          onClick={() => setTab(3)}
          className={`flex items-center mt-2.5 lg:mt-0 
          w-full justify-center gap-4 h-[60px] border-color-info 
          ${tab === 3 && `border-b-[2px]`}`}
        >
          <span
            className={`text-22px lg:text-16px font-work-sans
           font-semibold text-color-info ${tab === 3 && `text-color-white`}`}
          >
            This Month
          </span>
        </button>

        <button
          onClick={() => setTab(4)}
          className={`flex items-center mt-2.5 lg:mt-0 
          w-full justify-center gap-4 h-[60px] border-color-info 
          ${tab === 4 && `border-b-[2px]`}`}
        >
          <span
            className={`text-22px lg:text-16px font-work-sans
           font-semibold text-color-info ${tab === 4 && `text-color-white`}`}
          >
            All Time
          </span>
        </button>
      </div>

      <div className="hidden sm:flex gap-5 mt-20 sm:my-[30px] mb-10 sm:block items-center justify-between">
        <button
          onClick={() => setTab(1)}
          className="flex items-center mt-2.5 sm:m-0 w-full justify-center gap-4 h-[60px]  active:border-b-[2px] focus:border-b-[2px] border-color-info"
        >
          <span className="text-22px lg:text-16px font-work-sans font-semibold active:text-color-white focus:text-color-white text-color-info">
            1d
          </span>
        </button>

        <button
          onClick={() => setTab(2)}
          className="flex items-center sm:m-0 mt-2.5 w-full justify-center gap-4 h-[60px] active:text-color-white focus:text-color-white active:border-b-[2px] focus:border-b-[2px] border-color-info"
        >
          <span className="text-22px lg:text-16px font-work-sans font-semibold active:text-color-white focus:text-color-white text-color-info">
            7d
          </span>
        </button>

        <button
          onClick={() => setTab(3)}
          className="flex items-center sm:m-0 mt-2.5 w-full justify-center gap-4 h-[60px]  active:border-b-[2px] focus:border-b-[2px] border-color-info"
        >
          <span className="text-22px lg:text-16px font-work-sans font-semibold active:text-color-white focus:text-color-white text-color-info">
            30d
          </span>
        </button>

        <button
          onClick={() => setTab(4)}
          className="flex items-center sm:m-0 mt-2.5 w-full justify-center gap-4 h-[60px] active:text-color-white focus:text-color-white active:border-b-[2px] focus:border-b-[2px] border-color-info"
        >
          <span className="text-22px lg:text-16px font-work-sans font-semibold active:text-color-white focus:text-color-white text-color-info">
            All Time
          </span>
        </button>
      </div>

      {tab === 1 && <RankingsTab1 />}
      {tab === 2 && <RankingsTab2 />}
      {tab === 3 && <RankingsTab3 />}
      {tab === 4 && <RankingsTab4 />}
    </div>
  );
}

export default Page;
