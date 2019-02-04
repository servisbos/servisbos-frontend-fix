import React, { Component, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Homepage from "./users/Components/Homepage";
import Login from "./users/Components/Login";
import Signup from "./users/Components/Signup";
import DashboardUser from "./users/Components/DashboardUser";
// import Header from "./provider/component/Header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" exact component={Homepage} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard_user" component={DashboardUser} />
      </Fragment>
    );
  }
}

export default App;
