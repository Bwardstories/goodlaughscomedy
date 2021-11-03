import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CreateEventForm from "../../components/createEventForm/CreateEventForm";
import CreateTicketsForm from "../../components/createTicketsForm/CreateTicketsForm";
import AdminEventDisplay from "../../components/adminEventDisplay/AdminEventDisplay";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import { createTicketFormInitialState } from "../../assets/formStates/index";
import "./admin.css";
import {
  createEventAPI,
  retrieveAdminEvents,
} from "../../apiRequests/eventBriteApi";
import { getEvents } from "../../apiRequests/databaseAPI";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Admin = () => {
  const state = useSelector(state => state);
  const [eventArray, setEventArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [createTicketFormData, setCreateTicketFormData] = useState();
  const [creatingTickets, setCreatingTickets] = useState(false);
  const [creatingEvent, setCreatingEvent] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let res = await retrieveAdminEvents();
      setEventArray(res.data.events);
    }
    fetchData();
  }, []);

  console.log(state);
  return (
    <div className="adminWrapper">
      {creatingEvent ? (
        ""
      ) : (
        <Button
          variant="success"
          className="createEventButton"
          onClick={() => {
            setCreatingEvent(true);
          }}>
          Create New Event
        </Button>
      )}

      {creatingEvent ? (
        <div className="formComponentWrapper">
          <CreateEventForm setCreatingEvent={setCreatingEvent} />
        </div>
      ) : (
        <div className="displayWrapper">
          <AdminSidebar
            eventArray={eventArray}
            filteredArray={filteredArray}
            setFilteredArray={setFilteredArray}
          />
          <AdminEventDisplay
            eventArray={filteredArray.length > 0 ? filteredArray : eventArray}
            creatingTickets={creatingTickets}
            setCreatingTickets={setCreatingTickets}
          />
        </div>
      )}
      {creatingTickets ? <CreateTicketsForm /> : ""}
    </div>
  );
};

export default Admin;
