import React from "react";
import { locations } from "../../assets/locationDB/locationDB";
import Button from "react-bootstrap/Button";
import "./locations.css";

const Locations = () => {
  console.log(locations);
  return (
    <div className="locationGrid">
      {locations.map(location => (
        <div className="locationCardWrapper">
          <h3 className="locationTitle">{location.title}</h3>
          <img
            src={location.img}
            alt={`${location.title} location`}
            className="locationImage"></img>
          <p className="locationCity">{location.city}</p>
          <p className="locationSummary">{location.summary}</p>
          {location.url ? (
            <Button variant="dark" href={location.url}>
              LEARN MORE
            </Button>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Locations;
