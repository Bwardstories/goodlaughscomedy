import React, { useState, useEffect } from "react";
import { carouselDB } from "../../assets/carouselDB/carouselDB";
import { useSelector } from "react-redux";
import "./carousel.css";

let index = 0;
let interval1;

const Carousel = () => {
  const state = useSelector(state => state);
  const [carouselOBJ, setCarouselOBJ] = useState(
    state.liveEvents.allLiveEvents[index]
  );

  const changeCarousel = () => {
    interval1 = setInterval(function () {
      console.log(state);
      console.log(state);
      if (index === state.liveEvents.allLiveEvents.length - 1) {
        index = 0;
        console.log(state, "from interval");
        return setCarouselOBJ(state.liveEvents.allLiveEvents[index]);
      } else {
        index++;
        console.log(state, "from interval");
        return setCarouselOBJ(state.liveEvents.allLiveEvents[index]);
      }
    }, 5000);
  };

  console.log(carouselOBJ, index);

  useEffect(() => {
    changeCarousel();
    return () => {
      clearInterval(interval1);
    };
  }, []);
  console.log(state);
  return (
    <div className="carousel_container">
      <a href={carouselOBJ.url}>
        <img src={carouselOBJ.logo.url} alt={carouselOBJ.description.text} />
      </a>
    </div>
  );
};

export default Carousel;
