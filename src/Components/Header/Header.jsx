import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Search from "./Search";
import ThemeController from "../ThemeController/ThemeController";
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
      <div className="flex w-full h-1/6  justify-between items-center p-2 text-xl sticky top-0 right-0 left-0 z-10 bg-accent">
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
      <motion.div
        variants={sidebarVariants}
        animate={mobileMenu ? "open" : "closed"}
        className={
          mobileMenu
            ? `bg-primary-${
                isDarkMode ? "dark" : "light"
              } fixed top-0 right-0 shadow-lg w-3/4 h-full z-30 bg-primary flex flex-col gap-8`
            : "hidden"
        }
      >
        <div className="mt-3 ml-3">
          <button onClick={() => setMobileMenu(false)}>
            <i className="fa-solid fa-x  font-bold transition-all duration-500"></i>
          </button>
        </div>
        <div className="flex flex-col gap-6 h-1/3">
          <p className="pl-6 h-1/4 w-full flex gap-2 items-center">
            <i className="fa-solid fa-house"></i>Home
          </p>
          <p className="pl-6 h-1/4 w-full flex gap-2 items-center">
            <i className="fa-solid fa-info"></i>About
          </p>
          <p className="pl-6 h-1/4 w-full flex gap-2 items-center">
            <i className="fa-solid fa-address-book"></i>Contact
          </p>
          <p className="pl-6 h-1/4 w-full flex gap-2 items-center">
            <i className="fa-solid fa-user"></i>Login
          </p>
        </div>
        <div className="absolute bottom-4 right-4">
          <ThemeController />
        </div>
      </motion.div>
    </>
  );
};

export default Header;
