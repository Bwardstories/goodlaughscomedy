import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CreateEventForm from "../../components/createEventForm/CreateEventForm";
import CreateTicketsForm from "../../components/createTicketsForm/CreateTicketsForm";
import PublishEventForm from "../../components/publishEventForm/PublishEventForm";
import AdminEventDisplay from "../../components/adminEventDisplay/AdminEventDisplay";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import { createTicketFormInitialState } from "../../assets/formStates/index";
import "./admin.css";
import { retrieveAdminEvents } from "../../apiRequests/eventBriteApi";
import "bootstrap/dist/css/bootstrap.min.css";

const Admin = () => {
  const state = useSelector(state => state);
  const [eventArray, setEventArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [createTicketFormData, setCreateTicketFormData] = useState();
  const [publishing, setPublishing] = useState(false);
  const [creatingTickets, setCreatingTickets] = useState(false);
  const [creatingEvent, setCreatingEvent] = useState(false);
  const [createTicketsArray, setCreateTicketsArray] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let res = await retrieveAdminEvents();
      setEventArray(res.data.events);
    }
    fetchData();
  }, []);
  console.log(createTicketsArray);
  return (
    <div className="adminWrapper">
      {creatingEvent ? (
        <div className="formComponentWrapper">
          <CreateEventForm setCreatingEvent={setCreatingEvent} />
        </div>
      ) : (
        ""
      )}
      <div className="displayWrapper">
        <AdminSidebar
          setPublishing={setPublishing}
          createTicketsArray={createTicketsArray}
          setCreateTicketsArray={setCreateTicketsArray}
          setCreatingTickets={setCreatingTickets}
          setCreatingEvent={setCreatingEvent}
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
      {creatingTickets ? (
        <CreateTicketsForm
          createTicketsArray={createTicketsArray}
          setCreateTicketsArray={setCreateTicketsArray}
          setCreatingTickets={setCreatingTickets}
        />
      ) : (
        ""
      )}
      {publishing ? (
        <PublishEventForm
          eventArray={eventArray}
          setPublishing={setPublishing}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Admin;
