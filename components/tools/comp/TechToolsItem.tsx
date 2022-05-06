import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

interface ToolsItemProps {
  icons: string;
  name: string;
  alt: string;
}

const TechToolsItem: NextPage<ToolsItemProps> = (props) => {
  const { icons, name, alt } = props;
  return (
    <div className=" flex items-center cursor-pointer justify-center md:w-64 md:h-24 lg:w-48 lg:h-24 xl:w-64 xl:h-24 rounded-lg border border-[#383838] transition ease-in-out hover:-translate-y-0 hover:scale-110 duration-200">
      <div className="flex justify-center items-center space-x-5 p-4 ">
        <Image
          className={
            name === 'Figma' || name === 'Flutter' ? '' : 'rounded-full'
          }
          src={icons}
          width={50}
          height={50}
          alt={alt}
        />
        <p className="font-sfpro text-xl font-normal">{name}</p>
      </div>
    </div>
  );
};

export default TechToolsItem;
