import React, { Component, Fragment } from "react";

import { Redirect } from "react-router-dom";
import Axios from "axios";

class Signup extends Component {
  state = {
    username: "",
    first_name: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    city: "",
    province: "",
    postal_code: "",
    success: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();

    const { success, ...rest } = this.state;

    const response = await Axios.post("http://localhost:8000/api/auth/signup", {
      ...rest
    });
    if (response.status === 200) {
      this.setState({ success: true });
    } else console.log("Gagal Bro");
  };
  render() {
    return (
      <Fragment>
        <div className="bg_color_2">
          <div className="container margin_60_35">
            <div id="register">
              <h1>Please register to Servisbos!</h1>
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <form>
                    <div className="box_form">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Last name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your last name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your email address"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password1"
                          placeholder="Your password"
                        />
                      </div>
                      <div className="form-group">
                        <label>Confirm password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password2"
                          placeholder="Confirm password"
                        />
                      </div>
                      <div id="pass-info" className="clearfix" />
                      <div className="checkbox-holder text-left">
                        <div className="checkbox_2">
                          <input
                            type="checkbox"
                            defaultValue="accept_2"
                            id="check_2"
                            name="check_2"
                            defaultChecked
                          />
                          <label htmlFor="check_2">
                            <span>
                              I Agree to the{" "}
                              <strong>Terms &amp; Conditions</strong>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="form-group text-center add_top_30">
                        <input
                          className="btn_1"
                          type="submit"
                          defaultValue="Submit"
                        />
                      </div>
                    </div>
                    <p className="text-center">
                      <small>
                        Has voluptua vivendum accusamus cu. Ut per assueverit
                        temporibus dissentiet. Eum no atqui putant democritum,
                        velit nusquam sententiae vis no.
                      </small>
                    </p>
                  </form>
                </div>
              </div>
              {/* /row */}
            </div>
            {/* /register */}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Signup;
