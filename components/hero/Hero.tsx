import { NextPage } from 'next';
import React from 'react';
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillMediumSquare,
} from 'react-icons/ai';

const twstyles = {
  hero: 'bg-black text-white pt-20 sm:pt-28 justify-center',
  heroContainer:
    'flex mx-auto flex-wrap mt-10 lg:px-24 2xl:px-56 items-center justify-center',
  myName:
    'font-sfpro font-black text-2xl sm:text-3xl xl:text-4xl tracking-tight lg:text-2xl ',
  subTitle:
    'font-sfpro font-bold text-xl sm:text-2xl xl:text-3xl tracking-tighter lg:text-xl ',
  quotes: 'font-sfpro font-black text-xl xl:text-2xl tracking-tight lg:text-lg',
  button:
    'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-1 inline-flex rounded-sm',
};

const Hero: NextPage = () => {
  return (
    <section className={twstyles.hero}>
      <div className="container mx-auto">
        <div className={twstyles.heroContainer}>
          <div className="text-center w-full px-3 sm:w-3/4 xl:w-1/2 xl:pr-20 lg:w-1/2 lg:px-0 lg:text-left ">
            <h1 className={twstyles.myName}>
              Hello, I’m <a className="text-tomato">Muhammad Vikri</a>
            </h1>
            <h3 className={twstyles.subTitle}>
              Front-end Developer and Designer.
            </h3>
            <p className="py-3 font-sfpro text-base sm:text-lg xl:text-lg md:text-base">
              Hello! My name is Muhammad Vikri. I’m a student in Brawijaya
              University. I like to{' '}
              <a className="underline decoration-sky-500">design</a> and learn
              about{' '}
              <a className="underline decoration-indigo-500">programming</a>. I
              would like to{' '}
              <a className="underline decoration-pink-500">learn new things</a>{' '}
              about technologies.
            </p>
            <button className={twstyles.button}>
              <div className="text-white bg-black py-2 px-6">About Me</div>
            </button>

            <div className="container mx-auto lg:hidden flex">
              <div className="lg:w-96 mx-auto text-white mt-10">
                <div className="flex flex-row space-x-8 lg:py-3 lg:px-12 rounded-2xl">
                  <AiOutlineInstagram className="w-14 h-14" />
                  <AiFillLinkedin className="w-14 h-14" />
                  <AiOutlineGithub className="w-14 h-14" />
                  <AiFillMediumSquare className="w-14 h-14" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center w-full px-3 pt-10 sm:px-10 sm:w-3/4 xl:w-1/2 xl:pl-20 lg:w-1/2 lg:text-left ">
            <h1 className={twstyles.quotes}>
              “There is some good in this world, and it’s worth fighting for”{' '}
              <a className="font-sfpor font-normal xl:text-lg tracking-wide md:text-sm">
                - J.R.R. Tolkien
              </a>
            </h1>
            <div className="xl:pr-32 py-4">
              <p className="font-sfpro font-normal xl:text-lg lg:text-lg md:text-lg">
                I will help you to make web or mobile application, I have good
                team work.
              </p>
            </div>
            <button className="bg-white text-black  py-3 px-6 inline-flex rounded-sm">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
