/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

const interval = 8000

export default function useCarousel(slides: PerigonArticle[]) {
  const [slideData, setSlideData] = useState<{
    currentIdx: number;
    actualIdx: number;
    nextIdx: number;
    imgIdx: number;
  }>({
    actualIdx: 0,
    currentIdx: 0,
    imgIdx: 0,
    nextIdx: 1,
  });
  
  const currentRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const resetInterval = () => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
    timeoutRef.current = setInterval(() => {
      handleNext();
    }, interval);
  };

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      handleNext();
    }, interval);

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, []);

  const handleNext = (idx?: number | null) => {
    // actualIdx for slide dot state - instant update
    setSlideData((prev) => ({
      ...prev,
      actualIdx: idx ?? prev.nextIdx,
    }));

    // in response to dot click - idx argument is present
    if (typeof idx === "number"){
      resetInterval();
      setSlideData((prev) => ({ ...prev, nextIdx: idx }));
    }

    // transition current slide out
    currentRef.current?.classList.add("outRight");
    
    // transition next slide in after 300ms
    setTimeout(() => {
      nextRef.current?.classList.remove("waitLeft");
      setSlideData((prev) => ({
        ...prev,
        imgIdx: idx ?? prev.nextIdx,
      }));
    }, 300);

    // reset slide states in preperation for next transition with no animation
    setTimeout(() => {
      setSlideData((prev) => ({
        ...prev,
        currentIdx: prev.nextIdx,
        nextIdx: (prev.nextIdx + 1) % slides.length,
      }));
      currentRef.current?.classList.add("noTransition");
      nextRef.current?.classList.add("noTransition");
      currentRef.current?.classList.remove("outRight");
      nextRef.current?.classList.add("waitLeft");
    }, 1000);

    // reset transition class so that next transition animates
    setTimeout(() => {
      currentRef.current?.classList.remove("noTransition");
      nextRef.current?.classList.remove("noTransition");
    }, 1100);
  };

  return {
    slideData,
    nextRef,
    currentRef,
    handleNext,
  };
}
