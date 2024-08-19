import Image from "next/image";
import { useRef } from "react";
import { IoShareSocial, IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineShareAlt } from "react-icons/ai";


interface Props {
  article: PerigonArticle;
}
export default function ArticleCard({ article }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (containerRef.current) {
  //     containerRef.current.style.setProperty(
  //       "--image-url",
  //       `url(${article.imageUrl})`
  //     );
  //   }
  // }, [article]);
  return (
    <div
      ref={containerRef}
      className="cardContainer flex flex-col items-center justify-between rounded-2xl overflow-hidden h-full mx-2 p-2 pb-0 border border-white/20 group hover:border-white/40 ease-out duration-300"
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
        <div className="w-full h-[30px] flex justify-end gap-3">
          <div className="h-[25px] w-[25px] rounded-md border flex items-center justify-center opacity-40 ease-out duration-500 group-hover:opacity-80 hover:!opacity-100 hover:scale-[1.15]">
            <IoBookmarkOutline size={18} />
          </div>
          <div className="h-[25px] w-[25px] rounded-md border flex items-center justify-center opacity-40 ease-out duration-500 group-hover:opacity-80 hover:!opacity-100 hover:scale-[1.15]">
            <AiOutlineShareAlt size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
