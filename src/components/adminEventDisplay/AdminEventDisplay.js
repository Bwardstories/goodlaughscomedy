import React, { useState, useEffect } from "react";
import AdminEventCard from "../adminEventCard/AdminEventCard";
import { retrieveAdminEvents } from "../../apiRequests/eventBriteApi";
import "./adminEventDisplay.css";

const AdminEventDisplay = props => {
  const { creatingTickets, setCreatingTickets, eventArray } = props;

  console.log(eventArray);
  return (
    <div className="adminCardsContainer">
      {eventArray
        ? eventArray.map(event => {
            return (
              <AdminEventCard
                event={event}
                creatingTickets={creatingTickets}
                setCreatingTickets={setCreatingTickets}
              />
            );
          })
        : ""}
    </div>
  );
};

export default AdminEventDisplay;
