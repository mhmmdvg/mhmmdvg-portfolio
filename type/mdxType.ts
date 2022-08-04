export interface Post {
  content: string;
  meta: PostMeta;
}

export interface Project {
  content: string;
  meta: ProjectMeta;
}

export type ContentType = 'blog' | 'project';

export interface PostMeta {
  title: string;
  slug: string;
  description: string;
  date: string;
  thumbnailUrl?: string | any;
  tags: string[];
}

export interface ProjectMeta {
  title: string;
  description: string;
  date: string;
  thumbnailUrl?: string | any;
  tags: string[];
  link?: string | any;
}

export interface ToCHeadingProps {
  id: string;
  level: number;
  text: string;
}
