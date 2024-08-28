"use client";
import API from "@/api";
import PageHero from "@/components/page-hero";
import Track from "@/components/track";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function HomeContent() {
  const [stories, setStories] = useState<PerigonArticle[] | null>(null);
  const [storiesTech, setStoriesTech] = useState<PerigonArticle[] | null>(null);
  const [storiesScience, setStoriesScience] = useState<PerigonArticle[] | null>(
    null
  );
  const [storiesSports, setStoriesSports] = useState<PerigonArticle[] | null>(
    null
  );
  const [storiesPolitics, setStoriesPolitics] = useState<
    PerigonArticle[] | null
  >(null);
  const [storiesLifestyle, setStoriesLifestyle] = useState<
    PerigonArticle[] | null
  >(null);

  const fetchStories = async (
    category: ArticleCategory,
    setter: Dispatch<SetStateAction<PerigonArticle[] | null>>
  ) => {
    const data = await API.getStoriesByCategory(category);
    setter(data);
  };
  useEffect(() => {
    fetchStories("trending", setStories);
    fetchStories("tech", setStoriesTech);
    fetchStories("politics", setStoriesPolitics);
    fetchStories("lifestyle", setStoriesLifestyle);
    fetchStories("science", setStoriesScience);
    fetchStories("sports", setStoriesSports);
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
            category={"tech"}
            idx={0}
            title="Tech"
            articles={storiesTech?.slice(5, 20) ?? []}
          />
          <Track
            category={"sports"}
            idx={1}
            title="Sports"
            articles={storiesSports ?? []}
          />
          <Track
            category={"politics"}
            idx={2}
            title="Politics"
            articles={storiesPolitics ?? []}
          />
          <Track
            category={"science"}
            idx={3}
            title="Science"
            articles={storiesScience ?? []}
          />
          <Track
            category={"lifestyle"}
            idx={4}
            title="Lifestyle"
            articles={storiesLifestyle ?? []}
          />
        </div>
      </>
    )
  );
}
