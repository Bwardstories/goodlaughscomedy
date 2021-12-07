import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
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
      if (index === state.liveEvents.allLiveEvents.length - 1) {
        index = 0;
        return setCarouselOBJ(state.liveEvents.allLiveEvents[index]);
      } else {
        index++;
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
      <img src={carouselOBJ.logo.url} alt={carouselOBJ.description.text} />

      <p1 className="carouselInfo">
        CLICK
        <a
          href={carouselOBJ.url}
          variant="success"
          className="carouselTicketButton">
          HERE
        </a>
        FOR TICKETS
      </p1>
    </div>
  );
};

export default Carousel;
