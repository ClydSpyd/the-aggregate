"use client";
import PageHero from "@/components/page-hero";
import Track from "@/components/track";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function Home() {
  const [stories, setStories] = useState<PerigonArticle[] | null>(null);
  const [storiesTech, setStoriesTech] = useState<PerigonArticle[] | null>(null);
  const [storiesScience, setStoriesScience] = useState<PerigonArticle[] | null>(null);
  const [storiesSports, setStoriesSports] = useState<PerigonArticle[] | null>(null);
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

    getStories(`/data/stories5.json`, setStories);
    getStories(`/data/stories_tech.json`, setStoriesTech);
    getStories(`/data/stories_politics.json`, setStoriesPolitics);
    getStories(`/data/stories_lifestyle.json`, setStoriesLifestyle);
    getStories(`/data/stories_science.json`, setStoriesScience);
    getStories(`/data/stories_sports.json`, setStoriesSports);
  }, []);

  return (
    stories && (
      <>
        <PageHero
          topStories={[
            ...stories.slice(15, 20),
            ...stories.slice(22, 26),
            ...stories.slice(28, 30),
          ]}
        />
        <div className="w-full mt-5 flex flex-col gap-10">
          <Track
            idx={0}
            title="Tech"
            articles={storiesTech?.slice(5, 20) ?? []}
          />
          <Track idx={1} title="Sports" articles={storiesSports ?? []} />
          <Track idx={2} title="Politics" articles={storiesPolitics ?? []} />
          <Track idx={3} title="Science" articles={storiesScience ?? []} />
          <Track idx={4} title="Lifestyle" articles={storiesLifestyle ?? []} />
          <div className="fixed top-0 bottom-0 w-full overflow-hidden z-[-1]">
            <div className="absolute h-[850px] w-[850px] bottom-[-800px] right-[-200px] flare opacity-70" />
            <div className="fixed h-[1700px] w-[1700px] top-[-1000px] right-[-900px] flare opacity-80" />
            <div className="absolute h-[1700px] w-[1700px] top-[-100px] left-[-1000px] flare opacity-65" />
          </div>
        </div>
      </>
    )
  );
}
