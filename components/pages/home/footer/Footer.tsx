import React from 'react';
import M from '../../../svg/M';

const Footer = () => {
  return (
    <footer>
      <div className="w-screen border-t mt-24 bg-[#fafafa] border-[#eaeaea] dark:bg-[#111] dark:border-[#292929]">
        <div className="container mx-auto flex flex-col justify-center py-4 sm:py-8 text-center text-[#666666] dark:text-[#848484]">
          <div className="flex flex-row justify-center items-center space-x-2">
            <div className="w-6 sm:w-8 xl:w-9 lg:w-10">
              <M />
            </div>
            <p className="text-black dark:text-white font-display font-bold text-lg sm:text-xl">
              Mhmmdvg
            </p>
          </div>
          <p className="font-text text-base mt-3">Design by @Mhmmdvg 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
