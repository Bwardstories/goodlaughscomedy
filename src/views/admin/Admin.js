import React, { useState } from "react";
import { useSelector } from "react-redux";
import CreateEventForm from "../../components/createEventForm/CreateEventForm";
import PriceTicketsForm from "../../components/priceTicketsForm/PriceTicketsForm";
import {
  eventFormInitialState,
  createTicketFormInitialState,
} from "../../assets/formStates/index";
import "./admin.css";
import { createEventAPI } from "../../apiRequests/eventBriteApi";

const Admin = () => {
  const state = useSelector(state => state);
  const [createEventFormData, setCreateEventFormData] = useState(
    eventFormInitialState
  );
  const [createTicketFormData, setCreateTicketFormData] = useState();

  console.log(state);
  return (
    <div className="formComponentWrapper">
      <CreateEventForm
        createEventFormData={createEventFormData}
        setCreateEventFormData={setCreateEventFormData}
        eventFormInitialState={eventFormInitialState}
      />
      <PriceTicketsForm />
    </div>
  );
};

export default Admin;
