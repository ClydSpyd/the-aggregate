import { useEffect, useState } from "react";

export default function useBookmarks(){
    const [bookmarks,setBookmarks] = useState<string[]>([]);
    let lsBookmarks = localStorage.getItem("aggregate_bookmarks");

    useEffect(() => {
        if (lsBookmarks) setBookmarks(JSON.parse(lsBookmarks));
    },[lsBookmarks])

    const handleBookmark = (articleId: string) => {
      let payload: string[] = [];

      // no bookmarks in LS
      if (!lsBookmarks) payload = [articleId];

      // articleId not included in bookmarks
      if (lsBookmarks && !JSON.parse(lsBookmarks).includes(articleId)) {
          payload = [...JSON.parse(lsBookmarks), articleId]
        }
        
    // articleId included in bookmarks
      if (lsBookmarks && JSON.parse(lsBookmarks).includes(articleId)) {
        payload = [
          ...JSON.parse(lsBookmarks).filter((i: string) => i !== articleId),
        ];
      }

      localStorage.setItem("aggregate_bookmarks", JSON.stringify(payload));
      setBookmarks(payload);
    };

    return { bookmarks, handleBookmark };
}