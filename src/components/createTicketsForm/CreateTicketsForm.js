import React, { useState } from "react";
import { createTicketFormInitialState } from "../../assets/formStates/index";
import { createTickets } from "../../apiRequests/eventBriteApi";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./createTicketsForm.css";

const CreateTicketsForm = () => {
  const [createTicketFormData, setCreateTicketFormData] = useState(
    createTicketFormInitialState
  );
  let name = localStorage.getItem("name");
  let event_id = localStorage.getItem("event_id");

  const handleFormChange = e => {
    e.preventDefault();
    setCreateTicketFormData({
      ...createTicketFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    createTickets(event_id, createTicketFormData);
  };
  console.log(createTicketFormInitialState, createTicketFormData);

  return (
    <div className="modalOverlay">
      <div className="ticketFormWrapper">
        <h2>Creating tickets for {name}</h2>
        <label htmlFor="name">Ticket Class Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Name example: General Admission"
          onChange={e => {
            handleFormChange(e);
          }}
        />
        <label htmlFor="quantity_total">How many tickets?</label>
        <input
          type="number"
          name="quantity_total"
          onChange={e => {
            handleFormChange(e);
          }}
        />
        <label htmlFor="cost">Total Cost for Each Ticket:</label>
        <input
          type="number"
          name="cost"
          className="ticketCost"
          id="cost"
          onChange={e => {
            handleFormChange(e);
          }}
        />
        <Button onClick={e => handleSubmit(e)}>Submit</Button>
      </div>
    </div>
  );
};

export default CreateTicketsForm;
