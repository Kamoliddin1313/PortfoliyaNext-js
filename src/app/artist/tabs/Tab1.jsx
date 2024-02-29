import { tab1 } from "@/contents";

function Tab1() {
  return (
    <div className="grid my-20 grid-cols-3 lg:grid-cols-2 sm:my-20 lg:gap-[30px] gap-[30px] sm:gap-[30px] md:grid md:grid-cols-1">
      {tab1.map((value) => {
        return (
          <div
            key={value.id}
            className="lg:[&:nth-child(n+7)]:hidden sm:[&:nth-child(n+4)]:hidden w-full"
          >
            <img src={value.bigImg} alt="bigImg" className="w-full" />

            <div className="bg-color-grey text-color-white px-[30px] sm:px-[20px] pt-5 rounded-b-[20px] pb-[25px]">
              <h3 className="text-22px xl:text-[18px] line-clamp-1 lg:text-22px font-semibold font-work-sans">
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
