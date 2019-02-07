import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import NavbarDashboard from "../NavbarDashboard";
import IndexDashboard from "../IndexDashboard";
import IndexRequest from "../IndexRequest";
// import IndexAddListing from "../IndexAddListing";

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
            exact
            path={`${this.props.match.path}/request`}
            component={IndexRequest}
          />
          <Route
            exact
            path={`${this.props.match.path}/addlisting`}
            component={IndexDashboard}
          />
        </div>
      </Fragment>
    );
  }
}

export default DashboardUser;
