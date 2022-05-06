import { NextPage } from 'next';
import React from 'react';
import TechToolsItem from './comp/TechToolsItem';
import IconsTools from './listIcons';

const twstyles = {
  body: 'dark:bg-black bg-white transition pt-2 sm:pt-16',
  container:
    'flex flex-wrap justify-center mt-10 px-3 sm:px-24 2xl:px-56 items-center content-center lg:justify-start ',
  title:
    'font-sfpro text-3xl sm:text-4xl font-extrabold dark:text-white text-black lg:text-5xl',
  grid: 'grid grid-cols-2 gap-6 py-8 lg:grid-cols-4 ',
};

const Tools: NextPage = () => {
  return (
    <section className={twstyles.body}>
      <div className="container mx-auto">
        <div className={twstyles.container}>
          <h1 className={twstyles.title}>Technologies & Tools</h1>
          <div className={twstyles.grid}>
            {IconsTools.map((item) => (
              // <TechToolsItem key={item.name} {...item} />
              <TechToolsItem
                key={item.name}
                icons={item.icons}
                alt={item.alternatif}
                name={item.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
