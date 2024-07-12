import { RocketLaunchVioletIcon } from "@/assets/icons/Icons";
import { topCreators } from "@/contents";
import Link from "next/link";

function TopCreators() {
  return (
    <div className="mx-auto py-20 lg:py-10 max-w-[1280px] px-[115px] text-color-white lg:px-[72px] sm:px-[30px]">
      <div className="flex items-end justify-between xl:gap-5">
        <div className="font-work-sans capitalize lg:w-1/2 md:w-full">
          <h3 className="text-38px font-semibold lg:text-28px md:text-28px">
            Top creators
          </h3>
          <p className="text-22px mt-2.5 xl:text-[20px] lg:text-16px md:text-16px">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>

        <button className="flex items-center md:hidden gap-3 xl:px-[30px] h-[60px] px-[50px] border-solid border-2 border-color-violet text-16px rounded-[20px] font-semibold font-work-sans">
          <RocketLaunchVioletIcon />
          View Rankings
        </button>
      </div>

      <div className="mt-[60px] sm:mt-10 grid grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-[30px] md:gap-[20px] sm:gap-5">
        {topCreators.map((value) => (
          <Link
            href={`/rankings/${value.id}`}
            key={value.id}
            className="relative lg:[&:nth-child(n+7)]:hidden sm:lg:[&:nth-child(n+6)]:hidden"
          >
            <span className="absolute text-16px font-space-mono flex items-center justify-center bg-color-black py-1 px-2.5 rounded-full w-[30px] sm:ml-6 lg:ml-3 lg:mt-3 md:mt-4 md:ml-4 ml-5 mt-[18px] text-color-info">
              {value.id}
            </span>

            <div className="bg-color-grey md:flex rounded-[20px] items-center lg:gap-5 grid grid-cols-1 p-5 lg:flex">
              <img
                src={value.img}
                alt="user img"
                className=" mx-auto lg:w-[60px] lg:h-[60px] lg:m-0 md:w-[100px] md:h-full"
              />

              <div>
                <p className="text-22px font-semibold font-work-sans mt-5 lg:m-0 lg:text-left capitalize text-center">
                  {value.name}
                </p>
                <div className="flex items-center justify-center md:justify-between md:flex-wrap mt-[5px] gap-2.5">
                  <p className="text-color-info text-16px md:text-[14px] font-work-sans">
                    Total Sales:
                  </p>

                  <p className="text-16px font-space-mono md:text-[14px]">
                    {value.userTitle}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <button className="hidden xl:hidden items-center w-full md:block gap-3 md:mt-10 h-[60px] px-[50px] border-solid border-2 border-color-violet text-16px rounded-[20px] font-semibold font-work-sans">
        <RocketLaunchVioletIcon className="inline mx-3" />
        View Rankings
      </button>
    </div>
  );
}

export default TopCreators;
