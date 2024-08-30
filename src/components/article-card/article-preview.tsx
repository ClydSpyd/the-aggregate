import React, { useEffect, useState } from "react";
import { getPopupPosition } from "./helpers";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { FaEye } from "react-icons/fa";
import Link from "next/link";

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
        "h-fit min-h-[250px] w-[450px] rounded-xl shadow-lg bg-slate-900 border border-white/40 backdrop-blur-sm bg-opacity-90 absolute ease-out duration-300 px-6 py-4",
        visible ? "" : "opacity-0"
      )}
      style={getPopupPosition(containerRef)}
    >
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
      <div className="min-h-[70px] flex items-center justify-center">
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
        {article.categories.length > 0 ? (
          <div className="flex gap-2">
            {article.categories.map((str: PericonCategory, idx: number) => (
              <p
                key={idx}
                className="rounded-full px-2 py-1 text-[var(--accent-color)] border border-[var(--accent-color)] text-xs"
              >
                {str.name}
              </p>
            ))}
          </div>
        ) : (
          <p></p>
        )}
        <Link href={articleUrl}>
          <div
            className={`h-[35px] text-sm w-fit rounded-lg text-slate-900 flex gap-2 items-center justify-center font-regular cursor-pointer px-4 bg-[var(--accent-color)] ease-out duration-200 hover:scale-105`}
          >
            <FaEye size={20} />
            View Article
          </div>
        </Link>
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
