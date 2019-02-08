import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import NavbarDashboard from "../NavbarDashboard";
import IndexDashboard from "../IndexDashboard";
import IndexRequest from "../IndexRequest";
import IndexAddListing from "../IndexAddListing";

class DashboardProvider extends Component {
  render() {
    return (
      <Fragment>
        <div className="fixed-nav sticky-footer" id="page-top">
          <NavbarDashboard />
          {/* <Route
            exact
            path={`${this.props.match.path}/`}
            component={IndexDashboard}
<<<<<<< HEAD
          />
          <Route
            exact
=======
          /> */}
          {/* <Route
>>>>>>> 5123999c65beb399c743d2f217d55b79af3912f6
            path={`${this.props.match.path}/request`}
            component={IndexRequest}
          />
        </div>
      </Fragment>
    );
  }
}

export default DashboardProvider;
