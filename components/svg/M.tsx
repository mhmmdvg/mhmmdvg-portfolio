import { motion } from 'framer-motion';
import React from 'react';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: any) => {
    const delay = 0.01 + i * 0.3;
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

const M = () => {
  return (
    <motion.svg
      viewBox="0 0 78 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M28.2321 4L49.4497 40.75C50.2195 42.0833 49.2572 43.75 47.7176 43.75H5.28238C3.74278 43.75 2.78053 42.0833 3.55033 40.75L24.7679 4C25.5378 2.66667 27.4623 2.66667 28.2321 4Z"
        className="stroke-black dark:stroke-white transition duration-500"
        strokeWidth="6"
        variants={draw}
        custom={2}
      />
      <motion.path
        d="M49.2321 12L73.9138 54.75C74.6836 56.0833 73.7213 57.75 72.1817 57.75H22.8183C21.2787 57.75 20.3164 56.0833 21.0862 54.75L45.7679 12C46.5378 10.6667 48.4623 10.6667 49.2321 12Z"
        className="stroke-black dark:stroke-white transition duration-500"
        strokeWidth="6"
        variants={draw}
        custom={1}
      />
    </motion.svg>
    // <motion.svg
    //   width="100"
    //   height="100"
    //   viewBox="0 0 600 200"
    //   initial="hidden"
    //   fill="none"
    //   animate="visible"
    // >
    //   <motion.circle
    //     cx="100"
    //     cy="100"
    //     r="80"
    //     stroke="#ff0055"
    //     strokeWidth={15}
    //     variants={draw}
    //     custom={1}
    //   />
    //   <motion.line
    //     x1="220"
    //     y1="30"
    //     x2="360"
    //     y2="170"
    //     stroke="#00cc88"
    //     strokeWidth={15}
    //     variants={draw}
    //     custom={2}
    //   />
    //   <motion.line
    //     x1="220"
    //     y1="170"
    //     x2="360"
    //     y2="30"
    //     stroke="#00cc88"
    //     strokeWidth={15}
    //     variants={draw}
    //     custom={2.5}
    //   />
    //   <motion.rect
    //     width="140"
    //     height="140"
    //     x="410"
    //     y="30"
    //     rx="20"
    //     stroke="#0099ff"
    //     strokeWidth={15}
    //     variants={draw}
    //     custom={3}
    //   />
    // </motion.svg>
  );
};

export default M;
