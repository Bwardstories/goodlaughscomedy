import React from "react";

import DateDisplay from "../dateDisplay/DateDisplay";
import "./liveEventCard.css";
import Button from "react-bootstrap/Button";

const LiveEventCard = props => {
  const { event } = props;
  const startTime = new Date(event.start.local);
  console.log(event);

  return (
    <div className="liveEventCard">
      <DateDisplay
        startTime={startTime}
        weekdayStyle="long"
        monthStyle="long"
        // passing in classname dynamically to alter the positioning of the DateDisplay component
        dynamicClassName="liveEventCardDate"
      />
      <img
        src={event.logo.url}
        alt="comedy banner"
        className="liveEventImage"
      />
      <div className="liveEventInfoWrapper">
        <div>
          <div className="liveEventName">{event.name.html}</div>
          <div className="liveEventDescription">{event.summary}</div>
        </div>
        <div>
          <Button variant="success" href={event.url}>
            View Tickets
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LiveEventCard;
