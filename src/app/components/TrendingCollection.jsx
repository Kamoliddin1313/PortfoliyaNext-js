import { trendingCollection } from "@/contents";

function TrendingCollection() {
  return (
    <div className="mx-auto py-20 lg:py-10 max-w-[1280px] px-[115px] lg:px-[72px] sm:px-[30px] text-color-white">
      <h3 className="text-38px md:text-28px font-semibold">
        Trending Collection
      </h3>
      <p className="text-22px mt-[10px] md:text-16px">
        Checkout our weekly updated trending collection.
      </p>
      <div className="mt-[60px] grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-[30px] lg:mt-10">
        {trendingCollection.map((imag) => (
          <div
            key={imag.id}
            className="lg:[&:nth-child(n+3)]:hidden sm:[&:nth-child(n+2)]:hidden"
          >
            <div>
              <img src={imag.mainImg} className="w-full" />
            </div>
            <div className="grid grid-cols-3 gap-[15px] mt-[15px]">
              {imag.imgs.map((img) => (
                <img src={img} className="w-full" />
              ))}

              <p className="flex font-space-mono md:text-16px items-center text-22px xl:text-[18px] font-bold justify-center bg-color-violet rounded-[20px]">
                {imag.total}
              </p>
            </div>

            <div>
              <p className="text-22px font-semibold mt-[15px] font-work-sans md:text-16px">
                {imag.title}
              </p>
              <div className="flex gap-3 mt-2.5 items-center">
                <img src={imag.creatorAvatar} alt="avatar_img" />
                <span className="text-16px font-work-sans">{imag.creator}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingCollection;
