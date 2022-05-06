import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import MLogo from '../../public/m.svg';

const twstyles = {
  header: 'fixed w-full backdrop-blur-sm z-20',
  navContainer:
    'h-16 xl:w-[68rem] xl:h-[80px] lg:h-[80px] mx-auto px-8 xl:px-0',
  navbar: 'flex justify-between items-center h-full py-4 ',
  line: 'mx-auto border-[#383838] xl:w-[70rem]',
};

const Navbar: NextPage = () => {
  return (
    <header className={twstyles.header}>
      <div className={twstyles.navContainer}>
        <nav className={twstyles.navbar}>
          <div className="w-10 xl:w-14 lg:w-12">
            <Image src={MLogo} alt="M Logo" />
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

          <div className="w-8 lg:w-10">
            <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
              <defs />
              <path
                className="cls-1"
                fill="#fff"
                d="M102 240.872h795.034a26 26 0 0126 26V900.96a26 26 0 01-26 26H102a26 26 0 01-26-26V266.872a26 26 0 0126-26z"
              />
              <path
                className="cls-1"
                id="Triangle_1"
                d="M756.533 83.256a18 18 0 0132.209 0l79.673 159.578a18 18 0 01-16.105 26.04H692.965a18 18 0 01-16.105-26.04z"
                data-name="Triangle 1"
                fill="#fff"
              />
              <path
                className="cls-1"
                id="Triangle_1-2"
                d="M208.533 83.256a18 18 0 0132.209 0l79.673 159.578a18 18 0 01-16.105 26.04H144.965a18 18 0 01-16.1-26.04z"
                data-name="Triangle 1"
                fill="#fff"
              />
              <path
                className="cls-2"
                fill="#000"
                d="M429 752l32 33 54-53 53 52 32-33-85-86zM234.122 421.66h77.2a10 10 0 0110 10v170.058a10 10 0 01-10 10h-77.2a10 10 0 01-10-10V431.66a10 10 0 0110-10zM715.519 421.66h77.206a10 10 0 0110 10v170.058a10 10 0 01-10 10h-77.206a10 10 0 01-10-10V431.66a10 10 0 0110-10z"
              />
            </svg>
          </div>
        </nav>
      </div>
      <hr className={twstyles.line} />
    </header>
  );
};

export default Navbar;
