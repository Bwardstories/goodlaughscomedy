import React, { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import AdminRoute from "./protectedRoutes/AdminRoute";
import Home from "./views/home/Home";
import AboutUs from "./views/aboutUs/AboutUs";
import Locations from "./views/locations/Locations";
import Admin from "./views/admin/Admin";
import EventPage from "./views/eventPage/EventPage";
import Header from "./components/header/Header";
import LoginModal from "./components/loginModal/LoginModal";
import EventCalendar from "./components/eventCalendar/EventCalendar";
import { getActiveEvents } from "./apiRequests/eventBriteApi";
import { bindActionCreators } from "redux";
import { actions } from "./store/index.";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [loginVisible, setLoginVisible] = useState(false);
  const [eventCalendarVisible, setEventCalendarVisible] = useState(false);
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { loadLiveEvents } = bindActionCreators(actions, dispatch);
  useEffect(() => {
    async function fetchEvents() {
      let res = await getActiveEvents();
      console.log(res);
      let liveEvents = await res.data.events
        .filter(event => {
          return event.status === "live";
        })
        .reverse();
      loadLiveEvents(liveEvents);
      // loadLiveEvents(liveEventArray);
    }
    fetchEvents();
  }, []);

  return (
    <div className="app">
      <ToastContainer />
      <Header
        loginVisible={loginVisible}
        setLoginVisible={setLoginVisible}
        eventCalendarVisible={eventCalendarVisible}
        setEventCalendarVisible={setEventCalendarVisible}
      />
      {loginVisible && (
        <LoginModal
          loginVisible={loginVisible}
          setLoginVisible={setLoginVisible}
        />
      )}
      {eventCalendarVisible && (
        <EventCalendar
          eventCalendarVisible={eventCalendarVisible}
          setEventCalendarVisible={setEventCalendarVisible}
        />
      )}

      <Switch>
        <Route exact path="/" component={Home} />
        <AdminRoute
          exact
          path="/admin"
          component={Admin}
          isAdmin={state.users.isAdmin}
        />
        <Route path="/events" component={EventPage} />
        <Route path="/locations" component={Locations} />
        <Route path="/aboutUs" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
