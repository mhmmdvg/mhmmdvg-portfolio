import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const HeadTitle: NextPage<Props> = ({ children }) => {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  );
};

export default HeadTitle;
