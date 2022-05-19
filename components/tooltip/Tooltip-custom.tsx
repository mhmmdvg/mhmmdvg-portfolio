import { NextPage } from 'next';
import React from 'react';

type Props = {
  type?: string;
};

const TooltipCustom: NextPage<Props> = ({ type }) => {
  const chooseType = () => {
    switch (type) {
      case 'instagram':
        return (
          <p>
            Follow me on{' '}
            <span className="text-purple-500 font-bold">Instagram</span>
          </p>
        );
      case 'linkedin':
        return (
          <p>
            Connect with me! <br />{' '}
            <span className="text-purple-500 font-bold">Linkedin</span>
          </p>
        );
      case 'github':
        return (
          <p>
            See my project on <br />{' '}
            <span className="text-purple-500 font-bold">Github</span>
          </p>
        );

      case 'medium':
        return (
          <p>
            Find me on <span className="text-purple-500 font-bold">Medium</span>
          </p>
        );

      default:
        break;
    }
  };

  return <div className=" font-text">{chooseType()}</div>;
};

export default TooltipCustom;
