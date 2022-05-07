import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import DarkMode from './DarkMode';

const twstyles = {
  header: 'fixed w-full backdrop-blur-sm z-20',
  navContainer:
    'h-16 xl:w-[68rem] xl:h-[80px] lg:h-[80px] container mx-auto px-8 xl:px-0',
  navbar: 'flex justify-between items-center h-full py-4 ',
  line: 'mx-auto dark:border-[#383838] border-[#eaeaea] xl:w-[69rem]',
};

interface NavItemType {
  name: string;
  path: string;
}

const LinkNavItems: Array<NavItemType> = [
  { name: 'Home', path: '/' },
  { name: 'Project', path: '/project' },
  { name: 'Blog', path: '/blog' },
  { name: 'About Me', path: '/aboutme' },
];

const Navbar: NextPage = () => {
  const router = useRouter();

  return (
    <header className={twstyles.header}>
      <div className={twstyles.navContainer}>
        <nav className={twstyles.navbar}>
          <div className="w-6 sm:w-10 xl:w-14 lg:w-12">
            <svg
              // width="78"
              // height="61"
              viewBox="0 0 78 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.2321 4L49.4497 40.75C50.2195 42.0833 49.2572 43.75 47.7176 43.75H5.28238C3.74278 43.75 2.78053 42.0833 3.55033 40.75L24.7679 4C25.5378 2.66667 27.4623 2.66667 28.2321 4Z"
                className="stroke-black dark:stroke-white transition duration-500"
                strokeWidth="6"
              />
              <path
                d="M49.2321 12L73.9138 54.75C74.6836 56.0833 73.7213 57.75 72.1817 57.75H22.8183C21.2787 57.75 20.3164 56.0833 21.0862 54.75L45.7679 12C46.5378 10.6667 48.4623 10.6667 49.2321 12Z"
                className="stroke-black dark:stroke-white transition duration-500"
                strokeWidth="6"
              />
            </svg>
          </div>
          {/* xl:text-lg lg:text-lg font-sfpro */}
          <ul className="flex space-x-5 sm:space-x-12 text-sm sm:text-base text-[#494949] dark:text-[#494949]">
            {LinkNavItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>
                  <a
                    className={`hover:text-black dark:hover:text-white transition cursor-pointer ${
                      router.pathname === item.path
                        ? 'text-black dark:text-white font-bold'
                        : ''
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <DarkMode />
        </nav>
      </div>
      <hr className={twstyles.line} />
    </header>
  );
};

export default Navbar;
