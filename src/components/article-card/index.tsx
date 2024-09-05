import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import ArticlePreview from "./article-preview";
import Link from "next/link";
import ArticleActionBtns from "../article-action-btns";

interface Props {
  article: PerigonArticle;
}

const expand_timeout = 800;

export default function ArticleCard({ article }: Props) {
  const [expandedState, setExpandedState] = useState(false);

  let timer: NodeJS.Timeout;
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    timer = setTimeout(() => {
      setExpandedState(true);
    },expand_timeout)
  }

  const handleMouseLeave = () => {
    clearTimeout(timer);
    setExpandedState(false);
  }

  const handleWidgetClick = (e: React.MouseEvent) => {
    handleMouseLeave();
  };


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
          <span
            onClick={handleWidgetClick}
            // onMouseEnter={handleMouseLeave}
            // onMouseLeave={handleMouseEnter}
            className="mb-1"
          >
            <ArticleActionBtns articleId={article.articleId} />
          </span>
        </div>
        {expandedState && (
          <ArticlePreview containerRef={containerRef} article={article} />
        )}
      </div>
    </Link>
  );
}
