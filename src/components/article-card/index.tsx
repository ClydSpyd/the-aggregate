import Image from "next/image";
import { useEffect, useRef } from "react";

interface Props {
  article: PerigonArticle;
}
export default function ArticleCard({ article }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--image-url",
        `url(${article.imageUrl})`
      );
    }
  }, [article]);
  return (
    <div
      ref={containerRef}
      className="cardContainer flex flex-col justify-between rounded-3xl overflow-hidden h-full mx-2"
    >
      <div className="h-[170px] w-full relative">
        <Image
          alt={"card image"}
          src={article.imageUrl}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute w-full h-full"
        />
      </div>
      <div
        className="w-full p-4 backdrop-blur-md grow rounded-none bg-slate-950 bg-opacity-70"
      >
        {/* {article.categories.length > 0 && (
          <div>{article.categories[0].name}</div>
        )} */}
        <p className="text-sm leading-tight">{article.title}</p>
      </div>
    </div>
  );
}
