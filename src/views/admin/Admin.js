import React from "react";
import { useSelector } from "react-redux";
import Carousel from "../../components/carousel/Carousel";

const Admin = () => {
  const state = useSelector(state => state);
  console.log(state);
  return (
    <div>
      <Carousel />
      <Carousel />
    </div>
  );
};

export default Admin;
