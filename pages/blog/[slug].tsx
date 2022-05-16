import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getPostFromSlug, getSlugs } from '../../utils/mdx';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { PostMeta, ToCHeadingProps } from '../../type/mdxType';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import remarkGfm from 'remark-gfm';
import TableOfContent from '../../components/pages/blog/TableOfContent';
import Image from 'next/image';
import { useRouter } from 'next/router';

type MDXPost = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
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
  const paths = getSlugs().map((slug) => ({
    params: { slug: slug.replace('.mdx', '') },
  }));

  return { paths, fallback: false };
};

const Post = ({ post }: { post: MDXPost }) => {
  const day = dayjs(post.meta.date).format('MMM D, YYYY');

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
      <div className="min-h-[100vh] mx-auto px-5 flex flex-col pt-28 xl:w-[68rem] ">
        <div
          className=" sm:hidden text-sm mb-2 flex items-center space-x-2 cursor-pointer"
          onClick={() => router.back()}
        >
          <a className="font-text text-base">← Blog</a>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl">
          {post.meta.title}
        </h1>
        <p className="pt-2 font-text text-base">Muhammad Vikri · {day}</p>

        <div className="flex w-full font-text font-normal text-base space-x-8 mt-5 xl:px-0">
          <article className="w-full sm:w-[75%]">
            <MDXRemote
              {...post.source}
              components={{
                h2: (props) => (
                  <h2
                    {...props}
                    className="text-2xl font-bold font-text mt-5 mb-2"
                  />
                ),
                h3: (props) => (
                  <h3
                    {...props}
                    className="text-xl font-bold font-text mt-5 mb-2"
                  />
                ),
                a: (props) => <a {...props} className="text-blue-500" />,
                p: (props) => (
                  <p
                    {...props}
                    className="font-text text-base tracking-normal"
                  />
                ),
                ul: (props) => (
                  <ul {...props} className="my-2 px-4 list-disc" />
                ),
                Image,
              }}
            />
          </article>
          <TableOfContent tableOfContent={tableContent} />
        </div>
      </div>
    </>
  );
};

export default Post;
