import routes from "@/constants/routes";
import axios from "axios";

const fileLocations: Partial<Record<ArticleCategory, string>> = {
  trending: `/data/stories5.json`,
  tech: `/data/stories_tech.json`,
  politics: `/data/stories_politics.json`,
  lifestyle: `/data/stories_lifestyle.json`,
  science: `/data/stories_science.json`,
  sports: `/data/stories_sports.json`,
};

const getStoriesByCategory = async (
  category: ArticleCategory
): Promise<PerigonArticle[]> => {
  const url = fileLocations[category]!;
  const { data } = await axios.get(url);
  console.log({ data });
  return data.articles
    .filter(
      (i: PerigonArticle) =>
        i.title.length < 85 && i.title.length > 30 && i.imageUrl !== ""
    )
    .map((article: PerigonArticle) => ({
      ...article,
      articleCategory: category,
      internalUrl: `/${routes.article}/${category}/${article.articleId}`
    }));
};

const getStoryById = async (
  category: ArticleCategory,
  articleId: string
): Promise<PerigonArticle> => {
  const allArticles = await getStoriesByCategory(category);
  const articleIdx = allArticles.findIndex(
    (i: PerigonArticle) => i.articleId === articleId
  );
  return allArticles[articleIdx];
};

const API = {
  getStoriesByCategory,
  getStoryById,
};

export default API;
