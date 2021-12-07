import axios from "axios";
import { saveEventToDB } from "./databaseAPI";
import { success, failure } from "../errorHandling/toastMessages";

// const ORG_ID = process.env.REACT_APP_ORG_ID;
// const TOKEN = process.env.REACT_APP_MY_TOKEN;

const ORG_ID = process.env.REACT_APP_KEITH_ORG_ID;
const TOKEN = process.env.REACT_APP_KEITH_TOKEN;

export const createEventAPI = async eventFormData => {
  const {
    name,
    summary,
    start,
    start_time,
    end,
    end_time,
    hide_start_date,
    hide_end_date,
    venue_id,
  } = eventFormData;

  // this takes the dates entered on the form and changes them from local time to utc time because that is what is required with the api
  let startDate = new Date(`${start}T${start_time}`).toISOString().slice(0, -5);
  let endDate = new Date(`${end}T${end_time}`).toISOString().slice(0, -5);
  console.log(startDate, endDate);
  try {
    let res = await axios.post(
      `https://www.eventbriteapi.com/v3/organizations/${ORG_ID}/events/`,
      {
        "event": {
          "name": {
            "html": `<p>${name}</p>`,
          },
          "description": {
            "html": `<b>${summary}</b>`,
          },
          "start": {
            "timezone": "America/New_York",
            "utc": `${startDate}Z`,
          },
          "end": {
            "timezone": "America/New_York",
            "utc": `${endDate}Z`,
          },
          "venue_id": venue_id,
          "hide_start_date": hide_start_date,
          "hide_end_date": hide_end_date,
          "currency": "USD",
          "category_id": "105",
          "online_event": false,
          "organizer_id": "",
          "listed": false,
          "shareable": false,
          "invite_only": false,
          "show_remaining": false,
          "capacity": 100,
          "is_reserved_seating": false,
          "is_series": false,
          "show_pick_a_seat": false,
          "show_seatmap_thumbnail": false,
          "show_colors_in_seatmap_thumbnail": false,
          "locale": "en_US",
        },
      },
      {
        headers: {
          "Authorization": `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    success("Event Created Successfully");
    return res;
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response);
      failure(error.response.data.error_description);
    } else {
      throw error;
    }
  }
};

export const retrieveAdminEvents = () => {
  return axios
    .get(
      `https://www.eventbriteapi.com/v3/organizations/${ORG_ID}/events/?expand=ticket_availability&page_size=1000`,
      {
        headers: {
          "Authorization": `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    )
    .catch(function (error) {
      if (error.response) {
        failure(error.response.data.error_description);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

export const createTickets = async ticketData => {
  const { cost, name, quantity_total, event_id } = ticketData;

  let wholeCost = Math.trunc(cost);

  try {
    let res = await axios.post(
      `https://www.eventbriteapi.com/v3/events/${event_id}/ticket_classes/`,
      {
        "ticket_class": {
          "name": name,
          "quantity_total": quantity_total,
          "cost": `USD,${wholeCost}00`,
        },
      },
      {
        headers: {
          "Authorization": `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    success("Tickets for this event have been made successfully");
    return res;
  } catch (error) {
    if (error.response) {
      failure(error.response.data.error_description);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
};

export const publishEvent = publishFormData => {
  const { description, event_id } = publishFormData;
  console.log(description);
  let modules = [];
  let textArray = description.split("\n\n");

  textArray.map(text => {
    modules.push({
      "data": {
        "body": {
          "alignment": "left",
          "text": text,
        },
      },
      "type": "text",
    });
    return modules;
  });
  console.log(modules);

  try {
    axios
      .all([
        axios.post(
          `https://www.eventbriteapi.com/v3/events/${event_id}/structured_content/1/`,
          {
            "access_type": "private",
            modules,
            "publish": true,
          },
          {
            headers: {
              "Authorization": `Bearer ${TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        ),
        axios.post(
          `https://www.eventbriteapi.com/v3/events/${event_id}/publish/`,
          {},
          {
            headers: {
              "Authorization": `Bearer ${TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        ),
        axios.post(
          `https://www.eventbriteapi.com/v3/events/${event_id}/`,
          {
            event: {
              "shareable": true,
              "listed": true,
            },
          },
          {
            headers: {
              "Authorization": `Bearer ${TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        ),
      ])
      .then(
        axios.spread((firstResponse, secondResponse) => {
          console.log(firstResponse.data, secondResponse.data);
          success("you have published your event successfully");
        })
      );
  } catch (err) {
    failure(err.message);
  }
};

export const retrieveTicketListApi = async event_id => {
  try {
    let res = await axios.get(
      `https://www.eventbriteapi.com/v3/events/${event_id}/ticket_classes/`,
      {
        headers: {
          "Authorization": `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response);
      failure(error.response.data.error_description);
    } else {
      throw error;
    }
  }
};

export const getActiveEvents = () => {
  try {
    return axios.get(
      `https://www.eventbriteapi.com/v3/organizations/${ORG_ID}/events/?expand=ticket_availability&order_by=start_desc`,
      {
        headers: {
          "Authorization": `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};
