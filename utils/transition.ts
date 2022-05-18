export const transition = {
  initial: { y: -20, opacity: 0 },
  animate: (i: number) => {
    const delay = i * 0.1;
    return {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        // type: 'spring',
        ease: [0.6, -0.05, 0.1, 0.99],
      },
    };
  },
};

export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: any) => {
    const delay = 0.01 + i * 0.2;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
