import axios from "axios";
import { saveEventToDB } from "./databaseAPI";
import { success, failure } from "../errorHandling/toastMessages";

export const createEventAPI = async eventFormData => {
  const {
    name,
    summary,
    description,
    start,
    start_time,
    end,
    end_time,
    hide_start_date,
    hide_end_date,
    logo_id,
    venue_id,
    format_id,
    subcategory_id,
    llisted,
    shareable,
    capacity,
    source,
  } = eventFormData;

  let res = await axios
    .post(
      `https://www.eventbriteapi.com/v3/organizations/${process.env.REACT_APP_ORG_ID}/events/`,
      {
        "event": {
          "name": {
            "html": `<p>${name}</p>`,
          },
          "description": {
            "html": `<p>${description}</p>`,
          },
          "start": {
            "timezone": "America/New_York",
            "utc": `${start}T${start_time}Z`,
          },
          "end": {
            "timezone": "America/New_York",
            "utc": `${end}T${end_time}Z`,
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
          "Authorization": `Bearer ${process.env.REACT_APP_MY_TOKEN}`,
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
  console.log(res);
  saveEventToDB(res);
};
