import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "../../../assets/css/admin.css";
import { connect } from "react-redux";
import {
  fetchUserServiceTypes,
  fetchUserServiceBySpecialization
} from "../../../store/actions/user_service_type";
import { fetchDataToBookingPage } from "../../../store/actions/orders";

class ListProvider extends Component {
  state = {
    keyword: ""
  };
  componentDidMount() {
    const { idServiceType } = this.props.match.params;
    console.log(idServiceType);
    if (idServiceType == 0) {
      this.props.fetchUserServiceTypes();
    } else {
      this.props.fetchUserServiceBySpecialization(idServiceType);
    }
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClickBooking = (id_provider, id_service_type) => {
    this.props.fetchDataToBookingPage(id_provider, id_service_type);
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.keyword == "") this.props.fetchUserServiceTypes();
    else this.props.fetchUserServiceBySpecialization(this.state);
  };
  render() {
    const { keyword } = this.state;
    const { user_service_types } = this.props;
    return (
      <main>
        <div id="results">
          <div className="container">
            <div className="row">
              <div className="col-md-6" />
              <div className="col-md-6">
                <div className="search_bar_list">
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      name="keyword"
                      className="form-control"
                      placeholder="Ex. Specialist"
                      value={keyword}
                      onChange={this.handleChange}
                    />
                    <input type="submit" defaultValue="Search" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-12">
              <div className="filters_listing">
                <div className="container">
                  <ul className="clearfix">
                    <li>
                      <h6>Type</h6>
                      <div className="switch-field">
                        <input
                          type="radio"
                          id="all"
                          name="type_patient"
                          defaultValue="all"
                          defaultChecked
                        />
                        <label htmlFor="all">All</label>
                        <input
                          type="radio"
                          id="doctors"
                          name="type_patient"
                          defaultValue="doctors"
                        />
                        <label htmlFor="doctors">Mechanic</label>
                      </div>
                    </li>
                    <li>
                      <h6>Layout</h6>
                      <div className="layout_view">
                        <a href="#0" className="active">
                          <i className="icon-th" />
                        </a>
                        <a href="list.html">
                          <i className="icon-th-list" />
                        </a>
                        <a href="list-map.html">
                          <i className="icon-map-1" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <h6>Sort by</h6>
                      <select name="orderby" className="selectbox">
                        <option value="Closest">Closest</option>
                        <option value="Best rated">Best rated</option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                      </select>
                    </li>
                  </ul>
                </div>
                {/* /container */}
              </div>
              <div className="row">
                {user_service_types &&
                  user_service_types.map(user_service_type => (
                    <div className="col-md-4">
                      <div className="box_list">
                        <a href="#0" className="wish_bt" />
                        <figure>
                          <img
                            object
                            src={user_service_type.user.image}
                            className="img-fluid"
                            alt="test"
                          />
                          <div className="preview">
                            <span>Read more</span>
                          </div>
                        </figure>
                        <div className="wrapper">
                          <small>
                            {user_service_type.services_type.service_type}
                          </small>
                          <h3>
                            {user_service_type.user.first_name +
                              " " +
                              user_service_type.user.lastname}
                          </h3>
                          <p>{user_service_type.user.city}</p>
                          <span className="rating">
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star" />
                            <i className="icon_star" /> <small>(145)</small>
                          </span>
                        </div>
                        <ul>
                          <li />
                          <li />
                          <li>
                            <Link
                              to={`/user/dashboard/detail/${
                                user_service_type.id_users
                              }/${user_service_type.id_services_type}`}
                            >
                              Book now
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
              <nav>
                <ul className="pagination pagination-sm">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1}>
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
const mapStateToProps = store => ({
  user_service_types: store.user_service_type
});
export default connect(
  mapStateToProps,
  {
    fetchUserServiceTypes,
    fetchUserServiceBySpecialization,
    fetchDataToBookingPage
  }
)(ListProvider);
