"use client";
import { easeInOut, motion } from "framer-motion";
type buildingName = { name: string };
export const BuildingTitle = ({ name }: buildingName) => {
  const transition = {
    duration: 1,
    transition: easeInOut,
  };
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className="text-xl font-extralight pb-4"
    >
      {name}
    </motion.h1>
  );
};
