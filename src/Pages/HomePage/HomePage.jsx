import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HomeSlider from "./HomeSlider";
import { useTheme } from "../../Context/ThemeContext";

const HomePage = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`
        ${isDarkMode ? "bg-primary-dark" : "bg-primary-light"}
        ${isDarkMode ? "text-text-dark" : "text-text-light"}
        container w-screen h-screen`}
    >
      <Header />
      <div className="h-screen">
        <HomeSlider />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
