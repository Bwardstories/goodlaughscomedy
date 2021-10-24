import React from "react";
import Carousel from "../../components/carousel/Carousel";
import "./home.css";

const Home = () => {
  return (
    <div className="homeWrapper">
      <Carousel />
      <Carousel />
    </div>
  );
};

export default Home;
