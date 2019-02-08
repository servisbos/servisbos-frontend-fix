import React, { Component, Fragment } from "react";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <p>
                <a href="index.html" title="Servisbos">
                  <img
                    src=""
                    alt=""
                    width="163"
                    height="36"
                    className="img-fluid"
                  />
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5>About</h5>
              <ul className="links">
                <li>
                  <a href="#0">Login</a>
                </li>
                <li>
                  <a href="#0">Register</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5>Contact with Us</h5>
              <ul className="contacts">
                <li>
                  <a href="tel://61280932400">
                    <i className="icon_mobile" /> + 62 878 7477 9277
                  </a>
                </li>
                <li>
                  <a href="mailto:info@servisbos.com">
                    <i className="icon_mail_alt" /> servisbosdotcom@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <ul id="additional_links">
                <li>
                  <a href="https://www.linkedin.com/in/yusuf-h-a924b2117">
                    Yusuf Habibi
                  </a>
                </li>
                <li>
                  <a href="#">Ipul Saepulloh</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/iwinrahardjo">
                    Iwin Rahardjo
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div id="copy">© 2019 servisbos.com</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Footer;
