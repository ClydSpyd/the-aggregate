"use client";
import PageHero from "@/components/page-hero";
import Track from "@/components/track";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function HomeContent() {
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
        </div>
      </>
    )
  );
}
