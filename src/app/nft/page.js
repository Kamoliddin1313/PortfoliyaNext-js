import { GlobeIcon } from "@/assets/icons/Icons";
import NftTab from "./NftTab";

function Page() {
  return (
    <div>
      <div className="h-[560px] bg-[url('/nft/nft-bg-img.png')] bg-cover bg-center bg-no-repeat lg:bg-center	lg:bg-cover"></div>
      <section className="mx-auto max-w-[1280px] px-[115px] lg:px-[72px] sm:px-[30px]">
        <div className="flex justify-between my-10 items-start gap-[30px]">
          <div className="w-1/2 md:w-full">
            <h1 className="text-51px font-work-sans font-semibold lg:text-38px text-color-white sm:text-28px">
              The Orbitians
            </h1>
            <p className="mt-2.5 text-22px lg:text-16px font-work-sans text-color-info">
              Minted on Sep 30, 2022
            </p>

            <div className="p-[30px] md:w-[315px] sm:w-full bg-color-grey hidden md:block md:my-5 text-color-white rounded-[20px]">
              <p className="text-12px font-space-mono md:text-center sm:text-left">
                Auction ends in:
              </p>

              <div className="flex gap-2.5 mt-2.5 sm:justify-center">
                <div>
                  <h1 className="text-38px font-space-mono font-bold">59</h1>
                  <p className="text-12px font-space-mono mt-[5px]">Hours</p>
                </div>

                <div className="text-38px font-space-mono font-bold">:</div>

                <div>
                  <h1 className="text-38px font-space-mono font-bold">59</h1>
                  <p className="text-12px font-space-mono mt-[5px]">Minutes</p>
                </div>

                <div className="text-38px font-space-mono font-bold">:</div>

                <div>
                  <h1 className="text-38px font-space-mono font-bold">59</h1>
                  <p className="text-12px font-space-mono mt-[5px]">Seconds</p>
                </div>
              </div>

              <button className="w-full text-16px font-work-sans font-semibold bg-color-violet rounded-[20px] mt-[30px] h-[60px] px-[50px]">
                Place Bid
              </button>
            </div>

            <p className="mt-[30px] text-22px lg:text-16px md:mt-0 font-space-mono font-bold text-color-info">
              Created By
            </p>
            <div className="flex gap-3 lg:text-16px items-center text-22px font-semibold text-color-white mt-2.5 font-work-sans">
              <img src="/nft/nft-avatar.png" className="w-[24px] h-[24px]" />
              <span>Orbitian</span>
            </div>
            <p className="mt-[30px] text-22px lg:text-16px font-bold font-space-mono text-color-info">
              Description
            </p>
            <p className="text-22px font-work-sans lg:text-16px text-color-white">
              The Orbitians is a collection of 10,000 unique NFTs on the
              Ethereum blockchain,
            </p>
            <p className="text-22px font-work-sans lg:text-16px my-8 text-color-white">
              There are all sorts of beings in the NFT Universe. The most
              advanced and friendly of the bunch are Orbitians.
            </p>
            <p className="text-22px font-work-sans lg:text-16px text-color-white">
              They live in a metal space machines, high up in the sky and only
              have one foot on Earth. These Orbitians are a peaceful race, but
              they have been at war with a group of invaders for many
              generations. The invaders are called Upside-Downs, because of
              their inverted bodies that live on the ground, yet do not know any
              other way to be. Upside-Downs believe that they will be able to
              win this war if they could only get an eye into Orbitian
              territory, so they've taken to make human beings their target.
            </p>
            <p className="mt-[30px] text-22px lg:text-16px font-bold font-space-mono text-color-info">
              Details
            </p>
            <div className="flex gap-[3px] my-2.5 items-center lg:text-16px">
              <GlobeIcon />
              <span className="text-22px font-work-sans text-color-white">
                View on Etherscan
              </span>
            </div>
            <div className="flex gap-[3px] items-center lg:text-16px">
              <GlobeIcon />
              <span className="text-22px font-work-sans text-color-white">
                View on Etherscan
              </span>
            </div>
            <p className="mt-[30px] text-22px lg:text-16px font-bold font-space-mono text-color-info">
              Tags
            </p>
            <div className="flex mt-5 items-center lg:flex-col lg:items-start gap-5 font-work-sans font-semibold text-color-white text-16px">
              <button className="bg-color-grey h-[46px] px-[30px] rounded-[20px] uppercase">
                Animation
              </button>
              <button className="bg-color-grey h-[46px] px-[30px] rounded-[20px] uppercase">
                illustration
              </button>
              <button className="bg-color-grey h-[46px] px-[30px] rounded-[20px] uppercase">
                moon
              </button>
              <button className="bg-color-grey h-[46px] px-[30px] rounded-[20px] uppercase">
                moon
              </button>
            </div>
          </div>

          <div className="p-[30px] bg-color-grey md:hidden text-color-white rounded-[20px]">
            <p className="text-12px font-space-mono">Auction ends in:</p>

            <div className="flex gap-2.5 mt-2.5">
              <div>
                <h1 className="text-38px font-space-mono font-bold">59</h1>
                <p className="text-12px font-space-mono mt-[5px]">Hours</p>
              </div>
              <div className="text-38px font-space-mono font-bold">:</div>
              <div>
                <h1 className="text-38px font-space-mono font-bold">59</h1>
                <p className="text-12px font-space-mono mt-[5px]">Minutes</p>
              </div>
              <div className="text-38px font-space-mono font-bold">:</div>
              <div>
                <h1 className="text-38px font-space-mono font-bold">59</h1>
                <p className="text-12px font-space-mono mt-[5px]">Seconds</p>
              </div>
            </div>
            <button className="w-full text-16px font-work-sans font-semibold bg-color-violet rounded-[20px] mt-[30px] h-[60px] px-[50px]">
              Place Bid
            </button>
          </div>
        </div>

        <div>
          <NftTab />
        </div>
      </section>
    </div>
  );
}

export default Page;
