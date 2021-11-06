import React, { useState, useEffect } from "react";
import AdminEventCard from "../adminEventCard/AdminEventCard";
import { retrieveAdminEvents } from "../../apiRequests/eventBriteApi";
import "./adminEventDisplay.css";

const AdminEventDisplay = props => {
  const { creatingTickets, setCreatingTickets, eventArray } = props;

  return (
    <div className="adminCardsContainer">
      {eventArray
        ? eventArray.map((event, index) => {
            return (
              <AdminEventCard
                event={event}
                key={index}
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
