import Image from 'next/image';
import React from 'react';
import Project1 from '../../../public/project/project1.png';
import dayjs from 'dayjs';
import Link from 'next/link';
import { PostMeta } from '../../../type/mdx';

type ListProps = {
  posts: PostMeta[];
};

const BlogList = ({ posts }: ListProps) => {
  return (
    <>
      {posts.map((item) => (
        <div key={item.slug}>
          <div className="flex w-full flex-row">
            <div className="flex flex-col w-full pr-4 sm:pr-10">
              <p className="text-sm opacity-90">
                Muhammad Vikri · {dayjs(item.date).format('MMM D, YYYY')}
              </p>
              <Link href={`/blog/${item.slug}`} passHref>
                <h2 className="font-sfpro text-xl py-2 sm:text-3xl font-bold cursor-pointer hover:text-indigo-500 transition duration-200">
                  {item.title}
                </h2>
              </Link>
              <p className="opacity-80 text-xs sm:text-lg">
                {item.description}
              </p>
            </div>
            <div className="relative flex w-28 h-20 sm:w-44 sm:h-32 rounded-md bg-white self-center">
              <Image
                className="object-cover rounded-md"
                src={Project1}
                alt="post1"
              />
            </div>
          </div>
          <hr className="mx-auto my-6 dark:border-[#383838] border-[#eaeaea] xl:w-[68rem]" />
        </div>
      ))}
    </>
  );
};

export default BlogList;
