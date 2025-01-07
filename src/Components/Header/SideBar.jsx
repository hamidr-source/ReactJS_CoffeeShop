import React from "react";
import ThemeController from "../ThemeController/ThemeController";

const SideBar = () => {
  return (
    <>
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
    </>
  );
};

export default SideBar;
