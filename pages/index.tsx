import type { NextPage } from 'next';
import Hero from '../components/hero/Hero';
import Project from '../components/project/Project';
import Tools from '../components/tools/Tools';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Project />
      <Tools />
      <Tools />
      <Tools />
    </>
  );
};

export default Home;
