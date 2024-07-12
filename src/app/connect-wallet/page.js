"use client";

import {
  CoinbaseIcon,
  MetamaskIcon,
  WalletConnectIcon,
} from "@/assets/icons/Icons";

// export const metadata = {
//   title: "Connectet Wallet",
// };

function Page() {
  return (
    <section className="grid grid-cols-2 gap-[60px] lg:gap-10 md:gap-8 sm:grid-cols-1 sm:gap-0 w-full items-center">
      <div className="w-full h-full">
        <img
          src="/connectWallet/connectWalletImg.png"
          alt="img"
          className="w-full h-full"
        />
      </div>

      <div className="text-color-white w-[460px] lg:w-auto py-[100px] lg:py-20 sm:w-full sm:px-[30px] sm:pt-[30px] sm:pb-10 sm:mx-auto">
        <h2 className="text-51px font-semibold font-work-sans lg:text-38px md:text-[36px]">
          Connect wallet
        </h2>
        <p className="font-work-sans text-22px mt-5 lg:text-16px">
          Choose a wallet you want to connect. <br /> There are several wallet
          providers.
        </p>
        <div className="grid grid-cols-1 gap-5 mt-10 sm:mt-[30px]">
          <button
            className="flex items-center text-22px rounded-[20px] border px-5 border-color-violet h-[72px] bg-color-grey md:px-6 md:gap-3 gap-5 w-3/4 md:w-10/12 lg:w-4/5
              sm:w-full text-color-white md:text-[20px] font-work-sans"
          >
            <span>
              <MetamaskIcon className="w-10 h-10 md:w-[30px] ml-5 md:h-[30px]" />
            </span>
            <span>Metamask</span>
          </button>

          <button
            className="flex items-center md:text-[20px] px-5 rounded-[20px] md:gap-3 md:px-6 border border-color-violet bg-color-grey gap-5 h-[72px] w-3/4 md:w-10/12 lg:w-4/5
              sm:w-full text-color-white font-work-sans
              text-22px"
          >
            <span>
              <WalletConnectIcon className="ml-5 w-10 h-10 md:w-[30px] md:h-[30px]" />
            </span>
            <span>Wallet Connect</span>
          </button>

          <button className="flex md:text-[20px] px-5 items-center md:px-6 md:gap-3 border border-color-violet bg-color-grey gap-5 rounded-[20px] h-[72px] text-color-white w-3/4 md:w-10/12 lg:w-4/5 sm:w-full font-work-sans text-22px">
            <span>
              <CoinbaseIcon className="ml-5 w-10 h-10 md:w-[30px] md:h-[30px]" />
            </span>
            <span>Coinbase</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Page;
