import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { ToCHeadingProps } from '../../../type/mdxType';

type Props = {
  tableOfContent?: ToCHeadingProps[];
};

const TableOfContent: NextPage<Props> = ({ tableOfContent }) => {
  const router = useRouter();

  return (
    <aside className="hidden md:flex flex-col">
      <div className="h-screen sticky top-24 ml-2">
        <div
          className="text-sm mb-2 flex items-center space-x-2 cursor-pointer"
          onClick={() => router.push('/blog')}
        >
          <a className="font-sfpro text-base">← Blog</a>
        </div>
        <h1 className="font-sfpro text-base font-bold">On This Page</h1>
        <div className="mt-2 ml-2">
          {tableOfContent?.map((item) => (
            <p key={item.text}>
              <a
                href={`#${item.id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                {item.text}
              </a>
            </p>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default TableOfContent;
