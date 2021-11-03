export const eventFormInitialState = {
  name: "",
  summary: "",
  description: "",
  start: "",
  start_time: "",
  end: "",
  end_time: "",
  hide_start_date: false,
  hide_end_date: false,
  currency: "USD",
  online_event: false,
  organizer_id: "36670316863",
  logo_id: "",
  venue_id: "",
  format_id: "",
  category_id: "105",
  subcategory_id: "",
  listed: false,
  shareable: false,
  invite_only: false,
  show_remaining: false,
  password: "",
  capacity: 0,
  is_reserved_seating: false,
  is_series: false,
  show_pick_a_seat: false,
  show_seatmap_thumbnail: false,
  source: "",
  locale: "en_US",
};

export const createTicketFormInitialState = {
  "ticket_class": {
    "name": "",
    "quantity_total": 0,
    "cost": "",
  },
};
