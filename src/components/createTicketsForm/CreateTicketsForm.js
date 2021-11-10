import React, { useState, useEffect } from "react";
import { createTicketFormInitialState } from "../../assets/formStates/index";
import { createTickets } from "../../apiRequests/eventBriteApi";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./createTicketsForm.css";

const CreateTicketsForm = props => {
  const { createTicketsArray, setCreateTicketsArray, setCreatingTickets } =
    props;
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

  const handleSubmit = async e => {
    console.log(createTicketFormData);
    let res = await createTickets(createTicketFormData);
    if (!res) {
      return;
    } else {
      localStorage.clear();
      setCreatingTickets(false);
    }
  };
  console.log(createTicketFormData);

  useEffect(() => {
    if (localStorage.getItem("event_id") && localStorage.getItem("name")) {
      setCreateTicketFormData({
        ...createTicketFormData,
        event_id: event_id,
        name: name,
      });
    }
  }, []);

  console.log(createTicketFormData);
  return (
    <>
      {createTicketsArray.length > 0 ? (
        <>
          <div
            className="modalOverlay"
            onClick={() => {
              localStorage.clear();
              setCreatingTickets(false);
            }}>
            {" "}
          </div>
          <div className="ticketFormWrapper">
            <p
              className="ticketFormCloseButton"
              onClick={() => {
                localStorage.clear();
                setCreateTicketsArray([]);
                setCreatingTickets(false);
              }}>
              x
            </p>
            <h2>Creating Tickets</h2>
            <label htmlFor="eventName">
              Please select an event to make tickets for
            </label>
            <select
              name="event_id"
              id=""
              onChange={e => {
                handleFormChange(e);
              }}>
              <option value=""></option>
              {createTicketsArray.map(event => (
                <option value={event.id}>{event.name.html}</option>
              ))}
            </select>
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
        </>
      ) : (
        <>
          <div
            className="modalOverlay"
            onClick={() => {
              localStorage.clear();
              setCreatingTickets(false);
            }}></div>
          <div className="ticketFormWrapper">
            <p
              className="ticketFormCloseButton"
              onClick={() => {
                localStorage.clear();
                setCreatingTickets(false);
              }}>
              x
            </p>
            <h2>Creating tickets for {createTicketFormData.name}</h2>
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
        </>
      )}
    </>
  );
};

export default CreateTicketsForm;
