import { readdirSync, readFileSync } from 'fs';
import { bundleMDX } from 'mdx-bundler';
import { join } from 'path';
import {
  ChooseFrontmatter,
  CodeFrontmatter,
  ContentType,
  ResultFrontmatter,
} from '../type/mdxType';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import matter from 'gray-matter';
import {serialize} from "next-mdx-remote/serialize";

export function getPostSlug(type: ContentType) {
  return readdirSync(join(process.cwd(), 'contents', type));
}

// export async function getPostBySlug(
//   type: ContentType = 'blog',
//   slug: string
// ): Promise<CodeFrontmatter> {
//   // get mdx file from contents folder
//   const source = slug
//     ? readFileSync(join(process.cwd(), 'contents', type, `${slug}.mdx`), 'utf8')
//     : readFileSync(
//         join(process.cwd(), 'src', 'contents', `${type}.mdx`),
//         'utf8'
//       );

//   // get code and frontmatter from bundleMDX
//   const { code, frontmatter } = await bundleMDX({
//     source,
//     xdmOptions(options: any) {
//       options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
//       options.rehypePlugins = [
//         ...(options.rehypePlugins ?? []),
//         rehypePrism,
//         rehypeSlug,
//         rehypeAutolinkHeadings,
//       ];

//       return options;
//     },
//   });

//   return {
//     code,
//     frontmatter,
//   };
// }

export async function getPostBySlug(
  type: ContentType = 'blog',
  slug: string
): Promise<CodeFrontmatter> {
  const source = slug
    ? readFileSync(join(process.cwd(), 'contents', type, `${slug}.mdx`), 'utf8')
    : readFileSync(
        join(process.cwd(), 'src', 'contents', `${type}.mdx`),
        'utf8'
      );

  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypePrism,
        rehypeSlug,
        rehypeAutolinkHeadings,
      ];

      return options;
    },
  });

  return {
    code,
    frontmatter,
  };
}


export async function getAllPosts(type: ContentType) {
  const files = getPostSlug(type);

  /**
   * Retrieve frontmatter featured content (3)
   * @param type request blog/project
   * @returns {(BaseFrontmatter & AdditionalResult)[]}
   */
  return files.map((filename) => {
    const source = readFileSync(
      join(process.cwd(), 'contents', type, filename),
      'utf8'
    );

    const { data: frontMatter } = matter(source);

    const res: ResultFrontmatter<typeof type> = {
      ...(frontMatter as ChooseFrontmatter<'blog'>),
      date: (frontMatter as ChooseFrontmatter<'blog'>).date,
      slug: filename.replace('.mdx', ''),
    };

    return res;
  });
}

export async function getFeatured(type: ContentType) {
  const files = getPostSlug(type);
  const featuredContent = [];

  for (let i = 0; i < 3; i++) {
    const source = readFileSync(
      join(process.cwd(), 'contents', type, files[i]),
      'utf8'
    );

    const { data } = matter(source);

    const res: ResultFrontmatter<typeof type> = {
      ...(data as ChooseFrontmatter<'blog'>),
      slug: files[i].replace('.mdx', ''),
    };
    featuredContent.push(res);
  }

  return featuredContent;
}
