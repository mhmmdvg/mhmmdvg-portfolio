import React from 'react';
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { socialMedia } from '../../../../commons/constants/social-media';
import useLoaded from '../../../../hooks/use-loading';
import CustomTooltip from '../../../tooltip/custom-tooltip';
import TooltipCustom from '../../../tooltip/Tooltip-custom';

const styles = {
  hero: 'text-black dark:bg-black dark:text-white bg-white transition pt-28 justify-center',
  heroContainer:
    'flex flex-col lg:flex-row mx-auto w-full lg:px-24 xl:px-36 2xl:px-56 lg:space-x-14 items-center justify-center',
  myName:
    'font-display font-black text-2xl sm:text-3xl xl:text-4xl tracking-tight lg:text-2xl ',
  subTitle:
    'font-display font-bold text-xl sm:text-2xl xl:text-3xl tracking-tighter lg:text-xl ',
  quotes:
    'font-display font-bold text-xl xl:text-2xl tracking-tight lg:text-lg',
  button:
    'p-1 duration-500 inline-flex rounded-md bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500 transition-all bg-size-200 bg-pos-0 hover:bg-pos-100',
};

const Hero = () => {
  const isLoaded = useLoaded();

  return (
    <section className={`${isLoaded && 'fade-in-start'}`}>
      <div className={styles.hero}>
        <div className="container mx-auto">
          <div className={styles.heroContainer} data-fade="1">
            {/* w-full px-3 sm:w-3/4 xl:w-1/2 xl:pr-0 lg:w-1/2 */}
            <div className="text-center w-full lg:px-0 lg:text-left">
              <h1 className={styles.myName}>
                Hello, I’m{' '}
                {/* transition-all bg-size-200 bg-pos-0 hover:bg-pos-100 duration-300 */}
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 ">
                  Muhammad Vikri
                </span>
              </h1>
              <h1 className={styles.subTitle}>
                Front-end Developer and Designer.
              </h1>
              {/* <M /> */}
              <p className="py-3 font-text px-3 text-base sm:px-0 sm:text-lg xl:text-base md:text-base">
                Hello! My name is Muhammad Vikri. I’m a student in Brawijaya
                University. I like to{' '}
                <span className="underline decoration-sky-500">design</span> and
                learn about{' '}
                <span className="underline decoration-indigo-500">
                  programming
                </span>
                . I would like to{' '}
                <span className="underline decoration-pink-500">
                  learn new things
                </span>{' '}
                about technologies.
              </p>
              <button className={styles.button}>
                <div className="dark:text-white dark:bg-black bg-white text-black transition py-3 px-5 rounded-sm">
                  Contact Me
                </div>
              </button>

              <div className="container mx-auto lg:hidden flex">
                <div className="lg:w-96 mx-auto dark:text-white text-black transition mt-10">
                  <div className="flex flex-row space-x-8 lg:py-3 lg:px-12 rounded-2xl">
                    {socialMedia.map((item) => (
                      <CustomTooltip
                        key={item.name}
                        position="top"
                        html={<TooltipCustom type={item.name} />}
                        interactive
                      >
                        <div
                          onClick={() => window.open(item.link, '_blank')}
                          className="text-5xl cursor-ne-resize hover:text-purple-500"
                        >
                          {item.icon}
                        </div>
                      </CustomTooltip>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* w-full px-3 pt-10 sm:px-10 sm:w-3/4 xl:w-1/2 xl:pl-0 lg:w-1/2 */}
            <div className="text-center pt-8 px-3 sm:px-0 lg:text-left ">
              <h1 className={styles.quotes}>
                “There is some good in this world, and it’s worth fighting for”{' '}
                <a className="font-text font-normal xl:text-base tracking-wide md:text-sm">
                  - J.R.R. Tolkien
                </a>
              </h1>
              <div className="py-4">
                <p className="font-text xl:text-lg lg:text-lg md:text-lg">
                  I will help you to make web or mobile application, I have good
                  team work.
                </p>
              </div>
              {/* <button className=" dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white bg-black text-white hover:bg-white hover:text-black border-2 hover:border-black transition py-3 px-6 inline-flex rounded-md">
                Contact Me
              </button> */}

              <div className="hidden sm:flex flex-row space-x-6 my-4 rounded-2xl">
                {/* <AiOutlineInstagram className="w-14 h-14" />
                <AiFillLinkedin className="w-14 h-14" />
                <AiOutlineGithub className="w-14 h-14" />
                <AiFillMediumSquare className="w-14 h-14" /> */}
                {/* {socialMedia.map((item) => ())} */}

                {socialMedia.map((item) => (
                  <CustomTooltip
                    key={item.name}
                    position="bottom"
                    html={<TooltipCustom type={item.name} />}
                    interactive
                  >
                    <div
                      onClick={() => window.open(item.link, '_blank')}
                      className="text-5xl cursor-ne-resize hover:text-purple-500 transition"
                    >
                      {item.icon}
                    </div>
                  </CustomTooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
