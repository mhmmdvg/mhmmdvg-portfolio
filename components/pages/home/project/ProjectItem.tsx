import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

interface ProjectItemsProps {
  title: string;
  type: string;
  num: number;
}

const ProjectItem: NextPage<ProjectItemsProps> = ({ title, type, num }) => {
  // const { title, type, num } = props;
  // from-indigo-500 via-purple-500 to-pink-500
  return (
    <div className="w-44 h-44 relative bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500 sm:w-64 sm:h-64 lg:w-52 lg:h-52 xl:w-60 xl:h-60">
      <div className="flex flex-col items-end">
        <h1 className="font-display font-extrabold text-[9.8rem] sm:text-[14.3rem] xl:text-[13.4rem] opacity-40 lg:text-[11.7rem]">
          {num}
        </h1>
        <div className="absolute flex flex-col right-11 top-24 sm:right-20 sm:top-36 lg:right-11 lg:top-28 xl:right-16 xl:top-32">
          <h2 className="font-display font-bold text-sm sm:text-lg">{title}</h2>
          <h3 className="text-sm sm:text-lg">{type}</h3>
          <Link href="/project">
            <a className="pt-3 cursor-pointer font-text text-sm sm:text-base">
              See more →
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
