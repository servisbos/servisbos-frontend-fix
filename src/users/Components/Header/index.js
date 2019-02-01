import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <header className="header_sticky">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div id="">
                  <h1>
                    <a href="index.html" title="servisbos">
                      Servisbos
                    </a>
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
                  <li>
                    <Link to="/signin">
                      <i className="pe-7s-user" />
                    </Link>
                  </li>
                  <li>
                    <a href="register-doctor.html">
                      <i className="pe-7s-add-user" />
                    </a>
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
                          <a href="index.html">Home Default</a>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <a href="#0" className="show-submenu">
                        Pages
                        <i className="icon-down-open-mini" />
                      </a>
                      <ul>
                        <li>
                          <a href="list.html">List page</a>
                        </li>
                      </ul>
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

export default Header;
