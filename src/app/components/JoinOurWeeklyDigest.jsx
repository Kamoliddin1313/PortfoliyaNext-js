import { MessageIcon } from "@/assets/icons/Icons";

function JoinOurWeeklyDigest() {
  return (
    <div className="text-color-white mx-auto max-w-[1280px] px-[115px] lg:px-[72px] sm:px-[30px] py-20 lg:pt-10 sm:py-10">
      <div className="grid grid-cols-2 sm:grid-cols-1 sm:p-0 md:bg-opacity-0 bg-color-grey p-[60px] md:p-[25px] lg:py-10 lg:px-[30px] md:gap-6 lg:gap-[30px] rounded-[20px] gap-20 items-center">
        <div className="h-full">
          <img src="/kosmosUserImg.png" className="h-full" />
        </div>

        <div className="font-work-sans capitalize">
          <h3 className="text-38px font-semibold lg:text-28px md:text-22px sm:text-28px">
            Join our weekly digest
          </h3>
          <p className="text-22px mt-2.5 lg:text-16px md:text-[14px] sm:text-16px">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="flex justify-between w-full bg-color-white sm:mt-8 lg:grid-cols-1 lg:grid lg:bg-transparent lg:gap-4 mt-10 md:mt-3 rounded-[20px] outline-none">
            <input
              type="text"
              placeholder="Enter your email here"
              className="outline-none text-color-black w-2/3 lg:w-full lg:bg-color-orange pl-5 md:p-4 rounded-[20px] lg:h-[46px]"
            />
            <button className="bg-color-violet flex lg:justify-center items-center rounded-[20px] h-[60px]  lg:h-[46px] px-[50px] gap-3">
              <MessageIcon /> Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinOurWeeklyDigest;
