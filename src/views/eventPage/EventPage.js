import React from "react";
import LiveEventCard from "../../components/liveEventCard/LiveEventCard";
import { useSelector } from "react-redux";

import "./eventPage.css";

const EventPage = () => {
  const state = useSelector(state => state);

  return (
    <div className="liveEventCardWrapper">
      {state.liveEvents.allLiveEvents.map(event => (
        <LiveEventCard event={event} />
      ))}
    </div>
  );
};

export default EventPage;
