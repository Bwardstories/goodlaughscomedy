import React from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const state = useSelector(state => state);
  console.log(state);
  return <div>hello world</div>;
};

export default Admin;
