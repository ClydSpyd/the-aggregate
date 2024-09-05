import React, { useEffect, useState } from "react";
import { getPopupPosition } from "./helpers";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import ArticleActionBtns from "../article-action-btns";
import CardTags from "../card-tags";

export default function ArticlePreview({
  containerRef,
  article,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  article: PerigonArticle;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    
    return () => clearTimeout(timer);
  }, []);

  const bracketIdx = article.content.indexOf("[");
  const articleUrl = `/read/${article.articleCategory}/${article.articleId}`;

  return (
    <div
      className={cn(
        "h-[calc(100%+40px)] gap-2 w-[650px] rounded-xl shadow-lg bg-slate-900 border border-white/40 backdrop-blur-sm bg-opacity-90 absolute ease-in-out duration-500 p-2",
        visible ? "scale-100" : "opacity-0 scale-50"
      )}
      style={{
        ...getPopupPosition(containerRef),
        transform: `translate(-50%, -50%) scale(${visible ? "1" : "0.7"})`,
      }}
    >
      <div className="w-[300px] min-w-[300px] h-full relative rounded-lg overflow-hidden">
        <Image
          alt={"card image"}
          src={article.imageUrl}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute w-full h-full"
        />
        <div className="absolute top-2 left-2">
          <CardTags categories={article.categories ?? []} />
        </div>
      </div>
      <div className="grow flex flex-col h-full p-3">
        <div className="w-full flex justify-start items-center mb-2 gap-1">
          {article.source.domain ? (
            <p className="text-[var(--accent-color)] text-lg font-semibold rounded-full">
              {article.source.domain}
            </p>
          ) : (
            <p></p>
          )}
          <p className="text-[10px] text-white/50 mt-[6px]">
            {format(new Date(article.addDate), "EEEE do MMMM, y")}
          </p>
        </div>
        <h1 className="text-xl font-semibold mb-2">{article.title}</h1>
        <div className="min-h-[70px] grow flex items-center justify-center">
          {article.content.length > 10 ? (
            <p className="text-slate-300 text-sm">
              {article.content.slice(0, bracketIdx)}
            </p>
          ) : (
            <p className="text-xs text-white/20 relative bottom-2">
              [no preview found]
            </p>
          )}
        </div>
        <div className="w-full flex justify-between items-center mt-3">
          <ArticleActionBtns articleId={article.articleId} />
          <Link href={articleUrl}>
            <div
              className={`h-[35px] text-sm w-fit rounded-lg text-slate-900 flex gap-2 items-center justify-center font-regular cursor-pointer px-4 bg-[var(--accent-color)] ease-out duration-200 hover:scale-105`}
            >
              <FaEye size={20} />
              View
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

// position: "absolute",
// height: `150px`,
// width: `600px`,
// border: "1px solid red",
// backgroundColor: "white",
// boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
// zIndex: 10,
