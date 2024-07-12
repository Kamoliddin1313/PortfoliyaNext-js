"use client";

import { StoreFrontIcon, ToggleBtnIcon, UserIcon } from "@/assets/icons/Icons";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [togl, setTogl] = useState(false);
  // const [radi, setRadi]=useState(0)

  return (
    <header className="flex px-[50px] items-center top-0 bg-zinc-800 z-[100] py-5 lg:py-[15px] sticky sm:px-[30px] gap-[30px] text-color-white font-semibold">
      <Link href="/" className="flex gap-3 items-center font-space-mono">
        <StoreFrontIcon />
        <span className="text-22px lg:text-16px font-space-mono">
          NFT Marketplace
        </span>
        {/* <input type="range" min="0" max="100" step="1" onChange={(e)=>setRadi(e.target.value)} defaultValue={radi}/>
        <label>{radi} salom</label> */}
      </Link>

      <nav className={`${togl ? "block absolute top-[62px]" : "hidden"}`}>
        <ul
          className={`flex gap-[30px] font-work-sans text-16px relative ${
            togl &&
            "grid col-span-1 bg-stone-500 left-0 w-[250px] h-[400px] items-center pl-10"
          }`}
        >
          <li>
            <Link href="/marketplace">Marketplace</Link>
          </li>

          <li>
            <Link href="/rankings">Rankings</Link>
          </li>

          <li>
            <Link href="/connect-wallet">Connect a wallet</Link>
          </li>
        </ul>
      </nav>

      <nav className="ml-auto lg:hidden">
        <ul className="flex gap-[30px] font-work-sans text-16px">
          <li>
            <Link href="/marketplace">Marketplace</Link>
          </li>
          <li>
            <Link href="/rankings">Rankings</Link>
          </li>

          <li>
            <Link href="/connect-wallet">Connect a wallet</Link>
          </li>
        </ul>
      </nav>

      <Link
        href="/create-account"
        className="flex lg:hidden text-16px font-work-sans items-center gap-3 font-semibold rounded-[20px] h-[60px] px-[30px] bg-color-violet"
      >
        <UserIcon />
        <span>Sign Up</span>
      </Link>

      <Link
        href="/"
        className="hidden lg:block ml-auto"
        onClick={() => setTogl(!togl)}
      >
        <ToggleBtnIcon />
      </Link>
    </header>
  );
}

export default Header;
