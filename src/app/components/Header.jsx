import { StoreFrontIcon, ToggleBtnIcon, UserIcon } from "@/assets/icons/Icons";
import Link from "next/link";

function Header() {
  return (
    <header className="flex px-[50px] items-center py-5 lg:py-[15px] sm:px-[30px] gap-[30px] text-color-white font-semibold">
      <Link href="/" className="flex gap-3 items-center font-space-mono">
        <StoreFrontIcon />
        <span className="text-22px lg:text-16px font-space-mono">
          NFT Marketplace
        </span>
      </Link>

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

      <Link href="/" className="hidden lg:block ml-auto">
        <ToggleBtnIcon />
      </Link>
    </header>
  );
}

export default Header;
