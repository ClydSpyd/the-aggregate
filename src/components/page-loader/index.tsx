import animationData from "@/animations/logo-loop.json";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
export default function PageLoader() {
  const [ellipsis, setEllipsis] = useState("");
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setEllipsis((prevEllipsis) => {
        if (prevEllipsis.length === 3) {
          return "";
        } else {
          return prevEllipsis + ".";
        }
      });
    }, 400);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center pb-[20vh]">
      <Lottie
        loop={true}
        autoPlay={false}
        lottieRef={lottieRef}
        animationData={animationData}
        style={{ height: "180px", width: "220px" }}
        className={"animate-pulseGrow"}
      />
      <h1 className="w-[165px] relative top-[-20px] overflow-visible whitespace-nowrap opacity-80">populating your feed{ellipsis}</h1>
    </div>
  );
}
