/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import API from "@/api";
import { useEffect, useState } from "react";

export default function ArticlePage({
  params: { category, articleId },
}: {
  params: { category: ArticleCategory; articleId: string };
}) {
    const [storyData, setStoryData] = useState<
      PerigonArticle | null | "not found"
    >(null);
    const fetchStoryData = async () => {
        const data = await API.getStoryById(category, articleId);
        console.log({ story: data });
        setStoryData(data);
    }
    useEffect(() => {
        fetchStoryData();
    },[])
  return (
    <>
      <h1>category: {category}</h1>
      <h1>articleId: {articleId}</h1>
    </>
  );
}
