import React, { useState } from "react";
import "./createEventForm.css";
import {
  createEventAPI,
  retrieveAdminEvents,
} from "../../apiRequests/eventBriteApi";
import { eventFormInitialState } from "../../assets/formStates/index";

const CreateEventForm = props => {
  const { setCreatingEvent } = props;
  const [createEventFormData, setCreateEventFormData] = useState(
    eventFormInitialState
  );

  const handleFormChange = e => {
    e.preventDefault();
    setCreateEventFormData({
      ...createEventFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooleanChange = e => {
    e.preventDefault();
    setCreateEventFormData({
      ...createEventFormData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    createEventAPI(createEventFormData);
    setCreateEventFormData(eventFormInitialState);
    let res = await retrieveAdminEvents();
    setCreatingEvent(false);
  };

  console.log(createEventFormData.logo_id);
  return (
    <div className="createEventFormContainer">
      <form className="formWrapper">
        <div className="titleAndVenue">
          <label htmlFor="event.name.html">Event Title:</label>
          <input
            type="text"
            maxLength="75"
            name="name"
            value={createEventFormData.name}
            onChange={e => handleFormChange(e)}
          />
          <label htmlFor="venue_id">
            Select your Venue
            <select name="venue_id" onChange={e => handleFormChange(e)}>
              <option value="00000000">Southern Roots</option>
              <option value="69172139">Dreamers</option>
              <option value="11111111">The Brick</option>
            </select>
          </label>
        </div>
        <div className="dateWrapper">
          <div className="dates">
            <label htmlFor="start">Event Start Date</label>
            <input
              type="date"
              name="start"
              onChange={e => handleFormChange(e)}
            />
            <label htmlFor="start_time">Start Time</label>
            <select name="start_time" onChange={e => handleFormChange(e)}>
              <option value="16:00:00">12:00 PM</option>
              <option value="16:30:00">12:30 PM</option>
              <option value="17:00:00">01:00 PM</option>
              <option value="17:30:00">01:30 PM</option>
              <option value="18:00:00">02:00 PM</option>
              <option value="18:30:00">02:30 PM</option>
              <option value="19:00:00">03:00 PM</option>
              <option value="19:30:00">03:30 PM</option>
              <option value="20:00:00">04:00 PM</option>
              <option value="20:30:00">04:30 PM</option>
              <option value="21:00:00">05:00 PM</option>
              <option value="21:30:00">05:30 PM</option>
              <option value="22:00:00">06:00 PM</option>
              <option value="22:30:00">06:30 PM</option>
              <option value="23:00:00">07:00 PM</option>
              <option value="23:30:00">07:30 PM</option>
              <option value="00:00:00">08:00 PM</option>
              <option value="00:30:00">08:30 PM</option>
              <option value="01:00:00">09:00 PM</option>
              <option value="01:30:00">09:30 PM</option>
              <option value="02:00:00">10:00 PM</option>
              <option value="02:30:00">10:30 PM</option>
              <option value="03:00:00">11:00 PM</option>
              <option value="03:30:00">11:30 PM</option>
              <option value="04:00:00">12:00 AM</option>
            </select>
          </div>
          <div className="dates">
            <label htmlFor="end">Event End Date</label>
            <input type="date" name="end" onChange={e => handleFormChange(e)} />
            <label htmlFor="end_time">End Time</label>
            <select name="end_time" onChange={e => handleFormChange(e)}>
              <option value="16:00:00">12:00 PM</option>
              <option value="16:30:00">12:30 PM</option>
              <option value="17:00:00">01:00 PM</option>
              <option value="17:30:00">01:30 PM</option>
              <option value="18:00:00">02:00 PM</option>
              <option value="18:30:00">02:30 PM</option>
              <option value="19:00:00">03:00 PM</option>
              <option value="19:30:00">03:30 PM</option>
              <option value="20:00:00">04:00 PM</option>
              <option value="20:30:00">04:30 PM</option>
              <option value="21:00:00">05:00 PM</option>
              <option value="21:30:00">05:30 PM</option>
              <option value="22:00:00">06:00 PM</option>
              <option value="22:30:00">06:30 PM</option>
              <option value="23:00:00">07:00 PM</option>
              <option value="23:30:00">07:30 PM</option>
              <option value="00:00:00">08:00 PM</option>
              <option value="00:30:00">08:30 PM</option>
              <option value="01:00:00">09:00 PM</option>
              <option value="01:30:00">09:30 PM</option>
              <option value="02:00:00">10:00 PM</option>
              <option value="02:30:00">10:30 PM</option>
              <option value="03:00:00">11:00 PM</option>
              <option value="03:30:00">11:30 PM</option>
              <option value="04:00:00">12:00 AM</option>
            </select>
          </div>
        </div>
        <div>
          <label className="hideDateCheckboxes" htmlFor="hide_start_date">
            <input
              type="checkbox"
              id="accept"
              name="hide_start_date"
              onChange={e => handleBooleanChange(e)}
            />
            Hide Start Date
          </label>
          <label className="hideDateCheckboxes" htmlFor="hide_end_date">
            <input
              type="checkbox"
              id="accept"
              name="hide_end_date"
              onChange={e => handleBooleanChange(e)}
            />
            Hide End Date
          </label>
        </div>
        <div className="descriptionWrapper">
          <h2>Event Description</h2>
          <input
            className="summary"
            type="text"
            name="summary"
            placeholder="Enter a brief summary of the event"
            maxLength="140"
            onChange={e => handleFormChange(e)}
          />
          <br></br>
          <label htmlFor="description">
            Enter a full detailed description of your event
          </label>
          <textarea
            className="description"
            name="description"
            wrap="hard"
            rows="10"
            onChange={e => handleFormChange(e)}
          />
        </div>
        <button onClick={handleSubmit}>Create Event</button>
      </form>
    </div>
  );
};

export default CreateEventForm;
