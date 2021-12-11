import React from "react";
import { useSelector } from "react-redux";
import EventCalendarCard from "../eventCalendarCard/eventCalendarCard";
import "./eventCalendar.css";

const EventCalendar = props => {
  const { setEventCalendarVisible } = props;
  const state = useSelector(state => state);
  console.log(state, "from calendar");
  return (
    <div className="eventCalendarOverlay">
      <p
        className="eventCalendarCloseButton"
        onClick={() => setEventCalendarVisible(false)}>
        x
      </p>
      <div className="eventCalendarGrid">
        {state.liveEvents.allLiveEvents.map(event => (
          <EventCalendarCard event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
