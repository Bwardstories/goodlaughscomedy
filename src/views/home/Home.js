import React from "react";
import homeLogo from "../../assets/images/homeLogo.png";
import "./home.css";

const Home = () => {
  return (
    <div className="homeWrapper">
      <img src={homeLogo} alt="" className="homeLogo" />
    </div>
  );
};

export default Home;
