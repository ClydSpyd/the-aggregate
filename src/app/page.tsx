"use client";
import PageHero from "@/components/page-hero";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [stories, setStories] = useState<PerigonArticle[] | null>(null);
  useEffect(() => {
    const getStories = async () => {
      const { data } = await axios.get(`/data/stories4.json`);
      console.log({ data });
      setStories(
        data.articles.filter(
          (i: PerigonArticle) => i.title.length < 85 && i.title.length > 30
        )
      );
    };

    getStories();
  }, []);

  return (
    stories && (
      <>
        <PageHero topStories={stories.slice(17, 27)} />
      </>
    )
  );
}
