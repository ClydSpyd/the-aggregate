import Image from "next/image";
import { useRef, useState } from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineShareAlt } from "react-icons/ai";
import { cn } from "@/lib/utils";
import ArticlePreview from "./article-preview";
import { redirect } from "next/navigation";
import Link from "next/link";
import ArticleActionBtns from "../article-action-btns";

interface Props {
  article: PerigonArticle;
}
export default function ArticleCard({ article }: Props) {
  const [expandedState, setExpandedState] = useState(false);

  let timer: NodeJS.Timeout;
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    timer = setTimeout(() => {
      setExpandedState(true);
    },600)
  }

  const handleMouseLeave = () => {
    clearTimeout(timer);
    setExpandedState(false);
  }

  const handleWidgetClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }

  // const handleRedirect = () => {
  //   console.log({ URL: article.internalUrl });
  //   redirect(article.internalUrl);
  // };

  return (
    <Link href={article.internalUrl}>
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "cardContainer flex flex-col items-center justify-between rounded-2xl h-full mx-2 p-2 pb-0 z-50 border border-white/20 group hover:border-white/40 ease-out duration-300 relative"
        )}
      >
        <div className="h-[170px] w-full relative rounded-xl overflow-hidden">
          <Image
            alt={"card image"}
            src={article.imageUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="absolute w-full h-full ease-out duration-500 group-hover:scale-[1.15]"
          />
        </div>
        <div className="w-full p-2 grow flex flex-col">
          <div className="w-full grow">
            <p className="text-sm leading-tight">{article.title}</p>
          </div>
          <span onClick={handleWidgetClick}>
            <ArticleActionBtns articleId={article.articleId} />
          </span>
          {/* <div
            onClick={handleWidgetClick}
            className="w-full h-[30px] flex justify-end gap-3"
          >
            <div className="h-[25px] w-[25px] rounded-md border flex items-center justify-center opacity-40 ease-out duration-500 group-hover:opacity-80 hover:!opacity-100 hover:scale-[1.15]">
              <IoBookmarkOutline size={18} />
            </div>
            <div className="h-[25px] w-[25px] rounded-md border flex items-center justify-center opacity-40 ease-out duration-500 group-hover:opacity-80 hover:!opacity-100 hover:scale-[1.15]">
              <AiOutlineShareAlt size={20} />
            </div>
          </div> */}
        </div>
        {expandedState && (
          <ArticlePreview containerRef={containerRef} article={article} />
        )}
      </div>
    </Link>
  );
}
