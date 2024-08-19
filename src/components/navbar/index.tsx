"use client";
import Image from "next/image";
import NavItem from "./nav-item";
import { MdManageAccounts } from "react-icons/md";
import SearchWidget from "./search-widget";
import useSticky from "@/hooks/useSticky";
import { cn } from "@/lib/utils";
import LogoDynamic from "../ui/logo-dynamic";
import Link from "next/link";

const navItems: NavItem[] = [
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

const Content = ({ sticky }: { sticky: boolean }) => {
  return (
    <>
      <div className="h-[50px] gap-3 font-inter text-white font-semibold text-xl overflow-hidden">
        <Link href={"/"}>
          <LogoDynamic />
        </Link>
      </div>
      <div className="items">
        {navItems.map((item: NavItem, idx: number) => (
          <NavItem key={item.href} item={item} idx={idx} />
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
    </>
  );
};

export default function Navbar() {
  const isSticky = useSticky(70)

  return (
    <>
      <div className="nav-container w-full py-4 px-10 z-30">
        <Content sticky={isSticky} />
      </div>

      {/* // sticky version */}
      <div
        className={cn(
          "nav-container transition-transform duration-300 ease-out top-0 z-20 rounded-2xl sticky h-[75px] px-10 pt-4 mb-[-70px] shadow-md bg-slate-900 backdrop-blur-sm bg-opacity-90",
          isSticky
            ? "translate-y-[40px] md:translate-y-[-15px] opacity-100 pointer-events-auto"
            : "md:translate-y-[-50px] opacity-0 pointer-events-none"
        )}
      >
        <Content sticky />
      </div>
      {/* // sticky version */}
    </>
  );
}
