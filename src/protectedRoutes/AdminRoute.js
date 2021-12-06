import React from "react";
import { Redirect, Route } from "react-router-dom";

const AdminRoute = ({ isAdmin, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAdmin ? <Component {...props} /> : <Redirect to={{ path: "/" }} />
      }
    />
  );
};

export default AdminRoute;
