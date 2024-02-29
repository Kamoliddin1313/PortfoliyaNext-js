import { SeeImgIcon } from "@/assets/icons/Icons";

function MagicMashrooms() {
  return (
    <div className="h-[640px] md:h-auto bg-[linear-gradient(rgba(162,89,255,0.00)0%,#A259FF_100%),url('/magicMashrooms/bg-img.png')] bg-cover bg-center bg-no-repeat">
      <div className="py-[60px] mx-auto max-w-[1280px] sm:grid md:grid md:grid-cols-1 md:py-10 px-[115px] lg:px-[72px] sm:px-[30px] mb-auto flex h-[100%] w-full items-end justify-between">
        <div>
          <button className="flex items-center gap-3 px-5 py-2.5 rounded-[20px] bg-color-grey">
            <img
              src="magicMashrooms/shroomie.png"
              className="w-[24px] h-[24px]"
            />
            <span className="text-16px font-work-sans text-color-white">
              Shroomie
            </span>
          </button>

          <h1 className="my-[30px] text-51px font-work-sans font-semibold text-color-white">
            Magic Mashrooms
          </h1>

          <button className="flex md:hidden items-center gap-3 h-[60px] px-[50px] bg-color-white rounded-[20px]">
            <SeeImgIcon />
            <span className="text-color-black text-16px font-work-sans font-semibold">
              See NFT
            </span>
          </button>
        </div>

        <div className="text-color-white md:m-0 p-[30px] rounded-[20px] bg-[#25252579]">
          <p className="text-12px font-space-mono">Auction ends in:</p>

          <div className="mt-2.5 mb-[5px] flex items-center gap-2.5 justify-between">
            <h1 className="text-38px font-work-sans font-bold text-color-white">
              59
            </h1>
            <h1 className="text-38px font-work-sans font-bold text-color-white">
              :
            </h1>
            <h1 className="text-38px font-work-sans font-bold text-color-white">
              59
            </h1>
            <h1 className="text-38px font-work-sans font-bold text-color-white">
              :
            </h1>
            <h1 className="text-38px font-work-sans font-bold text-color-white">
              59
            </h1>
          </div>

          <div className="flex items-center justify-between text-12px font-space-mono">
            <p className="text-12px font-space-mono">Hours</p>
            <p className="text-12px font-space-mono">Minutes</p>
            <p className="text-12px font-space-mono">Seconds</p>
          </div>
        </div>

        <button className="hidden md:block items-center md:mt-[30px] justify-center gap-3 h-[60px] px-[50px] bg-color-white rounded-[20px]">
          <SeeImgIcon className="inline mx-3" />
          <span className="text-color-black text-16px font-work-sans font-semibold">
            See NFT
          </span>
        </button>
      </div>
    </div>
  );
}

export default MagicMashrooms;
