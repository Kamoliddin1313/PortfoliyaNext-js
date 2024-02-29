import {
  DiscordIcon,
  InstagramIcon,
  SeeImgIcon,
  StoreFrontIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets/icons/Icons";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-10 bg-color-grey">
      <div className="max-w-[1280px] mx-auto  px-[115px] lg:px-[72px] sm:px-[30px]">
        <div className="flex grid-cols-2 lg:grid-cols-1 justify-between lg:grid lg:gap-0 gap-20">
          <div className="flex grid-cols-2 lg:grid-cols-1 lg:grid justify-between">
            <div className="w-1/2 md:w-full">
              <div className="flex gap-3 items-center">
                <StoreFrontIcon />
                <span className="text-22px lg:text-22px capitalize text-color-white font-bold font-space-mono">
                  NFT Marketplace
                </span>
              </div>

              <div className="grid mt-[25px] lg:mt-5 text-[#CCC] grid-rows-1 gap-5 lg:gap-0 font-work-sans">
                <p>NFT marketplace UI created with Anima for Figma.</p>
                <p className="lg:mt-5">Join our community</p>
                <p className="flex gap-2.5 lg:mt-[15px]">
                  <a href="/">
                    <DiscordIcon />
                  </a>
                  <a href="/">
                    <YoutubeIcon />
                  </a>
                  <a href="/">
                    <TwitterIcon />
                  </a>
                  <a href="/">
                    <InstagramIcon />
                  </a>
                </p>
              </div>
            </div>

            <div className="lg:my-[30px]">
              <span className="text-22px capitalize text-color-white font-bold lg:text-22px font-space-mono">
                Explore
              </span>
              <div className="grid mt-[25px] lg:mt-5 text-[#CCC] font-work-sans grid-rows-1 gap-5">
                <p>
                  <Link href="/marketplace">Marketplace</Link>
                </p>
                <p>
                  <Link href="/rankings">Rankings</Link>
                </p>
                <p>
                  <Link href="/connect-wallet">Connect a wallet</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4 sm:w-full">
            <span className="text-22px capitalize text-color-white font-bold lg:text-22px font-space-mono">
              Join our weekly digest
            </span>
            <div className="grid mt-[25px] lg:mt-5 text-[#CCC] grid-rows-1 gap-5 font-work-sans">
              <p>
                Get exclusive promotions & updates <br /> straight to your
                inbox.
              </p>
              <form
                action="#"
                className="flex font-work-sans sm:h-[46px] sm:gap-4 sm:grid sm:grid-cols-1 lg:w-2/3 sm:w-full font-semibold outline-none rounded-[20px] items-center h-[60px] bg-color-white justify-between"
              >
                <input
                  type="text"
                  placeholder="Enter your email here"
                  className="outline-none h-[60px] sm:h-[46px] sm:w-full rounded-[20px] px-5 text-color-black"
                />
                <button className="bg-color-violet sm:h-[46px] sm:w-full text-color-white px-[50px] rounded-[20px] h-full">
                  {/* <SeeImgIcon /> */}
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="h-[1px] sm:mt-[85px] bg-color-info mt-[30px] mb-5"></div>

        <p className="text-12px text-[#CCC] mt-auto font-work-sans">
          Ⓒ NFT Market. Use this template freely.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
