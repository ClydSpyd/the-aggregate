"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import {brandColors } from '@/styles/color-config';

export default function NavItem({
  item: { text, href },
  idx
}: {
  item: NavItem;
  idx: number;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const textRef = useRef<HTMLHeadingElement>(null);

  const hoverColors = [
    brandColors[1],
    brandColors[4],
    brandColors[5],
    brandColors[2],
    brandColors[3],
    brandColors[1],
  ];

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.setProperty("--hover-color", hoverColors[idx]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log({ hoverColors });

  return (
    <Link className="cursor-pointer" href={href}>
      <div
        key={href}
        ref={textRef}
        className={cn(`nav-item text-sm h-[20px] relative font-regular`)}
      >
        <h3 className="px-1">{text}</h3>
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
