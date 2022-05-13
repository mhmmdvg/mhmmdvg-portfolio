import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

type Items = {
  [key: string]: string;
};

type Post = {
  data: {
    [key: string]: string;
  };

  content: string;
};

const POSTS_PATH = join(process.cwd(), '_posts');

const getPostsFilePaths = (): string[] => {
  return readdirSync(POSTS_PATH).filter((path) => /\.mdx$/.test(path));
};

//Get single Post
export const getPost = (slug: string): Post => {
  const fullPath = join(POSTS_PATH, `${slug}.mdx`);
  const fileContents = readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
};

//load post items
export const getPostItems = (
  filePath: string,
  fields: string[] = []
): Items => {
  const slug = filePath.replace(/\.mdx$/, '');
  const { data, content } = getPost(slug);

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllPosts = (fields: string[]): Items[] => {
  const filePaths = getPostsFilePaths();
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, fields))
    .sort(
      (post1, post2) =>
        new Date(post2.date).getTime() - new Date(post1.date).getTime()
    );

  return posts;
};
