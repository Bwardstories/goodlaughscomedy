import React from "react";
import "./dateDisplay.css";

const DateDisplay = ({ startTime, dynamicClassName }) => {
  // imports start time and class props. the class prop will dynamically assign the class depending on where the date is rendered, to alter it's positioning.

  //   formats day from sartTime string
  const day = startTime.toLocaleString("en-US", {
    weekday: "short",
  });
  // formats month from startTime string
  const month = startTime.toLocaleString("en-US", {
    month: "long",
  });
  // formats date from startTime string
  const date = startTime.toLocaleString("en-US", {
    day: "numeric",
  });
  // formats year from startTime string
  const year = startTime.toLocaleString("en-US", {
    year: "numeric",
  });
  // formats time from startTime string
  const time = startTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <>
      <div className={dynamicClassName}>
        <div className="calendarMonthWrapper">{month}</div>
        <div className="calendarDateWrapper">{date}</div>
        <div className="calendarDayWrapper">{day}</div>
        <div className="calendarTimeWrapper">{time}</div>
      </div>
    </>
  );
};

export default DateDisplay;
