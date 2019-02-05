import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header";
import ContentHomepage from "../ContentHomepage";
import Footer from "../Footer";
import { Redirect } from "react-router-dom";
import { signIn } from "../../../store/actions/auth";

class Homepage extends Component {
  componentDidMount() {
    if (this.props.signIn(true)) {
      this.props.isAuthenticated(true);
    }
  }
  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/user/dashboard" />;
    }
    return (
      <div className="App">
        <div className="layer" />

        <Header />
        <ContentHomepage />
        <Footer />
        <div id="toTop" />
      </div>
    );
  }
}
const mapStateToProps = store => ({
  isAuthenticated: store.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { signIn }
)(Homepage);
