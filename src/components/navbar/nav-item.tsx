"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ item: { text, href } }: { item: NavItem }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link className="cursor-pointer" href={href}>
      <div key={href} className={cn("text-sm h-[25px] relative font-regular")}>
        <h3>{text}</h3>
        <div
          className={cn(
            "w-full transition-all duration-300 ease-in-out bg-white absolute bottom-0 left-0",
            isActive ? "h-[2px] opacity-100" : "h-0 opacity-0"
          )}
        />
      </div>
    </Link>
  );
}
