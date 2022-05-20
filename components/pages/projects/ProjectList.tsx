import React from 'react';
import { ProjectMeta } from '../../../type/mdxType';
import ProjectItem from './Project-Item';

type Props = {
  project: ProjectMeta[];
};

const ProjectList = ({ project }: Props) => {
  return (
    <div
      fade-in="2"
      className="grid grid-cols-1 gap-4 sm:gap-6 py-8 sm:grid-cols-2 "
    >
      {project.map((data) => (
        <ProjectItem key={data.title} data={data} />
      ))}
    </div>
  );
};

export default ProjectList;
