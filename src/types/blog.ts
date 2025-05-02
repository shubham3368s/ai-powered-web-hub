
export interface BlogAuthor {
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: BlogAuthor;
  category: string;
  tags: string[];
  publishDate: string;
  readTime: string;
  image: string;
  featured: boolean;
}
