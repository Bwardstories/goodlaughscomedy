import React from "react";
import DateDisplay from "../dateDisplay/DateDisplay";
import "./eventCalendarCard.css";

const eventCalendarCard = props => {
  const { event } = props;
  const startTime = new Date(event.start.local);
  console.log(event);
  return (
    <div className="eventCalendarCardWrapper">
      <DateDisplay
        startTime={startTime}
        dynamicClassName="eventCalendarDate"
        monthStyle="short"
        weekdayStyle="short"
      />
      <img
        src={event.logo.url}
        alt={event.description.html}
        className="eventCalendarImage"
      />
      <p>{}</p>
    </div>
  );
};

export default eventCalendarCard;
