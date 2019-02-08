import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import NavbarDashboard from "../NavbarDashboard";
import IndexDashboard from "../IndexDashboard";
import IndexRequest from "../IndexRequest";

class DashboardProvider extends Component {
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
            exact
            path={`${this.props.match.path}/request`}
            component={IndexRequest}
          />
        </div>
      </Fragment>
    );
  }
}

export default DashboardProvider;
