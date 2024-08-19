import animationData from "@/animations/logo-loop.json";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from 'lottie-react'

export default function LogoDynamic() {
    const [isPaused, setIsPaused] = useState<boolean>(true);
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        setTimeout(() => {
            lottieRef.current?.pause();
        },4200)
    },[])
  return (
    <div
      onMouseEnter={() => {
        setIsPaused(false);
        lottieRef.current?.play();
      }}
      onMouseLeave={() => {
        setIsPaused(true);
        lottieRef.current?.pause();
      }}
      className={cn(
        "h-full w-fit flex items-center gap-2 cursor-pointer"
      )}
    >
      <Lottie
        loop={true}
        autoPlay={false}
        lottieRef={lottieRef}
        animationData={animationData}
        style={{ height: "70px", width: "90px" }}
        className={cn(!isPaused ? "animate-pulseGrow" : "")}
      />
      <h1>The Aggregate</h1>
    </div>
  );
}
