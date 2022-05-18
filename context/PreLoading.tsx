import React, { createContext, useContext, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { NextPage } from 'next';

const PreloadingContext = createContext<boolean>(false);

interface PreloadingProps {
  children: React.ReactNode;
}

export const PreLoading: NextPage<PreloadingProps> = ({ children }) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShowing(true);
    }, 200);
  }, []);

  return (
    <PreloadingContext.Provider value={isShowing}>
      <div
        className={`flex fixed inset-0 justify-center items-center bg-white transition-opacity dark:bg-dark
          ${isShowing} && opacity-0 pointer-events-none`}
      />
      {children}
    </PreloadingContext.Provider>
  );
};

export const usePreloadingState = () => useContext(PreloadingContext);
