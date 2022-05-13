import {GetStaticPaths, GetStaticProps,} from 'next';
import Head from 'next/head';
import {getPostFromSlug, getSlugs} from "../../utils/mdxNew";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import {PostMeta} from "../../type/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import dayjs from "dayjs";

// export const getStaticPaths: GetStaticPaths = () => {
//   const res = getPostSlug('blog');
//
//   const paths = res.map((item) => ({
//     params: { slug: item.replace('.mdx', '') },
//   }));
//
//   return {
//     paths: paths,
//     fallback: false,
//   };
// };
//
// export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
//   const result: CodeFrontmatter = await getPostBySlug(
//     'blog',
//     params?.slug as string
//   );
//
//   result.frontmatter.date = dayjs(result.frontmatter.date).format(
//     'MMMM DD, YYYY'
//   );
//
//   return {
//     props: {
//       code: result.code,
//       frontMatter: result.frontmatter,
//     },
//   };
// };

type MDXPost = {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: PostMeta;
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {slug} = params as { slug: string };
    const {content, meta} = getPostFromSlug(slug);
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, {behavior: "wrap"}],
                rehypePrism
            ]
        }
    })


    return {props: {post: {source: mdxSource, meta}}}
}

export const getStaticPaths: GetStaticPaths = async () => {

    const paths = getSlugs().map(slug => ({params: {slug}}))

    return {paths, fallback: false}
}

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

const Post = ({post}: { post: MDXPost }) => {

    const day = dayjs(post.meta.date).format('MMM D, YYYY');

    return (
        <>
            <Head>
                <title>{post.meta.title} | Mhmmdvg</title>
            </Head>
            <div className={twstyles.body}>
                <div className="mx-auto container sm:px-24">
                    <div className="mb-2">
                        <h1 className="font-sfpro font-black text-5xl">
                            {post.meta.title}
                        </h1>
                        <p className="py-2 text-lg">Muhammad Vikri · {day}</p>
                    </div>

                    {/*    <MDXComponent/>*/}
                    <MDXRemote {...post.source} components={{
                        h2: (props) => <h2 {...props} className="text-2xl font-extrabold font-sfpro mt-5 mb-2"/>,
                        p: (props) => <p {...props} className="font-sfpro text-lg"/>,
                        // pre: (props) => <pre {...props}
                        //                      className="bg-slate-800 text-white rounded-md p-2 my-5"/>,
                        // code: (props) => <code {...props} className="language-js"/>
                    }}/>
                </div>
            </div>
        </>
    );
};
// const Post = ({
//                   code,
//                   frontMatter,
//               }: InferGetStaticPropsType<typeof getStaticProps>) => {
//     const MDXComponent = useMdxComponent(code);
//
//     return (
//         <>
//             <Head>
//                 <title>{frontMatter.title} | Mhmmdvg</title>
//             </Head>
//             <div className={twstyles.body}>
//                 <div className="mx-auto container sm:px-24">
//                     <div>
//                         <h1 className="font-sfpro font-black text-3xl">
//                             {frontMatter.title}
//                         </h1>
//                         <p className="py-2 text-lg">Muhammad Vikri · {frontMatter.date}</p>
//                     </div>
//
//                     <article>
//                         <MDXComponent/>
//                     </article>
//                 </div>
//             </div>
//         </>
//     );
// };

export default Post;
