interface NavItem {
  text: string;
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
  | "science";