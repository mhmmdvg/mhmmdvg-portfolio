export type ContentType = 'blog' | 'project';

export type BaseFrontmatter = {
  title: string;
  description: string;
  thumbnail: string;
  date: string;
};

export type BlogFrontmatter = {} & BaseFrontmatter;

export type BlogType = {
  code: string;
  frontmatter: BlogFrontmatter;
};

export type ProjectFrontmatter = {
  stack: string;
  thumbnail: string;
} & BaseFrontmatter;

export type ProjectType = {
  code: string;
  frontmatter: ProjectFrontmatter;
};

export type AdditionalResult = {
  slug: string;
};

export type CodeFrontmatter = {
  code: string;
  frontmatter: {
    [key: string]: any;
  };
};

export type ChooseFrontmatter<T extends ContentType> = T extends 'blog'
  ? BlogFrontmatter
  : ProjectFrontmatter;

export type ResultFrontmatter<T extends ContentType> = T extends 'blog'
  ? BlogFrontmatter & AdditionalResult
  : ProjectFrontmatter & AdditionalResult;
