import { Route } from "react-router-dom";
import React from "react";
function AllRoutes() {
  return (
    <div>
      <Route exact path="/">
        <div>Home Page</div>
      </Route>
      <Route exact path="/contact">
        <div>Contact Page </div>
      </Route>
      <Route exact path="/about-us">
        <div>About Page </div>
      </Route>
      <Route exact path="/services">
        <div>Services Page </div>
      </Route>
      <Route exact path="/login">
        <div>Login Page </div>
      </Route>
    </div>
  );
}
export default AllRoutes;
