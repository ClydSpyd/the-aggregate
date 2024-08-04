"use client";
import PageHero from "@/components/page-hero";
import Track from "@/components/track";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function Home() {
  const [stories, setStories] = useState<PerigonArticle[] | null>(null);
  const [storiesTech, setStoriesTech] = useState<PerigonArticle[] | null>(null);
  const [storiesPolitics, setStoriesPolitics] = useState<
    PerigonArticle[] | null
  >(null);
  const [storiesLifestyle, setStoriesLifestyle] = useState<
    PerigonArticle[] | null
  >(null);
  useEffect(() => {
    const getStories = async (
      url: string,
      setter: Dispatch<SetStateAction<PerigonArticle[] | null>>
    ) => {
      const { data } = await axios.get(url);
      console.log({ data });
      setter(
        data.articles.filter(
          (i: PerigonArticle) =>
            i.title.length < 85 && i.title.length > 30 && i.imageUrl !== ""
        )
      );
    };

    getStories(`/data/stories4.json`, setStories);
    getStories(`/data/stories_tech.json`, setStoriesTech);
    getStories(`/data/stories_politics.json`, setStoriesPolitics);
    getStories(`/data/stories_lifestyle.json`, setStoriesLifestyle);
  }, []);

  return (
    stories && (
      <>
        <PageHero topStories={stories.slice(17, 27)} />
        <div className="w-full mt-10 flex flex-col gap-10">
          <Track title="Tech" articles={storiesTech?.slice(5, 20) ?? []} />
          <Track title="Lifestyle" articles={storiesLifestyle ?? []} />
          <Track title="Politics" articles={storiesPolitics ?? []} />
        </div>
      </>
    )
  );
}
