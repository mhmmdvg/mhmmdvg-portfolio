import React, { ComponentPropsWithoutRef } from 'react';

const Search = ({ ...restProps }: ComponentPropsWithoutRef<'input'>) => {
  return (
    <input
      className="w-full rounded py-2 px-3 focus:outline-[#5800FF] dark:bg-[#050505] bg-brand-white border border-[#494949]"
      {...restProps}
    />
  );
};

export default Search;
