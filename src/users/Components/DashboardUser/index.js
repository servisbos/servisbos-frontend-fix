import React, { Component, Fragment } from "react";
import HeaderDashboard from "../HeaderDashboard";
import ContentHomepage from "../ContentHomepage";
import ListProvider from "../ListProvider";
import DetailPage from "../DetailPage";
import BookingPage from "../BookingPage";

import Footer from "../Footer";
import { Route } from "react-router-dom";

class DashboardUser extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          {/* <div className="layer" /> */}
          <HeaderDashboard />
          <Route
            exact
            path={`${this.props.match.path}/`}
            component={ContentHomepage}
          />
          <Route
            path={`${this.props.match.path}/list_provider`}
            component={ListProvider}
          />
          <Route
            path={`${this.props.match.path}/detail/:userid/:jobid`}
            component={DetailPage}
          />
          <Route
            path={`${this.props.match.path}/booking/:loginid/:provid/:jobid`}
            component={BookingPage}
          />
          <Footer />
          <div id="toTop" />
        </div>
      </Fragment>
    );
  }
}

export default DashboardUser;
