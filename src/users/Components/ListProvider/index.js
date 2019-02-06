import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "../../../assets/css/admin.css";

import { connect } from "react-redux";
import { fetchUserServiceTypes } from "../../../store/actions/user_service_type";

class ListProvider extends Component {
  componentDidMount() {
    this.props.fetchUserServiceTypes();
  }
  render() {
    const { user_service_types } = this.props;
    return (
      <main>
        <div id="results">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4>
                  <strong>Showing 0</strong> of 3 results
                </h4>
              </div>
              <div className="col-md-6">
                <div className="search_bar_list">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ex. Specialist"
                  />
                  <input type="submit" defaultValue="Search" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {user_service_types.map(user_service_type => (
                  <div className="col-md-4">
                    <div className="box_list">
                      <a href="#0" className="wish_bt" />
                      <figure>
                        <a href="detail-page.html">
                          <img
                            src="http://via.placeholder.com/565x565.jpg"
                            className="img-fluid"
                            alt="test"
                          />
                          <div className="preview">
                            <span>Read more</span>
                          </div>
                        </a>
                      </figure>
                      <div className="wrapper">
                        <small>{user_service_type.id_service_type}</small>
                        <h3>{user_service_type.id_user}</h3>
                        <p>{user_service_type.price}</p>
                        <span className="rating">
                          <i className="icon_star voted" />
                          <i className="icon_star voted" />
                          <i className="icon_star voted" />
                          <i className="icon_star" />
                          <i className="icon_star" /> <small>(145)</small>
                        </span>
                        <a
                          href="badges.html"
                          data-toggle="tooltip"
                          data-placement="top"
                          data-original-title="Badge Level"
                          className="badge_list_1"
                        >
                          <img
                            src="img/badges/badge_1.svg"
                            width={15}
                            height={15}
                            alt="test"
                          />
                        </a>
                      </div>
                      <ul>
                        <li>
                          <Link to="/">Book now</Link>
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
            <aside className="col-lg-4" id="sidebar">
              <div id="map_listing" className="normal_list" />
            </aside>
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
  { fetchUserServiceTypes }
)(ListProvider);
