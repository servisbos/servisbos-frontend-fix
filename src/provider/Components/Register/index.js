import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../../store/actions/auth";
import ReactFilestack from "filestack-react";

class SignupProvider extends Component {
  state = {
    image: "",
    username: "",
    first_name: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    address: "",
    city: "",
    province: "",
    postal_code: "",
    success: false,
    user_type: 2
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();

    this.props.signUp(this.state);
  };

  handleSuccess = result => {
    const imageUrl = result.filesUploaded[0].url;
    console.log(imageUrl);

    this.setState({ image: imageUrl });
  };

  render() {
    const {
      image,
      first_name,
      lastname,
      username,
      email,
      password,
      confirm_password,
      address,
      city,
      province,
      phone_number,
      postal_code,
      user_type
    } = this.state;
    const { isAuthenticated, isSignUpSuccess } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/provider/dashboard" />;
    }

    if (isSignUpSuccess) {
      return <Redirect to="/provider/signin" />;
    }

    return (
      <Fragment>
        <div className="bg_color_2">
          <div className="container margin_60_35">
            <div id="register">
              <h3>Please register to Servisbos!</h3>
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <form onSubmit={this.handleSubmit}>
                    <div className="box_form">
                      <div className="form-group">
                        <label>Your Photo Profile</label>
                        <input
                          type="hidden"
                          name="user_type"
                          value={user_type}
                        />{" "}
                        <br />
                        <ReactFilestack
                          apikey={process.env.REACT_APP_FILESTACK_API_KEY}
                          buttonText="Pick Image"
                          buttonClass="upload-image-btn"
                          options={{
                            accept: "image/*",
                            storeTo: {
                              location: "s3"
                            }
                          }}
                          onSuccess={this.handleSuccess}
                        />
                      </div>
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="hidden"
                          name="user_type"
                          value={user_type}
                        />
                        <input
                          type="text"
                          name="first_name"
                          className="form-control"
                          placeholder="Your first name"
                          value={first_name}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="lastname"
                          className="form-control"
                          placeholder="Your last name"
                          value={lastname}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Username</label>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          placeholder="Your username"
                          value={username}
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Email</label>
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Your email address"
                          onChange={this.handleChange}
                          value={email}
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          id="password1"
                          placeholder="Your password"
                          onChange={this.handleChange}
                          value={password}
                        />
                      </div>
                      <div className="form-group">
                        <label>Confirm password</label>
                        <input
                          name="confirm_password"
                          type="password"
                          className="form-control"
                          id="password2"
                          placeholder="Confirm password"
                          onChange={this.handleChange}
                          value={confirm_password}
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          name="phone_number"
                          className="form-control"
                          placeholder="Phone number"
                          onChange={this.handleChange}
                          value={phone_number}
                        />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <textarea
                          className="form-control"
                          placeholder="Your address"
                          name="address"
                          onChange={this.handleChange}
                          value={address}
                        />
                      </div>
                      <div className="form-group">
                        <label>City</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                          placeholder="Your city"
                          onChange={this.handleChange}
                          value={city}
                        />
                      </div>
                      <div className="form-group">
                        <label>Province</label>
                        <input
                          type="text"
                          name="province"
                          className="form-control"
                          placeholder="Your province"
                          onChange={this.handleChange}
                          value={province}
                        />
                      </div>
                      <div className="form-group">
                        <label>Postal Code</label>
                        <input
                          type="number"
                          name="postal_code"
                          className="form-control"
                          placeholder="Your postal code"
                          onChange={this.handleChange}
                          value={postal_code}
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = store => ({
  isAuthenticated: store.auth.isAuthenticated,
  isSignUpSuccess: store.auth.isSignUpSuccess
});

export default connect(
  mapStateToProps,
  { signUp }
)(SignupProvider);
