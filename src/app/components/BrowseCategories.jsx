"use server";
import { browseCategories } from "@/contents";
function BrowseCategories() {
  return (
    <div className="mx-auto py-20 px-[115px] max-w-[1280px] lg:px-[72px] sm:px-[30px] lg:py-10 text-color-white">
      <h3 className="text-38px font-semibold md:text-28px">
        Browse Categories
      </h3>
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-[30px] sm:gap-5 mt-10">
        {browseCategories.map((item) => {
          return (
            <div className="bg-color-grey rounded-[20px] overflow-hidden">
              <div className="relative overflow-y-hidden overflow-x-hidden">
                <img src={item.img} className="blur-[7px] w-full" />
                <item.top_img className="absolute -translate-y-1/2 -translate-x-1/2  top-1/2	left-1/2" />
              </div>
              <p className="lg:p-5 xl:text-[18px] px-[30px] text-22px lg:text-16px pt-5 pb-[25px] font-work-sans font-semibold sm:pb-[25px]">
                {item.titleName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BrowseCategories;
