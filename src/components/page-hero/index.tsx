/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import "@/styles/page-hero.scss";
import { cn } from "@/lib/utils";
import useCarousel from "./useCarousel";
import { useEffect, useState } from "react";

const SlideContent = ({ story }: { story: PerigonArticle }) => {
  const { title, description, categories } = story;
  return (
    <>
      {categories.length > 0 && (
        <div className="px-2 bg-brandOne text-white rounded-full w-fit text-sm mb-1 lowercase pointer-events-none">
          {categories[0]?.name}
        </div>
      )}
      <h1 className="text-[35px] leading-tight text-white font-bold mb-2 max-w-[650px] ">
        {title}
      </h1>
      <p className="text-md max-w-[600px] ">{description}</p>
      <div className="h-[35px] w-[150px] rounded-md text-brandOne bg-white flex items-center justify-center mt-4 cursor-pointer font-regular">
        Read Full Article
      </div>
    </>
  );
};

export default function PageHero({
  topStories,
}: {
  topStories: PerigonArticle[];
}) {
  const [imageUrl, setImageUrl] = useState<string>(topStories[0].imageUrl);

  const { handleNext, slideData, nextRef, currentRef } =
    useCarousel(topStories);

  useEffect(() => {
    setImageUrl(topStories[slideData.imgIdx].imageUrl);
  }, [slideData.imgIdx]);

  return (
    topStories[0] && (
      <div className="w-full h-[80%] flex items-end px-8 py-6 relative">
        <Image
          alt={"hero image"}
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="absolute w-full h-full"
        />
        <div ref={nextRef} className="textContainer waitLeft">
          <SlideContent story={topStories[slideData.nextIdx]} />
        </div>
        <div ref={currentRef} className="textContainer">
          <SlideContent story={topStories[slideData.currentIdx]} />
        </div>
        <div className="grad-overlay-bottom" />
        <div className="absolute-center-horiz flex bottom-[10px] z-10">
          {topStories.map((i, idx) => (
            <div
              onClick={() => handleNext(idx)}
              key={idx}
              className={cn(
                "group h-[25px] w-[15px] flex items-center justify-center cursor-pointer hover:w-[30px] transition-all ease-linear duration-[150ms]",
                idx === slideData.actualIdx
                  ? "pointer-events-none"
                  : "pointer-events-auto"
              )}
            >
              <div
                className={cn(
                  "h-[8px] w-[8px] transition-all ease-linear duration-[200ms] rounded-full cursor-pointer group-hover:h-[18px] group-hover:w-[18px]",
                  idx === slideData.actualIdx ? "bg-white" : "bg-white/30"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    )
  );
}




// <div className="absolute top-[150px] left-[50px] flex items-center gap-2 z-40">
//   <p>current: {slideData.currentIdx}</p>
//   <p>next: {slideData.nextIdx}</p>
//   <p>actual: {slideData.actualIdx}</p>
// </div>
// <div className="absolute top-20 left-5 z-20 flex gap-1">
//   <div
//     onClick={() => handleNext(null)}
//     className="h-[10px] w-[10px] border border-lime-400 cursor-pointer"
//   />
// </div>

//   nextIdx:
//     LEFT: (slideData.currentIdx - 1 + topStories.length) % topStories.length,
//     RIGHT: nextIdx: (slideData.currentIdx + 1) % topStories.length,
