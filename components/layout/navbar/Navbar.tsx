import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import M from '../../svg/M';

import DarkMode from './DarkMode';

const twstyles = {
  header: 'fixed w-full border-b backdrop-blur z-20 transition-all',
  navContainer:
    'h-16 xl:w-[62rem] xl:h-[65px] lg:h-[60px] container mx-auto px-8 xl:px-0',
  navbar: 'flex justify-between items-center h-full py-4 ',
  line: 'mx-auto dark:border-[#383838] border-[#eaeaea]',
};

interface NavItemType {
  name: string;
  path: string;
  value: string;
}

const LinkNavItems: Array<NavItemType> = [
  { name: 'Home', path: '/', value: '' },
  { name: 'Blog', path: '/blog', value: 'blog' },
  { name: 'Project', path: '/project', value: 'project' },
  { name: 'About Me', path: '/aboutme', value: 'aboutme' },
];

const Navbar: NextPage = () => {
  const [showBorder, setShowBorder] = useState(false);
  const [showBorderOnPage, setShowBorderOnPage] = useState(false);
  const router = useRouter();
  const pathNow = router.pathname.split('/')[1];

  const scrollShowBorder = () => {
    if (window.scrollY >= 10) {
      setShowBorder(true);
    } else {
      setShowBorder(false);
    }
  };

  useEffect(() => {
    if (pathNow === '') {
      setShowBorderOnPage(false);
    } else {
      setShowBorderOnPage(true);
    }
    window.addEventListener('scroll', scrollShowBorder);
  }, [pathNow]);

  return (
    <header
      className={`fixed font-text w-full border-b-[1.4px] backdrop-blur z-20 transition-all ${
        showBorder || showBorderOnPage
          ? 'dark:border-[#1a1a1a] border-[#e9e9e9]'
          : 'border-transparent'
      }`}
    >
      {/* // <header className={`${twstyles.header}`}> */}
      <nav className="h-16 xl:w-[62rem] xl:h-[62px] lg:h-[60px] container mx-auto px-8 xl:px-0">
        <div className="flex justify-between items-center h-full py-4">
          <div className="w-6 sm:w-10 xl:w-11 lg:w-12">
            <M />
          </div>
          {/* xl:text-lg lg:text-lg font-sfpro */}
          <ul className="flex space-x-5 sm:space-x-10 text-sm sm:text-base text-[#666666] dark:text-[#888888]">
            {LinkNavItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>
                  <a
                    className={`hover:text-black dark:hover:text-white transition cursor-pointer ${
                      pathNow === item.value ? 'text-black dark:text-white' : ''
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <DarkMode />
        </div>
      </nav>
      {/* <hr className={`${twstyles.line} ${showBorder ? '' : 'hidden'}`} /> */}
    </header>
  );
};

export default Navbar;
