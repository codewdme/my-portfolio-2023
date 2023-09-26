import React from "react";
import Social from "./Social";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="sticky top-0 z-10 md:px-8 backdrop-blur-[8px] text-white flex justify-between h-[81px] w-full items-center">
      <Social />
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1_v85jXf8-ICwgzJjMl3Hnp7Jl8BGRf27/view?usp=sharing"
      >
        <motion.button
          className="border-[1px] border-neon-green text-neon-green hover:bg-neon-green hover:text-matt-black rounded-md py-3 px-6 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          My Resume
        </motion.button>
      </a>
    </div>
  );
}
