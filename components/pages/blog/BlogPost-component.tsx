import Image from 'next/image';
import React from 'react';

export const blogPostComponents = {
  h2: (props: any) => <h2 {...props} className="text-2xl font-bold mt-4" />,
  h3: (props: any) => <h3 {...props} className="text-xl font-bold  mt-4" />,
  a: (props: any) => <a {...props} className="text-blue-500" />,
  p: (props: any) => (
    <p {...props} className=" mt-2 text-base tracking-normal " />
  ),
  ul: (props: any) => <ul {...props} className="my-2 px-4 list-disc" />,
  Image,
};
