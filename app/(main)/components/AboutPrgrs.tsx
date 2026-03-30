"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ScrollCircle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["start center", "end center"],
  });

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#141414", "#FFFFFF"],
  );

  return (
    <div
      ref={circleRef}
      className="w-7 h-7 rounded-full flex flex-col flex-nowrap justify-center items-center absolute z-5 "
    >
      <motion.div
        style={{ background }}
        className="w-7 h-7 absolute rounded-full transition-all ease-in-out self-center"
      ></motion.div>
    </div>
  );
};

export const ScrollLine = () => {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start center", "end center"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={lineRef} className="w-1.5 h-160 bg-[#141414] relative">
      <motion.div
        style={{ height }}
        className="absolute w-full mx-auto z-3 bg-white"
      ></motion.div>
    </div>
  );
};

export const ShowCards = ({ children }: { children: React.ReactNode }) => {
  const CardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: CardRef,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], ["0", "1"]);
  const y = useTransform(scrollYProgress, [0, 1], ["150px", "0px"]);

  return (
    <div className="w-full h-fit z-10 relative sm:static" ref={CardRef}>
      <motion.div style={{ opacity, y }}>{children}</motion.div>
    </div>
  );
};
