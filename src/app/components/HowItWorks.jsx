import { howItWorks } from "@/contents";

function HowItWorks() {
  return (
    <div className="text-color-white mx-auto max-w-[1280px] px-[115px] lg:px-[72px] sm:px-[30px] py-20 lg:py-10 sm:py-10">
      <div className="font-work-sans capitalize">
        <h3 className="text-38px font-semibold lg:text-28px md:text-38px">
          How it works
        </h3>
        <p className="text-22px mt-2.5 lg:text-16px">
          Find out how to get started
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-1 justify-center text-center gap-[30px] mt-10">
        {howItWorks.map((item) => {
          return (
            <div
              key={item.id}
              className="px-[30px] lg:px-5 pb-[30px] pt-2.5 md:flex md:p-5 md:gap-5 items-center rounded-[20px] bg-color-grey"
            >
              <img
                src={item.img}
                className="mx-auto md:w-[130px] md:h-[130px]"
              />
              <div className="md:text-left">
                <p className="mt-5 mb-2.5 text-22px md:text-28px sm:text-16px md:m-0 lg:text-16px font-semibold font-work-sans capitalize">
                  {item.titleName}
                </p>
                <p className="text-16px font-work-sans lg:text-12px md:text-16px sm:mt-2.5">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HowItWorks;
