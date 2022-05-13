import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import M from '../../svg/M';
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
  value: string;
}

const LinkNavItems: Array<NavItemType> = [
  { name: 'Home', path: '/', value: '' },
  { name: 'Blog', path: '/blog', value: 'blog' },
  { name: 'Project', path: '/project', value: 'project' },
  { name: 'About Me', path: '/aboutme', value: 'aboutme' },
];

const Navbar: NextPage = () => {
  const router = useRouter();

  const pathNow = router.pathname.split('/')[1];

  return (
    <header className={twstyles.header}>
      <div className={twstyles.navContainer}>
        <nav className={twstyles.navbar}>
          <div className="w-6 sm:w-10 xl:w-14 lg:w-12">
            <M />
          </div>
          {/* xl:text-lg lg:text-lg font-sfpro */}
          <ul className="flex space-x-5 sm:space-x-12 text-sm sm:text-base text-[#494949] dark:text-[#494949]">
            {LinkNavItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>
                  <a
                    className={`hover:text-black dark:hover:text-white transition cursor-pointer ${
                      pathNow === item.value
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
