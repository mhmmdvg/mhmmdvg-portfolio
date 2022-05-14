export interface Post {
  content: string;
  meta: PostMeta;
}

export interface PostMeta {
  title: string;
  slug: string;
  description: string;
  date: string;
  thumbnailUrl?: string | any;
  tags: string[];
}

export interface ToCHeadingProps {
  id: string;
  level: number;
  text: string;
}
