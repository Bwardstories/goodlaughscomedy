import React, { useState } from "react";
import uploadImage from "../../assets/images/uploadImage.jpg";
import DateDisplay from "../dateDisplay/DateDisplay";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./adminEventCard.css";

const AdminEventCard = props => {
  const { event, setCreatingTickets } = props;

  const startTime = new Date(event.start.local);

  return (
    <div className="adminEventCardWrapper">
      {event.logo ? (
        <img className="adminEventImage" src={event.logo.url} alt="" />
      ) : (
        <img className="adminEventImage" src={uploadImage} alt="" />
      )}
      <span>{event.name.html}</span>
      <br />
      {event.is_free ? (
        <Button
          className="createTicketsButton"
          onClick={() => {
            console.log(event);
            localStorage.setItem("event_id", `${event.id}`);
            localStorage.setItem("name", `${event.name.html}`);
            setCreatingTickets(true);
          }}>
          Create Tickets
        </Button>
      ) : (
        ""
      )}
      <DateDisplay
        startTime={startTime}
        // passing in classname dynamically to alter the positioning of the DateDisplay component
        dynamicClassName="adminEventCardDate"
      />
    </div>
  );
};

export default AdminEventCard;
