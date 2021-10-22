import React from "react";
import Carousel from "../../components/carousel/Carousel";
import { carouselDB } from "../../assets/carouselDB/carouselDB";

const Home = () => {
  console.log(carouselDB);
  return (
    <div>
      <Carousel />
    </div>
  );
};

export default Home;
