import { useEffect, useState } from "react";

export default function useSticky(scrollThreshold: number) {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    if (window !== undefined) {
      setIsSticky(window?.scrollY > scrollThreshold);
    }
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY >= scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return isSticky;
}
