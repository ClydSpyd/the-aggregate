import Slider from "react-slick";
import ArticleCard from "../article-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { accentColors, contrastColors } from "@/styles/color-config";
import { CtaCard } from "../cta-card";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  pauseOnHover: true,
  arrows: false,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
interface Props {
  idx: number;
  title: string;
  articles: PerigonArticle[];
  ctaIdx?: number;
}

export default function Track({ title, articles, idx, ctaIdx }: Props) {
  let sliderRef = useRef<Slider | null>(null);

  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--accent-color",
        Object.values(accentColors)[idx]
      );
      containerRef.current.style.setProperty(
        "--contrast-color",
        Object.values(contrastColors)[idx]
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardsWithMultipleCtas = (
    interval: number,
    startIndex: number
  ): JSX.Element[] => {
    let result: JSX.Element[] = [];
    let ctaIndex = startIndex;

    for (let i = 0; i < articles.length; i++) {
      if (i === ctaIndex) {
        result.push(<CtaCard key={`cta-card-${ctaIndex}`} />);
        ctaIndex += interval;
      }
      result.push(
        <ArticleCard key={articles[i].articleId} article={articles[i]} />
      );
    }

    return result;
  };
  return (
    <div ref={containerRef} className="w-full px-10">
      <div
        ref={titleRef}
        className="fade-line mb-4 mx-auto py-2 flex items-center justify-between w-[calc(100%-20px)]"
      >
        <div className="flex gap-3 items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="text-slate-500 mt-1 cursor-pointer hover:underline">
            see all
          </span>
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
          {ctaIdx
            ? cardsWithMultipleCtas(5, ctaIdx)
            : articles.map((i: PerigonArticle) => (
                <ArticleCard key={i.articleId} article={i} />
              ))}
        </Slider>
      </div>
    </div>
  );
}
