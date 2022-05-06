import { NextPage } from 'next';
import React from 'react';

const Project: NextPage = () => {
  return (
    <section className="bg-black text-white pt-2 sm:pt-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap mt-10 px-3 lg:px-24 lg:items-end justify-center">
          <div className="flex flex-row w-full items-center sm:px-28 lg:px-0 lg:w-1/2 2xl:px-32">
            <h1 className="font-sfpro font-extrabold text-9xl">3+</h1>
            <p className="px-5 font-sfpro">
              total project
              <br /> web and <br /> mobile
            </p>
          </div>
          <div className="hidden lg:w-1/2 lg:flex flex-row items-center lg:justify-end sm:hidden 2xl:pr-32">
            <a
              onClick={() => console.log('click')}
              className="cursor-pointer font-sfpro"
            >
              See all projects →
            </a>
          </div>
          <div className="grid gap-4 py-5 grid-cols-2 lg:grid-cols-4 lg:gap-12 md:gap-6 xl:gap-6">
            <div className="w-44 h-44 relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:w-64 md:h-64 lg:w-52 lg:h-52 xl:w-64 xl:h-64">
              <div className="flex flex-col items-end">
                <h1 className="font-sfpro font-extrabold text-[9.8rem] md:text-[14.3rem] xl:text-[14.3rem] opacity-40 lg:text-[11.7rem]">
                  1
                </h1>
                <div className="absolute flex flex-col right-11 top-24 md:right-20 md:top-36 lg:right-11 lg:top-28 xl:right-20 xl:top-36 ">
                  <h2 className="font-sfpro font-bold text-sm md:text-lg">
                    Mobile Application
                  </h2>
                  <h3 className="text-sm md:text-lg">Native</h3>
                  <a
                    onClick={() => console.log('click')}
                    className="pt-3 cursor-pointer font-sfpro text-sm md:text-lg"
                  >
                    See all projects →
                  </a>
                </div>
              </div>
            </div>
            <div className="w-44 h-44 relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:w-64 md:h-64 lg:w-52 lg:h-52 xl:w-64 xl:h-64">
              <div className="flex flex-col items-end">
                <h1 className="font-sfpro font-extrabold text-[9.8rem] md:text-[14.3rem] xl:text-[14.3rem] opacity-40 lg:text-[11.7rem]">
                  2
                </h1>
                <div className="absolute flex flex-col right-11 top-24 md:right-20 md:top-36 lg:right-11 lg:top-28 xl:right-20 xl:top-36 ">
                  <h2 className="font-sfpro font-bold text-sm md:text-lg">
                    Mobile Application
                  </h2>
                  <h3 className="text-sm md:text-lg">Flutter</h3>
                  <a
                    onClick={() => console.log('click')}
                    className="pt-3 cursor-pointer font-sfpro text-sm md:text-lg"
                  >
                    See all projects →
                  </a>
                </div>
              </div>
            </div>
            <div className="w-44 h-44  relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:w-64 md:h-64 lg:w-52 lg:h-52 xl:w-64 xl:h-64">
              <div className="flex flex-col items-end">
                <h1 className="font-sfpro font-extrabold text-[9.8rem] md:text-[14.3rem] xl:text-[14.3rem] opacity-40 lg:text-[11.7rem]">
                  3
                </h1>
                <div className="absolute flex flex-col right-11 top-24 md:right-20 md:top-36 lg:right-11 lg:top-28 xl:right-20 xl:top-36 ">
                  <h2 className="font-sfpro font-bold text-sm md:text-lg">
                    Web Development
                  </h2>
                  <h3 className="text-sm md:text-lg">React JS</h3>
                  <a
                    onClick={() => console.log('click')}
                    className="pt-3 cursor-pointer font-sfpro text-sm md:text-lg"
                  >
                    See all projects →
                  </a>
                </div>
              </div>
            </div>
            <div className="w-44 h-44 relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:w-64 md:h-64 lg:w-52 lg:h-52 xl:w-64 xl:h-64">
              <div className="flex flex-col items-end">
                <h1 className="font-sfpro font-extrabold text-[9.8rem] md:text-[14.3rem] xl:text-[14.3rem] opacity-40 lg:text-[11.7rem]">
                  4
                </h1>
                <div className="absolute flex flex-col right-11 top-24 md:right-20 md:top-36 lg:right-11 lg:top-28 xl:right-20 xl:top-36 ">
                  <h2 className="font-sfpro font-bold text-sm md:text-lg">
                    Mobile Application
                  </h2>
                  <h3 className="text-sm md:text-lg">React Native</h3>
                  <a
                    onClick={() => console.log('click')}
                    className="pt-3 cursor-pointer font-sfpro text-sm md:text-lg"
                  >
                    See all projects →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center lg:hidden">
        <a
          onClick={() => console.log('click')}
          className="cursor-pointer text-lg font-sfpro"
        >
          See all projects →
        </a>
      </div>
    </section>
  );
};

export default Project;
