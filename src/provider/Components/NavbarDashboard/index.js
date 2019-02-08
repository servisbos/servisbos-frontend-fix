import React, { Component } from "react";
import "../../../assets/css/admin.css";
import "../../../assets/vendor/font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../../store/actions/auth";

class NavbarDashboard extends Component {
  render() {
    const { idUserLogin } = this.props;

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-default fixed-top"
        id="mainNav"
      >
        <Link className="navbar-brand" to="/">
          <img src="/" alt="test" data-retina="true" width={163} height={36} />
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Dashboard"
            >
              <Link className="nav-link" to="/provider/dashboard">
                <i className="fa fa-fw fa-dashboard" />
                <span className="nav-link-text">Dashboard</span>
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Request"
            >
              <Link
                className="nav-link"
                to={`/provider/dashboard/request/${idUserLogin}`}
              >
                <i className="fa fa-fw fa-briefcase" />
                <span className="nav-link-text">Request</span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav sidenav-toggler">
            <li className="nav-item">
              <a className="nav-link text-center" id="sidenavToggler">
                <i className="fa fa-fw fa-angle-left" />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/signout">
                <i className="fa fa-fw fa-sign-out" />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
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
)(NavbarDashboard);
