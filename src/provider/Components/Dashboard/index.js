import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import NavbarDashboard from "../NavbarDashboard";
import IndexDashboard from "../IndexDashboard";
import IndexRequest from "../IndexRequest";
<<<<<<< HEAD
// import IndexAddListing from "../IndexAddListing";
import { signIn } from "../../../store/actions/auth";
=======
>>>>>>> 3aaf8ad44f18660ba4b1e8fa8b9c45c2eac703cc

class DashboardProvider extends Component {
  render() {
    const { idUserLogin } = this.props;
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
<<<<<<< HEAD
            path={`${this.props.match.path}/request/:loginid`}
=======
            path={`${this.props.match.path}/request`}
>>>>>>> 3aaf8ad44f18660ba4b1e8fa8b9c45c2eac703cc
            component={IndexRequest}
          />
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = store => ({
  idUserLogin: store.auth.idUserLogin
});
export default connect(
  mapStateToProps,
  {
    signIn
  }
)(DashboardProvider);
