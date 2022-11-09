import React from "react";
import { motion, useCycle } from "framer-motion";
const loader = {
  animateOne: {
    x: [-20, 20, 60, 100, 140, 180, 220, 260],
    y: [0, -30, 0, -30, 0, -30, 0, -30],
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      x: {
        yoyo: Infinity,
        duration: 6,
        ease: "easeInOut",
      },
      y: {
        yoyo: Infinity,
        duration: 3,
        ease: "easeInOut",
      },
    },
  },
  animateTwo: {
    x: [0],
    y: [0, -60],
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      x: {
        yoyo: Infinity,
        duration: 6,
        ease: "easeInOut",
      },
      y: {
        yoyo: Infinity,
        duration: 3,
        ease: "easeInOut",
      },
    },
  },
};
function loading() {
  const [animate, CycleAnimate] = useCycle("animateOne", "animateTwo");
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
    >
      <motion.div
        variants={loader}
        animate={animate}
        className="w-3 h-3 bg-white rounded-full"
      ></motion.div>
      <p onClick={() => CycleAnimate()}>get me</p>
    </motion.div>
  );
}

export default loading;
