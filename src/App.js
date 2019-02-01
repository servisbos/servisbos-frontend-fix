import React, { Component, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Homepage from "./users/Components/Homepage";
import Login from "./users/Components/Login";
import Signup from "./users/Components/Signup";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" exact component={Homepage} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Signup} />
      </Fragment>
    );
  }
}

export default App;
