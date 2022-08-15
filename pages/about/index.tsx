import React from 'react';
import HeadTitle from '../../components/header/Head';
import Header from '../../components/header/Header';
import HeaderAbout from '../../components/pages/about/HeaderAbout';
import useLoaded from '../../hooks/use-loading';

const twstyles = {
  body: 'dark:bg-black bg-white transition pt-11 sm:pt-16',
  container:
    'flex flex-wrap flex-col items-start mt-10 px-3 lg:px-32 2xl:px-60 sm:items-start sm:justify-start sm:w-full ',
};

function About() {
  const isLoaded = useLoaded();

  return (
    <>
      <HeadTitle>About | Mhmmdvg</HeadTitle>
      <section className={`${twstyles.body} ${isLoaded && 'fade-in-start'}`}>
        <div className="container mx-auto">
          <div className={twstyles.container}>
            <HeaderAbout />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
