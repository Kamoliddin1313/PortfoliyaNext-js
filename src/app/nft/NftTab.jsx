import { NextIcon } from "@/assets/icons/Icons";
import { nftTab } from "@/contents";

function NftTab() {
  return (
    <div>
      <div className="flex items-end mt-20 mb-[60px] md:mb-0 text-color-white justify-between xl:gap-5">
        <div className="font-work-sans capitalize lg:w-1/2 md:w-full">
          <h3 className="text-38px font-semibold lg:text-28px capitalize md:text-28px">
            More from this artist
          </h3>
        </div>

        <button className="flex items-center md:hidden gap-3 h-[60px] px-[50px] border-solid border-2 border-color-violet text-16px rounded-[20px] font-semibold font-work-sans">
          <NextIcon />
          View Ranking
        </button>
      </div>

      <div className="grid mb-20 grid-cols-3 lg:grid-cols-2 md:my-[30px] sm:my-20 lg:gap-[30px] gap-[30px] sm:gap-[30px] md:grid md:grid-cols-1">
        {nftTab.map((value) => {
          return (
            <div
              key={value.id}
              className="lg:[&:nth-child(n+7)]:hidden sm:[&:nth-child(n+4)]:hidden w-full"
            >
              <img src={value.bigImg} alt="salom img" className="w-full" />

              <div className="bg-color-grey text-color-white px-[30px] sm:px-[20px] pt-5 rounded-b-[20px] pb-[25px]">
                <h3 className="text-22px xl:text-[18px] lg:text-22px font-semibold font-work-sans">
                  {value.titleName}
                </h3>
                <div className="flex mt-[5px] gap-3 items-center">
                  <img src={value.smallImg} />
                  <p className="text-16px font-space-mono">
                    {value.smallImgName}
                  </p>
                </div>
                <div className="flex text-12px font-space-mono text-color-info items-center justify-between mt-[25px]">
                  <p>Price</p>
                  <p>Highest Bid</p>
                </div>
                <div className="flex items-center sm:text-12px justify-between mt-2 text-16px font-space-mono">
                  <p>{value.price}</p>
                  <p>{value.bigPrice}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="hidden md:flex md:mb-10 w-full justify-center text-color-white md:items-center gap-3 h-[60px] px-[50px] border-solid border-2 border-color-violet text-16px rounded-[20px] font-semibold font-work-sans">
        <NextIcon />
        View Ranking
      </button>
    </div>
  );
}

export default NftTab;
