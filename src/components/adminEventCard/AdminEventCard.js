import React, { useState } from "react";
import uploadImage from "../../assets/images/uploadImage.jpg";
import CreateTicketsForm from "../createTicketsForm/CreateTicketsForm";
import { createTickets } from "../../apiRequests/eventBriteApi";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./adminEventCard.css";

const AdminEventCard = props => {
  const { event, creatingTickets, setCreatingTickets } = props;

  console.log(event);

  const handleCreateTicket = (e, event_id) => {
    e.preventDefault();
    createTickets(event_id);
  };

  return (
    <div className="adminEventCardWrapper">
      {event.logo ? (
        <img className="adminEventImage" src={event.logo.url} alt="" />
      ) : (
        <img className="adminEventImage" src={uploadImage} alt="" />
      )}
      <span>{event.name.html}</span>
      <br />
      Start Time: <span>{event.start.local}</span>
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
    </div>
  );
};

export default AdminEventCard;
