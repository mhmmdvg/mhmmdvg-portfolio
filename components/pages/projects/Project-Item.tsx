import { Item } from 'framer-motion/types/components/Reorder/Item';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

type Props = {
  data: {
    title: string;
    description: string;
    thumbnailUrl?: string;
    tags: string[];
    link?: string;
  };
};

const ProjectItem: NextPage<Props> = ({ data }) => {
  return (
    <div className="sm:min-h-[340px] pb-6 sm:pb-2 flex flex-col h-full rounded-lg border dark:border-[#383838] border-[#eaeaea]">
      {/* relative flex items-end  w-full xl:h-[60%] rounded-t */}
      <div className="relative flex h-52 w-full items-end sm:h-[60%] rounded-t">
        <Image
          className="object-cover rounded-t-lg"
          src={`/assets/project/${data.thumbnailUrl}`}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          property="true"
        />
        <div className="flex flex-wrap z-[2] absolute p-2">
          {data.tags.map((item) => (
            <div
              key={item}
              // text-xs text-brand-white bg-brand-black/40 px-3 py-1 rounded-xl mx-1 my-1
              className="bg-black text-xs text-white opacity-50 px-3 py-0.5 rounded-xl mx-1 my-1"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-2 flex flex-col">
        {data.link ? (
          <h2
            onClick={() => window.open(data.link)}
            className="font-display text-xl font-semibold hover:underline cursor-pointer"
          >
            {data.title}
          </h2>
        ) : (
          <h2 className="font-display text-xl font-semibold cursor-pointer">
            {data.title}
          </h2>
        )}
        <p className="text-sm font-sans opacity-75 py-2 tracking-wide">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
