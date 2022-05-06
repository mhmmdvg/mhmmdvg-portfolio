import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Hero from '../commons/components/hero/Hero';
import ProjectComponent from '../commons/components/project/ProjectComponent';
import Tools from '../commons/components/tools/Tools';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <ProjectComponent />
      <Tools />
    </>
  );
};

export default Home;
