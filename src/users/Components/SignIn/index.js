import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signIn } from "../../../store/actions/auth";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    if (this.props.isSignUpSuccess) {
      this.props.setSignUpStatus(false);
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.props.signIn(this.state);
  };
  render() {
    const { password, username } = this.state;
    const { isAuthenticated } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/user/dashboard" />;
    }
    return (
      <Fragment>
        <div className="bg_color_2">
          <div className="container margin_60_35">
            <div id="login">
              <h1>Please login to Servisbos</h1>
              <div className="box_form">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      name="username"
                      type="username"
                      className="form-control"
                      placeholder="Your username"
                      value={username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Your password"
                      value={password}
                      onChange={this.handleChange}
                    />
                  </div>
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
const mapStateToProps = store => ({
  isAuthenticated: store.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { signIn }
)(Login);
