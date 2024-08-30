import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useEffect, useState } from "react";
import useBookmarks from "@/hooks/useBookmarks";
import { cn } from "@/lib/utils";

export default function ArticleActionBtns({
  articleId,
}: {
  articleId: string;
}) {
    const { bookmarks, handleBookmark } = useBookmarks();
  const [isBookmarked, toggleBookmarked] = useState<boolean>(
    bookmarks.includes(articleId)
  );

  useEffect(() => {
    console.log({ bookmarks, articleId });
    toggleBookmarked(bookmarks.includes(articleId));
  }, [articleId, bookmarks]);

  return (
    <div className="w-full h-[30px] flex justify-end gap-3">
      <div
        onClick={() => {
          handleBookmark(articleId);
        }}
        className={cn(
          "h-[25px] w-[25px] rounded-md border flex items-center justify-center ease-out duration-500 group-hover:opacity-80 hover:!opacity-100 hover:scale-[1.15] cursor-pointer",
          isBookmarked ? "opacity-100 border-[var(--accent-color)]" : "opacity-40"
        )}
      >
        {isBookmarked ? (
          <IoBookmark size={18} fill="var(--accent-color)" />
        ) : (
          <IoBookmarkOutline size={18} />
        )}
      </div>
      <div className="h-[25px] w-[25px] rounded-md border flex items-center justify-center opacity-40 ease-out duration-500 group-hover:opacity-80 hover:!opacity-100 hover:scale-[1.15] cursor-pointer">
        <AiOutlineShareAlt size={20} />
      </div>
    </div>
  );
}
