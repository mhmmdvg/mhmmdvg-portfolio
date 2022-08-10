import { NextPage } from 'next';
import React from 'react';

type Props = {
  children: React.ReactNode;
  subtitle?: string;
};

const Header: NextPage<Props> = ({ children, subtitle }) => {
  return (
    <div className="mb-2">
      <h1
        fade-in="1"
        className="font-display text-3xl sm:text-4xl font-bold dark:text-white text-black lg:text-4xl"
      >
        {children}
      </h1>
      <p fade-in="2" className="py-2">
        {subtitle}
      </p>
    </div>
  );
};

export default Header;
