import { NextPage } from 'next';
import React from 'react';
import DarkMode from './DarkMode';

const twstyles = {
  header: 'fixed w-full backdrop-blur-sm z-20',
  navContainer:
    'h-16 xl:w-[68rem] xl:h-[80px] lg:h-[80px] mx-auto px-8 xl:px-0',
  navbar: 'flex justify-between items-center h-full py-4 ',
  line: 'mx-auto dark:border-[#383838] border-[#525252] xl:w-[70rem]',
};

const Navbar: NextPage = () => {
  return (
    <header className={twstyles.header}>
      <div className={twstyles.navContainer}>
        <nav className={twstyles.navbar}>
          <div className="w-10 xl:w-14 lg:w-12">
            <svg
              // width="78"
              // height="61"
              viewBox="0 0 78 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9019 3.5C25.0566 1.5 27.9434 1.5 29.0981 3.5L50.3157 40.25C51.4704 42.25 50.027 44.75 47.7176 44.75H5.28238C2.97298 44.75 1.5296 42.25 2.6843 40.25L23.9019 3.5Z"
                // stroke="white"
                className="stroke-black dark:stroke-white transition duration-500"
                strokeWidth="4"
              />
              <path
                d="M44.9019 11.5C46.0566 9.5 48.9434 9.5 50.0981 11.5L74.7798 54.25C75.9345 56.25 74.4911 58.75 72.1817 58.75H22.8183C20.5089 58.75 19.0655 56.25 20.2202 54.25L44.9019 11.5Z"
                className="stroke-black dark:stroke-white transition duration-500"
                strokeWidth="4"
              />
            </svg>
          </div>

          <ul className="flex space-x-5 sm:space-x-12 font-sfpro text-sm xl:text-lg lg:text-lg text-[#494949] dark:text-[#494949]">
            <li>
              <a className="hover:text-white transition cursor-pointer">Home</a>
            </li>
            <li>
              <a className="hover:text-white transition cursor-pointer">
                Project
              </a>
            </li>
            <li>
              <a className="hover:text-white transition cursor-pointer">Blog</a>
            </li>
            <li>
              <a className="hover:text-white transition cursor-pointer">
                About Me
              </a>
            </li>
          </ul>

          <DarkMode />
        </nav>
      </div>
      <hr className={twstyles.line} />
    </header>
  );
};

export default Navbar;
