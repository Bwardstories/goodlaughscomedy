import React, { useState } from "react";
import { retrieveTicketListApi } from "../../apiRequests/eventBriteApi";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./editTicketsPage.css";

const EditTicketsPage = props => {
  const { eventsWithTicketsToEditArray, setCreatingTickets } = props;
  console.log(eventsWithTicketsToEditArray);
  const [ticketsToEdit, setTicketsToEdit] = useState([]);
  let event_id = "";
  let event_name = "";
  const handleChange = e => {
    event_id = eventsWithTicketsToEditArray[e.target.value].id;
    event_name = eventsWithTicketsToEditArray[e.target.value].name.html;
    console.log(eventsWithTicketsToEditArray[e.target.value]);
    console.log(event_name, event_id);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    localStorage.setItem("event_id", `${event_id}`);
    localStorage.setItem("name", `${event_name}`);
    let res = await retrieveTicketListApi(event_id);
    console.log(res.data);
    setTicketsToEdit(res.data.ticket_classes);
  };
  console.log(ticketsToEdit, "tickets to edit");
  return (
    <div className="editTicketsPageWrapper">
      <div className="editTicketsEventSelectionWrapper">
        <h4>Please Select which event you would like to edit tickets for:</h4>
        <div>
          <select
            name=""
            id="editTicketsOptions"
            onChange={e => handleChange(e)}>
            <option value=""></option>
            {eventsWithTicketsToEditArray
              ? eventsWithTicketsToEditArray.map((event, index) => {
                  return (
                    <option key={index} value={index}>
                      {event.name.html}
                    </option>
                  );
                })
              : ""}
          </select>

          <Button
            variant="success"
            onClick={e => handleSubmit(e)}
            className="editTicketsAPIButton">
            Submit
          </Button>
        </div>
      </div>
      {ticketsToEdit.length > 0 ? (
        <div className="editTicketCardWrapper">
          {ticketsToEdit.map(ticket => (
            <>
              <div className="ticketCard">
                <div className="ticketSection btn">
                  <Button variant="warning">Edit </Button>
                </div>
                <div className="ticketSection ticketClassName">
                  <span>Ticket Class Name</span>
                  <div className="ticketFont">{ticket.display_name}</div>
                </div>
                <div className="ticketSection">
                  <span>Ticket Price</span>
                  <div className="ticketFont">{ticket.cost.display}</div>
                </div>
                <div className="ticketSection">
                  <span>Tickets Sold</span>
                  <div className="ticketFont">{ticket.quantity_sold}</div>
                </div>
                <div className="ticketSection">
                  <span>Total Tickets</span>
                  <div className="ticketFont">{ticket.quantity_total}</div>
                </div>
                <div className="ticketSection btn">
                  <Button variant="danger">Trash</Button>
                </div>
              </div>
            </>
          ))}
          <Button
            className="addTicketButton"
            variant="success"
            onClick={() => {
              setCreatingTickets(true);
            }}>
            Add Ticket Class
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EditTicketsPage;
