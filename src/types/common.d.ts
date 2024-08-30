interface NavItem {
  text: ArticleCategory;
  href: string;
}

declare type ArticleCategory =
  | "trending"
  | "business"
  | "entertainment"
  | "environment"
  | "general"
  | "health"
  | "sports"
  | "politics"
  | "tech"
  | "travel"
  | "science"
  | "lifestyle";