import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CustomSlider from "./Slider";


const HomePage = () => {
  return (
    <div className="container w-screen h-screen">
      <Header />
      <div className="h-screen">
        <CustomSlider />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
