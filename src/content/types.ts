
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: JSX.Element;
  author: string;
}

export interface BlogPostType {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: JSX.Element;
  author?: string;
}
