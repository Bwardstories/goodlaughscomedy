import React, { useState, useEffect } from "react";
import Carousel from "../../components/carousel/Carousel";
import { useSelector, useDispatch } from "react-redux";
import { getActiveEvents } from "../../apiRequests/eventBriteApi";
import { bindActionCreators } from "redux";
import { actions } from "../../store/index.";
import "./home.css";

const Home = () => {
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
    }
    fetchEvents();
  }, []);
  console.log(state, "from home");
  return (
    <div className="homeWrapper">
      {state.liveEvents.allLiveEvents.length > 0 ? <Carousel /> : ""}
    </div>
  );
};

export default Home;
