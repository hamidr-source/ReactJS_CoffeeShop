import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import HomeSlider from "./HomeSlider";


const HomePage = () => {
  return (
    <div className="container w-screen h-screen">
      <Header />
      <div className="h-screen">
        <HomeSlider />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
