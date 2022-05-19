import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Footer from '../components/pages/home/footer/Footer';
import Hero from '../components/pages/home/hero/Hero';
import ProjectComponent from '../components/pages/home/project/ProjectComponent';
import Tools from '../components/pages/home/tools/Tools';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mhmmdvg</title>
      </Head>
      <Hero />
      <ProjectComponent />
      <Tools />
      <Footer />
    </>
  );
};

export default Home;
