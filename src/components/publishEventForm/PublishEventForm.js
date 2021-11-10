import React, { useState } from "react";
import { publishEvent } from "../../apiRequests/eventBriteApi";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./publishEventForm.css";

const PublishEventForm = props => {
  const { setPublishing, publishingArray, setPublishingArray } = props;
  const [publishEventFormData, setPublishEventFormData] = useState({
    "event_id": "",
    "description": "",
  });

  const handleFormChange = e => {
    e.preventDefault();
    setPublishEventFormData({
      ...publishEventFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let res = await publishEvent(publishEventFormData);
    console.log(res);
    if (!res) {
      console.log("no res");
      return;
    } else {
      console.log(res, "res");
      setPublishing(false);
    }
  };

  console.log(publishingArray, publishEventFormData);
  return (
    <>
      <div
        className="publishEventOverlay"
        onClick={() => setPublishing(false)}></div>
      <div className="publishEventWrapper">
        <div
          className="publishEventCloseButton"
          onClick={() => setPublishing(false)}>
          x
        </div>
        {publishingArray.length === 0 ? (
          <h3>
            Sorry, but there doesn't seem to be an event that is ready to be
            published. Make sure you have created your event and created tickets
            for it.
          </h3>
        ) : (
          <>
            <h3>Publish an Event</h3>
            <label htmlFor="eventName">Select an Event to Publish</label>
            <select
              name="event_id"
              id="chooseEvent"
              onChange={e => handleFormChange(e)}>
              <option value=""></option>
              {publishingArray.map((event, index) => (
                <option value={event.id} key={index}>
                  {event.name.html}
                </option>
              ))}
            </select>
            <label htmlFor="descriptioni">
              Please enter your detailed event description here. <br></br> Make
              sure that every paragraph is separated by hitting enter twice.
            </label>
            <textarea
              name="description"
              id="eventDescription"
              cols="60"
              rows="10"
              onChange={e => handleFormChange(e)}></textarea>
            <Button onClick={handleSubmit}>Publish</Button>
          </>
        )}
      </div>
    </>
  );
};

export default PublishEventForm;
