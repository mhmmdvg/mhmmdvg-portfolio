import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

interface ProjectItemsProps {
  title: string;
  type: string;
  num: number;
}

const ProjectItem: NextPage<ProjectItemsProps> = (props) => {
  const { title, type, num } = props;
  return (
    <div className="w-44 h-44 relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:w-64 md:h-64 lg:w-52 lg:h-52 xl:w-64 xl:h-64">
      <div className="flex flex-col items-end">
        <h1 className="font-sfpro font-extrabold text-[9.8rem] md:text-[14.3rem] xl:text-[14.3rem] opacity-40 lg:text-[11.7rem]">
          {num}
        </h1>
        <div className="absolute flex flex-col right-11 top-24 md:right-20 md:top-36 lg:right-11 lg:top-28 xl:right-20 xl:top-36 ">
          <h2 className="font-sfpro font-bold text-sm md:text-lg">{title}</h2>
          <h3 className="text-sm md:text-lg">{type}</h3>
          <Link href="/project">
            <a className="pt-3 cursor-pointer font-sfpro text-sm md:text-lg">
              See more →
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
