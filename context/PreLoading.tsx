import React, { createContext, useContext, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { NextPage } from 'next';

const PreloadingContext = createContext<boolean>(false);

interface PreloadingProps {
  children: React.ReactNode;
}

export const PreLoading: NextPage<PreloadingProps> = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShowing(true);
    }, 200);
  });

  return (
    <PreloadingContext.Provider value={isShowing}>
      <div className="flex flex-col items-center py-16">
        <div className="h-32 w-32">
          <Transition
            as={Fragment}
            show={isShowing}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 rotate-[-120deg] scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            <div className="h-full w-full rounded-md bg-white shadow-lg" />
          </Transition>
        </div>
      </div>
      {children}
    </PreloadingContext.Provider>
  );
};

export const usePreloadingState = () => useContext(PreloadingContext);
