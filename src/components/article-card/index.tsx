import Image from "next/image";

interface Props {
  article: PerigonArticle;
}
export default function ArticleCard({ article }: Props) {
  return (
    <div className="flex flex-col justify-between rounded-xl border-2 border-white/10 overflow-hidden h-full mx-2">
      <div className="h-[140px] w-full relative">
        <Image
          alt={"card image"}
          src={article.imageUrl}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute w-full h-full"
        />
      </div>
      <div className="w-full p-4 bg-black/50 backdrop-blur-md grow">
        {/* {article.categories.length > 0 && (
          <div>{article.categories[0].name}</div>
        )} */}
        <p text-xs>{article.title}</p>
      </div>
    </div>
  );
}
