import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import "../../../assets/css/admin.css";
import NavbarDashboard from "../NavbarDashboard";
import IndexDashboard from "../IndexDashboard";

class DashboardUser extends Component {
  render() {
    return (
      <Fragment>
        <div className="fixed-nav sticky-footer" id="page-top">
          <NavbarDashboard />
          <Route
            exact
            path={`${this.props.match.path}/`}
            component={IndexDashboard}
          />
          <Route
            path={`${this.props.match.path}/hello`}
            render={() => <h1>Hello</h1>}
          />
        </div>
      </Fragment>
    );
  }
}

export default DashboardUser;
