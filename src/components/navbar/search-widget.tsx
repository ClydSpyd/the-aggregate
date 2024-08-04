import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchWidget() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className={cn(
        "flex items-center gap-0 transition-all duration-[400ms] ease-out overflow-hidden",
        open ? "w-[200px] border bg-white px-1 rounded-full" : "w-[35px]"
      )}
    >
      <div
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="transition-all duration-500 ease-out flex items-center justify-center rounded-md cursor-pointer text-white text-sm h-[30px] w-[30px] border border-transparent hover:border-white bg-transparent hover:bg-white hover:bg-opacity-30"
      >
        <IoSearchSharp
          size={20}
          className={cn(
            "pointer-events-none",
            open ? "text-black" : "text-white"
          )}
        />
      </div>
      {open && (
        <input
          autoFocus
          type="text"
          className="h-[30px] w-[130px] bg-transparent outline-none text-black text-sm"
        />
      )}
    </div>
  );
}
