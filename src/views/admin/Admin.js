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
  const [filteredArray, setFilteredArray] = useState([]);
  const [createTicketFormData, setCreateTicketFormData] = useState();
  // state to control rendering of create event form
  const [creatingEvent, setCreatingEvent] = useState(false);
  // state that holds the inital event array with all events.
  const [eventArray, setEventArray] = useState([]);
  // state to control rendering of create tickets form
  const [creatingTickets, setCreatingTickets] = useState(false);
  // state for array of events that need tickets made
  const [createTicketsArray, setCreateTicketsArray] = useState([]);
  // state to control rendering of publishing form
  const [publishing, setPublishing] = useState(false);
  // state for the array of events that need to be published
  const [publishingArray, setPublishingArray] = useState({});
  // useEffect to set the inital event array when the admin dashboard is mounted

  const currentDay = new Date();

  useEffect(() => {
    async function fetchData() {
      let res = await retrieveAdminEvents();
      let filteredArray = res.data.events.filter(event => {
        let eventStart = new Date(event.start.local);
        return currentDay.getTime() < eventStart.getTime();
      });
      console.log(res.data);
      setEventArray(filteredArray);
    }
    fetchData();
  }, []);
  console.log(eventArray);
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
          setPublishingArray={setPublishingArray}
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
          publishingArray={publishingArray}
          setPublishingArray={setPublishingArray}
          setPublishing={setPublishing}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Admin;
