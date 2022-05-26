import { NextPage } from 'next';
import React from 'react';

interface ToolsItemProps {
  icons: JSX.Element;
  name: string;
}

const TechToolsItem: NextPage<ToolsItemProps> = (props) => {
  const { icons, name } = props;
  return (
    // border light DFDFDF
    <div className=" h-[100px] border cursor-pointer hover:scale-105 duration-150 transition border-[#DFDFDF] dark:border-[#404040] rounded-lg p-2">
      <div className="flex flex-row items-center h-full px-4 space-x-2 ">
        <div className="w-full lg:w-1/2 flex justify-center">
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
        </div>
        <p className="sm:w-1/2 hidden lg:flex">{name}</p>
      </div>
    </div>
  );
};

export default TechToolsItem;
