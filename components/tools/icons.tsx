import Java from '../../public/icons/java.svg';
import Javascript from '../../public/icons/javascript.svg';
import TypescriptIcon from '../../public/icons/typescript-icon.svg';
import ReactIcon from '../../public/icons/react.svg';
import NextIcon from '../../public/icons/nextjs-icon.svg';
import Flutter from '../../public/icons/flutter.svg';
import Figma from '../../public/icons/figma.svg';

interface ToolsType {
  icons: string;
  name: string;
  alternatif: string;
}

const ToolsItem: Array<ToolsType> = [
  {
    icons: Java,
    name: 'Java',
    alternatif: 'Java',
  },
  {
    icons: Javascript,
    name: 'Javascript',
    alternatif: 'Javascript',
  },
  {
    icons: TypescriptIcon,
    name: 'Typescript',
    alternatif: 'Typescript',
  },
  {
    icons: ReactIcon,
    name: 'React',
    alternatif: 'React',
  },
  {
    icons: NextIcon,
    name: 'NextJS',
    alternatif: 'NextJS',
  },
  {
    icons: Flutter,
    name: 'Flutter',
    alternatif: 'Flutter',
  },
  {
    icons: Figma,
    name: 'Figma',
    alternatif: 'Figma',
  },
];

export default ToolsItem;
