import React, { useState } from "react";
import ThemeController from "../ThemeController/ThemeController";
import { useTheme } from "../../Context/ThemeContext";

const SideBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isDarkMode } = useTheme();
  const sideBarNavigation = [
    { title: "Home", icon: "fa-solid fa-house" },
    { title: "Contact", icon: "fa-solid fa-address-book" },
    { title: "About", icon: "fa-solid fa-info" },
    { title: "Login", icon: "fa-solid fa-user" },
  ];

  return (
    <>
      <div className="flex flex-col gap-10 h-1/3 group mt-5">
        {sideBarNavigation.map((item, index) => (
          <p
            key={index}
            className={`mx-auto px-6 h-1/4 w-5/6 flex gap-2 items-center duration-500 rounded-xl ${
              index === hoveredIndex
                ? isDarkMode
                  ? "text-interactive-hover bg-tertiary-dark"
                  : "text-interactive-hover bg-tertiary-light"
                : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <i className={item.icon}></i>
            {item.title}
          </p>
        ))}
      </div>
      <div className="absolute bottom-4 right-4">
        <ThemeController />
      </div>
    </>
  );
};

export default SideBar;
