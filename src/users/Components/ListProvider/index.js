import React, { Component } from "react";
// import "../../../assets/css/admin.css";
import "../../../index.css";
import "../../../assets/css/style.css";
import "../../../assets/css/menu.css";
import "../../../assets/css/vendors.css";
import "../../../assets/css/icon_fonts/css/all_icons_min.css";
import "../../../assets/css/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { fetchUserServiceTypes } from "../../../store/actions/user_service_types";

class ListProvider extends Component {
  render() {
    return (
      <main>
        <div id="results">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4>
                  <strong>Showing 10</strong> of 140 results
                </h4>
              </div>
              <div className="col-md-6">
                <div className="search_bar_list">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ex. Specialist, Name, Doctor..."
                  />
                  <input type="submit" defaultValue="Search" />
                </div>
              </div>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /filters */}
        <div className="container margin_60_35">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="box_list">
                    <a href="#0" className="wish_bt" />
                    <figure>
                      <a href="detail-page.html">
                        <img
                          src="http://via.placeholder.com/565x565.jpg"
                          className="img-fluid"
                          alt
                        />
                        <div className="preview">
                          <span>Read more</span>
                        </div>
                      </a>
                    </figure>
                    <div className="wrapper">
                      <small>Psicologist</small>
                      <h3>Dr. Sickman</h3>
                      <p>
                        Id placerat tacimates definitionem sea, prima quidam vim
                        no. Duo nobis persecuti cuodo....
                      </p>
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
                          alt
                        />
                      </a>
                    </div>
                    <ul>
                      <li>
                        <a href="#0" onclick="onHtmlClick('Doctors', 0)">
                          <i className="icon_pin_alt" />
                          View on map
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                          target="_blank"
                        >
                          <i className="icon_pin_alt" />
                          Directions
                        </a>
                      </li>
                      <li>
                        <a href="detail-page.html">Book now</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /box_list */}
                <div className="col-md-4">
                  <div className="box_list">
                    <a href="#0" className="wish_bt" />
                    <figure>
                      <a href="detail-page.html">
                        <img
                          src="http://via.placeholder.com/565x565.jpg"
                          className="img-fluid"
                          alt
                        />
                        <div className="preview">
                          <span>Read more</span>
                        </div>
                      </a>
                    </figure>
                    <div className="wrapper">
                      <small>Psicologist</small>
                      <h3>Dr. Will Griever</h3>
                      <p>
                        Id placerat tacimates definitionem sea, prima quidam vim
                        no. Duo nobis persecuti cuodo....
                      </p>
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
                          src="img/badges/badge_2.svg"
                          width={15}
                          height={15}
                          alt
                        />
                      </a>
                    </div>
                    <ul>
                      <li>
                        <a href="#0" onclick="onHtmlClick('Doctors', 1)">
                          <i className="icon_pin_alt" />
                          View on map
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                          target="_blank"
                        >
                          <i className="icon_pin_alt" />
                          Directions
                        </a>
                      </li>
                      <li>
                        <a href="detail-page.html">Book now</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /box_list */}
                <div className="col-md-4">
                  <div className="box_list">
                    <a href="#0" className="wish_bt" />
                    <figure>
                      <a href="detail-page.html">
                        <img
                          src="http://via.placeholder.com/565x565.jpg"
                          className="img-fluid"
                          alt
                        />
                        <div className="preview">
                          <span>Read more</span>
                        </div>
                      </a>
                    </figure>
                    <div className="wrapper">
                      <small>Pediatrician</small>
                      <h3>Dr. Jhoanna Steel</h3>
                      <p>
                        Id placerat tacimates definitionem sea, prima quidam vim
                        no. Duo nobis persecuti cuodo....
                      </p>
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
                          src="img/badges/badge_3.svg"
                          width={15}
                          height={15}
                          alt
                        />
                      </a>
                    </div>
                    <ul>
                      <li>
                        <a href="#0" onclick="onHtmlClick('Doctors', 2)">
                          <i className="icon_pin_alt" />
                          View on map
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                          target="_blank"
                        >
                          <i className="icon_pin_alt" />
                          Directions
                        </a>
                      </li>
                      <li>
                        <a href="detail-page.html">Book now</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /box_list */}
                <div className="col-md-4">
                  <div className="box_list">
                    <a href="#0" className="wish_bt" />
                    <figure>
                      <a href="detail-page.html">
                        <img
                          src="http://via.placeholder.com/565x565.jpg"
                          className="img-fluid"
                          alt
                        />
                        <div className="preview">
                          <span>Read more</span>
                        </div>
                      </a>
                    </figure>
                    <div className="wrapper">
                      <small>Pediatrician</small>
                      <h3>Dr. Slaughter</h3>
                      <p>
                        Id placerat tacimates definitionem sea, prima quidam vim
                        no. Duo nobis persecuti cuodo....
                      </p>
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
                          src="img/badges/badge_3.svg"
                          width={15}
                          height={15}
                          alt
                        />
                      </a>
                    </div>
                    <ul>
                      <li>
                        <a href="#0" onclick="onHtmlClick('Doctors', 3)">
                          <i className="icon_pin_alt" />
                          View on map
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                          target="_blank"
                        >
                          <i className="icon_pin_alt" />
                          Directions
                        </a>
                      </li>
                      <li>
                        <a href="detail-page.html">Book now</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /box_list */}
                <div className="col-md-4">
                  <div className="box_list">
                    <a href="#0" className="wish_bt" />
                    <figure>
                      <a href="detail-page.html">
                        <img
                          src="http://via.placeholder.com/565x565.jpg"
                          className="img-fluid"
                          alt
                        />
                        <div className="preview">
                          <span>Read more</span>
                        </div>
                      </a>
                    </figure>
                    <div className="wrapper">
                      <small>Psicologist</small>
                      <h3>Dr. Watchmaker</h3>
                      <p>
                        Id placerat tacimates definitionem sea, prima quidam vim
                        no. Duo nobis persecuti cuodo....
                      </p>
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
                          src="img/badges/badge_4.svg"
                          width={15}
                          height={15}
                          alt
                        />
                      </a>
                    </div>
                    <ul>
                      <li>
                        <a href="#0" onclick="onHtmlClick('Doctors', 1)">
                          <i className="icon_pin_alt" />
                          View on map
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                          target="_blank"
                        >
                          <i className="icon_pin_alt" />
                          Directions
                        </a>
                      </li>
                      <li>
                        <a href="detail-page.html">Book now</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /box_list */}
                <div className="col-md-4">
                  <div className="box_list">
                    <a href="#0" className="wish_bt" />
                    <figure>
                      <a href="detail-page.html">
                        <img
                          src="http://via.placeholder.com/565x565.jpg"
                          className="img-fluid"
                          alt
                        />
                        <div className="preview">
                          <span>Read more</span>
                        </div>
                      </a>
                    </figure>
                    <div className="wrapper">
                      <small>Psicologist - Pediatrician</small>
                      <h3>Dr. Sunshine</h3>
                      <p>
                        Id placerat tacimates definitionem sea, prima quidam vim
                        no. Duo nobis persecuti cuodo....
                      </p>
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
                          src="img/badges/badge_4.svg"
                          width={15}
                          height={15}
                          alt
                        />
                      </a>
                    </div>
                    <ul>
                      <li>
                        <a href="#0" onclick="onHtmlClick('Doctors', 2)">
                          <i className="icon_pin_alt" />
                          View on map
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361"
                          target="_blank"
                        >
                          <i className="icon_pin_alt" />
                          Directions
                        </a>
                      </li>
                      <li>
                        <a href="detail-page.html">Book now</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /box_list */}
              </div>
              {/* /row */}
              <nav aria-label className="add_top_20">
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
              {/* /pagination */}
            </div>
            {/* /col */}
            <aside className="col-lg-4" id="sidebar">
              <div id="map_listing" className="normal_list" />
            </aside>
            {/* /aside */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </main>
    );
  }
}

export default ListProvider;
