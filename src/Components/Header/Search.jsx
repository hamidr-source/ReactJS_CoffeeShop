import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../Context/ThemeContext";

const Search = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const {isDarkMode} = useTheme()

  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const searchBarVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    visible: {
      y: "30%", 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.1, 
      },
    },
  };

  return (
    <>
      <button
        className="w-10 h-10 rounded-3xl"
        onClick={() => setOpenSearchBar(true)}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <AnimatePresence>
        {openSearchBar && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"سایر محتوا
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setOpenSearchBar(false)}
            />

            <motion.div
              className="p-4 rounded shadow-md text-xl fixed top-0 left-0 w-full z-50" 
              style={{ backgroundColor: 'white'}} 
              variants={searchBarVariants}
              initial="hidden" 
              animate="visible" 
              exit="hidden" 
            >
              <div className="relative w-full h-full flex items-center justify-center"> 
                <input
                  type="text"
                  className="w-3/4 h-10 outline-none p-2 rounded-lg text-text-light"
                  placeholder="جستجو کنید..."
                />
                <button
                  className="absolute right-4" 
                  onClick={() => setOpenSearchBar(false)}
                >
                  <i className="fa-solid fa-x m-3 font-bold"></i>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Search;