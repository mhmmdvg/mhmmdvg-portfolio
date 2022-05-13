import Image from 'next/image';
import React from 'react';
import Project1 from '../../../public/project/project1.png';
import dayjs from 'dayjs';
import Link from 'next/link';
import {PostMeta} from "../../../type/mdx";

// type DataBlog = ChooseFrontmatter<'blog'> & {
//   slug: string;
// };
//
// type ListBlogProps = {
//   dataBlog: DataBlog[];
// };

type ListProps = {
    posts: PostMeta[]
}

const BlogList = ({posts}: ListProps) => {
    return (
        <>
            {posts.map((item) => (
                <div key={item.slug}>
                    <div className="flex flex-col w-full sm:flex-row">
                        <div className="flex sm:flex-col w-full pr-3">
                            <p className="text-sm opacity-90">
                                Muhammad Vikri · {dayjs(item.date).format('MMM D, YYYY')}
                            </p>
                            <Link href={`/blog/${item.slug}`} passHref>
                                <h2 className="font-sfpro py-2 sm:text-2xl font-bold cursor-pointer hover:text-indigo-500 transition duration-200">
                                    {item.title}
                                </h2>
                            </Link>
                            <p className="opacity-80">{item.description}</p>
                        </div>
                        <div className="relative flex w-44 h-32 rounded-md bg-white self-center">
                            <Image
                                className="object-cover rounded-md"
                                src={Project1}
                                alt="post1"
                            />
                        </div>
                    </div>
                    <hr className="mx-auto my-6 dark:border-[#383838] border-[#eaeaea] xl:w-[68rem]"/>
                </div>
            ))}
        </>
    );
};
// const BlogList = ({ dataBlog }: ListBlogProps) => {
//   return (
//     <>
//       {dataBlog.map((item) => (
//         <div key={item.title}>
//           <div className="flex flex-col w-full sm:flex-row">
//             <div className="flex sm:flex-col w-full pr-3">
//               <p className="text-sm opacity-90">
//                 Muhammad Vikri · {dayjs(item.date).format('MMM D, YYYY')}
//               </p>
//               <Link href={`/blog/${item.slug}`} passHref>
//                 <h2 className="font-sfpro py-2 sm:text-2xl font-bold cursor-pointer hover:text-indigo-500 transition duration-200">
//                   {item.title}
//                 </h2>
//               </Link>
//               <p className="opacity-80">{item.description}</p>
//             </div>
//             <div className="relative flex w-44 h-32 rounded-md bg-white self-center">
//               <Image
//                 className="object-cover rounded-md"
//                 src={Project1}
//                 alt="post1"
//               />
//             </div>
//           </div>
//           <hr className="mx-auto my-6 dark:border-[#383838] border-[#eaeaea] xl:w-[68rem]" />
//         </div>
//       ))}
//     </>
//   );
// };

export default BlogList;
