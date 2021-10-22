import React, { useState, useEffect } from "react";
import "./carousel.css";
import { carouselDB } from "../../assets/carouselDB/carouselDB";

let index = 0;
let interval1;

const Carousel = () => {
  const [carouselOBJ, setCarouselOBJ] = useState(carouselDB[0]);

  const changeCarousel = () => {
    interval1 = setInterval(function () {
      if (index === carouselDB.length - 1) {
        index = 0;
        return setCarouselOBJ(carouselDB[index]);
      } else {
        console.log("working");
        index++;
        return setCarouselOBJ(carouselDB[index]);
      }
    }, 5000);
  };

  useEffect(() => {
    changeCarousel();
    return () => {
      clearInterval(interval1);
    };
  }, []);

  return (
    <div className="carousel_container">
      <a href={carouselOBJ.url}>
        <img src={carouselOBJ.img} alt={carouselOBJ.alt} />
      </a>
    </div>
  );
};

export default Carousel;
