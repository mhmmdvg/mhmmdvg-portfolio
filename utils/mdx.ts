import path from 'path';
import { ContentType, Post, Project } from '../type/mdxType';
import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { sync } from 'glob';

const BLOG_PATH = path.join(process.cwd(), 'commons', 'contents', 'blog');

export const getSlugs = (type: ContentType): string[] => {
  // const paths = sync(`${BLOG_PATH}/*.mdx`);
  const paths = sync(
    path.join(process.cwd(), 'commons', 'contents', type, '*.mdx')
  );

  return paths.map((path) => {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split('.');
    return slug;
  });
};

export const getAllPost = (type: ContentType) => {
  const blog = getSlugs(type)
    .map((slug) => getPostFromSlug(type, slug))
    .sort(
      (a, b) =>
        new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    );
  return blog;
};

export const getPostFromSlug = (type: ContentType, slug: string): Post => {
  const postPath = path.join(
    process.cwd(),
    'commons',
    'contents',
    type,
    `${slug}.mdx`
  );
  const source = readFileSync(postPath);

  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      title: data.title ?? slug,
      description: data.description,
      thumbnailUrl: data.thumbnailUrl,
      date: data.date,
      tags: (data.tags ?? []).sort(),
    },
  };
};

export const getAllProject = (type: ContentType) => {
  const blog = getSlugs(type)
    .map((slug) => getProject(type, slug))
    .sort(
      (a, b) =>
        new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    );
  return blog;
};

export const getProject = (type: ContentType, slug: string): Project => {
  const postPath = path.join(
    process.cwd(),
    'commons',
    'contents',
    type,
    `${slug}.mdx`
  );
  const source = readFileSync(postPath);

  const { content, data } = matter(source);

  return {
    content,
    meta: {
      title: data.title ?? slug,
      description: data.description,
      thumbnailUrl: data.thumbnailUrl,
      date: data.date,
      tags: (data.tags ?? []).sort(),
      link: data.link,
    },
  };
};
