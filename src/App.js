import "./App.css";
import Home from "./views/home/Home";
import Admin from "./views/admin/Admin";
import Header from "./components/header/Header";
import LoginModal from "./components/loginModal/LoginModal";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const REDIRECT_URI = "http://localhost:3000/";

let user_id = "653286012593";
let organization_id = "653290675003";
let MYTOKEN = process.env.REACT_APP_MY_TOKEN;

const body = {
  "event": {
    "name": {
      "html": "<p>First Test Event</p>",
    },
    "description": {
      "html": "<p>First Test Event</p>",
    },
    "start": {
      "timezone": "UTC",
      "utc": "2021-10-25T02:00:00Z",
    },
    "end": {
      "timezone": "UTC",
      "utc": "2021-10-25T04:00:00Z",
    },
    "currency": "USD",
    "online_event": false,
    "organizer_id": "",
    "listed": false,
    "shareable": false,
    "invite_only": false,
    "show_remaining": true,
    "password": "12345",
    "capacity": 100,
    "is_reserved_seating": true,
    "is_series": false,
    "show_pick_a_seat": true,
    "show_seatmap_thumbnail": true,
    "show_colors_in_seatmap_thumbnail": true,
    "locale": "de_AT",
  },
};

function App() {
  const createEvent = async () => {
    let res = await axios.post(
      `https://www.eventbriteapi.com/v3/organizations/${organization_id}/events/`,
      body,
      {
        headers: {
          "Authorization": `Bearer ${MYTOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
  };

  const userData = async () => {
    let res = await axios.get(
      "https://www.eventbriteapi.com/v3/users/me/?token=MYTOKEN",
      {
        headers: {
          "Authorization": `Bearer ${MYTOKEN}`,
        },
      }
    );
    console.log(res);
  };

  const getOrganizationData = async () => {
    let res = await axios.get(
      "https://www.eventbriteapi.com/v3/users/me/organizations/",
      {
        headers: {
          "Authorization": `Bearer ${MYTOKEN}`,
        },
      }
    );
    console.log(res, "organization");
  };

  return (
    <div className="app">
      <ToastContainer />
      <Header />
      <LoginModal />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
