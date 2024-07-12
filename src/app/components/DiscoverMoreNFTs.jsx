import { SeeImgIcon } from "@/assets/icons/Icons";
import { discoverMoreNFTs } from "@/contents";
import Link from "next/link";

function DiscoverMoreNFTs() {
  return (
    <div className="mx-auto py-20 lg:py-10 max-w-[1280px] px-[115px] text-color-white md:pb-[60px] lg:px-[72px] sm:px-[30px]">
      <div className="flex items-end justify-between">
        <div className="font-work-sans capitalize lg:w-1/2 md:w-full">
          <h3 className="text-38px font-semibold lg:text-28px md:text-28px">
            Discover More NFTs
          </h3>
          <p className="text-22px xl:text-[20px] mt-2.5 lg:text-16px">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <button className="flex items-center md:hidden gap-3 h-[60px] px-[50px] border-solid border-2 border-color-violet text-16px rounded-[20px] font-semibold font-work-sans">
          <SeeImgIcon />
          See All
        </button>
      </div>

      <div className="flex justify-between mt-[60px] sm:my-10 lg:gap-[30px] gap-[30px] sm:gap-5 md:grid md:grid-cols-1">
        {discoverMoreNFTs.map((value) => {
          return (
            <Link
              href={`/nft/${value.id}`}
              key={value.id}
              className="lg:[&:nth-child(n+3)]:hidden md:[&:nth-child(n+3)]:block w-full"
            >
              <img src={value.bigImg} alt="salom img" className="w-full" />

              <div className="bg-color-grey px-[30px] sm:px-[20px] pt-5 rounded-b-[20px] pb-[25px]">
                <h3 className="text-22px font-semibold font-work-sans">
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
            </Link>
          );
        })}
      </div>

      <button className="hidden items-center md:w-full md:block mt-10 gap-3 h-[60px] px-[50px] border-solid border-2 border-color-violet text-16px rounded-[20px] font-semibold font-work-sans">
        <SeeImgIcon className="inline mx-3" />
        See All
      </button>
    </div>
  );
}

export default DiscoverMoreNFTs;
