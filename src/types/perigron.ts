declare interface PericonCategory {
  name: string;
}

declare interface PerigonKeyword {
  name: string;
  weight: number;
}

declare interface PerigonArticle {
  addDate: string;
  authorsByLine: string;
  articleId: string;
  categories: PericonCategory[];
  content: string;
  country: string;
  description: string;
  imageUrl: string;
  keywords: PerigonKeyword[]
  links: string[];
  matchedAuthors: Array<{ id: string; name: string }>;
  source: { domain: string; paywall: boolean };
  title: string;
  url: string;
}
