import React from "react";
import ThemeController from "../ThemeController/ThemeController";

const SideBar = () => {
  const sideBarNavigation = [
    { title: "Home", icon: "fa-solid fa-house" },
    { title: "Contact", icon: "fa-solid fa-address-book" },
    { title: "About", icon: "fa-solid fa-info" },
    { title: "Login", icon: "fa-solid fa-user" },
  ];

  return (
    <>
      <div className="flex flex-col gap-6 h-1/3 group">
        {sideBarNavigation.map((item, index) => (
          <p
            key={index}
            className="pl-6 h-1/4 w-full flex gap-2 items-center"
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
