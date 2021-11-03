import React, { useState, useEffect } from "react";
import AdminEventCard from "../adminEventCard/AdminEventCard";
import { retrieveAdminEvents } from "../../apiRequests/eventBriteApi";
import "./adminEventDisplay.css";

const AdminEventDisplay = props => {
  const { creatingTickets, setCreatingTickets } = props;
  const [eventArray, setEventArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await retrieveAdminEvents();
      setEventArray(res.data.events);
    }
    fetchData();
  }, []);
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
