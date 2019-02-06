import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Homepage from "./users/Components/Homepage";
import Login from "./users/Components/Login";
import Signup from "./users/Components/Signup";
import DashboardUser from "./users/Components/DashboardUser";
import SignInProvider from "./provider/Components/Login";
import SignUpProvider from "./provider/Components/Register";
import DashboardProvider from "./provider/Components/Dashboard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" exact component={Homepage} />
        <Route path="/user/signin" component={Login} />
        <Route path="/user/signup" component={Signup} />
        <Route path="/user/dashboard" component={DashboardUser} />
        <Route path="/provider/signin" component={SignInProvider} />
        <Route path="/provider/signup" component={SignUpProvider} />
        <Route path="/provider/dashboard" component={DashboardProvider} />
      </Fragment>
    );
  }
}

export default App;
