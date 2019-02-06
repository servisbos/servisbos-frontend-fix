import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class HeaderDashboard extends Component {
  render() {
    return (
      <Fragment>
        <header className="header_sticky">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div id="">
                  <h1>
                    <Link to="/dashboard/user" title="servisbos">
                      Servisbos
                    </Link>
                  </h1>
                </div>
              </div>
              <nav className="col-lg-9 col-6">
                <a
                  className="cmn-toggle-switch cmn-toggle-switch__htx open_close"
                  href="#0"
                >
                  <span>Menu mobile</span>
                </a>
                <ul id="top_access">
                  <li id="user">
                    <Link to="/">
                      <figure>
                        <img
                          src="http://via.placeholder.com/150x150.jpg"
                          alt="avatar"
                        />
                      </figure>
                      Yusuf Habibi
                    </Link>
                  </li>
                </ul>
                <div className="main-menu">
                  <ul>
                    <li className="submenu">
                      <a href="#0" className="show-submenu">
                        Home
                        <i className="icon-down-open-mini" />
                      </a>
                      <ul>
                        <li>
                          <Link to="/user/dashboard">Home </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <Link
                        to="/user/dashboard/list_provider"
                        className="show-submenu"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="submenu">
                      <a href="#0" className="show-submenu">
                        About
                        <i className="icon-down-open-mini" />
                      </a>
                      <ul>
                        <li>
                          <a href="#">How We Work</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}
export default HeaderDashboard;
