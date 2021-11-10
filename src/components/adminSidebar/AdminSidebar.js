import React, { useState } from "react";
import { failure, success } from "../../errorHandling/toastMessages";
import "./adminSidebar.css";

let tempArray = [];

const AdminSidebar = props => {
  const {
    eventArray,
    setFilteredArray,
    setCreatingEvent,
    setCreatingTickets,
    setCreateTicketsArray,
    setPublishing,
    setPublishingArray,
  } = props;

  const filterData = [
    {
      filterParam: "status",
      filterValue: "draft",
    },
    {
      filterParam: "status",
      filterValue: "live",
    },
    {
      filterParam: "tickets_made",
    },
    {
      filterParam: "ticket_availability",
      filterValue: true,
    },
    {
      filterParam: "is_sold_out",
      filterValue: true,
    },
    {
      filterParam: "published",
      filterValue: !null,
    },
  ];

  function resetCheckboxes() {
    var inputs = document.querySelectorAll(".checkbox");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }
  }

  const handleIsChecked = () => {
    let filterOptions = [];
    var inputs = document.querySelectorAll(".checkbox");
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      if (input.checked) {
        filterOptions.push(filterData[input.value]);
      }
    }
    return filterOptions;
  };

  const statusFilter = filterValue => {
    if (tempArray.length === 0) {
      tempArray = eventArray.filter(event => event.status === filterValue);
      console.log(tempArray, "from status filter pre if");
      return tempArray;
    } else {
      tempArray = tempArray.filter(event => event.status === filterValue);
      console.log(tempArray, "from status filter post if");
      return tempArray;
    }
  };

  const needsTicketsFilter = () => {
    let d1 = new Date();
    if (tempArray.length === 0) {
      tempArray = eventArray.filter(event => {
        let d2 = new Date(event.end.local);
        return (
          !event.ticket_availability.start_sales_date &&
          d2.getTime() > d1.getTime()
        );
      });
      console.log(tempArray);
    } else {
      tempArray = tempArray.filter(event => {
        let d2 = new Date(event.end.local);
        return (
          !event.ticket_availability.start_sales_date &&
          d2.getTime() > d1.getTime()
        );
      });
    }
    return tempArray;
  };

  const hasTicketsFilter = () => {
    if (tempArray.length === 0) {
      tempArray = eventArray.filter(
        event => event.ticket_availability.has_available_tickets === true
      );
      console.log(tempArray, "from tickets filter");
      return tempArray;
    } else {
      tempArray = tempArray.filter(
        event => event.ticket_availability.has_available_tickets === true
      );
      return tempArray;
    }
  };

  const soldOutFilter = () => {
    if (tempArray.length === 0) {
      tempArray = eventArray.filter(
        event => event.ticket_availability.is_sold_out === true
      );
      return tempArray;
    } else {
      tempArray = tempArray.filter(
        event => event.ticket_availability.is_sold_out === true
      );
      return tempArray;
    }
  };

  const needsToBePublished = () => {
    let needsPublishedArray = hasTicketsFilter();
    let tmpArray = needsPublishedArray.filter(event => event.status !== "live");
    console.log(needsPublishedArray);
    return tmpArray;
  };

  const handleFilter = async () => {
    let res = await handleIsChecked();
    tempArray = [];
    for (let i = 0; i < res.length; i++) {
      let filter = res[i];
      if (filter.filterParam === "status") {
        tempArray = statusFilter(filter.filterValue);
      }
      if (filter.filterParam === "tickets_made") {
        tempArray = needsTicketsFilter();
      }
      if (filter.filterParam === "ticket_availability") {
        console.log(filter.filterParam);
        tempArray = hasTicketsFilter();
      }
      if (filter.filterParam === "is_sold_out") {
        tempArray = soldOutFilter();
        console.log(tempArray);
      }
    }
    console.log(tempArray);
    setFilteredArray(tempArray);
    resetCheckboxes();
  };

  return (
    <div className="sidebarFilter">
      <div className="filterContainer">
        <div>
          <h5>What would you like to do?</h5>
        </div>
        <ul id="editEventList">
          <li
            onClick={() => {
              setCreatingEvent(true);
            }}>
            Create New Event
          </li>
          <li
            onClick={() => {
              setCreateTicketsArray(needsTicketsFilter());
              setCreatingTickets(true);
            }}>
            Create Tickets
          </li>
          <li
            onClick={() => {
              setPublishingArray(needsToBePublished);
              setPublishing(true);
            }}>
            Publish Event
          </li>
        </ul>
        <div>
          {" "}
          <span>Filter Listed Events By Event Status:</span>
        </div>

        <span>(Check One)</span>
        <div>
          <input className="checkbox" type="radio" name="status" value={0} />
          <label htmlFor="draft">Draft</label>
        </div>
        <div>
          <input className="checkbox" type="radio" name="status" value={1} />
          <label htmlFor="live">Live</label>
        </div>
        <span>Filter By Ticket Status:</span>
        <span>(Select all that apply)</span>
        <div>
          <input
            className="checkbox"
            type="checkbox"
            name="tickets_made"
            value={2}
          />
          <label htmlFor="ticket_availability.has_available_tickets">
            Needs Tickets
          </label>
        </div>
        <div>
          <input
            className="checkbox"
            type="checkbox"
            name="ticket_availability.has_available_tickets"
            value={3}
          />
          <label htmlFor="ticket_availability.has_available_tickets">
            Edit Tickets
          </label>
        </div>
        <div>
          <input
            className="checkbox"
            type="checkbox"
            name="ticket_availability.is_sold_out"
            value={4}
          />
          <label htmlFor="sold_out">Sold Out</label>
        </div>
        <div>
          <input
            className="checkbox"
            type="checkbox"
            name="published"
            value={5}
          />
          <label htmlFor="published">Published</label>
        </div>
        <button onClick={() => handleFilter()}>Apply Filter</button>
      </div>
    </div>
  );
};

export default AdminSidebar;
