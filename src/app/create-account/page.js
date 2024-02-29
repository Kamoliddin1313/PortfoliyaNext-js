import { LockIcon, MessageIcon, UserIcon } from "@/assets/icons/Icons";

function Page() {
  return (
    <section className="mx-auto grid grid-cols-2 gap-[60px] md:gap-10 sm:grid-cols-1 sm:gap-0 w-full items-center">
      <div className="w-full h-full">
        <img
          src="/createAccount/createAccountImg.png"
          alt="img"
          className="w-full h-full"
        />
      </div>

      <div className="text-color-white py-[100px] lg:py-20 sm:w-full sm:px-[30px] sm:pt-[30px] sm:pb-10 sm:mx-auto">
        <h2 className="text-51px font-semibold font-work-sans lg:text-38px">
          Create account
        </h2>
        <p className="font-work-sans text-22px mt-5 lg:text-16px">
          Welcome! enter your details and start <br /> creating, collecting and
          selling NFTs.
        </p>
        <form className="grid grid-cols-1 gap-[15px] mt-10 sm:mt-[30px]">
          <div className="relative flex items-center">
            <label htmlFor="user" className="relative left-5">
              <UserIcon className="absolute top-0 -translate-y-1/2" />
            </label>
            <input
              placeholder="Username"
              type="text"
              id="user"
              className="rounded-[20px] h-[46px] w-3/5 md:w-10/12 lg:w-4/5	sm:w-full pr-5 pl-[52px] text-color-black font-work-sans text-16px"
            />
          </div>

          <div className="relative flex items-center">
            <label htmlFor="confirmpassword" className="relative left-5">
              <MessageIcon className="absolute top-0 -translate-y-1/2" />
            </label>
            <input
              placeholder="Email Address"
              type="text"
              id="emailaddress"
              className="rounded-[20px] h-[46px] w-3/5 md:w-10/12 lg:w-4/5 sm:w-full pr-5 pl-[52px] text-color-black font-work-sans text-16px"
            />
          </div>

          <div className="relative flex items-center">
            <label htmlFor="confirmpassword" className="relative left-5">
              <LockIcon className="absolute top-0 -translate-y-1/2" />
            </label>
            <input
              placeholder="Confirm Password"
              type="text"
              id="confirmpassword"
              className="rounded-[20px] h-[46px] w-3/5 md:w-10/12 lg:w-4/5 sm:w-full pr-5 pl-[52px] text-color-black font-work-sans text-16px"
            />
          </div>

          <div className="relative flex items-center">
            <label htmlFor="confirmpassword" className="relative left-5">
              <LockIcon className="absolute top-0 -translate-y-1/2" />
            </label>
            <input
              placeholder="Confirm Password"
              type="text"
              id="confirmpassword"
              className="rounded-[20px] h-[46px] w-3/5 md:w-10/12 lg:w-4/5 sm:w-full pr-5 pl-[52px] text-color-black font-work-sans text-16px"
            />
          </div>
        </form>

        <button className="w-3/5 md:w-10/12 lg:w-4/5 sm:w-full mt-[30px] bg-color-violet h-[46px] font-work-sans text-16px font-semibold rounded-[20px]">
          Create account
        </button>
      </div>
    </section>
  );
}

export default Page;
