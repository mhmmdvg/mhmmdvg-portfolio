import Image from 'next/image';
import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import { PostMeta } from '../../../type/mdxType';
import useLoaded from '../../../hooks/use-loading';

type ListProps = {
  posts: PostMeta[];
};

const BlogList = ({ posts }: ListProps) => {
  return (
    <div className="mt-8">
      {posts.map((item) => (
        <div key={item.slug} fade-in="4">
          <div className="flex w-full flex-row">
            <div className="flex-col w-full pr-10 sm:pr-10">
              <p className="font-text text-sm opacity-90">
                Muhammad Vikri · {dayjs(item.date).format('MMM D, YYYY')}
              </p>
              <Link href={`/blog/${item.slug}`} passHref>
                <h2 className="font-display text-xl py-2 sm:text-2xl font-bold cursor-pointer hover:text-fuchsia-600 transition duration-200">
                  {item.title}
                </h2>
              </Link>
              <p className="opacity-80 font-text text-xs sm:text-base">
                {item.description}
              </p>
            </div>
            <div className="relative flex w-28 h-20 sm:w-44 sm:h-32 rounded-lg bg-white self-center">
              <Image
                className="object-cover rounded-md"
                src={`/assets/blog/${item.thumbnailUrl}`}
                alt={item.title}
                layout="fill"
              />
            </div>
          </div>
          <hr
            fade-in="4"
            className="mx-auto my-6 dark:border-[#383838] border-[#eaeaea] xl:w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
