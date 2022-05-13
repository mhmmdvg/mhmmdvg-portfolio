import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import Project1 from '../../../public/project/project1.png';

interface BlogNewProps {
  title: string | undefined;
  description: string | undefined;
  date: string | undefined;
  slug?: string;
}

const BlogNew: FC<BlogNewProps> = ({ title, description, date, slug }) => {
  return (
    <div className="flex flex-col sm:flex-row pt-8">
      <div className="flex sm:flex-col w-full pr-4">
        <p className="text-sm opacity-90">Muhammad Vikri · {date}</p>
        <Link href={`/blog/${slug}`} passHref>
          <h2 className="font-sfpro py-2 sm:text-2xl font-bold cursor-pointer hover:text-indigo-500 transition duration-200">
            {title}
          </h2>
        </Link>
        <p className="opacity-80 text-xl">{description}</p>
      </div>
      <div className="w-72 self-center">
        <Image className="object-fill rounded-md" src={Project1} alt="post1" />
      </div>
    </div>
  );
};

export default BlogNew;
