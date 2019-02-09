import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signIn, signOut } from "../../../store/actions/auth";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/logo.png";
class HeaderDashboard extends Component {
  handleSignOut = () => {
    this.props.signOut();
  };
  render() {
    const { dataUserLogin, isAuthenticated } = this.props;
    console.log(isAuthenticated);
    {
      dataUserLogin && console.log(dataUserLogin);
    }

    if (!isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <Fragment>
        <header className="header_sticky">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div id="logo">
                  <h1>
                    <Link to="/user/dashboard" title="servisbos">
                      <img src={Logo} width={57} height={57} />
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
                    {/* <li className="submenu">
                      <Link
                        to="/user/dashboard/user_request"
                        className="show-submenu"
                      >
                        Request
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="#"
                        onClick={e => {
                          e.preventDefault();
                          this.handleSignOut();
                        }}
                      >
                        <i className="fa fa-fw fa-sign-out" />
                        Logout
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
  dataUserLogin: store.auth.dataUserLogin,
  isAuthenticated: store.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  {
    signIn,
    signOut
  }
)(HeaderDashboard);
