import Head from 'next/head';
import React from 'react';
import BlogList from '../../components/pages/blog/BlogList';
import {getAllPost} from "../../utils/mdxNew";
import {PostMeta} from "../../type/mdx";

// export const getStaticProps: GetStaticProps = async () => {
//   // const posts = getAllPosts(['title', 'slug', 'description', 'date']);
//
//   const dataBlog = await getAllPosts('blog');
//
//   const sortedPosts = sortByDate(dataBlog, 'blog');
//
//   return { props: { sortedPosts } };
// };

export async function getStaticProps() {
    const posts = getAllPost().map((post) => post.meta);

    return {
        props: {
            posts
        }
    }

}

const Blog = ({
                  posts,
              }: { posts: PostMeta[] }) => {
    return (
        <>
            <Head>
                <title>Blog | Mhmmdvg</title>
            </Head>

            <div className="dark:bg-black bg-white transition pt-20 sm:pt-28">
                <div className="container mx-auto">
                    <div
                        className="flex flex-wrap flex-col items-start mt-10 px-3 lg:px-24 2xl:px-60 sm:items-start sm:justify-start sm:w-full">
                        <div className="mb-8">
                            <h1 className="font-sfpro text-3xl sm:text-4xl font-bold dark:text-white text-black lg:text-4xl">
                                Blog
                            </h1>
                            <p className="py-2">I love post anything in here</p>
                        </div>

                        <BlogList posts={posts}/>
                        {/* {posts.map((item) => (
              <BlogList
                key={item.title}
                slug={item.slug}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            ))} */}
                    </div>
                </div>
            </div>
        </>
    );
};
// const Blog = ({
//                   sortedPosts,
//               }: InferGetStaticPropsType<typeof getStaticProps>) => {
//     return (
//         <>
//             <Head>
//                 <title>Blog | Mhmmdvg</title>
//             </Head>
//
//             <div className="dark:bg-black bg-white transition pt-20 sm:pt-28">
//                 <div className="container mx-auto">
//                     <div
//                         className="flex flex-wrap flex-col items-start mt-10 px-3 lg:px-24 2xl:px-60 sm:items-start sm:justify-start sm:w-full">
//                         <div className="mb-8">
//                             <h1 className="font-sfpro text-3xl sm:text-4xl font-bold dark:text-white text-black lg:text-4xl">
//                                 Blog
//                             </h1>
//                             <p className="py-2">I love post anything in here</p>
//                         </div>
//
//                         <BlogList dataBlog={sortedPosts}/>
//                         {/* {posts.map((item) => (
//               <BlogList
//                 key={item.title}
//                 slug={item.slug}
//                 title={item.title}
//                 description={item.description}
//                 date={item.date}
//               />
//             ))} */}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

export default Blog;
