import { Navbar, Nav, NavItem, Button, Glyphicon } from "react-bootstrap";
import React, { Component, Fragment } from "react";
import "../../../assets/css/admin.css";
import "../../../assets/vendor/font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

class NavbarDashboard extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-default fixed-top"
        id="mainNav"
      >
        <a className="navbar-brand" href="index.html">
          <img src="/" data-retina="true" width={163} height={36} />
        </a>
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
              <Link className="nav-link" to="/dashboard_user">
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
              <Link className="nav-link" to="/request">
                <i className="fa fa-fw fa-briefcase" />
                <span className="nav-link-text">Request</span>
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Bookings"
            >
              <a className="nav-link" href="bookings.html">
                <i className="fa fa-fw fa-calendar-check-o" />
                <span className="nav-link-text">
                  Bookings{" "}
                  <span className="badge badge-pill badge-primary">6 New</span>
                </span>
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Reviews"
            >
              <a className="nav-link" href="reviews.html">
                <i className="fa fa-fw fa-star" />
                <span className="nav-link-text">Reviews</span>
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Bookmarks"
            >
              <a className="nav-link" href="bookmarks.html">
                <i className="fa fa-fw fa-heart" />
                <span className="nav-link-text">Bookmarks</span>
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Add listing"
            >
              <a className="nav-link" href="add-listing.html">
                <i className="fa fa-fw fa-plus-circle" />
                <span className="nav-link-text">Add listing</span>
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="My profile"
            >
              <a
                className="nav-link nav-link-collapse collapsed"
                data-toggle="collapse"
                href="#collapseProfile"
                data-parent="#exampleAccordion"
              >
                <i className="fa fa-fw fa-wrench" />
                <span className="nav-link-text">My profile</span>
              </a>
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

export default NavbarDashboard;
