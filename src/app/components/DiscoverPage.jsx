import { RocketLaunchIcon } from "@/assets/icons/Icons";

function DiscoverPage() {
  return (
    <div className="py-20 mx-auto max-w-[1280px] lg:px-[72px] sm:px-[30px] md:py-10 px-[115px] text-color-white">
      <div className="grid gap-6 sm:gap-0 item grid-cols-2 md:grid-cols-1">
        <div className="flex-1 xl:w-full">
          <h1 className="text-67px sm:text-28px xl:text-[56px] md:text-28px lg:text-38px font-work-sans font-semibold capitalize">
            Discover digital art & Collect NFTs
          </h1>
          <p className="text-22px mt-5 xl:text-[18px] lg:text-16px md:text-16px lg:pr-16 sm:mt-2.5 font-work-sans">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <div className="md:hidden">
            <button className="flex font-work-sans h-[60px] text-16px font-semibold bg-color-violet items-center px-[50px] gap-3 rounded-[20px] my-[30px] lg:my-5">
              <RocketLaunchIcon /> Get Started
            </button>
            <div className="flex gap-[30px] justify-between">
              <div className="w-[150px]">
                <h2 className="text-28px xl:text-22px font-space-mono font-bold md:text-[20px] leading-[39px]">
                  240k+
                </h2>
                <h4 className="text-[24px] xl:text-16px md:text-[14px] font-work-sans leading-[38px]">
                  Total Sale
                </h4>
              </div>
              <div className="w-[150px]">
                <h2 className="text-28px xl:text-22px font-space-mono font-bold md:text-[20px] leading-[39px]">
                  100k+
                </h2>
                <h4 className="text-[24px] xl:text-16px md:text-[14px] leading-[38px] font-work-sans">
                  Auctions
                </h4>
              </div>
              <div className="w-[150px]">
                <h2 className="text-28px xl:text-22px font-space-mono font-bold	md:text-[20px] leading-[39px]">
                  240k+
                </h2>
                <h4 className="text-[24px] xl:text-16px md:text-[14px] leading-[38px] font-work-sans">
                  Artists
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 self-start md:mt-5">
          <img
            src="/images/imagePlaceholder.png"
            className="w-full"
            alt="imagePlaceholder"
          />
          <div className="p-5 sm:mb-10 bg-color-grey rounded-b-[20px] ">
            <h4 className="text-22px font-semibold font-work-sans">
              Space Walking
            </h4>
            <div className="flex mt-2.5 gap-3 items-center">
              <img src="/images/avatar.png" alt="avatar" />
              <p className="text-16px font-work-sans">Animakid</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <button className="flex w-full justify-center h-[60px] text-16px font-semibold bg-color-violet items-center px-[50px] gap-3 rounded-[20px] sm:mt-0 my-[30px]">
          <RocketLaunchIcon /> Get Started
        </button>
        <div className="flex gap-[30px] justify-between">
          <div className="w-[150px]">
            <h2 className="text-28px font-space-mono font-bold	sm:text-22px leading-[39px]">
              240k+
            </h2>
            <h4 className="text-[24px] font-work-sans leading-[38px] sm:text-16px">
              Total Sale
            </h4>
          </div>
          <div className="w-[150px]">
            <h2 className="text-28px font-space-mono font-bold sm:text-22px	text-[24px] leading-[39px]">
              100k+
            </h2>
            <h4 className="text-[24px] font-work-sans sm:text-16px leading-[38px]">
              Auctions
            </h4>
          </div>
          <div className="w-[150px]">
            <h2 className="text-28px font-space-mono font-bold sm:text-22px	text-[24px] leading-[39px]">
              240k+
            </h2>
            <h4 className="text-[24px] font-work-sans leading-[38px] sm:text-16px">
              Artists
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverPage;
