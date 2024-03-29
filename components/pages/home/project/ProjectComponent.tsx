import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import ProjectItemsList from '../../../../commons/constants/projectItemsList';
import useLoaded from '../../../../hooks/use-loading';
import ProjectItem from './ProjectItem';

const ProjectComponent: NextPage = () => {
  const isLoaded = useLoaded();

  return (
    <section
      className={`dark:bg-black bg-white transition pt-2 sm:pt-16 ${
        isLoaded && 'fade-in-start'
      }`}
    >
      <div className="container mx-auto" fade-in="2">
        <div className="flex flex-wrap mt-10 px-3 lg:px-24 xl:px-36 lg:items-end justify-center">
          <div className="flex flex-row min-w-fit items-center dark:text-white text-black transition sm:px-12 md:px-28 lg:px-0 lg:w-1/2 2xl:px-32">
            <h1 className="font-display font-extrabold text-9xl">3+</h1>
            <p className="px-5 font-text">
              total project
              <br /> web and <br /> mobile
            </p>
          </div>
          <div className="hidden lg:w-1/2 lg:flex items-center dark:text-white text-black lg:justify-end sm:hidden 2xl:pr-32">
            <Link href="/project">
              <a className="cursor-pointer font-text ">See all projects →</a>
            </Link>
          </div>
          <div className="text-white grid gap-4 py-5 grid-cols-2 lg:grid-cols-4 lg:gap-12 md:gap-4 xl:gap-4">
            {ProjectItemsList.map((item) => (
              <ProjectItem
                key={item.id}
                num={item.id}
                title={item.title}
                type={item.type}
              />
            ))}
          </div>
        </div>
        <div className="relative text-center z-10 lg:hidden">
          <Link href="/project">
            <a className="cursor-pointer text-lg font-text">
              See all projects →
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
