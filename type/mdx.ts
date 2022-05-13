export interface Post {
    content: string;
    meta: PostMeta;
}

export interface PostMeta {
    title: string;
    slug: string;
    description: string;
    date: string;
    thumbnailUrl?: string;
    tags: string[];
}