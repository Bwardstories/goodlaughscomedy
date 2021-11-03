import React, { useState } from "react";
import "./adminSidebar.css";

const AdminSidebar = props => {
  const { eventArray, filteredArray, setFilteredArray } = props;
  const [filterOptions, setFilterOptions] = useState({});

  const handleCheckbox = (e, status) => {
    if (!e.target.checked) {
      setFilterOptions({
        ...filterOptions,
        [e.target.name]: status ? "bull" : e.target.checked,
      });
    }
    setFilterOptions({
      ...filterOptions,
      [e.target.name]: status ? status : e.target.checked,
    });
    let tempArray = [];

    eventArray.filter(event => {});

    // if (e.target.checked) {
    //   eventArray.map(event => {
    //     if (event.status === e.target.name) {
    //       console.log(event, "form map");
    //       setFilteredArray(prevState => [...prevState, event]);
    //     }
    //     console.log(tempArray);
    //     return filteredArray;
    //   });
    // }
    // if (!e.target.checked) {
    //   eventArray.map(event => {
    //     if (event.status !== e.target.name) {
    //       setFilteredArray(prevState => [...prevState, event]);
    //     }
    //     return filteredArray;
    //   });
    // }
  };

  console.log(filterOptions);
  console.log(filteredArray);
  return (
    <div className="sidebarFilter">
      <div className="filterContainer">
        <span>Filter By:</span>
        <div>
          <input
            type="checkbox"
            name="status"
            onChange={e => {
              handleCheckbox(e, "draft");
            }}
          />
          <label htmlFor="draft">Draft</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="status"
            onChange={e => {
              handleCheckbox(e, "live");
            }}
          />
          <label htmlFor="live">Live</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="ticket_availability"
            onChange={e => {
              handleCheckbox(e);
            }}
          />
          <label htmlFor="ticket_availability">Has Tickets</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="sold_out"
            onChange={e => {
              handleCheckbox(e);
            }}
          />
          <label htmlFor="sold_out">Sold Out</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="published"
            onChange={e => {
              handleCheckbox(e);
            }}
          />
          <label htmlFor="published">Published</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="ended"
            onChange={e => {
              handleCheckbox(e);
            }}
          />
          <label htmlFor="ended">Ended</label>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
