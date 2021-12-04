import React, { useState } from "react";
import "./App.css";
import Home from "./views/home/Home";
import Admin from "./views/admin/Admin";
import EventPage from "./views/eventPage/EventPage";
import Header from "./components/header/Header";
import LoginModal from "./components/loginModal/LoginModal";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [loginVisible, setLoginVisible] = useState(false);

  return (
    <div className="app">
      <ToastContainer />
      <Header loginVisible={loginVisible} setLoginVisible={setLoginVisible} />
      {loginVisible && (
        <LoginModal
          oginVisible={loginVisible}
          setLoginVisible={setLoginVisible}
        />
      )}

      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/admin" component={Admin} /> */}
        <Route path="/events" component={EventPage} />
      </Switch>
    </div>
  );
}

export default App;
