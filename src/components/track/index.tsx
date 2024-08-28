import Slider from "react-slick";
import ArticleCard from "../article-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import { LuChevronRightSquare, LuChevronLeftSquare } from "react-icons/lu";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { brandColors } from "@/styles/color-config";

interface Props {
  idx: number;
  title: string;
  articles: PerigonArticle[];
  category: ArticleCategory;
}

// var resSettings = {
//   dots: true,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 2,
//   slidesToScroll: 4,
//   initialSlide: 0,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

const accentColors = [
  brandColors[2],
  brandColors[1],
  brandColors[4],
  brandColors[5],
  brandColors[3],
  brandColors[1],
];


export default function Track({ title, articles, idx, category }: Props) {
  let sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    variableWidth: true,
  };

  const titleRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--accent-color", accentColors[idx]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div ref={containerRef} className="w-full px-10">
      <div ref={titleRef} className="track-title mb-4 mx-auto py-2 flex items-center justify-between w-[calc(100%-20px)]">
        <div className="flex gap-3 items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="text-slate-500 mt-1 cursor-pointer hover:underline">see all</span>
        </div>
        <div className="flex gap-1">
          <div
            onClick={() => {
              sliderRef.current?.slickPrev();
            }}
            className="transition-all duration-500 ease-out flex items-center justify-center rounded-md cursor-pointer text-white text-sm h-[30px] w-[30px] border border-transparent hover:border-white bg-transparent hover:bg-white hover:bg-opacity-30"
          >
            <BiChevronLeft
              size={23}
              className="text-white pointer-events-none"
            />
          </div>
          <div
            onClick={() => {
              sliderRef.current?.slickNext();
            }}
            className="transition-all duration-500 ease-out flex items-center justify-center rounded-md cursor-pointer text-white text-sm h-[30px] w-[30px] border border-transparent hover:border-white bg-transparent hover:bg-white hover:bg-opacity-30"
          >
            <BiChevronRight
              size={23}
              className="text-white pointer-events-none"
            />
          </div>
        </div>
      </div>
      <div className="w-full px-2">
        <Slider ref={sliderRef} {...settings}>
          {articles.map((i: PerigonArticle) => (
            <ArticleCard key={i.articleId} article={i} category={category} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
