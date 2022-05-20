import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

type Props = {
  data: {
    title: string;
    description: string;
    thumbnailUrl?: string;
    tags: string[];
  };
};

const ProjectItem: NextPage<Props> = ({ data }) => {
  return (
    <div className="sm:min-h-[340px] pb-6 sm:pb-2 cursor-pointer flex flex-col h-full rounded-lg border dark:border-[#383838] border-[#eaeaea]">
      <div className="relative flex h-52 w-full">
        <Image
          className="object-cover rounded-t-lg"
          src={`/assets/project/${data.thumbnailUrl}`}
          alt={data.title}
          layout="fill"
          property="true"
        />
        <div className="absolute flex space-x-2 flex-wrap inset-y-44 inset-x-3">
          {data.tags.map((item) => (
            <div
              key={item}
              className="bg-black opacity-50 py-0.5 px-3 rounded-full"
            >
              <p className="text-xs text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-2 flex flex-col">
        <h2 className="font-display text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm font-sans opacity-75 py-2 tracking-wide">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
