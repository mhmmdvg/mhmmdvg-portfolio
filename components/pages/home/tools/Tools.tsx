import { NextPage } from 'next';
import React from 'react';
import TechToolsItem from './TechToolsItem';
import IconsTools from './listIcons';
import useLoaded from '../../../../hooks/use-loading';

const twstyles = {
  body: 'dark:bg-black transition bg-white mt-10 sm:pt-16',
  container:
    'flex flex-wrap justify-center mt-10 px-3 sm:px-12 xl:px-36 2xl:px-56 items-center content-center lg:justify-start ',
  title:
    'font-display text-3xl sm:text-3xl font-bold dark:text-white text-black lg:text-4xl',
  grid: 'grid grid-cols-2 gap-6 py-4 lg:grid-cols-4 ',
};

const Tools: NextPage = () => {
  return (
    <section className={twstyles.body}>
      <div className="px-8 xl:px-0 pt-4 sm:w-[36rem] lg:w-[56rem] xl:w-[62rem] mx-auto">
        <div className="flex flex-col">
          <h1 className={twstyles.title}>Technologies & Tools</h1>
          <p className="py-4 text-black dark:text-white opacity-40 ">
            This is technology & tools I’m used
          </p>
        </div>
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {IconsTools.map((item) => (
            // <TechToolsItem key={item.name} {...item} />
            <TechToolsItem
              key={item.name}
              icons={item.icons}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
