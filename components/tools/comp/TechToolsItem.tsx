import { NextPage } from 'next';
import React from 'react';

interface ToolsItemProps {
  icons: JSX.Element;
  name: string;
}

const TechToolsItem: NextPage<ToolsItemProps> = (props) => {
  const { icons, name } = props;
  return (
    <div className=" flex items-center cursor-pointer justify-center md:w-64 md:h-24 lg:w-48 lg:h-24 xl:w-64 xl:h-24 rounded-lg border dark:border-[#383838] border-[#DFDFDF] transition-all ease-in-out hover:-translate-y-0 hover:scale-110 duration-200">
      <div className="flex justify-center items-center space-x-5 p-4 ">
        {/* <Image
          className={
            name === 'Figma' || name === 'Flutter' ? '' : 'rounded-full'
          }
          src={icons}
          width={50}
          height={50}
          alt={alt}
        /> */}
        {icons}
        <p className="font-sfpro hidden sm:flex sm:text-xl font-normal">
          {name}
        </p>
      </div>
    </div>
  );
};

export default TechToolsItem;
