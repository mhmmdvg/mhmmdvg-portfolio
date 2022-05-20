import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import ProjectList from '../../components/pages/projects/ProjectList';
import ListProject from '../../commons/constants/project';
import useLoaded from '../../hooks/use-loading';
import HeaderProject from '../../components/pages/projects/HeaderProject';
import { getAllPost } from '../../utils/mdx';
import { ProjectMeta } from '../../type/mdxType';

export async function getStaticProps() {
  const projects = getAllPost('project').map((post) => post.meta);

  return {
    props: {
      projects,
    },
  };
}

const twstyles = {
  body: 'dark:bg-black bg-white transition pt-11 sm:pt-16',
  container:
    'flex flex-wrap flex-col items-start mt-10 px-3 lg:px-32 2xl:px-60 sm:items-start sm:justify-start sm:w-full ',
};

const Project = ({ projects }: { projects: ProjectMeta[] }) => {
  const isLoaded = useLoaded();

  return (
    <>
      <Head>
        <title>Projects | Mhmmdvg</title>
      </Head>

      <section className={`${twstyles.body} ${isLoaded && 'fade-in-start'}`}>
        <div className="container mx-auto">
          <div className={twstyles.container}>
            <HeaderProject />
            <ProjectList project={projects} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
