import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getPostFromSlug, getSlugs } from '../../utils/mdx';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { PostMeta, ToCHeadingProps } from '../../type/mdxType';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import { useEffect, useState } from 'react';
import remarkGfm from 'remark-gfm';
import TableOfContent from '../../components/pages/blog/TableOfContent';
import { useRouter } from 'next/router';
import useLoaded from '../../hooks/use-loading';
import HeaderPost from '../../components/pages/blog/HeaderPost';
import { blogPostComponents } from '../../components/pages/blog/BlogPost-component';

type MDXPost = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug('blog', slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypePrism,
        remarkGfm,
      ],
    },
  });
  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs('blog').map((slug) => ({
    params: { slug: slug.replace('.mdx', '') },
  }));

  return { paths, fallback: false };
};

const Post = ({ post }: { post: MDXPost }) => {
  const isLoaded = useLoaded();

  const [tableContent, setTableContent] = useState<ToCHeadingProps[]>();

  useEffect(() => {
    const headings = document.querySelectorAll('h2, h3');

    const headingArr: ToCHeadingProps[] = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      headingArr.push({ id, level, text });
    });

    setTableContent(headingArr);
  }, [post.source]);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <section
        className={`min-h-[100vh] mx-auto px-5 flex flex-col pt-28 xl:w-[68rem] ${
          isLoaded && 'fade-in-start'
        }`}
      >
        <div
          fade-in="1"
          className="sm:hidden text-sm mb-2 flex items-center space-x-2 cursor-pointer"
          onClick={() => router.back()}
        >
          <a className="font-text text-base">← Blog</a>
        </div>

        <HeaderPost post={post.meta} />

        <div
          fade-in="2"
          className="flex w-full font-text font-normal text-base space-x-8 mt-5 xl:px-0"
        >
          <article className="w-full sm:w-[75%]">
            <MDXRemote {...post.source} components={blogPostComponents} />
          </article>
          <TableOfContent tableOfContent={tableContent} />
        </div>
      </section>
    </>
  );
};

export default Post;
