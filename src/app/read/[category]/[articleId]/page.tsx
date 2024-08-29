/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import API from "@/api";
import PageLoader from "@/components/page-loader";
import { accentColors } from "@/styles/color-config";
import { format } from "date-fns";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ArticlePage({
  params: { category, articleId },
}: {
  params: { category: ArticleCategory; articleId: string };
}) {
  const [storyData, setStoryData] = useState<
    PerigonArticle | null | "not found"
  >(null);
  const containerRef = useRef<HTMLDivElement>(null)
  const fetchStoryData = async () => {
    const data = await API.getStoryById(category, articleId);
    console.log({ story: data });
    setTimeout(() => {
      setStoryData(data ?? "not found");
    }, 1500);
  };
  useEffect(() => {
    fetchStoryData();
  }, []);

  useEffect(() => {
    fetchStoryData();
    if (containerRef.current && storyData && storyData !== "not found") {
      containerRef.current.style.setProperty(
        "--accent-color",
        accentColors[storyData.articleCategory]!
      );
    }
  }, [storyData, containerRef]);

  if (!storyData) {
    return <PageLoader message="Fetching story" />;
  }

  if(storyData === "not found"){
    return (
      <div className="w-full h-[85vh] flex items-center justify-center">
        <h1>STORY NOT FOUND :(</h1>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-[85%] max-w-[1000px] mx-auto">
      <div className="mb-4 mx-auto w-full flex flex-col items-center text-center">
        <div className="w-full flex mb-3 justify-center">
          <p className="border border-[var(--accent-color)] text-[var(--accent-color)] rounded-full px-2">
            {storyData.articleCategory}
          </p>
        </div>
        <h1 className="text-[44px] font-bold leading-[50px]">
          {storyData.title}
        </h1>
        <div className="w-full pt-5 mb-2 flex items-end justify-center gap-2">
          {storyData.source.domain ? (
            <p className="text-xl text-[var(--accent-color)] font-semibold rounded-full">
              {storyData.source.domain}
            </p>
          ) : (
            <p></p>
          )}

          <p className="whitespace-nowrap text-xs text-white/50 mb-1">
            {format(new Date(storyData.addDate), "EEEE do MMMM, y")}
          </p>
        </div>
      </div>
      <div className="mb-6 mx-auto w-full h-[60vh]">
        <div className="overflow-hidden rounded-3xl w-full h-full flex items-end px-8 py-6 relative">
          <Image
            alt={"hero image"}
            src={storyData.imageUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="absolute w-full h-full ease-out duration-300"
          />
        </div>
      </div>
      <p className="w-full mx-auto mb-2">
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
      </p>
      <p className="w-full mx-auto mb-2">
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
      </p>
      <p className="w-full mx-auto mb-2">
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
      </p>
      <p className="w-full mx-auto mb-2">
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
        {storyData.content.slice(0, 200)}
      </p>
      {/*
      <h5>articleId: {articleId}</h5> */}
    </div>
  );
}
