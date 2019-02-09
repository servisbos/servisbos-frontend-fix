import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { signIn } from "../../../store/actions/auth";
import { Link } from "react-router-dom";
import Icon1 from "../../../assets/img/cuci-mobil.svg";
import Icon2 from "../../../assets/img/nyuci-motor.svg";
import Icon3 from "../../../assets/img/ganti-oli.svg";
import Icon4 from "../../../assets/img/ganti-ban.svg";
import Icon5 from "../../../assets/img/tuneup-car.svg";

class Main extends Component {
  state = {
    keyword: ""
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
    return (
      <Fragment>
        <div className="hero_home version_2">
          <div className="content">
            <h3>Servis Bos</h3>
            <p>
              Gives you the convenience of finding a mechanic to repair your
              vehicle{" "}
            </p>
            <form onSubmit={this.handleSubmit}>
              <div id="custom-search-input">
                <div className="input-group">
                  <input
                    name="keyword"
                    type="text"
                    className=" search-query"
                    placeholder="Ex. Name, Specialization ...."
                    value={this.state.keywoard}
                    onChange={this.handleChange}
                  />
                  <input
                    type="submit"
                    className="btn_search"
                    defaultValue="Search"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="container margin_120_95">
          <div className="main_title">
            <h2>Discover the online appointment</h2>
            <p>Simple steps to fulfill your needs</p>
          </div>
          <div className="row add_bottom_30">
            <div className="col-lg-4">
              <div className="box_feat" id="icon_1">
                <span />
                <h3>stay at your place</h3>
                <p>
                  Save your time. <br /> No need to go to workshop
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_feat" id="icon_2">
                <span />
                <h3>choose service</h3>
                <p>
                  Select the best <br /> mechanic for your needs
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_feat" id="icon_3">
                <h3>Book a mechanic</h3>
                <p>
                  wait your mechanic to come <br /> and get your vehicle
                  repaired
                </p>
              </div>
            </div>
          </div>
          {/* End row */}
          <p className="text-center">
            <Link to="/user/dashboard/list_provider/0" className="btn_1 medium">
              Find Mechanic
            </Link>
          </p>
        </div>
        {/* End container */}

        <div className="container margin_120_45">
          <div className="main_title">
            <h2>Find by specialization</h2>
            <p>
              meet your needs by finding the best worker for you. making your
              search far easier by dividing existing workers according to their
              expertise
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <Link
                className="box_cat_home"
                to="/user/dashboard/list_provider/1"
              >
                <i className="icon-info-4" />
                <img src={Icon1} width={100} height={100} alt="" />
                <h4>Car Wash</h4>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link
                className="box_cat_home"
                to="/user/dashboard/list_provider/2"
              >
                <i className="icon-info-4" />
                <img src={Icon2} width={100} height={100} alt="" />
                <h4>Motorcycle Wash</h4>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link
                className="box_cat_home"
                to="/user/dashboard/list_provider/3"
              >
                <i className="icon-info-4" />
                <img src={Icon3} width={100} height={100} alt="" />
                <h4>Oil Change</h4>
              </Link>
            </div>
            <div className="col-lg-6 col-md-6">
              <Link
                className="box_cat_home"
                to="/user/dashboard/list_provider/4"
              >
                <i className="icon-info-4" />
                <img src={Icon4} width={120} height={120} alt="" />
                <h4>Tyres Change</h4>
              </Link>
            </div>
            <div className="col-lg-6 col-md-6">
              <Link
                className="box_cat_home"
                to="/user/dashboard/list_provider/5"
              >
                <i className="icon-info-4" />
                <img src={Icon5} width={120} height={120} alt="" />
                <h4>Machine Tuneup</h4>
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Main;
