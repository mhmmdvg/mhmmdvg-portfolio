import { NextPage } from 'next';
import React from 'react';
import { socialMedia } from '../../../commons/constants/social-media';
import CustomTooltip from '../../tooltip/custom-tooltip';
import TooltipCustom from '../../tooltip/Tooltip-custom';

const Socmed: NextPage = () => {
  return (
    <footer className="dark:bg-black bg-white transition mt-24 mb-10">
      <div className="min-w-[180px] sm:min-w-[280px] mx-auto py-3 w-fit flex dark:bg-[#141414] dark:text-white bg-gray-200 space-x-6 sm:space-x-8 text-black items-center rounded-2xl px-6 sm:px-10 transition">
        {socialMedia.map((item) => (
          <CustomTooltip
            key={item.name}
            position="top"
            html={<TooltipCustom type={item.name} />}
            interactive
          >
            <div
              onClick={() => window.open(item.link, '_blank')}
              className="text-4xl sm:text-5xl cursor-ne-resize hover:text-purple-500 transition"
            >
              {item.icon}
            </div>
          </CustomTooltip>
        ))}
      </div>
    </footer>
  );
};

export default Socmed;
