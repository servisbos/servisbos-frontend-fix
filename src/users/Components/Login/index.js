import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <Fragment>
        <div className="bg_color_2">
          <div className="container margin_60_35">
            <div id="login">
              <h1>Please login to Servisbos</h1>
              <div className="box_form">
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Your password"
                    />
                  </div>
                  <a href="#0">
                    <small>Forgot password?</small>
                  </a>
                  <div className="form-group text-center add_top_20">
                    <input
                      className="btn_1 medium"
                      type="submit"
                      defaultValue="Login"
                    />
                  </div>
                </form>
              </div>
              <p className="text-center link_bright">
                Do not have an account yet?{" "}
                <Link to="/signup">
                  <strong>Register now!</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
