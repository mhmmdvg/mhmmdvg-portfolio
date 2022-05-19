import { NextPage } from 'next';
import React from 'react';
import { socialMedia } from '../../../commons/constants/social-media';
import CustomTooltip from '../../tooltip/custom-tooltip';
import TooltipCustom from '../../tooltip/Tooltip-custom';

const Socmed: NextPage = () => {
  return (
    <footer className="dark:bg-black bg-white transition pt-10 pb-10 sm:pb-10 flex">
      <div className="container mx-auto">
        <div className="mt-0 w-56 md:w-fit mx-auto dark:text-white text-black sm:mt-10">
          <div className="flex flex-row space-x-5 dark:bg-[#141414] bg-gray-200 py-2 px-3 md:py-3 md:px-14 rounded-2xl ">
            {socialMedia.map((item) => (
              <CustomTooltip
                key={item.name}
                position="top"
                html={<TooltipCustom type={item.name} />}
                interactive
              >
                <div
                  onClick={() => window.open(item.link, '_blank')}
                  className="text-5xl cursor-ne-resize"
                >
                  {item.icon}
                </div>
              </CustomTooltip>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Socmed;
