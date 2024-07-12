"use client";

import {
  CopyIcon,
  DiscordIcon,
  GlobeIcon,
  InstagramIcon,
  PlusIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets/icons/Icons";
import { useState } from "react";
import ArtistPageTab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";
import Link from "next/link";

// export const metadata = {
//   title: "Artist",
// };

function Page() {
  const [tab, setTab] = useState(1);

  return (
    <div>
      <div className="h-[320px] bg-[url('/artistPage/artistPageImg.png')] bg-cover bg-center bg-no-repeat"></div>

      <section className="mx-auto max-w-[1280px] px-[115px] relative lg:px-[72px] sm:px-[30px]">
        <img
          src="/smallAvatarImg.png"
          className="absolute -inset-y-[65px] sm:inset-x-1/2 sm:-translate-x-2/4 border-solid rounded-[20px] border-color-black border-2	"
        />

        <div className="flex justify-between pt-24 sm:w-full">
          <div className="w-1/2 lg:w-3/4 sm:w-full">
            <h1 className="text-51px lg:text-38px font-semibold font-work-sans text-color-white">
              Animakid
            </h1>

            <div className="gap-5 hidden text-16px lg:gap-5 lg:flex lg:my-[30px] sm:grid sm:w-full sm:grid-cols-1 lg:grid-cols-2 font-semibold font-work-sans text-color-white">
              <button className="lg:flex px-[30px] justify-center items-center sm:w-full right-0 h-[60px] rounded-[20px] gap-3 bg-color-violet border-0">
                <CopyIcon />
                <span>0xc0E3...B79C</span>
              </button>

              <button className="lg:flex justify-center items-center border-solid rounded-[20px] gap-3 border-color-violet border-2 h-[60px] px-[30px]">
                <PlusIcon />
                <span>Follow</span>
              </button>
            </div>

            <div className="flex gap-5 justify-between my-[15px] text-color-white">
              <div className="w-[150px]">
                <h2 className="text-28px xl:text-22px font-space-mono font-bold md:text-[20px] sm:text-22px leading-[39px]">
                  250k+
                </h2>
                <h4 className="text-[24px] xl:text-16px md:text-[14px] sm:text-16px font-work-sans leading-[38px]">
                  Volume
                </h4>
              </div>

              <div className="w-[150px]">
                <h2 className="text-28px  xl:text-22px font-space-mono font-bold md:text-[20px] sm:text-22px leading-[39px]">
                  50k+
                </h2>
                <h4 className="text-[24px] xl:text-16px md:text-[14px] sm:text-16px leading-[38px] font-work-sans">
                  NFTs Sold
                </h4>
              </div>

              <div className="w-[150px]">
                <h2 className="text-28px xl:text-22px font-space-mono font-bold	md:text-[20px] sm:text-22px leading-[39px]">
                  3000k+
                </h2>
                <h4 className="text-[24px] xl:text-16px md:text-[14px] sm:text-16px leading-[38px] font-work-sans">
                  Followers
                </h4>
              </div>
            </div>

            <p className="text-22px sm:text-16px font-space-mono font-bold text-color-info">
              Bio
            </p>
            <p className="text-22px xl:text-[20px] sm:text-16px font-work-sans text-color-white">
              The internet's friendliest designer kid.
            </p>
            <p className="text-22px mt-[30px] sm:text-16px font-space-mono font-bold text-color-info">
              Links
            </p>
            <p className="flex gap-2.5 lg:mt-[15px] mt-2.5">
              <Link href="/">
                <GlobeIcon />
              </Link>
              <Link href="/">
                <DiscordIcon />
              </Link>
              <Link href="/">
                <YoutubeIcon />
              </Link>
              <Link href="/">
                <TwitterIcon />
              </Link>
              <Link href="/">
                <InstagramIcon />
              </Link>
            </p>
          </div>

          <div className="gap-5 flex text-16px font-semibold font-work-sans lg:hidden text-color-white">
            <button className="flex items-center right-0 h-[60px] px-5 rounded-[20px] gap-3 bg-color-violet border-0">
              <CopyIcon />
              <span>0xc0E3...B79C</span>
            </button>

            <button className="flex items-center border-solid rounded-[20px] gap-3 border-color-violet border-2 h-[60px] px-[30px]">
              <PlusIcon />
              <span>Follow</span>
            </button>
          </div>
        </div>
      </section>

      <div className="bg-color-grey h-[1px] mt-10"></div>

      <div className="mx-auto max-w-[1280px] px-[115px] mt-2.5 lg:px-[72px] sm:px-[30px]">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setTab(1)}
            className={`flex gap-4 text-center h-[60px] text-color-info items-center border-color-info ${
              tab === 1 && `border-b-[2px] text-color-white`
            }`}
          >
            <span className="text-22px font-semibold font-work-sans lg:text-16px">
              Created
            </span>
            <span className="text-16px sm:hidden font-space-mono  lg:text-12px text-color-white bg-color-grey px-[10px] py-[5px] rounded-[20px]">
              302
            </span>
          </button>

          <button
            onClick={() => setTab(2)}
            className={`flex gap-4 text-center h-[60px] text-color-info items-center border-color-info ${
              tab === 2 && `border-b-[2px] text-color-white`
            }`}
          >
            <span className="text-22px font-semibold lg:text-16px font-work-sans">
              Owned
            </span>
            <span className="text-16px font-space-mono sm:hidden lg:text-12px text-color-white bg-color-grey px-[10px] py-[5px] rounded-[20px]">
              67
            </span>
          </button>

          <button
            onClick={() => setTab(3)}
            className={`flex gap-4 text-center h-[60px] text-color-info items-center border-color-info ${
              tab === 3 && `border-b-[2px] text-color-white`
            }`}
          >
            <span className="text-22px lg:text-16px font-semibold font-work-sans">
              Collection
            </span>

            <span className="text-16px lg:text-12px sm:hidden font-space-mono text-color-white bg-color-grey px-[10px] py-[5px] rounded-[20px]">
              4
            </span>
          </button>
        </div>

        <div>{tab === 1 && <ArtistPageTab1 />}</div>
        <div>{tab === 2 && <Tab2 />}</div>
        <div>{tab === 3 && <Tab3 />}</div>
      </div>
    </div>
  );
}

export default Page;
