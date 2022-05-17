import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import ProjectList from '../../components/pages/projects/ProjectList';
import ListProject from '../../commons/constants/project';

const twstyles = {
  body: 'dark:bg-black bg-white transition pt-11 sm:pt-16',
  container:
    'flex flex-wrap flex-col items-start mt-10 px-3 lg:px-32 2xl:px-60 sm:items-start sm:justify-start sm:w-full ',
  title:
    'font-sfpro text-3xl sm:text-4xl font-bold dark:text-white text-black lg:text-4xl',
  grid: 'grid grid-cols-1 gap-4 sm:gap-6 py-8 sm:grid-cols-2 ',
};

const Project: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects | Mhmmdvg</title>
      </Head>

      <section className={twstyles.body}>
        <div className="container mx-auto">
          <div className={twstyles.container}>
            <h1 className={twstyles.title}>Projects</h1>
            <p className="font-sans">This is my project, you can see here</p>
            <div className={twstyles.grid}>
              {ListProject.map((item) => (
                <ProjectList
                  key={item.name}
                  image={item.image}
                  tag={item.tag}
                  title={item.name}
                  description={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
