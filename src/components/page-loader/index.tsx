import animationData from "@/animations/logo-loop.json";
import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
export default function PageLoader({
  message = "populating your feed",
}: {
  message?: string;
}) {
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

  const textWidth = message.length * 8

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
      <h1
        style={{ width: `${textWidth}px` }}
        className="relative top-[-20px] overflow-visible whitespace-nowrap opacity-80"
      >
        {message}
        {ellipsis}
      </h1>
    </div>
  );
}
