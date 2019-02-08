import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../../../store/actions/auth";

class HeaderDashboard extends Component {
  render() {
    const { dataUserLogin, idUserLogin } = this.props;
    {
      dataUserLogin && console.log(dataUserLogin);
    }
    return (
      <Fragment>
        <header className="header_sticky">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div id="">
                  <h1>
                    <Link to="/user/dashboard" title="servisbos">
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
                          src={dataUserLogin && dataUserLogin.image}
                          alt="avatar"
                        />
                      </figure>
                      {dataUserLogin &&
                        dataUserLogin.first_name + " " + dataUserLogin.lastname}
                    </Link>
                  </li>
                </ul>
                <div className="main-menu">
                  <ul>
                    <li className="submenu">
                      <Link to="/user/dashboard/" className="show-submenu">
                        Home
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link
                        to="/user/dashboard/list_provider/0"
                        className="show-submenu"
                      >
                        Services
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link
                        to="/user/dashboard/user_request"
                        className="show-submenu"
                      >
                        Request
                      </Link>
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
const mapStateToProps = store => ({
  idUserLogin: store.auth.idUserLogin,
  dataUserLogin: store.auth.dataUserLogin
});
export default connect(
  mapStateToProps,
  {
    signIn
  }
)(HeaderDashboard);
