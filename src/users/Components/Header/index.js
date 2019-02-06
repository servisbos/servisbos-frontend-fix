import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.png";
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
                    <Link to="/" title="servisbos">
                      Servisbos
                    </Link>
                  </h1>
                </div>
              </div>
              <nav className="col-lg-9 col-6">
                <Link
                  className="cmn-toggle-switch cmn-toggle-switch__htx open_close"
                  to="#0"
                >
                  <span>Menu mobile</span>
                </Link>
                <ul id="top_access">
                  <li>
                    <Link to="/user/signin">
                      <i className="pe-7s-user" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/provider/signin">
                      <i className="pe-7s-add-user" />
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
                          <Link to="/">Home </Link>
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
