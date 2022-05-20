import dayjs from 'dayjs';
import { NextPage } from 'next';
import React from 'react';
import { PostMeta } from '../../../type/mdxType';

type Props = {
  post: PostMeta;
};

const HeaderPost: NextPage<Props> = ({ post }) => {
  const day = dayjs(post.date).format('MMM D, YYYY');
  return (
    <div fade-in="1">
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl">
        {post.title}
      </h1>
      <p className="pt-2 font-text text-base">Muhammad Vikri · {day}</p>
    </div>
  );
};

export default HeaderPost;
