import React, { Component, Fragment } from "react";
// import "../../../assets/css/admin.css";
import { Route } from "react-router-dom";
import NavbarDashboard from "../NavbarDashboard";
import IndexDashboard from "../IndexDashboard";

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
          /> */}
          {/* <Route
            path={`${this.props.match.path}/request`}
            component={ListProvider}
          /> */}
        </div>
      </Fragment>
    );
  }
}

export default DashboardProvider;
