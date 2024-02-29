import { marketplaceTab } from "@/contents";

function Tab1() {
  return (
    <div className="grid mb-[2px] max-w-[1280px] lg:px-[72px] sm:px-[30px] sm:py-10 px-[115px] mx-auto grid-cols-3 pt-[60px] sm:mt-0 pb-20 lg:grid-cols-2 lg:grid sm:mb-[2px] lg:gap-[30px] gap-[30px] sm:gap-[30px] md:grid md:grid-cols-1">
      {marketplaceTab.map((value) => {
        return (
          <div
            key={value.id}
            className="lg:[&:nth-child(n+9)]:hidden sm:[&:nth-child(n+6)]:hidden w-full"
          >
            <img src={value.bigImg} alt="salom img" className="w-full" />

            <div className="bg-color-black text-color-white px-[30px] sm:px-[20px] pt-5 rounded-b-[20px] pb-[25px]">
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
  );
}

export default Tab1;
