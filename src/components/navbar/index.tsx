"use client";
import Image from "next/image";
import NavItem from "./nav-item";
import { MdManageAccounts } from "react-icons/md";
import SearchWidget from "./search-widget";

const navItems: NavItem[] = [
  // {
  //     text: "Home",
  //     href: "/"
  // },
  {
    text: "Latest",
    href: "/latest",
  },
  {
    text: "Business",
    href: "/business",
  },
  // {
  //     text: "Science",
  //     href: "/science"
  // },
  {
    text: "Tech",
    href: "/tech",
  },
  {
    text: "Sports",
    href: "/sports",
  },
  {
    text: "Politics",
    href: "/politics",
  },
];

export default function Navbar() {
  return (
    <div className="nav-container w-full py-4 px-8 absolute z-30">
      <div className="gap-3 font-inter text-white font-semibold text-xl">
        <Image
          src={"/images/logo.png"}
          height={20}
          width={60}
          alt="aggregate_logo"
        />
        <h1>The Aggregate</h1>
      </div>
      <div className="items">
        {navItems.map((item: NavItem) => (
          <NavItem key={item.href} item={item} />
        ))}
      </div>
      <div className="options">
        <SearchWidget />
        <div className="transition-all duration-500 ease-out flex items-center justify-center rounded-md cursor-pointer text-white text-sm h-[30px] w-[30px] border border-transparent hover:border-white bg-transparent hover:bg-white hover:bg-opacity-30">
          <MdManageAccounts
            size={23}
            className="text-white pointer-events-none"
          />
        </div>
      </div>
      <div className="grad-overlay-top !z-0 !h-[120%]" />
    </div>
  );
}
