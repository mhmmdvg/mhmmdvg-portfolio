import React, { ReactElement } from 'react';
import Figma from '../../../svg/Figma';
import Flutter from '../../../svg/Flutter';
import Java from '../../../svg/Java';
import JsIcon from '../../../svg/Js';
import NextJS from '../../../svg/NextJS';
import ReactIcons from '../../../svg/ReactIcons';
import TypescriptIcons from '../../../svg/Ts';

interface ToolsType {
  icons: ReactElement;
  name: string;
}

const IconsTools: Array<ToolsType> = [
  {
    icons: <Java />,
    name: 'Java',
  },
  {
    icons: <JsIcon />,
    name: 'Javascript',
  },
  {
    icons: <TypescriptIcons />,
    name: 'Typescript',
  },
  {
    icons: <ReactIcons />,
    name: 'React',
  },
  {
    icons: <NextJS />,
    name: 'NextJS',
  },
  {
    icons: <Flutter />,
    name: 'Flutter',
  },
  {
    icons: <Figma />,
    name: 'Figma',
  },
];

export default IconsTools;
