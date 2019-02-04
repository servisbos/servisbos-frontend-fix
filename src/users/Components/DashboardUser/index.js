import React, { Component, Fragment } from "react";
import "../../../assets/css/admin.css";
import NavbarDashboard from "../NavbarDashboard";
import IndexDashboard from "../IndexDashboard";

class DashboardUser extends Component {
  render() {
    return (
      <Fragment>
        <body className="fixed-nav sticky-footer" id="page-top">
          <NavbarDashboard />
          <IndexDashboard />
        </body>
      </Fragment>
    );
  }
}

export default DashboardUser;
