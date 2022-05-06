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
    <section className="dark:bg-black bg-white transition pt-2 pb-10 sm:pb-20 flex">
      <div className="container mx-auto">
        <div className="mt-0 w-56 md:w-96 mx-auto dark:text-white text-black sm:mt-10">
          <div className="flex flex-row justify-between dark:bg-[#141414] bg-gray-200 py-2 px-3 md:py-3 md:px-12 rounded-2xl ">
            <AiOutlineInstagram className="w-10 h-10 md:w-14 md:h-14" />
            <AiFillLinkedin className="w-10 h-10 md:w-14 md:h-14" />
            <AiOutlineGithub className="w-10 h-10 md:w-14 md:h-14" />
            <AiFillMediumSquare className="w-10 h-10 md:w-14 md:h-14" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socmed;
