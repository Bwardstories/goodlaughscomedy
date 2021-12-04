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
    setCreateEventFormData({
      ...createEventFormData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let res = await createEventAPI(createEventFormData);
    console.log(res);
    //  retrieveAdminEvents();
    if (!res) {
      return;
    } else {
      setCreateEventFormData(eventFormInitialState);
      setCreatingEvent(false);
    }
  };
  console.log(createEventFormData);
  return (
    <>
      <div className="eventFormOverlay"></div>
      <div className="createEventFormContainer">
        <p
          className="closeEventFormButton"
          onClick={() => setCreatingEvent(false)}>
          x
        </p>
        <form className="formWrapper">
          <div className="titleAndVenue">
            <label htmlFor="event.name.html" className="eventTitle">
              <h2>Event Title</h2>
            </label>
            <input
              type="text"
              maxLength="75"
              name="name"
              value={createEventFormData.name}
              onChange={e => handleFormChange(e)}
              placeholder="Name of Event Here"
            />
            <label htmlFor="venue_id">
              Select your Venue
              <select name="venue_id" onChange={e => handleFormChange(e)}>
                <option></option>
                <option value="69172139">Dreamers</option>
                <option value="72353949">The Brick</option>
                <option value="72353909">New Realm Brewing Co</option>
                <option value="72353859">FireFly Distillery</option>
                <option value="72353779">Two Blokes Brewing</option>
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
                <option value=""></option>
                <option value="12:00:00">12:00 PM</option>
                <option value="12:30:00">12:30 PM</option>
                <option value="13:00:00">01:00 PM</option>
                <option value="13:30:00">01:30 PM</option>
                <option value="14:00:00">02:00 PM</option>
                <option value="14:30:00">02:30 PM</option>
                <option value="15:00:00">03:00 PM</option>
                <option value="15:30:00">03:30 PM</option>
                <option value="16:00:00">04:00 PM</option>
                <option value="16:30:00">04:30 PM</option>
                <option value="17:00:00">05:00 PM</option>
                <option value="17:30:00">05:30 PM</option>
                <option value="18:00:00">06:00 PM</option>
                <option value="18:30:00">06:30 PM</option>
                <option value="19:00:00">07:00 PM</option>
                <option value="19:30:00">07:30 PM</option>
                <option value="20:00:00">08:00 PM</option>
                <option value="20:30:00">08:30 PM</option>
                <option value="21:00:00">09:00 PM</option>
                <option value="21:30:00">09:30 PM</option>
                <option value="22:00:00">10:00 PM</option>
                <option value="22:30:00">10:30 PM</option>
                <option value="23:00:00">11:00 PM</option>
                <option value="23:30:00">11:30 PM</option>
                <option value="00:00:00">12:00 AM</option>
              </select>
            </div>
            <div className="dates">
              <label htmlFor="end">Event End Date</label>
              <input
                type="date"
                name="end"
                onChange={e => {
                  handleFormChange(e);
                  console.log(new Date(e.target.value));
                  console.log(e.target.value);
                }}
              />
              <label htmlFor="end_time">End Time</label>
              <select name="end_time" onChange={e => handleFormChange(e)}>
                <option value=""></option>
                <option value="12:00:00">12:00 PM</option>
                <option value="12:30:00">12:30 PM</option>
                <option value="13:00:00">01:00 PM</option>
                <option value="13:30:00">01:30 PM</option>
                <option value="14:00:00">02:00 PM</option>
                <option value="14:30:00">02:30 PM</option>
                <option value="15:00:00">03:00 PM</option>
                <option value="15:30:00">03:30 PM</option>
                <option value="16:00:00">04:00 PM</option>
                <option value="16:30:00">04:30 PM</option>
                <option value="17:00:00">05:00 PM</option>
                <option value="17:30:00">05:30 PM</option>
                <option value="18:00:00">06:00 PM</option>
                <option value="18:30:00">06:30 PM</option>
                <option value="19:00:00">07:00 PM</option>
                <option value="19:30:00">07:30 PM</option>
                <option value="20:00:00">08:00 PM</option>
                <option value="20:30:00">08:30 PM</option>
                <option value="21:00:00">09:00 PM</option>
                <option value="21:30:00">09:30 PM</option>
                <option value="22:00:00">10:00 PM</option>
                <option value="22:30:00">10:30 PM</option>
                <option value="23:00:00">11:00 PM</option>
                <option value="23:30:00">11:30 PM</option>
                <option value="00:00:00">12:00 AM</option>
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
            <h2>Event Summary</h2>
            <input
              className="summary"
              type="text"
              name="summary"
              placeholder="Enter a brief summary of the event"
              maxLength="140"
              onChange={e => handleFormChange(e)}
            />
          </div>
          <button onClick={handleSubmit}>Create Event</button>
        </form>
      </div>
    </>
  );
};

export default CreateEventForm;
