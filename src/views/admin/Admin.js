import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CreateEventForm from "../../components/createEventForm/CreateEventForm";
import CreateTicketsForm from "../../components/createTicketsForm/CreateTicketsForm";
import AdminEventDisplay from "../../components/adminEventDisplay/AdminEventDisplay";
import { createTicketFormInitialState } from "../../assets/formStates/index";
import "./admin.css";
import { createEventAPI } from "../../apiRequests/eventBriteApi";
import { getEvents } from "../../apiRequests/databaseAPI";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Admin = () => {
  const state = useSelector(state => state);

  const [createTicketFormData, setCreateTicketFormData] = useState();
  const [creatingTickets, setCreatingTickets] = useState(false);
  const [creatingEvent, setCreatingEvent] = useState(false);
  console.log(state);
  return (
    <div className="adminWrapper">
      {creatingEvent ? (
        ""
      ) : (
        <div className="createEventButtonWrapper">
          <Button
            variant="success"
            className="createEventButton"
            onClick={() => {
              setCreatingEvent(true);
            }}>
            Create New Event
          </Button>
        </div>
      )}

      {creatingEvent ? (
        <div className="formComponentWrapper">
          <CreateEventForm setCreatingEvent={setCreatingEvent} />
        </div>
      ) : (
        <AdminEventDisplay
          creatingTickets={creatingTickets}
          setCreatingTickets={setCreatingTickets}
        />
      )}
      {creatingTickets ? <CreateTicketsForm /> : ""}
    </div>
  );
};

export default Admin;
