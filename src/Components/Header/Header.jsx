import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Search from "./Search";
import SideBar from "./SideBar";
import { useTheme } from "../../Context/ThemeContext";

const Header = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  const [mobileMenu, setMobileMenu] = useState(false);
  const { isDarkMode } = useTheme();

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40,
      },
    },
    closed: {
      x: "100%", 
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width > 425 && mobileMenu) {
      setMobileMenu(false);
    }
  }, [windowSize.width, mobileMenu]);

  return (
    <>
      <div className="flex justify-between w-full h-1/6 items-center p-2 text-xl sticky top-0 right-0 left-0 z-10 bg-accent">
        <div>Coffee</div>
        <div>
          {windowSize.width <= 425 ? (
            <div className="flex gap-4">
              <Search />
              <button onClick={() => setMobileMenu(true)}>
                <i className="fa-solid fa-bars text-3xl"></i>
              </button>
            </div>
          ) : (
            <>
              <span>About</span>
              <span>Contact</span>
              <span>Dashboard</span>
            </>
          )}
        </div>
      </div>

      <AnimatePresence>
        {mobileMenu && ( 
          <motion.div
            className={`fixed inset-0 z-20 ${
              isDarkMode ? "bg-black/70" : "bg-gray-200/50"
            }`}
            onClick={() => setMobileMenu(false)}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          ></motion.div>
        )}

        {mobileMenu && ( 
          <motion.div
            variants={sidebarVariants}
            initial="closed" 
            animate="open" 
            exit="closed" 
            className={`fixed top-0 right-0 shadow-lg w-3/4 h-full z-30 flex flex-col gap-6 ${
              isDarkMode ? "bg-primary-dark" : "bg-primary-light"
            }`}
          >
            <div className="mt-3 ml-3">
              <button onClick={() => setMobileMenu(false)}>
                <i className="fa-solid fa-arrow-right font-bold mt-3 transition-all duration-1000"></i>
              </button>
            </div>
            <SideBar />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;