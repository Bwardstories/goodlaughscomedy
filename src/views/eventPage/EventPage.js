import React, { useEffect, useState } from "react";
import LiveEventCard from "../../components/liveEventCard/LiveEventCard";
import { getActiveEvents } from "../../apiRequests/eventBriteApi";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../store/index.";
import "./eventPage.css";

const EventPage = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { loadLiveEvents } = bindActionCreators(actions, dispatch);

  const [liveEventArray, setLiveEventArray] = useState([]);
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
      console.log(liveEventArray);
    }
    fetchEvents();
  }, []);

  console.log(liveEventArray);
  console.log(state);

  return (
    <div className="liveEventCardWrapper">
      {state.liveEvents.allLiveEvents.map(event => (
        <LiveEventCard event={event} />
      ))}
    </div>
  );
};

export default EventPage;
