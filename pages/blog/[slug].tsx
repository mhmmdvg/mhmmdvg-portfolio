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
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return { paths, fallback: false };
};

const twstyles = {
  body: 'text-black dark:bg-black dark:text-white bg-white transition pt-20 sm:pt-28 justify-center',
  heroContainer:
    'flex mx-auto flex-wrap mt-10 lg:px-24 2xl:px-56 items-center justify-center',
  myName:
    'font-sfpro font-black text-2xl sm:text-3xl xl:text-4xl tracking-tight lg:text-2xl ',
  subTitle:
    'font-sfpro font-bold text-xl sm:text-2xl xl:text-3xl tracking-tighter lg:text-xl ',
  quotes: 'font-sfpro font-black text-xl xl:text-2xl tracking-tight lg:text-lg',
  button:
    'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l transition p-1 inline-flex rounded-md',
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

  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <div className="min-h-[100vh] mx-auto px-5 flex flex-col pt-32 xl:w-[68rem] ">
        <h1 className="font-sfpro font-black text-4xl">{post.meta.title}</h1>
        <p className="pt-2 text-base">Muhammad Vikri · {day}</p>

        <div className="flex w-full font-sfpro space-x-8 mt-5 xl:px-0">
          <article className="w-full sm:w-[75%]">
            <MDXRemote
              {...post.source}
              components={{
                h2: (props) => (
                  <h2
                    {...props}
                    className="text-2xl font-extrabold font-sfpro mt-5 mb-2"
                  />
                ),
                a: (props) => <a {...props} className="text-blue-500" />,
                p: (props) => <p {...props} className="font-sfpro text-lg" />,
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
