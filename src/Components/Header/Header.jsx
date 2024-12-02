import React, { useEffect, useState } from "react";

const Header = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  const [mobileMenu, setMobileMenu] = useState(false);

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
      <div className="flex w-full h-1/6 bg-yellow-50 justify-between items-center p-2 text-xl sticky top-0 right-0 left-0 z-10">
        <div>Coffee</div>
        <div>
          {windowSize.width <= 425 ? (
            <button onClick={() => setMobileMenu(true)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          ) : (
            <>
              <span>About</span>
              <span>Contact</span>
              <span>Dashboard</span>
            </>
          )}
        </div>
      </div>
      <div
        className={
          mobileMenu
            ? "absolute top-0 right-0 bg-white shadow-lg w-3/4 h-full z-20 flex"
            : "hidden"
        }
      >
        <button onClick={() => setMobileMenu(false)}>
        <i className="fa-solid fa-x"></i>
        </button>
      </div>
    </>
  );
};

export default Header;
