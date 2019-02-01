import React, { Component, Fragment } from "react";

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
                    <a href="login.html">
                      <i className="pe-7s-user" />
                    </a>
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
                        Extra Elements
                        <i className="icon-down-open-mini" />
                      </a>
                      <ul>
                        <li>
                          <a href="detail-page-working-booking.html">
                            Detail working booking
                          </a>
                        </li>
                        <li>
                          <a href="booking-page.html">Booking page</a>
                        </li>
                        <li>
                          <a href="confirm.html">Confirm page</a>
                        </li>
                        <li>
                          <a href="faq.html">Faq page</a>
                        </li>
                        <li>
                          <a href="coming_soon/index.html">Coming soon</a>
                        </li>
                        <li>
                          <a href="pricing-tables.html">
                            Responsive pricing tables
                          </a>
                        </li>
                        <li>
                          <a href="pricing-tables-2.html">
                            Responsive pricing tables 2
                          </a>
                        </li>
                        <li>
                          <a href="register-mechanic-working.html">
                            Working mechanic register
                          </a>
                        </li>
                        <li>
                          <a href="icon-pack-1.html">Icon pack 1</a>
                        </li>
                        <li>
                          <a href="icon-pack-2.html">Icon pack 2</a>
                        </li>
                        <li>
                          <a href="icon-pack-3.html">Icon pack 3</a>
                        </li>
                        <li>
                          <a href="404.html">404 page</a>
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
