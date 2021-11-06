import React from "react";
import "./publishEventForm.css";

const PublishEventForm = props => {
  const { setPublishing, eventArray } = props;
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
      </div>
    </>
  );
};

export default PublishEventForm;
