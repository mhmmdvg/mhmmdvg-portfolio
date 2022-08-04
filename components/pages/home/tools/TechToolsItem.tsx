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
    <div className=" h-[100px] border cursor-pointer ease-in-out hover:scale-110 duration-200 dark:border-[#383838] border-[#eaeaea] rounded-lg p-2">
      <div className="flex flex-row items-center h-full px-4 space-x-2 ">
        <div className="w-full lg:w-1/2 flex justify-center">{icons}</div>
        <p className="font-text sm:w-1/2 hidden lg:flex">{name}</p>
      </div>
    </div>
  );
};

export default TechToolsItem;
