import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {mobileMenu && (
        <div
          className={`fixed inset-0 bg-black/50 z-20 ${
            isDarkMode ? "bg-black/70" : "bg-gray-200/50"
          }`}
          onClick={() => setMobileMenu(false)}
        ></div>
      )}
      <motion.div
        variants={sidebarVariants}
        animate={mobileMenu ? "open" : "closed"}
        className={
          mobileMenu
            ? `bg-primary-${
                isDarkMode ? "dark" : "light"
              } fixed top-0 right-0 shadow-lg w-3/4 h-full z-30 flex flex-col gap-8`
            : "hidden"
        }
      >
        <div className="mt-3 ml-3">
          <button onClick={() => setMobileMenu(false)}>
            <i className="fa-solid fa-arrow-right font-bold mt-3 transition-all duration-500"></i>
          </button>
        </div>
        <SideBar />
      </motion.div>
    </>
  );
};

export default Header;
