import Head from 'next/head';
import React, { useState } from 'react';
import BlogList from '../../components/pages/blog/BlogList';
import { getAllPost } from '../../utils/mdx';
import { PostMeta } from '../../type/mdxType';
import useLoaded from '../../hooks/use-loading';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';

export async function getStaticProps() {
  const posts = getAllPost('blog').map((post) => post.meta);

  return {
    props: {
      posts,
    },
  };
}

const Blog = ({ posts }: { posts: PostMeta[] }) => {
  const isLoaded = useLoaded();
  const [data, setData] = useState(posts);

  const searchHandle = (value: string) => {
    setData(
      posts.filter((post) => {
        return post.title.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  return (
    <>
      <Head>
        <title>Blog | Mhmmdvg</title>
      </Head>

      <section
        className={`dark:bg-black bg-white transition pt-11 font-text sm:pt-16 ${
          isLoaded && 'fade-in-start'
        }`}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap flex-col items-start mt-10 px-3 lg:px-32 2xl:px-60 sm:items-start sm:justify-start sm:w-full">
            <Header subtitle="I love post anything in here">Blog</Header>
            <Search
              fade-in="3"
              placeholder="Search Post..."
              onChange={(e) => searchHandle(e.target.value)}
            />
            <BlogList posts={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
