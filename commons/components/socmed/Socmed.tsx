import { NextPage } from 'next';
import React from 'react';
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillMediumSquare,
} from 'react-icons/ai';

const Socmed: NextPage = () => {
  return (
    <footer className="dark:bg-black bg-white transition pt-10 pb-10 sm:pb-10 flex">
      <div className="container mx-auto">
        <div className="mt-0 w-56 md:w-fit mx-auto dark:text-white text-black sm:mt-10">
          <div className="flex flex-row space-x-5 dark:bg-[#141414] bg-gray-200 py-2 px-3 md:py-3.5 md:px-16 rounded-2xl ">
            <AiOutlineInstagram className="w-10 h-10 md:w-11 md:h-11" />
            <AiFillLinkedin className="w-10 h-10 md:w-11 md:h-11" />
            <AiOutlineGithub className="w-10 h-10 md:w-11 md:h-11" />
            <AiFillMediumSquare className="w-10 h-10 md:w-11 md:h-11" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Socmed;
