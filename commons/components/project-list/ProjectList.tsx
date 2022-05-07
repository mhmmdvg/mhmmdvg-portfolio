import { NextPage } from 'next';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ProjectListProps {
  image: string | StaticImageData;
  tag: string[];
  title: string;
  description: string;
}

const ProjectList: NextPage<ProjectListProps> = (props) => {
  const { image, tag, title, description } = props;
  return (
    <div className="sm:min-h-[340px] pb-6 sm:pb-2 cursor-pointer flex flex-col h-full rounded-lg border dark:border-[#383838] border-[#eaeaea]">
      <div className="relative flex h-52 w-full">
        <Image
          className="object-cover rounded-t-lg"
          src={image}
          alt="project1"
        />
        <div className="absolute flex space-x-2 flex-wrap inset-y-44 inset-x-3">
          {tag.map((item) => (
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
        <h2 className="font-sfpro text-2xl font-semibold">{title}</h2>
        <p className="text-sm font-sans">{description}</p>
      </div>
    </div>
  );
};

export default ProjectList;
